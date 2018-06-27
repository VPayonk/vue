<template>
  <div>
    <!--<app-counter></app-counter>-->
    <!--<app-car>-->
        <!--<h2 slot="title">{{carName}}</h2>-->
        <!--<p slot="text">Lorem ipsum dolor.</p>-->
    <!--</app-car>-->

      <h3 v-colored v-if="visible">{{ title }}</h3>

      <button @click="visible = !visible">Visible</button>
      <button @click="title = 'New title'">Change title</button>
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
