import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../components/drag-and-drop/drag-drop-container/drag-drop-container.vue') },
  { path: '/image-cropping', name: 'image-cropping', component: () => import('../components/image-cropping/image-cropping-container/image-cropping-container.vue') },
  { path: '/chat-gpt', name: 'chat-gpt', component: () => import('../components/chat-gpt/chat-gpt-container/chat-gpt-container.vue') },
  { path: '/rating', name: 'rating', component: () => import('../components/rating-system/rating-container/rating-container.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes

})

export default router
