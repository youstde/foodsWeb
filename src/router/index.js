import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const loginIn = r => require.ensure([], () => r(require('../pages/sign/loginIn')), 'loginIn')
const myZoe = r => require.ensure([], () => r(require('../pages/myZoe/myZoe')), 'myZoe')
const write = r => require.ensure([], () => r(require('../pages/write/write')), 'write')
const articleDetail = r => require.ensure([], () => r(require('../pages/articleDetail/articleDetail')), 'articleDetail')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [

      ]
    },
    {
      path: '/sign',
      name: 'sign',
      component: loginIn
    },
    {
      path: '/myzoe',
      name: 'myzoe',
      component: myZoe
    },
    {
      path: '/write',
      name: 'write',
      component: write
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: articleDetail
    }
  ]
})
