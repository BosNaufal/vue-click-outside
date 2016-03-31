
import Vue from 'vue';
import VueClickOutSide from './vue-click-outside.js';

Vue.directive('click-outside', VueClickOutSide)

import App from './app.vue';

new Vue({
  el: 'body',
  components: { App }
})
