<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * ----------------------------------------
 * 1. Attributes Filter
 * ----------------------------------------
 */
$attributes = apply_filters(
	'bw_header_block_attributes',
	$attributes,
	$content
);

/**
 * ----------------------------------------
 * 2. Extract Attributes
 * ----------------------------------------
 */
$tag        = $attributes['header'] ?? 'h2';
$text_align = $attributes['textAlign'] ?? '';
$heading_content    = $attributes['message'] ?? '';
$headerBgColor    = $attributes['headerBgColor'] ?? '';
$headerTextColor    = $attributes['headerTextColor'] ?? '';
$headerIcon    = $attributes['headerIcon'] ?? '';
$headerIconColor    = $attributes['headerIconColor'] ?? '';
$borderStyle    = $attributes['borderStyle'] ?? '';
$borderWidth    = $attributes['borderWidth'] ?? 0;
$borderRadius    = $attributes['borderRadius'] ?? 0;
$marginBottom    = $attributes['marginBottom'] ?? 15;

/**
 * ----------------------------------------
 * 3. Validate Tag
 * ----------------------------------------
 */
$allowed_tags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
if ( ! in_array( $tag, $allowed_tags, true ) ) {
	$tag = 'h2';
}

/**
 * ----------------------------------------
 * 4. Style
 * ----------------------------------------
 */
$style = '';
if ( $text_align ) {
	$style .= "text-align: {$text_align};";
}

/**
 * ----------------------------------------
 * 5. Wrapper Attributes
 * ----------------------------------------
 */
$wrapper_attributes = get_block_wrapper_attributes(
	$style ? [ 'style' => $style ] : []
);

/**
 * ----------------------------------------
 * 6. Output
 * ----------------------------------------
 */
ob_start();
?>

<<?php echo esc_html( $tag ); ?> <?php echo $wrapper_attributes; ?>>
	<?php echo wp_kses_post( $heading_content ); ?>
</<?php echo esc_html( $tag ); ?>>

<?php
$html = ob_get_clean();

/**
 * ----------------------------------------
 * 7. Final Output Filter
 * ----------------------------------------
 */
echo apply_filters(
	'bw_header_block_output',
	$html,
	$attributes
);
