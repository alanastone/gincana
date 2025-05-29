import { createRouter, createWebHistory } from 'vue-router'

// Import your views
import Questions from '../views/Questions.vue'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Gincana', component: Home },
  {
    path: '/category-detail/:categoryId',
    name: 'Questions',
    component: Questions
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router