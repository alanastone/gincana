<template>
  <div class="card" @click="$emit('select')">
    <h2 class="name">{{ name }}</h2>
    <h3 v-if="answered > 0 && answered != total" class="description">{{ answered }}/{{ total }}</h3>
    <div v-if="answered == total" class="red-x">✗</div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  answered: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
})
</script>

<style scoped>

.card {
  background: var(--primary);;
  border-radius: 100px;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  min-height: 200px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden; 
  flex-direction: column;
}

.name {
  font-size: clamp(2rem, 2.5vw, 4rem);
  color: var(--secondary);
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
}

.description {
  font-size: 1.3rem;
  color: var(--description);
  margin: -0.7rem;
}
</style>