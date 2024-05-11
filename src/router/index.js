import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import PostCreate from "@/pages/PostCreate.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/new',
      name: 'create',
      component: PostCreate
    }

  ]
})

export default router