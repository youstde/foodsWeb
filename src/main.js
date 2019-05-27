// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@/util/polyfill'
import '@/util/rem'
import store from './store/'
import router from './router'
import '@/components/svgIcon/svgIn.js'
import svgIcon from '@/components/svgIcon/svgIcon.vue'
// import 'cube-ui/lib/style.css'
import Cube from 'cube-ui'

Vue.use(Cube)

// router.beforeEach((to, from, next) => {
//   next()
// })

Vue.component('svg-icon', svgIcon)
Vue.config.productionTip = false
window.a =123
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
