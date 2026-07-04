# AGENTS.md

# Project Ever After

## Purpose

This repository contains the source code for **Project Ever After**, a luxury, story-driven wedding invitation web application.

The application is designed to feel like a premium interactive experience rather than a traditional informational website. Every implementation decision should prioritize elegance, simplicity, accessibility, and storytelling.

---

# Mission

Create a memorable digital wedding experience that combines premium visual design with excellent engineering practices.

Every feature should support the overall journey:

Envelope → Invitation → Our Story → Wedding Details → RSVP → Thank You

The website should never feel like a generic wedding template.

---

# Development Philosophy

Always optimize for:

* Simplicity
* Readability
* Maintainability
* Reusability
* Accessibility
* Performance

Favor long-term maintainability over short-term convenience.

Avoid unnecessary abstractions and premature optimization.

---

# Technology Stack

Frontend

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4

UI

* shadcn/ui
* Framer Motion

Backend

* Supabase
* PostgreSQL

Forms

* React Hook Form
* Zod

Deployment

* Vercel

---

# Project Architecture

The project follows a feature-based architecture.

Features own their components, business logic, and utilities whenever practical.

Shared components belong in:

```
components/
```

Feature-specific code belongs in:

```
features/
```

Reusable utilities belong in:

```
lib/
```

Documentation belongs in:

```
docs/
```

Implementation specifications belong in:

```
prompts/
```

---

# Design Principles

The visual experience should communicate:

* Quiet luxury
* Timeless elegance
* Editorial storytelling
* Spacious layouts
* Calm interactions
* Premium craftsmanship

Avoid:

* Busy layouts
* Generic wedding templates
* Excessive floral decorations
* Heavy gradients
* Unnecessary visual effects
* Multiple competing focal points

Whitespace is an intentional design element.

---

# Design Tokens

Primary Background

Warm Ivory

Primary Accent

Dusty Blue

Secondary Accent

Sage Green

Decorative Accent

Champagne Gold

Primary Text

Charcoal

These values are defined in the Design System documentation.

Do not introduce additional colors without updating the design system.

---

# Typography

Heading

Cormorant Garamond

Body

Poppins

Labels

Inter

Script

Great Vibes

Script typography should only be used for names or decorative headings.

---

# UI Principles

Every screen should:

* Have one clear primary action.
* Maintain generous spacing.
* Follow consistent typography.
* Be mobile-first.
* Support responsive layouts.
* Feel calm and intentional.

---

# Accessibility

Every implementation must:

* Support keyboard navigation.
* Use semantic HTML.
* Include accessible labels.
* Respect prefers-reduced-motion.
* Meet WCAG AA contrast guidelines where practical.

Accessibility is not optional.

---

# Performance

Prioritize:

* Server Components by default.
* Client Components only when necessary.
* Optimized images.
* Lazy loading.
* Small JavaScript bundles.
* Static rendering where appropriate.

---

# Coding Standards

Always:

* Use TypeScript.
* Prefer composition over duplication.
* Keep components focused.
* Keep files reasonably small.
* Use descriptive names.
* Extract reusable logic.

Avoid:

* Inline styles.
* Hardcoded magic values.
* Deep component nesting.
* Duplicate logic.
* Overly complex abstractions.

---

# State Management

Prefer:

1. Server Components
2. React state
3. URL state
4. Context only when appropriate

Do not introduce external state management libraries unless there is a clear requirement.

---

# Animations

Animations should feel subtle and premium.

Preferred animations:

* Fade
* Slide
* Scale (minimal)
* Gentle stagger

Avoid:

* Bounce
* Elastic
* Flashing
* Overly long transitions

Motion should support the story, not distract from it.

---

# AI Collaboration Guidelines

Before making significant changes:

1. Read the relevant documentation in `docs/`.
2. Follow the applicable Cursor rules.
3. Build incrementally.
4. Preserve existing architecture.
5. Avoid introducing new patterns without justification.

When implementing a new feature:

* Reuse existing components.
* Follow the design system.
* Keep accessibility intact.
* Preserve responsiveness.

---

# Definition of Done

A task is complete only when:

* Requirements are satisfied.
* Responsive behavior is verified.
* Accessibility is maintained.
* Code is clean and reusable.
* TypeScript has no errors.
* ESLint passes.
* The implementation aligns with the project's design language.

---

# Repository Workflow

Documentation drives implementation.

The expected workflow is:

1. Update documentation if requirements change.
2. Update implementation prompt if necessary.
3. Implement the feature.
4. Review.
5. Refactor.
6. Commit.

Never implement features that contradict the documented specifications.

---

# Guiding Principle

When multiple solutions are technically correct, choose the one that results in the simplest, most elegant, and most maintainable implementation while preserving the premium user experience.
