<template>
  <label class="form__label">Rental company
    <select class="form__select" name="rentalCompany" v-model="rentalCompany" @change="setCompany">
      <option value="Sixt">Sixt</option>
      <option value="Hertz">Hertz</option>
      <option value="Avis">Avis</option>
    </select>
  </label>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RentalCompany',
  props: ['company'],
  data () {
    return {
      rentalCompany: this.company || null
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

.form {
  &__label {
    @include flex(column, flex-start, flex-start);
    width: 100%;
    font-size: 0.85em;
    color: $color-violet;
    margin-bottom: 0.25em
  }
  &__select {
    width: 100%;
    margin: 0.75em 0;
    background-color: $color-white;
    border: none;
    border-bottom: 1px solid $color-pink;
    color: $color-violet;
    font-size: 0.85em;
    &:focus {
      outline: none;
    }
  }
}
</style>
