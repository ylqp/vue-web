import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseColor: '#006AFF'
  },
  mutations: {
    set_baseColor (state, settings) {
        state.baseColor = settings
        document.body.style.setProperty('--base-color', state.baseColor)
        // 数据持久化
        // window.localStorage.setItem('examTypeList', JSON.stringify(settings))
    }
  },
  actions: {
  },
  modules: {
  }
})
