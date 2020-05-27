export const getters = {
  isAuthenticated(state) {
    return state.auth.LoggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}
