<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo -->
      <RouterLink to="/" class="logo"> Alexandre </RouterLink>

      <!-- Botão Mobile -->
      <button class="menu-btn" @click="toggleMenu">☰</button>

      <!-- Menu -->
      <nav :class="['nav', { open: isOpen }]">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="active"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const links = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/about' },
  { label: 'Projetos', to: '/projects' },
  { label: 'Contato', to: '/contact' },
]
</script>

<style scoped>
.navbar {
  background: #020617;
  border-bottom: 1px solid #0f172a;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f8fafc;
  text-decoration: none;
}

/* Botão mobile */
.menu-btn {
  display: none;
  font-size: 1.6rem;
  background: none;
  border: none;
  color: #f8fafc;
  cursor: pointer;
}

/* Menu desktop */
.nav {
  display: flex;
  gap: 24px;
}

.nav-link {
  color: #cbd5f5;
  text-decoration: none;
  font-weight: 500;
}

.nav-link.active {
  color: #38bdf8;
}

/* 📱 Mobile */
@media (max-width: 768px) {
  .menu-btn {
    display: block;
  }

  .nav {
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    background: #020617;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    display: none;
  }

  .nav.open {
    display: flex;
  }
}
</style>
