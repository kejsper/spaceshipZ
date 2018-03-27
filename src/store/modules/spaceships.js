import data from '../../../static/api/generated.json'
import * as types from '../mutation-types'

const state = {
  all: data,
  spaceships: [],
  spaceship: {}
}

const actions = {
  setAvailableSpaceships ({commit}, activeFilters) {
    const spaceships = state.all
    commit(types.AVAILABLE_SPACESHIPS, {spaceships, activeFilters})
  },
  setSingleSpaceship ({commit}, id) {
    const spaceships = state.all
    commit(types.SINGLE_SPACESHIP, {spaceships, id})
  }
}

const mutations = {
  [types.AVAILABLE_SPACESHIPS] (state, {spaceships, activeFilters}) {
    let results = spaceships
    const query = activeFilters
    // simple validation - return no results if basic filters are not set
    if (!query || !query.pickup || !query.startDate || !query.endDate) {
      state.spaceships = results
      return
    }
    // filtering through possible queries
    if (query.pickup) {
      const filtering = results.filter(spaceship => {
        return spaceship.available.airport === query.pickup
      })
      results = filtering
    }
    if (query.type) {
      const filtering = results.filter(spaceship => {
        return spaceship.type === query.type
      })
      results = filtering
    }
    if (query.rentalCompany) {
      const filtering = results.filter(spaceship => {
        return spaceship.company === query.rentalCompany
      })
      results = filtering
    }
    if (query.capacityMin && query.capacityMax) {
      const filtering = results.filter(spaceship => {
        return spaceship.capacity >= query.capacityMin && spaceship.capacity <= query.capacityMax
      })
      results = filtering
    }
    if (query.priceRangeMin && query.priceRangeMax) {
      const filtering = results.filter(spaceship => {
        return spaceship.price >= query.priceRangeMin && spaceship.price <= query.priceRangeMax
      })
      results = filtering
    }
    if (query.startDate && query.endDate) {
      const filtering = results.filter(spaceship => {
        const start = new Date(query.startDate).getTime()
        const end = new Date(query.endDate).getTime()
        const from = new Date(spaceship.available.from).getTime()
        const to = new Date(spaceship.available.to).getTime()
        return start > from && start < to && end > from && end < to
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
