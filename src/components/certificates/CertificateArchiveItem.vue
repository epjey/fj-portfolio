<script setup>
import { computed } from 'vue'

const props = defineProps({
  credential: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const dateLabel = computed(() => {
  const value = props.credential.issueDate || props.credential.year
  if (!value) return null

  const match = String(value).match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/)
  if (!match) return String(value)

  const month = Number(match[2])
  if (month < 1 || month > 12) return match[1]

  const day = match[3] ? `${Number(match[3])} ` : ''
  return `${day}${months[month - 1]} ${match[1]}`
})

const typeLabel = computed(() => {
  if (props.credential.type === 'course') return 'Course completion'
  return props.credential.type || null
})

const imageSource = computed(() => {
  const image = props.credential.image
  return typeof image === 'string' && image.startsWith('/certificates/') ? image : null
})

const credentialHref = computed(() => {
  const url = props.credential.credentialUrl
  return typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null
})
</script>

<template>
  <article class="certificate-archive-item" :aria-labelledby="`certificate-${credential.id}`">
    <div class="certificate-archive-item__grid editorial-grid">
      <p class="certificate-archive-item__number mono-meta">
        CERT—{{ String(index + 1).padStart(3, '0') }}
      </p>

      <div class="certificate-archive-item__identity">
        <p
          v-if="typeLabel"
          :class="[
            'certificate-archive-item__type',
            'mono-meta',
            { 'certificate-archive-item__type--course': credential.type === 'course' },
          ]"
        >
          {{ typeLabel }}
        </p>
        <h2 :id="`certificate-${credential.id}`" class="certificate-archive-item__title">
          {{ credential.title }}
        </h2>
        <p v-if="credential.issuer" class="certificate-archive-item__issuer">
          {{ credential.issuer }}
        </p>
      </div>

      <dl class="certificate-archive-item__metadata mono-meta">
        <div v-if="dateLabel">
          <dt>Issued /</dt>
          <dd>{{ dateLabel }}</dd>
        </div>
        <div v-if="credential.category">
          <dt>Category /</dt>
          <dd>{{ credential.category }}</dd>
        </div>
        <div v-if="credential.credentialId">
          <dt>Credential ID /</dt>
          <dd>{{ credential.credentialId }}</dd>
        </div>
      </dl>

      <figure class="certificate-archive-item__document">
        <img
          v-if="imageSource"
          class="certificate-archive-item__image"
          :src="imageSource"
          :alt="credential.imageAlt || `Certificate document for ${credential.title}`"
          loading="lazy"
          decoding="async"
        />
        <div
          v-else
          class="certificate-archive-item__placeholder"
          role="img"
          :aria-label="`Certificate image unavailable for ${credential.title}`"
        >
          <span class="mono-meta">Certificate document</span>
          <span class="certificate-archive-item__placeholder-note mono-meta">
            Certificate image unavailable
          </span>
        </div>
        <figcaption v-if="credential.imageCaption" class="certificate-archive-item__caption mono-meta">
          {{ credential.imageCaption }}
        </figcaption>
      </figure>

      <a
        v-if="credentialHref"
        class="certificate-archive-item__action text-link"
        :href="credentialHref"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Verify ${credential.title} credential (opens in a new tab)`"
      >
        Verify credential <span aria-hidden="true">&#8599;</span>
      </a>
    </div>
  </article>
</template>
