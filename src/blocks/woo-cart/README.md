# BW Cart

## Description
Displays the WooCommerce cart: item table, quantity controls, coupon form,
totals, and cross-sells. Intended for a cart page template.

## Requirements
- WooCommerce must be active. The block is only registered when WooCommerce is
  available.

## Features
- Renders WooCommerce's own `[woocommerce_cart]` shortcode output so the cart
  table, totals, coupons, and cross-sells stay fully maintained by WooCommerce
- Loads the cart session on the front end when it is not already initialized
- Optional heading above the cart
- Shows a placeholder in the editor because REST requests have no session
- Renders nothing when WooCommerce is unavailable

## Attributes
- `title` (string) — Optional heading above the cart
- `htmlId` (string) — Custom HTML id attribute
- `extraClass` (string) — Custom CSS class name

## Usage
Place the block on the page assigned as the WooCommerce cart page. The front end
output comes directly from WooCommerce's cart shortcode, so cart updates,
nonces, and hooks keep working exactly as they do with the shortcode.

## Accessibility
The block adds no interactive controls of its own. The cart form semantics,
labels, and live regions come from WooCommerce and the theme.

## Notes
This block intentionally delegates to `[woocommerce_cart]` instead of
reimplementing cart logic. That avoids duplicating WooCommerce's cart session,
nonce, and totals handling. Styling depends on the active theme and
WooCommerce templates.

## Browser Support
All browsers supported by the modern WordPress block editor.
