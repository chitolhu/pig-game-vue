import Vue from 'vue'
import App from './App.vue'
// import the vuex store
import { store } from './store'

import '../node_modules/bulma/css/bulma.css'


new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
