<template>
  <li>
    <img :src="spaceship.pictures[0].link" :alt="spaceship.pictures[0].alt"/>
    {{spaceship}}
  </li>
</template>

<script>
export default {
  name: 'SpaceshipsItem',
  props: ['spaceship']
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
