const { SET_CURRENT_USER } = require('./constants')

export const state = () => ({
  auth: {
    loggedIn: false,
    user: {
      id: -1,
      name: 'Incognito Mode',
      email: 'test@mail.com',
      createdAt: '27/02/2021',
      metrics: {
        greenShare: 28.3,
        co2Saved: 765,
        moneySaved: 324
      }
    }
  },
  users: [{
    id: '-1',
    name: 'Incognito Mode',
    email: 'test@mail.com',
    createdAt: '27/02/2021',
    metrics: {
      greenShare: 28.3,
      co2Saved: 765,
      moneySaved: 324
    }
  }, {
    id: '13463279',
    name: "Corey O'Meara",
    email: 'corey@mail.com',
    createdAt: '27/02/2021',
    metrics: {
      greenShare: 28.3,
      co2Saved: 765,
      moneySaved: 324
    }
  }, {
    id: '1783432',
    name: 'John Doe',
    email: 'john@mail.com',
    createdAt: '27/02/2021',
    metrics: {
      greenShare: 28.3,
      co2Saved: 765,
      moneySaved: 324
    }
  }],
  current: {
    price: 30.88,
    greenShare: 37
  },
  daily: {
    totalAmount: 28.9,
    averagePrice: 29.34
  },
  consumptions: {
    week: {
      greenShares: [0.12, 0.28, 0.18, 0.21, 0.23, 0.17, 0.21],
      total: 221.3,
      values: [38.8, 30.7, 23.4, 27.4, 28, 49.4, 23.6],
      keys: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    month: {
      greenShares: [0.12, 0.28, 0.18, 0.21],
      total: 755.2,
      values: [214.5, 195.8, 123.6, 221.3],
      keys: ['W1', 'W2', 'W3', 'W4']
    },
    year: {
      total: 5583.3,
      greenShares: [0.13, 0.12, 0.21, 0.18, 0.23, 0.27, 0.31],
      values: [832.4, 795.8, 823.6, 821.3, 732.7, 802.3, 775.2],
      keys: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    }
  },
  forecast: {
    keys: ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h'],
    // from numpy import random; [round(20 + 20 * random.random(), 1) for _ in range(24)]
    // + manual moves to have a nice shape
    values: [37.63, 33.75, 34.74, 35.36, 39.6, 39.08, 28.90, 25.54, 29.59, 24.87, 31.93, 28.44, 24.78, 23.60, 25.11, 25.67, 29.05, 28.44, 33.97, 35.45, 32.94, 39.73, 31.55, 36.46]
  }
})

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  },

  currentData (state) {
    return state.current
  },

  dailyData (state) {
    return state.daily
  },

  consumptions (state) {
    // ToDo: should get user specific data
    const consumptions = {}
    // Compute all the green shares values
    Object.keys(state.consumptions).forEach((window) => {
      consumptions[window] = {
        renewable: elementwiseOperation(
          state.consumptions[window].greenShares,
          state.consumptions[window].values,
          (gs, v) => gs * v
        ),
        nonRenewable: elementwiseOperation(
          state.consumptions[window].greenShares,
          state.consumptions[window].values,
          (gs, v) => (1 - gs) * v
        ),
        ...state.consumptions[window]
      }
    })
    return consumptions
  },

  forecast (state) {
    return state.forecast
  }
}

export const actions = {
  logInUser ({ commit, state }, email) {
    const user = state.users.find(u => u.email === email)
    if (!user) {
      return false
    }
    commit(SET_CURRENT_USER, user)
    return true
  },

  getUser ({ commit, state }, id) {
    // ToDo: remove sensible user information
    return state.users.find(u => u.id === id)
  }
}

export const mutations = {
  [SET_CURRENT_USER] (state, user) {
    state.auth.user = user
  }
}

function elementwiseOperation (arr1, arr2, ope) {
  // simple helper as we found nothing doing that online
  if (arr1.length !== arr2.length) {
    return []
  }
  const res = []
  for (let i = 0; i < arr1.length; i++) {
    res.push(ope(arr1[i], arr2[i]))
  }
  return res
}
