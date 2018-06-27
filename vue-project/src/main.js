import Vue from 'vue'
import App from './App.vue'
// global component
// import Car from './Car.vue'
//
// Vue.component('app-car', Car)

// export const eventEmitter = new Vue();

import ColorDirective from './color'
Vue.directive('colored', ColorDirective);

new Vue({
  el: '#app',
  render: h => h(App)
});


