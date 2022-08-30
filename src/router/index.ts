import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test/Test.vue')
  },
  {
    path: '/css',
    // name: 'css',
    component: () => import(/* webpackChunkName: "about" */ '../views/cssTest/CssComponent.vue'),
    redirect: '/css/test',
    children: [
      {
        path: '/css/test',
        name: 'cssTest',
        component: () => import(/* webpackChunkName: "about" */ '../views/cssTest/Test.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base只有history模式才生效,
  routes
})

export default router
