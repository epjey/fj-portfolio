import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import CertificatesView from '../views/CertificatesView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import WorkView from '../views/WorkView.vue'
import { projects } from '../data/projects.js'
import { profile } from '../data/profile.js'
import { siteMetadata } from '../data/siteMetadata.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home', surface: 'surface-paper', headerTheme: 'light', sectionIndex: '01' },
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView,
    meta: { title: 'Work', surface: 'surface-paper', headerTheme: 'light', sectionIndex: '02' },
  },
  {
    path: '/work/:slug',
    name: 'project-detail',
    component: ProjectDetailView,
    meta: { title: 'Project', surface: 'surface-paper', headerTheme: 'light', sectionIndex: '02' },
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: CertificatesView,
    meta: { title: 'Courses & Credentials', surface: 'surface-mist', headerTheme: 'light', sectionIndex: '03' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About', surface: 'surface-paper', headerTheme: 'light', sectionIndex: '04' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact', surface: 'surface-contact', headerTheme: 'dark', sectionIndex: '05' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: { title: 'Page Not Found', surface: 'surface-paper', headerTheme: 'light' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const project = to.name === 'project-detail'
    ? projects.find((item) => item.slug === to.params.slug)
    : null
  const title = project
    ? `${project.title} — ${profile.name}`
    : to.name === 'project-detail'
      ? `Project Not Found — ${profile.name}`
      : to.name === 'home'
        ? `${profile.name} — Portfolio`
        : `${to.meta.title} — ${profile.name}`

  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', siteMetadata.description)

  const imageUrl = siteMetadata.origin
    ? new URL(siteMetadata.image, siteMetadata.origin).href
    : siteMetadata.image
  const metadata = [
    ['property', 'og:title', title],
    ['property', 'og:description', siteMetadata.description],
    ['property', 'og:type', 'website'],
    ['property', 'og:image', imageUrl],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', siteMetadata.description],
    ['name', 'twitter:image', imageUrl],
  ]

  for (const [attribute, key, value] of metadata) {
    document.head.querySelector(`meta[${attribute}="${key}"]`)?.setAttribute('content', value)
  }

  const canonical = document.head.querySelector('link[rel="canonical"]')
  if (canonical && siteMetadata.origin) {
    canonical.setAttribute('href', new URL(to.path, siteMetadata.origin).href)
  } else {
    canonical?.removeAttribute('href')
  }
})

export default router
