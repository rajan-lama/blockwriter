# Blockwriter

Blockwriter is a Gutenberg-focused WordPress plugin that adds a collection of reusable blocks for building modern, responsive layouts with minimal effort. It is designed for content creators and developers who want to create polished pages directly in the block editor.

## Features

- Custom Gutenberg blocks for sections, columns, buttons, icons, carousel content, and advanced headers
- Responsive layout and styling controls
- Lightweight and modular architecture
- Built with the WordPress block editor APIs and React
- Editor library for searching and inserting registered block patterns and theme templates
- Block presets sidebar for applying curated styling presets to the selected block
- Global styles sidebar for browsing the theme's color, gradient, font, and spacing presets
- Predefined design sections for inserting ready-made hero, feature, stats, call to action, pricing, and testimonial layouts
- Block collection sidebar for browsing and inserting BlockWriter blocks grouped by purpose
- Responsive visibility sidebar and front-end styles for showing or hiding blocks per device
- Conditional content sidebar for showing blocks to selected users or during a date range
- Query builder sidebar for adding tags, author, offset, include/exclude, and sticky filters to post grid and post carousel queries
- AI section and block generators powered by an OpenAI-compatible endpoint
- Easy to extend for additional block-based experiences

## Included blocks

- Section
- Row (with Stack variation)
- Back To Top
- Breadcrumbs
- Modal
- Off-canvas Drawer
- Post Grid (grid or list layout)
- Post Carousel
- Loop Builder (custom repeatable layout)
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
- Dynamic Content
- AI Content
- Image
- Video
- Cover
- Quote
- Alert
- Call To Action
- Newsletter Signup
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

## Global style presets

Open the **BlockWriter Global Styles** sidebar from the editor options menu to
browse the global presets made available by WordPress and the active theme:
color palettes, gradients, font sizes, font families, and spacing sizes.

Each preset shows its name, value, and slug, and can be copied to the clipboard
for use in block settings. The panel reads the editor settings and never writes
to the site, so it cannot affect saved content or global styles.

## Design sections

BlockWriter registers a set of predefined section layouts as variations of the
Section block. Open the block inserter, search for "BlockWriter", and choose a
design section under the **BlockWriter** category to insert:

- **Hero section** — centered heading, supporting text, and buttons.
- **Feature grid** — a heading followed by three feature columns.
- **Stats row** — three animated statistics in a row.
- **Call to action** — centered heading, text, and a button.
- **Pricing table** — three pricing plans with a highlighted recommended plan.
- **Testimonial section** — a centered quote with attribution.

Each variation inserts only the Section block with a template of inner blocks.
The layout is composed from existing BlockWriter blocks, so after insertion every
part can be edited with normal WordPress block behavior and no serialized block
markup is stored or duplicated by BlockWriter.

## Block collection

Open the **BlockWriter Blocks** sidebar from the editor options menu to browse
BlockWriter's own blocks grouped into collections: Layout, Content, Components,
Navigation and utility, Dynamic content, and WooCommerce. Use the search field
to narrow the list and insert any block at the current position.

Collections reference existing block names only. Titles, descriptions, and
icons are read from the block registry, WooCommerce collections appear only when
their blocks are registered, and nothing is stored or duplicated by BlockWriter.

## Responsive visibility

Select a BlockWriter block and open the **BlockWriter Visibility** sidebar from
the editor options menu to control the devices it is displayed on:

- **Desktop** — screens 1025px and wider.
- **Tablet** — screens between 768px and 1024px.
- **Mobile** — screens 767px and narrower.

Unchecking a device hides the block on that breakpoint on the front end. The
toggles only change the block's own visibility attributes through the block
editor data store, so undo and redo keep working and nothing is stored on the
site. The **BlockWriter Visibility** sidebar also offers a one-click "Show on all
devices" reset.

The visibility classes are applied to the rendered block by the
`Blockwriter\Responsive_Visibility` class, which also loads the small stylesheet
that defines the breakpoints.

## Conditional content

Select a BlockWriter block and open the **BlockWriter Conditions** sidebar from
the editor options menu to control when it is displayed:

- **Visible to** — all users, logged in users, logged out users, or specific
  user roles.
- **Visible from** / **Visible until** — an optional date range. Leave a field
  empty for an open-ended range.

Unmet conditions hide the block on the front end, while the block stays visible
inside the editor so it can still be edited and previewed. The controls only
change the block's own attributes through the block editor data store, so undo
and redo keep working and nothing is stored on the site. A **Clear conditions**
button resets the block.

The conditions are evaluated by the `Blockwriter\Conditional_Content` class
during block rendering. User and role conditions use the standard WordPress
capability data and date conditions are compared against the site time zone.

## Query builder

Select a Post Grid, Post Carousel, or Loop Builder block and open the **BlockWriter Query**
sidebar from the editor options menu to add advanced filters to its query:

- **Author** — limit results to a single author.
- **Skip first** — offset the query by a number of posts.
- **Tags** — match any of the selected tags.
- **Include posts** / **Exclude posts** — comma separated post IDs.
- **Ignore sticky posts** — keep sticky posts in their natural order.

Post type, number of posts, order, and categories are set in the block's own
settings. The controls only change the block's own query attributes through the
block editor data store, so undo and redo keep working and nothing is stored on
the site. A **Clear advanced filters** button resets the block.

The filters are turned into a safe `WP_Query` argument list by the
`Blockwriter\Query_Builder` class during block rendering.

## Loop builder

The **BW Loop Builder** block repeats a custom layout for every post in a
query. Unlike the predefined Post Grid and Post Carousel cards, the repeated
item is built from inner blocks, so you can compose any layout.

Insert the block and edit the inner blocks that make up a single item. The
default template uses core post blocks (featured image, title, date, and
excerpt) that read from the current post in the loop. Query controls live in
the block settings, and the **BlockWriter Query** sidebar adds author, offset,
tag, include/exclude, and sticky filters.

On the server, `src/blocks/loop-builder/render.php` runs the query and
re-renders the stored inner blocks once per post with the matching `postId` and
`postType` block context.

## Dynamic content

The **BW Dynamic Content** block outputs a single dynamic value. Pick a source
in the block settings:

- Post fields: title, excerpt, date, author, terms, or a custom field (meta)
  key.
- Site fields: site title, tagline, and URL.
- Context fields: current year, archive title, archive description, and the
  search query.

Each source supports an optional HTML tag, a link to its source where
applicable, and prefix/suffix text. Post fields read the current post from
block context, so the block can be placed inside the Loop Builder to display
each item's data, or used directly on a single post.

The value is resolved and escaped on the server by
`src/blocks/dynamic-content/render.php`.

## AI generator

The **BlockWriter AI** editor sidebar turns a prompt into native Gutenberg
blocks. Choose **Section** to generate a full layout or **Blocks** to generate
a smaller fragment, describe what you want, and press **Generate**. The
response is converted with the WordPress raw handler, so the result is made of
editable blocks rather than raw markup.

AI features require an OpenAI-compatible endpoint:

1. Go to **Settings → BlockWriter AI**.
2. Enter the API base URL (for example `https://api.openai.com/v1`), your API
   key, and the model name.
3. Save the settings.

The key is stored in the site options and is used only on the server. The
editor calls the `blockwriter/v1/ai` REST proxy, which requires the
`edit_posts` capability, and the key is never sent to the browser. The
generators stay hidden until the settings are complete. Review AI-generated
content before publishing.

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
