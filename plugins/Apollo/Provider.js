import Vue from 'vue'
import VueApollo from 'vue-apollo'
import apolloClient from './Client'

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.mixin({ apolloProvider })

export default apolloProvider
