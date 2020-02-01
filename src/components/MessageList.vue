<template>
  <div class="q-pa-md q-gutter-md">
    <q-list separator>
      <q-item v-for="message in messages" :key="message.id" clickable v-ripple>
        <q-item-section side left>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="star" />
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
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MessageList',
  data () {
    return {
      textPreviewLength: 150
    }
  },
  computed: mapState({
    messages: state => state.mail[state.menu.activeScreen]
  }),
  methods: {
    delHtmlTags: function (str) {
      return str.replace(/<\/?[^>]+(>|$)/g, '')
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
