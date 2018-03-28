<template>
  <div class="spaceships__wrapper">
    <h2 class="spaceships__title">Search criteria</h2>
    <p>
      Flying from {{ activeFilters.pickup }} ({{ activeFilters.startDate }}).
      Flying to {{ activeFilters.dropoff }} ({{activeFilters.endDate}}).
    </p>
    <button @click.prevent="expandAdvanced = !expandAdvanced" class="spaceships__button">Show filters</button>
    <filters v-if="expandAdvanced" :activeFilters="activeFilters"/>
  </div>
</template>

<script>
import Filters from '../Filters'

export default {
  name: 'SearchCriteria',
  props: ['activeFilters'],
  components: {
    Filters
  },
  data () {
    return {
      expandAdvanced: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';
.spaceships {
  &__title {
    font-family: $font-normal;
    font-size: 1.1em;
    color: $color-violet;
    font-weight: bold;
  }
  &__wrapper {
    @include flex(column, flex-start, flex-start);
    width: 100%;
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
