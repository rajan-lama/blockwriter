# AGENTS.md — BlockWriter

## 1. Project Overview

BlockWriter is a WordPress plugin focused on improving the WordPress block editing and content-building experience.

The project is built around Gutenberg/WordPress block technology and provides reusable block-based building functionality. It should feel native to WordPress while adding capabilities that are difficult or cumbersome to achieve with the default editor.

BlockWriter should be treated as a production WordPress plugin, not as a standalone React application.

### Core principles

- WordPress remains the source of truth.
- Gutenberg/block APIs should be preferred over custom replacements.
- Reuse WordPress APIs and existing project abstractions before introducing new ones.
- Keep PHP responsible for WordPress integration, persistence, permissions, REST/API boundaries, and server-side behavior.
- Keep React/TypeScript responsible for interactive admin/editor interfaces.
- Do not introduce unnecessary dependencies.
- Preserve compatibility with existing BlockWriter installations.
- Keep the plugin modular so additional block, template, pattern, and editor features can be added without rewriting the core.

---

## 2. Product Direction

BlockWriter should make it easier to create, organize, reuse, and manage WordPress block-based content.

The product should support a workflow around:

1. Discovering or selecting reusable block designs.
2. Previewing block content.
3. Inserting block content into the WordPress editor.
4. Editing inserted blocks using normal Gutenberg behavior.
5. Saving reusable content where the feature requires persistence.
6. Managing templates/patterns/categories/metadata through the plugin UI.
7. Providing a consistent experience across supported WordPress editor contexts.

The implementation should not lock the product to one theme, page builder, or third-party editor.

---

## 3. Technology Stack

### Backend

- PHP.
- WordPress core APIs.
- WordPress REST API.
- WordPress database APIs.
- WordPress Settings API where appropriate.
- WordPress block APIs.
- WordPress metadata APIs.
- WordPress filesystem APIs when file operations are required.
- WordPress capability and nonce APIs for authorization.

### Frontend

- React.
- JavaScript/TypeScript where already established by the project.
- `@wordpress/element`.
- `@wordpress/components`.
- `@wordpress/block-editor`.
- `@wordpress/blocks`.
- `@wordpress/data`.
- `@wordpress/core-data`.
- `@wordpress/api-fetch`.
- `@wordpress/icons`.
- `@wordpress/plugins`.
- `@wordpress/edit-post` where editor integration requires it.
- `@wordpress/i18n`.

The project has used WordPress Scripts and Font Awesome/React Font Awesome. Do not replace established UI dependencies without a concrete reason.

### Testing

Where configured by the project:

- PHPUnit for PHP logic.
- WordPress test environment.
- Playwright for browser/end-to-end testing.
- ESLint and project JavaScript/TypeScript checks.

---

## 4. Architecture

Use clear separation between:

```text
WordPress
   ↓
BlockWriter Application Layer
   ↓
Domain/Feature Services
   ↓
WordPress APIs / REST APIs
   ↓
Persistence / External integrations
```

For editor functionality:

```text
Gutenberg Editor
      ↓
BlockWriter React UI
      ↓
WordPress Data / REST API
      ↓
BlockWriter PHP Services
      ↓
WordPress Core
```

Do not put business logic directly inside React components when it belongs in a reusable service.

Do not put substantial UI logic inside PHP-rendered HTML when the feature is an interactive React interface.

---

## 5. Existing Code First

Before changing code:

1. Inspect the plugin bootstrap.
2. Identify how classes/services are loaded.
3. Inspect existing REST routes.
4. Inspect existing React entry points.
5. Inspect existing block registrations.
6. Inspect existing data stores and selectors.
7. Inspect existing CSS conventions.
8. Inspect existing database/storage mechanisms.
9. Search for an existing implementation before creating a new abstraction.

Never assume a class, hook, REST endpoint, utility, or component does not exist until the repository has been searched.

### Important rule

**Extend existing architecture before creating parallel architecture.**

Bad:

