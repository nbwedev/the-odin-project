# Admin Dashboard

A simple **Admin Dashboard** built with **HTML** and **CSS**, deployed on **Vercel**. This documents the project setup, implementation details, and lessons learned.

---

## Deployment

- The live site can be viewed here.
- Version-controlled with **GitHub** using sparse checkout for the `07-admin-dashboard` project

---

## Features

- **Semantic HTML**: Proper use of `main`, `header`, `section`, `nav`, and other semantic elements
- **CSS Grid Layout**:

  - **Line-based positioning** with `grid-column` and `grid-row`
  - **Grid-template-areas** for clearer, more maintainable layouts

- **Nested Grids**: Cards inside `main` are placed using nested grid containers
- **Custom Styling**:

  - Selective card borders
  - Structured header and sidebar navigation
  - Consistent padding, gap, and alignment

---

## Tech Stack

- **HTML5**
- **CSS3** (Grid, Flexbox, nth-child selectors)
- **Firefox Dev Tools** (for layout debugging)
- **Vercel** (deployment)
- **GitHub** (version control)

---

## Key Learnings

- **CSS Grid**:

  - Rows auto-generate when only columns are defined
  - `grid-template-areas` improves readability and maintenance

- **Debugging & Troubleshooting**:

  - CSS properties fail if targeting is incorrect
  - `var()` requires declared variables (e.g., `var(--red)` not `var(red)`)

- **Development Workflow**:

  - Breaking large sections into smaller, manageable parts simplifies styling

---

## References

- [The Odin Project - Admin Dashboard](https://github.com/nbwedev/the-odin-project/tree/main/full-stack-javascript/fullstack-01-intermediate-html-css/07-admin-dashboard)

---

## Status

- **WIP** – Working on refining grid layouts, header/aside sections, and card styling
