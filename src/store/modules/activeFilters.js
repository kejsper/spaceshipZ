import * as types from '../mutation-types'

const state = {
  startDate: '',
  endDate: ''
}

const actions = {
  setStartRentalDate ({commit}, pickedDate) {
    commit(types.START_DATE, pickedDate)
  },
  setEndRentalDate ({commit}, pickedDate) {
    commit(types.END_DATE, pickedDate)
  }
}

const mutations = {
  [types.START_DATE] (state, pickedDate) {
    state.startDate = pickedDate
  },
  [types.END_DATE] (state, pickedDate) {
    state.endDate = pickedDate
  }
}

const getters = {
  startDate (state) {
    return state.startDate
  },
  endDate (state) {
    return state.endDate
  }
}

const module = {
  state,
  actions,
  mutations,
  getters
}

export default module
