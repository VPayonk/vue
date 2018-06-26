import Vue from 'vue'
import App from './App.vue'
// global component
// import Car from './Car.vue'
//
// Vue.component('app-car', Car)

new Vue({
  el: '#app',
  render: h => h(App)
});


export const eventEmiter = new Vue()