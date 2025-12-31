<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProjects } from '@/services/projectService'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = ref([])

onMounted(async () => {
  projects.value = await getProjects()
})
</script>

<template>
  <section class="projects">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>

<style scoped>
  .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
