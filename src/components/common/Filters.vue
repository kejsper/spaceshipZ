<template>
  <form class="filters">
    <pick-up/>
    <drop-off/>
    <start-date/>
    <end-date/>
    <button @click.prevent="expandAdvanced = !expandAdvanced" class="filters__button">Advanced filters</button>
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
      // dumb form validation
      if (!this.activeFilters.pickup || !this.activeFilters.startDate || !this.activeFilters.endDate) return
      // creating link to push
      const link = {}
      link.path = 'spaceships'
      const query = {
        pickup: this.activeFilters.pickup,
        dropoff: this.activeFilters.dropoff,
        startDate: this.activeFilters.startDate,
        endDate: this.activeFilters.endDate
      }
      // checking if additional filters were set
      if (this.activeFilters.rentalCompany) {
        query.rentalCompany = this.activeFilters.rentalCompany
      }
      if (this.activeFilters.type) {
        query.type = this.activeFilters.type
      }
      if (this.activeFilters.capacity && this.activeFilters.capacity.min && this.activeFilters.capacity.max) {
        query.capacityMin = this.activeFilters.capacity.min
        query.capacityMax = this.activeFilters.capacity.max
      }
      if (this.activeFilters.priceRange && this.activeFilters.priceRange.min && this.activeFilters.priceRange.max) {
        query.priceRangeMin = this.activeFilters.priceRange.min
        query.priceRangeMax = this.activeFilters.priceRange.max
      }
      link.query = query
      // pushing full route
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.filters {
  @include flex (column, flex-start, flex-start);
  width: 100%;
  max-width: 550px;

  &__button {
    align-self: center;
    margin: 1em 0;
    background-color: transparent;
    color: $color-violet;
    font-weight: 500;
    font-size: 0.75em;
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
  }
}

</style>
