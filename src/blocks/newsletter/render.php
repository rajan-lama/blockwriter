<?php
/**
 * Server render for the BW Newsletter Signup block.
 *
 * Renders a provider-agnostic signup form. The site owner supplies the form
 * endpoint provided by their newsletter service.
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

$heading          = isset( $attributes['heading'] ) ? (string) $attributes['heading'] : '';
$description      = isset( $attributes['description'] ) ? (string) $attributes['description'] : '';
$placeholder      = isset( $attributes['placeholder'] ) && '' !== $attributes['placeholder'] ? (string) $attributes['placeholder'] : __( 'Enter your email', 'blockwriter' );
$button_text      = isset( $attributes['buttonText'] ) && '' !== $attributes['buttonText'] ? (string) $attributes['buttonText'] : __( 'Subscribe', 'blockwriter' );
$show_name        = ! empty( $attributes['showName'] );
$name_placeholder = isset( $attributes['namePlaceholder'] ) && '' !== $attributes['namePlaceholder'] ? (string) $attributes['namePlaceholder'] : __( 'Your name', 'blockwriter' );
$action_url       = isset( $attributes['actionUrl'] ) ? trim( (string) $attributes['actionUrl'] ) : '';
$method           = isset( $attributes['method'] ) && 'get' === strtolower( (string) $attributes['method'] ) ? 'get' : 'post';
$consent_text     = isset( $attributes['consentText'] ) ? (string) $attributes['consentText'] : '';
$email_field      = isset( $attributes['emailField'] ) ? (string) $attributes['emailField'] : 'email';
$name_field       = isset( $attributes['nameField'] ) ? (string) $attributes['nameField'] : 'name';

$email_field = preg_replace( '/[^A-Za-z0-9_\-\[\]]/', '', $email_field );
$name_field  = preg_replace( '/[^A-Za-z0-9_\-\[\]]/', '', $name_field );

if ( '' === $email_field ) {
	$email_field = 'email';
}

if ( '' === $name_field ) {
	$name_field = 'name';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-newsletter ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

$email_input_id = wp_unique_id( 'bw-newsletter-email-' );
$name_input_id  = wp_unique_id( 'bw-newsletter-name-' );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( '' !== $heading ) : ?>
		<h3 class="bw-newsletter__heading"><?php echo esc_html( $heading ); ?></h3>
	<?php endif; ?>

	<?php if ( '' !== $description ) : ?>
		<p class="bw-newsletter__description"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>

	<form class="bw-newsletter__form" method="<?php echo esc_attr( $method ); ?>"<?php echo '' !== $action_url ? ' action="' . esc_url( $action_url ) . '"' : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<label class="bw-newsletter__label screen-reader-text" for="<?php echo esc_attr( $email_input_id ); ?>"><?php esc_html_e( 'Email address', 'blockwriter' ); ?></label>
		<input
			id="<?php echo esc_attr( $email_input_id ); ?>"
			class="bw-newsletter__input"
			type="email"
			name="<?php echo esc_attr( $email_field ); ?>"
			placeholder="<?php echo esc_attr( $placeholder ); ?>"
			required
		/>

		<?php if ( $show_name ) : ?>
			<label class="bw-newsletter__label screen-reader-text" for="<?php echo esc_attr( $name_input_id ); ?>"><?php esc_html_e( 'Name', 'blockwriter' ); ?></label>
			<input
				id="<?php echo esc_attr( $name_input_id ); ?>"
				class="bw-newsletter__input"
				type="text"
				name="<?php echo esc_attr( $name_field ); ?>"
				placeholder="<?php echo esc_attr( $name_placeholder ); ?>"
			/>
		<?php endif; ?>

		<button class="bw-newsletter__button" type="submit"><?php echo esc_html( $button_text ); ?></button>
	</form>

	<?php if ( '' !== $consent_text ) : ?>
		<p class="bw-newsletter__consent"><?php echo wp_kses_post( $consent_text ); ?></p>
	<?php endif; ?>
</div>
<?php
return ob_get_clean();
