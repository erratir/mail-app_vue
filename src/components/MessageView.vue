<template>
  <div class="message">
<!--    <div class="message message-headers">-->
<!--      <q-item>-->

<!--        <q-item-section>-->
<!--          <q-item-label overline>From: {{messages[1].from.name}} ({{messages[1].from.email}})</q-item-label>-->
<!--          <q-item-label overline>To: {{messages[1].to.name}} ({{messages[1].to.email}}) |  Copy: {{messages[1].copy.name}}</q-item-label>-->
<!--          <q-item-label class="q-pt-sm">Subject: {{messages[1].subject}}</q-item-label>-->
<!--        </q-item-section>-->

<!--        <q-item-section side top>-->
<!--          <q-item-label caption>Date: {{messages[1].date}}</q-item-label>-->
<!--        </q-item-section>-->

<!--      </q-item>-->
<!--    </div>-->

<!--    <q-separator />-->

<!--    <div class="message message-text">-->
<!--      <q-item>-->
<!--        <q-item-section >-->
<!--          &lt;!&ndash;todo: ======= возможно не лучшая идея использовать директиву v-html для отображения сообщения? !!!!!!!!!!!!&ndash;&gt;-->
<!--          <q-item-label class="q-pt-md" v-html="messages[1].text">-->
<!--          </q-item-label>-->
<!--          <q-item-label caption>Вложения: {{messages[1].attachments}}</q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--    </div>-->

  </div>
</template>

<script>
import messages from '../api/data.js'
export default {
  name: 'MessageView',
  data () {
    return {
      messages: messages
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
