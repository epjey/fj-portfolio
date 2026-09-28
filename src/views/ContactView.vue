<script setup>
import PageContainer from '../components/layout/PageContainer.vue'
import SectionLabel from '../components/ui/SectionLabel.vue'
import { profile, profileLinks } from '../data/profile.js'

function lastPathSegment(url) {
  return url.replace(/\/$/, '').split('/').at(-1)
}

const emailLink = profileLinks.find((link) => link.label === 'Email')
const githubLink = profileLinks.find((link) => link.label === 'GitHub')
const linkedinLink = profileLinks.find((link) => link.label === 'LinkedIn')

const contactMethods = [
  {
    number: '01',
    label: 'Email',
    value: profile.email || 'Email address to be added',
    href: emailLink?.href || null,
    action: emailLink?.href ? 'Write message' : 'Awaiting details',
    external: false,
  },
  {
    number: '02',
    label: 'GitHub',
    value: profile.github ? `@${lastPathSegment(profile.github)}` : 'Profile URL to be added',
    href: githubLink?.href || null,
    action: githubLink?.href ? 'View profile' : 'Awaiting URL',
    external: true,
  },
  {
    number: '03',
    label: 'LinkedIn',
    value: profile.linkedin ? `${profile.name} profile` : 'Profile URL to be added',
    href: linkedinLink?.href || null,
    action: linkedinLink?.href ? 'View profile' : 'Awaiting URL',
    external: true,
  },
  {
    number: '04',
    label: 'Resume',
    value: profile.resume ? 'Resume PDF' : 'PDF to be added',
    href: profile.resume,
    action: profile.resume ? 'Open resume' : 'Not available yet',
    external: false,
    download: Boolean(profile.resume),
  },
]
</script>

<template>
  <div class="contact-page">
    <section class="contact-hero" aria-labelledby="contact-title">
      <PageContainer wide>
        <div class="editorial-grid contact-hero__grid">
          <SectionLabel class="contact-page__index" index="05" detail="Contact">
            Open channel
          </SectionLabel>
          <p class="contact-hero__coordinate mono-meta">DIRECT / CONTACT</p>
          <h1 id="contact-title" class="contact-hero__title">
            Let’s<br /><span>connect.</span>
          </h1>
          <p class="contact-hero__copy body-lg">
            If you’d like to talk about software, cloud, DevOps, projects, or learning, feel free
            to reach out.
          </p>
        </div>
      </PageContainer>
    </section>

    <section class="contact-methods" aria-labelledby="contact-methods-title">
      <PageContainer wide>
        <div class="editorial-grid contact-methods__heading">
          <p class="contact-methods__label mono-meta">01—04 / DESTINATIONS</p>
          <h2 id="contact-methods-title" class="contact-methods__title">Contact methods</h2>
        </div>

        <ol class="contact-methods__list">
          <li v-for="method in contactMethods" :key="method.number" class="contact-method">
            <span class="contact-method__number mono-meta">{{ method.number }} /</span>
            <h3 class="contact-method__name">{{ method.label }}</h3>
            <p class="contact-method__value">{{ method.value }}</p>
            <a
              v-if="method.href"
              class="contact-method__action"
              :href="method.href"
              :target="method.external ? '_blank' : undefined"
              :rel="method.external ? 'noopener noreferrer' : undefined"
              :download="method.download || undefined"
              :aria-label="method.external ? `${method.action}: ${method.label} (opens in a new tab)` : `${method.action}: ${method.label}`"
            >
              {{ method.action }} <span aria-hidden="true">&#8599;</span>
            </a>
            <span v-else class="contact-method__status mono-meta">
              {{ method.action }}
            </span>
          </li>
        </ol>
      </PageContainer>
    </section>

    <section class="contact-context" aria-label="Current profile context">
      <PageContainer wide>
        <dl class="editorial-grid contact-context__grid mono-meta">
          <div>
            <dt>Current /</dt>
            <dd>{{ profile.currentStatus }}</dd>
          </div>
          <div>
            <dt>Focus /</dt>
            <dd>{{ profile.focus.join(' · ') }}</dd>
          </div>
          <div>
            <dt>Location /</dt>
            <dd>{{ profile.location }}</dd>
          </div>
        </dl>
      </PageContainer>
    </section>

    <section class="contact-closing" aria-label="Closing note">
      <PageContainer wide>
        <p class="contact-closing__note mono-meta">Thanks for visiting. / Portfolio 2026</p>
      </PageContainer>
    </section>
  </div>
</template>
