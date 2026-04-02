<?php
$icon = $attributes['icon'] ?? '';
$icons = json_decode(file_get_contents(BLOCKWRITER_URL . 'assets/icons/brands.json'), true);

$found = array_filter($icons, fn($i) => $i['name'] === $icon);
$iconData = reset($found);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
  <?php if ($iconData): ?>
    <?php echo $iconData['svg']; ?>
  <?php endif; ?>
</div>
