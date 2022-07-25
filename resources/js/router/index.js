import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layout/Home.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/index.vue'),
      },
    ],
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router