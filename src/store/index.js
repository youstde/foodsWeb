import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import actions from './action'
import * as getters from './getters'

Vue.use(Vuex);

const state = {
  tip: {
    type: 'err',
    messgae: 'xixi',
    labels: []
  },
  isFirstLoading: true
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
