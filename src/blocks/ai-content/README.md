# BW AI Content

## Description

The AI Content block generates written content from a prompt and stores it in
the post. Content is produced while editing and saved with the post, so no API
request is made on the front end.

An OpenAI-compatible endpoint must be configured under **Settings → BlockWriter
AI** before the generator is available.

## Features

- Prompt-driven content generation with tone and length controls.
- Content is stored in the post and editable like any other content.
- Regenerate or clear the generated content.
- Server-side sanitization on output.

## Attributes

- `prompt` (string) — The instruction used to generate content.
- `content` (string) — The generated HTML stored with the block.
- `tone` (string) — `neutral`, `professional`, `friendly`, `persuasive`, or
  `casual`.
- `length` (string) — `short`, `medium`, or `long`.
- `htmlId` (string) — Optional wrapper ID.
- `extraClass` (string) — Optional extra wrapper class.

## Usage

1. Insert the **BW AI Content** block.
2. In the block settings, enter a prompt and choose a tone and length.
3. Press **Generate**. Review and edit the result, then save the post.

The stored content is output through `wp_kses_post()` by
`src/blocks/ai-content/render.php`.

## Accessibility

The generated markup uses semantic tags. Review heading order and link text in
the generated content before publishing.

## Browser Support

Modern evergreen browsers.
