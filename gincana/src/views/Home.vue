<template>
  <div class="home-page">
    <div class="header">
      <h1 class="title">Gincana Bíblica: Malaquias</h1>
      <h1 class="description">SAF Uberlândia e Catalão</h1>
    </div>
    <button class="icon-btn home-btn" @click="goToCategoryList" aria-label="Ir para categorias">
      <PlayIcon class="play-icon" />
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PlayIcon from '../assets/play.svg'

const router = useRouter()
function goToCategoryList() {
  router.push('/game')
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically */
  background: var(--color-bg, #000);
}

.header {
  background: var(--secondary, #4e1bcf);
  border-radius: 2rem;
  max-width: 600px;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 2rem 2rem 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin: 0;
  color: var(--primary, #d9f852);
  letter-spacing: 0.05em;
  font-weight: bold;
}

.description {
  text-align: center;
  font-size: 1.3rem;
  margin: 1rem 0 0 0;
  color: var(--primary, #d9f852);
  opacity: 0.8;
}

.home-btn {
  margin-top: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-icon {
  width: 4rem;
  height: 4rem;
  fill: var(--primary, #d9f852);
  transition: fill 0.2s;
}

.home-btn:hover .back-icon {
  fill: var(--danger, #ff737d);
}
</style>