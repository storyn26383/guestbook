import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj6npbmob1p460178b9lcpu2b'
  })
})

// Install the vue plugin
Vue.use(VueApollo)

export default apolloClient
