<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Render callback for blockwriter/icon
 *
 * @param array $attributes Block attributes.
 * @return string
 */
function bw_icon_block_render_callback( $attributes ) {

    // Set default attributes
    $defaults = array(
        'icon'         => '',
        'size'         => 24,
        'color'        => '#000000',
        'bgColor'      => 'transparent',
        'padding'      => 0,
        'borderRadius' => 0,
        'svg'          => '',
    );

    // Merge defaults with user-provided attributes
    $attributes = array_merge( $defaults, $attributes );

    /**
     * Filter block attributes before rendering.
     *
     * @param array $attributes Block attributes.
     */
    $attributes = apply_filters( 'bw_icon_block_attributes', $attributes );

    // Prepare inline style with CSS variables
    $style = sprintf(
        '--bw-icon-size:%spx;--bw-icon-color:%s;--bw-icon-bg:%s;--bw-icon-padding:%spx;--bw-icon-radius:%spx;',
        esc_attr( $attributes['size'] ),
        esc_attr( $attributes['color'] ),
        esc_attr( $attributes['bgColor'] ),
        esc_attr( $attributes['padding'] ),
        esc_attr( $attributes['borderRadius'] )
    );

    // Render SVG if exists
    $icon_html = '';
    if ( ! empty( $attributes['svg'] ) ) {
        $icon_html = sprintf(
            '<div class="bw-icon" style="margin-top:15px;">%s</div>',
            $attributes['svg']
        );
    }

    // Return final block HTML
    return sprintf(
        '<div class="wp-block-blockwriter-icon" style="%s">%s</div>',
        esc_attr( $style ),
        $icon_html
    );
}

// Register block render callback
add_action( 'init', function() {
    if ( function_exists( 'register_block_type' ) ) {
        register_block_type( 'blockwriter/icon', array(
            'render_callback' => 'bw_icon_block_render_callback',
        ) );
    }
} );