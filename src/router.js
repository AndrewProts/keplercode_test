import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Game from './views/Game'

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
      path: '/game/:size',
      name: 'game',
      component: Game
    }
  ]
})
