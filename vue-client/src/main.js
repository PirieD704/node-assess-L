// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

import {store} from './store/store.js'

Vue.config.productionTip = false

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created: async function(){
    console.log('Home::created'); //useful to understand lifecycle

    const response = await fetch("/api");
    const data = await response.json();

    this.$store.dispatch("updateAll", data )
  },
  store,
  router,
  components: { App },
  template: '<App/>'
})
