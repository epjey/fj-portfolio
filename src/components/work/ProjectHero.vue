<script setup>
import PageContainer from '../layout/PageContainer.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="project-hero" :aria-labelledby="`project-title-${project.id}`">
    <PageContainer wide>
      <div class="editorial-grid project-hero__grid">
        <p class="project-hero__number mono-meta">PRJ—{{ project.number }}</p>
        <p class="project-hero__category mono-meta">{{ project.category }}</p>

        <h1 :id="`project-title-${project.id}`" class="project-hero__title">
          {{ project.title }}
        </h1>

        <p class="project-hero__year mono-meta">{{ project.year }}</p>

        <ul class="project-hero__stack mono-meta" :aria-label="`${project.title} technology stack`">
          <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
        </ul>
      </div>
    </PageContainer>
  </section>
</template>
