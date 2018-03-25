<template>
  <div class="end-date">
    <datepicker placeholder="Drop off date" v-model="endPicked" @input="setEndDate()"></datepicker>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import dateFormat from 'dateformat'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'PickUp',
  data () {
    return {
      endPicked: null
    }
  },
  components: {
    Datepicker
  },
  methods: {
    ...mapActions(['setEndRentalDate']),
    setEndDate () {
      const date = dateFormat(this.endPicked, 'yyyy-mm-dd')
      this.setEndRentalDate(date)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
