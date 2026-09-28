<script setup>
defineProps({
  media: {
    type: Array,
    default: () => [],
  },
  projectTitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="project-media">
    <figure v-for="item in media" :key="item.id || item.label" class="project-media__item">
      <img
        v-if="item.src"
        class="project-media__image"
        :src="item.src"
        :alt="item.alt || `${projectTitle} project image`"
      />
      <div
        v-else
        class="project-media__placeholder"
        role="img"
        :aria-label="item.alt || `${projectTitle} screenshot placeholder`"
      >
        <span class="project-media__placeholder-index mono-meta">{{ item.label }}</span>
        <span class="project-media__placeholder-mark" aria-hidden="true">{{ projectTitle }}</span>
        <span class="project-media__placeholder-note mono-meta" aria-hidden="true">
          Real screenshot to be added
        </span>
      </div>
      <figcaption v-if="item.caption" class="project-media__caption mono-meta">
        {{ item.caption }}
      </figcaption>
    </figure>
  </div>
</template>
