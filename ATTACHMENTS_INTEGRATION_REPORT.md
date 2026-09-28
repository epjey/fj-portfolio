# Attached Assets Integration Report

## Status

All attached visual assets integrated into the portfolio so far are recorded here: six real project screenshots, six SoloLearn course-certificate images, and the supplied profile portrait. The original PNG files were not modified. Local WebP files are used by the site; no CDN, external image host, screenshot service, or image-generation step was used.

## Project Screenshots

The six real project screenshots are connected to their existing Work-page project records. Existing titles, descriptions, stacks, case studies, page structure, and navigation were not changed for this asset integration.

| Project | Local asset | Source dimensions | WebP size |
| --- | --- | ---: | ---: |
| PiliPrint | `public/projects/previews/piliprint.webp` | 1535 × 730 | 57,762 bytes |
| LAN-Based School Copy Center Portal | `public/projects/previews/school-copy-center.webp` | 1535 × 732 | 41,900 bytes |
| SkillCert | `public/projects/previews/skillcert.webp` | 1520 × 726 | 70,348 bytes |
| Sekoy Timepieces | `public/projects/previews/sekoy-timepieces.webp` | 1521 × 726 | 93,796 bytes |
| Sekoy Estates | `public/projects/previews/sekoy-estates.webp` | 1517 × 725 | 241,480 bytes |
| Stratos University School Website | `public/projects/previews/stratos-university.webp` | 1522 × 735 | 264,214 bytes |

These preview paths are stored on the existing project records in `src/data/projects.js`. Preview images retain lazy loading, asynchronous decoding, intrinsic dimensions, and descriptive alternative text. The existing editorial frames and image-fit choices were retained; no browser chrome, device mockups, or visual filters were added.

## SoloLearn Course Certificates

All six attached certificate images are locally bundled as lossless WebP to preserve fine text and credential details. The records remain the existing course completions in `src/data/certificates.js`; no duplicate credentials were created.

| Course | Credential ID | Local asset | WebP size |
| --- | --- | --- | ---: |
| Introduction to C++ | `CC-RM0MAEC2` | `public/certificates/sololearn-introduction-cpp.webp` | 122,778 bytes |
| Prompt Engineering | `CC-DBLYLHAK` | `public/certificates/sololearn-prompt-engineering.webp` | 124,004 bytes |
| Social Media Marketing with AI | `CC-66XTY6WI` | `public/certificates/sololearn-social-media-marketing-ai.webp` | 129,520 bytes |
| Introduction to HTML | `CC-EJNB395R` | `public/certificates/sololearn-introduction-html.webp` | 123,754 bytes |
| Introduction to CSS | `CC-ADYWI72P` | `public/certificates/sololearn-introduction-css.webp` | 123,996 bytes |
| Introduction to JavaScript | `CC-YZSRTOB6` | `public/certificates/sololearn-introduction-javascript.webp` | 126,208 bytes |

The source certificate images are PNGs at 1754 × 1238 pixels. The certificate archive component already supplies lazy loading, asynchronous decoding, and title-specific alternative text; its layout was not changed.

## Profile Portrait

- Source: `ChatGPT Image Sep 29, 2026, 02_48_16 AM.png` (PNG, 1145 × 1374 pixels; 1,943,876 bytes in Downloads).
- Local site asset: `public/profile/fj-adriano.webp` (149,358 bytes, WebP quality 92).
- Connected through `profile.photo` in `src/data/profile.js`.
- The existing Home portrait frame and crop behavior were retained; no portrait was fabricated or composited.

## Code and Asset Files

- Updated data: `src/data/projects.js`, `src/data/certificates.js`, and `src/data/profile.js`.
- Added project previews: six WebP files under `public/projects/previews/`.
- Added certificates: six WebP files under `public/certificates/`.
- Added profile image: `public/profile/fj-adriano.webp`.
- No dependencies were installed and no CDN references were added.

## Verification

- `npm.cmd run build` succeeds with Vite 8.3.1.
- Confirmed all six certificate images and the profile image are copied into the production `dist/` output. The Phase 8.3 report records the same production-output check for all six project previews.
- Visually inspected the converted portrait and CSS certificate image; the certificate wording and detail remain legible.
- Direct responsive browser inspection at 390px, 768px, and 1440px was not performed in this pass. Please check the Home portrait crop and certificate archive at those widths in the browser.
