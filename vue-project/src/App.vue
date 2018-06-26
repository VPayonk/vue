<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-car
        :carName="carName"
        :carYear="carYear"
        :changeNameToAudi="changeNameToAudi"
        @nameChanged="carName = $event"
    ></app-car>
  </div>
</template>

<script>
  import Car from './Car.vue'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2016
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car
  }
}
</script>

<style lang="scss">

</style>
