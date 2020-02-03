import api from '../../api/data'
import user, { messageTemplate } from '../../api/settings'

// initial state
const state = {
  inbox: [],
  outbox: [],
  // important: [],
  trash: [],
  activeMessage: messageTemplate
}

// getters
const getters = {
  getImportantMessages () {
    const filterImportant = (messages) => {
      return messages.filter(element => element.isImportant)
    }
    return [...filterImportant(state.inbox), ...filterImportant(state.outbox)]
  },
  getActiveMessage () {
    return state.activeMessage
  },
  getMessageCount () {
    return state.inbox.length + state.outbox.length + state.trash.length
  }
}

// actions
const actions = {
  // get data from server and set state
  getAllMessages ({ commit }) {
    api.getMessages((messages) => {
      let inbox = messages.filter((message) => message.to.email === user.email && !message.isDeleted)
      let outbox = messages.filter((message) => message.from.email === user.email)
      // let important = messages.filter((message) => message.isImportant)
      let trash = messages.filter((message) => message.isDeleted)

      commit('setInbox', inbox)
      commit('setOutbox', outbox)
      // commit('setImportant', important)
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
  },
  /**
   * Delete message from folder to trash-folder
   * use splice() and push()  https://vuejs.org/v2/guide/list.html#Array-Change-Detection
   * @param state
   * @param {{activeFolderName: string, messageId: number}} payload
   */
  deleteMessage (state, payload) {
    const copyFolder = [ ...state[payload.activeFolderName] ]
    const messageIndex = copyFolder.findIndex((element) => element.id === payload.messageId)
    const deletedMessage = copyFolder[messageIndex]

    deletedMessage.isDeleted = true
    state.trash.push(deletedMessage)
    state[payload.activeFolderName].splice(messageIndex, 1)
  },
  /**
   * Change property {}.isImportant in message
   * @param state
   * @param payload
   */
  changeImportance (state, payload) {
    payload.message.isImportant = !payload.message.isImportant
  },
  setActiveMessage (state, message) {
    state.activeMessage = message
  },
  sendMessage (state, message) {
    state.outbox.push(message)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
