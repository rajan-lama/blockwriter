<?php
/**
 * Server render for the BW Term List block.
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

$taxonomy = isset( $attributes['taxonomy'] ) ? sanitize_key( $attributes['taxonomy'] ) : 'category';

if ( ! taxonomy_exists( $taxonomy ) || ! is_taxonomy_viewable( $taxonomy ) ) {
	return '';
}

$allowed_orderby = array( 'name', 'count', 'slug', 'term_id' );
$allowed_order   = array( 'ASC', 'DESC' );

$order_by = isset( $attributes['orderBy'] ) ? sanitize_key( $attributes['orderBy'] ) : 'name';
$order_by = in_array( $order_by, $allowed_orderby, true ) ? $order_by : 'name';
$order    = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'ASC';
$order    = in_array( $order, $allowed_order, true ) ? $order : 'ASC';
$limit    = isset( $attributes['limit'] ) ? absint( $attributes['limit'] ) : 0;
$limit    = min( $limit, 100 );

$hide_empty   = ! isset( $attributes['hideEmpty'] ) || (bool) $attributes['hideEmpty'];
$show_count   = ! isset( $attributes['showCount'] ) || (bool) $attributes['showCount'];
$hierarchical = ! empty( $attributes['hierarchical'] ) && is_taxonomy_hierarchical( $taxonomy );
$layout       = isset( $attributes['layout'] ) ? sanitize_key( $attributes['layout'] ) : 'list';
$layout       = in_array( $layout, array( 'list', 'inline' ), true ) ? $layout : 'list';

$query_args = array(
	'taxonomy'   => $taxonomy,
	'hide_empty' => $hide_empty,
	'orderby'    => $order_by,
	'order'      => $order,
);

if ( $limit > 0 ) {
	$query_args['number'] = $limit;
}

$terms = get_terms( $query_args );

if ( is_wp_error( $terms ) || empty( $terms ) ) {
	return '';
}

$render_term = static function ( $term, $show_count, $children_output = '' ) {
	$link = get_term_link( $term );

	if ( is_wp_error( $link ) ) {
		return '';
	}

	$output  = '<li class="bw-term-list__item">';
	$output .= '<a class="bw-term-list__link" href="' . esc_url( $link ) . '">';
	$output .= esc_html( $term->name );
	$output .= '</a>';

	if ( $show_count ) {
		$output .= '<span class="bw-term-list__count">(' . esc_html( number_format_i18n( $term->count ) ) . ')</span>';
	}

	$output .= $children_output;
	$output .= '</li>';

	return $output;
};

$children_by_parent = array();

foreach ( $terms as $term ) {
	$children_by_parent[ $term->parent ][] = $term;
}

$render_branch = static function ( $parent_id ) use ( &$render_branch, &$children_by_parent, $render_term, $show_count ) {
	$output = '';

	foreach ( $children_by_parent[ $parent_id ] ?? array() as $term ) {
		$children = $render_branch( $term->term_id );

		if ( '' !== $children ) {
			$children = '<ul class="bw-term-list__items bw-term-list__items--children">' . $children . '</ul>';
		}

		$output .= $render_term( $term, $show_count, $children );
	}

	return $output;
};

if ( $hierarchical ) {
	$items_markup = $render_branch( 0 );
} else {
	$items_markup = '';

	foreach ( $terms as $term ) {
		$items_markup .= $render_term( $term, $show_count );
	}
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-term-list bw-term-list--' . $layout . ' ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<ul class="bw-term-list__items">
		<?php echo $items_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</ul>
</div>
<?php
return ob_get_clean();
