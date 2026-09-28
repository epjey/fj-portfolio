<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  previousProject: {
    type: Object,
    default: null,
  },
  nextProject: {
    type: Object,
    default: null,
  },
})
</script>

<template>
  <nav class="project-navigation" aria-label="Project navigation">
    <RouterLink class="project-navigation__back text-link" to="/work">
      <span aria-hidden="true">&#8592;</span> Back to Work
    </RouterLink>

    <div class="project-navigation__adjacent">
      <RouterLink
        v-if="previousProject"
        class="project-navigation__link project-navigation__link--previous"
        :to="{ name: 'project-detail', params: { slug: previousProject.slug } }"
        :aria-label="`Previous project: ${previousProject.title}`"
      >
        <span class="mono-meta">Previous project</span>
        <span>{{ previousProject.title }} <span aria-hidden="true">&#8592;</span></span>
      </RouterLink>

      <RouterLink
        v-if="nextProject"
        class="project-navigation__link project-navigation__link--next"
        :to="{ name: 'project-detail', params: { slug: nextProject.slug } }"
        :aria-label="`Next project: ${nextProject.title}`"
      >
        <span class="mono-meta">Next project</span>
        <span><span aria-hidden="true">&#8594;</span> {{ nextProject.title }}</span>
      </RouterLink>
    </div>
  </nav>
</template>
