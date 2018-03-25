<template>
  <div>
    <price-range/>
    <capacity/>
    <spaceship-type/>
    <rental-company/>
  </div>
</template>

<script>
import PriceRange from './PriceRange'
import Capacity from './Capacity'
import SpaceshipType from './SpaceshipType'
import RentalCompany from './RentalCompany'

export default {
  name: 'AdvancedFilters',
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
</style>
