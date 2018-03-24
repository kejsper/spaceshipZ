import Vue from 'vue'
import Vuex from 'vuex'

// Module states
import spaceships from './modules/spaceships'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spaceships
  }
})
