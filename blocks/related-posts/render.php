<?php
/**
 * Server render for the BW Related Posts block.
 *
 * @package BlockWriter
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block content.
 * @var WP_Block $block      Block instance.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$allowed_orderby = array( 'date', 'title', 'modified', 'rand' );
$allowed_order   = array( 'ASC', 'DESC' );

$per_page  = isset( $attributes['perPage'] ) ? absint( $attributes['perPage'] ) : 3;
$per_page  = $per_page > 0 ? min( $per_page, 12 ) : 3;
$columns   = isset( $attributes['columns'] ) ? absint( $attributes['columns'] ) : 3;
$columns   = min( max( $columns, 1 ), 4 );
$order_by  = isset( $attributes['orderBy'] ) ? sanitize_key( $attributes['orderBy'] ) : 'date';
$order_by  = in_array( $order_by, $allowed_orderby, true ) ? $order_by : 'date';
$order     = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'DESC';
$order     = in_array( $order, $allowed_order, true ) ? $order : 'DESC';

$show_image     = ! isset( $attributes['showFeaturedImage'] ) || (bool) $attributes['showFeaturedImage'];
$show_excerpt   = ! empty( $attributes['showExcerpt'] );
$show_date      = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
$excerpt_length = isset( $attributes['excerptLength'] ) ? absint( $attributes['excerptLength'] ) : 20;
$excerpt_length = min( max( $excerpt_length, 5 ), 60 );
$image_size     = isset( $attributes['imageSize'] ) ? sanitize_key( $attributes['imageSize'] ) : 'medium_large';
$read_more      = isset( $attributes['readMoreText'] ) ? (string) $attributes['readMoreText'] : '';

/*
 * Resolve the current entry. Front end rendering uses block context; the
 * editor preview passes a post_id hint so related items can be previewed.
 */
$current_id = 0;

if ( ! empty( $block->context['postId'] ) ) {
	$current_id = absint( $block->context['postId'] );
} elseif ( isset( $_GET['post_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	$current_id = absint( wp_unslash( $_GET['post_id'] ) );
} elseif ( get_the_ID() ) {
	$current_id = absint( get_the_ID() );
}

$post_type = 'post';

if ( $current_id && get_post( $current_id ) ) {
	$post_type = get_post_type( $current_id );
} elseif ( ! empty( $block->context['postType'] ) ) {
	$candidate = sanitize_key( $block->context['postType'] );

	if ( post_type_exists( $candidate ) ) {
		$post_type = $candidate;
	}
}

$post_type_object = get_post_type_object( $post_type );

if ( ! $post_type_object || empty( $post_type_object->public ) ) {
	return '';
}

$tax_query = array();

if ( $current_id ) {
	$taxonomies = get_object_taxonomies( $post_type, 'names' );

	foreach ( $taxonomies as $taxonomy ) {
		if ( ! is_taxonomy_viewable( $taxonomy ) ) {
			continue;
		}

		$terms = get_the_terms( $current_id, $taxonomy );

		if ( is_wp_error( $terms ) || empty( $terms ) ) {
			continue;
		}

		$term_ids = wp_list_pluck( $terms, 'term_id' );

		$tax_query[] = array(
			'taxonomy' => $taxonomy,
			'field'    => 'term_id',
			'terms'    => array_map( 'absint', $term_ids ),
		);
	}
}

if ( count( $tax_query ) > 1 ) {
	$tax_query['relation'] = 'OR';
}

$query_args = array(
	'post_type'           => $post_type,
	'post_status'         => 'publish',
	'posts_per_page'      => $per_page,
	'orderby'             => $order_by,
	'order'               => $order,
	'ignore_sticky_posts' => true,
	'no_found_rows'       => true,
);

if ( $current_id ) {
	$query_args['post__not_in'] = array( $current_id );
}

if ( ! empty( $tax_query ) ) {
	$query_args['tax_query'] = $tax_query; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
}

$related_query = new WP_Query( $query_args );

if ( ! $related_query->have_posts() ) {
	return '';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-related-posts ' . $extra_class ),
	'style' => '--bw-related-columns:' . $columns . ';',
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php
	while ( $related_query->have_posts() ) :
		$related_query->the_post();
		?>
		<article class="bw-related-posts__item">
			<?php if ( $show_image && has_post_thumbnail() ) : ?>
				<a class="bw-related-posts__image" href="<?php echo esc_url( get_permalink() ); ?>">
					<?php the_post_thumbnail( $image_size, array( 'loading' => 'lazy' ) ); ?>
				</a>
			<?php endif; ?>

			<div class="bw-related-posts__body">
				<h3 class="bw-related-posts__title">
					<a href="<?php echo esc_url( get_permalink() ); ?>">
						<?php echo esc_html( get_the_title() ); ?>
					</a>
				</h3>

				<?php if ( $show_date ) : ?>
					<time class="bw-related-posts__date" datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>">
						<?php echo esc_html( get_the_date() ); ?>
					</time>
				<?php endif; ?>

				<?php if ( $show_excerpt ) : ?>
					<p class="bw-related-posts__excerpt">
						<?php echo esc_html( wp_trim_words( get_the_excerpt(), $excerpt_length ) ); ?>
					</p>
				<?php endif; ?>

				<?php if ( '' !== $read_more ) : ?>
					<a class="bw-related-posts__more" href="<?php echo esc_url( get_permalink() ); ?>">
						<?php echo esc_html( $read_more ); ?>
					</a>
				<?php endif; ?>
			</div>
		</article>
		<?php
	endwhile;
	?>
</div>
<?php
wp_reset_postdata();

return ob_get_clean();
