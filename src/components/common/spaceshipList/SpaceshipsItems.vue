<template>
  <section class="spaceships">
    <h2 class="spaceships__title">Search results ({{availableSpaceships.length}})</h2>
    <ul class="spaceship-list">
      <spaceships-item v-for="(spaceship, key) in availableSpaceships" :key="key" :spaceship="spaceship" :activeFilters="activeFilters"/>
    </ul>
  </section>
</template>

<script>
import SpaceshipsItem from './SpaceshipsItem'
export default {
  name: 'SpaceshipsItems',
  components: {
    SpaceshipsItem
  },
  props: ['availableSpaceships', 'activeFilters']
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.spaceships {
  @include flex(column, flex-start, flex-start);
  width: 100%;
  max-width: 650px;
  align-self: center;

  &__title {
    font-family: $font-normal;
    font-size: 1.1em;
    color: $color-violet;
    font-weight: bold;
  }
}
.spaceship-list {
  @include flex(column, flex-start, flex-start);
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
