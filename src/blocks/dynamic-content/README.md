# BW Dynamic Content

## Description

The Dynamic Content block outputs a single dynamic value, such as a post field,
custom field, site setting, or archive value. It reads the current post from
block context, so it works both standalone and inside the Loop Builder.

## Features

- Post fields: title, excerpt, date, author, terms, and custom fields (meta).
- Site fields: title, tagline, and URL.
- Context fields: current year, archive title, archive description, and search
  query.
- Selectable HTML tag, optional link, and prefix/suffix text.

## Attributes

- `source` (string) — The value to display. Default `post-title`.
- `tagName` (string) — Output tag (`p`, `span`, `div`, `h1`–`h6`). Default `p`.
- `link` (boolean) — Link the value to its source where applicable.
- `metaKey` (string) — Meta key for the custom field source.
- `taxonomy` (string) — Taxonomy for the terms source. Default `category`.
- `separator` (string) — Terms separator. Default `, `.
- `dateFormat` (string) — PHP date format. Default `F j, Y`.
- `excerptLength` (number) — Excerpt length in words. Default `24`.
- `prefix` (string) — Text before the value.
- `suffix` (string) — Text after the value.
- `htmlId` (string) — Optional wrapper ID.
- `extraClass` (string) — Optional extra wrapper class.

## Usage

Choose a source in the block settings. Post-based sources resolve the current
post from the `postId` block context, the editor `post_id` hint, or the global
post. Place the block inside the Loop Builder to display each item's data.

## Accessibility

The block renders a single semantic element chosen by the author. When the
source is a heading, keep the document heading order logical.

## Browser Support

Modern evergreen browsers.
