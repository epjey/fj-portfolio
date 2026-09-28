<script setup>
defineProps({
  as: {
    type: String,
    default: 'div',
  },
  wide: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <component :is="as" :class="['page-container', { 'page-container--wide': wide }]">
    <slot />
  </component>
</template>
