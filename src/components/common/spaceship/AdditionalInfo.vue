<template>
  <section class="info">
    <h2 class="info__title">Additional features</h2>
  </section>
</template>

<script>
export default {
  name: 'AdditionalInfo'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.info {

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
}
</style>
