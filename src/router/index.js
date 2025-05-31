import { createRouter, createWebHistory } from 'vue-router'

// Import your views
import QuestionList from '../views/QuestionList.vue'
import CategoryList from '../views/CategoryList.vue'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', redirect: '/gincana' },
    { path: '/gincana', name: 'Gincana', component: Home },
    { path: '/gincana/game', name: 'Categorias', component: CategoryList },
    {
        path: '/gincana/category-detail/:categoryId',
        name: 'QuestionList',
        component: QuestionList
    }
]

const router = createRouter({
  history: createWebHistory('/gincana/'),
  routes
})

export default router