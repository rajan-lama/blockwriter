<?php
/**
 * Server render for the BW Archive Header block.
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

$show_title     = ! isset( $attributes['showTitle'] ) || (bool) $attributes['showTitle'];
$show_prefix    = ! isset( $attributes['showPrefix'] ) || (bool) $attributes['showPrefix'];
$show_desc      = ! isset( $attributes['showDescription'] ) || (bool) $attributes['showDescription'];
$heading_level  = isset( $attributes['headingLevel'] ) ? absint( $attributes['headingLevel'] ) : 1;
$heading_level  = min( max( $heading_level, 1 ), 6 );
$heading_tag    = 'h' . $heading_level;
$title          = '';
$description    = '';

if ( $is_preview ) {
	$title       = __( 'Archive Title', 'blockwriter' );
	$description = __( 'This is a sample archive description used for preview.', 'blockwriter' );
} elseif ( is_search() ) {
	$query = get_search_query();

	$title = $show_prefix
		/* translators: %s: search query. */
		? sprintf( __( 'Search results for: %s', 'blockwriter' ), $query )
		: $query;
} elseif ( is_home() ) {
	$page_for_posts = (int) get_option( 'page_for_posts' );

	$title = $page_for_posts
		? get_the_title( $page_for_posts )
		: __( 'Latest Posts', 'blockwriter' );
} elseif ( is_archive() ) {
	if ( ! $show_prefix ) {
		add_filter( 'get_the_archive_title_prefix', '__return_empty_string' );
	}

	$title = get_the_archive_title();

	if ( ! $show_prefix ) {
		remove_filter( 'get_the_archive_title_prefix', '__return_empty_string' );
	}

	$description = get_the_archive_description();
}

if ( '' === $title && '' === $description ) {
	return '';
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-archive-header ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( $show_title && '' !== $title ) : ?>
		<?php echo '<' . $heading_tag . ' class="bw-archive-header__title">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			<?php echo esc_html( $title ); ?>
		<?php echo '</' . $heading_tag . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<?php endif; ?>

	<?php if ( $show_desc && '' !== $description ) : ?>
		<div class="bw-archive-header__description">
			<?php echo wp_kses_post( $description ); ?>
		</div>
	<?php endif; ?>
</div>
<?php
return ob_get_clean();
