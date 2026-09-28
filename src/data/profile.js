/**
 * Shared portfolio identity and public contact destinations.
 * Public identity, contact routes, and optional local media destinations.
 */
export const profile = {
  name: 'Fj Adriano',
  email: 'adrianofj61@gmail.com',
  github: 'https://github.com/epjey',
  linkedin: 'https://www.linkedin.com/in/fj-adriano-802250296',
  photo: '/profile/fj-adriano.webp',
  resume: null,
  location: 'Philippines',
  field: 'Information Technology',
  currentStatus: 'IT student',
  focus: ['Cloud Engineering', 'DevOps', 'Software Development'],
}

export const profileLinks = [
  {
    label: 'GitHub',
    value: profile.github,
    href: profile.github,
    placeholder: 'Profile link to be added',
    action: 'View profile',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedin,
    href: profile.linkedin,
    placeholder: 'Profile link to be added',
    action: 'View profile',
    external: true,
  },
  {
    label: 'Email',
    value: profile.email,
    href: profile.email ? `mailto:${profile.email}` : null,
    placeholder: 'Email address to be added',
    action: 'Write message',
    external: false,
  },
]