```text
Existing TemplateService
        +
New MyTemplateService
        +
AnotherTemplateManager
```

Preferred:

```text
Existing TemplateService
        ↓
Extend or compose the existing service
```

---

## 6. WordPress Block Principles

BlockWriter must use WordPress block APIs correctly.

Prefer:

- `register_block_type()`
- `register_block_type_from_metadata()`
- `register_block_pattern()`
- `register_block_pattern_category()`
- `parse_blocks()`
- `serialize_blocks()`
- `wp_insert_post()`
- `wp_update_post()`
- WordPress REST APIs
- WordPress data stores

Do not manually manipulate serialized Gutenberg markup when a WordPress block API can perform the operation safely.

Block markup is structured content. Preserve valid block comments and attributes.

Never blindly modify:

```html
<!-- wp:group -->
...
<!-- /wp:group -->
```

or serialized block JSON.

When transforming block content, prefer parsing into block structures, modifying the required data, and serializing it again.

---

## 7. Gutenberg Compatibility

BlockWriter must work with WordPress rather than fighting Gutenberg.

Do not:

- Replace the block editor unnecessarily.
- Override core block behavior globally without a strong reason.
- Modify WordPress core files.
- Depend on undocumented Gutenberg internals when a public API exists.
- Assume a specific theme's markup.
- Assume a specific editor layout.

When integrating with Gutenberg:

1. Use public WordPress APIs.
2. Respect block attributes.
3. Preserve user content.
4. Preserve undo/redo behavior where possible.
5. Avoid unnecessary editor reloads.
6. Avoid global event handlers when WordPress data subscriptions can be used.
7. Clean up subscriptions/listeners when components unmount.

---

## 8. React Rules

React components should be small and focused.

Prefer:

```text
Feature
├── components/
├── hooks/
├── services/
├── selectors/
├── actions/
└── index/
```

Do not create huge components containing:

- API calls
- data transformation
- state management
- rendering
- error handling
- business rules

all in one file.

Use WordPress data APIs where appropriate rather than duplicating WordPress state in local React state.

Avoid unnecessary re-renders.

Do not introduce a new state-management library unless there is a demonstrated architectural need.

---

## 9. REST API Rules

Every REST endpoint must have:

- A clear namespace.
- A predictable route.
- Permission checks.
- Input validation.
- Sanitization.
- Appropriate HTTP status codes.
- Consistent response structures.
- Useful error responses.

Example pattern:

```php
register_rest_route(
    'blockwriter/v1',
    '/templates',
    [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => [ $controller, 'get_templates' ],
        'permission_callback' => [ $controller, 'can_manage_templates' ],
    ]
);
```

Never expose administrative data through an endpoint without an explicit permission check.

Do not trust data coming from React.

All client input is untrusted.

---

## 10. Security

Follow WordPress security practices at every boundary.

### Always

- Check capabilities.
- Verify nonces where required.
- Sanitize input.
- Validate input.
- Escape output.
- Use `$wpdb->prepare()` for dynamic SQL values.
- Use WordPress APIs where possible.
- Avoid exposing internal filesystem paths.
- Avoid exposing secrets to JavaScript.
- Avoid storing credentials in source control.

### Database

Bad:

```php
$wpdb->get_results(
    "SELECT * FROM {$table} WHERE id = {$id}"
);
```

Preferred:

```php
$wpdb->get_results(
    $wpdb->prepare(
        "SELECT * FROM {$table} WHERE id = %d",
        $id
    )
);
```

Table names controlled by the plugin architecture may be concatenated only when they are trusted/plugin-controlled identifiers. Dynamic user values must be prepared.

---

## 11. Data and Persistence

Before introducing a custom table:

1. Determine whether WordPress posts/post meta/terms/options can represent the data.
2. Determine expected data volume.
3. Determine query patterns.
4. Determine whether indexing is required.
5. Determine migration requirements.
6. Determine uninstall behavior.

