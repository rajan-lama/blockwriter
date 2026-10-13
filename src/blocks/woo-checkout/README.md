# BW Checkout

## Description
Displays the WooCommerce checkout: billing/shipping fields, order review, coupon
form, payment gateways, and place-order button. Intended for the checkout page
template.

## Requirements
- WooCommerce must be active. The block is only registered when WooCommerce is
  available.

## Features
- Renders WooCommerce's own `[woocommerce_checkout]` shortcode output so
  fields, validation, nonces, payment gateways, and order creation stay fully
  maintained by WooCommerce
- Loads the cart session on the front end when it is not already initialized
- Optional heading above the checkout
- Shows a placeholder in the editor because REST requests have no session
- Renders nothing when WooCommerce is unavailable

## Attributes
- `title` (string) — Optional heading above the checkout
- `htmlId` (string) — Custom HTML id attribute
- `extraClass` (string) — Custom CSS class name

## Usage
Place the block on the page assigned as the WooCommerce checkout page. The front
end output comes directly from WooCommerce's checkout shortcode, so checkout
scripts, AJAX, and payment gateway integrations keep working unchanged.

## Accessibility
The block adds no interactive controls of its own. Checkout field labels,
validation messaging, and notices come from WooCommerce and the theme.

## Notes
This block intentionally delegates to `[woocommerce_checkout]` rather than
reimplementing checkout. Rebuilding checkout logic would duplicate order
creation, nonce, and payment handling, which must remain owned by WooCommerce
and its gateways.

## Browser Support
All browsers supported by the modern WordPress block editor.
