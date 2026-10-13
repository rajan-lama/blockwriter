# BW Review

## Description

A customer review with a star rating, reviewer details, an optional verified
badge, and a source label. Unlike the Testimonial block, the Review block leads
with a rating and supports review provenance.

## Features

- Star rating with half-star precision and 1–10 stars.
- Optional verified badge.
- Reviewer name, role, and avatar.
- Optional review source and date.
- Optional decorative quote mark.
- Left, center, or right alignment.

## Attributes

- `ratingValue` (number) — Rating value.
- `maxRating` (number) — Number of stars.
- `starColor` (string) — Filled star color.
- `emptyStarColor` (string) — Empty star color.
- `quote` (string) — Review text.
- `authorName` (string) — Reviewer name.
- `authorRole` (string) — Reviewer role or company.
- `avatarUrl` (string) — Reviewer avatar URL.
- `avatarId` (number) — Avatar attachment ID.
- `avatarAlt` (string) — Avatar alt text.
- `verified` (boolean) — Show the verified badge.
- `source` (string) — Review source label.
- `reviewDate` (string) — Review date label.
- `showRating` (boolean) — Show the star rating.
- `showQuoteMark` (boolean) — Show the decorative quote mark.
- `reviewAlign` (string) — `left`, `center`, or `right`.
- `htmlId` (string) — Optional wrapper ID.
- `extraClass` (string) — Optional extra wrapper class.

## Usage

Insert the **BW Review** block, write the review text, then set the rating,
reviewer details, and source in the block settings. Star rendering reuses the
shared rating helpers from `src/blocks/rating/helpers.js`.

## Accessibility

The rating is exposed with `role="img"` and a label such as "Rated 4.5 out of
5". The verified badge includes visible text. Avatar images use the alt text
provided in the media library.

## Browser Support

Modern evergreen browsers.
