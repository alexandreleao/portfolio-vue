<template>
  <section class="login">
    <h1>Login</h1>

    <form @submit.prevent="handleLogin">
      <input type="email" placeholder="Email" v-model="email" required />

      <input type="password" placeholder="Senha" v-model="password" required />

      <button type="submit" :disabled="loading">
        {{ loading ? 'Entrando...' : 'Entrar' }}
      </button>

      <p v-if="error" class="error">Email ou senha inválidos</p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email: email.value,
      password: password.value,
    })

    // salva token
    localStorage.setItem('token', response.data.token)

    // redireciona
    router.push('/dashboard')
  } catch (err) {
    error.value = 'Email ou senha inválidos'
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 100px auto;
  background: #020617;
  padding: 24px;
  border-radius: 12px;
}

h1 {
  color: #f8fafc;
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: none;
}

button {
  padding: 10px;
  background: #38bdf8;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.7;
}

.error {
  color: #f87171;
  font-size: 0.9rem;
  text-align: center;
}
</style>
