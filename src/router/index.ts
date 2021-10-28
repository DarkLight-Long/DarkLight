import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import { webpath } from '../init'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: webpath + '/',
    name: 'Home',
    component: Home
  },
  {
    path: webpath + '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
