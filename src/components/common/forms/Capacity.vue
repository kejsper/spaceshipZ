<template>
  <div class="slider">
    <vue-slider v-model="value" :min="min" :max="max" :interval="interval" @drag-end="showValue" @callback="showValue"></vue-slider>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import vueSlider from 'vue-slider-component'

export default {
  name: 'Capacity',
  components: {
    vueSlider
  },
  data () {
    return {
      value: [1, 4],
      min: 1,
      max: 4,
      interval: 1,
      tooltip: 'always'
    }
  },
  methods: {
    ...mapActions(['setCapacity']),
    showValue () {
      this.setCapacity(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';
.slider {
  display: block;
  width: 100%;
  margin: 1.75em 0 1em 0;
}
</style>
