# Blockwriter

Blockwriter is a Gutenberg-focused WordPress plugin that adds a collection of reusable blocks for building modern, responsive layouts with minimal effort. It is designed for content creators and developers who want to create polished pages directly in the block editor.

## Features

- Custom Gutenberg blocks for sections, columns, buttons, icons, carousel content, and advanced headers
- Responsive layout and styling controls
- Lightweight and modular architecture
- Built with the WordPress block editor APIs and React
- Easy to extend for additional block-based experiences

## Included blocks

- Section
- Columns
- Column
- Buttons
- Carousel
- Advance Header
- Icon

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
