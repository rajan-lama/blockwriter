<?php
/**
 * Server render for the BW Post Grid block.
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

$post_type = isset( $attributes['postType'] ) ? sanitize_key( $attributes['postType'] ) : 'post';

if ( ! post_type_exists( $post_type ) ) {
	$post_type = 'post';
}

$post_type_object = get_post_type_object( $post_type );

if ( ! $post_type_object || empty( $post_type_object->public ) ) {
	return '';
}

$allowed_orderby = array( 'date', 'title', 'menu_order', 'modified', 'rand' );
$allowed_order   = array( 'ASC', 'DESC' );

$per_page  = isset( $attributes['perPage'] ) ? absint( $attributes['perPage'] ) : 6;
$per_page  = $per_page > 0 ? min( $per_page, 24 ) : 6;
$columns   = isset( $attributes['columns'] ) ? absint( $attributes['columns'] ) : 3;
$columns   = min( max( $columns, 1 ), 4 );
$layout    = isset( $attributes['layout'] ) ? sanitize_key( $attributes['layout'] ) : 'grid';
$layout    = in_array( $layout, array( 'grid', 'list' ), true ) ? $layout : 'grid';
$order_by  = isset( $attributes['orderBy'] ) ? sanitize_key( $attributes['orderBy'] ) : 'date';
$order_by  = in_array( $order_by, $allowed_orderby, true ) ? $order_by : 'date';
$order     = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'DESC';
$order     = in_array( $order, $allowed_order, true ) ? $order : 'DESC';

$show_image     = ! isset( $attributes['showFeaturedImage'] ) || (bool) $attributes['showFeaturedImage'];
$show_excerpt   = ! isset( $attributes['showExcerpt'] ) || (bool) $attributes['showExcerpt'];
$show_date      = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
$show_author    = ! empty( $attributes['showAuthor'] );
$show_category  = ! empty( $attributes['showCategory'] );
$excerpt_length = isset( $attributes['excerptLength'] ) ? absint( $attributes['excerptLength'] ) : 20;
$excerpt_length = min( max( $excerpt_length, 5 ), 60 );
$image_size     = isset( $attributes['imageSize'] ) ? sanitize_key( $attributes['imageSize'] ) : 'medium_large';
$read_more      = isset( $attributes['readMoreText'] ) ? (string) $attributes['readMoreText'] : '';

$category_ids = array();
if ( ! empty( $attributes['categoryIds'] ) && is_array( $attributes['categoryIds'] ) ) {
	$category_ids = array_filter( array_map( 'absint', $attributes['categoryIds'] ) );
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

if ( ! empty( $category_ids ) && 'post' === $post_type ) {
	$query_args['cat'] = $category_ids;
}

$post_grid_query = new WP_Query( $query_args );

if ( ! $post_grid_query->have_posts() ) {
	return '';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-post-grid bw-post-grid--' . $layout . ' ' . $extra_class ),
	'style' => '--bw-post-grid-columns:' . $columns . ';',
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php
	while ( $post_grid_query->have_posts() ) :
		$post_grid_query->the_post();
		?>
		<article class="bw-post-grid__item">
			<?php if ( $show_image && has_post_thumbnail() ) : ?>
				<a class="bw-post-grid__image" href="<?php echo esc_url( get_permalink() ); ?>">
					<?php the_post_thumbnail( $image_size, array( 'loading' => 'lazy' ) ); ?>
				</a>
			<?php endif; ?>

			<div class="bw-post-grid__body">
				<h3 class="bw-post-grid__title">
					<a href="<?php echo esc_url( get_permalink() ); ?>">
						<?php echo esc_html( get_the_title() ); ?>
					</a>
				</h3>

				<?php if ( $show_date || $show_author || ( $show_category && 'post' === $post_type ) ) : ?>
					<div class="bw-post-grid__meta">
						<?php if ( $show_date ) : ?>
							<time class="bw-post-grid__date" datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>">
								<?php echo esc_html( get_the_date() ); ?>
							</time>
						<?php endif; ?>

						<?php if ( $show_author ) : ?>
							<span class="bw-post-grid__author">
								<?php echo esc_html( get_the_author() ); ?>
							</span>
						<?php endif; ?>

						<?php if ( $show_category && 'post' === $post_type ) : ?>
							<span class="bw-post-grid__terms">
								<?php echo wp_kses_post( get_the_category_list( ', ' ) ); ?>
							</span>
						<?php endif; ?>
					</div>
				<?php endif; ?>

				<?php if ( $show_excerpt ) : ?>
					<p class="bw-post-grid__excerpt">
						<?php echo esc_html( wp_trim_words( get_the_excerpt(), $excerpt_length ) ); ?>
					</p>
				<?php endif; ?>

				<?php if ( '' !== $read_more ) : ?>
					<a class="bw-post-grid__more" href="<?php echo esc_url( get_permalink() ); ?>">
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
