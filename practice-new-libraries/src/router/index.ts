import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../components/drag-and-drop/drag-drop-container/drag-drop-container.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes

})

export default router
