<template>
  <article class="card">
    <h3>{{ project.title }}</h3>

    <p>{{ project.description }}</p>

    <ul class="tech">
      <li v-for="tech in project.technologies" :key="tech">
        {{ tech }}
      </li>
    </ul>

    <div class="actions">
      <a :href="project.githubUrl" target="_blank">GitHub</a>
      <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"> Demo </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '@/data/projects.mock'

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.card {
  background: #020617;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

h3 {
  font-size: 1.2rem;
  color: #e5e7eb;
}

p {
  color: #94a3b8;
  flex-grow: 1;
}

.tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.tech li {
  background: #020617;
  border: 1px solid #38bdf8;
  color: #38bdf8;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.actions a {
  color: rgba(0, 0, 0, 0.849);
  text-decoration: none;
  font-weight: 500;
}
</style>
