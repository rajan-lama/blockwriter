<?php
/**
 * Server render for the BW Add To Cart block.
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

$product     = $product_id ? wc_get_product( $product_id ) : false;
$is_sample   = false;
$link_url    = '#';
$link_label  = '';
$is_ajax     = false;
$product_sku = '';
$resolved_id = 0;

if ( $product instanceof WC_Product ) {
	$purchasable = $product->is_purchasable();
	$in_stock    = $product->is_in_stock();

	if ( ! $purchasable && ! $in_stock ) {
		return '';
	}

	$can_buy     = $purchasable && $in_stock;
	$link_url    = $can_buy ? $product->add_to_cart_url() : $product->get_permalink();
	$link_label  = $can_buy ? $product->add_to_cart_text() : __( 'Read more', 'blockwriter' );
	$is_ajax     = $can_buy && $product->is_type( 'simple' );
	$product_sku = $product->get_sku();
	$resolved_id = $product->get_id();
} elseif ( $is_preview ) {
	$is_sample  = true;
	$link_url   = '#';
	$link_label = __( 'Add to cart', 'blockwriter' );
	$is_ajax    = true;
} else {
	return '';
}

$text = isset( $attributes['text'] ) ? sanitize_text_field( (string) $attributes['text'] ) : '';

if ( '' !== $text ) {
	$link_label = $text;
}

$font_size     = isset( $attributes['fontSize'] ) ? absint( $attributes['fontSize'] ) : 0;
$font_size     = min( $font_size, 120 );
$border_radius = isset( $attributes['borderRadius'] ) ? absint( $attributes['borderRadius'] ) : 4;
$border_radius = min( $border_radius, 999 );
$button_color  = isset( $attributes['buttonColor'] ) ? sanitize_hex_color( (string) $attributes['buttonColor'] ) : '';
$text_color    = isset( $attributes['textColor'] ) ? sanitize_hex_color( (string) $attributes['textColor'] ) : '';
$full_width    = ! empty( $attributes['fullWidth'] );
$extra_class   = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id       = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$styles = array( 'border-radius:' . $border_radius . 'px' );

if ( $font_size > 0 ) {
	$styles[] = 'font-size:' . $font_size . 'px';
}

if ( $button_color ) {
	$styles[] = 'background-color:' . $button_color;
}

if ( $text_color ) {
	$styles[] = 'color:' . $text_color;
}

if ( $full_width ) {
	$styles[] = 'display:block';
	$styles[] = 'width:100%';
	$styles[] = 'text-align:center';
}

$classes = 'bw-woo-add-to-cart';

if ( $is_sample ) {
	$classes .= ' bw-woo-add-to-cart--preview';
}

if ( $full_width ) {
	$classes .= ' bw-woo-add-to-cart--full';
}

if ( '' !== $extra_class ) {
	$classes .= ' ' . $extra_class;
}

$button_classes = 'bw-woo-add-to-cart__button button';

if ( $is_ajax ) {
	$button_classes .= ' ajax_add_to_cart add_to_cart_button';
}

$extra_attributes = array(
	'class' => trim( $classes ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<a
		href="<?php echo esc_url( $link_url ); ?>"
		data-quantity="1"
		data-product_id="<?php echo esc_attr( $resolved_id ); ?>"
		data-product_sku="<?php echo esc_attr( $product_sku ); ?>"
		class="<?php echo esc_attr( $button_classes ); ?>"
		style="<?php echo esc_attr( implode( ';', $styles ) ); ?>"
		rel="nofollow"
	>
		<?php echo esc_html( $link_label ); ?>
	</a>
</div>
<?php
return ob_get_clean();
