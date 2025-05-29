<script setup>
import { useRouter } from 'vue-router'
</script>

<template>
  <router-view />
</template>


<style>
.game-grid {
  display: grid;
  gap: 1.5rem;
  padding: 0.5rem;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center; 
  align-items: center;
}

@media (min-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  }

  /* Center two items in the middle columns */
  .game-grid > *:nth-child(1):nth-last-child(2) {
    grid-column: 2 / 3;
  }
  .game-grid > *:nth-child(2):nth-last-child(1) {
    grid-column: 3 / 4;
  }
}
</style>