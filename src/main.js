import Vue from 'vue'
import App from './app/app.vue'

const css = require('./main.scss');

new Vue({
  el: '#app',
  render: h => h(App)
})
