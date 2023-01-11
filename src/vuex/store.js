import Vue from 'vue'
import Vuex from 'vuex'
const debug = process.env.NODE_ENV !== 'production'

const defaultState = {
  devMode: process.env.NODE_ENV !== 'production',

  showLinkedinHeader: true,

  ///////////////////////////////////////
  // Utility
  ///////////////////////////////////////
  cookieMessage: false,
  fromRoute: null,
}
const setDefaultState = function() {
  return defaultState
}

const storeConfig = {
  modules: {},
  getters: {
    // Auth
    getAuthUser: (state) => {
      return state.authUser
    },
  },
  state: new setDefaultState(),
  mutations: {

    setShowLinkedinHeader(state, payload) {
      state.showLinkedinHeader = payload.showLinkedinHeader
    },
    /***********************
     * Utility
     ***********************/
    setStoreRoute(state, payload) {
      state.fromRoute = payload.fromRoute
    }
  },
  actions: {
    actionLogoutUser({ commit }) {
      logoutUser()
      setInterval(function() {
        initFirebaseAuthUI()
      }, 2000)

      commit('clearUser')
    },
  },
  strict: debug,
}

Vue.use(Vuex)

export default new Vuex.Store(storeConfig)
