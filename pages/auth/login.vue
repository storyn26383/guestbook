<template lang="pug">
  .login
    #auth0
</template>

<script>
  import uuid from 'uuid'
  import { getLock } from '~/plugins/Auth0'

  export default {
    mounted () {
      getLock({
        container: 'auth0',
        closable: false,
        auth: {
          responseType: 'token',
          redirectUrl: `${location.protocol}//${window.location.host}/auth/callback`,
          params: {
            scope: 'openid profile email',
            state: uuid.v4()
          }
        }
      }).show()
    }
  }
</script>

<style lang="scss">
  .login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
