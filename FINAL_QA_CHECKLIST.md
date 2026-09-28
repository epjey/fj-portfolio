# Final Portfolio QA Checklist

Automated checks noted below were run for Phase 9. Complete the unchecked browser/manual items before publishing.

## Automated checks passed

- [x] Production build completes with `npm.cmd run build`.
- [x] All primary routes, both valid case studies, invalid case-study slug, and unknown route return the SPA shell.
- [x] Production browser sweep at 320, 390, 768, 1024, and 1440 px: one `h1` per route, no horizontal overflow, and all rendered images load.
- [x] Mobile menu opens, exposes the four links, closes on Escape, returns focus to its toggle, and closes after navigation.
- [x] Real project previews, certificate images, portrait, favicon, and `robots.txt` are present in production output.
- [x] Certificate data, in-progress learning labels, project/deployment records, public source links, and unpublished resume state match the supplied information.
- [x] SEO/social metadata updates on route navigation; canonical is omitted until a real production origin is configured.
- [x] No console errors or warnings appeared during the isolated production-browser route sweep.
- [x] Source/public files contain no CDN references, known placeholder identities, fabricated resume, or detected secret patterns.

## Manual checks before release

- [ ] Review the visual composition at desktop (1440 px), tablet (768 px), and mobile (390 px), especially Home portrait crop, Work preview crop, certificate archive, and Contact contrast.
- [ ] Keyboard-test skip link, navigation links, mobile menu activation, project actions, certificate verification links, and visible focus indicators.
- [ ] Confirm active navigation markers and menu close behavior on every route, including browser back/forward navigation.
- [ ] Open both case studies and an invalid `/work/:slug`; confirm case-study navigation and the not-found recovery links.
- [ ] Open every live deployment and the three source repositories. SkillCert's supplied URL could not be conclusively checked by the automated HTTP client and needs direct browser verification.
- [ ] Open all six SoloLearn credential links and both current-learning links; verify each destination is the intended resource.
- [ ] Confirm About and Contact content, `mailto:` behavior, GitHub/LinkedIn destinations, and external links in header/footer/intro.
- [ ] Re-check browser console and Network panel on a fresh production preview; ensure fonts and images are served locally and no request fails.
- [ ] Before deployment, set `origin` in `src/data/siteMetadata.js` to the actual HTTPS production origin; then verify canonical, Open Graph, and Twitter URLs on the deployed domain.
- [ ] Confirm the chosen static host rewrites unknown paths to `index.html` so Vue Router routes and refreshes work. No host-specific rewrite/deployment was made in Phase 9.
- [ ] Confirm `public/resume.pdf` remains absent until the final approved resume is supplied.

## Release boundaries

- [ ] Do not deploy until the manual checks above are complete and the production origin/host behavior are known.
- [ ] No sitemap is included yet; add one only after the production domain is fixed.
