<script setup>
import { RouterLink } from 'vue-router'

import PageContainer from '../components/layout/PageContainer.vue'
import ProjectArchiveItem from '../components/work/ProjectArchiveItem.vue'
import SectionLabel from '../components/ui/SectionLabel.vue'
import { deployments } from '../data/deployments.js'
import { projects } from '../data/projects.js'
</script>

<template>
  <div class="work-page">
    <section class="work-archive-intro" aria-labelledby="work-title">
      <PageContainer wide>
        <div class="editorial-grid work-archive-intro__grid">
          <SectionLabel class="work-archive-intro__index" index="02" detail="Selected work">
            Project archive
          </SectionLabel>

          <p class="work-archive-intro__range mono-meta">Archive / 2024—2026</p>

          <h1 id="work-title" class="work-archive-intro__title">
            Systems, applications,<br />and experiments I've built.
          </h1>

          <dl class="work-archive-intro__metadata mono-meta" aria-label="Project archive summary">
            <div>
              <dt>Projects /</dt>
              <dd>{{ (projects.length + deployments.length).toString().padStart(2, '0') }}</dd>
            </div>
            <div>
              <dt>Focus /</dt>
              <dd>Software · Systems · Cloud</dd>
            </div>
            <div>
              <dt>Archive /</dt>
              <dd>2024—2026</dd>
            </div>
          </dl>
        </div>
      </PageContainer>
    </section>

    <section class="work-archive-list" aria-labelledby="work-cases-title">
      <PageContainer wide>
        <div class="work-archive-list__section-heading editorial-grid">
          <SectionLabel index="01" detail="Selected work">Case studies</SectionLabel>
          <h2 id="work-cases-title">Selected case studies</h2>
        </div>

        <ProjectArchiveItem v-for="project in projects" :key="project.id" :project="project" />
      </PageContainer>
    </section>

    <section class="work-deployments" aria-labelledby="work-deployments-title">
      <PageContainer wide>
        <div class="editorial-grid work-deployments__heading">
          <SectionLabel index="02" detail="Live destinations">Deployed web projects</SectionLabel>
          <h2 id="work-deployments-title" class="work-deployments__title">
            Live on the web.
          </h2>
          <p class="work-deployments__note mono-meta">Four projects / Live + source where available</p>
        </div>

        <div class="deployment-archive-list">
          <ProjectArchiveItem
            v-for="deployment in deployments"
            :key="deployment.id"
            :project="deployment"
          />
        </div>
      </PageContainer>
    </section>

    <section class="work-archive-next" aria-labelledby="work-next-title">
      <PageContainer wide>
        <div class="editorial-grid work-archive-next__grid">
          <p class="work-archive-next__label mono-meta">Next / 03</p>
          <h2 id="work-next-title" class="work-archive-next__title">More work as I build.</h2>
          <RouterLink class="text-link work-archive-next__link" to="/certificates">
            View credentials <span aria-hidden="true">&#8594;</span>
          </RouterLink>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
