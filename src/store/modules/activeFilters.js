import * as types from '../mutation-types'

const state = {
  startDate: '',
  endDate: '',
  pickup: '',
  dropoff: '',
  rentalCompany: '',
  type: '',
  priceRange: {},
  capacity: {},
  pickedFeatures: []
}

const actions = {
  setStartRentalDate ({commit}, pickedDate) {
    commit(types.START_DATE, pickedDate)
  },
  setEndRentalDate ({commit}, pickedDate) {
    commit(types.END_DATE, pickedDate)
  },
  setPickup ({commit}, pickupSelected) {
    commit(types.PICKUP, pickupSelected)
  },
  setDropoff ({commit}, dropoffSelected) {
    commit(types.DROPOFF, dropoffSelected)
  },
  setRentalCompany ({commit}, company) {
    commit(types.RENTAL_COMPANY, company)
  },
  setType ({commit}, type) {
    commit(types.SPACESHIP_TYPE, type)
  },
  setPriceRange ({commit}, priceRange) {
    commit(types.PRICE_RANGE, priceRange)
  },
  setCapacity ({commit}, capacity) {
    commit(types.CAPACITY, capacity)
  },
  setPickedFeatures ({commit}, id) {
    commit(types.PICKED_FEATURES, id)
  }
}

const mutations = {
  [types.START_DATE] (state, pickedDate) {
    state.startDate = pickedDate
  },
  [types.END_DATE] (state, pickedDate) {
    state.endDate = pickedDate
  },
  [types.PICKUP] (state, pickupSelected) {
    state.pickup = pickupSelected
  },
  [types.DROPOFF] (state, dropoffSelected) {
    state.dropoff = dropoffSelected
  },
  [types.RENTAL_COMPANY] (state, company) {
    state.rentalCompany = company
  },
  [types.SPACESHIP_TYPE] (state, type) {
    state.type = type
  },
  [types.PRICE_RANGE] (state, priceRange) {
    state.priceRange.min = priceRange[0]
    state.priceRange.max = priceRange[1]
  },
  [types.CAPACITY] (state, capacity) {
    state.capacity.min = capacity[0]
    state.capacity.max = capacity[1]
  },
  [types.PICKED_FEATURES] (state, id) {
    const features = state.pickedFeatures
    const index = features.indexOf(id)
    if (index !== -1) {
      features.splice(index, 1)
    } else {
      features.push(id)
    }
    state.pickedFeatures = features
  }
}

const getters = {
  startDate (state) {
    return state.startDate
  },
  endDate (state) {
    return state.endDate
  },
  pickup (state) {
    return state.pickup
  },
  dropoff (state) {
    return state.dropoff
  },
  rentalCompany (state) {
    return state.rentalCompany
  },
  SPACESHIP_TYPE (state) {
    return state.type
  }
}

const module = {
  state,
  actions,
  mutations,
  getters
}

export default module
