import Vue from 'vue'
import Vuex from 'vuex'
import projects from './projects'

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
    projects
  }
})
