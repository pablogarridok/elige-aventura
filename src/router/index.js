import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/inicio.vue'
import AventuraInicio from '../views/AventuraInicio.vue'

const routes = [
  { path: '/', component: inicio },
  {path : '/aventura', component: AventuraInicio},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router