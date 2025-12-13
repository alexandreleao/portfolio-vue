<template>
  <section class="projects">
    <h1>Projetos</h1>

    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    title: 'Sistema de Portfólio',
    description: 'Portfólio pessoal desenvolvido com Vue 3 e Vite.',
    technologies: ['Vue', 'TypeScript', 'Vite'],
    link: '#',
  },
  {
    title: 'Dashboard Administrativo',
    description: 'Dashboard com autenticação e gráficos.',
    technologies: ['Angular', 'API REST'],
    link: '#',
  },
  {
    title: 'API de Projetos',
    description: 'Backend com Laravel para gerenciamento de projetos.',
    technologies: ['Laravel', 'MySQL'],
    link: '#',
  },
]
</script>

<style scoped>
.projects {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.projects h1 {
  font-size: 2.4rem;
  margin-bottom: 40px;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
</style>
