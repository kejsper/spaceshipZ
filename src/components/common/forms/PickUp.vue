<template>
  <label class="form__label">Picking up from *
    <select class="form__select" name="pickUp" v-model="pickupSelect" @change="setPickupSelect">
      <option value="Wrocław">Wrocław</option>
      <option value="Mars">Mars</option>
    </select>
  </label>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PickUp',
  props: ['pickup'],
  data () {
    return {
      pickupSelect: this.pickup || null
    }
  },
  methods: {
    ...mapActions(['setPickup']),
    setPickupSelect () {
      this.setPickup(this.pickupSelect)
    }
  },
  updated () {
    this.pickupSelect = this.pickup
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
