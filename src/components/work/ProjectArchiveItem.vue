<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const category = computed(() => props.project.category || props.project.type)
const stack = computed(() => props.project.stack || props.project.technologies || [])
const preview = computed(() => props.project.preview || {})
</script>

<template>
  <article class="project-archive-item" :aria-labelledby="`archive-project-${project.id}`">
    <div class="project-archive-item__grid editorial-grid">
      <div class="project-archive-item__identity mono-meta">
        <span class="project-archive-item__number">[{{ project.number }}]</span>
        <span>{{ category }}</span>
      </div>

      <div class="project-archive-item__details">
        <h3 :id="`archive-project-${project.id}`" class="project-archive-item__title">
          <RouterLink
            v-if="project.slug"
            class="project-archive-item__title-link"
            :to="{ name: 'project-detail', params: { slug: project.slug } }"
          >
            {{ project.shortTitle || project.title }}
          </RouterLink>
          <span v-else>{{ project.shortTitle || project.title }}</span>
        </h3>
        <p
          v-if="project.shortTitle && project.shortTitle !== project.title"
          class="project-archive-item__full-title"
        >
          {{ project.title }}
        </p>
        <p class="project-archive-item__description">{{ project.description }}</p>
      </div>

      <div v-if="stack.length" class="project-archive-item__stack">
        <p class="project-archive-item__stack-label mono-meta">Stack /</p>
        <ul class="mono-meta">
          <li v-for="technology in stack" :key="technology">{{ technology }}</li>
        </ul>
      </div>
      <div v-else class="project-archive-item__stack project-archive-item__stack--unlisted">
        <p class="project-archive-item__stack-label mono-meta">Stack /</p>
        <p class="project-archive-item__stack-note mono-meta">Not listed</p>
      </div>

      <div
        :class="[
          'project-archive-item__preview',
          `project-archive-item__preview--${preview.variant || project.id}`,
        ]"
      >
        <img
          v-if="preview.image"
          class="project-archive-item__preview-image"
          :src="preview.image"
          :alt="preview.alt || `${project.title} website preview`"
          :width="preview.width || 1440"
          :height="preview.height || 810"
          loading="lazy"
          decoding="async"
        />
        <div
          v-else
          class="project-archive-item__preview-placeholder"
          role="img"
          :aria-label="preview.label || `Website preview unavailable for ${project.title}`"
        >
          <span class="project-archive-item__preview-index mono-meta">{{ project.number }} / {{ category }}</span>
          <span class="project-archive-item__preview-title" aria-hidden="true">{{ project.shortTitle || project.title }}</span>
          <span class="project-archive-item__preview-prompt mono-meta">
            Website preview /<br />Preview unavailable
          </span>
        </div>
      </div>

      <nav class="project-archive-item__actions" :aria-label="`${project.title} links`">
        <RouterLink
          v-if="project.slug"
          class="project-archive-item__action mono-meta"
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          :aria-label="`Read the ${project.title} case study`"
        >
          View case study <span aria-hidden="true">&#8599;</span>
        </RouterLink>
        <a
          v-if="project.liveUrl"
          class="project-archive-item__action project-archive-item__action--live mono-meta"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${project.slug ? 'Open' : 'Visit'} ${project.title} ${project.slug ? 'live system' : 'live site'} (opens in a new tab)`"
        >
          {{ project.slug ? 'Open live system' : 'Live site' }}
          <span aria-hidden="true">&#8599;</span>
        </a>
        <a
          v-if="project.sourceUrl"
          class="project-archive-item__action mono-meta"
          :href="project.sourceUrl"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`View ${project.title} source repository (opens in a new tab)`"
        >
          Source <span aria-hidden="true">&#8599;</span>
        </a>
      </nav>
    </div>
  </article>
</template>
