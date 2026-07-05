# Objective

Create a development-only Design System Showcase page for Project Ever After.

The page serves as a visual reference for the reusable design system and is not part of the public wedding experience.

---

# Context

Before making changes, read:

* AGENTS.md
* docs/02-design-system.md
* docs/03-technical-architecture.md

Follow all applicable Cursor rules.

---

# Scope

Implement only the Design System Showcase.

Do not build any wedding pages.

Do not implement navigation.

Do not implement application features.

---

# Files Allowed to Modify

Create:

* app/design-system/page.tsx

Modify if required:

* components/shared/index.ts

Only if additional shared exports are needed.

---

# Purpose

The Design System Showcase should demonstrate:

* Typography
* Layout
* Display Components
* Motion Components
* shadcn/ui Components
* Theme Tokens

This page is for development only.

---

# Sections

Create the following sections.

## 1. Typography

Demonstrate:

* PageTitle
* SectionTitle
* Eyebrow
* Lead
* Body
* Caption

---

## 2. Layout

Demonstrate:

* Container
* MaxWidth
* Section
* Stack

Show spacing examples.

---

## 3. Display

Demonstrate:

* CardFrame
* Divider
* DecorativeFlourish

---

## 4. Motion

Demonstrate:

* FadeIn
* Reveal
* Stagger

Use subtle example content.

Do not create complex animations.

---

## 5. Buttons

Demonstrate available shadcn Button variants.

---

## 6. Theme

Demonstrate:

* Background
* Card
* Primary
* Secondary
* Accent
* Muted

Display color swatches using existing theme tokens.

Do not hardcode colors.

---

# Requirements

The page should:

* Use existing shared components
* Be responsive
* Be visually organized
* Be easy to scan
* Follow the Design System

Avoid duplicate styling.

---

# Constraints

Do NOT:

* Create new shared components
* Create feature-specific components
* Modify the theme
* Modify typography
* Add new dependencies

Only compose the existing design system.

---

# Acceptance Criteria

The implementation is complete when:

* Every shared component category is demonstrated.
* Motion components function correctly.
* Theme tokens are visually represented.
* The page is responsive.
* Existing shared components are reused.

---

# Deliverables

Provide:

1. Files created
2. Sections implemented
3. Components demonstrated
4. Any recommendations before feature development

---

# Stop Condition

Stop immediately after completing the Design System Showcase.

Do not begin implementing the Envelope Experience.

Wait for approval before continuing.
