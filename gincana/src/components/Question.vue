<template>
  <div class="question-card" @click="$emit('select')">
    <h2 class="question-number">{{ number }}</h2>
    <div v-if="answered" @click="$emit('select')" class="red-x">✗</div>
  </div>
</template>

<script setup>
defineProps({
    number: {
        type: String,
        required: true
    },
    answered: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.question-card {
  background: var(--primary);;
  border-radius: 50%; /* Makes it round */
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  text-align: center;
  margin: 0 auto;
  position: relative; /* Add this */
  overflow: hidden; 
  cursor: pointer;
}
.question-number {
  font-size: 8rem;
  color: var(--secondary);
  margin: 0;
  font-weight: bold;
}
</style>