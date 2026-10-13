<?php
/**
 * Server render for the BW Pagination block.
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

global $wp_query;

if ( ! $wp_query instanceof WP_Query ) {
	return '';
}

$total_pages = (int) $wp_query->max_num_pages;
$is_preview  = defined( 'REST_REQUEST' ) && REST_REQUEST;

if ( $total_pages < 2 ) {
	if ( ! $is_preview ) {
		return '';
	}

	$total_pages = 3;
}

$current_page = max( 1, (int) get_query_var( 'paged' ) );
$current_page = min( $current_page, $total_pages );

$show_prev_next = ! isset( $attributes['showPrevNext'] ) || (bool) $attributes['showPrevNext'];
$show_numbers   = ! isset( $attributes['showNumbers'] ) || (bool) $attributes['showNumbers'];
$mid_size       = isset( $attributes['midSize'] ) ? absint( $attributes['midSize'] ) : 1;
$mid_size       = min( $mid_size, 3 );
$end_size       = isset( $attributes['endSize'] ) ? absint( $attributes['endSize'] ) : 1;
$end_size       = min( $end_size, 3 );

$justify = isset( $attributes['justify'] ) ? sanitize_key( $attributes['justify'] ) : 'left';
$justify = in_array( $justify, array( 'left', 'center', 'right' ), true ) ? $justify : 'left';

$prev_text = isset( $attributes['prevText'] ) ? trim( (string) $attributes['prevText'] ) : '';
$next_text = isset( $attributes['nextText'] ) ? trim( (string) $attributes['nextText'] ) : '';

if ( '' === $prev_text ) {
	$prev_text = __( 'Previous', 'blockwriter' );
}

if ( '' === $next_text ) {
	$next_text = __( 'Next', 'blockwriter' );
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-pagination bw-pagination--' . $justify . ' ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

if ( $is_preview && (int) $wp_query->max_num_pages < 2 ) {
	ob_start();
	?>
	<nav <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> aria-label="<?php esc_attr_e( 'Pagination preview', 'blockwriter' ); ?>">
		<div class="bw-pagination__items" aria-hidden="true">
			<span class="bw-pagination__link bw-pagination__prev"><?php echo esc_html( $prev_text ); ?></span>
			<span class="bw-pagination__link">1</span>
			<span class="bw-pagination__link is-current">2</span>
			<span class="bw-pagination__link">3</span>
			<span class="bw-pagination__link bw-pagination__next"><?php echo esc_html( $next_text ); ?></span>
		</div>
	</nav>
	<?php
	return ob_get_clean();
}

$prev_url = $current_page > 1 ? get_pagenum_link( $current_page - 1 ) : '';
$next_url = $current_page < $total_pages ? get_pagenum_link( $current_page + 1 ) : '';

$numbers = '';

if ( $show_numbers ) {
	$numbers = paginate_links(
		array(
			'total'     => $total_pages,
			'current'   => $current_page,
			'mid_size'  => $mid_size,
			'end_size'  => $end_size,
			'prev_next' => false,
			'type'      => 'plain',
			'add_args'  => false,
		)
	);
}

ob_start();
?>
<nav <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> aria-label="<?php esc_attr_e( 'Pagination', 'blockwriter' ); ?>">
	<div class="bw-pagination__items">
		<?php if ( $show_prev_next && '' !== $prev_url ) : ?>
			<a class="bw-pagination__link bw-pagination__prev" href="<?php echo esc_url( $prev_url ); ?>" rel="prev">
				<?php echo esc_html( $prev_text ); ?>
			</a>
		<?php endif; ?>

		<?php echo $numbers; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>

		<?php if ( $show_prev_next && '' !== $next_url ) : ?>
			<a class="bw-pagination__link bw-pagination__next" href="<?php echo esc_url( $next_url ); ?>" rel="next">
				<?php echo esc_html( $next_text ); ?>
			</a>
		<?php endif; ?>
	</div>
</nav>
<?php
return ob_get_clean();
