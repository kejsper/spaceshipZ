<template>
  <select class="drop-off" name="dropOff" v-model="dropoffSelect" @change="setDropoffSelect">
    <option value="Wrocław">Wrocław</option>
    <option value="Mars">Mars</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DropOff',
  data () {
    return {
      dropoffSelect: null
    }
  },
  methods: {
    ...mapActions(['setDropoff']),
    setDropoffSelect () {
      this.setDropoff(this.dropoffSelect)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
