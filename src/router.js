import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/play',
      name: 'play',
      component: () => import(/* webpackChunkName: "about" */ './views/Play.vue')
    },
    {
      path: '/listRoom',
      name: 'listroom',
      component: () => import(/* webpackChunkName: "about" */ './views/ListRoom.vue')
    }
  ]
})
