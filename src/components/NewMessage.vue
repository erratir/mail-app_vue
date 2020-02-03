<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="New message" color="primary" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px" >

        <q-card-section class="q-pt-none">
          <q-input v-model="email" label="To" :error="!isEmailValid" autofocus >
            <template v-slot:error> Please insert correct email </template>
          </q-input>
        </q-card-section>

        <q-card-section>
          <q-input dense v-model="subject" label="Subject" />
        </q-card-section>

        <div class="q-pa-md q-gutter-sm">
          <q-editor v-model="editor" min-height="6rem" />
        </div>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Send" v-close-popup :disable="btnDisabled" @click="sendMessage"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import user, { messageTemplate } from '../api/settings'
import { mapGetters, mapState } from 'vuex'
import { date } from 'quasar'

export default {
  name: 'NewMessage',
  data () {
    return {
      prompt: false,
      email: '',
      // eslint-disable-next-line no-useless-escape
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      subject: '',
      editor: '<b>Привет!</b> <p>Сообщение</p>',
      btnDisabled: true
    }
  },
  computed: mapState({
    ...mapGetters({
      messageCount: 'mail/getMessageCount'
    }),
    isEmailValid () {
      const isValid = (this.reg.test(this.email))
      this.btnDisabled = !isValid
      return isValid
    }
  }),
  methods: {
    sendMessage () {
      let newMessage = { ...messageTemplate }
      newMessage.id = this.messageCount + 1
      newMessage.date = date.formatDate(new Date(), 'DD MMM YYYY')
      newMessage.from = user
      newMessage.to = { email: this.email, name: this.email }
      newMessage.subject = this.subject
      newMessage.text = this.editor

      this.$store.commit('mail/sendMessage', newMessage)
    }
  }
}
</script>

<style scoped>

</style>
