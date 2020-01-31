<template>
  <q-list separator padding>
    <q-item
      to="/"
      clickable
      v-ripple
      :active="link === 'inbox'"
      @click="link = 'inbox'"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="inbox" />
      </q-item-section>

      <q-item-section>
        Inbox
      </q-item-section>

      <q-item-section side top>
        <q-badge label="10k" />
      </q-item-section>

    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'important'"
      @click="link = 'important'"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="star" />
      </q-item-section>

      <q-item-section>
        Important
      </q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'outbox'"
      @click="link = 'outbox'"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="send" />
      </q-item-section>

      <q-item-section>
        Outbox
      </q-item-section>
    </q-item>

    <q-item
      clickable
      v-ripple
      :active="link === 'trash'"
      @click="link = 'trash'"
      active-class="my-menu-link"
    >
      <q-item-section avatar>
        <q-icon name="delete" />
      </q-item-section>

      <q-item-section>
        Trash
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
export default {
  name: 'Menu',
  data () {
    return {
      link: 'inbox'
    }
  }
}
</script>

<style scoped>

</style>
