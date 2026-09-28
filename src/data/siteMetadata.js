import { profile } from './profile.js'

/**
 * Set `origin` to the final HTTPS production origin during Phase 10.
 * Leave empty until the host and domain are chosen; canonical links are then
 * emitted without ever using localhost or an invented production domain.
 */
export const siteMetadata = {
  origin: '',
  description:
    'Portfolio of Fj Adriano, an Information Technology student building software projects while exploring cloud engineering, DevOps, and software systems.',
  image: '/profile/fj-adriano.webp',
  siteName: `${profile.name} Portfolio`,
}
