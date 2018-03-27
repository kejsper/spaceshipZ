<template>
  <section class="spaceship">
    <spaceship :spaceship="selectedSpaceship"/>
    <additional-info v-if="isFiltered" :activeFilters="activeFilters" :additionalFeatures="extras.all"/>
    <Summary v-if="isFiltered" :activeFilters="activeFilters" :extras="extras.selected" :spaceship="selectedSpaceship"/>
    <set-filters v-else/>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Spaceship from '../common/spaceship/Spaceship.vue'
import AdditionalInfo from '../common/spaceship/AdditionalInfo.vue'
import SetFilters from '../common/spaceship/SetFilters.vue'
import Summary from '../common/spaceship/Summary.vue'

export default {
  name: 'Spaceships',
  components: {
    Spaceship,
    AdditionalInfo,
    SetFilters,
    Summary
  },
  computed: {
    ...mapGetters(['selectedSpaceship']),
    ...mapState(['activeFilters', 'extras']),
    isFiltered () {
      const { startDate, endDate, pickup } = this.activeFilters
      return startDate && endDate && pickup
    }
  },
  methods: {
    ...mapActions(['setSingleSpaceship', 'setSelectedExtras']),
    setSpaceship (id) {
      this.setSingleSpaceship(~~id)
    },
    setExtras (picked) {
      this.setSelectedExtras(picked)
    }
  },
  mounted () {
    this.setSpaceship(this.$route.params.id)
  },
  watch: {
    'activeFilters.pickedFeatures' () {
      this.setExtras(this.activeFilters.pickedFeatures)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.spaceship {
    @include flex(column, flex-start, center);
    width: 100%;

    &__title {
    font-family: $font-normal;
    font-size: 1.1em;
    color: $color-violet;
    font-weight: bold;
  }
}
</style>
