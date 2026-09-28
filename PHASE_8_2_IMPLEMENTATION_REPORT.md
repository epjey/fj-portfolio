# Phase 8.2 — Work Page Visual Project Refactor

## Status

The `/work` page now presents its six projects through one reusable editorial showcase component. Phase 9 has not started. No screenshots were captured because this environment did not provide an available browser or screenshot surface; all preview frames are clearly labeled local-image slots.

## 1. Files Modified

- `src/views/WorkView.vue` — divided the archive into Selected Case Studies and Deployed Web Projects, reused the showcase component for both groups, and updated the total project count.
- `src/components/work/ProjectArchiveItem.vue` — refactored into the shared project presentation for case studies and deployed projects.
- `src/data/projects.js` — changed the PiliPrint and Copy Center preview metadata to explicit local image slots.
- `src/data/deployments.js` — corrected Stratos University data, applied continuous numbering, and added preview metadata for all deployments.
- `src/style.css` — added section headings, full-width preview frames, responsive showcase layouts, and restrained image-hover behavior.
- `public/projects/previews/.gitkeep` — prepared the local screenshot directory.
- `PHASE_8_2_IMPLEMENTATION_REPORT.md` — this report.

## 2. Component Refactor

The existing `ProjectArchiveItem.vue` now accepts either a case-study project or deployment record. It handles project number, category/type, title, description, verified stack where available, preview image or placeholder, and only the available actions. The previous thin-row `DeploymentArchiveItem.vue` component was removed.

## 3. Stratos University Correction

The former “Personal Website” record is now **Stratos University School Website** with short display name **Stratos University**, type **School Website**, and the supplied live URL. Its source remains unset, and no technology stack is claimed because none was verified from the supplied project information.

## 4. Deployment Layout Changes

The Work page now has two groups: **01 / Selected Case Studies** (PiliPrint and LAN-Based School Copy Center Portal), followed by **02 / Deployed Web Projects** (Stratos University, Sekoy Estates, Sekoy Timepieces, and SkillCert). Entries use continuous numbers **001–006** and large editorial preview frames rather than thin archive rows. No Copy Center deployment URL was added.

## 5. Screenshot Assets Captured or Added

None. The browser/screenshot environment reported no available browsers or apps. No screenshots were fabricated, hotlinked, or replaced with mock application interfaces.

## 6. Screenshot Paths Still Missing

Add original, locally captured WebP screenshots at:

- `public/projects/previews/piliprint.webp`
- `public/projects/previews/school-copy-center.webp`
- `public/projects/previews/stratos-university.webp`
- `public/projects/previews/sekoy-estates.webp`
- `public/projects/previews/sekoy-timepieces.webp`
- `public/projects/previews/skillcert.webp`

Until those assets exist, each project renders a large, clearly labeled **WEBSITE PREVIEW / IMAGE TO BE ADDED** field. The preview metadata includes the expected local paths for straightforward replacement.

## 7. Link Behavior

- Case-study titles and **View case study** actions use Vue Router.
- Live Site / Open live system and verified Source actions open in a new tab with `rel="noopener noreferrer"`.
- Source is shown only for Sekoy Estates, Sekoy Timepieces, and SkillCert, whose public repositories were supplied and verified in Phase 8.
- Stratos has only its supplied live-site action; PiliPrint keeps its case-study and live-system actions.

## 8. Desktop, Tablet, and Mobile Behavior

Desktop retains the 12-column editorial grid and wide preview frames. Tablet uses a six-column project layout. Mobile stacks each entry in this reading order: number/type, title, description, stack, preview, actions; the preview becomes nearly full-width, headings scale down, and actions can wrap vertically. The project container uses the existing responsive gutters and the preview frame maintains an explicit aspect ratio.

Exact visual checks at 390px, 768px, and 1440px could not be performed without a browser surface. Please verify those viewport widths and check for overflow during visual review.

## 9. Performance Handling

Local preview images use a wide 16:9 desktop frame, responsive 16:10 mobile frame, intrinsic `1440 × 810` dimensions, `loading="lazy"`, and `decoding="async"`. WebP is the expected local format. No image assets were present to optimize in this phase. The restrained 1.5% hover scale is covered by the existing reduced-motion rules.

## 10. Build Verification

- `npm.cmd run build` succeeds with Vite 8.3.1.
- Data checks passed for the 001–006 archive order, corrected Stratos metadata, unset Stratos source/stack, and local preview slots.
- A source scan found no remaining “Personal Website” deployment title or ID in `src`.
- No dependencies were installed; no CDN, iframe, backend, or animation library was added.
- Browser-console inspection and direct viewport/overflow checks remain for manual review.
