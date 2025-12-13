<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <p>{{ description }}</p>

    <div class="tech">
      <span v-for="tech in technologies" :key="tech">
        {{ tech }}
      </span>
    </div>

    <a :href="link" target="_blank" rel="noopener" class="btn"> Ver projeto </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  technologies: string[]
  link: string
}>()
</script>

<style scoped>
.card {
  background: #020617;
  color: #f8fafc;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
}

.card h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.card p {
  color: #cbd5f5;
  line-height: 1.5;
  margin-bottom: 16px;
}

.tech {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tech span {
  background: #0f172a;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  color: #38bdf8;
}

.btn {
  display: inline-block;
  padding: 10px 18px;
  background: #38bdf8;
  color: #020617;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
}
</style>
