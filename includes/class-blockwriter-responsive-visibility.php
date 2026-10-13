<?php

/**
 * Responsive visibility.
 *
 * Applies the BlockWriter device visibility settings (display on desktop,
 * tablet, and mobile) to the rendered output of BlockWriter blocks. The block
 * attributes are managed in the editor; this class only reads them and adds the
 * matching utility classes and stylesheet, so no block markup is rewritten in
 * the editor.
 *
 * @package Blockwriter
 */

namespace Blockwriter;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds responsive visibility classes to rendered BlockWriter blocks.
 */
final class Responsive_Visibility {

	/**
	 * Stylesheet handle.
	 *
	 * @var string
	 */
	const HANDLE = 'blockwriter-responsive-visibility';

	/**
	 * Returns the mapping of block attributes to hiding classes.
	 *
	 * @return array<string, string> Attribute to class map.
	 */
	private static function class_map() {
		return array(
			'showDesktop' => 'bw-hide-desktop',
			'showTablet'  => 'bw-hide-tablet',
			'showMobile'  => 'bw-hide-mobile',
		);
	}

	/**
	 * Registers the render filter and the stylesheet.
	 *
	 * @return void
	 */
	public static function register() {
		add_filter( 'render_block', array( __CLASS__, 'apply_visibility' ), 10, 2 );
		add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_styles' ) );
	}

	/**
	 * Enqueues the responsive visibility stylesheet.
	 *
	 * Loaded through `enqueue_block_assets` so the styles are available on the
	 * front end and inside the block editor iframe.
	 *
	 * @return void
	 */
	public static function enqueue_styles() {
		wp_enqueue_style(
			self::HANDLE,
			BLOCKWRITER_URL . 'assets/css/responsive-visibility.css',
			array(),
			BLOCKWRITER_VERSION
		);
	}

	/**
	 * Adds visibility classes to a rendered BlockWriter block.
	 *
	 * Only attributes explicitly set to a falsey value hide the block, so an
	 * unset attribute keeps the block visible everywhere.
	 *
	 * @param string $block_content Rendered block HTML.
	 * @param array  $block         Parsed block data.
	 *
	 * @return string Filtered block HTML.
	 */
	public static function apply_visibility( $block_content, $block ) {
		if ( empty( $block['blockName'] ) || 0 !== strpos( $block['blockName'], 'blockwriter/' ) ) {
			return $block_content;
		}

		if ( ! is_string( $block_content ) || '' === $block_content ) {
			return $block_content;
		}

		$attributes = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();
		$classes    = self::get_hidden_classes( $attributes );

		if ( empty( $classes ) ) {
			return $block_content;
		}

		return self::add_classes( $block_content, implode( ' ', $classes ) );
	}

	/**
	 * Returns the classes used to hide a block on each disabled device.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return string[] Class names.
	 */
	private static function get_hidden_classes( $attributes ) {
		$classes = array();

		foreach ( self::class_map() as $attribute => $class ) {
			if ( array_key_exists( $attribute, $attributes ) && self::is_falsey( $attributes[ $attribute ] ) ) {
				$classes[] = $class;
			}
		}

		return $classes;
	}

	/**
	 * Normalizes a stored attribute value to a boolean.
	 *
	 * @param mixed $value Stored attribute value.
	 *
	 * @return bool Whether the value is falsey.
	 */
	private static function is_falsey( $value ) {
		if ( is_bool( $value ) ) {
			return ! $value;
		}

		if ( is_numeric( $value ) ) {
			return 0 === (int) $value;
		}

		return in_array( strtolower( (string) $value ), array( 'false', '0', '', 'no' ), true );
	}

	/**
	 * Adds classes to the first tag of a rendered block.
	 *
	 * Uses the WordPress HTML API when available and falls back to a first-tag
	 * regular expression on older versions.
	 *
	 * @param string $html    Rendered block HTML.
	 * @param string $classes Space separated class names.
	 *
	 * @return string HTML with the classes added.
	 */
	private static function add_classes( $html, $classes ) {
		if ( class_exists( 'WP_HTML_Tag_Processor' ) ) {
			$processor = new \WP_HTML_Tag_Processor( $html );

			if ( $processor->next_tag() ) {
				foreach ( explode( ' ', $classes ) as $class ) {
					$processor->add_class( $class );
				}

				return $processor->get_updated_html();
			}

			return $html;
		}

		$result = preg_replace_callback(
			'/<([a-zA-Z][a-zA-Z0-9:-]*)(\s[^>]*)?>/',
			static function ( $matches ) use ( $classes ) {
				$tag       = $matches[1];
				$tag_attrs = isset( $matches[2] ) ? $matches[2] : '';
				$existing  = '';
				$has_class = preg_match( '/class=(["\'])(.*?)\1/i', $tag_attrs, $class_match );
				if ( $has_class ) {
					$existing  = trim( $class_match[2] );
					$tag_attrs = preg_replace(
						'/class=(["\'])(.*?)\1/i',
						'class="' . esc_attr( trim( $existing . ' ' . $classes ) ) . '"',
						$tag_attrs,
						1
					);
				} else {
					$tag_attrs .= ' class="' . esc_attr( $classes ) . '"';
				}

				return '<' . $tag . $tag_attrs . '>';
			},
			$html,
			1
		);

		return is_string( $result ) ? $result : $html;
	}
}
