<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import PageContainer from '../components/layout/PageContainer.vue'
import ProjectHero from '../components/work/ProjectHero.vue'
import ProjectMedia from '../components/work/ProjectMedia.vue'
import ProjectNavigation from '../components/work/ProjectNavigation.vue'
import SectionLabel from '../components/ui/SectionLabel.vue'
import { projects } from '../data/projects.js'

const route = useRoute()

const project = computed(() => projects.find((item) => item.slug === route.params.slug) ?? null)
const projectIndex = computed(() => projects.findIndex((item) => item.slug === route.params.slug))
const previousProject = computed(() => (projectIndex.value > 0 ? projects[projectIndex.value - 1] : null))
const nextProject = computed(() => (
  projectIndex.value >= 0 && projectIndex.value < projects.length - 1
    ? projects[projectIndex.value + 1]
    : null
))
</script>

<template>
  <div v-if="project" class="project-detail-page">
    <ProjectHero :project="project" />

    <section class="project-detail-section project-overview" aria-labelledby="project-overview-title">
      <PageContainer wide>
        <div class="editorial-grid project-overview__grid">
          <SectionLabel class="project-detail-section__label" index="00" detail="Overview">
            Project brief
          </SectionLabel>
          <div class="project-overview__summary">
            <h2 id="project-overview-title" class="project-detail-section__heading">
              {{ project.description }}
            </h2>
          </div>
          <dl class="project-overview__metadata mono-meta">
            <div v-if="project.category">
              <dt>Type /</dt>
              <dd>{{ project.category }}</dd>
            </div>
            <div v-if="project.year">
              <dt>Year /</dt>
              <dd>{{ project.year }}</dd>
            </div>
            <div v-if="project.stack?.length">
              <dt>Stack /</dt>
              <dd>{{ project.stack.join(' · ') }}</dd>
            </div>
          </dl>
          <div v-if="project.liveUrl" class="project-overview__live">
            <span class="mono-meta">Deployment /</span>
            <a
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${project.title} live system (opens in a new tab)`"
            >
              Open live system <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </PageContainer>
    </section>

    <section
      v-if="project.caseStudy?.context"
      class="project-detail-section project-context"
      aria-labelledby="project-context-title"
    >
      <PageContainer wide>
        <div class="editorial-grid project-detail-section__grid">
          <SectionLabel class="project-detail-section__label" index="01" detail="Context">
            Problem / Context
          </SectionLabel>
          <h2 id="project-context-title" class="project-detail-section__heading">
            {{ project.caseStudy.context }}
          </h2>
        </div>
      </PageContainer>
    </section>

    <section
      v-if="project.caseStudy?.solution"
      class="project-detail-section project-solution"
      aria-labelledby="project-solution-title"
    >
      <PageContainer wide>
        <div class="editorial-grid project-detail-section__grid">
          <SectionLabel class="project-detail-section__label" index="02" detail="Approach">
            Solution
          </SectionLabel>
          <h2 id="project-solution-title" class="project-detail-section__heading">
            {{ project.caseStudy.solution }}
          </h2>
        </div>
      </PageContainer>
    </section>

    <section
      v-if="project.caseStudy?.features?.length"
      class="project-detail-section project-features"
      aria-labelledby="project-features-title"
    >
      <PageContainer wide>
        <div class="editorial-grid project-detail-section__grid">
          <SectionLabel class="project-detail-section__label" index="03" detail="Capabilities">
            Key features
          </SectionLabel>
          <h2 id="project-features-title" class="project-detail-section__section-title">
            Included workflows
          </h2>
          <ol class="project-feature-list">
            <li v-for="feature in project.caseStudy.features" :key="feature.number">
              <span class="project-feature-list__number mono-meta">{{ feature.number }}</span>
              <div>
                <h3>{{ feature.title }}</h3>
                <p v-if="feature.description">{{ feature.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </PageContainer>
    </section>

    <section
      v-if="project.caseStudy?.architecture"
      class="project-detail-section project-system"
      aria-labelledby="project-system-title"
    >
      <PageContainer wide>
        <div class="editorial-grid project-detail-section__grid">
          <SectionLabel class="project-detail-section__label" index="04" detail="Structure">
            Technical overview
          </SectionLabel>
          <div class="project-system__content">
            <h2 id="project-system-title" class="project-detail-section__section-title">
              System /
            </h2>
            <p class="project-system__summary">{{ project.caseStudy.architecture.summary }}</p>
            <dl class="project-system__groups">
              <div v-for="group in project.caseStudy.architecture.groups" :key="group.label">
                <dt class="mono-meta">{{ group.label }} /</dt>
                <dd>{{ group.items.join(' · ') }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </PageContainer>
    </section>

    <section
      v-if="project.media?.length"
      class="project-detail-section project-gallery"
      aria-labelledby="project-gallery-title"
    >
      <PageContainer wide>
        <div class="editorial-grid project-detail-section__grid">
          <SectionLabel class="project-detail-section__label" index="05" detail="Media">
            Project screens
          </SectionLabel>
          <h2 id="project-gallery-title" class="project-detail-section__section-title">
            Screens / Documentation
          </h2>
          <div class="project-gallery__content">
            <ProjectMedia :media="project.media" :project-title="project.title" />
          </div>
        </div>
      </PageContainer>
    </section>

    <section class="project-detail-section project-learnings" aria-labelledby="project-learnings-title">
      <PageContainer wide>
        <div class="editorial-grid project-detail-section__grid">
          <SectionLabel class="project-detail-section__label" index="06" detail="Reflection">
            Learnings
          </SectionLabel>
          <div class="project-learnings__content">
            <h2 id="project-learnings-title" class="project-detail-section__section-title">
              Learning notes /
            </h2>
            <ul v-if="project.caseStudy?.learnings?.length" class="project-learnings__list">
              <li v-for="(learning, index) in project.caseStudy.learnings" :key="index">
                {{ learning }}
              </li>
            </ul>
            <p v-else class="project-learnings__placeholder mono-meta">To be added</p>
          </div>
        </div>
      </PageContainer>
    </section>

    <PageContainer wide>
      <ProjectNavigation :previous-project="previousProject" :next-project="nextProject" />
    </PageContainer>
  </div>

  <section v-else class="project-not-found" aria-labelledby="project-not-found-title">
    <PageContainer wide>
      <div class="editorial-grid project-not-found__grid">
        <p class="project-not-found__index mono-meta">ARCHIVE / 404</p>
        <h1 id="project-not-found-title" class="project-not-found__title">Project not found</h1>
        <p class="project-not-found__message">This project doesn't exist in the archive.</p>
        <RouterLink class="text-link project-not-found__link" to="/work">
          Back to Work <span aria-hidden="true">&#8594;</span>
        </RouterLink>
      </div>
    </PageContainer>
  </section>
</template>
