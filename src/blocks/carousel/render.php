<?php
if ( ! defined( 'WPINC' ) ) {
	die;
}

$slides = $attributes['slides'] ?? [];
$showTitle = $attributes['showTitle'] ?? true;
$showDescription = $attributes['showDescription'] ?? true;
$showSubtitle = $attributes['showSubtitle'] ?? true;
$showPrimaryButtons = $attributes['showPrimaryButtons'] ?? true;
$showSecondaryButtons = $attributes['showSecondaryButtons'] ?? false;
$interval = $attributes['interval'] ?? 3000;
$showIndicators = $attributes['showIndicators'] ?? true;
$showControls = $attributes['showControls'] ?? true;
$slideEffect = $attributes['slideEffect'] ?? 'slide';

// Add fade class if enabled
$carousel_class = 'carousel slide';
if ($slideEffect === 'fade') {
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

	<div class="carousel-inner">
		<?php foreach ($slides as $index => $slide){ ?>
      <div class="carousel-item <?php echo $index === 0 ? 'active' : ''; ?>">
        <img src="<?php echo esc_attr($slide['image']); ?>" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <?php if ($showTitle && esc_attr($slide['title'])) { ?> 
          <h2 class="bw-slider-title"><?php echo esc_html($slide['title']); ?></h2>
          <?php } ?>
          <?php if ($showSubtitle && esc_attr($slide['subtitle'])) { ?>
          <h5 class="bw-slider-subtitle"><?php echo esc_html($slide['subtitle']); ?></h5>
          <?php } ?>
          <?php if ($showDescription && esc_attr($slide['description'])) { ?>
            <p class="bw-slider-description"><?php echo esc_html($slide['description']); ?></p>
          <?php } ?>
          <?php if ($showPrimaryButtons && esc_attr($slide['btn1Url']) && esc_attr($slide['btn1Text'])) { ?>
            <a class="btn btn-primary" href="<?php echo esc_attr($slide['btn1Url']); ?>"><?php echo esc_html($slide['btn1Text']); ?></a>
          <?php } ?>
          <?php if ($showSecondaryButtons && esc_attr($slide['btn2Url']) && esc_attr($slide['btn2Text'])) { ?>
            <a class="btn btn-secondary" href="<?php echo esc_attr($slide['btn2Url']); ?>"><?php echo esc_html($slide['btn2Text']); ?></a>
          <?php } ?>
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
