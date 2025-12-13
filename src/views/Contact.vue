<template>
  <section class="contact">
    <div class="container">
      <h1>Contato</h1>

      <p class="intro">
        Quer conversar sobre um projeto, oportunidade ou colaboração? Preencha o formulário abaixo.
      </p>

      <form class="form" @submit.prevent="handleSubmit">
        <div class="field">
          <label for="name">Nome</label>
          <input id="name" v-model="form.name" type="text" placeholder="Seu nome" required />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div class="field">
          <label for="message">Mensagem</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Escreva sua mensagem"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn">Enviar mensagem</button>

        <p v-if="success" class="success">Mensagem enviada com sucesso! 🚀</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const success = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  if (!form.name || !form.email || !form.message) return

  // Aqui futuramente entra EmailJS ou API
  console.log('Dados do formulário:', form)

  success.value = true

  // Limpa formulário
  form.name = ''
  form.email = ''
  form.message = ''

  setTimeout(() => {
    success.value = false
  }, 4000)
}
</script>

<style scoped>
.contact {
  padding: 80px 20px;
  background: #020617;
  color: #f8fafc;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.intro {
  text-align: center;
  color: #cbd5f5;
  margin-bottom: 40px;
  line-height: 1.6;
}

.form {
  background: #0f172a;
  padding: 32px;
  border-radius: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-bottom: 6px;
  font-size: 0.9rem;
  color: #cbd5f5;
}

input,
textarea {
  padding: 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #020617;
  color: #f8fafc;
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #64748b;
}

.btn {
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  background: #38bdf8;
  color: #020617;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #0ea5e9;
}

.success {
  margin-top: 20px;
  color: #22c55e;
  text-align: center;
  font-weight: 500;
}
</style>
