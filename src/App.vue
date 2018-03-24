<template>
  <div id="app">
    <top/>
    <router-view/>
  </div>
</template>

<script>
import Top from './components/common/Top.vue'

export default {
  name: 'App',
  components: {
    Top
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
