import Cookie from 'js-cookie'
import { getWebAuth } from '~/plugins/Auth0'

export default async ({ isServer, store, req }) => {
  const TOKEN_KEY = 'auth0_access_token'

  let token

  if (isServer) {
    let cookies = {}

    req.headers.cookie.split(';').map(cookie => cookie.trim().split('=')).forEach(([key, value]) => {
      cookies[key] = value
    })

    token = cookies[TOKEN_KEY]
  } else {
    token = Cookie.get(TOKEN_KEY)
  }

  try {
    if (token) {
      store.commit('auth/login', await new Promise((resolve, reject) => {
        getWebAuth().client.userInfo(token, (e, user) => {
          if (e) {
            return reject(e)
          }

          resolve(user)
        })
      }))

      return
    }
  } catch (e) {
    //
  }

  store.commit('auth/logout')
}
