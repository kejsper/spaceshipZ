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
    let results = []
    // simple validation - return no results if basic filters are not set
    if (!query.pickup || !query.startDate || !query.endDate) {
      return results
    }
    // filtering through possible queries
    results = spaceships
    if (query && query.pickup) {
      const filtering = results.filter(spaceship => {
        return spaceship.available.airport === query.pickup
      })
      results = filtering
    }
    if (query && query.type) {
      const filtering = results.filter(spaceship => {
        return spaceship.type === query.type
      })
      results = filtering
    }
    if (query && query.rentalCompany) {
      const filtering = results.filter(spaceship => {
        return spaceship.company === query.rentalCompany
      })
      results = filtering
    }
    if (query && query.capacityMin && query.capacityMax) {
      const filtering = results.filter(spaceship => {
        return spaceship.capacity >= query.capacityMin && spaceship.capacity <= query.capacityMax
      })
      results = filtering
    }
    if (query && query.priceRangeMin && query.priceRangeMax) {
      const filtering = results.filter(spaceship => {
        return spaceship.price >= query.priceRangeMin && spaceship.price <= query.priceRangeMax
      })
      results = filtering
    }
    state.spaceships = results
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
