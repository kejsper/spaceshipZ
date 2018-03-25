<template>
  <div class="start-date">
    <datepicker placeholder="Pick up date" v-model="startPicked" @input="setStartDate()"></datepicker>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'PickUp',
  data () {
    return {
      startPicked: null
    }
  },
  components: {
    Datepicker
  },
  methods: {
    ...mapActions(['setStartRentalDate']),
    setStartDate () {
      this.setStartRentalDate(this.startPicked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
