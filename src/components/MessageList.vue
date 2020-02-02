<template>
  <div class="q-pa-md q-gutter-md">
    <q-list separator>
        <q-item v-for="message in messages" @click="setActiveMessage(message)" :key="message.id" clickable v-ripple>
          <q-item-section side left>
            <div class="text-grey-8 q-gutter-xs">
              <div v-if="activeFolderName !== 'trash'" @click="changeImportance(message)">
                <q-btn v-if="message.isImportant" class="gt-xs text-warning" size="12px" flat dense round icon="star" />
                <q-btn v-else class="gt-xs" size="12px" flat dense round icon="star" />
              </div>
            </div>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ message.subject }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ message.from.name + `:`}}</span>
              <span>{{ delHtmlTags(message.text).substr(0, textPreviewLength)}} <a href="#">...</a></span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn v-if="activeFolderName !== 'trash' && activeFolderName !== 'important'" class="gt-xs" size="12px" flat dense round icon="delete" @click="deleteMessage(message.id)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'MessageList',
  data () {
    return {
      textPreviewLength: 150
    }
  },
  computed: mapState({
    ...mapGetters({
      activeFolderName: 'menu/getActiveScreen',
      importantMessages: 'mail/getImportantMessages'
    }),
    messages (state) {
      return this.activeFolderName === `important` ? this.importantMessages : state.mail[this.activeFolderName]
    }
  }),
  methods: {
    delHtmlTags (str) {
      return str.replace(/<\/?[^>]+(>|$)/g, '')
    },
    deleteMessage (messageId) {
      this.$store.commit({
        type: 'mail/deleteMessage',
        activeFolderName: this.activeFolderName,
        messageId
      })
    },
    changeImportance (message) {
      this.$store.commit({
        type: 'mail/changeImportance',
        message
      })
    },
    setActiveMessage (message) {
      this.$store.commit('mail/setActiveMessage', message)
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
