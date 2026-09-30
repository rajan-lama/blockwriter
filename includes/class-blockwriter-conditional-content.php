<?php

/**
 * Conditional content.
 *
 * Applies the BlockWriter user and date conditions to the rendered output of
 * BlockWriter blocks. Conditions are configured in the editor and only affect
 * the front end; editor previews always render the block so it can still be
 * edited.
 *
 * @package Blockwriter
 */

namespace Blockwriter;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Hides BlockWriter blocks when their user or date conditions are not met.
 */
final class Conditional_Content {

	/**
	 * Registers the render filter.
	 *
	 * Runs before the responsive visibility filter so a block that is not shown
	 * at all never gets visibility classes.
	 *
	 * @return void
	 */
	public static function register() {
		add_filter( 'render_block', array( __CLASS__, 'apply_conditions' ), 9, 2 );
	}

	/**
	 * Removes a rendered BlockWriter block when its conditions are not met.
	 *
	 * @param string $block_content Rendered block HTML.
	 * @param array  $block         Parsed block data.
	 *
	 * @return string Filtered block HTML.
	 */
	public static function apply_conditions( $block_content, $block ) {
		if ( empty( $block['blockName'] ) || 0 !== strpos( $block['blockName'], 'blockwriter/' ) ) {
			return $block_content;
		}

		// Keep the block visible inside the editor, which renders through REST.
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return $block_content;
		}

		$attributes = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();

		if ( ! self::user_matches( $attributes ) || ! self::date_matches( $attributes ) ) {
			return '';
		}

		return $block_content;
	}

	/**
	 * Determines whether the current user matches the user condition.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return bool Whether the block should be shown for the current user.
	 */
	private static function user_matches( $attributes ) {
		$visibility = isset( $attributes['userVisibility'] ) ? (string) $attributes['userVisibility'] : 'all';

		switch ( $visibility ) {
			case 'logged-in':
				return is_user_logged_in();

			case 'logged-out':
				return ! is_user_logged_in();

			case 'specific-roles':
				if ( ! is_user_logged_in() ) {
					return false;
				}

				$roles = self::get_roles( $attributes );

				if ( empty( $roles ) ) {
					return true;
				}

				$user = wp_get_current_user();

				return (bool) array_intersect( $roles, (array) $user->roles );

			default:
				return true;
		}
	}

	/**
	 * Returns the selected roles as an array of slugs.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return string[] Role slugs.
	 */
	private static function get_roles( $attributes ) {
		$roles = isset( $attributes['selectedRoles'] ) ? $attributes['selectedRoles'] : array();

		if ( is_string( $roles ) ) {
			$decoded = json_decode( $roles, true );
			$roles   = is_array( $decoded ) ? $decoded : array();
		}

		if ( ! is_array( $roles ) ) {
			return array();
		}

		return array_values( array_filter( array_map( 'sanitize_key', $roles ) ) );
	}

	/**
	 * Determines whether the current date matches the date condition.
	 *
	 * An empty range, or a range with no dates, always matches.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return bool Whether the block should be shown today.
	 */
	private static function date_matches( $attributes ) {
		$range = isset( $attributes['displayDateRange'] ) ? $attributes['displayDateRange'] : array();

		if ( is_string( $range ) ) {
			$decoded = json_decode( $range, true );
			$range   = is_array( $decoded ) ? $decoded : array();
		}

		if ( ! is_array( $range ) ) {
			return true;
		}

		$from = isset( $range['from'] ) ? sanitize_text_field( (string) $range['from'] ) : '';
		$to   = isset( $range['to'] ) ? sanitize_text_field( (string) $range['to'] ) : '';

		if ( '' === $from && '' === $to ) {
			return true;
		}

		$today = current_time( 'Y-m-d' );

		if ( '' !== $from && $today < $from ) {
			return false;
		}

		if ( '' !== $to && $today > $to ) {
			return false;
		}

		return true;
	}
}
