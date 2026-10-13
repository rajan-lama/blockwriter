<?php
/**
 * Server render for the BW Product Reviews block.
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

if ( ! class_exists( 'WooCommerce' ) || ! function_exists( 'wc_get_product' ) || ! post_type_exists( 'product' ) ) {
	return '';
}

$is_preview = defined( 'REST_REQUEST' ) && REST_REQUEST;

/*
 * Resolve the product from block context (product templates and query loops),
 * falling back to the current entry. The editor preview passes a `post_id`
 * hint because block context is not available over the REST request.
 */
$product_id = 0;

if ( ! empty( $block->context['postId'] ) ) {
	$product_id = absint( $block->context['postId'] );
} elseif ( isset( $_GET['post_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	$product_id = absint( wp_unslash( $_GET['post_id'] ) );
} elseif ( get_the_ID() ) {
	$product_id = absint( get_the_ID() );
}

$product = $product_id ? wc_get_product( $product_id ) : false;

if ( ! $product instanceof WC_Product ) {
	if ( ! $is_preview ) {
		return '';
	}

	$product = false;
}

$is_sample = false === $product;

$reviews_per_page = isset( $attributes['perPage'] ) ? absint( $attributes['perPage'] ) : 5;
$reviews_per_page = min( $reviews_per_page, 50 );
$review_order     = isset( $attributes['order'] ) ? strtoupper( (string) $attributes['order'] ) : 'DESC';
$review_order     = in_array( $review_order, array( 'ASC', 'DESC' ), true ) ? $review_order : 'DESC';
$heading_level    = isset( $attributes['headingLevel'] ) ? absint( $attributes['headingLevel'] ) : 3;
$heading_level    = min( max( $heading_level, 2 ), 6 );
$heading_tag      = 'h' . $heading_level;

$show_title    = ! isset( $attributes['showTitle'] ) || (bool) $attributes['showTitle'];
$show_rating   = ! isset( $attributes['showRating'] ) || (bool) $attributes['showRating'];
$show_avatar   = ! isset( $attributes['showAvatar'] ) || (bool) $attributes['showAvatar'];
$show_date     = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
$show_verified = ! isset( $attributes['showVerified'] ) || (bool) $attributes['showVerified'];

$total_reviews = $is_sample ? 2 : (int) $product->get_review_count();
$reviews       = array();

if ( ! $is_sample ) {
	$comment_query = array(
		'post_id' => $product->get_id(),
		'status'  => 'approve',
		'type'    => 'review',
		'orderby' => 'comment_date_gmt',
		'order'   => $review_order,
	);

	if ( $reviews_per_page > 0 ) {
		$comment_query['number'] = $reviews_per_page;
	}

	$reviews = get_comments( $comment_query );

	/*
	 * Older WooCommerce versions stored reviews as standard comments, so fall
	 * back to that when no typed reviews are found.
	 */
	if ( empty( $reviews ) ) {
		$comment_query['type'] = 'comment';

		$reviews = get_comments( $comment_query );
	}
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$classes = 'bw-woo-product-reviews';

if ( $is_sample ) {
	$classes .= ' bw-woo-product-reviews--preview';
}

if ( '' !== $extra_class ) {
	$classes .= ' ' . $extra_class;
}

$extra_attributes = array(
	'class' => trim( $classes ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( $show_title && $total_reviews > 0 ) : ?>
		<?php echo '<' . $heading_tag . ' class="bw-woo-product-reviews__title">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			<?php
			echo esc_html(
				sprintf(
					/* translators: %s: number of reviews. */
					_n( '%s review', '%s reviews', $total_reviews, 'blockwriter' ),
					number_format_i18n( $total_reviews )
				)
			);
			?>
		<?php echo '</' . $heading_tag . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<?php endif; ?>

	<?php if ( $is_sample ) : ?>
		<ol class="bw-woo-product-reviews__list">
			<?php for ( $sample_index = 0; $sample_index < 2; $sample_index++ ) : ?>
				<li class="bw-woo-product-reviews__item">
					<div class="bw-woo-product-reviews__meta">
						<?php if ( $show_avatar ) : ?>
							<span class="bw-woo-product-reviews__avatar bw-woo-product-reviews__avatar--placeholder" aria-hidden="true"></span>
						<?php endif; ?>

						<div class="bw-woo-product-reviews__author">
							<span class="bw-woo-product-reviews__name"><?php esc_html_e( 'Jane Doe', 'blockwriter' ); ?></span>

							<?php if ( $show_rating && function_exists( 'wc_get_rating_html' ) ) : ?>
								<span class="bw-woo-product-reviews__rating"><?php echo wp_kses_post( wc_get_rating_html( 5 ) ); ?></span>
							<?php endif; ?>

							<?php if ( $show_verified ) : ?>
								<span class="bw-woo-product-reviews__verified"><?php esc_html_e( 'Verified owner', 'blockwriter' ); ?></span>
							<?php endif; ?>
						</div>

						<?php if ( $show_date ) : ?>
							<time class="bw-woo-product-reviews__date" datetime="<?php echo esc_attr( gmdate( 'c' ) ); ?>">
								<?php echo esc_html( date_i18n( get_option( 'date_format' ) ) ); ?>
							</time>
						<?php endif; ?>
					</div>

					<div class="bw-woo-product-reviews__content">
						<?php esc_html_e( 'This is a sample review used for the editor preview.', 'blockwriter' ); ?>
					</div>
				</li>
			<?php endfor; ?>
		</ol>
	<?php elseif ( empty( $reviews ) ) : ?>
		<p class="bw-woo-product-reviews__empty"><?php esc_html_e( 'There are no reviews yet.', 'blockwriter' ); ?></p>
	<?php else : ?>
		<ol class="bw-woo-product-reviews__list">
			<?php foreach ( $reviews as $review ) : ?>
				<?php
				$review_rating = (float) get_comment_meta( $review->comment_ID, 'rating', true );
				$is_verified   = function_exists( 'wc_review_is_from_verified_owner' ) && wc_review_is_from_verified_owner( $review->comment_ID );
				?>
				<li class="bw-woo-product-reviews__item">
					<div class="bw-woo-product-reviews__meta">
						<?php if ( $show_avatar ) : ?>
							<span class="bw-woo-product-reviews__avatar">
								<?php echo wp_kses_post( get_avatar( $review, 48 ) ); ?>
							</span>
						<?php endif; ?>

						<div class="bw-woo-product-reviews__author">
							<span class="bw-woo-product-reviews__name"><?php echo esc_html( get_comment_author( $review ) ); ?></span>

							<?php if ( $show_rating && $review_rating > 0 && function_exists( 'wc_get_rating_html' ) ) : ?>
								<span class="bw-woo-product-reviews__rating"><?php echo wp_kses_post( wc_get_rating_html( $review_rating ) ); ?></span>
							<?php endif; ?>

							<?php if ( $show_verified && $is_verified ) : ?>
								<span class="bw-woo-product-reviews__verified"><?php esc_html_e( 'Verified owner', 'blockwriter' ); ?></span>
							<?php endif; ?>
						</div>

						<?php if ( $show_date ) : ?>
							<time class="bw-woo-product-reviews__date" datetime="<?php echo esc_attr( mysql2date( 'c', $review->comment_date_gmt ) ); ?>">
								<?php echo esc_html( get_comment_date( get_option( 'date_format' ), $review ) ); ?>
							</time>
						<?php endif; ?>
					</div>

					<div class="bw-woo-product-reviews__content">
						<?php echo wp_kses_post( get_comment_text( $review ) ); ?>
					</div>
				</li>
			<?php endforeach; ?>
		</ol>
	<?php endif; ?>
</div>
<?php
return ob_get_clean();
