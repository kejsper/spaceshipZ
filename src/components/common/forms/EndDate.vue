<template>
  <div class="end-date">
    <label class="end-date__label">Drop-off date</label>
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
.end-date {
  width: 100%;
  margin: 0.5em 0;

  &__label {
    width: 100%;
    font-size: 0.85em;
    color: $color-violet;
    margin-top: 0.5em
  }
}
</style>
