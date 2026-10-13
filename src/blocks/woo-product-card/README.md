# BW Product Card

## Description
Displays a card for the current WooCommerce product with its image, title,
categories, rating, price, and add to cart link. Intended for product templates
and product query loops.

## Requirements
- WooCommerce must be active. The block is only registered when WooCommerce is
  available.

## Features
- Resolves the product from block context, the editor preview hint, or the
  current entry
- Linked thumbnail, title, categories, rating, price, and add to cart
- Add to cart uses WooCommerce's AJAX classes for simple, purchasable, in-stock
  products and falls back to the product page link otherwise
- Toggles for each card element
- Shows a sample card in the editor when no product is in context
- Renders nothing on the front end when no product can be resolved

## Attributes
- `showImage` (boolean) — Show the product image
- `showCategory` (boolean) — Show the product categories
- `showRating` (boolean) — Show the customer rating
- `showPrice` (boolean) — Show the price
- `showAddToCart` (boolean) — Show the add to cart link
- `htmlId` (string) — Custom HTML id attribute
- `extraClass` (string) — Custom CSS class name

## Usage
Place the block inside a WooCommerce product template or a product query loop.
The card follows the queried product, so the same block works for any product
in the loop.

## Accessibility
The card renders as a heading with a link, images keep their alt text from the
media library, and the add to cart control is a real link whose label comes from
WooCommerce.

## Notes
Product output is escaped with `wp_kses_post()`, and the add to cart URL, text,
and AJAX data are provided by the `WC_Product` API rather than built manually.
The editor preview uses a static sample because the REST request has no product
context.

## Browser Support
All browsers supported by the modern WordPress block editor.
