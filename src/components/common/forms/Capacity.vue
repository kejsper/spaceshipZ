<template>
  <div class="slider">
    <label class="slider__label">Capacity</label>
    <vue-slider v-model="value" v-bind="options" @callback="showValue"></vue-slider>
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
      options: {
        min: 1,
        max: 4,
        interval: 1,
        tooltip: 'always',
        height: 3,
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

  &__label {
    @include flex(column, flex-start, flex-start);
    width: 100%;
    font-size: 16px;
    color: $color-violet;
    margin-bottom: 0.25em
  }
}
</style>
