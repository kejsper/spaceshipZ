<template>
  <section class="info">
    <h2 class="info__title">Additional features:</h2>
    <ul class="info__list">
      <additional-feature v-for="(feature, key) in additionalFeatures" :key="key" :feature="feature"/>
    </ul>
  </section>
</template>

<script>
import AdditionalFeature from './AdditionalFeature.vue'

export default {
  name: 'AdditionalInfo',
  props: ['additionalFeatures'],
  components: {
    AdditionalFeature
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.info {
  @include flex(column, flex-start, center);
  width: 100%;
  max-width: 650px;

  &__title {
    font-family: $font-normal;
    font-size: 1.25em;
    color: $color-violet;
    font-weight: 700;
  }
  &__detail {
    font-size: 1em;
    font-weight: 500;
    margin: 0.5em 0;
  }
  &__description {
    margin: 0.5em 0;
    font-size: 0.85em;
    font-weight: 300;
  }
  &__list {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
