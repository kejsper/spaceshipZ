<template>
  <div class="slider">
    <label class="slider__label">Price range</label>
    <vue-slider v-model="value" v-bind="options" @drag-end="showValue"></vue-slider>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import vueSlider from 'vue-slider-component'

export default {
  name: 'PriceRange',
  props: ['priceRangeMin', 'priceRangeMax'],
  components: {
    vueSlider
  },
  data () {
    return {
      value: [this.priceRangeMin, this.priceRangeMax],
      options: {
        min: 300,
        max: 500,
        interval: 100,
        tooltip: 'always',
        height: 2,
        dotSize: 12,
        processStyle: {
          'backgroundColor': '#E23694'
        },
        style: {
          'marginTop': '32px'
        }
      }
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
  margin: 0.75em 0 1em 0;

  &__label {
    @include flex(column, flex-start, flex-start);
    width: 100%;
    font-size: 16px;
    color: $color-violet;
    margin-bottom: 0.25em
  }
}
</style>
