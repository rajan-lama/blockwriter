<?php
/**
 * Server render for the BW Author Box block.
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

$author_id = isset( $attributes['authorId'] ) ? absint( $attributes['authorId'] ) : 0;

/*
 * Resolve the author. Front end rendering uses block context; the editor
 * preview passes a post_id hint so the current entry's author is shown.
 */
if ( ! $author_id ) {
	$current_id = 0;

	if ( ! empty( $block->context['postId'] ) ) {
		$current_id = absint( $block->context['postId'] );
	} elseif ( isset( $_GET['post_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$current_id = absint( wp_unslash( $_GET['post_id'] ) );
	} elseif ( get_the_ID() ) {
		$current_id = absint( get_the_ID() );
	}

	if ( $current_id ) {
		$author_id = absint( get_post_field( 'post_author', $current_id ) );
	}
}

$author = $author_id ? get_userdata( $author_id ) : false;

if ( ! $author ) {
	return '';
}

$layout        = isset( $attributes['layout'] ) ? sanitize_key( $attributes['layout'] ) : 'horizontal';
$layout        = in_array( $layout, array( 'horizontal', 'stacked' ), true ) ? $layout : 'horizontal';
$heading_level = isset( $attributes['headingLevel'] ) ? absint( $attributes['headingLevel'] ) : 3;
$heading_level = min( max( $heading_level, 2 ), 6 );
$avatar_size   = isset( $attributes['avatarSize'] ) ? absint( $attributes['avatarSize'] ) : 96;
$avatar_size   = min( max( $avatar_size, 24 ), 256 );

$show_avatar = ! isset( $attributes['showAvatar'] ) || (bool) $attributes['showAvatar'];
$show_bio    = ! isset( $attributes['showBio'] ) || (bool) $attributes['showBio'];
$show_link   = ! isset( $attributes['showArchiveLink'] ) || (bool) $attributes['showArchiveLink'];

$archive_link_text = isset( $attributes['archiveLinkText'] ) ? (string) $attributes['archiveLinkText'] : '';

if ( '' === $archive_link_text ) {
	$archive_link_text = __( 'View all posts', 'blockwriter' );
}

$bio          = $show_bio ? $author->description : '';
$display_name = $author->display_name;
$author_link  = get_author_posts_url( $author->ID );
$extra_class  = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id      = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';
$heading_tag  = 'h' . (int) $heading_level;

$extra_attributes = array(
	'class' => trim( 'bw-author-box bw-author-box--' . $layout . ' ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( $show_avatar ) : ?>
		<div class="bw-author-box__avatar">
			<?php echo get_avatar( $author->ID, $avatar_size, '', $display_name ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</div>
	<?php endif; ?>

	<div class="bw-author-box__body">
		<?php echo '<' . $heading_tag . ' class="bw-author-box__name">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			<?php echo esc_html( $display_name ); ?>
		<?php echo '</' . $heading_tag . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>

		<?php if ( '' !== $bio ) : ?>
			<p class="bw-author-box__bio"><?php echo esc_html( $bio ); ?></p>
		<?php endif; ?>

		<?php if ( $show_link ) : ?>
			<a class="bw-author-box__archive-link" href="<?php echo esc_url( $author_link ); ?>">
				<?php echo esc_html( $archive_link_text ); ?>
			</a>
		<?php endif; ?>
	</div>
</div>
<?php
return ob_get_clean();
