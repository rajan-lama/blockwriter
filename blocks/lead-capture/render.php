<?php
/**
 * Server render for the BW Lead Capture block.
 *
 * Renders a configurable form. Field names and types are validated on the
 * server before being output so arbitrary markup cannot be injected.
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

$heading     = isset( $attributes['heading'] ) ? (string) $attributes['heading'] : '';
$description = isset( $attributes['description'] ) ? (string) $attributes['description'] : '';
$button_text = isset( $attributes['buttonText'] ) && '' !== $attributes['buttonText'] ? (string) $attributes['buttonText'] : __( 'Send', 'blockwriter' );
$action_url  = isset( $attributes['actionUrl'] ) ? trim( (string) $attributes['actionUrl'] ) : '';
$method      = isset( $attributes['method'] ) && 'get' === strtolower( (string) $attributes['method'] ) ? 'get' : 'post';
$consent     = isset( $attributes['consentText'] ) ? (string) $attributes['consentText'] : '';

$allowed_types = array( 'text', 'email', 'tel', 'url', 'textarea' );
$raw_fields    = isset( $attributes['fields'] ) && is_array( $attributes['fields'] ) ? $attributes['fields'] : array();
$items         = array();

foreach ( $raw_fields as $raw_field ) {
	if ( ! is_array( $raw_field ) ) {
		continue;
	}

	$name = isset( $raw_field['name'] ) ? preg_replace( '/[^A-Za-z0-9_\-\[\]]/', '', (string) $raw_field['name'] ) : '';

	if ( '' === $name ) {
		continue;
	}

	$label   = isset( $raw_field['label'] ) ? trim( (string) $raw_field['label'] ) : '';
	$bw_type = isset( $raw_field['type'] ) && in_array( $raw_field['type'], $allowed_types, true ) ? $raw_field['type'] : 'text';

	$items[] = array(
		'label'       => '' !== $label ? $label : $name,
		'name'        => $name,
		'type'        => $bw_type,
		'placeholder' => isset( $raw_field['placeholder'] ) ? (string) $raw_field['placeholder'] : '',
		'required'    => ! empty( $raw_field['required'] ),
	);
}

if ( empty( $items ) ) {
	return '';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-lead-capture ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( '' !== $heading ) : ?>
		<h3 class="bw-lead-capture__heading"><?php echo esc_html( $heading ); ?></h3>
	<?php endif; ?>

	<?php if ( '' !== $description ) : ?>
		<p class="bw-lead-capture__description"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>

	<form class="bw-lead-capture__form" method="<?php echo esc_attr( $method ); ?>"<?php echo '' !== $action_url ? ' action="' . esc_url( $action_url ) . '"' : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<?php foreach ( $items as $item ) : ?>
			<?php $input_id = wp_unique_id( 'bw-lead-capture-' ); ?>

			<div class="bw-lead-capture__field">
				<label class="bw-lead-capture__label" for="<?php echo esc_attr( $input_id ); ?>"><?php echo esc_html( $item['label'] ); ?></label>

				<?php if ( 'textarea' === $item['type'] ) : ?>
					<textarea
						id="<?php echo esc_attr( $input_id ); ?>"
						class="bw-lead-capture__input"
						name="<?php echo esc_attr( $item['name'] ); ?>"
						placeholder="<?php echo esc_attr( $item['placeholder'] ); ?>"
						rows="4"
						<?php echo esc_attr( $item['required'] ? 'required' : '' ); ?>
					></textarea>
				<?php else : ?>
					<input
						id="<?php echo esc_attr( $input_id ); ?>"
						class="bw-lead-capture__input"
						type="<?php echo esc_attr( $item['type'] ); ?>"
						name="<?php echo esc_attr( $item['name'] ); ?>"
						placeholder="<?php echo esc_attr( $item['placeholder'] ); ?>"
						<?php echo esc_attr( $item['required'] ? 'required' : '' ); ?>
					/>
				<?php endif; ?>
			</div>
		<?php endforeach; ?>

		<button class="bw-lead-capture__button" type="submit"><?php echo esc_html( $button_text ); ?></button>
	</form>

	<?php if ( '' !== $consent ) : ?>
		<p class="bw-lead-capture__consent"><?php echo wp_kses_post( $consent ); ?></p>
	<?php endif; ?>
</div>
<?php
return ob_get_clean();
