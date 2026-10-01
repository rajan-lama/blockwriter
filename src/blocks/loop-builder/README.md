# BW Loop Builder

## Description

The Loop Builder repeats a custom layout for every post returned by a query.
It is the flexible alternative to the predefined Post Grid and Post Carousel
blocks: instead of a fixed card, you design the repeated item yourself with
inner blocks.

The query itself (post type, number of items, order, categories, tags, author,
offset, include/exclude, and sticky handling) is shared with the other post
blocks through the `Blockwriter\Query_Builder` class and the **BlockWriter
Query** editor sidebar.

## Features

- Custom repeatable layout built from inner blocks.
- Post type, count, columns, gap, order, and category controls in the block
  settings.
- Tags, author, offset, include/exclude, and sticky controls in the BlockWriter
  Query sidebar.
- Responsive grid that collapses to a single column on small screens.
- Real post data while editing through the post context.

## Attributes

- `postType` (string) — Post type to query. Default `post`.
- `perPage` (number) — Number of items, 1–24. Default `6`.
- `columns` (number) — Grid columns, 1–4. Default `3`.
- `gap` (number) — Grid gap in pixels. Default `24`.
- `orderBy` (string) — `date`, `title`, `modified`, `menu_order`, or `rand`.
- `order` (string) — `ASC` or `DESC`.
- `categoryIds` (array) — Category IDs for post queries.
- `tagIds` (array) — Tag IDs for post queries.
- `authorId` (number) — Limit to an author.
- `offset` (number) — Number of matching posts to skip.
- `includeIds` (array) — Only include these post IDs.
- `excludeIds` (array) — Exclude these post IDs.
- `ignoreSticky` (boolean) — Ignore sticky post ordering.
- `htmlId` (string) — Optional wrapper ID.
- `extraClass` (string) — Optional extra wrapper class.

## Usage

1. Insert the **BW Loop Builder** block.
2. Edit the inner blocks to design the repeated item. The default template uses
   core post blocks (featured image, title, date, excerpt) that read from the
   current post in the loop.
3. Set the query in the block settings and the **BlockWriter Query** sidebar.

Dynamic inner blocks read the current post through the `postId` and `postType`
block context that the server sets for each item.

## Accessibility

The block outputs semantic markup and relies on the inner blocks for headings,
links, and images. Authors should keep a logical heading order inside the
repeated layout.

## Browser Support

Modern evergreen browsers.
