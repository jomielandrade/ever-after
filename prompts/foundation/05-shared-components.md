# Objective

Create the shared component library for Project Ever After.

These components establish the reusable UI foundation for the application and must remain independent of any feature.

---

# Context

Before making any changes, read:

* AGENTS.md
* docs/02-design-system.md
* docs/03-technical-architecture.md
* prompts/foundation/01-fonts.md
* prompts/foundation/02-theme.md
* prompts/foundation/03-global-styles.md
* prompts/foundation/04-layout.md

Follow all applicable Cursor rules.

---

# Scope

Implement only the shared component library.

Do not implement pages.

Do not implement feature-specific UI.

Do not create navigation.

Do not create animations beyond reusable wrappers.

---

# Files Allowed to Modify

Create files only inside:

components/shared/

Do not modify existing foundation files.

---

# Component Architecture

Organize the shared components as follows:

components/shared/

* layout/
* typography/
* display/
* motion/

---

# Components to Create

## Layout

Create:

* Container
* Section
* MaxWidth
* Stack

Responsibilities:

* Responsive width
* Consistent spacing
* Layout composition

---

## Typography

Create:

* PageTitle
* SectionTitle
* Eyebrow
* Lead

Responsibilities:

* Typography hierarchy
* Reusable text presentation
* Responsive typography

Do not hardcode wedding-specific text.

---

## Display

Create:

* Divider
* DecorativeFlourish
* LoadingScreen

Responsibilities:

* Decorative presentation
* Visual separation
* Shared loading state

Do not implement feature-specific loading logic.

---

## Motion

Create reusable wrappers:

* FadeIn
* Reveal
* Stagger

Responsibilities:

* Reusable entrance animations
* Respect reduced-motion preferences
* Remain independent of page content

Do not implement envelope-specific animations.

---

# Component Standards

Every component must:

* Be fully typed
* Accept children when appropriate
* Accept className overrides
* Be composable
* Be responsive
* Be accessible
* Follow the Design System

Avoid unnecessary props.

---

# Reuse Strategy

Before creating a new component:

1. Check whether an existing shared component satisfies the requirement.
2. Prefer composition over duplication.
3. Reuse shadcn/ui components whenever appropriate.

Do not duplicate functionality.

---

# Constraints

Do NOT:

* Create feature components
* Create business logic
* Fetch data
* Modify globals.css
* Modify layout.tsx
* Modify pages
* Add unnecessary dependencies

Install new shadcn/ui components only if they are required by a shared component.

---

# Acceptance Criteria

The implementation is complete when:

* The shared component structure is created.
* Components are reusable.
* Components are responsive.
* Components are fully typed.
* Components follow the Design System.
* Components remain independent of application features.

---

# Deliverables

Provide:

1. Components created
2. Purpose of each component
3. Files created
4. Any reusable patterns introduced

---

# Stop Condition

Stop immediately after creating the shared component library.

Do not begin:

* Navigation
* Home Page
* Envelope
* Invitation
* Story

Wait for approval before proceeding.
