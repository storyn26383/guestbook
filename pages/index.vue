<template lang="pug">
  section
    .cover
      logo
      .text
        h1.display-3 Guestbook
        h2.display-1 Nuxt.js project
    .links
      v-btn(href="https://nuxtjs.org/", target="_blank", success, outline, large) Documentation
      v-btn(href="https://github.com/nuxt/nuxt.js", target="_blank", secondary, outline, large) GitHub
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    middleware: ['auth'],
    components: {
      Logo
    }
  }
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
    height: calc(100vh - 64px);
    flex-direction: column;

    &, .cover {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cover {
      flex-direction: row;

      .text {
        text-align: center;
        margin-left: 3rem;

        h1 {
          letter-spacing: .02em !important;
        }
      }
    }

    .links {
      margin-top: 3rem;
    }
  }
</style>
