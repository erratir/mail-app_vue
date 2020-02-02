<template>
  <q-list separator padding>
    <q-item
      to="/"
      clickable
      v-ripple
      :active="link === 'inbox'"
      @click="changeActiveScreenName('inbox')"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="inbox" />
      </q-item-section>

      <q-item-section>
        Inbox
      </q-item-section>

      <q-item-section side top>
        <q-badge :label="inboxCount" />
      </q-item-section>

    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'important'"
      @click="changeActiveScreenName('important')"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="star" />
      </q-item-section>

      <q-item-section>
        Important
      </q-item-section>

      <q-item-section side top>
        <q-badge :label="importantCount" />
      </q-item-section>

    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'outbox'"
      @click="changeActiveScreenName('outbox')"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="send" />
      </q-item-section>

      <q-item-section>
        Outbox
      </q-item-section>

      <q-item-section side top>
        <q-badge :label="outboxCount" />
      </q-item-section>

    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'trash'"
      @click="changeActiveScreenName('trash')"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="delete" />
      </q-item-section>

      <q-item-section>
        Trash
      </q-item-section>

      <q-item-section side top>
        <q-badge :label="trashCount" />
      </q-item-section>

    </q-item>

    <q-item class="q-mt-xl"
            to="/About"
            clickable
            v-ripple
            :active="link === 'help'"
            @click="link = 'help'"
            active-class="my-menu-link"
    >
      <q-item-section avatar><q-icon name="help" /></q-item-section>

      <q-item-section>404 example</q-item-section>
    </q-item>

    <q-separator />

  </q-list>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Menu',
  data () {
    return {
      link: this.$store.state.menu.activeScreen
    }
  },
  computed: mapState({
    ...mapGetters({
      importantMessages: 'mail/getImportantMessages'
    }),
    inboxCount: state => state.mail.inbox.length,
    outboxCount: state => state.mail.outbox.length,
    importantCount () {
      return this.importantMessages.length
    },
    trashCount: state => state.mail.trash.length

  }),
  methods: {
    changeActiveScreenName (screenName) {
      this.link = screenName
      this.$store.commit(`menu/changeActiveScreenName`, screenName)
    }
  }
}
</script>

<style scoped>

</style>
