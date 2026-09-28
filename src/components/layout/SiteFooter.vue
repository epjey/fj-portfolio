<script setup>
import PageContainer from './PageContainer.vue'
import { profile, profileLinks } from '../../data/profile.js'
</script>

<template>
  <footer class="site-footer">
    <PageContainer wide>
      <div class="footer-grid">
        <div class="footer-identity">
          <p class="footer-mark">{{ profile.name }}</p>
          <p class="footer-meta">Portfolio / 2026</p>
        </div>

        <nav class="footer-links" aria-label="Profile and contact links">
          <template v-for="link in profileLinks" :key="link.label">
            <a
              v-if="link.href"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="footer-link"
              :aria-label="link.external ? `${link.label} profile (opens in a new tab)` : `Email ${link.value}`"
            >
              {{ link.label }}
            </a>
            <span
              v-else
              class="footer-link footer-link--placeholder"
              :aria-label="`${link.label}: ${link.placeholder}`"
            >
              {{ link.label }} <span class="footer-link__status">/ {{ link.placeholder }}</span>
            </span>
          </template>
        </nav>

        <p class="footer-status">Index / 01—05</p>
        <p class="footer-copyright">© 2026 {{ profile.name }}</p>
      </div>
    </PageContainer>
  </footer>
</template>
