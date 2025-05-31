<script setup>
import { onMounted, onUnmounted } from 'vue'

let wakeLock = null

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen')
    }
  } catch (err) {
    console.error('Wake Lock not supported or failed:', err)
  }
}

onMounted(() => {
  requestWakeLock()
  // Optional: re-request on visibility change (some browsers release on tab switch)
  document.addEventListener('visibilitychange', requestWakeLock)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', requestWakeLock)
  if (wakeLock) {
    wakeLock.release()
    wakeLock = null
  }
})
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

.red-x {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 10rem;
  color: var(--primary);
  background: var(--danger);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-weight: bold;
  opacity: 0.85;
}

.category-header {
  width: 100vw;
  left: 0;
  top: 0;
  position: relative;
  background: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 3rem;
  z-index: 10;
}

.category-title {
  text-align: center;
  font-size: 5rem;
  margin: 0.5rem;
  color: var(--primary);
  letter-spacing: 0.05em;
  font-weight: bold;
}

.reset-btn {
  position: absolute;
  top: 1rem;            
  right: 1rem; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  align-items: center;
  display: flex;
}

.reset-icon {
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--primary);
  transition: fill 0.2s;
}

.reset-btn:hover .reset-icon {
  fill: var(--danger);
}

.questions-page {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding-bottom: 11rem;
}

@media (min-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .game-grid {
    grid-template-columns: repeat(5, 1fr);
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