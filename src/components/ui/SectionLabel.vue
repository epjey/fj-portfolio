<script setup>
defineProps({
  as: { type: String, default: 'p' },
  index: { type: String, default: '' },
  detail: { type: String, default: '' },
})
</script>

<template>
  <component :is="as" class="section-label">
    <span v-if="index" class="section-index">[{{ index }}]</span>
    <slot />
    <span v-if="detail" class="section-label__detail">{{ detail }}</span>
  </component>
</template>
