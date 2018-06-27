<template>
  <div>
    <!--<app-counter></app-counter>-->
    <!--<app-car>-->
        <!--<h2 slot="title">{{carName}}</h2>-->
        <!--<p slot="text">Lorem ipsum dolor.</p>-->
    <!--</app-car>-->

      <h3 v-colored:background.font="'green'">{{ title }}</h3>
      <h3 v-colored:color.delay.font="'blue'">{{ title }}</h3>




  </div>
</template>

<script>
  import Car from './Car.vue'
  import Counter from './Counter.vue'

export default {
    data() {
      return {
        // carName: 'Mazda',
        title: 'Directive in Vue',
        visible: true
      }
    },
  // components: {
  //   appCar: Car,
  //   appCounter: Counter
  // }
}
</script>

<style scoped lang="scss" >
    h2 {
        color: blue;
    }
</style>
