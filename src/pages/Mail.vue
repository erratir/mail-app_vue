<template>
  <div class="content">
    <!-- todo: QSplitter на мобильниках не очень.. Просто скрывать компонент со списком сообщений по клику?  -->
    <q-splitter
      v-model="splitterModel"
      horizontal
      style="height: 90vh"
    >

      <template v-slot:before>
        <MessageList></MessageList>
      </template>

      <template v-slot:separator>
        <q-avatar color="primary" text-color="white" size="20px" icon="drag_indicator" />
      </template>

      <template v-slot:after>
        <div class="q-pa-md">
          <MessageView></MessageView>
        </div>
      </template>

    </q-splitter>

  </div>
</template>

<script>
import MessageList from '../components/MessageList'
import MessageView from '../components/MessageView'
export default {
  name: 'mail',
  components: { MessageView, MessageList },
  data () {
    return {
      splitterModel: 35 // start at 50%
    }
  },
  created () {
    this.$store.dispatch('mail/getAllMessages')
  }
}
</script>

<style scoped>

</style>
