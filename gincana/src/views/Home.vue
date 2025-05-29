<template>
  <div class="game-grid">
    <Category v-for="(c, i) in categories" :name="c.title" @select="goToDetail(i)"/>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Category from '../components/Category.vue'
import { ref } from 'vue'
import gameData from '../data/game.json'

const categories = ref(gameData)
const router = useRouter()

function goToDetail(id) {
  router.push(`/category-detail/${id}`)
}

</script>

<style scoped>

</style>