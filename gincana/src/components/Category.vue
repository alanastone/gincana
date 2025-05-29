<template>
  <div class="card" @click="$emit('select')">
    <h2 class="name">{{ name }}</h2>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 200px;
  text-align: center;
  cursor: pointer;
}

.name {
  font-size: 3rem;
  color: #333;
  margin: 0;
}
</style>