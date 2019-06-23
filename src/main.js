import Vue from 'vue'
import App from './App.vue'
import Snotify from 'vue-snotify';

Vue.use(Snotify, {toast: {timeout: 3000}})

require('bootstrap')

new Vue({
  el: '#app',
  render: h => h(App)
})
