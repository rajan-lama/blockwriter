<?php
$interval = $attributes['interval'] ?? 3000;
$showIndicators = $attributes['showIndicators'] ?? true;
$showControls = $attributes['showControls'] ?? true;
$fade = $attributes['fade'] ?? false;

// Add fade class if enabled
$carousel_class = 'carousel slide';
if ($fade) {
	$carousel_class .= ' carousel-fade';
}

// Count slides
$blocks = parse_blocks($content);
$slide_count = count($blocks);

// Unique ID for multiple sliders
$slider_id = 'slider-' . uniqid();
?>

<div id="<?php echo esc_attr($slider_id); ?>"
	class="<?php echo esc_attr($carousel_class); ?>"
	data-bs-ride="carousel"
	data-bs-interval="<?php echo esc_attr($interval); ?>">

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

	<div class="carousel-inner">
    <?php foreach ($slides as $index => $slide){ ?>
		<div class="carousel-item">
      <img src="..." alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>...</h5>
        <p>...</p>
      </div>
    </div>
    <?php } ?>
	</div>

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

</div>
