<?php
/**
 * Server render for the BW Post Carousel block.
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

$autoplay   = ! empty( $attributes['autoplay'] );
$interval   = isset( $attributes['interval'] ) ? absint( $attributes['interval'] ) : 5000;
$interval   = min( max( $interval, 2000 ), 15000 );
$show_arrow = ! isset( $attributes['showArrows'] ) || (bool) $attributes['showArrows'];
$show_dots  = ! isset( $attributes['showDots'] ) || (bool) $attributes['showDots'];

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

$carousel_query = new WP_Query( $query_args );

if ( ! $carousel_query->have_posts() ) {
	return '';
}

$total_slides = (int) $carousel_query->post_count;
$page_count   = (int) ceil( $total_slides / $columns );

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-post-carousel bw-post-carousel--cols-' . $columns . ' ' . $extra_class ),
	'role'  => 'region',
	'aria-roledescription' => __( 'carousel', 'blockwriter' ),
	'aria-label' => __( 'Post carousel', 'blockwriter' ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div
	<?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	data-columns="<?php echo esc_attr( $columns ); ?>"
	data-autoplay="<?php echo esc_attr( $autoplay ? 'true' : 'false' ); ?>"
	data-interval="<?php echo esc_attr( $interval ); ?>"
>
	<div class="bw-post-carousel__viewport">
		<ul class="bw-post-carousel__track">
			<?php
			$slide_index = 0;

			while ( $carousel_query->have_posts() ) :
				$carousel_query->the_post();
				++$slide_index;
				?>
				<li
					class="bw-post-carousel__slide"
					role="group"
					aria-roledescription="<?php esc_attr_e( 'slide', 'blockwriter' ); ?>"
					aria-label="<?php
						/* translators: 1: slide number, 2: total slides. */
						echo esc_attr( sprintf( __( '%1$d of %2$d', 'blockwriter' ), $slide_index, $total_slides ) );
					?>"
				>
					<article class="bw-post-carousel__card">
						<?php if ( $show_image && has_post_thumbnail() ) : ?>
							<a class="bw-post-carousel__image" href="<?php echo esc_url( get_permalink() ); ?>">
								<?php the_post_thumbnail( $image_size, array( 'loading' => 'lazy' ) ); ?>
							</a>
						<?php endif; ?>

						<div class="bw-post-carousel__body">
							<h3 class="bw-post-carousel__title">
								<a href="<?php echo esc_url( get_permalink() ); ?>">
									<?php echo esc_html( get_the_title() ); ?>
								</a>
							</h3>

							<?php if ( $show_date || $show_author || ( $show_category && 'post' === $post_type ) ) : ?>
								<div class="bw-post-carousel__meta">
									<?php if ( $show_date ) : ?>
										<time class="bw-post-carousel__date" datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>">
											<?php echo esc_html( get_the_date() ); ?>
										</time>
									<?php endif; ?>

									<?php if ( $show_author ) : ?>
										<span class="bw-post-carousel__author">
											<?php echo esc_html( get_the_author() ); ?>
										</span>
									<?php endif; ?>

									<?php if ( $show_category && 'post' === $post_type ) : ?>
										<span class="bw-post-carousel__terms">
											<?php echo wp_kses_post( get_the_category_list( ', ' ) ); ?>
										</span>
									<?php endif; ?>
								</div>
							<?php endif; ?>

							<?php if ( $show_excerpt ) : ?>
								<p class="bw-post-carousel__excerpt">
									<?php echo esc_html( wp_trim_words( get_the_excerpt(), $excerpt_length ) ); ?>
								</p>
							<?php endif; ?>

							<?php if ( '' !== $read_more ) : ?>
								<a class="bw-post-carousel__more" href="<?php echo esc_url( get_permalink() ); ?>">
									<?php echo esc_html( $read_more ); ?>
								</a>
							<?php endif; ?>
						</div>
					</article>
				</li>
				<?php
			endwhile;
			?>
		</ul>
	</div>

	<?php if ( $show_arrow && $page_count > 1 ) : ?>
		<button
			type="button"
			class="bw-post-carousel__arrow bw-post-carousel__arrow--prev"
			aria-label="<?php esc_attr_e( 'Previous slide', 'blockwriter' ); ?>"
		>
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
			</svg>
		</button>

		<button
			type="button"
			class="bw-post-carousel__arrow bw-post-carousel__arrow--next"
			aria-label="<?php esc_attr_e( 'Next slide', 'blockwriter' ); ?>"
		>
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor" />
			</svg>
		</button>
	<?php endif; ?>

	<?php if ( $show_dots && $page_count > 1 ) : ?>
		<ul class="bw-post-carousel__dots">
			<?php for ( $page = 1; $page <= $page_count; ++$page ) : ?>
				<li>
					<button
						type="button"
						class="bw-post-carousel__dot"
						aria-label="<?php
							/* translators: %d: page number. */
							echo esc_attr( sprintf( __( 'Go to page %d', 'blockwriter' ), $page ) );
						?>"
					></button>
				</li>
			<?php endfor; ?>
		</ul>
	<?php endif; ?>
</div>
<?php
wp_reset_postdata();

return ob_get_clean();
