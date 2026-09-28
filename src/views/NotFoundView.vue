<script setup>
import { RouterLink } from 'vue-router'

import PageContainer from '../components/layout/PageContainer.vue'
</script>

<template>
  <section class="site-not-found" aria-labelledby="not-found-title">
    <PageContainer wide>
      <div class="editorial-grid site-not-found__grid">
        <p class="site-not-found__index mono-meta">404 / ROUTE NOT FOUND</p>
        <h1 id="not-found-title" class="site-not-found__title">Page not found</h1>
        <p class="site-not-found__message">This route doesn’t exist.</p>
        <nav class="site-not-found__actions" aria-label="Not found page actions">
          <RouterLink class="text-link" to="/">
            Back home <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink class="text-link" to="/work">
            View work <span aria-hidden="true">→</span>
          </RouterLink>
        </nav>
      </div>
    </PageContainer>
  </section>
</template>
