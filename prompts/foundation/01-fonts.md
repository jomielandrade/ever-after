# Objective

Configure the typography foundation for Project Ever After.

---

# Context

Read before making changes:

* AGENTS.md
* docs/02-design-system.md
* docs/03-technical-architecture.md

---

# Scope

Implement only the font configuration.

---

# Files Allowed to Modify

* app/layout.tsx

---

# Files That Must Not Be Modified

* app/globals.css
* components/
* features/

---

# Requirements

Configure the following fonts using `next/font/google`:

* Cormorant Garamond
* Poppins
* Inter
* Great Vibes

Use CSS variables.

Apply the font variables to the application layout.

---

# Constraints

* Do not create components.
* Do not modify colors.
* Do not modify metadata.
* Do not install packages.

---

# Acceptance Criteria

* Fonts are configured using Next.js font optimization.
* CSS variables are available globally.
* The application builds successfully.

---

# Stop Condition

Stop after configuring the fonts.

Provide a summary of the implementation.
