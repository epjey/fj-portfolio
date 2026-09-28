# Phase 9 — Final QA, SEO, Accessibility & Performance

## Status

Phase 9 audit and scoped fixes are complete. The production build and automated route/viewport checks pass. No deployment was performed. A small number of environment-dependent and visual checks remain listed in [FINAL_QA_CHECKLIST.md](./FINAL_QA_CHECKLIST.md).

## 1. Files Created

- `src/data/siteMetadata.js` — shared description, social image, site name, and intentionally blank production origin.
- `src/views/NotFoundView.vue` — accessible catch-all not-found page with recovery navigation.
- `public/robots.txt` — permits public indexing.
- `FINAL_QA_CHECKLIST.md` — automated results and remaining release checks.
- `PHASE_9_IMPLEMENTATION_REPORT.md` — this report.

## 2. Files Modified

- `index.html` — document language, base title, description, Open Graph/Twitter defaults, and canonical placeholder.
- `src/main.js` — local font imports limited to the needed normal variable font faces and IBM Plex Mono Latin regular.
- `src/router/index.js` — catch-all route and route-aware title/description/social/canonical metadata.
- `src/style.css` — 404 presentation, image rendering, contrast refinements, and narrow-screen overflow fix.
- `src/components/layout/SiteHeader.vue` — mobile-menu Escape handling returns focus to its toggle.
- `src/components/home/ProjectPreview.vue` — uses real local project preview images instead of decorative placeholder artwork.
- `src/views/HomeView.vue` — intrinsic portrait dimensions and high-priority asynchronous image decoding.
- `src/components/certificates/CertificateArchiveItem.vue` — accurate accessible fallback when an image is unavailable.
- `src/components/work/ProjectArchiveItem.vue` — accurate preview-unavailable fallback text.

Existing project/certificate/profile data and local images were audited; no credential, project, or profile data changes were needed in this phase.

## 3. Global 404 Route

Added a final catch-all Vue Router route. Unknown paths render a purpose-built not-found view with a single page heading, a short explanation, and links back Home or to Work. Invalid project slugs continue to use the project's existing not-found state rather than showing a fake project.

## 4. SEO Metadata

Added a concise portfolio description and route-specific document titles/descriptions. Titles were verified for Home, Work, Certificates, About, Contact, valid case studies, and not-found pages. `lang="en"`, UTF-8 charset, and one viewport meta tag are present. Canonical URLs are deliberately omitted until the real production origin is supplied; `localhost` is never emitted as canonical.

## 5. Open Graph and Social Metadata

Added Open Graph title, description, type, and the locally hosted portrait image, plus Twitter `summary_large_image` metadata. Route changes update the title/description/social title. The image path is local (`/profile/fj-adriano.webp`); absolute canonical/share URLs should be confirmed after the real deployment origin is known.

## 6. Accessibility Findings and Fixes

- Mobile navigation closes on Escape and returns focus to the Menu button; it also closes on route changes. Its button exposes `aria-expanded`/`aria-controls`.
- Added an accessible catch-all 404 with recovery links.
- Replaced stale “image to be added” alternative/fallback wording with accurate unavailable states.
- Real decorative Home previews use empty alt text inside an aria-hidden wrapper; meaningful Work previews and the portrait retain descriptive alt text.
- Certificate text metadata remains available outside its image; images load lazily and decode asynchronously.
- Existing skip link, visible focus treatment, semantic landmarks, reduced-motion support, and descriptive links remain in place.
- Computed contrast checks passed for audited text/surface pairs: ink/paper 17.21:1, muted/paper 5.26:1, readable cobalt/mist 5.74:1, muted/mist 4.64:1, white/Contact cobalt 5.25:1, acid/Contact cobalt 4.64:1, dark-header white/contact 4.74:1, and footer white/ink 19.62:1.

Manual keyboard review is still listed in the checklist.

## 7. Responsive Findings and Fixes

An automated production-browser sweep covered widths 320, 390, 768, 1024, and 1440 px for nine routes (45 route/width combinations). It found a Home positioning heading that caused horizontal overflow at 320 px. The minimum heading size and wrapping were adjusted; all 45 combinations now have document width equal to viewport width, one `h1`, and no broken rendered images. Desktop/tablet/mobile visual review remains a manual sign-off item.

