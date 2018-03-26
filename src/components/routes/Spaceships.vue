<template>
  <section class="spaceship">
    <spaceship :spaceship="selectedSpaceship"/>
    <additional-info/>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Spaceship from '../common/spaceship/Spaceship.vue'
import AdditionalInfo from '../common/spaceship/AdditionalInfo.vue'

export default {
  name: 'Spaceships',
  components: {
    Spaceship,
    AdditionalInfo
  },
  computed: {
    ...mapGetters(['selectedSpaceship'])
  },
  methods: {
    ...mapActions(['setSingleSpaceship']),
    setSpaceship (id) {
      this.setSingleSpaceship(~~id)
    }
  },
  mounted () {
    this.setSpaceship(this.$route.params.id)
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
