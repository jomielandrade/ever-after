# Objective

Implement the root application layout for Project Ever After.

The root layout should establish the application's global structure while remaining minimal, maintainable, and aligned with the documented architecture.

---

# Context

Before making any changes, read:

* AGENTS.md
* docs/02-design-system.md
* docs/03-technical-architecture.md
* prompts/foundation/01-fonts.md
* prompts/foundation/02-theme.md
* prompts/foundation/03-global-styles.md

Follow all applicable Cursor rules.

The Design System and Technical Architecture are the source of truth.

---

# Scope

Implement **only** the root application layout.

This prompt is responsible for:

* Global metadata
* Root HTML structure
* Global body structure
* Preparing extension points for future providers

Nothing else.

---

# Files Allowed to Modify

* app/layout.tsx

---

# Files That Must Not Be Modified

* app/globals.css
* app/page.tsx
* components/**
* features/**
* docs/**
* prompts/**
* package.json

---

# Preserve Existing Implementation

The following implementations are already complete and must remain unchanged unless absolutely required:

* Font configuration
* Theme foundation
* Global styles
* Typography tokens
* CSS variable configuration

Do not refactor working code simply for stylistic reasons.

Only make the minimum changes necessary to satisfy this prompt.

---

# Requirements

## Metadata

Replace the default metadata with production-ready metadata.

Configure:

* title
* description
* applicationName
* keywords
* authors
* creator
* publisher
* robots
* metadataBase

Use:

Application Name:

Project Ever After

Description:

A luxury interactive wedding invitation celebrating the love story of Rojiely and Jomiel.

Do not configure:

* Open Graph
* Twitter Cards
* Icons
* Manifest
* Apple Web App metadata

Those will be implemented in a future prompt.

---

## HTML

Configure:

* lang="en"

Only add `suppressHydrationWarning` if there is a genuine technical requirement.

Do not add unnecessary HTML attributes.

---

## Body

The body should:

* Occupy the full viewport height
* Use the existing typography foundation
* Use the existing theme foundation
* Remain simple
* Be ready for future providers

Do not add page-specific styling.

Do not create layout wrappers.

---

## Future Provider Extension Point

Prepare the layout so future providers can be added easily.

Examples include:

* Theme Provider
* Audio Provider
* RSVP Provider

Do not implement these providers yet.

Simply leave the layout organized enough that they can be added later without major refactoring.

---

# Layout Philosophy

The root layout should remain intentionally minimal.

Its responsibilities are limited to:

* Metadata
* Fonts
* Global styles
* HTML structure
* Future provider composition

Avoid adding unnecessary abstraction.

---

# Constraints

Do NOT:

* Create navigation
* Create shared components
* Modify globals.css
* Modify theme tokens
* Modify typography
* Install packages
* Add animations
* Add feature-specific logic
* Refactor unrelated code

---

# Acceptance Criteria

The implementation is complete when:

* Metadata is production-ready.
* Fonts continue to work correctly.
* Theme remains unchanged.
* Global styles remain unchanged.
* The layout follows Next.js 16 App Router best practices.
* The layout is ready for future providers.
* Only app/layout.tsx has been modified.

---

# Deliverables

Provide:

1. Summary of changes
2. Files modified
3. Metadata configuration
4. Any recommendations for the next implementation phase

---

# Stop Condition

Stop immediately after completing the root layout.

Do not continue to:

* Shared Components
* Navigation
* Home Page
* Envelope
* Any other feature

Wait for approval before proceeding.
