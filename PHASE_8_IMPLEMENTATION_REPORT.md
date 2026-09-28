# Phase 8 — Real Content, Assets, Credentials & Live Deployments

## Status

Phase 8 content and deployment foundations are implemented from the supplied facts and URLs. No photo, certificate images, or resume file were found in the workspace or the supplied attachment folder, so those assets were not fabricated or published. Phase 9 has not started.

## 1. Files Created

- `src/data/learning.js` — active learning resources kept separate from completed credentials.
- `src/data/deployments.js` — four live deployments other than PiliPrint.
- `src/components/work/DeploymentArchiveItem.vue` — reusable text-first live/source row.
- `public/profile/.gitkeep` — keeps the local profile image directory available.
- `PHASE_8_IMPLEMENTATION_REPORT.md` — this report.

## 2. Files Modified

- `src/data/profile.js` — public name, email, GitHub, LinkedIn, and optional photo path.
- `src/data/certificates.js` — six SoloLearn course-completion records.
- `src/data/projects.js` — PiliPrint live URL; empty media arrays for both existing case studies.
- `src/data/learning.js` — added the two in-progress learning records.
- `src/views/HomeView.vue` — uses the public name, real social/contact destinations, portrait-image slot, and updated course-learning teaser; featured project case-study actions remain primary.
- `src/views/CertificatesView.vue` — course-accurate wording and Current Learning rows.
- `src/views/WorkView.vue` — added a Live Deployments section after the existing case-study archive.
- `src/views/ProjectDetailView.vue` — conditionally exposes PiliPrint’s live-system action and omits empty media galleries.
- `src/components/layout/SiteHeader.vue` and `SiteFooter.vue` — shared public name and profile links.
- `src/components/certificates/CertificateArchiveItem.vue` — displays complete day/month/year issue dates.
- `src/components/work/ProjectArchiveItem.vue` — case-study and live-system actions for PiliPrint.
- `src/components/home/ProjectPreview.vue` — small live-system marker for PiliPrint; the featured row still links to its case study.
- `src/style.css` — local portrait-ready treatment and responsive learning/deployment rows.
- `src/router/index.js`, `index.html`, and `public/favicon.svg` — public name in document titles and favicon accessible label.

No dependencies were installed. No CDN assets, backend, database, analytics, or contact form were added.

## 3. Profile Information Integrated

- Name: Fj Adriano
- Email: `adrianofj61@gmail.com`
- GitHub: `https://github.com/epjey`
- LinkedIn: `https://www.linkedin.com/in/fj-adriano-802250296`
- Location: Philippines
- Existing field, current status, and focus values were retained.

Home, Contact, Footer, Header, and document titles use the shared profile data where appropriate. Email uses `mailto:`. External profile links use a new tab with `noopener noreferrer`.

## 4. Portrait Asset Status

No image file was available in the project or supplied attachment folder. `profile.photo` remains `null`, and the Home page keeps a clearly labeled local-photo placeholder without initials or a fabricated portrait. Add the original image at `public/profile/fj-adriano.png`, then set `profile.photo` to `/profile/fj-adriano.png`. The image slot uses the requested 4:5 frame, `object-fit: cover`, and `alt="Portrait of Fj Adriano"` when populated.

## 5. Six Course-Certificate Records

All records have `type: 'course'`, issuer SoloLearn, supplied credential ID and verification URL, and full ISO issue date:

1. Introduction to C++ — 29 November 2024 — `CC-RM0MAEC2`
2. Prompt Engineering — 07 January 2025 — `CC-DBLYLHAK`
3. Social Media Marketing with AI — 15 January 2025 — `CC-66XTY6WI`
4. Introduction to HTML — 20 February 2025 — `CC-EJNB395R`
5. Introduction to CSS — 24 March 2025 — `CC-ADYWI72P`
6. Introduction to JavaScript — 16 May 2025 — `CC-YZSRTOB6`

The page now says “Courses & credentials” and identifies these as course completions, not professional certifications. The certificate link checks returned HTTP 200 for all six supplied verification URLs.

## 6. Certificate Image Status

No certificate image files were available, so all six records use `image: null`. Copy the original supplied images to these exact local paths when available:

- `public/certificates/sololearn-introduction-cpp.png`
- `public/certificates/sololearn-prompt-engineering.png`
- `public/certificates/sololearn-social-media-ai.png`
- `public/certificates/sololearn-introduction-html.png`
- `public/certificates/sololearn-introduction-css.png`
- `public/certificates/sololearn-introduction-javascript.png`

No certificate was recreated or altered. Existing text metadata and verification links remain available independently of the images.

## 7. Current-Learning Records

`src/data/learning.js` contains:

