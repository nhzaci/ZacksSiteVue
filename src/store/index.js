import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navDrawerOpen: false
  },
  mutations: {
    set_navDrawerOpen (state, bool) {
      state.navDrawerOpen = bool;
    }
  },
  actions: {
  },
  modules: {
  }
})
