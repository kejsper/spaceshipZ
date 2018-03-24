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
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
