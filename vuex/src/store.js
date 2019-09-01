import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    comCount:0
  },
  getters: {
    doneTodos: state => {
      
    } 
  },
  mutations: {
    increment (state) {
      state.count++
    },
    compute(state,val) {
      state.comCount+=val
    }
  },
  actions: {

  }
})
