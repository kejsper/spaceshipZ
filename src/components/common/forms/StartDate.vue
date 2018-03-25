<template>
  <div class="start-date">
    <datepicker placeholder="Pick up date" v-model="startPicked" @input="setStartDate()"></datepicker>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
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
      const date = dateFormat(this.startPicked, 'yyyy-mm-dd')
      this.setStartRentalDate(date)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
