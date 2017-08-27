<template lang="pug">
  v-layout.login(align-center, justify-center)
    v-flex(xs12, sm6, md4, lg3, xl-2)
      v-card.mt-5
        v-toolbar.cyan.darken-2.white--text
          v-toolbar-title Login
        v-card-text.text-xs-center(v-if="loading")
          v-progress-circular.primary--text.my-5(:size="50", indeterminate)
        v-card-text(v-if="!loading")
          v-alert.mb-3(error, transition="fade-transition", :value="!!error") {{ error }}
          v-btn.light-blue.darken-2.mb-4(@click.prevent="loginWithGoogle", block, dark) Login With Google
          v-text-field(
            @keydown.enter.prevent="login",
            prepend-icon="email",
            label="E-mail",
            name="e-mail",
            type="email",
            v-model="form.email",
            v-validate="'required|email'",
            :error-messages="errors.collect('e-mail')"
          )
          v-text-field(
            @keydown.enter.prevent="login",
            prepend-icon="lock",
            :append-icon="showPassword ? 'visibility_off' : 'visibility'",
            :append-icon-cb="() => showPassword = !showPassword",
            label="Password",
            name="password",
            :type="showPassword ? 'text' : 'password'",
            v-model="form.password",
            v-validate="'required'",
            :error-messages="errors.collect('password')"
          )
        v-card-actions(v-if="!loading")
          v-btn(@click.prevent="register", secondary, flat) Register
          v-spacer
          v-btn.cyan--text(@click.prevent="login", flat) Login
</template>

<script>
  import uuid from 'uuid'
  import { getWebAuth } from '~/plugins/Auth0'

  export default {
    middleware: ['guest'],
    data () {
      return {
        showPassword: false,
        loading: false,
        error: '',
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      loginWithGoogle () {
        this.loading = true

        const REDIRECT_URI = `${location.protocol}//${location.host}/auth/callback`

        getWebAuth({
          responseType: 'token',
          redirectUri: REDIRECT_URI
        }).authorize({
          connection: 'google-oauth2',
          scope: 'openid profile email',
          state: uuid.v4()
        })
      },
      async register () {
        await this.validate()

        this.loading = true

        getWebAuth().signup({
          connection: 'Username-Password-Authentication',
          email: this.form.email,
          password: this.form.password
        }, e => {
          if (e) {
            this.error = e.original.response.body.description
            this.loading = false

            throw e
          }

          this.error = ''

          this.login()
        })
      },
      async login () {
        const REDIRECT_URI = `${location.protocol}//${location.host}/auth/callback`

        await this.validate()

        this.loading = true

        getWebAuth({
          responseType: 'token',
          redirectUri: REDIRECT_URI
        }).redirect.loginWithCredentials({
          connection: 'Username-Password-Authentication',
          scope: 'openid profile email',
          state: uuid.v4(),
          email: this.form.email,
          password: this.form.password
        }, e => {
          if (e) {
            this.error = e.original.response.text
            this.loading = false

            throw e
          }

          this.error = ''
        })
      }
    }
  }
</script>
