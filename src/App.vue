<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'

const route = useRoute()

const surfaceClass = computed(() => route.meta.surface ?? 'surface-paper')
const headerTheme = computed(() => route.meta.headerTheme ?? 'light')
</script>

<template>
  <div :class="['site-shell', surfaceClass]">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader :theme="headerTheme" />

    <main id="main-content" tabindex="-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <SiteFooter />
  </div>
</template>
