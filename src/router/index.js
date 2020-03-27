import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import Confirmation from '../views/Confirmation.vue'
import Cart from '../views/Confirmation.vue'
import Navbar from '../views/layouts/Navbar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login}
  },
  {
    path: '/register',
    name: 'register',
    components: {default: Register, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {default: Home, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/category',
    name: 'category',
    components: {default: Category, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/product',
    name: 'product',
    components: {default: Product, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    components: {default: Confirmation, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {default: Cart, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
