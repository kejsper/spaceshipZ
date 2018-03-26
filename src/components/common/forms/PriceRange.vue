<template>
  <div class="slider">
    <vue-slider v-model="value" :min="min" :max="max" :interval="interval" @drag-end="showValue"></vue-slider>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import vueSlider from 'vue-slider-component'

export default {
  name: 'PriceRange',
  components: {
    vueSlider
  },
  data () {
    return {
      value: [300, 500],
      min: 300,
      max: 500,
      interval: 100,
      tooltip: 'always'
    }
  },
  methods: {
    ...mapActions(['setPriceRange']),
    showValue () {
      this.setPriceRange(this.value)
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
