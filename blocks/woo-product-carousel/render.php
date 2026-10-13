<?php
/**
 * Server render for the BW Product Carousel block.
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

if ( ! class_exists( 'WooCommerce' ) || ! function_exists( 'wc_get_product' ) || ! post_type_exists( 'product' ) ) {
	return '';
}

$allowed_orderby = array( 'date', 'title', 'menu_order', 'modified', 'rand', 'price', 'popularity', 'rating' );
$allowed_order   = array( 'ASC', 'DESC' );

$per_page = isset( $attributes['perPage'] ) ? absint( $attributes['perPage'] ) : 6;
$per_page = $per_page > 0 ? min( $per_page, 24 ) : 6;
$columns  = isset( $attributes['columns'] ) ? absint( $attributes['columns'] ) : 3;
$columns  = min( max( $columns, 1 ), 4 );
$order_by = isset( $attributes['orderBy'] ) ? sanitize_key( $attributes['orderBy'] ) : 'date';
$order_by = in_array( $order_by, $allowed_orderby, true ) ? $order_by : 'date';
$order    = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'DESC';
$order    = in_array( $order, $allowed_order, true ) ? $order : 'DESC';

$show_image    = ! isset( $attributes['showImage'] ) || (bool) $attributes['showImage'];
$show_category = ! empty( $attributes['showCategory'] );
$show_rating   = ! isset( $attributes['showRating'] ) || (bool) $attributes['showRating'];
$show_price    = ! isset( $attributes['showPrice'] ) || (bool) $attributes['showPrice'];
$show_cart     = ! isset( $attributes['showAddToCart'] ) || (bool) $attributes['showAddToCart'];
$featured_only = ! empty( $attributes['featuredOnly'] );
$on_sale_only  = ! empty( $attributes['onSaleOnly'] );

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
	'post_type'           => 'product',
	'post_status'         => 'publish',
	'posts_per_page'      => $per_page,
	'ignore_sticky_posts' => true,
	'no_found_rows'       => true,
	'order'               => $order,
);

switch ( $order_by ) {
	case 'price':
		$query_args['meta_key'] = '_price'; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
		$query_args['orderby']  = 'meta_value_num';
		break;
	case 'popularity':
		$query_args['meta_key'] = 'total_sales'; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
		$query_args['orderby']  = 'meta_value_num';
		break;
	case 'rating':
		$query_args['meta_key'] = '_wc_average_rating'; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
		$query_args['orderby']  = 'meta_value_num';
		break;
	default:
		$query_args['orderby'] = $order_by;
		break;
}

$tax_query = array();

if ( ! empty( $category_ids ) ) {
	$tax_query[] = array(
		'taxonomy' => 'product_cat',
		'field'    => 'term_id',
		'terms'    => $category_ids,
	);
}

if ( $featured_only ) {
	$tax_query[] = array(
		'taxonomy' => 'product_visibility',
		'field'    => 'name',
		'terms'    => 'featured',
	);
}

if ( count( $tax_query ) > 1 ) {
	$tax_query['relation'] = 'AND';
}

if ( ! empty( $tax_query ) ) {
	$query_args['tax_query'] = $tax_query; // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
}

if ( $on_sale_only ) {
	$on_sale_ids = function_exists( 'wc_get_product_ids_on_sale' ) ? wc_get_product_ids_on_sale() : array();

	if ( empty( $on_sale_ids ) ) {
		return '';
	}

	$query_args['post__in'] = array_map( 'absint', $on_sale_ids );
}

$product_query = new WP_Query( $query_args );

if ( ! $product_query->have_posts() ) {
	return '';
}

$total_slides = (int) $product_query->post_count;
$page_count   = (int) ceil( $total_slides / $columns );
$image_size   = 'woocommerce_thumbnail';
$extra_class  = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id      = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-woo-product-carousel bw-woo-product-carousel--cols-' . $columns . ' ' . $extra_class ),
	'role'  => 'region',
	'aria-roledescription' => __( 'carousel', 'blockwriter' ),
	'aria-label' => __( 'Product carousel', 'blockwriter' ),
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
	<div class="bw-woo-product-carousel__viewport">
		<ul class="bw-woo-product-carousel__track">
			<?php
			$slide_index = 0;

			while ( $product_query->have_posts() ) :
				$product_query->the_post();

				$product = wc_get_product( get_the_ID() );

				if ( ! $product instanceof WC_Product ) {
					continue;
				}

				++$slide_index;
				?>
				<li
					class="bw-woo-product-carousel__slide"
					role="group"
					aria-roledescription="<?php esc_attr_e( 'slide', 'blockwriter' ); ?>"
					aria-label="<?php
						/* translators: 1: slide number, 2: total slides. */
						echo esc_attr( sprintf( __( '%1$d of %2$d', 'blockwriter' ), $slide_index, $total_slides ) );
					?>"
				>
					<article class="bw-woo-product-carousel__card">
						<?php if ( $show_image ) : ?>
							<div class="bw-woo-product-carousel__media">
								<a href="<?php echo esc_url( $product->get_permalink() ); ?>">
									<?php echo wp_kses_post( $product->get_image( $image_size, array( 'loading' => 'lazy' ) ) ); ?>
								</a>

								<?php if ( $product->is_on_sale() ) : ?>
									<span class="bw-woo-product-carousel__badge"><?php esc_html_e( 'Sale', 'blockwriter' ); ?></span>
								<?php endif; ?>
							</div>
						<?php endif; ?>

						<div class="bw-woo-product-carousel__body">
							<?php if ( $show_category ) : ?>
								<div class="bw-woo-product-carousel__terms">
									<?php echo wp_kses_post( wc_get_product_category_list( $product->get_id(), ', ' ) ); ?>
								</div>
							<?php endif; ?>

							<h3 class="bw-woo-product-carousel__title">
								<a href="<?php echo esc_url( $product->get_permalink() ); ?>">
									<?php echo esc_html( $product->get_name() ); ?>
								</a>
							</h3>

							<?php if ( $show_rating && function_exists( 'wc_get_rating_html' ) ) : ?>
								<?php echo wp_kses_post( wc_get_rating_html( $product->get_average_rating() ) ); ?>
							<?php endif; ?>

							<?php if ( $show_price ) : ?>
								<div class="bw-woo-product-carousel__price">
									<?php echo wp_kses_post( $product->get_price_html() ); ?>
								</div>
							<?php endif; ?>

							<?php if ( $show_cart && $product->is_purchasable() && $product->is_in_stock() ) : ?>
								<a
									href="<?php echo esc_url( $product->add_to_cart_url() ); ?>"
									data-quantity="1"
									data-product_id="<?php echo esc_attr( $product->get_id() ); ?>"
									data-product_sku="<?php echo esc_attr( $product->get_sku() ); ?>"
									class="<?php echo esc_attr( 'bw-woo-product-carousel__cart button ' . ( $product->is_type( 'simple' ) ? 'ajax_add_to_cart add_to_cart_button' : '' ) ); ?>"
									rel="nofollow"
								>
									<?php echo esc_html( $product->add_to_cart_text() ); ?>
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
			class="bw-woo-product-carousel__arrow bw-woo-product-carousel__arrow--prev"
			aria-label="<?php esc_attr_e( 'Previous slide', 'blockwriter' ); ?>"
		>
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
			</svg>
		</button>

		<button
			type="button"
			class="bw-woo-product-carousel__arrow bw-woo-product-carousel__arrow--next"
			aria-label="<?php esc_attr_e( 'Next slide', 'blockwriter' ); ?>"
		>
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
				<path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor" />
			</svg>
		</button>
	<?php endif; ?>

	<?php if ( $show_dots && $page_count > 1 ) : ?>
		<ul class="bw-woo-product-carousel__dots">
			<?php for ( $page = 1; $page <= $page_count; ++$page ) : ?>
				<li>
					<button
						type="button"
						class="bw-woo-product-carousel__dot"
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
