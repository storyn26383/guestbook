import Auth0 from 'auth0-js'
import Auth0Lock from 'auth0-lock'

const DOMAIN = process.env.AUTH0_DOMAIN
const CLIENT_ID = process.env.AUTH0_CLIENT_ID

export const getLock = (options = {}) => new Auth0Lock(CLIENT_ID, DOMAIN, options)

export const getWebAuth = (options = {}) => new Auth0.WebAuth({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  ...options
})
