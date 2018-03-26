import * as types from '../mutation-types'

const state = {
  spaceships: [],
  spaceship: {}
}

const actions = {
  setAvailableSpaceships ({commit, rootState}, query) {
    const spaceships = rootState.spaceships
    commit(types.AVAILABLE_SPACESHIPS, {spaceships, query})
  },
  setSingleSpaceship ({commit, rootState}, id) {
    const spaceships = rootState.spaceships
    commit(types.SINGLE_SPACESHIP, {spaceships, id})
  }
}

const mutations = {
  [types.AVAILABLE_SPACESHIPS] (state, {spaceships, query}) {
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
  },
  [types.SINGLE_SPACESHIP] (state, {spaceships, id}) {
    const filtered = spaceships.filter(spaceship => spaceship.id === id)
    state.spaceship = filtered[0]
  }
}

const getters = {
  availableSpaceships (state) {
    return state.spaceships
  },
  selectedSpaceship (state) {
    return state.spaceship
  }
}

const module = {
  state,
  actions,
  mutations,
  getters
}

export default module
