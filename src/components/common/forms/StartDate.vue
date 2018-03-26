<template>
  <div class="start-date">
    <label class="start-date__label">Pick-up date</label>
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