Use custom tables when the data is operational/high-volume and WordPress post storage is not an appropriate model.

Database schema changes must be versioned and upgrade-safe.

Never silently delete existing user data during an upgrade.

---

## 12. Templates, Patterns, and Reusable Content

BlockWriter may work with a large catalog of Gutenberg patterns/templates.

When dealing with imported or generated pattern data:

- Preserve valid block markup.
- Validate required metadata.
- Normalize data at the application boundary.
- Avoid loading very large catalogs into the browser unnecessarily.
- Prefer pagination, filtering, search, or server-side querying where appropriate.
- Do not duplicate the same pattern data in multiple storage systems without a reason.
- Keep import processes idempotent where possible.

For bulk imports:

```text
Input
 ↓
Validate
 ↓
Normalize
 ↓
Deduplicate
 ↓
Persist
 ↓
Index/cache if needed
```

A failed import should not leave the database in a partially corrupted state.

---

## 13. Performance

BlockWriter should remain lightweight on sites where its functionality is not being used.

### Admin/editor assets

Only enqueue assets where required.

Do not load large React bundles on every frontend page unless the feature genuinely requires them.

Avoid:

```php
wp_enqueue_script( 'blockwriter-heavy-bundle' );
```

globally.

Prefer conditional loading based on:

- Admin screen.
- Editor context.
- Block presence.
- Feature requirement.

### Database

Avoid:

- Unbounded queries.
- N+1 queries.
- Repeated metadata queries inside loops.
- Loading thousands of records when only a page is required.

Use:

- Pagination.
- Appropriate indexes.
- Caching where justified.
- WordPress query APIs.
- Bulk operations where safe.

---

## 14. Caching

Cache only data that is safe to cache.

Always consider:

- Cache invalidation.
- User-specific data.
- Permissions.
- Site-specific configuration.
- Multisite behavior.

Never cache privileged/user-specific data in a shared cache without proper isolation.

---

## 15. JavaScript and PHP Boundaries

Keep the boundary explicit.

PHP should provide structured data.

Preferred:

```php
wp_localize_script();
```

or appropriate REST/data APIs for runtime data.

Do not generate large JavaScript strings in PHP.

Do not embed secrets into localized JavaScript variables.

Do not make the frontend depend on undocumented PHP-generated globals.

---

## 16. Internationalization

All user-facing strings must be translatable.

PHP:

```php
__( 'Block Templates', 'blockwriter' );
```

JavaScript:

```js
__( 'Block Templates', 'blockwriter' );
```

Do not concatenate translated strings when placeholders/interpolation can be used.

Use the plugin's established text domain consistently.

Do not introduce a second text domain.

---

## 17. Accessibility

BlockWriter admin/editor interfaces must be keyboard accessible.

Follow WordPress accessibility patterns.

Ensure:

- Buttons have accessible labels.
- Icon-only controls have labels/tooltips.
- Focus states are preserved.
- Modals manage focus correctly.
- Loading states are communicated.
- Error messages are accessible.
- Color is not the only indicator of state.
- Interactive controls use semantic elements.

Do not use clickable `<div>` elements when a `<button>` is appropriate.

---

## 18. Error Handling

Errors should be explicit and actionable.

Backend:

```php
return new WP_Error(
    'blockwriter_invalid_template',
    __( 'The template could not be loaded.', 'blockwriter' ),
    [ 'status' => 400 ]
);
```

Frontend should handle:

- Loading state.
- Empty state.
- Success state.
- Error state.
- Retry where appropriate.

Do not silently swallow API errors.

Do not expose PHP stack traces, SQL queries, API credentials, or internal paths to users.

---

## 19. Backward Compatibility

BlockWriter is a WordPress plugin and may be installed on existing sites.

Do not casually:

- Rename database keys.
- Change stored data formats.
- Change REST response structures.
- Remove hooks.
- Rename public PHP functions/classes.
- Change block names.
- Change block attributes incompatibly.

When a breaking change is necessary, provide a migration path.

