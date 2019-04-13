import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogShow: false
  },
  getters: {
    dialogShow (state) {
      return state.dialogShow
    }
  },
  mutations: {
    SHOW_DIALOG (state, data) {
      state.dialogShow = true
    },
    HIDE_DIALOG (state, data) {
      state.dialogShow = false
    }
  },
  actions: {

  }
})