## 8. Image Findings

- All six real Work previews, six certificate images, and the local profile portrait load from the production output.
- Home project previews now use the real local project image data rather than a placeholder illustration.
- Home portrait keeps its 4:5 crop; source dimensions are 1145 × 1374, rendered with `object-fit: cover`, `fetchpriority="high"`, and async decoding.
- Project and certificate previews use explicit intrinsic dimensions, lazy loading, and async decoding. The Copy Center Work preview retains its existing crop behavior; other project previews use containment where appropriate.
- The existing favicon is retained as the site's abstract mark; it is not replaced with an external icon asset.

## 9. Project Link Audit

All six project previews and the three supplied public GitHub source repository links were checked in app data. Automated destination requests returned 200 for the personal site, Sekoy Estates, Sekoy Timepieces, PiliPrint, and the three GitHub source repositories. The SkillCert live URL did not produce a conclusive HTTP response in this environment (curl reported an abrupt TLS close / status 000), so it must be opened manually before release. URLs were not changed based on that inconclusive result.

## 10. Certificate Audit

Confirmed all six existing SoloLearn entries are course completions (not represented as professional certifications), with the supplied credential IDs, issue dates, issuer, local certificate image paths, and verification URLs. All six verification URLs returned 200 and redirected to the corresponding certificate pages. All six images load in the production app.

## 11. Current-Learning Audit

Confirmed the AWS Certified Cloud Practitioner entry is labeled Course / Exam Preparation and In Progress, not earned. Software Development with Claude Code remains DataCamp / In Progress. Both supplied resource URLs returned 200 to automated checks; direct manual destination review remains in the checklist.

## 12. Privacy Audit

Only supplied public identity/contact/profile details are used. A workspace scan found no resume PDF/DOCX and `profile.resume` remains `null`; no private phone, school email, street address, or account credentials were added. The resume remains non-clickable/unpublished.

## 13. Secret Scan

Scanned source, public assets, HTML, and relevant project configuration for common API keys, private keys, database connection strings, passwords, tokens, and CDN references. No suspicious matches were found. This is a pattern-based audit, not a guarantee that every possible secret format has been detected.

## 14. Robots

Added `public/robots.txt` with an allow-all baseline for public pages. It is included in the production output. The robots policy does not replace hosting configuration or privacy review.

## 15. Sitemap

No sitemap was added because the final production domain is not known. A useful sitemap needs canonical absolute URLs and should be generated after the domain is chosen, not from localhost paths.

## 16. SPA Routing

All required routes, both valid case-study paths, an invalid case-study slug, and an arbitrary unknown path returned the SPA shell in the local production preview. The Vue app selected the correct route/not-found view client-side. A production static host must rewrite route requests to `index.html`; no host-specific rewrite file or deployment was added.

## 17. Resume

`profile.resume` remains `null`, and `public/resume.pdf` is absent. The page does not expose a dead download link. Add an approved final PDF in the later resume step before publishing a download action.

## 18. Build

`npm.cmd run build` succeeds with Vite 8.3.1. The production bundle includes all local fonts and 13 local images (six project previews, six certificate images, and the profile portrait), plus the favicon and robots file. No dependency was installed, no CDN was added, and no animation library was introduced. The main JavaScript output is 151.29 KB (50.70 KB gzip); CSS is 94.48 KB (17.68 KB gzip).

## 19. Browser QA

An isolated headless Edge instance tested the production preview at 320, 390, 768, 1024, and 1440 px across nine routes. All 45 checks passed for single `h1`, image loading, and no horizontal overflow. The mobile menu's open/close state, Escape behavior, focus return, route-change close, active route marker, and closed-menu visibility were checked. Route metadata, local image requests, console output, and the invalid route were also checked. No browser console errors or warnings were recorded. This covered DOM/layout measurements, not an exhaustive human visual review.

## 20. Remaining Manual QA

Use [FINAL_QA_CHECKLIST.md](./FINAL_QA_CHECKLIST.md) to complete keyboard and visual review, directly verify SkillCert and every destination, check the production host's SPA fallback, and set the actual HTTPS `origin` in `src/data/siteMetadata.js` before deployment. Do not deploy as part of this phase. No production URL was configured and no sitemap was generated.
