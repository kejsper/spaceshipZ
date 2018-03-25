<template>
  <button class="search-button">Search</button>
</template>

<script>
export default {
  name: 'SearchButton'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.search-button {
  min-width: 200px;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  background-color: $color-black;
  font-size: 18px;
  font-family: $font-normal;
  color: $color-white;
  font-weight: 500;
  align-self: center;
  &:focus {
    outline: none;
    border: none;
  }
}
</style>
