import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue';
import MineverseView from '../views/MineverseView.vue';
import LoginView from '../views/LoginView.vue'
import EditorView from '../views/EditorView.vue'
import allNewsView from '../views/allNewsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/mineVerse',
    name: 'mineVerse',
    component: MineverseView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/editor',
    name: 'editor',
    component: EditorView,
    //meta: { protectedRoute: true }
  },
  {
    path: '/allnews',
    name: 'allnews',
    component: allNewsView,
    // meta: {protectedRoute: true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  const routeprotected = to.matched.some(item => item.meta.protectedRoute)
  if (routeprotected && store.state.token === null) {
    next('/')
  } else {
    next()
  }
})
export default router
