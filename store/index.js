export const state = () => ({
  auth: {
    loggedIn: false,
    user: null
  },
  users: [{
    id: 1,
    name: "Corey O'Meara",
    email: 'corey@mail.com'
  }, {
    id: 2,
    name: 'John Doe',
    email: 'john@mail.com'
  }]
})

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  }
}

export const actions = {
  logInUser ({ commit, state }, email) {
    const user = state.users.find(u => u.email === email)
    console.log({ user, email, test: !user })
    if (!user) {
      return false
    }
    commit('setCurrentUser', email)
    return true
  }
}

export const mutations = {
  setCurrentUser (state, email) {
    state.user = state.users.find(u => u.email === email)
  }
}
