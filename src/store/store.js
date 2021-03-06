import Vue from 'vue'
import Vuex from 'vuex'

// Module states
import spaceships from './modules/spaceships'
import extras from './modules/extras'
import activeFilters from './modules/activeFilters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spaceships,
    extras,
    activeFilters
  }
})
