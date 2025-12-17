<template>
  <section class="projects">
    <h1>Projetos</h1>

    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
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
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
