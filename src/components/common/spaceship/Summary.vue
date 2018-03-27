<template>
  <section class="summary">
    <h2 class="summary__title">Summary:</h2>
    <table v-if="spaceship && totalPrice" class="summary__table">
      <tbody>
        <tr>
          <td>{{ spaceship.name }}</td>
          <td>{{ totalPrice }}</td>
        </tr>
        <tr v-if="extras" v-for="(extra, key) in extras" :key="key">
          <td>{{ extra.name }}</td>
          <td>{{ extra.price }}</td>
        </tr>
        <tr class="summary__total">
          <td class="summary__total">TOTAL:</td>
          <td class="summary__total">{{ totalOrderCost }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Summary',
  props: ['extras', 'activeFilters', 'spaceship'],
  computed: {
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
    },
    totalOrderCost () {
      if (this.extras && this.extras.length >= 1) {
        const extrasPrices = this.extras.map(extra => extra.price).reduce((previous, current) => previous + current)
        return this.totalPrice + extrasPrices
      } else {
        return this.totalPrice
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';
@import '../../../assets/scss/mixins';

.summary {
  @include flex(column, flex-start, center);
  width: 100%;
  max-width: 650px;

  &__title {
    font-family: $font-normal;
    font-size: 1.25em;
    color: $color-violet;
    font-weight: 700;
  }
  &__table {
    width: 350px;
    font-size: 0.9em;
    font-weight: 300;
  }
  &__total {
    font-weight: 400;
    border-top: 1px solid $color-violet;
  }
}
</style>
