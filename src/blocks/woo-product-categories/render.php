<?php
/**
 * Server render for the BW Product Categories block.
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

if ( ! class_exists( 'WooCommerce' ) || ! taxonomy_exists( 'product_cat' ) ) {
	return '';
}

$is_preview = defined( 'REST_REQUEST' ) && REST_REQUEST;

$allowed_orderby = array( 'name', 'count', 'slug', 'term_id' );
$allowed_order   = array( 'ASC', 'DESC' );
$allowed_layouts = array( 'grid', 'list', 'inline' );

$order_by = isset( $attributes['orderBy'] ) ? sanitize_key( $attributes['orderBy'] ) : 'name';
$order_by = in_array( $order_by, $allowed_orderby, true ) ? $order_by : 'name';
$order    = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'ASC';
$order    = in_array( $order, $allowed_order, true ) ? $order : 'ASC';
$limit    = isset( $attributes['limit'] ) ? absint( $attributes['limit'] ) : 0;
$limit    = min( $limit, 100 );
$layout   = isset( $attributes['layout'] ) ? sanitize_key( $attributes['layout'] ) : 'grid';
$layout   = in_array( $layout, $allowed_layouts, true ) ? $layout : 'grid';
$columns  = isset( $attributes['columns'] ) ? absint( $attributes['columns'] ) : 3;
$columns  = min( max( $columns, 1 ), 6 );

$hide_empty     = ! isset( $attributes['hideEmpty'] ) || (bool) $attributes['hideEmpty'];
$show_count     = ! isset( $attributes['showCount'] ) || (bool) $attributes['showCount'];
$show_thumbnail = ! isset( $attributes['showThumbnail'] ) || (bool) $attributes['showThumbnail'];
$show_thumbnail = $show_thumbnail && 'inline' !== $layout;
$hierarchical   = ! empty( $attributes['hierarchical'] ) && is_taxonomy_hierarchical( 'product_cat' );

$query_args = array(
	'taxonomy'   => 'product_cat',
	'hide_empty' => $hide_empty,
	'orderby'    => $order_by,
	'order'      => $order,
);

if ( $limit > 0 ) {
	$query_args['number'] = $limit;
}

$terms     = get_terms( $query_args );
$is_sample = false;

if ( is_wp_error( $terms ) || empty( $terms ) ) {
	if ( ! $is_preview ) {
		return '';
	}

	$terms     = array();
	$is_sample = true;
}

$render_term = static function ( $term, $children_output = '' ) use ( $is_sample, $show_count, $show_thumbnail ) {
	if ( $is_sample ) {
		$link  = '#';
		$name  = __( 'Product category', 'blockwriter' );
		$count = 0;
	} else {
		$link = get_term_link( $term );

		if ( is_wp_error( $link ) ) {
			return '';
		}

		$name  = $term->name;
		$count = (int) $term->count;
	}

	$output = '<li class="bw-woo-product-categories__item">';

	if ( $show_thumbnail ) {
		$output .= '<a class="bw-woo-product-categories__media" href="' . esc_url( $link ) . '">';

		if ( ! $is_sample ) {
			$thumbnail_id = absint( get_term_meta( $term->term_id, 'thumbnail_id', true ) );

			if ( $thumbnail_id ) {
				$output .= wp_get_attachment_image( $thumbnail_id, 'woocommerce_thumbnail', false, array( 'loading' => 'lazy' ) );
			} else {
				$output .= '<span class="bw-woo-product-categories__placeholder" aria-hidden="true"></span>';
			}
		} else {
			$output .= '<span class="bw-woo-product-categories__placeholder" aria-hidden="true"></span>';
		}

		$output .= '</a>';
	}

	$output .= '<div class="bw-woo-product-categories__body">';
	$output .= '<a class="bw-woo-product-categories__link" href="' . esc_url( $link ) . '">' . esc_html( $name ) . '</a>';

	if ( $show_count ) {
		$output .= '<span class="bw-woo-product-categories__count">' . esc_html( number_format_i18n( $count ) ) . '</span>';
	}

	$output .= $children_output;
	$output .= '</div>';
	$output .= '</li>';

	return $output;
};

$children_by_parent = array();

foreach ( $terms as $term ) {
	$children_by_parent[ $term->parent ][] = $term;
}

$render_branch = static function ( $parent_id ) use ( &$render_branch, &$children_by_parent, $render_term ) {
	$output = '';

	foreach ( $children_by_parent[ $parent_id ] ?? array() as $term ) {
		$children = $render_branch( $term->term_id );

		if ( '' !== $children ) {
			$children = '<ul class="bw-woo-product-categories__items bw-woo-product-categories__items--children">' . $children . '</ul>';
		}

		$output .= $render_term( $term, $children );
	}

	return $output;
};

if ( $is_sample ) {
	$items_markup = '';

	for ( $index = 0; $index < 3; $index++ ) {
		$items_markup .= $render_term( null );
	}
} elseif ( $hierarchical ) {
	$items_markup = $render_branch( 0 );
} else {
	$items_markup = '';

	foreach ( $terms as $term ) {
		$items_markup .= $render_term( $term );
	}
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$classes = 'bw-woo-product-categories bw-woo-product-categories--' . $layout;

if ( $is_sample ) {
	$classes .= ' bw-woo-product-categories--preview';
}

if ( '' !== $extra_class ) {
	$classes .= ' ' . $extra_class;
}

$extra_attributes = array(
	'class' => trim( $classes ),
);

if ( 'grid' === $layout ) {
	$extra_attributes['style'] = '--bw-woo-product-categories-columns:' . $columns . ';';
}

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<ul class="bw-woo-product-categories__items">
		<?php echo $items_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</ul>
</div>
<?php
return ob_get_clean();
