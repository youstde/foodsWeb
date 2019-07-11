import Vue from 'vue'
import Router from 'vue-router'

// 首页
const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
// 登录中心
const loginIn = r => require.ensure([], () => r(require('../pages/sign/loginIn')), 'loginIn')
// 个人中心
const myZoe = r => require.ensure([], () => r(require('../pages/myZoe/myZoe')), 'myZoe')
// 搜索页
const search = r => require.ensure([], () => r(require('../pages/search/search')), 'search')
// 切换商店
const toggleShop = r => require.ensure([], () => r(require('../pages/toggleShop/toggleShop')), 'toggleShop')
// 商品分类列表
const goodsClassify = r => require.ensure([], () => r(require('../pages/goodsClassify/goodsClassify')), 'goodsClassify')
// 商品详情
const goodsDetail = r => require.ensure([], () => r(require('../pages/goodsDetail/goodsDetail')), 'goodsDetail')
// 购物车
const goodsCar = r => require.ensure([], () => r(require('../pages/goodsCar/goodsCar')), 'goodsCar')
// 结算
const budget = r => require.ensure([], () => r(require('../pages/budget/budget')), 'budget')
// 发票填写
const writeInvoice = r => require.ensure([], () => r(require('../pages/budget/writeInvoice')), 'writeInvoice')
// 填写备注页面
const writeMark = r => require.ensure([], () => r(require('../pages/budget/writeMark')), 'writeMark')
// 商品清单页
const goodsInventory = r => require.ensure([], () => r(require('../pages/budget/goodsInventory')), 'goodsInventory')
// 用户协议
const userAgreement = r => require.ensure([], () => r(require('../pages/userAgreement/userAgreement')), 'userAgreement')
// 地址管理
const adressManagement = r => require.ensure([], () => r(require('../pages/adressManagement/adressManagement')), 'adressManagement')
// 地址编辑
const editAdress = r => require.ensure([], () => r(require('../pages/editAdress/editAdress')), 'editAdress')
// 订单列表
const orderList = r => require.ensure([], () => r(require('../pages/orderList/index')), 'orderList')
// 订单详情
const orderDetail = r => require.ensure([], () => r(require('../pages/orderDetail/index')), 'orderDetail')
// loading页面
const skeletonLoad = r => require.ensure([], () => r(require('../pages/skeletonLoad/skeletonLoad')), 'skeletonLoad')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'skeletonLoad',
      component: skeletonLoad,
      children: [

      ]
    },
    {
      path: '/home',
      name: 'home',
      component: home
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
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/toggleshop',
      name: 'toggleShop',
      component: toggleShop
    },
    {
      path: '/goodsclassify',
      name: 'goodsClassify',
      component: goodsClassify
    },
    {
      path: '/goodsdetail',
      name: 'goodsDetail',
      component: goodsDetail
    },
    {
      path: '/goodscar',
      name: 'goodsCar',
      component: goodsCar
    },
    {
      path: '/budget',
      name: 'budget',
      component: budget
    },
    {
      path: '/writeinvoice',
      name: 'writeInvoice',
      component: writeInvoice
    },
    {
      path: '/writemark',
      name: 'writeMark',
      component: writeMark
    },
    {
      path: '/goodsinventory',
      name: 'goodsInventory',
      component: goodsInventory
    },
    {
      path: '/useragreement',
      name: 'userAgreement',
      component: userAgreement
    },
    {
      path: '/adressmanagement',
      name: 'adressManagement',
      component: adressManagement
    },
    {
      path: '/editadress',
      name: 'editAdress',
      component: editAdress
    },
    {
      path: '/orderlist',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/orderdetail',
      name: 'orderDetail',
      component: orderDetail
    }
  ]
})
