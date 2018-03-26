<template>
  <section class="spaceships">
    <h2 class="spaceships__title">Search results</h2>
    <spaceships-items :availableSpaceships="availableSpaceships"/>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SpaceshipsItems from '../common/spaceshipList/SpaceshipsItems'

export default {
  name: 'SpaceshipsList',
  components: {
    SpaceshipsItems
  },
  computed: {
    ...mapGetters(['availableSpaceships'])
  },
  methods: {
    ...mapActions(['setAvailableSpaceships'])
  },
  mounted () {
    this.setAvailableSpaceships(this.$route.query)
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
