<template>
  <header class="navbar">
    <div class="container">
      <h1 class="logo">Alexandre</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projetos</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
        <RouterLink to="/contact">Contato</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  background: #0f172a;
  color: #fff;
  padding: 1rem 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

a {
  color: #e5e7eb;
  text-decoration: none;
}

a.router-link-active {
  color: #38bdf8;
}
</style>
