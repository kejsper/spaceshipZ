<template>
  <li>
    <img :src="spaceship.pictures[0].link" :alt="spaceship.pictures[0].alt"/>
    {{fromDate}}
    {{spaceship}}
  </li>
</template>

<script>
export default {
  name: 'SpaceshipsItem',
  props: ['spaceship'],
  computed: {
    fromDate () {
      const data = new Date(this.spaceship.available.from)
      console.log(data)
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
