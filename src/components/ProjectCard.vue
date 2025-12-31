<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    image: string
    github_url: string
    live_url: string | null
  }
}>()
</script>

<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <div class="card-actions">
        <a
          v-if="project.github_url"
          :href="project.github_url"
          target="_blank"
          class="btn"
        >
          GitHub
        </a>

        <a
          v-if="project.live_url"
          :href="project.live_url"
          target="_blank"
          class="btn btn-primary"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #020617;
  color: #f8fafc;
  padding: 18px; /* antes 24px */
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
}


.card-content {
  padding: 16px;
}

.card-content h3 {
  margin-bottom: 10px;
  color: #fff;
  font: 1.2rem;;
}

.card-content p {
  color: #ccc;
  font-size: 0.95rem;
}

.card-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.btn {
  padding: 8px 14px;
  border-radius: 6px;
  background: #333;
  color: #fff;
  text-decoration: none;
  font-size: 0.85rem;
}

.btn-primary {
  background: #42b883;
}
</style>

