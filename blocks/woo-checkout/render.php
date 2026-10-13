<?php
/**
 * Server render for the BW Checkout block.
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

if ( ! class_exists( 'WooCommerce' ) || ! shortcode_exists( 'woocommerce_checkout' ) ) {
	return '';
}

$checkout_title = isset( $attributes['title'] ) ? trim( (string) $attributes['title'] ) : '';
$is_preview     = defined( 'REST_REQUEST' ) && REST_REQUEST;

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-woo-checkout ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( '' !== $checkout_title ) : ?>
		<h2 class="bw-woo-checkout__title"><?php echo esc_html( $checkout_title ); ?></h2>
	<?php endif; ?>

	<?php if ( $is_preview ) : ?>
		<div class="bw-woo-checkout__preview">
			<p class="bw-woo-checkout__preview-note">
				<?php echo esc_html__( 'The WooCommerce checkout form is rendered on the front end.', 'blockwriter' ); ?>
			</p>
		</div>
	<?php else : ?>
		<?php
		if ( function_exists( 'WC' ) && ! ( WC()->cart instanceof WC_Cart ) && function_exists( 'wc_load_cart' ) ) {
			wc_load_cart();
		}

		echo do_shortcode( '[woocommerce_checkout]' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		?>
	<?php endif; ?>
</div>
<?php
return ob_get_clean();
