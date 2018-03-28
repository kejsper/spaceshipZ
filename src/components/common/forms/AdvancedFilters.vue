<template>
  <div class="advanced-filters">
    <price-range :priceRangeMin="activeFilters.priceRangeMin" :priceRangeMax="activeFilters.priceRangeMax"/>
    <capacity :capacityMin="activeFilters.capacityMin" :capacityMax="activeFilters.capacityMax"/>
    <spaceship-type :activeType="activeFilters.type"/>
    <rental-company :company="activeFilters.rentalCompany"/>
  </div>
</template>

<script>
import PriceRange from './PriceRange'
import Capacity from './Capacity'
import SpaceshipType from './SpaceshipType'
import RentalCompany from './RentalCompany'

export default {
  name: 'AdvancedFilters',
  props: ['activeFilters'],
  components: {
    PriceRange,
    Capacity,
    SpaceshipType,
    RentalCompany
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.advanced-filters {
  @include flex(column, flex-start, flex-start);
  width: 100%;
}
</style>
