<?php
/**
 * Server render for the BW Product Filters block.
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

$show_categories = ! isset( $attributes['showCategories'] ) || (bool) $attributes['showCategories'];
$show_price      = ! isset( $attributes['showPrice'] ) || (bool) $attributes['showPrice'];
$show_counts     = isset( $attributes['showCounts'] ) && (bool) $attributes['showCounts'];

$filters_title = isset( $attributes['title'] ) ? trim( (string) $attributes['title'] ) : '';

$category_limit = isset( $attributes['categoryLimit'] ) ? absint( $attributes['categoryLimit'] ) : 8;
if ( $category_limit < 1 || $category_limit > 50 ) {
	$category_limit = 8;
}

$price_min = isset( $attributes['priceMin'] ) ? (float) $attributes['priceMin'] : 0;
$price_max = isset( $attributes['priceMax'] ) ? (float) $attributes['priceMax'] : 0;

$button_text = isset( $attributes['buttonText'] ) ? trim( (string) $attributes['buttonText'] ) : '';
if ( '' === $button_text ) {
	$button_text = __( 'Filter', 'blockwriter' );
}

$shop_url = function_exists( 'wc_get_page_permalink' ) ? wc_get_page_permalink( 'shop' ) : home_url( '/' );

$current_term_id = 0;
if ( is_tax( 'product_cat' ) ) {
	$queried_object = get_queried_object();
	if ( $queried_object instanceof WP_Term ) {
		$current_term_id = (int) $queried_object->term_id;
	}
}

$terms = array();
if ( $show_categories ) {
	$terms = get_terms(
		array(
			'taxonomy'   => 'product_cat',
			'hide_empty' => true,
			'number'     => $category_limit,
			'orderby'    => 'name',
			'order'      => 'ASC',
		)
	);

	if ( is_wp_error( $terms ) ) {
		$terms = array();
	}
}

$extra_class = isset( $attributes['extraClass'] ) ? (string) $attributes['extraClass'] : '';
$html_id     = isset( $attributes['htmlId'] ) ? (string) $attributes['htmlId'] : '';

$extra_attributes = array(
	'class' => trim( 'bw-woo-product-filters ' . $extra_class ),
);

if ( '' !== $html_id ) {
	$extra_attributes['id'] = $html_id;
}

$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

$has_terms = $show_categories && ! empty( $terms );

ob_start();
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( '' !== $filters_title ) : ?>
		<h2 class="bw-woo-product-filters__title"><?php echo esc_html( $filters_title ); ?></h2>
	<?php endif; ?>

	<?php if ( $has_terms ) : ?>
		<div class="bw-woo-product-filters__group">
			<span class="bw-woo-product-filters__group-title"><?php echo esc_html__( 'Product categories', 'blockwriter' ); ?></span>

			<ul class="bw-woo-product-filters__categories">
				<?php foreach ( $terms as $product_term ) : ?>
					<?php
					if ( ! $product_term instanceof WP_Term ) {
						continue;
					}

					$term_link = get_term_link( $product_term );
					if ( is_wp_error( $term_link ) ) {
						continue;
					}

					$is_current = (int) $product_term->term_id === $current_term_id;
					?>
					<li class="bw-woo-product-filters__category">
						<a
							class="bw-woo-product-filters__category-link"
							href="<?php echo esc_url( (string) $term_link ); ?>"
							<?php echo $is_current ? ' aria-current="page"' : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						>
							<span class="bw-woo-product-filters__category-name"><?php echo esc_html( $product_term->name ); ?></span>
							<?php if ( $show_counts ) : ?>
								<span class="bw-woo-product-filters__category-count"><?php echo esc_html( (string) (int) $product_term->count ); ?></span>
							<?php endif; ?>
						</a>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
	<?php endif; ?>

	<?php if ( $show_price ) : ?>
		<?php $price_id = wp_unique_id( 'bw-woo-product-filters-price-' ); ?>
		<div class="bw-woo-product-filters__group">
			<span class="bw-woo-product-filters__group-title"><?php echo esc_html__( 'Filter by price', 'blockwriter' ); ?></span>

			<form class="bw-woo-product-filters__price" method="get" action="<?php echo esc_url( $shop_url ); ?>">
				<div class="bw-woo-product-filters__price-fields">
					<label class="screen-reader-text" for="<?php echo esc_attr( $price_id . '-min' ); ?>">
						<?php echo esc_html__( 'Minimum price', 'blockwriter' ); ?>
					</label>
					<input
						class="bw-woo-product-filters__price-input"
						id="<?php echo esc_attr( $price_id . '-min' ); ?>"
						type="number"
						name="min_price"
						min="0"
						step="1"
						value="<?php echo esc_attr( $price_min > 0 ? (string) $price_min : '' ); ?>"
						placeholder="<?php echo esc_attr__( 'Min', 'blockwriter' ); ?>"
					/>

					<label class="screen-reader-text" for="<?php echo esc_attr( $price_id . '-max' ); ?>">
						<?php echo esc_html__( 'Maximum price', 'blockwriter' ); ?>
					</label>
					<input
						class="bw-woo-product-filters__price-input"
						id="<?php echo esc_attr( $price_id . '-max' ); ?>"
						type="number"
						name="max_price"
						min="0"
						step="1"
						value="<?php echo esc_attr( $price_max > 0 ? (string) $price_max : '' ); ?>"
						placeholder="<?php echo esc_attr__( 'Max', 'blockwriter' ); ?>"
					/>

					<input type="hidden" name="post_type" value="product" />

					<button class="bw-woo-product-filters__submit" type="submit">
						<?php echo esc_html( $button_text ); ?>
					</button>
				</div>
			</form>
		</div>
	<?php endif; ?>

	<?php if ( $has_terms || $show_price ) : ?>
		<a class="bw-woo-product-filters__clear" href="<?php echo esc_url( $shop_url ); ?>">
			<?php echo esc_html__( 'Clear filters', 'blockwriter' ); ?>
		</a>
	<?php endif; ?>
</div>
<?php
return ob_get_clean();
