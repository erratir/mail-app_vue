<template>
    <div class="message">
    <div class="message message-headers">
      <q-item>

        <q-item-section>
          <q-item-label overline>From: {{ checkedMessage.from.name }} ({{checkedMessage.from.email}})</q-item-label>
          <q-item-label overline>To: {{checkedMessage.to.name}} ({{checkedMessage.to.email}}) |  Copy: {{checkedMessage.copy.name}}</q-item-label>
          <q-item-label class="q-pt-sm">Subject: {{checkedMessage.subject}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Date: {{checkedMessage.date}}</q-item-label>
        </q-item-section>

      </q-item>
    </div>

    <q-separator />

    <div class="message message-text">
      <q-item>
        <q-item-section >
          <!--todo: ======= возможно не лучшая идея использовать директиву v-html для отображения сообщения!? -->
          <q-item-label class="q-pt-md" v-html="checkedMessage.text">
          </q-item-label>
          <q-item-label caption>{{checkedMessage.attachments.length > 0 ? checkedMessage.attachments : ``}}</q-item-label>
        </q-item-section>
      </q-item>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { messageTemplate } from '../api/settings'

export default {
  name: 'MessageView',
  data () {
    return {
    }
  },
  computed: mapState({
    ...mapGetters({
      message: 'mail/getActiveMessage'
    }),
    checkedMessage (state) {
      return this.message ? this.message : messageTemplate
    }
  })
}
</script>

<style scoped>

</style>
