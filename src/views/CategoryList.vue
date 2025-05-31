<template>
    <!-- Category Title -->
  <div class="category-header">
    <h1 class="category-title">
      Malaquias
    </h1>
    <button class="reset-btn" @click="resetGame" aria-label="Resetar Categoria">
      <ResetIcon class="reset-icon" />
    </button>
  </div>
    <div class="questions-page">
    <div class="game-grid">
      <Category v-for="(c, i) in categories" 
      :name="c.title" 
      :answered="c.questions.filter(q => q.answered).length"
      :total="c.questions.length" 
      @select="goToDetail(i)"/>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Category from '../components/Category.vue'
import { ref } from 'vue'
import gameData from '../data/game.json'
import ResetIcon from '../assets/reset.svg'
import * as data from '../composables/dataPersistence'

const categories = ref(gameData)

const router = useRouter()
data.initializeData(categories)

function goToDetail(id) {
  router.push(`/gincana/category-detail/${id}`)
}

function resetGame() {
  data.clearCategories(categories)
}
</script>

<style scoped>

@media (min-width: 1024px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1500px;
    width: 100vw;
    justify-content: center;
  }
}

</style>