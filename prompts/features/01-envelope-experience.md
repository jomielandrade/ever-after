# Objective

Create the opening envelope experience for Project Ever After.

This is the user's first interaction with the wedding invitation.

The experience should feel elegant, intentional, and memorable.

---

# Context

Before making changes, read:

* AGENTS.md
* docs/02-design-system.md
* docs/03-technical-architecture.md

Follow all applicable Cursor rules.

Reuse the existing shared component library.

---

# Scope

Implement only the opening envelope experience.

Do not implement the invitation.

Do not implement navigation.

Do not implement RSVP.

Do not implement gallery.

---

# User Experience

When the page loads:

* Display a warm ivory background.
* Center an elegant envelope.
* Display a decorative flourish.
* Display subtle instructional text:

"Tap to Open"

The envelope should invite interaction without demanding attention.

---

# Interaction

When the envelope is tapped:

The envelope should:

* Lift slightly.
* Open gracefully.
* Reveal the invitation.

Do not transition to the invitation yet.

Instead, expose a callback or state indicating that the opening sequence has completed.

---

# Motion

Use the shared motion components.

Do not create new animation primitives.

Reuse:

* FadeIn
* Reveal
* Stagger

Animations should feel calm and refined.

---

# Shared Components

Reuse existing shared components wherever appropriate:

* Container
* Section
* Stack
* CardFrame
* DecorativeFlourish
* Typography components

Do not duplicate existing patterns.

---

# Accessibility

Support:

* Keyboard activation
* Focus states
* Reduced motion
* Appropriate button semantics

The envelope should be operable without a mouse.

---

# Constraints

Do NOT:

* Start background music
* Implement invitation content
* Implement routing
* Fetch data
* Create navigation

---

# Visual Direction

The envelope should be created entirely with HTML, CSS, and the existing design system.

Do not use raster images.

Do not use external SVG assets.

Keep the implementation lightweight, scalable, and theme-aware.

---

# Acceptance Criteria

The implementation is complete when:

* The envelope is centered.
* The interaction is accessible.
* Shared motion components are reused.
* The opening interaction completes successfully.
* The component remains reusable.
* A controlled state

---

# Deliverables

Provide:

1. Files created
2. Shared components reused
3. Motion components reused
4. State management approach
5. Recommendations for the Invitation Experience

---

# Stop Condition

Stop immediately after completing the envelope experience.

Do not implement the invitation.

Wait for approval before continuing.
