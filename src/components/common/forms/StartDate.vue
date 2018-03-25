<template>
  <div class="hello">
    <datepicker placeholder="Pick up date" v-model="startPicked" @input="setStartDate()"></datepicker>
    {{startPicked}}
  </div>
</template>

<script>
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
    setStartDate () {
      console.log(this.startPicked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
