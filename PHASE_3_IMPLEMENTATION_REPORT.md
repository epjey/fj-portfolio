# Phase 3 — Work Archive / Projects Page

## Status

Phase 3 is implemented. The work is limited to the `/work` project archive and the minimum Home-page data refactor. Project detail pages and Phase 4 have not been started.

## 1. Files Created

- `src/data/projects.js` — shared project archive data and featured-project selector.
- `src/components/work/ProjectArchiveItem.vue` — reusable editorial project row and labeled visual placeholder.
- `PHASE_3_IMPLEMENTATION_REPORT.md` — this report.

## 2. Files Modified or Removed

- `src/views/WorkView.vue` — replaced the Phase 1 foundation with the archive introduction, project list, metadata, and certificates transition.
- `src/components/home/ProjectPreview.vue` — adapted Home previews to read the shared project shape and link to `/work` rather than implying a detail route.
- `src/views/HomeView.vue` — now renders the featured-project selector from the shared data file.
- `src/style.css` — added desktop, tablet, and mobile Work archive layouts and restrained row/preview styling.
- `src/data/homeProjects.js` — removed after its data was consolidated into `projects.js`.

No dependencies were installed, and no CDN or animation library was added.

## 3. Project Data Architecture

`projects.js` is the single source for project titles, descriptions, categories, years, technology stacks, preview labels, and feature flags. It exports `projects` for the archive and `featuredProjects` for Home. Each project includes a slug to prepare for future case-study routing; no `/work/:slug` route or project links exist yet.

Only supplied project details are included. No statuses, GitHub URLs, or demo URLs were invented.

## 4. Project Archive Component Structure

`WorkView.vue` owns the archive-level introduction, count, list, and next-section link. It renders `ProjectArchiveItem.vue` for each project. The row component receives project data through a prop and presents its number/year, title, category, description, stack, future-phase note, and accessible preview placeholder.

## 5. PiliPrint Presentation

PiliPrint is listed as a 2026 Business Management System. Its description identifies the POS, inventory, HRMS, and finance/accounting workflows. The stack is PHP, MySQL, JavaScript, and Java.

## 6. School Copy Center Presentation

LAN-Based School Copy Center Portal is listed as a 2026 LAN-Based Web Application. Its description explains that it organizes printing and photocopy requests without relying on internet-based messaging platforms. The stack is Vue 3, Vite, Tailwind CSS, PHP, and MySQL.

## 7. Home-Page Data Refactor

Home still shows only featured projects and keeps its existing presentation. Its project previews now use `featuredProjects` from the shared source; selecting one leads to the Work archive, not a nonexistent case study.

## 8. Responsive Behavior

- Desktop uses the existing 12-column editorial grid, with identity, project details, stack/action metadata, and a wide preview arranged as horizontal archive rows.
- Tablet reduces the project row to six columns and shifts supporting content below the title/description.
- Mobile changes to a four-column grid and stacks identity, title/category/description, stack, future-phase note, and preview in that order. The typography and preview proportions adjust for narrow screens.

## 9. Interactions

Archive rows use a restrained background shift on hover; the preview visuals use CSS shapes rather than fabricated screenshots. The certificates transition uses the existing text-link hover/focus treatment. Project case-study actions remain plain explanatory text, so there are no dead or misleading links.

## 10. Accessibility

- Used a labeled introductory section, a project-list section, and article headings linked with `aria-labelledby`.
- Project stacks are semantic lists; archive previews expose a concise placeholder label as an image role while internal shapes are decorative.
- Future case studies are not presented as disabled controls or links.
- Existing visible keyboard focus and reduced-motion rules remain in place; the new row transition is brief and non-essential.

## 11. Placeholder Content Remaining

Both archive preview regions are clearly marked screenshot-reserved visual placeholders. Replace them with genuine project imagery when available. Case-study pages/actions remain deferred to a later phase.

## 12. Verification

- `npm.cmd run build` succeeds with Vite 8.3.1.
- Local HTTP smoke checks returned `200` for `/`, `/work`, `/certificates`, `/about`, and `/contact`.
- Static checks confirmed there is no legacy `homeProjects` reference, no case-study route, and no CDN reference in the app entry/source files.
- No packages changed during Phase 3.
- Browser-based checks at 390, 768, and 1440 px and browser-console inspection could not be run in this environment because no browser surface/runtime was available. Please manually inspect those widths and the browser console before sign-off.
