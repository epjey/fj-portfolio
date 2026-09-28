<script setup>
import { RouterLink } from 'vue-router'

import PageContainer from '../components/layout/PageContainer.vue'
import SectionLabel from '../components/ui/SectionLabel.vue'

const focusAreas = [
  {
    number: '01',
    title: 'Cloud engineering',
    description:
      'Exploring infrastructure, deployment, and cloud services—and how applications operate beyond a local environment.',
  },
  {
    number: '02',
    title: 'DevOps',
    description:
      'Learning the workflows behind version control, automation, CI/CD, infrastructure, and software delivery.',
  },
  {
    number: '03',
    title: 'Software development',
    description:
      'Building practical systems with clear structure, reusable components, and maintainable application logic.',
  },
  {
    number: '04',
    title: 'Web development',
    description:
      'Developing browser-based applications and understanding how their interfaces connect to application logic.',
  },
]

const toolkitGroups = [
  { category: 'Frontend', technologies: ['Vue 3', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', technologies: ['PHP', 'Java'] },
  { category: 'Database', technologies: ['MySQL'] },
  { category: 'Cloud', technologies: ['AWS'] },
  { category: 'DevOps / Infrastructure', technologies: ['Git', 'GitHub', 'Linux', 'Docker', 'Terraform'] },
  { category: 'Tools', technologies: ['VS Code', 'XAMPP', 'Postman'] },
]

const buildSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Define what the system needs to solve and who it is for.',
  },
  {
    number: '02',
    title: 'Structure',
    description: 'Break the project into clear modules and responsibilities.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Implement the core workflow before adding extra features.',
  },
  {
    number: '04',
    title: 'Test',
    description: 'Check behavior across devices, routes, and user flows.',
  },
  {
    number: '05',
    title: 'Improve',
    description: 'Refine the implementation based on testing and feedback.',
  },
]
</script>

<template>
  <div class="about-page surface-paper">
    <section class="about-hero" aria-labelledby="about-title">
      <PageContainer wide>
        <div class="editorial-grid about-hero__grid">
          <SectionLabel class="about-hero__label" index="04" detail="Profile">
            Background / Focus
          </SectionLabel>

          <p class="about-hero__coordinate mono-meta">FIELD / INFORMATION TECHNOLOGY</p>

          <h1 id="about-title" class="about-hero__title">
            I build software<br />
            and learn the<br />
            <span>systems</span> around it.
          </h1>

          <dl class="about-hero__facts mono-meta" aria-label="Profile overview">
            <div>
              <dt>Current /</dt>
              <dd>IT student</dd>
            </div>
            <div>
              <dt>Focus /</dt>
              <dd>Cloud · DevOps · Software</dd>
            </div>
            <div>
              <dt>Mode /</dt>
              <dd>Building · Learning · Iterating</dd>
            </div>
          </dl>
        </div>
      </PageContainer>
    </section>

    <section class="about-introduction about-section" aria-labelledby="about-introduction-title">
      <PageContainer wide>
        <div class="editorial-grid about-introduction__grid">
          <SectionLabel class="about-section__label" index="01" detail="Introduction">
            About
          </SectionLabel>
          <h2 id="about-introduction-title" class="about-introduction__title">
            Learning across the stack.
          </h2>
          <div class="about-introduction__copy body-lg">
            <p>
              I’m an Information Technology student interested in software development, cloud
              engineering, and DevOps.
            </p>
            <p>
              I enjoy building practical systems and learning how applications move from
              development environments into real infrastructure.
            </p>
          </div>
          <dl class="about-introduction__metadata mono-meta">
            <div>
              <dt>Field /</dt>
              <dd>Information Technology</dd>
            </div>
            <div>
              <dt>Portfolio /</dt>
              <dd>2026</dd>
            </div>
          </dl>
        </div>
      </PageContainer>
    </section>

    <section class="about-focus about-section" aria-labelledby="about-focus-title">
      <PageContainer wide>
        <div class="editorial-grid about-focus__heading">
          <SectionLabel class="about-section__label" index="02" detail="Areas of interest">
            Current focus
          </SectionLabel>
          <h2 id="about-focus-title" class="about-section__title">Areas I’m exploring.</h2>
          <p class="about-focus__note body">
            These are active learning and building interests—not claims of expertise.
          </p>
        </div>

        <ol class="about-focus__list">
          <li v-for="area in focusAreas" :key="area.number" class="about-focus__item">
            <span class="about-focus__number mono-meta">{{ area.number }} /</span>
            <h3 class="about-focus__item-title">{{ area.title }}</h3>
            <p class="about-focus__description body">{{ area.description }}</p>
          </li>
        </ol>
      </PageContainer>
    </section>

    <section class="about-toolkit about-section" aria-labelledby="about-toolkit-title">
      <PageContainer wide>
        <div class="editorial-grid about-toolkit__heading">
          <SectionLabel class="about-section__label" index="03" detail="Working set">
            Technical toolkit
          </SectionLabel>
          <h2 id="about-toolkit-title" class="about-section__title">Tools in my orbit.</h2>
          <p class="about-toolkit__note body">
            A text-based snapshot of technologies I work with or am exploring.
          </p>
        </div>

        <dl class="about-toolkit__groups">
          <div v-for="group in toolkitGroups" :key="group.category" class="about-toolkit__group">
            <dt class="about-toolkit__category mono-meta">
              <span>{{ group.category }} /</span>
              <span>{{ String(group.technologies.length).padStart(2, '0') }}</span>
            </dt>
            <dd>
              <ul class="about-toolkit__technology-list">
                <li v-for="technology in group.technologies" :key="technology">
                  {{ technology }}
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </PageContainer>
    </section>

    <section class="about-process about-section" aria-labelledby="about-process-title">
      <PageContainer wide>
        <div class="editorial-grid about-process__heading">
          <SectionLabel class="about-section__label" index="04" detail="Approach">
            How I build
          </SectionLabel>
          <h2 id="about-process-title" class="about-section__title">A practical loop.</h2>
        </div>

        <ol class="about-process__list">
          <li v-for="step in buildSteps" :key="step.number" class="about-process__step">
            <span class="about-process__number mono-meta">{{ step.number }} /</span>
            <h3 class="about-process__step-title">{{ step.title }}</h3>
            <p class="about-process__description body">{{ step.description }}</p>
          </li>
        </ol>
      </PageContainer>
    </section>

    <section class="about-direction about-section" aria-labelledby="about-direction-title">
      <PageContainer wide>
        <div class="editorial-grid about-direction__grid">
          <SectionLabel class="about-section__label" index="05" detail="Next steps">
            Current direction
          </SectionLabel>
          <p class="about-direction__coordinate mono-meta">DIRECTION / IN PROGRESS</p>
          <h2 id="about-direction-title" class="about-direction__title">
            Cloud engineering<br />
            <span>DevOps</span><br />
            Software systems
          </h2>
          <p class="about-direction__copy body-lg">
            I’m continuing to build software projects while developing stronger skills in cloud
            platforms, deployment workflows, infrastructure, and automation.
          </p>
        </div>
      </PageContainer>
    </section>

    <section class="about-contact" aria-labelledby="about-contact-title">
      <PageContainer wide>
        <div class="editorial-grid about-contact__grid">
          <p class="about-contact__label mono-meta">NEXT / CONTACT</p>
          <h2 id="about-contact-title" class="about-contact__title">Keep the conversation going.</h2>
          <RouterLink class="about-contact__link text-link" to="/contact">
            Get in touch <span aria-hidden="true">&#8594;</span>
          </RouterLink>
        </div>
      </PageContainer>
    </section>
  </div>
</template>
