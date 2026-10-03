<?php
/**
 * Server render for the BW AI Content block.
 *
 * The content is generated in the editor and stored in the post, so no API
 * request is made on the front end. The stored markup is sanitized before it
 * is output.
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

$generated = isset( $attributes['content'] ) ? (string) $attributes['content'] : '';

if ( '' === trim( $generated ) ) {
	return '';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-ai-content ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

return '<div ' . $wrapper_attributes . '>' . wp_kses_post( $generated ) . '</div>';
