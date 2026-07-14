# Copilot Instructions for BlockWriter

This repository is a WordPress plugin called BlockWriter that registers custom Gutenberg blocks and related admin/public assets.

## Project overview
- The main plugin entry point is `blockwriter.php`.
- PHP plugin logic lives in `includes/` and is loaded by the main plugin file.
- Admin-facing PHP templates and assets are in `admin/`.
- Public-facing templates and assets are in `public/`.
- Block source code lives in `src/blocks/`; each block typically has metadata and editor/front-end files.
- Built block assets are generated into `blocks/` and should not be edited manually.

## Architecture and file locations
- `includes/`: plugin classes, helper functions, activation/deactivation hooks, i18n, and patterns.
- `src/admin/`: source files for admin scripts/styles.
- `src/public/`: source files for public scripts/styles.
- `src/blocks/`: Gutenberg block source. Each block usually includes `block.json`, `edit.js`, and related assets.
- `blocks/`: generated build output for blocks.
- `vendor/`: Composer dependencies.

## Development workflow
- Prefer editing source files in `src/` and rebuilding assets.
- Common commands:
  - `npm run start` – starts watch mode for admin, public, and block assets.
  - `npm run build` – formats and builds all assets.
  - `npm run build:blocks` – builds block assets only.
  - `npm run lint:js` – lints JavaScript.
  - `npm run lint:php` – runs PHP CodeSniffer.
  - `npm run lint:php:fix` – auto-fixes PHP style issues.
- After changing block source, rebuild so the generated files in `blocks/` stay in sync.

## Coding conventions
- Follow WordPress coding standards and the existing plugin style.
- This plugin targets PHP 5.6+ compatibility, so avoid newer syntax that could break older hosts.
- Use WordPress i18n helpers such as `__()`, `_e()`, `esc_html__()`, and `esc_attr__()` for user-facing strings.
- For block development, use WordPress package conventions and `@wordpress/scripts` patterns.
- Keep components small and focused; reuse shared UI from `src/components/` when appropriate.
- Avoid hardcoded user-facing text and unnecessary dependencies.

## When making changes
- If adding or changing a Gutenberg block, update the matching block folder under `src/blocks/` and ensure the block metadata remains correct.
- If editing PHP, keep plugin bootstrapping and class loading intact.
- If changing editor UI or front-end rendering, ensure both the editor experience and public output remain consistent.
- Do not manually edit generated files in `blocks/`; regenerate them via the build process.

## Notes
- This plugin is editor-focused and should remain compatible with Gutenberg and modern WordPress environments.
- Favor minimal, stable changes over large refactors unless explicitly requested.
