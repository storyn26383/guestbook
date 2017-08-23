export default ({ store, redirect }) => {
  if (!store.getters['auth/check']) {
    redirect('/auth/login')
  }
}
