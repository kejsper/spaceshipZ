<template>
  <section class="spaceships">
    <search-criteria :activeFilters="activeFilters" v-if="activeFilters.pickup && activeFilters.startDate && activeFilters.dropoff && activeFilters.endDate"/>
    <spaceships-items :availableSpaceships="availableSpaceships" :activeFilters="activeFilters"/>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import SpaceshipsItems from '../common/spaceshipList/SpaceshipsItems'
import SearchCriteria from '../common/spaceshipList/SearchCriteria'

export default {
  name: 'SpaceshipsList',
  components: {
    SpaceshipsItems,
    SearchCriteria
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
  @include flex(column, flex-start, flex-start);
  width: 100%;
  max-width: 650px;

}

</style>
