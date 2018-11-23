import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/SignIn.vue')
    },
    {
      path: '/post',
      name: 'Post',
      component: () => import('./views/Post.vue')
    },
    {
      path: '/put',
      name: 'Put',
      component: () => import('./views/Put.vue')
    },
    {
      path: '/get',
      name: 'Get',
      component: () => import('./views/Get.vue')
    },
  ]
})
