<?php
/**
 * Server render for the BW Product Price block.
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
} elseif ( isset( $_GET['post_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	$product_id = absint( wp_unslash( $_GET['post_id'] ) );
} elseif ( get_the_ID() ) {
	$product_id = absint( get_the_ID() );
}

$product    = $product_id ? wc_get_product( $product_id ) : false;
$price_html = '';
$is_sample  = false;

if ( $product instanceof WC_Product ) {
	$price_html = $product->get_price_html();
} elseif ( $is_preview ) {
	$price_html = '<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>49.00</bdi></span>';
	$is_sample  = true;
}

if ( '' === $price_html ) {
	return '';
}

$text_align  = isset( $attributes['textAlign'] ) ? sanitize_key( $attributes['textAlign'] ) : '';
$text_align  = in_array( $text_align, array( 'left', 'center', 'right' ), true ) ? $text_align : '';
$font_size   = isset( $attributes['fontSize'] ) ? absint( $attributes['fontSize'] ) : 0;
$font_size   = min( $font_size, 120 );
$price_color = isset( $attributes['priceColor'] ) ? sanitize_hex_color( (string) $attributes['priceColor'] ) : '';
$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$styles = array();

if ( $font_size > 0 ) {
	$styles[] = 'font-size:' . $font_size . 'px';
}

if ( $price_color ) {
	$styles[] = 'color:' . $price_color;
}

if ( $text_align ) {
	$styles[] = 'text-align:' . $text_align;
}

$classes = 'bw-woo-product-price';

if ( $is_sample ) {
	$classes .= ' bw-woo-product-price--preview';
}

if ( '' !== $extra_class ) {
	$classes .= ' ' . $extra_class;
}

$extra_attributes = array(
	'class' => trim( $classes ),
);

if ( ! empty( $styles ) ) {
	$extra_attributes['style'] = implode( ';', $styles ) . ';';
}

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="bw-woo-product-price__value">
		<?php echo wp_kses_post( $price_html ); ?>
	</div>
</div>
<?php
return ob_get_clean();
