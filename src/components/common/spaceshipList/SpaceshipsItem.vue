<template>
  <li class="spaceship">
    <div class="spaceship__images">
      <img class="spaceship__image"
            :src="spaceship.pictures[0].link"
            :alt="spaceship.pictures[0].description"/>
      <img class="spaceship__company"
            :src="'../../../../static/images/' + spaceship.company + '.png'"
            :alt="spaceship.company"/>
    </div>
    <article class="spaceship__data">
      <h2 class="spaceship__name">{{ spaceship.name }}</h2>
      <h3 class="spaceship__detail">Capacity: {{ spaceship.capacity }}</h3>
      <h3 class="spaceship__detail">Type: {{ spaceship.type }}</h3>
      <h3 class="spaceship__detail">Rental company: {{ spaceship.company }}</h3>
      <p class="spaceship__description"> {{ spaceship.shortDescription }}</p>
      <div class="spaceship__summary">
        <div class="spapceship__prices">
          <p class="spaceship__price">{{ spaceship.price }}/day</p>
          <p class="spaceship__total" v-if="totalPrice">{{ totalPrice }} total</p>
        </div>
        <button class="spaceship__button" @click.prevent="goToSingleSpaceship(spaceship.id)">More</button>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  name: 'SpaceshipsItem',
  props: ['spaceship', 'activeFilters'],
  computed: {
    fromDate () {
      const data = new Date(this.spaceship.available.from)
      return data
    },
    totalPrice () {
      const { startDate, endDate } = this.activeFilters
      if (startDate && endDate) {
        // switching dates to ms
        const start = new Date(startDate).getTime()
        const end = new Date(endDate).getTime()
        // getting value of 1 day in ms
        const oneDay = 1000 * 60 * 60 * 24
        // counting difference in ms between days
        const difference = Math.abs(start - end)
        // returning number of days * spaceship price per day
        return Math.ceil(difference / oneDay) * ~~this.spaceship.price
      } else {
        return false
      }
    }
  },
  methods: {
    goToSingleSpaceship (id) {
      const link = {}
      link.name = 'spaceships'
      link.params = {id: id}
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.spaceship {
  @include flex(row, flex-start, flex-start);
  width: 100%;
  padding: 10px 10px;
  background-color: $color-light-grey;
  margin-bottom: 0.65em;

  &__images {
    @include flex(column, flex-start, center);
    width: 30%;
    min-width: 150px;
  }
  &__image {
    width: 80%;
    height: auto;
    margin: 1.5em 0;
  }
  &__company {
    width: 55px;
    height: auto;
  }
  &__name {
    font-size: 1.4em;
    font-weight: 500;
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
  &__summary {
    @include flex(row, flex-end, center);
  }
  &__price {
    margin: 0.25em 0.5em;
    font-size: 1em;
  }
  &__total {
    margin: 0.25em 0.5em;
    font-size: 0.9m;
    font-weight: 300;
  }
  &__button {
    background-color: $color-violet;
    color: $color-white;
    font-size: 1.25em;
    font-weight: 500;
    padding: 0.25em 1em;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
      border: none;
    }
  }
}
</style>
