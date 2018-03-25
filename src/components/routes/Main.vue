<template>
  <section class="main">
    <h2 class="main__title">Search spaceships</h2>
    <filters/>
  </section>
</template>

<script>
import Filters from '../common/Filters'

export default {
  name: 'Main',
  components: {
    Filters
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.main {
  @include flex(column, flex-start, flex-start);
  font-size: 18px;

  &__title {
    font-family: $font-normal;
    font-size: 1em;
    color: $color-violet;
    font-weight: bold;
  }
}

</style>
