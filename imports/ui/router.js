import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import BingoView from './BingoView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/bingo',
      name: 'bingo',
      component: BingoView,
    },
  ],
})
