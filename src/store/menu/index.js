// initial state
const state = {
  activeScreen: `inbox`
}

// getters
const getters = {
  getActiveScreen: state => {
    return state.activeScreen
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  changeActiveScreenName (state, screen) {
    state.activeScreen = screen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
