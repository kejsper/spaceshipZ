<template>
  <ul>
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

</style>
