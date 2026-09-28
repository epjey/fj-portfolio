# Phase 1.1 — Originality and Visual Identity Refactor

## Status

Phase 1.1 is complete. The project remains at the design-foundation stage; Phase 2 has not started.

## 1. Files Modified

- `package.json` and `package-lock.json` — updated local font dependencies.
- `src/main.js` — loads Archivo, Manrope, and IBM Plex Mono locally.
- `src/style.css` — new color tokens, typography roles, responsive 12-column grid, navigation and page composition styles.
- `src/router/index.js` — updated page surfaces, header themes, section indexes, and title formatting.
- `src/components/layout/SiteHeader.vue` — redesigned wordmark lockup, numbered navigation, and mobile menu links.
- `src/components/layout/SiteFooter.vue` — portfolio identity, social links, edition, section range, and copyright layout.
- `src/components/ui/SectionLabel.vue` — section index and compact detail metadata.
- `src/views/HomeView.vue` — asymmetric intro composition.
- `src/views/WorkView.vue` — archive-inspired work index foundation.
- `src/views/CertificatesView.vue` — credential archive foundation.
- `src/views/AboutView.vue` — split profile composition with biography and expertise placeholders.
- `src/views/ContactView.vue` — cobalt contact foundation.

## 2. Fonts Removed and Installed

- Removed Anton (`@fontsource/anton`).
- Added Archivo Variable (`@fontsource-variable/archivo`) for display typography.
- Kept Manrope Variable (`@fontsource-variable/manrope`) for body and UI typography.
- Added IBM Plex Mono (`@fontsource/ibm-plex-mono`) for subtle technical metadata.

All three font families are bundled from npm packages. The variable IBM Plex Mono package name was not available, so the standard local Fontsource package is used.

## 3. Updated Color Tokens

| Token | Value |
| --- | --- |
| `--color-ink` | `#0A0A0A` |
| `--color-paper` | `#F1EFE8` |
| `--color-cobalt` | `#3155FF` |
| `--color-acid` | `#D9FF52` |
| `--color-mist` | `#DCE2E8` |
| `--color-muted` | `#62635F` |
| `--color-border` | `#C9C8C0` |
| `--color-white` | `#FFFEFA` |

Page surfaces: Home, Work, and About use paper; Certificates uses mist; Contact uses cobalt; the footer uses ink.

## 4. Navigation Changes

- Replaced the previous header arrangement with a left-aligned wordmark and a right-aligned navigation row.
- Added the supporting `Cloud / Software · Portfolio 2026` label under the wordmark.
- Numbered the links `01 WORK`, `02 CERTS`, `03 ABOUT`, and `04 CONTACT`.
- Removed the boxed Contact button and full-width divider.
- Kept the accessible mobile menu and route-aware active state.

## 5. Grid-System Changes

- Added a reusable 12-column CSS grid for wide layouts.
- Added a 4-column mobile grid and responsive tablet gutter adjustments.
- Positioned headings, metadata, notes, and placeholder areas across separate columns to establish asymmetry.
- Added compact `[01]` to `[05]` section indexing and monospace metadata styles.

## 6. Page Composition Changes

- **Home:** Offset “BUILDING SOFTWARE. THINKING IN SYSTEMS.” typography, index metadata, student/focus line, and short supporting note.
- **Work:** “WORK / PROJECT ARCHIVE” composition with archive and date-range metadata; no project cards.
- **Certificates:** “CERTIFICATIONS & CONTINUOUS LEARNING” credential archive treatment; no certificate cards.
- **About:** Split “ABOUT / BACKGROUND & FOCUS” typography and empty biography/expertise structure.
- **Contact:** Cobalt surface with “HAVE SOMETHING TO BUILD?” and a temporary note; no contact form.

## 7. Rendered Results

Desktop renders show the paper/mist/cobalt surface system, right-aligned numbered navigation, large Archivo headings, and visibly different compositions per route. The Work page remains paper rather than black. The About view uses an offset headline and separate profile placeholders.

At a 390 px emulated mobile width, the wordmark and Menu control remain visible, the layout collapses to a 4-column grid, and the large headings scale down. The contact page keeps its cobalt field and acid accent.

## 8. Accessibility Checks

- Kept semantic header, nav, main, section, and footer elements.
- Kept the skip link, visible keyboard focus, and button-based mobile menu.
- Mobile navigation exposes `aria-expanded` and `aria-controls`, closes on Escape, and closes after route changes.
- Kept reduced-motion support and route-specific document titles.
- Checked that the mobile menu opens and exposes all four links.

## 9. Build and Browser Verification

- `npm.cmd run build` succeeds.
- `npm.cmd audit` reported zero vulnerabilities after installing the local font packages.
- All five routes were inspected at desktop and 390 px emulated mobile widths.
- No horizontal overflow was detected at either viewport size.
- Desktop navigation, active route markers, mobile menu visibility, page surface colors, and header contrast were checked.
- The browser reported no console errors during route checks.
- No CDN or remote font imports were added.

## Deferred

Project cards, certificate cards, project case studies, full About content, contact form behavior, backend work, database work, and advanced animation remain for later phases.
