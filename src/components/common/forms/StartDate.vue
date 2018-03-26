<template>
  <div class="start-date">
    {{end}}
    <label class="start-date__label">Pick-up date</label>
    <datepicker placeholder="Pick up date" v-model="startPicked" :disabled="disabled" @input="setStartDate()"></datepicker>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
import { mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'PickUp',
  props: ['today', 'start', 'end'],
  data () {
    return {
      startPicked: null,
      disabled: {
        to: this.today,
        from: this.end || null
      }
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
  },
  updated () {
    console.log('teraz')
    this.disabled.from = this.end
    this.startPicked = this.start
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';
.start-date {
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
