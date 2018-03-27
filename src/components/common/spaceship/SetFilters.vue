<template>
    <router-link to="/" class="button">Please set filters to check out more options</router-link>
</template>

<script>
export default {
  name: 'AdditionalInfo'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.button {
  margin: 2em 0;
  font-size: 1.25em;
  color: $color-violet;
  font-weight: 500;
  &:focus, &:hover, &:link {
    color: $color-violet;
  }
}
</style>
