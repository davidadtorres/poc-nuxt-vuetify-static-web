export const state = () => ({
  logged: false,
  error: false,
})

export const mutations = {
  login(state) {
    state.logged = true
  },
  logout(state) {
    state.logged = false
  },
  setError(state, value) {
    state.error = value
  },
}
