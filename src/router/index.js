import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Home page"
    },
    component: HomePage
  },
  {
    path: '/site',
    name: 'Site',
    meta: {
      title: "Site page",
      breadcrumb: "Site"
    },
    component: () => import('../views/SitePage.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    meta: {
      title: "Orders page",
      breadcrumb: "Orders"
    },
    component: () => import('../views/OrdersPage.vue')
  }
  ,
  {
    path: '/settings',
    name: 'Settings',
    meta: {
      title: "Settings page",
      breadcrumb: "Settings"
    },
    component: () => import('../views/SettingsPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