---

## 20. Multisite

Do not assume single-site operation.

When writing site-level data:

- Understand whether the setting is site-specific or network-wide.
- Use the appropriate WordPress APIs.
- Do not accidentally read/write another site's data.
- Be careful with activation and upgrade hooks.

Do not introduce multisite complexity into a feature unless required, but do not make assumptions that prevent future support.

---

## 21. Development Workflow

Before implementation:

```text
1. Understand the requested behavior.
2. Find the existing feature/code path.
3. Identify affected PHP/JS/CSS files.
4. Check existing tests.
5. Implement the smallest coherent change.
6. Run relevant lint/build/tests.
7. Test the WordPress editor manually when editor behavior changes.
8. Review security and compatibility.
```

Do not refactor unrelated code during a feature implementation.

---

## 22. Testing

Important functionality should have automated tests where practical.

### PHP tests

Test:

- Data normalization.
- Validation.
- Permission behavior.
- REST responses.
- Persistence.
- Import/export behavior.
- Edge cases.

### JavaScript tests

Test:

- Components with meaningful logic.
- Data transformations.
- Hooks.
- User interactions where practical.

### E2E

Use Playwright for workflows that depend on real WordPress/editor behavior.

Examples:

- Opening BlockWriter.
- Searching templates.
- Selecting a template.
- Inserting blocks.
- Saving content.
- Editor integration.
- Error states.

---

## 23. Build and Dependency Rules

Use the project's existing package manager and lockfile.

Do not:

- Replace `package-lock.json` with another package manager without a project-level decision.
- Upgrade every dependency just to fix one issue.
- Add duplicate packages that solve the same problem.
- Commit generated dependency directories such as `node_modules`.

Before upgrading WordPress packages, verify compatibility among:

- React.
- WordPress packages.
- `@wordpress/scripts`.
- WordPress target versions.
- Existing BlockWriter code.

Dependency upgrades should be intentional and tested.

---

## 24. CSS/UI Rules

Follow the existing BlockWriter UI system.

Before adding CSS:

1. Search for an existing class/component.
2. Reuse existing spacing, typography, controls, and states.
3. Avoid global selectors.
4. Scope plugin-specific styles.
5. Avoid modifying WordPress core editor styles globally.
6. Avoid `!important` unless there is a documented compatibility reason.

The UI should look like a WordPress product, not an unrelated application.

---

## 25. Logging and Debugging

Logs must contain useful diagnostic information without exposing sensitive information.

Never log:

- API keys.
- Passwords.
- Authentication tokens.
- Nonces.
- Private user data unnecessarily.
- Full request headers containing credentials.

Temporary debugging code must not be committed.

Avoid:

```php
var_dump();
print_r();
error_log( $secret );
```

in production code.

---

## 26. Git and Commit Guidelines

Use small, focused commits.

Examples:

```text
feat(patterns): add pattern search
feat(template): add template insertion
fix(editor): preserve block attributes during insertion
fix(rest): validate template permissions
test(patterns): add pattern filtering tests
refactor(template): extract template repository
```

Avoid commits that mix unrelated features.

---

## 27. Pull Request Guidelines

Every PR should explain:

- What changed.
- Why it changed.
- Files/areas affected.
- Database changes.
- REST API changes.
- Security implications.
- Compatibility implications.
- Tests added.
- Manual testing performed.

Do not merge code that introduces secrets into source control or frontend bundles.

---

## 28. AI Coding Agent Rules

When an AI coding agent works on BlockWriter:

