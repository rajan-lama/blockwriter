<?php
/**
 * Server render for the BW Mini Cart block.
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

if ( ! class_exists( 'WooCommerce' ) || ! function_exists( 'woocommerce_mini_cart' ) ) {
	return '';
}

$show_toggle     = ! isset( $attributes['showToggle'] ) || (bool) $attributes['showToggle'];
$show_count      = ! isset( $attributes['showCount'] ) || (bool) $attributes['showCount'];
$open_by_default = isset( $attributes['openByDefault'] ) && (bool) $attributes['openByDefault'];

$cart_title  = isset( $attributes['title'] ) ? trim( (string) $attributes['title'] ) : '';
$toggle_text = isset( $attributes['toggleText'] ) ? trim( (string) $attributes['toggleText'] ) : '';

if ( '' === $toggle_text ) {
	$toggle_text = __( 'Cart', 'blockwriter' );
}

if ( $show_count ) {
	$cart_count = 0;

	if ( function_exists( 'WC' ) && WC()->cart instanceof WC_Cart ) {
		$cart_count = (int) WC()->cart->get_cart_contents_count();
	}

	$toggle_text = sprintf(
		/* translators: 1: cart label. 2: number of items currently in the cart. */
		__( '%1$s (%2$s)', 'blockwriter' ),
		$toggle_text,
		number_format_i18n( $cart_count )
	);
}

$is_preview = defined( 'REST_REQUEST' ) && REST_REQUEST;

$panel_id = wp_unique_id( 'bw-woo-mini-cart-panel-' );

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class'                => trim( 'bw-woo-mini-cart ' . $extra_class ),
	'data-open-by-default' => $open_by_default ? 'true' : 'false',
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( '' !== $cart_title ) : ?>
		<h2 class="bw-woo-mini-cart__title"><?php echo esc_html( $cart_title ); ?></h2>
	<?php endif; ?>

	<?php if ( $show_toggle ) : ?>
		<button
			class="bw-woo-mini-cart__toggle"
			type="button"
			aria-expanded="true"
			aria-controls="<?php echo esc_attr( $panel_id ); ?>"
		>
			<?php echo esc_html( $toggle_text ); ?>
		</button>
	<?php endif; ?>

	<div
		class="bw-woo-mini-cart__panel widget_shopping_cart_content"
		id="<?php echo esc_attr( $panel_id ); ?>"
	>
		<?php if ( $is_preview ) : ?>
			<ul class="cart_list product_list_widget">
				<li class="bw-woo-mini-cart__sample">
					<span class="bw-woo-mini-cart__sample-name"><?php echo esc_html__( 'Sample product', 'blockwriter' ); ?></span>
					<span class="bw-woo-mini-cart__sample-price"><?php echo wp_kses_post( wc_price( 19.99 ) ); ?></span>
				</li>
				<li class="bw-woo-mini-cart__sample">
					<span class="bw-woo-mini-cart__sample-name"><?php echo esc_html__( 'Another sample product', 'blockwriter' ); ?></span>
					<span class="bw-woo-mini-cart__sample-price"><?php echo wp_kses_post( wc_price( 24.5 ) ); ?></span>
				</li>
			</ul>

			<p class="woocommerce-mini-cart__total total">
				<?php echo esc_html__( 'Subtotal:', 'blockwriter' ); ?>
				<strong><?php echo wp_kses_post( wc_price( 44.49 ) ); ?></strong>
			</p>

			<p class="woocommerce-mini-cart__buttons buttons">
				<a class="button wc-forward" href="<?php echo esc_url( wc_get_cart_url() ); ?>">
					<?php echo esc_html__( 'View cart', 'blockwriter' ); ?>
				</a>
				<a class="button checkout wc-forward" href="<?php echo esc_url( wc_get_checkout_url() ); ?>">
					<?php echo esc_html__( 'Checkout', 'blockwriter' ); ?>
				</a>
			</p>
		<?php else : ?>
			<?php woocommerce_mini_cart(); ?>
		<?php endif; ?>
	</div>
</div>
<?php
return ob_get_clean();
