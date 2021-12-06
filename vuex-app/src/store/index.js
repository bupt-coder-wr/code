import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // vue data
  state: {
    count: 0,
    todos: [
      { id: 1, done: true },
      { id: 2, done: false },
      { id: 3, done: false },
      { id: 4, done: true },
    ],
  },
  // vue computed
  getters: {
    doneTodos: (state, b, c) => {
      console.log(state)
      console.log(b)
      console.log(c)
      return state.todos.filter(item => item.done === true)
    },
  },
  mutations: {
    addCountOne(state) {
      state.count++
    },
    addCountTwo(state) {
      state.count += 2
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('addCountTwo')
      }, 1000)
    },
  },
  modules: {},
})
