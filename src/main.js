import Vue from 'vue'
import App from './App.vue'

import VueWaterMark from './lib/index.js'
Vue.use(VueWaterMark)

new Vue({
  el: '#app',
  render: h => h(App)
})