# Copilot Instructions for BlockWriter

This repository is a WordPress plugin called BlockWriter that registers custom Gutenberg blocks and related admin/public assets.

## Project overview
- The main plugin entry point is `blockwriter.php`.
- PHP plugin logic lives in `includes/` and is loaded by the main plugin file.
- Admin-facing PHP templates and assets are in `admin/`.
- Public-facing templates and assets are in `public/`.
- Block source code lives in `src/blocks/`; each block typically has metadata and editor/front-end files.
- Built block assets are generated into `blocks/` and should not be edited manually.

## Description
Building a professional blog, news, magazine, or business website often requires time spent on layouts, post presentation, responsiveness, and design consistency. BlockWriter helps users build faster by providing a growing library of ready-to-use Gutenberg blocks, patterns, and starter templates designed specifically for content-rich and business websites.

The BlockWriter approach is to start with structured, production-ready layouts instead of a blank editor. Users should be able to customize everything visually with the WordPress Block Editor and keep full control over typography, spacing, colors, and responsiveness.

BlockWriter focuses on:
- practical layouts for real websites
- flexible post display and filtering
- reusable patterns and templates
- clean output and editor-first workflows

BlockWriter should also support advanced editor features inspired by modern Gutenberg block libraries:
- AI-assisted content generation and image creation in the editor
- global typography, color, and style controls across blocks
- modular block enable/disable controls for a lighter experience
- ready-made sections, starter packs, and importable templates for faster page creation
- copy/paste styles and reusable patterns across pages
- responsive editing and device-specific controls
- asset regeneration for optimized CSS/JS output
- WPML compatibility and translation-ready block metadata
- conditional visibility, dynamic tags, and ACF/dynamic content support
- password-protected content and private block access
- unfiltered SVG/JSON uploads for richer visual design assets
- lightweight instant loading with minimal resources unless a block is used

Key page-builder capabilities should include:
- advanced block-level styling and responsive controls
- dynamic asset loading so CSS/JS only loads when a block is present
- internal or external dynamic CSS generation for optimized performance
- reusable block templates, patterns, and starter layouts
- an editor-first UX that makes layout design easier than traditional row/column builders

## Custom blocks include
- Accordion
- Advanced Button
- Advanced Form
- Advanced Gallery
- Advanced Text
- Countdown
- Count Up
- Info Box
- Icon
- Icon List
- Lottie Animation
- Posts
- Progress Bar
- Row Layout
- Section
- Show More
- Spacer / Divider
- Table of Contents
- Tabs
- Testimonials
- Heading
- Paragraph
- Image
- Spacing
- Social Share
- Slider
- Blockquote
- Timeline
- Notice
- Call to Action
- Google Map
- Modal
- Image Comparison
- FAQ
- Price List
- Team
- Query Loop
- Column

## Block categories and future structure
To mirror a more complete page builder experience, future block additions can be grouped as:
- Elements: atomic content blocks such as Icon, Image, Advanced Text, Button, Divider, Rating, Video Popup, Progress Bar
- Modules: composable blocks such as Accordion, Tabs, Carousel, Gallery, Form Wrapper, Dynamic Columns, Slider, Container
- Posts: post-related blocks such as Posts grid, Post feature, Post carousel, News Ticker, Duplex Post
- Terms: taxonomy-focused blocks such as Term grid, Term feature, Term carousel
- Widgets: prebuilt widget-like blocks such as About, Call to Action, Countdown, Gallery, Social Links, Team, Testimonial, Timeline

These categories can guide future block roadmap planning and help keep the UI organized.

## Key block features
- Content & Layout Flexibility: support nested rows, responsive controls, and advanced spacing options.
- Design Library: include reusable patterns and starter layouts for fast page assembly.
- Intelligent Load: only load CSS/JS for blocks used on a given page.
- Responsive Controls: support device-specific settings for desktop, tablet, and mobile.
- Typography Controls: allow font size, family, weight, and line-height customization.
- Color & Background Controls: support gradients, overlays, borders, background images, and parallax.
- Configurable Defaults: allow default block settings to be applied automatically.
- Setting Visibility Controls: hide unnecessary controls by user role for a cleaner editor experience.
- Spacing Controls: provide responsive margin and padding controls in multiple units.

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
  - `npm install`
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

## Improvement priorities
When making changes, prioritize improvements that make the plugin more maintainable, performant, and user-friendly:
- Improve code consistency across blocks by reusing shared UI patterns, helpers, and block controls.
- Strengthen performance by reducing duplicated CSS/JS, loading assets more selectively, and optimizing frontend rendering.
- Improve UX and accessibility with clearer controls, better defaults, stronger keyboard support, and better screen-reader behavior.
- Add quality safeguards such as unit tests, linting improvements, and regression checks before release.
- Expand extensibility with presets, starter patterns, and a clearer structure for developers to extend blocks.
- Improve documentation and examples so new users and contributors can understand and use the plugin more easily.
- Maintain compatibility with current WordPress, Gutenberg, and PHP versions.

## Planned block roadmap
When implementing future blocks, treat them as first-class Gutenberg block additions under `src/blocks/` and follow the same structure as existing blocks:
- Accordion
- Advanced Button
- Advanced Form
- Advanced Gallery
- Advanced Text
- Countdown
- Count Up
- Info Box
- Icon
- Icon List
- Lottie Animation
- Posts
- Progress Bar
- Row Layout
- Section
- Show More
- Spacer / Divider
- Table of Contents
- Tabs
- Testimonials

For each new block, add or update:
- a block folder in `src/blocks/`
- the matching `block.json` metadata
- editor and render implementations
- any needed styles or assets
- plugin registration support if required

Prefer shared controls and reusable UI patterns where possible so the plugin stays consistent as new blocks are added.

## When making changes
- If adding or changing a Gutenberg block, update the matching block folder under `src/blocks/` and ensure the block metadata remains correct.
- If editing PHP, keep plugin bootstrapping and class loading intact.
- If changing editor UI or front-end rendering, ensure both the editor experience and public output remain consistent.
- Do not manually edit generated files in `blocks/`; regenerate them via the build process.

## Notes
- This plugin is editor-focused and should remain compatible with Gutenberg and modern WordPress environments.
- Favor minimal, stable changes over large refactors unless explicitly requested.
