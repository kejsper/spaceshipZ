import * as types from '../mutation-types'

const state = {
  spaceships: []
}

const actions = {
  setAvailableSpaceships ({commit, rootState}, query) {
    const spaceships = rootState.spaceships
    commit(types.SET_AVAILABLE_SPACESHIPS, {spaceships, query})
  }
}

const mutations = {
  [types.SET_AVAILABLE_SPACESHIPS] (state, {spaceships, query}) {
    const availableSpaceships = spaceships.filter(spaceship => {
      return spaceship.available.in === query.pickup
    })
    state.spaceships = availableSpaceships
  }
}

const getters = {
  availableSpaceships (state) {
    return state.spaceships
  }
}

const module = {
  state,
  actions,
  mutations,
  getters
}

export default module
