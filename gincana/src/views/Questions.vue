<script setup>
import Question from '../components/Question.vue'
import gameData from '../data/game.json'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const categoryId = Number(route.params.categoryId)
const categories = ref(gameData)

function markAnswered(id) {
  const q = categories.value[categoryId].questions[id]
  q.answered = !q.answered
}

function resetCategory() {
  const questions = categories.value[categoryId].questions
  questions.forEach(q => { q.answered = false; });
}

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="game-grid">
    <Question v-for="(q, i) in categories[categoryId].questions" 
        :number="q.title" 
        :answered="q.answered" 
        @select="markAnswered(i)"/>
  </div>

  <button class="back-btn" @click="goBack">←</button>
  <button class="back-btn" @click="resetCategory">Resetar Category</button>
</template>


<style scoped>
.back-btn {
  display: block;
  margin: 2rem auto 0 auto;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #eee;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #ddd;
}
</style>