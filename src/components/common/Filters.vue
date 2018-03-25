<template>
  <form class="filters">
    <pick-up/>
    <drop-off/>
    <start-date/>
    <end-date/>
    <button @click="expandAdvanced != expandAdvanced">Advanced filters</button>
    <advanced-filters v-if="expandAdvanced"/>
    <search-button @click.native="goToList"/>
  </form>
</template>

<script>
import PickUp from './forms/PickUp'
import DropOff from './forms/DropOff'
import StartDate from './forms/StartDate'
import EndDate from './forms/EndDate'
import SearchButton from './forms/SearchButton'

export default {
  name: 'Filters',
  components: {
    PickUp,
    DropOff,
    StartDate,
    EndDate,
    SearchButton
  },
  data () {
    return {
      expandAdvanced: false
    }
  },
  methods: {
    goToList () {
      console.log('kliknięte')
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
