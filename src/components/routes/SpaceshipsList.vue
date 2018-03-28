<template>
  <section class="spaceships">
    <div classs="spaceships__wrapper" v-if="activeFilters.pickup && activeFilters.startDate && activeFilters.dropoff && activeFilters.endDate">
      <h2 class="spaceships__title">Search criteria</h2>
      <p>
        Flying from {{ activeFilters.pickup }} ({{ activeFilters.startDate }}).
        Flying to {{ activeFilters.dropoff }} ({{activeFilters.endDate}}).
      </p>
      <button @click.prevent="expandAdvanced = !expandAdvanced" class="spaceships__button">Advanced filters</button>
      <advanced-filters v-if="expandAdvanced" :activeFilters="activeFilters"/>
    </div>
    <h2 class="spaceships__title">Search results ({{availableSpaceships.length}})</h2>
    <spaceships-items :availableSpaceships="availableSpaceships" :activeFilters="activeFilters"/>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import SpaceshipsItems from '../common/spaceshipList/SpaceshipsItems'
import AdvancedFilters from '../common/forms/AdvancedFilters'

export default {
  name: 'SpaceshipsList',
  components: {
    SpaceshipsItems,
    AdvancedFilters
  },
  data () {
    return {
      expandAdvanced: false
    }
  },
  computed: {
    ...mapGetters(['availableSpaceships']),
    ...mapState(['activeFilters'])
  },
  methods: {
    ...mapActions(['setAvailableSpaceships'])
  },
  mounted () {
    this.setAvailableSpaceships(this.activeFilters)
  },
  watch: {
    'activeFilters.type' () {
      this.setAvailableSpaceships(this.activeFilters)
    },
    'activeFilters.rentalCompany' () {
      this.setAvailableSpaceships(this.activeFilters)
    },
    'activeFilters.capacityMin' () {
      this.setAvailableSpaceships(this.activeFilters)
    },
    'activeFilters.capacityMax' () {
      this.setAvailableSpaceships(this.activeFilters)
    },
    'activeFilters.priceRangeMin' () {
      this.setAvailableSpaceships(this.activeFilters)
    },
    'activeFilters.priceRangeMax' () {
      this.setAvailableSpaceships(this.activeFilters)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.spaceships {
  &__title {
    font-family: $font-normal;
    font-size: 1.1em;
    color: $color-violet;
    font-weight: bold;
  }
  &__wrapper{
    @include flex(column, flex-start, flex-start);
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
