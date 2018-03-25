<template>
  <select class="pick-up" name="pickUp" v-model="pickupSelect" @change="setPickupSelect">
    <option value="Wrocław">Wrocław</option>
    <option value="Mars">Mars</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PickUp',
  data () {
    return {
      pickupSelect: null
    }
  },
  methods: {
    ...mapActions(['setPickup']),
    setPickupSelect () {
      this.setPickup(this.pickupSelect)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
