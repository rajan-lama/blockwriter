<?php
/**
 * Server render for the BW Breadcrumbs block.
 *
 * Builds a breadcrumb trail for the current query. On the front page nothing
 * is rendered unless the block is being previewed in the editor.
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

$is_preview = defined( 'REST_REQUEST' ) && REST_REQUEST;

if ( ! $is_preview && is_front_page() ) {
	return '';
}

$separator    = isset( $attributes['separator'] ) && '' !== $attributes['separator'] ? (string) $attributes['separator'] : '›';
$show_home    = ! isset( $attributes['showHome'] ) || (bool) $attributes['showHome'];
$home_label   = isset( $attributes['homeLabel'] ) ? trim( (string) $attributes['homeLabel'] ) : '';
$show_current = ! isset( $attributes['showCurrent'] ) || (bool) $attributes['showCurrent'];

if ( '' === $home_label ) {
	$home_label = __( 'Home', 'blockwriter' );
}

$items = array();

if ( $show_home ) {
	$items[] = array(
		'label' => $home_label,
		'url'   => home_url( '/' ),
	);
}

if ( $is_preview ) {
	$items[] = array(
		'label' => __( 'Sample Category', 'blockwriter' ),
		'url'   => home_url( '/sample-category/' ),
	);
	$items[] = array(
		'label' => __( 'Sample Post Title', 'blockwriter' ),
		'url'   => '',
	);
} elseif ( is_singular() ) {
	$bw_post_id          = get_queried_object_id();
	$bw_post_type        = get_post_type( $bw_post_id );
	$bw_post_type_object = get_post_type_object( $bw_post_type );

	if ( is_post_type_hierarchical( $bw_post_type ) ) {
		$ancestors = array_reverse( get_post_ancestors( $bw_post_id ) );

		foreach ( $ancestors as $ancestor_id ) {
			$items[] = array(
				'label' => get_the_title( $ancestor_id ),
				'url'   => get_permalink( $ancestor_id ),
			);
		}
	} elseif ( 'post' === $bw_post_type ) {
		$categories = get_the_category( $bw_post_id );

		if ( ! empty( $categories ) ) {
			$primary   = $categories[0];
			$ancestors = array_reverse( get_ancestors( $primary->term_id, 'category' ) );

			foreach ( $ancestors as $ancestor_id ) {
				$ancestor = get_term( $ancestor_id, 'category' );

				if ( $ancestor && ! is_wp_error( $ancestor ) ) {
					$items[] = array(
						'label' => $ancestor->name,
						'url'   => get_term_link( $ancestor ),
					);
				}
			}

			$items[] = array(
				'label' => $primary->name,
				'url'   => get_category_link( $primary->term_id ),
			);
		}
	} elseif ( $bw_post_type_object && ! empty( $bw_post_type_object->has_archive ) ) {
		$items[] = array(
			'label' => $bw_post_type_object->labels->name,
			'url'   => get_post_type_archive_link( $bw_post_type ),
		);
	}

	$items[] = array(
		'label' => get_the_title( $bw_post_id ),
		'url'   => '',
	);
} elseif ( is_category() || is_tag() || is_tax() ) {
	$bw_term = get_queried_object();

	if ( $bw_term instanceof WP_Term ) {
		if ( is_taxonomy_hierarchical( $bw_term->taxonomy ) ) {
			$ancestors = array_reverse( get_ancestors( $bw_term->term_id, $bw_term->taxonomy ) );

			foreach ( $ancestors as $ancestor_id ) {
				$ancestor = get_term( $ancestor_id, $bw_term->taxonomy );

				if ( $ancestor && ! is_wp_error( $ancestor ) ) {
					$items[] = array(
						'label' => $ancestor->name,
						'url'   => get_term_link( $ancestor ),
					);
				}
			}
		}

		$items[] = array(
			'label' => $bw_term->name,
			'url'   => '',
		);
	}
} elseif ( is_author() ) {
	$items[] = array(
		'label' => get_the_author_meta( 'display_name', get_queried_object_id() ),
		'url'   => '',
	);
} elseif ( is_search() ) {
	$items[] = array(
		'label' => sprintf(
			/* translators: %s: search query. */
			__( 'Search results for: %s', 'blockwriter' ),
			get_search_query()
		),
		'url'   => '',
	);
} elseif ( is_home() ) {
	$page_for_posts = (int) get_option( 'page_for_posts' );

	$items[] = array(
		'label' => $page_for_posts ? get_the_title( $page_for_posts ) : __( 'Latest Posts', 'blockwriter' ),
		'url'   => '',
	);
} elseif ( is_post_type_archive() ) {
	$items[] = array(
		'label' => post_type_archive_title( '', false ),
		'url'   => '',
	);
} elseif ( is_404() ) {
	$items[] = array(
		'label' => __( '404 Not Found', 'blockwriter' ),
		'url'   => '',
	);
} elseif ( is_archive() ) {
	$items[] = array(
		'label' => wp_strip_all_tags( get_the_archive_title() ),
		'url'   => '',
	);
}

if ( empty( $items ) ) {
	return '';
}

if ( ! $show_current && count( $items ) > 1 ) {
	array_pop( $items );
}

$last_index = count( $items ) - 1;

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-breadcrumbs ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<nav <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> aria-label="<?php echo esc_attr__( 'Breadcrumb', 'blockwriter' ); ?>">
	<ol class="bw-breadcrumbs__list">
		<?php foreach ( $items as $index => $item ) : ?>
			<li class="bw-breadcrumbs__item">
				<?php if ( '' !== $item['url'] && $index !== $last_index ) : ?>
					<a class="bw-breadcrumbs__link" href="<?php echo esc_url( $item['url'] ); ?>"><?php echo esc_html( $item['label'] ); ?></a>
				<?php else : ?>
					<span class="bw-breadcrumbs__current" aria-current="page"><?php echo esc_html( $item['label'] ); ?></span>
				<?php endif; ?>

				<?php if ( $index !== $last_index ) : ?>
					<span class="bw-breadcrumbs__separator" aria-hidden="true"><?php echo esc_html( $separator ); ?></span>
				<?php endif; ?>
			</li>
		<?php endforeach; ?>
	</ol>
</nav>
<?php
return ob_get_clean();
