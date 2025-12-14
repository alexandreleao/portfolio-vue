<template>
  <section class="hero">
    <div class="hero-content animate">
      <h1>Olá, eu sou <span>Alexandre</span></h1>

      <h2>Desenvolvedor Full Stack</h2>

      <p>
        Crio aplicações web modernas, escaláveis e bem estruturadas, utilizando Vue.js, Angular e
        Laravel.
      </p>

      <div class="actions">
        <RouterLink to="/projects" class="btn primary"> Ver Projetos </RouterLink>

        <a href="/about" class="btn secondary"> Saiba mais </a>
      </div>
    </div>
  </section>

  <!-- Âncora futura da página Sobre -->
  <section id="about" class="scroll-hint">
    ↓ <a href="/about" class="btn secondary">Continue para saber mais </a>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #020617, #0f172a);
  color: #f8fafc;
  padding: 40px 20px;
}

.hero-content {
  max-width: 800px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.hero span {
  color: #38bdf8;
}

.hero h2 {
  font-weight: 400;
  color: #cbd5f5;
  margin-bottom: 24px;
}

.hero p {
  line-height: 1.7;
  margin-bottom: 40px;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn.primary {
  background: #38bdf8;
  color: #020617;
}

.btn.primary:hover {
  background: #0ea5e9;
}

.btn.secondary {
  border: 2px solid #38bdf8;
  color: #38bdf8;
}

.btn.secondary:hover {
  background: #38bdf8;
  color: #020617;
}

/* ✨ Animação */
.animate {
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll hint */
.scroll-hint {
  text-align: center;
  padding: 40px 0;
  color: #94a3b8;
}
</style>
