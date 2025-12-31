<template>
  <section class="contact">
    <h1>Contato</h1>

    <p class="intro">
      Quer conversar sobre um projeto ou oportunidade? Fique à vontade para entrar em contato.
    </p>

    <ul class="links">
      <li>
        <a href="mailto:erdleosalgueiro@gmail.com"> 📧 Email </a>
      </li>

      <li>
        <a href="https://github.com/alexandreleao" target="_blank"> 💻 GitHub </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/alexandre-leão-383406134" target="_blank">
          🔗 LinkedIn
        </a>
      </li>

      <li>
        <a href="https://wa.me/5571992786569" target="_blank"> 📱 WhatsApp </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1rem;
  color: #e5e7eb;
}

.contact h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  color: #cbd5f5;
  margin-bottom: 2rem;
}

.links {
  list-style: none;
  padding: 0;
}

.links li {
  margin-bottom: 1rem;
}

.links a {
  color: #38bdf8;
  text-decoration: none;
  font-size: 1.1rem;
}

.links a:hover {
  text-decoration: underline;
}
</style>
