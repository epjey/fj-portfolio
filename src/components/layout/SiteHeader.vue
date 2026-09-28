<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import PageContainer from './PageContainer.vue'
import { profile } from '../../data/profile.js'

defineProps({
  theme: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value),
  },
})

const route = useRoute()
const isMenuOpen = ref(false)
const menuToggle = ref(null)

const navigation = [
  { index: '01', label: 'Work', to: '/work' },
  { index: '02', label: 'Certs', to: '/certificates' },
  { index: '03', label: 'About', to: '/about' },
  { index: '04', label: 'Contact', to: '/contact' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
    menuToggle.value?.focus()
  }
}

watch(() => route.fullPath, closeMenu)

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <header :class="['site-header', `site-header--${theme}`]">
    <PageContainer wide>
      <nav class="site-nav" aria-label="Primary navigation">
        <RouterLink class="brand-lockup" to="/" :aria-label="`${profile.name} portfolio home`">
          <span class="wordmark">{{ profile.name }}</span>
          <span class="brand-subtitle">Cloud / Software · Portfolio 2026</span>
        </RouterLink>

        <div class="desktop-navigation">
          <RouterLink
            v-for="item in navigation"
            :key="item.to"
            class="nav-link"
            :to="item.to"
          >
            <span class="nav-index">{{ item.index }}</span>
            <span>{{ item.label }}</span>
          </RouterLink>
        </div>

        <button
          ref="menuToggle"
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMenu"
        >
          <span aria-hidden="true">{{ isMenuOpen ? 'Close' : 'Menu' }}</span>
        </button>
      </nav>

      <div v-show="isMenuOpen" id="mobile-navigation" class="mobile-navigation">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          class="mobile-nav-link"
          :to="item.to"
        >
          <span class="nav-index">{{ item.index }}</span>
          <span>{{ item.label }}</span>
          <span class="mobile-nav-arrow" aria-hidden="true">↗</span>
        </RouterLink>
      </div>
    </PageContainer>
  </header>
</template>
