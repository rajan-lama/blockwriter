# BW Social Proof

## Description

A trust band that combines an aggregate star rating, a review count, and a
row of client logos. Use it to reinforce credibility near pricing, checkout,
or testimonial sections.

## Features

- Optional aggregate rating with partial star fill and accessible label.
- Configurable review count and label (e.g. "reviews").
- Customizable star and empty-star colors.
- Optional client logo row with adjustable columns and grayscale hover.
- Left, center, or right alignment.
- Standard BlockWriter spacing, position, visibility, and animation options.

## Attributes

- `heading` (string) - Introductory heading text.
- `description` (string) - Optional supporting copy.
- `showRating` (boolean) - Show the aggregate rating row.
- `ratingValue` (number) - Average rating value.
- `maxRating` (number) - Number of stars to render.
- `reviewCount` (number) - Number of reviews to display.
- `reviewLabel` (string) - Label shown after the review count.
- `starColor` (string) - Filled star color.
- `emptyStarColor` (string) - Empty star color.
- `showLogos` (boolean) - Show the client logo row.
- `logos` (array) - Logo items (`{ url, id, alt }`).
- `logoColumns` (number) - Number of logo columns.
- `grayscale` (boolean) - Render logos in grayscale until hover.
- `socialProofAlign` (string) - Content alignment (`left`, `center`, `right`).
- `htmlId` (string) - Optional wrapper element ID.
- `extraClass` (string) - Additional CSS class names.

## Usage

Add the block, set the rating and review count, then upload client logos in the
block toolbar. Toggle the rating or logo row off when only one element is
needed.

## Accessibility

The rating exposes a single `role="img"` element with an accessible label such
as "Rated 4.9 out of 5". Individual stars and separators are decorative, and
logo images carry their own alt text.

## Browser Support

Modern evergreen browsers. Uses CSS grid and CSS custom properties.
