import axios from 'axios'

const httpGetItems = async (rootState, state, params) => {
  const endpoint = process.env.BASE_API + '/api/users/'
  const headers = { Authorization: localStorage.getItem('Authorization') }
  params = state.uid
    ? { user: state.uid, ...params }
    : params
  const { data } = await axios.get(endpoint, { headers, params })
  console.log(data)
  return data
}

const state = {
  uid: '',
  books: {
    items: []
  }
}

const actions = {
  async getItems ({ state, rootState, commit }) {
    console.log('abc')
    const data = await httpGetItems(rootState, state, { })
    commit('setItems', data)
  },

  async delete ({ rootState, state, dispatch }, id) {
    const endpoint = `${process.env.BASE_API}/api/users/${id}`
    console.log(endpoint)
    const headers = { Authorization: localStorage.getItem('Authorization') }
    await axios.delete(endpoint, { headers })
    return dispatch('getItems')
  },

  async create ({ rootState, state, dispatch }, item) {
    const endpoint = process.env.BASE_API + '/api/users/'
    const headers = { Authorization: localStorage.getItem('Authorization') }
    await axios.post(endpoint, item, { headers })
    return dispatch('getItems')
  },

  async modify ({ rootState, state, dispatch }, { item, id }) {
    const endpoint = `${process.env.BASE_API}/api/users/${id}`
    const headers = { Authorization: localStorage.getItem('Authorization') }
    await axios.put(endpoint, item, { headers })
    return dispatch('getItems')
  }
}

const getters = {
  books: state => state['books'].items,
  book: state => id => {
    const res = state['books'].items.filter(({ _id }) => _id === id)
    return res.length ? res[0] : null
  }
}

const mutations = {
  select (state, { hobby, uid = '' }) {
    state.hobby = hobby
    state.selector = uid ? 'shared' : hobby
  },
  setItems (state, data) {
    state['books'].items = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
