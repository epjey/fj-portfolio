<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="project-preview-item">
    <RouterLink
      class="project-row"
      :to="{ name: 'project-detail', params: { slug: project.slug } }"
      :aria-label="`View case study for ${project.title}`"
    >
      <span class="project-row__number mono-meta">[{{ project.number }}]</span>

      <div class="project-row__information">
        <h3 class="project-row__title">{{ project.shortTitle || project.title }}</h3>
        <p class="project-row__description">
          {{ project.category }}
          <span v-if="project.liveUrl" class="project-row__live mono-meta">Live system</span>
        </p>
        <ul class="project-row__stack" :aria-label="`${project.title} technology stack`">
          <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
        </ul>
        <span class="project-row__link">
          View case study <span aria-hidden="true">&#8599;</span>
        </span>
      </div>

      <div
        :class="['project-visual', `project-visual--${project.preview.variant}`]"
        aria-hidden="true"
      >
        <img
          v-if="project.preview?.image"
          class="project-visual__image"
          :src="project.preview.image"
          alt=""
          :width="project.preview.width || 1440"
          :height="project.preview.height || 810"
          loading="lazy"
          decoding="async"
        />
      </div>
    </RouterLink>
  </article>
</template>
