# Technical Architecture

**Project:** Project Ever After
**Version:** 1.0.0
**Status:** Active

---

# Purpose

This document defines the technical architecture of Project Ever After.

It establishes how the application is organized, how features communicate, and the engineering principles that guide implementation.

This document intentionally avoids implementation details for individual features.

---

# Architecture Principles

The project follows these principles:

* Feature-first organization
* Server Components by default
* Client Components only when required
* Composition over inheritance
* Mobile-first development
* Reusable UI components
* Accessibility by default

---

# High-Level Architecture

```text
Browser
    │
Next.js App Router
    │
Feature Modules
    │
Shared Components
    │
Supabase
```

Each layer has a single responsibility.

---

# Folder Structure

```text
app/
components/
features/
hooks/
lib/
types/
public/
docs/
prompts/
.cursor/
```

---

# App Router

The application uses the Next.js App Router.

The public experience is organized into route groups.

Example:

```text
app/
├── (public)/
│   ├── page.tsx
│   ├── invitation/
│   ├── story/
│   ├── wedding-day/
│   ├── rsvp/
│   └── confirmation/
│
└── (admin)/
    └── dashboard/
```

Route groups are used to separate public and future administrative experiences without affecting URLs.

---

# Feature Modules

Every major feature owns its implementation.

Example:

```text
features/
├── envelope/
├── invitation/
├── story/
├── timeline/
├── proposal/
├── wedding-day/
├── venues/
├── faq/
├── rsvp/
├── confirmation/
└── admin/
```

Each feature may contain:

```text
components/
hooks/
lib/
types/
```

Feature logic should remain inside its own directory whenever practical.

---

# Shared Components

The root `components/` directory is reserved for reusable UI shared across multiple features.

Examples include:

* Navigation
* Buttons
* Cards
* Dialogs
* Section containers
* Typography primitives
* Form controls

Feature-specific components should not be placed here.

---

# Data Flow

The preferred data flow is:

```text
Server Component
        │
Fetch Data
        │
Pass Props
        │
Client Component (only if interaction is required)
```

Avoid unnecessary client-side state.

---

# State Management

Preferred order:

1. Server Components
2. React state
3. URL state
4. Context (only when multiple unrelated components require shared state)

No external global state library is planned for Version 1.

---

# Styling Strategy

Styling is implemented using:

* Tailwind CSS v4
* Design tokens
* shadcn/ui
* Utility-first classes

Inline styles should be avoided unless absolutely necessary.

---

# Animations

Animations use Framer Motion.

Animation principles:

* Purposeful
* Minimal
* Story-driven
* Respect `prefers-reduced-motion`

Avoid excessive motion that distracts from content.

---

# Backend Integration

Supabase provides:

* PostgreSQL database
* Storage
* Future authentication (admin only)

Business logic should remain within the application rather than relying heavily on database functions.

---

# Error Handling

The application should:

* Fail gracefully.
* Display helpful error messages.
* Avoid exposing technical details to users.
* Provide recovery paths where possible.

---

# Performance Strategy

Prioritize:

* Static rendering where appropriate.
* Server Components.
* Optimized images.
* Code splitting.
* Lazy loading.
* Minimal JavaScript.

Performance should be considered during implementation rather than as a later optimization.

---

# Accessibility

Every feature must:

* Support keyboard navigation.
* Use semantic HTML.
* Provide accessible labels.
* Maintain sufficient color contrast.
* Respect user motion preferences.

Accessibility is a first-class requirement.

---

# Security

Version 1 should:

* Validate all user input.
* Protect environment variables.
* Restrict administrative functionality.
* Follow Supabase Row Level Security (RLS) best practices.

---

# Testing Strategy

Initial focus:

* Manual testing
* Responsive testing
* Accessibility verification

Automated testing may be introduced in future iterations.

---

# Future Architecture

Potential future enhancements include:

* Guestbook module
* Analytics dashboard
* Progressive Web App support
* Offline capabilities
* Internationalization

The architecture should remain flexible enough to accommodate these features without major restructuring.

---

# Acceptance Criteria

The technical architecture is considered established when:

* Folder structure is implemented.
* Features follow the documented organization.
* Shared components remain reusable.
* Data flow follows documented patterns.
* New features can be added without architectural changes.

---

# Revision History

| Version | Date      | Notes                           |
| ------- | --------- | ------------------------------- |
| 1.0.0   | July 2026 | Initial technical architecture. |
