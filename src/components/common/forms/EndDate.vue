<template>
  <div class="end-date">
    {{da}}
    <label class="end-date__label">Drop-off date</label>
    <datepicker placeholder="Drop off date" :disabled="disabled" v-model="endPicked" @input="setEndDate()"></datepicker>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import dateFormat from 'dateformat'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'PickUp',
  props: ['today', 'start'],
  data () {
    return {
      endPicked: null,
      disabled: {
        to: this.start || this.today
      }
    }
  },
  components: {
    Datepicker
  },
  computed: {
    da () {
      console.log('start', this.start)
      console.log('today', this.today)
      console.log(this.start || this.today || null)
      return this.start || this.today || null
    }
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
