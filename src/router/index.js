import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/Inicio.vue'

const routes = [
  { path: '/', component: inicio },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router