# Semantic and Accessibility Decisions

## Document Structure Decisions

### Using `<header>` for Page Header
I chose to use a `<header>` element with `role="banner"` for the main page header because it contains the site identity (logo/name) and primary navigation. This is the standard pattern for page-level headers and helps screen readers identify the top of the page structure. The `role="banner"` attribute provides additional context for older assistive technologies.

### Single `<main>` Element
The document contains exactly one `<main>` element with `id="main-content"` to clearly identify the primary content. This is crucial for screen readers, as users can jump directly to main content using landmark navigation. The ID allows our skip link to target this element directly, enabling keyboard users to bypass repetitive navigation.

### Section Structure with `aria-labelledby`
Each major content section uses the `<section>` element paired with `aria-labelledby` pointing to its heading. This creates a stronger semantic relationship between headings and their content, making navigation more intuitive for screen reader users. For example, `<section id="about" aria-labelledby="about-heading">` directly associates the section with its `<h2 id="about-heading">`.

## Navigation Decisions

### `<nav>` with Descriptive Label
The navigation uses `<nav aria-label="Main navigation" id="main-navigation">` to clearly identify it as the primary site navigation. The `aria-label` disambiguates this navigation from potential footer or breadcrumb navigation. The `id` allows our mobile menu toggle button to reference it via `aria-controls`.

### List-Based Navigation
Navigation links are wrapped in a `<ul>` with `role="list"` to ensure screen readers announce them as a list, even if CSS removes default list styling. This provides users with count information like "list of 4 items," helping them understand the navigation structure.

## Content Semantics

### `<article>` for Project Cards
Each project uses `<article>` because projects are self-contained, independently distributable content that could stand alone or be syndicated. The schema.org itemscope markup (`itemscope itemtype="https://schema.org/SoftwareApplication"`) further enhances semantic meaning for search engines.

### `<figure>` and `<figcaption>` for Images
Project images are wrapped in `<figure>` elements because they have associated captions or context. Even when the caption is visually hidden (using `class="visually-hidden"`), it provides screen readers with additional context about the image's purpose.

### `<aside>` for Experience Highlights
The "Key Achievements" section uses `<aside aria-label="Experience highlights">` because it contains tangentially related information that supplements but isn't critical to understanding the main "About Me" content. The `aria-label` clarifies its purpose for screen reader users.

## Form Accessibility

### Explicit Label Associations
Every form input has an explicitly associated label using the `for` and `id` attributes. This ensures clicking the label focuses the input and provides a clear, programmatically determined relationship for assistive technologies.

### Required Field Indicators
Required fields use both the `required` HTML attribute and `aria-required="true"` for maximum compatibility. The visual asterisk is wrapped in `<abbr title="required" aria-label="required">` so screen readers announce it as "required" rather than "asterisk."

### Error Message Structure
Each input has an associated error container with a unique ID (e.g., `id="email-error"`) referenced by `aria-describedby`. The error spans use `role="alert"` and `aria-live="polite"` to announce validation errors to screen readers without being intrusive.

## Image Accessibility

### Descriptive Alt Text
All images have descriptive alt text that conveys the image's content and purpose. For example, the profile image alt text is "Professional headshot of Alex Morgan in business casual attire" rather than just "profile" or "Alex Morgan," providing complete context.

### Loading Attributes
The hero image uses `loading="eager"` since it's above the fold and should load immediately, while project images use `loading="lazy"` to defer loading until they're needed, improving initial page load performance.

## Heading Hierarchy

### Logical Heading Structure
The document maintains strict heading hierarchy: one `<h1>` for the site identity, `<h2>` elements for major sections, and `<h3>` elements for subsections. This creates a proper document outline that screen reader users can navigate efficiently using heading shortcuts.

## Mobile Menu Accessibility

### Toggle Button Attributes
The mobile menu toggle button includes `aria-expanded="false"` to indicate its current state and `aria-controls="main-navigation"` to identify which element it controls. The visible menu icon uses `aria-hidden="true"` to prevent screen readers from announcing "hamburger symbol," while the button itself has a clear `aria-label="Toggle navigation menu"`.

## Contact Information

### `<address>` Element
Contact methods are wrapped in `<address>` to semantically indicate this is contact information. Even though it's not a physical address, the element's purpose is to contain any type of contact information for the page or article.

### External Link Indicators
All external links include `rel="noopener noreferrer"` for security and `target="_blank"` for user experience. Visually hidden spans (e.g., `<span class="visually-hidden">for HealthTracker Pro on GitHub</span>`) provide additional context for screen reader users about what happens when they follow these links.

## Skip Link Implementation

### Keyboard Navigation Enhancement
The skip link (`<a class="skip-link" href="#main-content">Skip to main content</a>`) is the first element in the document, allowing keyboard users to bypass repetitive navigation. It's visually hidden by default but becomes visible when focused, providing an obvious navigation shortcut without cluttering the visual design.

## Schema.org Structured Data

### Project Markup
Project articles use schema.org's SoftwareApplication type with `itemprop` attributes to provide search engines with structured information about each project. This can enhance search result displays with rich snippets showing project names, descriptions, and metadata.

## Key Accessibility Principle

Every semantic and accessibility decision prioritizes meaningful structure over visual appearance. The HTML creates a logical, navigable document outline that works regardless of CSS, JavaScript, or assistive technology. This foundation ensures the portfolio is usable, accessible, and maintainable while providing optimal experiences for all users.