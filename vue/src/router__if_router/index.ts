import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/home',
    component: () => import('@/views/home.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_PATH),
  routes,
})

export default router
