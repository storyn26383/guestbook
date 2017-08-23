<template lang="pug">
  .logout
    p Loading...
</template>

<script>
  import Cookie from 'js-cookie'

  export default {
    layout: 'blank',
    created () {
      Cookie.remove('auth0_id_token')
      Cookie.remove('auth0_access_token')

      this.$router.replace('/')
    }
  }
</script>
