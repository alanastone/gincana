import { watch, onMounted } from 'vue'

export function initializeData(categories) {
  // Load answered state on mount
  onMounted(() => {
    const saved = localStorage.getItem(`game`)
      if (saved) {
        const answeredArr = JSON.parse(saved)
        categories.value = answeredArr
      }
  })
}

export function clearCategories(categories) {
  categories.value.forEach(category => {
    category.questions.forEach(q => { q.answered = false; });
  });
  localStorage.clear()
}

export function clearCategory(categories, index) {
  categories.value[index].questions.forEach(q => { q.answered = false; });
  set(categories)
}

export function checkQuestion(categories, indexCategory, indexQuestion) {
  const current = categories.value[indexCategory].questions[indexQuestion].answered
  categories.value[indexCategory].questions[indexQuestion].answered = !current
  set(categories)
}

export function set(categories) {
  const plain = JSON.parse(JSON.stringify(categories.value))
  localStorage.setItem('game', JSON.stringify(plain))
} 