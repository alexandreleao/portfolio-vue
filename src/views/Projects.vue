<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProjects } from '@/services/projectService'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = ref([])

onMounted(async () => {
  try {
    const response = await getProjects()
    projects.value = response.data
  } catch (error) {
    console.error('Erro ao buscar projetos:', error)
  }
})
</script>

<template>
  <section class="projects">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
