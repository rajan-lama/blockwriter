<?php

/**
 * Query builder.
 *
 * Builds the WP_Query arguments used by BlockWriter's dynamic post blocks from
 * their stored attributes. Centralizing this keeps the post grid and post
 * carousel queries consistent and gives the editor a single, predictable set of
 * query attributes to write.
 *
 * @package Blockwriter
 */

namespace Blockwriter;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Builds sanitized WP_Query arguments for BlockWriter post blocks.
 */
final class Query_Builder {

	/**
	 * Allowed `orderby` values.
	 *
	 * @var array<int, string>
	 */
	private static $allowed_orderby = array( 'date', 'title', 'menu_order', 'modified', 'rand' );

	/**
	 * Builds WP_Query arguments from block attributes.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return array<string, mixed> WP_Query arguments.
	 */
	public static function build_args( $attributes ) {
		if ( ! is_array( $attributes ) ) {
			$attributes = array();
		}

		$post_type = isset( $attributes['postType'] ) ? sanitize_key( $attributes['postType'] ) : 'post';

		if ( ! post_type_exists( $post_type ) ) {
			$post_type = 'post';
		}

		$per_page = isset( $attributes['perPage'] ) ? absint( $attributes['perPage'] ) : 6;
		$per_page = $per_page > 0 ? min( $per_page, 24 ) : 6;

		$order_by = isset( $attributes['orderBy'] ) ? sanitize_key( $attributes['orderBy'] ) : 'date';
		$order_by = in_array( $order_by, self::$allowed_orderby, true ) ? $order_by : 'date';

		$order = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'DESC';
		$order = in_array( $order, array( 'ASC', 'DESC' ), true ) ? $order : 'DESC';

		$ignore_sticky = ! isset( $attributes['ignoreSticky'] ) || (bool) $attributes['ignoreSticky'];

		$args = array(
			'post_type'           => $post_type,
			'post_status'         => 'publish',
			'posts_per_page'      => $per_page,
			'orderby'             => $order_by,
			'order'               => $order,
			'ignore_sticky_posts' => $ignore_sticky,
			'no_found_rows'       => true,
		);

		$offset = isset( $attributes['offset'] ) ? absint( $attributes['offset'] ) : 0;

		if ( $offset > 0 ) {
			$args['offset'] = $offset;
		}

		if ( 'post' === $post_type ) {
			$category_ids = self::get_id_list( $attributes, 'categoryIds' );

			if ( ! empty( $category_ids ) ) {
				$args['cat'] = $category_ids;
			}

			$tag_ids = self::get_id_list( $attributes, 'tagIds' );

			if ( ! empty( $tag_ids ) ) {
				$args['tag__in'] = $tag_ids;
			}
		}

		$author_id = isset( $attributes['authorId'] ) ? absint( $attributes['authorId'] ) : 0;

		if ( $author_id > 0 ) {
			$args['author'] = $author_id;
		}

		$include_ids = self::get_id_list( $attributes, 'includeIds' );

		if ( ! empty( $include_ids ) ) {
			$args['post__in'] = $include_ids;
		}

		$exclude_ids = self::get_id_list( $attributes, 'excludeIds' );

		if ( ! empty( $exclude_ids ) ) {
			$args['post__not_in'] = $exclude_ids;
		}

		return $args;
	}

	/**
	 * Returns a sanitized list of IDs from an attribute.
	 *
	 * Accepts an array of IDs or a comma separated string for convenience.
	 *
	 * @param array  $attributes Block attributes.
	 * @param string $key        Attribute name.
	 *
	 * @return int[] Positive IDs.
	 */
	private static function get_id_list( $attributes, $key ) {
		if ( empty( $attributes[ $key ] ) ) {
			return array();
		}

		$value = $attributes[ $key ];

		if ( is_string( $value ) ) {
			$value = explode( ',', $value );
		}

		if ( ! is_array( $value ) ) {
			return array();
		}

		return array_values( array_filter( array_map( 'absint', $value ) ) );
	}
}
