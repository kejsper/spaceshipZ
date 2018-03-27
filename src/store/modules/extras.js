import * as types from '../mutation-types'

const state = {
  all: [
    {
      id: 1,
      name: 'Infant seat',
      price: 100,
      description: 'Baby car seats are not legally required in space.'
    },
    {
      id: 2,
      name: 'Toddler seat',
      price: 100,
      description: 'Baby car seats are not legally required in space.'
    },
    {
      id: 3,
      name: 'Navigation system',
      price: 150,
      description: 'Do you really think you need it?'
    },
    {
      id: 4,
      name: 'Welcome package',
      price: 200,
      description: 'Champagne and strawberries for everyone!'
    },
    {
      id: 5,
      name: 'Dinner de Luxe',
      price: 600,
      description: 'Leftover grilled onion omelet'
    },
    {
      id: 6,
      name: 'Pilot',
      price: 12000,
      description: 'Do it yourself!'
    }
  ],
  selected: []
}

const actions = {
  setSelectedExtras ({commit}, picked) {
    commit(types.SELECTED_EXTRAS, picked)
  }
}

const mutations = {
  [types.SELECTED_EXTRAS] (state, picked) {
    const all = state.all
    const sorted = []
    picked.forEach(pick => {
      const filtered = all.filter(single => single.id === pick)
      sorted.push(filtered[0])
    })
    state.selected = sorted
  }
}

const getters = {

}

const module = {
  state,
  actions,
  mutations,
  getters
}

export default module
