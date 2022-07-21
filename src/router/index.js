import { createRouter, createWebHistory } from 'vue-router'
import BookstoreView from '../views/BookstoreView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BookstoreView
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: CarrinhoView
    }
  ]
})

export default router
