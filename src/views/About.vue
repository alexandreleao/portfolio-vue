<template>
  <section class="about">
    <div class="container">
      <h1>Sobre mim</h1>

      <p class="intro">
        Sou desenvolvedor Full Stack com foco em construir aplicações web modernas, organizadas e
        escaláveis. Gosto de transformar ideias em soluções práticas, sempre buscando clareza no
        código e boa experiência para o usuário.
      </p>

      <div class="blocks">
        <div class="block">
          <h2>Minha trajetória</h2>
          <p>
            Minha jornada na programação começou com o interesse em entender como sistemas funcionam
            por trás das interfaces. Ao longo do tempo, passei a me aprofundar em desenvolvimento
            frontend e backend, trabalhando com frameworks modernos e boas práticas.
          </p>
          <p>
            Hoje, meu foco é desenvolver aplicações completas, desde a interface até a lógica de
            negócio, sempre pensando em manutenção, performance e escalabilidade.
          </p>
        </div>

        <div class="block">
          <h2>Tecnologias</h2>
          <ul class="tech-list">
            <li>Vue.js • Angular</li>
            <li>TypeScript • JavaScript</li>
            <li>Laravel • APIs REST</li>
            <li>HTML • CSS • Git</li>
          </ul>
        </div>

        <div class="block">
          <h2>Como eu trabalho</h2>
          <p>
            Valorizo código limpo, componentes reutilizáveis e uma arquitetura bem definida. Gosto
            de entender o problema antes de propor soluções e acredito que comunicação clara é tão
            importante quanto escrever código.
          </p>
          <p>
            Estou sempre aprendendo e me adaptando a novas tecnologias, com foco em entregar valor
            real.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about {
  padding: 80px 20px;
  background: #020617;
  color: #f8fafc;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 2.6rem;
  margin-bottom: 32px;
  text-align: center;
}

.intro {
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 60px;
  color: #cbd5f5;
}

.blocks {
  display: grid;
  gap: 40px;
}

.block h2 {
  font-size: 1.6rem;
  margin-bottom: 16px;
  color: #38bdf8;
}

.block p {
  line-height: 1.7;
  margin-bottom: 12px;
  color: #e5e7eb;
}

.tech-list {
  list-style: none;
  padding: 0;
}

.tech-list li {
  background: #0f172a;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: inline-block;
  margin-right: 8px;
  color: #cbd5f5;
}
</style>
