<?php
/**
 * Server render for the BW Search block.
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

$layout = isset( $attributes['layout'] ) ? sanitize_key( $attributes['layout'] ) : 'inline';
$layout = in_array( $layout, array( 'inline', 'stacked' ), true ) ? $layout : 'inline';

$show_button = ! isset( $attributes['showButton'] ) || (bool) $attributes['showButton'];

$label       = isset( $attributes['label'] ) ? trim( (string) $attributes['label'] ) : '';
$placeholder = isset( $attributes['placeholder'] ) ? trim( (string) $attributes['placeholder'] ) : '';
$button_text = isset( $attributes['buttonText'] ) ? trim( (string) $attributes['buttonText'] ) : '';
$post_type   = isset( $attributes['postType'] ) ? sanitize_key( $attributes['postType'] ) : '';

if ( '' === $label ) {
	$label = __( 'Search', 'blockwriter' );
}

if ( '' === $placeholder ) {
	$placeholder = __( 'Search this site', 'blockwriter' );
}

if ( '' === $button_text ) {
	$button_text = __( 'Search', 'blockwriter' );
}

if ( '' !== $post_type && ! post_type_exists( $post_type ) ) {
	$post_type = '';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';
$field_id    = wp_unique_id( 'bw-search-field-' );

$extra_attributes = array(
	'class' => trim( 'bw-search bw-search--' . $layout . ' ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<form
		class="bw-search__form"
		role="search"
		method="get"
		action="<?php echo esc_url( home_url( '/' ) ); ?>"
	>
		<label class="bw-search__label screen-reader-text" for="<?php echo esc_attr( $field_id ); ?>">
			<?php echo esc_html( $label ); ?>
		</label>

		<input
			class="bw-search__input"
			id="<?php echo esc_attr( $field_id ); ?>"
			type="search"
			name="s"
			value="<?php echo esc_attr( get_search_query() ); ?>"
			placeholder="<?php echo esc_attr( $placeholder ); ?>"
		/>

		<?php if ( '' !== $post_type ) : ?>
			<input
				class="bw-search__post-type"
				type="hidden"
				name="post_type"
				value="<?php echo esc_attr( $post_type ); ?>"
			/>
		<?php endif; ?>

		<?php if ( $show_button ) : ?>
			<button class="bw-search__button" type="submit">
				<?php echo esc_html( $button_text ); ?>
			</button>
		<?php endif; ?>
	</form>
</div>
<?php
return ob_get_clean();
