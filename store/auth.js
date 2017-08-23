export const state = () => ({
  check: false,
  user: {}
})

export const getters = {
  user: state => state.user,
  check: state => state.check
}

export const mutations = {
  login (state, user) {
    state.user = user
    state.check = true
  },
  logout (state) {
    state.user = {}
    state.check = false
  }
}
