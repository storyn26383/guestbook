<template lang="pug">
  v-app
    v-toolbar(fixed, dark)
      v-toolbar-title Guestbook
      v-spacer
      v-menu(offset-y, dark, open-on-hover, v-if="auth")
        v-avatar.mr-3(slot="activator")
          img(:src="user.picture")
        v-list(dark)
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
