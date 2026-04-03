<?php

/**
 * @link              https://rithemes.com
 * @since             1.0.1
 * @package           Blockwriter
 *
 * @wordpress-plugin
 * Plugin Name:       Blockwriter
 * Plugin URI:        https://rithemes.com/wordpress-plugins/blockwriter
 * Description:       A powerful block plugins for WordPressers.
 * Version:           1.0.2
 * Author:            Ri Themes
 * Author URI:        https://rithemes.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       blockwriter
 * Domain Path:       /languages
 * Requires at least: 6.0
 * Requires PHP:      7.0
 */

use Blockwriter\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Bootstrap the plugin.
 */

if (is_dir(__DIR__ . '/vendor')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

require_once untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/includes/helper-functions.php';

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'BLOCKWRITER_VERSION', '1.0.2' );
define( 'BLOCKWRITER_PATH', plugin_dir_path( __FILE__ ) );
define( 'BLOCKWRITER_URL', plugin_dir_url( __FILE__ ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-blockwriter-activator.php
 */
function activate_blockwriter() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-blockwriter-activator.php';
	Blockwriter_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-blockwriter-deactivator.php
 */
function deactivate_blockwriter() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-blockwriter-deactivator.php';
	Blockwriter_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_blockwriter' );
register_deactivation_hook( __FILE__, 'deactivate_blockwriter' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-blockwriter.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function blockwriter_block_init() {
	foreach ( glob( __DIR__ . '/blocks/*' ) as $block_path ) {
		if ( file_exists( $block_path . '/block.json' ) ) {
			register_block_type( $block_path );
		}
	}
}

function blockwriter_category( $block_categories, $editor_context ) {
    if ( ! empty( $editor_context->post ) ) {
        array_push(
            $block_categories,
            array(
                'slug'  => 'blockwriter',
                'title' => __( 'Block Writer', 'blockwriter' ),
                'icon'  => null,
            )
        );
    }
    return $block_categories;
}

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_blockwriter() {
	$plugin = new Blockwriter();
	$plugin->run();
  add_action( 'init', 'blockwriter_block_init' );
  add_filter( 'block_categories_all', 'blockwriter_category', 10, 2 );
}

run_blockwriter();
