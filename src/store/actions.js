//  todos
export default {
  addTodo ({ commit }, text) {
    commit('addTodo', {
      text,
      done: false
    })
  },
  removeTodo ({ commit }, todo) {
    commit('removeTodo', todo)
  },
  toggleTodo ({ commit }, todo) {
    commit('editTodo', { todo, done: !todo.done })
  },
  editTodo ({ commit }, { todo, value }) {
    commit('editTodo', { todo, text: value })
  },
  toggleAll ({ state, commit }, done) {
    state.todos.forEach((todo) => {
      commit('editTodo', { todo, done })
    })
  },
  clearCompleted ({ state, commit }) {
    state.todos.filter(todo => todo.done)
      .forEach(todo => {
        commit('removeTodo', todo)
      })
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  },
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  decrement ({ commit }) {
    commit('decrement')
  },
  increment ({ commit }) {
    commit('increment')
  }
}
