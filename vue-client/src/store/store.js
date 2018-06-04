import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {
    heroObj: "washer machine",
    products: ["stuff","moreStuff"],
    page: 0,
    pages: 0,
    productCount: 0
  },
  mutations: {
    updateHero (hero) {
      state.heroObj = hero
    },
    updateProducts (products) {
      state.products = products
    },
    updateAll (obj) {
      console.log("test")
      console.log(obj)
      state = obj
    }
  },
  actions: {
    updateAll (context) {
      context.commit('updateAll', obj)
    }
  }
})
