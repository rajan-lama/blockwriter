# Blockwriter

Blockwriter is a Gutenberg-focused WordPress plugin that adds a collection of reusable blocks for building modern, responsive layouts with minimal effort. It is designed for content creators and developers who want to create polished pages directly in the block editor.

## Features

- Custom Gutenberg blocks for sections, columns, buttons, icons, carousel content, and advanced headers
- Responsive layout and styling controls
- Lightweight and modular architecture
- Built with the WordPress block editor APIs and React
- Editor library for searching and inserting registered block patterns and theme templates
- Block presets sidebar for applying curated styling presets to the selected block
- Easy to extend for additional block-based experiences

## Included blocks

- Section
- Row (with Stack variation)
- Back To Top
- Modal
- Off-canvas Drawer
- Post Grid (grid or list layout)
- Post Carousel
- Product Grid (WooCommerce)
- Product List (WooCommerce, Product Grid variation)
- Product Card (WooCommerce)
- Product Carousel (WooCommerce)
- Product Price (WooCommerce)
- Sale Badge (WooCommerce)
- Product Rating (WooCommerce)
- Add To Cart (WooCommerce)
- Cart (WooCommerce)
- Checkout (WooCommerce)
- Mini Cart (WooCommerce)
- Product Categories (WooCommerce)
- Product Filters (WooCommerce)
- Product Reviews (WooCommerce)
- Product Search (WooCommerce)
- Grid
- Divider
- Spacer
- Heading
- Text
- Image
- Video
- Cover
- Quote
- Alert
- Call To Action
- Card
- Testimonial
- FAQ
- Feature
- Tabs
- Team Member
- Pricing Table
- Accordion
- Stat
- Logo Grid
- Steps
- Sticky Section
- Hero
- Comparison Table
- Timeline
- Rating
- Related Posts
- Author Box
- Search
- Term List
- Pagination
- Archive Header
- List
- Testimonial Slider
- Columns
- Column
- Buttons
- Carousel
- Advance Header
- Icon

## Pattern and template library

The editor includes a BlockWriter library. Open it from the **BlockWriter
Library** sidebar or the editor options menu to browse and insert reusable
content at the current position.

- **Patterns** — search registered block patterns by title, keyword, or
  category, preview them, and insert the selected pattern.
- **Templates** — browse the active theme's templates and template parts,
  preview them, and insert their blocks.

Pattern data is read from the core block patterns REST endpoints through the
`core` data store. Template data is read from the `wp_template` and
`wp_template_part` entities in the same store. Insertion uses the block editor
data store. BlockWriter does not store or duplicate pattern or template content.
Patterns can be grouped under the **BlockWriter** pattern category.

Template availability depends on the active theme and the current user's
capabilities, so the Templates tab may be empty on classic themes or for users
without template access.

## Block presets

The editor includes a BlockWriter presets sidebar. Select a block and open the
**BlockWriter Presets** sidebar from the editor options menu to apply a curated
preset to it, such as a display or eyebrow heading, an alert type, or elevated,
flat, and compact card styles.

Presets are named sets of styling attributes applied through the block editor
data store, so undo and redo keep working and nothing about the preset is
stored on the site. Presets never change content attributes, so applying one
does not overwrite the text, buttons, or list items in a block.

## Installation

1. Upload the `blockwriter` plugin folder to your WordPress installation under `wp-content/plugins/`.
2. Activate the plugin from the Plugins screen in the WordPress admin.
3. Open the block editor and search for "Blockwriter" blocks to start building.

## Development

This plugin includes source files in `src/` and generated build assets in `blocks/`.

### Requirements

- Node.js and npm
- WordPress environment for testing

### Common commands

- `npm install`
- `npm run start` – watch mode for admin, public, and block assets
- `npm run build` – build all assets
- `npm run build:blocks` – build block assets only
- `npm run lint:js` – lint JavaScript files
- `npm run lint:php` – run PHP CodeSniffer

## Notes

- After changing block source files, rebuild assets so the generated files in `blocks/` stay in sync.
- Follow WordPress coding standards and existing plugin conventions when contributing.
