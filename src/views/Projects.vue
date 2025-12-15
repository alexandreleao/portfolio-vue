<template>
  <section class="projects">
    <h1>Projetos</h1>

    <div v-if="loading">Carregando...</div>

    <div v-else class="grid">
      <article v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>

        <ul>
          <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
        </ul>

        <a :href="project.repoUrl" target="_blank">GitHub</a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProjects } from '@/services/projects.service'
import type { Project } from '@/models/Project'

const projects = ref<Project[]>([])
const loading = ref(true)

onMounted(async () => {
  projects.value = await getProjects()
  loading.value = false
})
</script>
