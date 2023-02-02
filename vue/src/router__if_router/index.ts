import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_PATH),
  routes,
})

export default router
