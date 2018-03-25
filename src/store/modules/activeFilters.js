import * as types from '../mutation-types'

const state = {
  startDate: '',
  endDate: '',
  pickup: '',
  dropoff: ''
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
  }
}

const module = {
  state,
  actions,
  mutations,
  getters
}

export default module
