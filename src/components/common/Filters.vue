<template>
  <div class="filters">
    <search-button @click.native="goToList"/>
  </div>
</template>

<script>
import SearchButton from './forms/SearchButton'

export default {
  name: 'Filters',
  components: {
    SearchButton
  },
  methods: {
    goToList () {
      console.log('kliknięte')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.filters {
  @include flex (column, start, start);
  width: 100%;
}

</style>
