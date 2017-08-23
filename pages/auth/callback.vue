<template lang="pug">
  .callback
    p Loading...
</template>

<script>
  import Cookie from 'js-cookie'
  import User from '~/plugins/GQL/User'

  export default {
    async mounted () {
      let hash = {}

      location.hash.slice(1).split('&').map(h => h.split('=')).forEach(([key, value]) => {
        hash[key] = value
      })

      Cookie.set('auth0_id_token', hash.id_token)
      Cookie.set('auth0_access_token', hash.access_token)

      try {
        await this.$apollo.mutate({
          mutation: User.create,
          variables: {
            idToken: hash.id_token
          }
        })
      } catch (e) {
        // do nothing
      }

      this.$router.replace('/')
    }
  }
</script>
