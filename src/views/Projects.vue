<template>
  <section class="projects">
    <h1>Projetos</h1>

    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectsService from '@/services/projects.service'
import type { Project } from '@/data/projects.mock'

const projects = ref<Project[]>([])

onMounted(async () => {
  projects.value = await ProjectsService.getAll()
})
</script>

<style scoped>
.projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.projects h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
