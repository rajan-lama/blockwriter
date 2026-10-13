<?php
/**
 * Server render for the BW Product Rating block.
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

$product      = $product_id ? wc_get_product( $product_id ) : false;
$rating       = 0.0;
$review_count = 0;
$reviews_url  = '';
$is_sample    = false;

if ( $product instanceof WC_Product ) {
	$rating       = (float) $product->get_average_rating();
	$review_count = (int) $product->get_review_count();
	$reviews_url  = method_exists( $product, 'get_reviews_url' ) ? $product->get_reviews_url() : '';

	if ( $rating <= 0 ) {
		return '';
	}
} elseif ( $is_preview ) {
	$rating       = 4.5;
	$review_count = 12;
	$reviews_url  = '#';
	$is_sample    = true;
} else {
	return '';
}

$show_stars = ! isset( $attributes['showStars'] ) || (bool) $attributes['showStars'];
$show_count = ! isset( $attributes['showCount'] ) || (bool) $attributes['showCount'];

if ( ! $show_stars && ( ! $show_count || $review_count < 1 ) ) {
	return '';
}

$text_align  = isset( $attributes['textAlign'] ) ? sanitize_key( $attributes['textAlign'] ) : '';
$text_align  = in_array( $text_align, array( 'left', 'center', 'right' ), true ) ? $text_align : '';
$font_size   = isset( $attributes['fontSize'] ) ? absint( $attributes['fontSize'] ) : 0;
$font_size   = min( $font_size, 120 );
$text_color  = isset( $attributes['textColor'] ) ? sanitize_hex_color( (string) $attributes['textColor'] ) : '';
$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$styles = array();

if ( $font_size > 0 ) {
	$styles[] = 'font-size:' . $font_size . 'px';
}

if ( $text_color ) {
	$styles[] = 'color:' . $text_color;
}

if ( $text_align ) {
	$styles[] = 'text-align:' . $text_align;
}

$classes = 'bw-woo-product-rating';

if ( $is_sample ) {
	$classes .= ' bw-woo-product-rating--preview';
}

if ( '' !== $extra_class ) {
	$classes .= ' ' . $extra_class;
}

$extra_attributes = array(
	'class' => trim( $classes ),
);

if ( ! empty( $styles ) ) {
	$extra_attributes['style'] = implode( ';', $styles ) . ';';
}

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( $show_stars && function_exists( 'wc_get_rating_html' ) ) : ?>
		<div class="bw-woo-product-rating__stars">
			<?php echo wp_kses_post( wc_get_rating_html( $rating, $review_count ) ); ?>
		</div>
	<?php endif; ?>

	<?php if ( $show_count && $review_count > 0 ) : ?>
		<a class="bw-woo-product-rating__count" href="<?php echo esc_url( '' !== $reviews_url ? $reviews_url : '#' ); ?>">
			<?php
			echo esc_html(
				sprintf(
					/* translators: %s: number of reviews. */
					_n( '%s review', '%s reviews', $review_count, 'blockwriter' ),
					number_format_i18n( $review_count )
				)
			);
			?>
		</a>
	<?php endif; ?>
</div>
<?php
return ob_get_clean();
