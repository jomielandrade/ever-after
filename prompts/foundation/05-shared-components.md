# Objective

Create the shared UI foundation for Project Ever After.

---

# Context

Read:

* AGENTS.md
* docs/02-design-system.md
* docs/03-technical-architecture.md

---

# Scope

Create only the reusable shared components.

---

# Components to Create

Inside `components/shared/`:

* Container
* Section
* PageTitle
* SectionTitle
* Divider

Each component should be reusable and documented with clear props.

---

# Requirements

Every component should:

* Follow the Design System.
* Support responsive layouts.
* Be accessible.
* Accept `className` overrides.
* Keep styling minimal and composable.

---

# Constraints

* Do not create feature-specific components.
* Do not duplicate shadcn components.
* Reuse `components/ui` where appropriate.

---

# Acceptance Criteria

* Components are reusable.
* Components are responsive.
* Components are fully typed.
* No duplicate UI patterns exist.

---

# Stop Condition

Stop after the shared component library is created.

Summarize all created components and their purpose.
