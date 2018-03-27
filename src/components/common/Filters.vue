<template>
  <form class="filters">
    <pick-up :pickup="activeFilters.pickup"/>
    <drop-off :dropoff="activeFilters.dropoff"/>
    <start-date :today="today" :start="start" :end="end"/>
    <end-date :today="today" :start="start"/>
    <button @click.prevent="expandAdvanced = !expandAdvanced" class="filters__button">Advanced filters</button>
    <advanced-filters v-if="expandAdvanced" :activeFilters="activeFilters"/>
    <span class="filters__alert" v-if="isValidated">Please fill all necessary fields.</span>
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
      expandAdvanced: false,
      isValidated: false
    }
  },
  computed: {
    ...mapState(['activeFilters']),
    today () {
      const today = new Date()
      // today.setDate(today.getDate() - 1)
      return today
    },
    start () {
      return new Date(this.activeFilters.startDate)
    },
    end () {
      return new Date(this.activeFilters.endDate)
    }
  },
  methods: {
    goToList () {
      const { pickup, startDate, endDate } = this.activeFilters
      // dumb form validation
      if (!pickup || !startDate || !endDate) {
        this.isValidated = true
        return
      }
      // creating link to push
      const link = { path: 'spaceships' }
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

  &__alert {
    align-self: center;
    color: $color-red;
    font-size: 0.75em;
    margin: 0.5em 0;
  }
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
