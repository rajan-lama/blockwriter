<?php
$tag = $attributes['header'] ?? 'h2';
$text_align = $attributes['textAlign'] ?? '';
$content = $attributes['message'] ?? '';
$style = $text_align ? "text-align: {$text_align};" : '';
?>

<<?php echo esc_html($tag); ?> style="<?php echo esc_attr($style); ?>" <?php echo get_block_wrapper_attributes(); ?>>
    <?php echo esc_html($content); ?>
</<?php echo esc_html($tag); ?>>
