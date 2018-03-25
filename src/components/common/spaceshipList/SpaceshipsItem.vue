<template>
  <li>
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
