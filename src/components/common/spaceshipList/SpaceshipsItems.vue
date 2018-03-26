<template>
  <ul class="spaceship-list">
    <spaceships-item v-for="(spaceship, key) in availableSpaceships" :key="key" :spaceship="spaceship"/>
  </ul>
</template>

<script>
import SpaceshipsItem from './SpaceshipsItem'
export default {
  name: 'SpaceshipsItems',
  components: {
    SpaceshipsItem
  },
  props: ['availableSpaceships']
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';
.spaceship-list {
  @include flex(column, flex-start, flex-start);
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
