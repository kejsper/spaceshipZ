<template>
  <header class="top">
    <span class="icon__logo top__logo"></span>
    <h1 class="top__title">Spaceship Z</h1>
  </header>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';
.top {
  @include flex(row, flex-start, center);
  width: 100%;
  font-size: 14px;
  margin-bottom: 30px;

  &__logo {
    @include flex(row, center, center);
    font-size: 1.9em;
    color: $color-pink;
    background-color: $color-violet;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  &__title {
    margin: 0;
    padding-left: 5px;
    font-family: $font-futuristic;
    font-size: 1.75em;
    font-weight: 400;
    color: $color-violet;
  }
}
@media screen and (min-width: 768px) {
  .top {
    @include flex(row, center, center);
  }
}
</style>
