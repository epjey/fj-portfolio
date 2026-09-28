<script setup>
import { RouterLink } from 'vue-router'

import PageContainer from '../components/layout/PageContainer.vue'
import CertificateArchiveItem from '../components/certificates/CertificateArchiveItem.vue'
import SectionLabel from '../components/ui/SectionLabel.vue'
import { certificates } from '../data/certificates.js'
import { learning } from '../data/learning.js'
</script>

<template>
  <div class="credentials-page">
    <section class="credentials-intro" aria-labelledby="credentials-title">
      <PageContainer wide>
        <div class="editorial-grid credentials-intro__grid">
          <SectionLabel class="credentials-intro__index" index="03" detail="Credentials">
            Learning archive
          </SectionLabel>

          <p class="credentials-intro__archive mono-meta">Archive / Credentials</p>

          <h1 id="credentials-title" class="credentials-intro__title">
            Courses &amp;<br /> credentials
          </h1>

          <p class="credentials-intro__copy">
            Verified course completions and current learning across software, cloud, and systems.
          </p>

          <dl class="credentials-intro__metadata mono-meta" aria-label="Credential archive information">
            <div>
              <dt>Focus /</dt>
              <dd>Software · Cloud · Systems</dd>
            </div>
            <div>
              <dt>Record /</dt>
              <dd>2026 →</dd>
            </div>
          </dl>
        </div>
      </PageContainer>
    </section>

    <section class="credentials-archive" aria-labelledby="credentials-archive-title">
      <PageContainer wide>
        <div class="credentials-archive__heading">
          <SectionLabel index="01" detail="Register">Archive</SectionLabel>
          <h2 id="credentials-archive-title" class="credentials-archive__title">
            Course certificates
          </h2>
          <span v-if="certificates.length" class="credentials-archive__count mono-meta">
            {{ String(certificates.length).padStart(2, '0') }} records
          </span>
        </div>

        <ol v-if="certificates.length" class="credentials-archive__list">
          <li v-for="(credential, index) in certificates" :key="credential.id">
            <CertificateArchiveItem :credential="credential" :index="index" />
          </li>
        </ol>

        <section v-else class="credentials-empty" aria-labelledby="credentials-archive-title">
          <p class="credentials-empty__index mono-meta">Archive / Open</p>
          <p class="credentials-empty__message">Course certificate records will appear here once added.</p>
          <p class="credentials-empty__status mono-meta">Records / To be added</p>
        </section>
      </PageContainer>
    </section>

    <section class="current-learning" aria-labelledby="current-learning-title">
      <PageContainer wide>
        <div class="editorial-grid current-learning__heading">
          <SectionLabel index="02" detail="In progress">Current learning</SectionLabel>
          <h2 id="current-learning-title" class="current-learning__title">
            Learning / In progress
          </h2>
        </div>

        <ol class="current-learning__list">
          <li v-for="(item, index) in learning" :key="item.id" class="current-learning__item">
            <span class="current-learning__number mono-meta">
              {{ String(index + 1).padStart(2, '0') }} /
            </span>
            <div class="current-learning__identity">
              <h3>{{ item.title }}</h3>
              <p v-if="item.context">{{ item.context }} · {{ item.platform }}</p>
              <p v-else>{{ item.platform }}</p>
            </div>
            <span class="current-learning__status mono-meta">{{ item.status }}</span>
            <a
              class="current-learning__link text-link"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${item.title} on ${item.platform} (opens in a new tab)`"
            >
              Open resource <span aria-hidden="true">&#8599;</span>
            </a>
          </li>
        </ol>
      </PageContainer>
    </section>

    <section class="credentials-next" aria-labelledby="credentials-next-title">
      <PageContainer wide>
        <div class="editorial-grid credentials-next__grid">
          <p class="credentials-next__label mono-meta">Next / 04</p>
          <h2 id="credentials-next-title" class="credentials-next__title">About / Focus</h2>
          <RouterLink class="text-link credentials-next__link" to="/about">
            Learn more about my focus <span aria-hidden="true">&#8594;</span>
          </RouterLink>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
