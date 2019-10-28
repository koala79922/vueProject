import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import { mutations } from './mutations'
import * as getters from './getters'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins
})
