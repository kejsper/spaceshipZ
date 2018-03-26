<template>
  <label class="form__label">Spaceship type
    <select class="form__select" name="spaceshipType" v-model="type" @change="setSpaceshipType">
      <option value="Economy">Economy</option>
      <option value="Standard">Standard</option>
      <option value="Luxury">Luxury</option>
    </select>
  </label>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SpaceshipType',
  data () {
    return {
      type: null
    }
  },
  methods: {
    ...mapActions(['setType']),
    setSpaceshipType () {
      this.setType(this.type)
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