- AWS Certified Cloud Practitioner — Course / Exam Preparation · Udemy · In Progress. It is not represented as an earned credential.
- Software Development with Claude Code — DataCamp · In Progress.

The Certificates page renders these in a separate editorial section after the completed course archive. Both resource links open safely in a new tab. Automated HTTP checks returned 200 for DataCamp; Udemy returned 403 to the automated request, so that resource should be opened manually to confirm access.

## 8. Deployment Records

`src/data/deployments.js` contains four separate live rows:

- Personal Website — Web Project; no stack or source URL claimed.
- Sekoy Estates — Landing Page; HTML and CSS.
- Sekoy Timepieces — Landing Page; HTML and CSS.
- SkillCert — Web Application; PHP listed, without a production-readiness claim.

PiliPrint is not duplicated in this list. The LAN-Based School Copy Center remains in the Work archive and its case study without an invented public deployment.

## 9. Live / Source Link Mappings

- Personal Website: live `https://fj-adriano-website.netlify.app/`; source `null`.
- Sekoy Estates: live `https://sekoye-estates.netlify.app/`; source `https://github.com/epjey/Sekoy-Estates-Basic-Landing-Page`.
- Sekoy Timepieces: live `https://sekoytimepeieces.netlify.app/`; source `https://github.com/epjey/First_Project_Landing_Page_For_Sekoy_Watch_Business`.
- SkillCert: live `https://skillcert.fwh.is/landing/index.php`; source `https://github.com/epjey/skillcert_webtech`.

The three supplied GitHub source repositories were confirmed public. Their repository information supports HTML/CSS for the Sekoy landing pages; SkillCert’s public source includes PHP. No Personal Website, PiliPrint, or Copy Center repository link was inferred. All five supplied live URLs (including PiliPrint) returned HTTP 200 to local HTTP checks.

## 10. PiliPrint Live Deployment Integration

The existing PiliPrint record now includes `https://piliprint-system.duckdns.org/piliprint_system/pos/login`. The existing Work entry and case study expose an “Open live system” action, and Home shows a small live-system marker while keeping the case study as its primary action. No credentials or login instructions were added.

## 11. Work-Page Deployment Section

The existing selected-work/case-study archive remains in place. A secondary text-only Live Deployments section follows it, with distinct Live Site and Source links where a public source URL exists. The rows contain no iframe, browser mockup, screenshot grid, or generated thumbnail. Links open in a new tab with `rel="noopener noreferrer"` and descriptive accessible names.

## 12. Project-Media Placeholder Changes

PiliPrint and School Copy Center now have empty `media` arrays. Because `ProjectDetailView` only renders its gallery when real media exists, neither case study displays an empty/fake screenshot gallery. The reusable `ProjectMedia` component remains available for future authentic local images. Existing Home and Work archive compositions were otherwise retained.

## 13. Resume Status

`profile.resume` remains `null`. No resume PDF was found or copied to `public/resume.pdf`. Home and Contact retain the non-clickable “PDF to be added” status; no resume link is exposed.

## 14. Privacy Decisions

Only the supplied public name, email, public profiles, and country-level location are included. No street address, phone number, school email, private repository, credential, or password was added. No resume contents were read or published.

## 15. Responsive Verification

The existing responsive rules handle the updated name/photo frame, long course titles and IDs, current-learning rows, deployment descriptions, and stacked live/source actions. A browser surface was not attached, so screenshots and direct visual/overflow verification at 390px, 768px, and 1440px could not be performed; those checks remain manual.

## 16. Accessibility Verification

- The portrait slot has a meaningful alt when an image is present and a labeled placeholder otherwise.
- Certificate images have concise title-specific alternatives; visible titles, dates, IDs, issuers, and verification actions do not depend on image text.
- Contact, learning, live, and source links use descriptive names and safe external-link attributes.
- Existing keyboard-focus and reduced-motion styles remain intact; no action depends on hover.

## 17. Build Verification

- `npm.cmd run build` succeeds with Vite 8.3.1.
- Data integrity assertions passed for six course records, two in-progress resources, four deployment rows, PiliPrint’s live URL, null photo/resume, and omitted project media.
- Local Vite HTTP smoke checks returned 200 for Home, Work, both case-study paths, Certificates, Contact, and the transformed Phase 8 views/data modules.
- Automated HTTP checks returned 200 for all six SoloLearn verification URLs and all five live deployment URLs. Udemy returned 403 to the automated request; DataCamp returned 200.
- No browser console or live viewport check was possible in this session.

## 18. Remaining Manual Input

Please add the original portrait at `public/profile/fj-adriano.png` and copy the six original SoloLearn image files to the exact paths in Section 6. The resume remains intentionally unpublished; provide an updated PDF and approval in the later resume phase before it is made public. Manually check the Udemy URL and inspect the site at 390px, 768px, and 1440px before sign-off.
