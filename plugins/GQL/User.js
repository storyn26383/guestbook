import gql from 'graphql-tag'

export default {
  create: gql`
    mutation createUser($idToken: String!) {
      createUser(authProvider: { auth0: { idToken: $idToken } }) {
        id
      }
    }
  `
}
