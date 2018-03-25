<template>
  <form class="filters">
    <pick-up/>
    <drop-off/>
    <start-date/>
    <end-date/>
    <button @click.prevent="expandAdvanced = !expandAdvanced">Advanced filters</button>
    <advanced-filters v-if="expandAdvanced"/>
    <search-button @click.native.prevent="goToList"/>
  </form>
</template>

<script>
import PickUp from './forms/PickUp'
import DropOff from './forms/DropOff'
import StartDate from './forms/StartDate'
import EndDate from './forms/EndDate'
import AdvancedFilters from './forms/AdvancedFilters'
import SearchButton from './forms/SearchButton'

import { mapState } from 'vuex'

export default {
  name: 'Filters',
  components: {
    PickUp,
    DropOff,
    StartDate,
    EndDate,
    AdvancedFilters,
    SearchButton
  },
  data () {
    return {
      expandAdvanced: false
    }
  },
  computed: {
    ...mapState(['activeFilters'])
  },
  methods: {
    goToList () {
      const link = {}
      link.path = 'spaceships'
      const query = {
        pickup: this.activeFilters.pickup,
        dropoff: this.activeFilters.dropoff
      }
      link.query = query
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.filters {
  @include flex (column, start, start);
  width: 100%;
}

</style>
