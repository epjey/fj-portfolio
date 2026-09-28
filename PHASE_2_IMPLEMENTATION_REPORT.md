# Phase 2 — Home Page / Hero Experience

## Status

Phase 2 is complete. The Home page has been expanded into a portfolio landing page; other routes remain at their foundation layouts. Phase 3 has not started.

## 1. Files Created

- `src/components/home/ProjectPreview.vue` — reusable editorial project row with a labeled visual placeholder.
- `src/data/homeProjects.js` — simple data for the two supplied project previews.
- `PHASE_2_IMPLEMENTATION_REPORT.md` — this implementation report.

## 2. Files Modified

- `src/views/HomeView.vue` — Home page sections and content.
- `src/style.css` — Home-specific desktop, tablet, and mobile layouts, preview treatments, and restrained interactions.

No dependencies or fonts were added or removed.

## 3. Home-Page Sections Implemented

- **Hero:** `[01] INTRO`, asymmetric “BUILDING SOFTWARE. THINKING IN SYSTEMS.” headline, supplied student description, focus/location/portfolio metadata, and a Continue scroll cue.
- **Positioning:** Short software-and-infrastructure statement and the supplied current-focus paragraph.
- **Selected work:** `[02]` index with PiliPrint and LAN-Based School Copy Center entries, their supplied descriptions/stacks, and links to `/work`.
- **Credentials:** `[03]` generic certifications and continuous-learning teaser linking to `/certificates`.
- **Closing CTA:** Restrained dark panel linking to `/work` before the shared footer.

## 4. Project-Preview Architecture

Project labels, numbers, descriptions, technology lists, destinations, and visual variants live in `src/data/homeProjects.js`. `ProjectPreview.vue` renders each data entry as a full-width RouterLink row with number, title, subtitle, stack, “View project” text, and a 16:10 visual region.

The visual regions use labeled abstract color blocks and rules as screenshot placeholders. They are marked decorative for assistive technology and do not imitate actual project screenshots or application screens.

## 5. Responsive Behavior

- Desktop uses the existing 12-column grid for asymmetric hero, positioning, and project layouts.
- Tablet adjusts the hero headline offsets and size to keep “IN SYSTEMS.” together.
- Mobile reorganizes hero metadata below the headline, stacks project information and full-width previews, and makes section links touch-friendly.
- Layouts were checked at 390 px, 768 px, and 1440 px with no horizontal overflow.

## 6. Animations and Interactions

- Added a small CSS-only downward nudge to the hero scroll cue.
- Project title, arrow, and visual placeholder shift by a few pixels on hover and keyboard focus.
- Reduced-motion preferences shorten transitions and stop the scroll-cue animation.
- No animation library was installed.

## 7. Accessibility Work

- Kept one page-level `h1`, followed by section `h2` and project `h3` headings.
- Used semantic section landmarks, definition-list metadata, technology lists, and RouterLink navigation.
- Added descriptive accessible names to project links; placeholder visuals are `aria-hidden`.
- Kept keyboard-visible focus, the existing accessible mobile menu, and reduced-motion support.

## 8. Build and Browser Verification

- `npm.cmd run build` succeeds.
- Browser checks at 390 px, 768 px, and 1440 px confirmed one `h1`, two project previews, both `/work` destinations, the `/certificates` destination, and no horizontal overflow.
- The mobile menu opens with four links; desktop and mobile navigation switch at the expected breakpoint.
- No browser console errors were detected during the checks.
- No CDN references or remote runtime assets were added.

## 9. Placeholder Content

- Both project visual regions are placeholders pending real screenshots.
- Footer identity, email, GitHub, and LinkedIn details remain the Phase 1 placeholders.
- The credentials teaser is generic; no certificate names were invented.
- Project previews link to `/work` until later phases add individual project navigation.

## 10. Design Decisions

- Kept the established paper, ink, cobalt, and restrained acid palette and existing font system.
- Used editorial project rows instead of rounded cards.
- Built abstract, labeled visual placeholders instead of mock application screenshots.
- No material scope changes were made beyond the Home page work described in the Phase 2 brief.

## Deferred

The full Work archive, project detail pages, certificate list, About page content, contact form, backend, database, and advanced animation remain for later phases.
