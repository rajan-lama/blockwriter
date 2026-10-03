<?php
/**
 * Server render for the BW Dynamic Content block.
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

$allowed_sources = array(
	'post-title',
	'post-excerpt',
	'post-date',
	'post-author',
	'post-terms',
	'post-meta',
	'site-title',
	'site-tagline',
	'site-url',
	'current-year',
	'archive-title',
	'archive-description',
	'search-query',
);

$source = isset( $attributes['source'] ) ? sanitize_key( $attributes['source'] ) : 'post-title';
$source = in_array( $source, $allowed_sources, true ) ? $source : 'post-title';

$allowed_tags = array( 'p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' );
$tag_name     = isset( $attributes['tagName'] ) ? strtolower( (string) $attributes['tagName'] ) : 'p';
$tag_name     = in_array( $tag_name, $allowed_tags, true ) ? $tag_name : 'p';

$prefix  = isset( $attributes['prefix'] ) ? (string) $attributes['prefix'] : '';
$suffix  = isset( $attributes['suffix'] ) ? (string) $attributes['suffix'] : '';
$bw_link = ! empty( $attributes['link'] );

$meta_key       = isset( $attributes['metaKey'] ) ? sanitize_key( $attributes['metaKey'] ) : '';
$bw_taxonomy    = isset( $attributes['taxonomy'] ) ? sanitize_key( $attributes['taxonomy'] ) : 'category';
$separator      = isset( $attributes['separator'] ) ? sanitize_text_field( $attributes['separator'] ) : ', ';
$date_format    = isset( $attributes['dateFormat'] ) ? sanitize_text_field( $attributes['dateFormat'] ) : 'F j, Y';
$excerpt_length = isset( $attributes['excerptLength'] ) ? absint( $attributes['excerptLength'] ) : 24;
$excerpt_length = min( max( $excerpt_length, 5 ), 80 );

/*
 * Resolve the current entry for post-based sources. Loop contexts set postId;
 * the editor preview passes a post_id hint; otherwise use the global post.
 */
$post_sources = array(
	'post-title',
	'post-excerpt',
	'post-date',
	'post-author',
	'post-terms',
	'post-meta',
);

$bw_post_id = 0;

if ( in_array( $source, $post_sources, true ) ) {
	if ( ! empty( $block->context['postId'] ) ) {
		$bw_post_id = absint( $block->context['postId'] );
	} elseif ( isset( $_GET['post_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$bw_post_id = absint( wp_unslash( $_GET['post_id'] ) ); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	} elseif ( get_the_ID() ) {
		$bw_post_id = absint( get_the_ID() );
	}
}

$value = '';

switch ( $source ) {
	case 'post-title':
		if ( $bw_post_id ) {
			$value = esc_html( get_the_title( $bw_post_id ) );

			if ( $bw_link ) {
				$value = '<a href="' . esc_url( get_permalink( $bw_post_id ) ) . '">' . $value . '</a>';
			}
		}
		break;

	case 'post-excerpt':
		if ( $bw_post_id ) {
			$value = esc_html( wp_trim_words( get_the_excerpt( $bw_post_id ), $excerpt_length ) );

			if ( $bw_link ) {
				$value = '<a href="' . esc_url( get_permalink( $bw_post_id ) ) . '">' . $value . '</a>';
			}
		}
		break;

	case 'post-date':
		if ( $bw_post_id ) {
			$value = sprintf(
				'<time datetime="%1$s">%2$s</time>',
				esc_attr( get_the_date( DATE_W3C, $bw_post_id ) ),
				esc_html( get_the_date( $date_format, $bw_post_id ) )
			);
		}
		break;

	case 'post-author':
		if ( $bw_post_id ) {
			$author_id = (int) get_post_field( 'post_author', $bw_post_id );
			$name      = get_the_author_meta( 'display_name', $author_id );
			$value     = esc_html( $name );

			if ( $bw_link && $author_id ) {
				$value = '<a href="' . esc_url( get_author_posts_url( $author_id ) ) . '">' . $value . '</a>';
			}
		}
		break;

	case 'post-terms':
		if ( $bw_post_id && $bw_taxonomy && taxonomy_exists( $bw_taxonomy ) ) {
			$terms = get_the_terms( $bw_post_id, $bw_taxonomy );

			if ( is_array( $terms ) && ! empty( $terms ) ) {
				$bw_names = wp_list_pluck( $terms, 'name' );
				$value    = esc_html( implode( $separator, $bw_names ) );
			}
		}
		break;

	case 'post-meta':
		if ( $bw_post_id && '' !== $meta_key ) {
			$meta = get_post_meta( $bw_post_id, $meta_key, true );

			if ( is_scalar( $meta ) ) {
				$value = esc_html( (string) $meta );
			}
		}
		break;

	case 'site-title':
		$value = esc_html( get_bloginfo( 'name', 'display' ) );

		if ( $bw_link ) {
			$value = '<a href="' . esc_url( home_url( '/' ) ) . '">' . $value . '</a>';
		}
		break;

	case 'site-tagline':
		$value = esc_html( get_bloginfo( 'description', 'display' ) );
		break;

	case 'site-url':
		$url   = home_url( '/' );
		$value = $bw_link
			? '<a href="' . esc_url( $url ) . '">' . esc_html( $url ) . '</a>'
			: esc_html( $url );
		break;

	case 'current-year':
		$value = esc_html( wp_date( 'Y' ) );
		break;

	case 'archive-title':
		if ( is_archive() || is_home() || is_search() ) {
			$value = wp_kses_post( get_the_archive_title() );
		}
		break;

	case 'archive-description':
		if ( is_archive() || is_home() ) {
			$value = wp_kses_post( get_the_archive_description() );
		}
		break;

	case 'search-query':
		if ( is_search() ) {
			$value = esc_html( get_search_query() );
		}
		break;
}

if ( '' === $value ) {
	return '';
}

$before = '' !== $prefix ? esc_html( $prefix ) : '';
$after  = '' !== $suffix ? esc_html( $suffix ) : '';

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-dynamic-content bw-dynamic-content--' . $source . ' ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

return '<' . $tag_name . ' ' . $wrapper_attributes . '>' . $before . $value . $after . '</' . $tag_name . '>';
