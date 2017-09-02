<template lang="pug">
  v-app
    v-container(fluid)
      v-toolbar.blue-grey.darken-2.white--text(dark, fixed)
        v-toolbar-title Todo List
        v-spacer
        v-menu(offset-y, open-on-hover, v-if="auth")
          v-avatar.mr-3(slot="activator")
            img(:src="user.picture")
          v-list.blue-grey.darken-1(dark)
            v-list-tile(to="/auth/logout", nuxt, flat)
              v-list-tile-title Logout
      main
        nuxt
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      auth: 'auth/check',
      user: 'auth/user'
    })
  }
</script>
