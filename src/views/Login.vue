<template>
  <section class="login">
    <h1>Login</h1>

    <form @submit.prevent="handleLogin">
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        required
      />

      <input
        type="password"
        placeholder="Senha"
        v-model="password"
        required
      />

      <button type="submit" :disabled="loading">
        {{ loading ? 'Entrando...' : 'Entrar' }}
      </button>

      <p v-if="error" class="error">Login inválido</p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/services/auth.service'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref(false)

const router = useRouter()

async function handleLogin() {
  loading.value = true
  error.value = false

  try {
    await login({
      email: email.value,
      password: password.value
    })

    router.push('/dashboard')
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 100px auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
}

button {
  padding: 10px;
  background: #38bdf8;
  border: none;
  font-weight: bold;
}

.error {
  color: red;
}
</style>
