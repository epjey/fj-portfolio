<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  inverse: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
})

const componentType = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="componentType"
    :to="to || undefined"
    :href="href || undefined"
    :type="!to && !href ? 'button' : undefined"
    :class="[
      'outline-button',
      { 'outline-button--inverse': inverse, 'outline-button--compact': compact },
    ]"
  >
    <slot />
    <span class="outline-button__mark" aria-hidden="true">↗</span>
  </component>
</template>
