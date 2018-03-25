<template>
  <select class="company" name="rentalCompany" v-model="rentalCompany" @change="setCompany">
    <option value="Sixt">Sixt</option>
    <option value="Hertz">Hertz</option>
    <option value="Avis">Avis</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RentalCompany',
  data () {
    return {
      rentalCompany: null
    }
  },
  methods: {
    ...mapActions(['setRentalCompany']),
    setCompany () {
      this.setRentalCompany(this.rentalCompany)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

</style>
