<template>
  <section class="single-spaceship">
    <img :src="photo" :alt="photoDescription" class="single-spaceship__image">
    <h2 class="single-spaceship__title">{{ spaceship.name }}</h2>
    <h3 class="single-spaceship__detail">Capacity: {{spaceship.capacity}}</h3>
    <h3 class="single-spaceship__detail">Type: {{spaceship.type}}</h3>
    <h3 class="single-spaceship__detail">Rental company: {{spaceship.company}}</h3>
    <p class="single-spaceship__description">{{spaceship.description}}</p>
  </section>
</template>

<script>
export default {
  name: 'Spaceship',
  props: ['spaceship'],
  computed: {
    photo () {
      if (this.spaceship.pictures && this.spaceship.pictures[0]) {
        return '../' + this.spaceship.pictures[0].link
      }
    },
    photoDescription () {
      if (this.spaceship.pictures && this.spaceship.pictures[0]) {
        return this.spaceship.pictures[0].description
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.single-spaceship {
  @include flex(column, flex-start, flex-start);
  width: 100%;
  max-width: 650px;

  &__title {
    font-family: $font-normal;
    font-size: 1.25em;
    color: $color-violet;
    font-weight: 700;
  }
  &__image {
    align-self: center;
    width: 90%;
    max-width: 500px;
    height: auto;
  }
  &__detail {
    font-size: 1em;
    font-weight: 500;
    margin: 0.5em 0;
  }
  &__description {
    margin: 0.5em 0;
    font-size: 0.85em;
    font-weight: 300;
  }
}
</style>
