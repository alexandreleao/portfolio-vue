<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    <ul class="tech-list">
      <li v-for="tech in project.technologies" :key="tech">
        {{ tech }}
      </li>
    </ul>

    <div class="actions">
      <a :href="project.githubUrl" target="_blank">GitHub</a>
      <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"> Demo </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/data/projects.mock'

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
}

.tech-list {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
