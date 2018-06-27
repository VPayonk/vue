import Vue from 'vue'
import App from './App.vue'
import Filter from './filter_mixin/App.vue'
// global component
// import Car from './Car.vue'
//
// Vue.component('app-car', Car)

// export const eventEmitter = new Vue();

// Global directive
import ColorDirective from './color'
Vue.directive('colored', ColorDirective);

//Global filter
Vue.filter('uppercase', value => value.toUpperCase());

new Vue({
  el: '#app',
  render: h => h(Filter)
});


