<template>
  <section class="spaceships">
    <h2 class="spaceships__title" v-if="activeFilters.pickup && activeFilters.startDate && activeFilters.dropoff && activeFilters.endDate">Search criteria</h2>
    <p v-if="activeFilters.pickup && activeFilters.startDate && activeFilters.dropoff && activeFilters.endDate">
      Flying from {{ activeFilters.pickup }} ({{ activeFilters.startDate }}).
      Drop-off planned in {{ activeFilters.dropoff }} ({{activeFilters.endDate}}).
    </p>

    <h2 class="spaceships__title">Search results ({{availableSpaceships.length}})</h2>
    <spaceships-items :availableSpaceships="availableSpaceships" :activeFilters="activeFilters"/>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import SpaceshipsItems from '../common/spaceshipList/SpaceshipsItems'

export default {
  name: 'SpaceshipsList',
  components: {
    SpaceshipsItems
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
}

</style>
