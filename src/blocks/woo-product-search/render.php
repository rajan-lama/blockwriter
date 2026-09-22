<?php
/**
 * Server render for the BW Product Search block.
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

if ( ! class_exists( 'WooCommerce' ) || ! post_type_exists( 'product' ) ) {
	return '';
}

$show_button = ! isset( $attributes['showButton'] ) || (bool) $attributes['showButton'];

$label       = isset( $attributes['label'] ) ? trim( (string) $attributes['label'] ) : '';
$placeholder = isset( $attributes['placeholder'] ) ? trim( (string) $attributes['placeholder'] ) : '';
$button_text = isset( $attributes['buttonText'] ) ? trim( (string) $attributes['buttonText'] ) : '';

if ( '' === $label ) {
	$label = __( 'Search products', 'blockwriter' );
}

if ( '' === $placeholder ) {
	$placeholder = __( 'Search products...', 'blockwriter' );
}

if ( '' === $button_text ) {
	$button_text = __( 'Search', 'blockwriter' );
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';
$field_id    = wp_unique_id( 'bw-woo-product-search-field-' );

$extra_attributes = array(
	'class' => trim( 'bw-woo-product-search ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<form
		class="bw-woo-product-search__form woocommerce-product-search"
		role="search"
		method="get"
		action="<?php echo esc_url( home_url( '/' ) ); ?>"
	>
		<label class="bw-woo-product-search__label screen-reader-text" for="<?php echo esc_attr( $field_id ); ?>">
			<?php echo esc_html( $label ); ?>
		</label>

		<input
			class="bw-woo-product-search__input search-field"
			id="<?php echo esc_attr( $field_id ); ?>"
			type="search"
			name="s"
			value="<?php echo esc_attr( get_search_query() ); ?>"
			placeholder="<?php echo esc_attr( $placeholder ); ?>"
		/>

		<input
			class="bw-woo-product-search__post-type"
			type="hidden"
			name="post_type"
			value="product"
		/>

		<?php if ( $show_button ) : ?>
			<button class="bw-woo-product-search__button" type="submit">
				<?php echo esc_html( $button_text ); ?>
			</button>
		<?php endif; ?>
	</form>
</div>
<?php
return ob_get_clean();
