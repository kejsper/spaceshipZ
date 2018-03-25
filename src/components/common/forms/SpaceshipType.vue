<template>
  <select class="type" name="spaceshipType" v-model="type" @change="setSpaceshipType">
    <option value="Economy">Economy</option>
    <option value="Standard">Standard</option>
    <option value="Luxury">Luxury</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SpaceshipType',
  data () {
    return {
      type: null
    }
  },
  methods: {
    ...mapActions(['setType']),
    setSpaceshipType () {
      this.setType(this.type)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
