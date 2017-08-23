const Dotenv = require('dotenv-webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Guestbook',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Styles of the page
  */
  css: [
    'normalize.css'
  ],
  /*
  ** Router
  */
  router: {
    middleware: ['check-auth']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
      /*
      ** Run ESLINT on save
      */
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.plugins.push(new Dotenv())
    }
  },
  plugins: ['~/plugins/Apollo/Provider.js']
}
