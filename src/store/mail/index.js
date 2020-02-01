import api from '../../api/data'
import user from '../../api/settings'

// initial state
// todo: Сохранять initial state в локал сторадж ???
const state = {
  inbox: [],
  outbox: [],
  important: [],
  trash: []
}

// getters
const getters = {}

// actions
const actions = {
  // get data from server and set state
  getAllMessages ({ commit }) {
    api.getMessages((messages) => {
      let inbox = messages.filter((message) => message.to.email === user.email)
      let outbox = messages.filter((message) => message.from.email === user.email)
      let important = messages.filter((message) => message.isImportant)
      let trash = messages.filter((message) => message.isDeleted)

      commit('setInbox', inbox)
      commit('setOutbox', outbox)
      commit('setImportant', important)
      commit('setTrash', trash)
    })
  }
}

// mutations
const mutations = {
  setInbox (state, inboxMessages) {
    state.inbox = inboxMessages
  },
  setOutbox (state, outboxMessages) {
    state.outbox = outboxMessages
  },
  setImportant (state, importantMessages) {
    state.important = importantMessages
  },
  setTrash (state, deletedMessages) {
    state.trash = deletedMessages
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
