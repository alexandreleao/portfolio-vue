<template>
  <section class="hero">
    <div class="content">
      <h1>Olá, eu sou <span>Alexandre</span></h1>

      <p>Desenvolvedor Full Stack com foco em aplicações web modernas, organizadas e escaláveis.</p>

      <div class="actions">
        <RouterLink to="/projects" class="btn primary"> Ver Projetos </RouterLink>

        <a href="https://github.com/seu-usuario" target="_blank" class="btn secondary"> GitHub </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #020617, #020617);
  color: #fff;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h1 span {
  color: #38bdf8;
}

p {
  font-size: 1.2rem;
  color: #cbd5f5;
  max-width: 600px;
}

.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.primary {
  background: #38bdf8;
  color: #020617;
}

.secondary {
  border: 1px solid #38bdf8;
  color: #38bdf8;
}
</style>
