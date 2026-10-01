<?php
/**
 * Server render for the BW Loop Builder block.
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

$query_args = \Blockwriter\Query_Builder::build_args( $attributes );

$bw_post_type = $query_args['post_type'];

$bw_post_type_object = get_post_type_object( $bw_post_type );

if ( ! $bw_post_type_object || empty( $bw_post_type_object->public ) ) {
	return '';
}

$columns = isset( $attributes['columns'] ) ? absint( $attributes['columns'] ) : 3;
$columns = min( max( $columns, 1 ), 4 );
$gap     = isset( $attributes['gap'] ) ? absint( $attributes['gap'] ) : 24;
$gap     = min( $gap, 200 );

$loop_query = new WP_Query( $query_args );

if ( ! $loop_query->have_posts() ) {
	return '';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-loop-builder ' . $extra_class ),
	'style' => '--bw-loop-builder-columns:' . $columns . ';--bw-loop-builder-gap:' . $gap . 'px;',
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

// Re-render the stored inner blocks once per post, passing the matching post
// context so dynamic inner blocks such as core/post-title resolve per item.
$items = '';

while ( $loop_query->have_posts() ) {
	$loop_query->the_post();

	$block_instance              = $block->parsed_block;
	$block_instance['blockName'] = 'core/null';
	$block_instance['context']   = array_merge(
		$block->context,
		array(
			'postId'   => get_the_ID(),
			'postType' => get_post_type(),
		)
	);

	$item_content = ( new WP_Block( $block_instance ) )->render( array( 'dynamic' => false ) );

	$items .= '<div class="bw-loop-builder__item">' . $item_content . '</div>';
}

wp_reset_postdata();

return '<div ' . $wrapper_attributes . '>' . $items . '</div>';