1. Read `AGENTS.md` before making changes.
2. Inspect the existing architecture before adding abstractions.
3. Search the repository before creating new classes/functions/components.
4. Reuse existing services and utilities.
5. Do not duplicate business logic.
6. Do not bypass WordPress permission checks.
7. Do not expose secrets.
8. Do not modify unrelated files.
9. Follow WordPress coding standards.
10. Preserve existing public APIs where possible.
11. Do not invent WordPress APIs.
12. Verify WordPress APIs against current project requirements before implementation.
13. Treat REST/API input as untrusted.
14. Treat stored/imported block content as untrusted content.
15. Never execute arbitrary code contained in imported block content.
16. Do not automatically publish content unless the feature explicitly requires publishing.
17. Do not modify WordPress core.
18. Add tests for important new behavior.
19. Run the narrowest relevant validation first, then broader validation when needed.
20. Explain architectural trade-offs when introducing a significant new subsystem.

---

## 29. Definition of Done

A feature is complete only when applicable:

- Core implementation is complete.
- Existing architecture is respected.
- Capability checks are implemented.
- Nonces are implemented where required.
- Input is validated and sanitized.
- Output is escaped.
- REST endpoints are protected.
- Errors are handled.
- Loading/empty/error states exist in the UI.
- Important logic has tests.
- Existing functionality remains intact.
- Editor behavior has been manually verified when relevant.
- Internationalization is implemented.
- Accessibility has been considered.
- Performance impact is acceptable.
- Documentation is updated where necessary.

---

## 30. Most Important Architectural Rules

### Rule 1 — WordPress first

BlockWriter is a WordPress plugin. Prefer WordPress APIs over custom replacements.

### Rule 2 — Existing architecture first

Before adding a new abstraction, find and understand the existing implementation.

### Rule 3 — Gutenberg data is structured data

Use `parse_blocks()` and `serialize_blocks()` rather than fragile string manipulation whenever block structures are being transformed.

### Rule 4 — Security at every boundary

Never trust browser input, imported data, REST requests, or stored content.

### Rule 5 — Small changes

Implement the smallest change that solves the problem without destabilizing unrelated functionality.

### Rule 6 — No silent breakage

Existing BlockWriter users and stored content must be protected from unnecessary breaking changes.

### Rule 7 — Do not over-engineer

BlockWriter should have a clean architecture, but abstractions must solve real problems. Prefer simple, maintainable code over speculative frameworks.

---

## 31. Agent Working Checklist

Before changing code:

- [ ] Read `AGENTS.md`.
- [ ] Locate the relevant feature.
- [ ] Search for existing implementations.
- [ ] Identify PHP/React/API boundaries.
- [ ] Identify data/storage implications.
- [ ] Identify permission/security requirements.
- [ ] Check compatibility implications.

Before finishing:

- [ ] Run relevant lint/build checks.
- [ ] Run relevant tests.
- [ ] Test the feature manually if it affects Gutenberg.
- [ ] Check browser console for errors.
- [ ] Check PHP/debug logs for new warnings.
- [ ] Check permissions and nonce handling.
- [ ] Check translations.
- [ ] Check accessibility.
- [ ] Confirm no unrelated files were modified.
- [ ] Confirm no secrets or debug code were added.

---

## 32. Guiding Philosophy

BlockWriter should remain:

**Native to WordPress.  
Native to Gutenberg.  
Modular.  
Secure.  
Performant.  
Backward-compatible.  
Easy to extend.  
Easy to maintain.**

When there is a choice between a clever abstraction and a straightforward WordPress-native implementation, prefer the straightforward implementation unless the abstraction provides a clear long-term benefit.

## 33. Block Catalog

BlockWriter should provide a curated collection of reusable Gutenberg blocks.

Blocks should be developed incrementally. Do not implement the entire catalog
at once.

### Phase 1 — Core Layout and Content

- Container / Section
- Row
- Stack
- Grid
- Columns
- Spacer
- Divider
- Heading
- Text / Rich Text
- Button
- Button Group
- Image
- Icon
- Video
- Group
- Cover

### Phase 2 — Content Components

- Card
- Card Grid
- Feature
- Feature Grid
- Testimonial
- Testimonial Slider
- Team Member
- Team Grid
- Logo Grid
- Pricing Table
- Pricing Card
- Call To Action
- Alert / Notice
- Quote
- Accordion
- FAQ
- Tabs

