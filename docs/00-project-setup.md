# Project Setup

**Project:** Project Ever After
**Version:** 1.0.0
**Status:** Active

---

# Purpose

This document defines the project's development environment, technology stack, tooling, and repository organization.

It is the authoritative reference for how the application is developed, not what features it contains.

---

# Scope

This document covers:

* Development environment
* Technology stack
* Repository structure
* Development workflow
* Tooling
* Coding standards overview

It does **not** define product features, UI design, database schema, or content.

---

# Technology Stack

## Frontend

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4

## UI

* shadcn/ui
* Framer Motion

## Forms

* React Hook Form
* Zod

## Backend

* Supabase
* PostgreSQL

## Deployment

* Vercel

---

# Development Environment

Required software:

* Node.js LTS
* npm
* Git
* Cursor IDE
* Modern Chromium-based browser

Recommended:

* GitHub Desktop (optional)
* Supabase CLI (future)
* Vercel CLI (future)

---

# Repository Structure

The repository is organized into:

* `app/` — Next.js routes
* `components/` — Reusable UI components
* `features/` — Feature-based modules
* `hooks/` — Shared React hooks
* `lib/` — Utilities and integrations
* `types/` — Shared TypeScript types
* `docs/` — Product documentation
* `prompts/` — AI implementation prompts
* `.cursor/` — Cursor rules

---

# Development Workflow

Development follows a specification-first approach:

1. Update documentation.
2. Update implementation prompt.
3. Implement the feature.
4. Review.
5. Refactor.
6. Commit.

Documentation should always be updated before implementation when requirements change.

---

# Coding Standards Overview

* TypeScript throughout the project.
* Server Components by default.
* Client Components only when required.
* Mobile-first responsive development.
* Accessibility is mandatory.
* Prefer reusable components over duplication.

Detailed standards are defined in `AGENTS.md` and `.cursor/rules/`.

---

# Version Control

* Use Git for version control.
* Create small, meaningful commits.
* Keep the `main` branch deployable.
* Feature work may be done in short-lived branches if needed.

---

# Dependencies

Core dependencies will be introduced incrementally rather than all at once.

Initial project:

* Next.js
* React
* Tailwind CSS

Additional libraries (shadcn/ui, Framer Motion, React Hook Form, Zod, Supabase) will be added during the foundation phase.

---

# Acceptance Criteria

The setup is considered complete when:

* Repository structure exists.
* Documentation structure is established.
* AI guidance files are in place.
* Core dependencies are installed.
* Development server runs successfully.
* The project is ready for feature implementation.

---

# Revision History

| Version | Date      | Notes                                |
| ------- | --------- | ------------------------------------ |
| 1.0.0   | July 2026 | Initial project setup specification. |
