<?php
/**
 * Server render for the BW Product Card block.
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

$is_preview = defined( 'REST_REQUEST' ) && REST_REQUEST;

/*
 * Resolve the product from block context (product templates and query loops),
 * falling back to the current entry. The editor preview passes a `post_id`
 * hint because block context is not available over the REST request.
 */
$product_id = 0;

if ( ! empty( $block->context['postId'] ) ) {
	$product_id = absint( $block->context['postId'] );
} else {
	$query_post_id = isset( $_GET['post_id'] ) ? absint( wp_unslash( $_GET['post_id'] ) ) : 0; // phpcs:ignore WordPress.Security.NonceVerification.Recommended

	if ( $query_post_id ) {
		$product_id = $query_post_id;
	} elseif ( get_the_ID() ) {
		$product_id = absint( get_the_ID() );
	}
}

$product   = $product_id ? wc_get_product( $product_id ) : false;
$is_sample = false;

if ( $product instanceof WC_Product ) {
	$card_image      = $product->get_image( 'woocommerce_thumbnail', array( 'class' => 'bw-woo-product-card__image' ) );
	$card_permalink  = $product->get_permalink();
	$card_name       = $product->get_name();
	$card_categories = wc_get_product_category_list( $product->get_id(), ', ' );
	$card_price      = $product->get_price_html();

	$card_rating = '';
	if ( $product->get_average_rating() > 0 ) {
		$card_rating = wc_get_rating_html( $product->get_average_rating(), $product->get_review_count() );
	}

	$card_cart_url   = $product->add_to_cart_url();
	$card_cart_text  = $product->add_to_cart_text();
	$card_cart_class = 'button add_to_cart_button';

	if ( $product->is_type( 'simple' ) && $product->is_purchasable() && $product->is_in_stock() ) {
		$card_cart_class .= ' ajax_add_to_cart';
	}

	$card_cart_data = ' data-quantity="1" data-product_id="' . esc_attr( (string) $product->get_id() ) . '"';
} elseif ( $is_preview ) {
	$is_sample = true;

	$card_image      = '<div class="bw-woo-product-card__image bw-woo-product-card__image--placeholder" aria-hidden="true"></div>';
	$card_permalink  = '#';
	$card_name       = __( 'Sample product', 'blockwriter' );
	$card_categories = '<a href="#">' . esc_html__( 'Sample category', 'blockwriter' ) . '</a>';
	$card_rating     = wc_get_rating_html( 4.5, 18 );
	$card_price      = '<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>49.00</bdi></span>';
	$card_cart_url   = '#';
	$card_cart_text  = __( 'Add to cart', 'blockwriter' );
	$card_cart_class = 'button add_to_cart_button';
	$card_cart_data  = '';
} else {
	return '';
}

$show_image       = ! isset( $attributes['showImage'] ) || (bool) $attributes['showImage'];
$show_category    = isset( $attributes['showCategory'] ) && (bool) $attributes['showCategory'];
$show_rating      = ! isset( $attributes['showRating'] ) || (bool) $attributes['showRating'];
$show_price       = ! isset( $attributes['showPrice'] ) || (bool) $attributes['showPrice'];
$show_add_to_cart = ! isset( $attributes['showAddToCart'] ) || (bool) $attributes['showAddToCart'];

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$classes = 'bw-woo-product-card';

if ( $is_sample ) {
	$classes .= ' bw-woo-product-card--preview';
}

if ( '' !== $extra_class ) {
	$classes .= ' ' . $extra_class;
}

$extra_attributes = array(
	'class' => trim( $classes ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

$has_image    = $show_image && '' !== $card_image;
$has_category = $show_category && '' !== $card_categories;
$has_rating   = $show_rating && '' !== $card_rating;
$has_price    = $show_price && '' !== $card_price;
$has_cart     = $show_add_to_cart && '' !== $card_cart_url;

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="bw-woo-product-card__inner">
		<?php if ( $has_image ) : ?>
			<div class="bw-woo-product-card__media">
				<a class="bw-woo-product-card__image-link" href="<?php echo esc_url( $card_permalink ); ?>">
					<?php echo wp_kses_post( $card_image ); ?>
				</a>
			</div>
		<?php endif; ?>

		<div class="bw-woo-product-card__body">
			<?php if ( $has_category ) : ?>
				<div class="bw-woo-product-card__category"><?php echo wp_kses_post( $card_categories ); ?></div>
			<?php endif; ?>

			<h3 class="bw-woo-product-card__title">
				<a class="bw-woo-product-card__title-link" href="<?php echo esc_url( $card_permalink ); ?>">
					<?php echo esc_html( $card_name ); ?>
				</a>
			</h3>

			<?php if ( $has_rating ) : ?>
				<div class="bw-woo-product-card__rating"><?php echo wp_kses_post( $card_rating ); ?></div>
			<?php endif; ?>

			<?php if ( $has_price ) : ?>
				<div class="bw-woo-product-card__price"><?php echo wp_kses_post( $card_price ); ?></div>
			<?php endif; ?>

			<?php if ( $has_cart ) : ?>
				<div class="bw-woo-product-card__actions">
					<a
						class="<?php echo esc_attr( $card_cart_class ); ?>"
						href="<?php echo esc_url( $card_cart_url ); ?>"
						<?php echo $card_cart_data; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						rel="nofollow"
					>
						<?php echo esc_html( $card_cart_text ); ?>
					</a>
				</div>
			<?php endif; ?>
		</div>
	</div>
</div>
<?php
return ob_get_clean();