### Phase 3 — Marketing and Conversion

- Hero
- Hero with Image
- Hero with Video
- CTA Banner
- Lead Capture
- Newsletter Signup
- Social Proof
- Review
- Rating
- Comparison Table
- Stats / Counter
- Benefits
- Process / Steps
- Timeline

### Phase 4 — Navigation and Layout

- Header
- Navigation
- Mega Menu
- Breadcrumbs
- Footer
- Modal
- Off-canvas / Drawer
- Sticky Section
- Back To Top

### Phase 5 — WordPress Dynamic Content

- Post Query
- Post Grid
- Post List
- Post Carousel
- Related Posts
- Author
- Author Box
- Categories
- Tags
- Search
- Pagination
- Archive Header

### Phase 6 — WooCommerce

WooCommerce blocks should only be implemented when WooCommerce is active.

- Product Grid
- Product List
- Product Carousel
- Product Categories
- Product Card
- Product Search
- Product Filters
- Add To Cart
- Mini Cart
- Cart
- Checkout
- Product Reviews
- Product Rating
- Product Price
- Sale Badge

### Phase 7 — BlockWriter Advanced Features

These are strategic features and should not be implemented before
the core block system is stable.

- Pattern Inserter
- Template Inserter
- Block Collection
- Block Presets
- Global Style Presets
- Design Sections
- AI Section Generator
- AI Block Generator
- AI Content Block
- Dynamic Content Block
- Responsive Visibility
- Conditional Content
- Query Builder
- Loop Builder

---

## 33.1 Block Development Rules

Every BlockWriter block must:

1. Be a valid Gutenberg block.
2. Use WordPress block APIs.
3. Define its attributes explicitly.
4. Provide editor and frontend behavior where required.
5. Support responsive behavior only when the feature actually requires it.
6. Avoid unnecessary custom JavaScript.
7. Avoid global CSS selectors.
8. Use `theme.json`/WordPress design tokens where appropriate.
9. Support WordPress accessibility requirements.
10. Support internationalization.
11. Avoid unnecessary dependencies.
12. Preserve block content during upgrades.
13. Avoid introducing breaking attribute changes.
14. Provide sensible default values.
15. Handle empty and invalid states gracefully.

---

## 33.2 Block Naming

Use the BlockWriter namespace:

```text
blockwriter/container
blockwriter/card
blockwriter/hero
blockwriter/testimonial

## 33.3 Block Architecture

Prefer:

blocks/
├── container/
├── card/
├── hero/
├── testimonial/
└── ...

Each block should keep its implementation isolated.

A typical block may contain:

block-name/
├── block.json
├── index.js
├── edit.js
├── save.js
├── style.scss
├── editor.scss
├── view.js
└── README.md

## 33.4 Block Composition

Prefer composing existing BlockWriter/Core blocks rather than duplicating functionality.

For example:

Hero
 ├── Container
 │    ├── Heading
 │    ├── Text
 │    └── Button

rather than creating a monolithic Hero block containing a completely separate
implementation of heading, text, button, spacing, and layout.

Blocks should be composable.

33.5 Block Priority

When deciding what block to build next, prioritize:

Frequently reusable layout primitives.
Frequently used content components.
Blocks that enable other blocks.
Blocks that provide clear product differentiation.
Dynamic WordPress integrations.
WooCommerce integrations.
Advanced/experimental functionality.

Do not build a block merely because it is possible.

Every new block should have a clear user-facing purpose.

33.6 Avoid Block Explosion

Do not create separate blocks when block variations, patterns, styles,
or composition are sufficient.

For example, prefer:

Button
 ├── Primary variation
 ├── Secondary variation
 └── Outline variation

instead of:

Primary Button
Secondary Button
Outline Button

Likewise, use block patterns for predefined layouts when a new block would
only represent a fixed arrangement of existing blocks.

The goal is a powerful but maintainable block system, not hundreds of
slightly different blocks.