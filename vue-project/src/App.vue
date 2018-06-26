<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-counter
        :counter="counter"
    ></app-counter>
    <app-car
        :carName="carName"
        :carYear="carYear"
        :counter="counter"
        :changeNameToAudi="changeNameToAudi"
        @nameChanged="carName = $event"
        @counterUpdate="counter = $event"
    ></app-car>
  </div>
</template>

<script>
  import Car from './Car.vue'
  import Counter from './Counter.vue'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2016,
      counter: 0
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style lang="scss">

</style>
