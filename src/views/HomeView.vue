<script setup>
import { RouterLink } from 'vue-router'

import PageContainer from '../components/layout/PageContainer.vue'
import ProjectPreview from '../components/home/ProjectPreview.vue'
import SectionLabel from '../components/ui/SectionLabel.vue'
import { featuredProjects } from '../data/projects.js'
import { profile, profileLinks } from '../data/profile.js'

const nameParts = profile.name.trim().split(/\s+/)
const firstName = nameParts[0] || ''
const remainingName = nameParts.slice(1).join(' ')
</script>

<template>
  <div class="home-page">
    <section id="intro" class="home-hero" aria-labelledby="home-title">
      <PageContainer wide>
        <div class="editorial-grid home-hero__grid">
          <div class="home-hero__portrait-column">
            <SectionLabel class="home-hero__index" index="01" detail="Personal portfolio">
              Intro
            </SectionLabel>

            <figure class="home-hero__portrait">
              <div :class="['home-hero__portrait-frame', { 'home-hero__portrait-frame--has-photo': profile.photo }]">
                <img
                  v-if="profile.photo"
                  class="home-hero__portrait-image"
                  :src="profile.photo"
                  :alt="`Portrait of ${profile.name}`"
                  width="1145"
                  height="1374"
                  fetchpriority="high"
                  decoding="async"
                />
                <div
                  v-else
                  class="home-hero__portrait-empty"
                  role="img"
                  :aria-label="`Portrait of ${profile.name} not yet added`"
                >
                  <span class="home-hero__portrait-index mono-meta" aria-hidden="true">
                    Profile / Photo to be added
                  </span>
                </div>
              </div>
              <figcaption class="home-hero__portrait-caption mono-meta">Profile / 2026</figcaption>
            </figure>
          </div>

          <div class="home-hero__content">
            <h1 id="home-title" class="home-hero__title">
              <span>{{ firstName }}</span>
              <span class="home-hero__title-accent">{{ remainingName }}</span>
            </h1>

            <p class="home-hero__role mono-meta">IT student / aspiring cloud engineer</p>

            <div class="home-hero__introduction">
              <p>
                I build software projects while exploring cloud engineering, DevOps, and system
                design.
              </p>
              <p>
                My focus is understanding how applications move from code to infrastructure—and
                how the pieces work together.
              </p>
            </div>

            <nav class="home-hero__social" aria-label="Profile and contact links">
              <template v-for="link in profileLinks" :key="link.label">
                <a
                  v-if="link.href"
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
                  :aria-label="link.external ? `${link.label} profile (opens in a new tab)` : `Email ${link.value}`"
                >
                  {{ link.label }} <span aria-hidden="true">&#8599;</span>
                </a>
                <span
                  v-else
                  class="home-hero__social-placeholder"
                  :aria-label="`${link.label}: ${link.placeholder}`"
                >
                  {{ link.label }} <small>{{ link.placeholder }}</small>
                </span>
              </template>
            </nav>

            <p class="home-hero__resume-placeholder mono-meta">
              Resume / PDF to be added
            </p>
          </div>

          <dl class="home-hero__facts" aria-label="About me at a glance">
            <div>
              <dt>Projects /</dt>
              <dd>02 selected</dd>
            </div>
            <div>
              <dt>Current /</dt>
              <dd>IT student</dd>
            </div>
            <div>
              <dt>Focus /</dt>
              <dd>Cloud + DevOps</dd>
            </div>
            <div>
              <dt>Learning /</dt>
              <dd>AWS + Systems</dd>
            </div>
          </dl>
        </div>
      </PageContainer>

      <a class="home-hero__scroll mono-meta" href="#positioning">
        <span>Continue</span>
        <span class="home-hero__scroll-arrow" aria-hidden="true">&#8595;</span>
      </a>
    </section>

    <section id="positioning" class="home-positioning" aria-labelledby="positioning-title">
      <PageContainer wide>
        <div class="editorial-grid home-positioning__grid">
          <p class="home-section-index mono-meta">ABOUT / SHORT</p>
          <h2 id="positioning-title" class="home-positioning__title">
            I'm interested in the point where software meets infrastructure.
          </h2>
          <p class="home-positioning__copy">
            I build software projects while developing my skills in cloud engineering, DevOps,
            backend systems, and deployment.
          </p>
        </div>
      </PageContainer>
    </section>

    <section id="selected-work" class="home-work" aria-labelledby="home-work-title">
      <PageContainer wide>
        <div class="home-section-heading editorial-grid">
          <SectionLabel class="home-section-heading__label" index="02" detail="Selected work">
            Project index
          </SectionLabel>
          <h2 id="home-work-title" class="home-section-heading__title">Selected work</h2>
          <p class="home-section-heading__note mono-meta">Software / Systems / 001—002</p>
        </div>

        <div class="home-work__list">
          <ProjectPreview
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <RouterLink class="text-link home-work__all" to="/work">
          View all work <span aria-hidden="true">&#8594;</span>
        </RouterLink>
      </PageContainer>
    </section>

    <section id="credentials" class="home-credentials" aria-labelledby="credentials-title">
      <PageContainer wide>
        <div class="editorial-grid home-credentials__grid">
          <SectionLabel class="home-credentials__index" index="03" detail="Learning record">
            Credentials
          </SectionLabel>
          <h2 id="credentials-title" class="home-credentials__title">
            Courses &amp;<br /> continuous learning
          </h2>
          <p class="home-credentials__copy">
            A record of completed courses and current technical learning.
          </p>
          <RouterLink class="text-link home-credentials__link" to="/certificates">
            View credentials <span aria-hidden="true">&#8594;</span>
          </RouterLink>
        </div>
      </PageContainer>
    </section>

    <section class="home-next" aria-labelledby="home-next-title">
      <PageContainer wide>
        <div class="home-next__panel editorial-grid">
          <p class="home-section-index mono-meta">NEXT / WORK</p>
          <h2 id="home-next-title" class="home-next__title">See what I've built.</h2>
          <RouterLink class="home-next__link" to="/work">
            Explore the work <span aria-hidden="true">&#8599;</span>
          </RouterLink>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
