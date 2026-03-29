<?php
/**
 * Render callback for Section Block
 */

if( ! function_exists('get_columns')):
function get_columns($layout) {
  switch ($layout) {
        case 'layout-one':
      return ['col-md-12'];

    case 'layout-two':
      return ['col-md-6', 'col-md-6'];

    case 'layout-three':
      return ['col-md-4', 'col-md-4', 'col-md-4'];

    case 'layout-four':
      return ['col-md-3', 'col-md-3', 'col-md-3', 'col-md-3'];

    case 'layout-five':
      return [
        'col-md-2',
        'col-md-2',
        'col-md-2',
        'col-md-2',
        'col-md-2',
      ];

    case 'layout-six':
      return [
        'col-md-2',
        'col-md-2',
        'col-md-2',
        'col-md-2',
        'col-md-2',
        'col-md-2',
      ];

    // Custom layouts
    case 'layout-eight-four':
      return ['col-md-8', 'col-md-4'];

    case 'layout-four-eight':
      return ['col-md-4', 'col-md-8'];

    case 'layout-nine-three':
      return ['col-md-9', 'col-md-3'];

    case 'layout-three-nine':
      return ['col-md-3', 'col-md-9'];

    case 'layout-five-seven':
      return ['col-md-5', 'col-md-7'];

    case 'layout-seven-five':
      return ['col-md-7', 'col-md-5'];

    case 'layout-eighty-twenty':
      return ['col-md-10', 'col-md-2'];

    case 'layout-twenty-eighty':
      return ['col-md-2', 'col-md-10'];

    default:
      return ['col-md-12'];
  }
}
endif;

$layout     = $attributes['layout'] ?? 'layout-one';
$paddingY   = $attributes['paddingY'] ?? '';
$background = $attributes['background'] ?? '';

$columns = get_columns($layout);
?>

<div class="<?php echo esc_attr($paddingY . ' ' . $background); ?>">
    <div class="row">
        <?php foreach ($columns as $col) : ?>
            <div class="col-<?php echo esc_attr($col); ?>">
                <?php
                // Render inner blocks if exist
                if (!empty($content)) {
                    echo $content;
                }
                ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>
