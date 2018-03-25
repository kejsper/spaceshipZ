import Vue from 'vue'
import Vuex from 'vuex'

// Module states
import spaceships from './modules/spaceships'
import extras from './modules/extras'
import activeFilters from './modules/activeFilters'
import filters from './modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spaceships,
    extras,
    activeFilters,
    filters
  }
})
