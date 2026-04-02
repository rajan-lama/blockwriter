<?php
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * ----------------------------------------
 * 1. Attributes Filter
 * ----------------------------------------
 */
$attributes = apply_filters(
	'bw_slider_block_attributes',
	$attributes,
	$content
);

$slides                = $attributes['slides'] ?? [];
$showTitle             = $attributes['showTitle'] ?? true;
$showDescription       = $attributes['showDescription'] ?? true;
$showSubtitle          = $attributes['showSubtitle'] ?? true;
$showPrimaryButtons    = $attributes['showPrimaryButtons'] ?? true;
$showSecondaryButtons  = $attributes['showSecondaryButtons'] ?? false;
$interval              = $attributes['interval'] ?? 3000;
$showIndicators        = $attributes['showIndicators'] ?? true;
$showControls          = $attributes['showControls'] ?? true;
$slideEffect           = $attributes['slideEffect'] ?? 'slide';

/**
 * ----------------------------------------
 * 2. Slides Filter
 * ----------------------------------------
 */
$slides = apply_filters(
	'bw_slider_slides',
	$slides,
	$attributes
);

/**
 * ----------------------------------------
 * 3. Carousel Classes
 * ----------------------------------------
 */
$carousel_class = 'carousel slide';

if ($slideEffect === 'fade') {
	$carousel_class .= ' carousel-fade';
}

$carousel_class = apply_filters(
	'bw_slider_carousel_class',
	$carousel_class,
	$attributes
);

/**
 * ----------------------------------------
 * 4. Slide Count (Indicators)
 * ----------------------------------------
 */
$blocks = parse_blocks($content);
$slide_count = count($blocks);

/**
 * ----------------------------------------
 * 5. Unique ID
 * ----------------------------------------
 */
$slider_id = apply_filters(
	'bw_slider_id',
	'slider-' . uniqid(),
	$attributes
);

/**
 * ----------------------------------------
 * 6. Start Output Buffer
 * ----------------------------------------
 */
ob_start();
?>

<div id="<?php echo esc_attr($slider_id); ?>"
	class="<?php echo esc_attr($carousel_class); ?>"
	data-bs-ride="carousel"
	data-bs-interval="<?php echo esc_attr($interval); ?>">

	<?php do_action('bw_slider_before_inner', $attributes); ?>

	<div class="carousel-inner">

		<?php foreach ($slides as $index => $slide):

			/**
			 * ----------------------------------------
			 * 7. Single Slide Filter
			 * ----------------------------------------
			 */
			$slide = apply_filters(
				'bw_slider_single_slide',
				$slide,
				$index,
				$attributes
			);

			ob_start();
		?>

		<div class="carousel-item <?php echo $index === 0 ? 'active' : ''; ?>">

			<?php do_action('bw_slider_before_slide', $slide, $index, $attributes); ?>

			<img src="<?php echo esc_attr($slide['image'] ?? ''); ?>" alt="">

			<div class="carousel-caption d-none d-md-block">

				<?php if ($showTitle && !empty($slide['title'])): ?>
					<h2 class="bw-slider-title">
						<?php echo esc_html($slide['title']); ?>
					</h2>
				<?php endif; ?>

				<?php if ($showSubtitle && !empty($slide['subtitle'])): ?>
					<h5 class="bw-slider-subtitle">
						<?php echo esc_html($slide['subtitle']); ?>
					</h5>
				<?php endif; ?>

				<?php if ($showDescription && !empty($slide['description'])): ?>
					<p class="bw-slider-description">
						<?php echo esc_html($slide['description']); ?>
					</p>
				<?php endif; ?>

				<?php
				/**
				 * ----------------------------------------
				 * 8. Primary Button
				 * ----------------------------------------
				 */
				if ($showPrimaryButtons && !empty($slide['btn1Url']) && !empty($slide['btn1Text'])) {

					$primary_btn = sprintf(
						'<a class="btn btn-primary" href="%s">%s</a>',
						esc_url($slide['btn1Url']),
						esc_html($slide['btn1Text'])
					);

					echo apply_filters(
						'bw_slider_primary_button',
						$primary_btn,
						$slide,
						$attributes
					);
				}

				/**
				 * ----------------------------------------
				 * 9. Secondary Button
				 * ----------------------------------------
				 */
				if ($showSecondaryButtons && !empty($slide['btn2Url']) && !empty($slide['btn2Text'])) {

					$secondary_btn = sprintf(
						'<a class="btn btn-secondary" href="%s">%s</a>',
						esc_url($slide['btn2Url']),
						esc_html($slide['btn2Text'])
					);

					echo apply_filters(
						'bw_slider_secondary_button',
						$secondary_btn,
						$slide,
						$attributes
					);
				}
				?>

			</div>

			<?php do_action('bw_slider_after_slide', $slide, $index, $attributes); ?>

		</div>

		<?php
			/**
			 * ----------------------------------------
			 * 10. Slide HTML Filter
			 * ----------------------------------------
			 */
			$slide_html = ob_get_clean();

			echo apply_filters(
				'bw_slider_slide_html',
				$slide_html,
				$slide,
				$index,
				$attributes
			);

		endforeach; ?>

	</div>

	<?php do_action('bw_slider_after_inner', $attributes); ?>

	<?php if ($showControls): ?>
		<button class="carousel-control-prev"
			type="button"
			data-bs-target="#<?php echo esc_attr($slider_id); ?>"
			data-bs-slide="prev">
			<span class="carousel-control-prev-icon"></span>
		</button>

		<button class="carousel-control-next"
			type="button"
			data-bs-target="#<?php echo esc_attr($slider_id); ?>"
			data-bs-slide="next">
			<span class="carousel-control-next-icon"></span>
		</button>
	<?php endif; ?>

	<?php if ($showIndicators && $slide_count > 0): ?>
		<div class="carousel-indicators">
			<?php for ($i = 0; $i < $slide_count; $i++): ?>
				<button
					type="button"
					data-bs-target="#<?php echo esc_attr($slider_id); ?>"
					data-bs-slide-to="<?php echo esc_attr($i); ?>"
					class="<?php echo $i === 0 ? 'active' : ''; ?>">
				</button>
			<?php endfor; ?>
		</div>
	<?php endif; ?>

</div>

<?php
/**
 * ----------------------------------------
 * 11. Final Output Filter
 * ----------------------------------------
 */
$html = ob_get_clean();

echo apply_filters(
	'bw_slider_output',
	$html,
	$attributes,
	$slides
);
