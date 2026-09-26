<?php

/**
 * Pattern registration.
 *
 * @package Blockwriter
 */

namespace Blockwriter;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the BlockWriter pattern category.
 *
 * Patterns themselves are registered by their respective sources; this class
 * only provides the category so BlockWriter patterns can be grouped and
 * filtered in the editor pattern library.
 */
final class Pattern {

	/**
	 * Pattern category slug.
	 *
	 * @var string
	 */
	const CATEGORY = 'blockwriter';

	/**
	 * Registers the pattern category with WordPress.
	 *
	 * @return void
	 */
	public static function register_category() {
		if ( ! function_exists( 'register_block_pattern_category' ) ) {
			return;
		}

		register_block_pattern_category(
			self::CATEGORY,
			array(
				'label' => __( 'BlockWriter', 'blockwriter' ),
			)
		);
	}
}
