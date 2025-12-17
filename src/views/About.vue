<template>
  <section class="about">
    <h1>Sobre mim</h1>

    <p class="intro">
      Sou desenvolvedor web com foco em aplicações modernas, organizadas e voltadas à experiência do
      usuário.
    </p>

    <div class="block">
      <h2>💻 Stack principal</h2>
      <ul>
        <li>Vue.js (Vue 3 + Vite)</li>
        <li>JavaScript / TypeScript</li>
        <li>CSS moderno</li>
        <li>Laravel (API REST)</li>
        <li>Git e GitHub</li>
      </ul>
    </div>

    <div class="block">
      <h2>🧠 Como eu trabalho</h2>
      <p>
        Gosto de escrever código limpo, organizado e fácil de manter. Busco sempre separar
        responsabilidades, pensar na experiência do usuário e evoluir o projeto de forma
        incremental.
      </p>
    </div>

    <div class="block">
      <h2>🚀 O que estou buscando</h2>
      <p>
        Atualmente busco oportunidades como desenvolvedor frontend ou full stack, onde eu possa
        aprender, contribuir com o time e evoluir profissionalmente.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
  color: #e5e7eb;
}

.about h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1.1rem;
  color: #cbd5f5;
  margin-bottom: 2rem;
}

.block {
  margin-bottom: 2rem;
}

.block h2 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #38bdf8;
}

.block ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.block li {
  margin-bottom: 0.4rem;
}
</style>
