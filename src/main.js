import Vue from 'vue'
import App from './App.vue'

import tagInputer from './lib/index'
Vue.use(tagInputer)

new Vue({
  el: '#app',
  render: h => h(App)
})
