<script setup>
import Question from '../components/Question.vue'
import gameData from '../data/game.json'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import BackIcon from '../assets/back.svg'
import ResetIcon from '../assets/reset.svg'
import * as data from '../composables/dataPersistence'

const router = useRouter()
const route = useRoute()
const categoryId = Number(route.params.categoryId)
const categories = ref(gameData)

data.initializeData(categories)

function markAnswered(id) {
  data.checkQuestion(categories, categoryId, id)
}

function resetCategory() {
  data.clearCategory(categories, categoryId)
}

function goBack() {
  router.push('/gincana/game')
}
</script>

<template>
  <!-- Category Title -->
   <div class="category-header">
    <h1 class="category-title">
      {{ categories[categoryId].title }}
    </h1>
    <button class="reset-btn" @click="resetCategory" aria-label="Resetar Categoria">
      <ResetIcon class="reset-icon" />
    </button>
  </div>
<div class="questions-page">
  <div class="game-grid">
    <Question v-for="(q, i) in categories[categoryId].questions" 
        :number="q.title" 
        :answered="q.answered" 
        @select="markAnswered(i)"/>
  </div>
</div>
  <button class="icon-btn" @click="goBack" aria-label="Voltar">
    <BackIcon class="back-icon" />
  </button>
</template>


<style scoped>

.back-btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.icon-btn {
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  z-index: 1001;
}

.back-icon {
  width: 4rem;
  height: 4rem;
  fill: var(--primary);
  transition: fill 0.2s;
  justify-content:center
}

.icon-btn:hover .back-icon {
  fill: var(--secondary);
}

</style>