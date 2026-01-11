<template>
  <section class="dashboard">
    <header class="topbar">
      <h1>Dashboard</h1>
      <button @click="logout">Sair</button>
    </header>

    <main>
      <p>Bem-vindo! Você está logado.</p>
    </main>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style scoped>
.dashboard {
  max-width: 900px;
  margin: 80px auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #020617;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
}

button {
  background: #ef4444;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>
