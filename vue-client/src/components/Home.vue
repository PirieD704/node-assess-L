<template>
  <div class="home">
    <hero-section :heroObj="heroObj"></hero-section>
    <div class="cardList">
      <product-card 
        v-for="product in productList" 
        :product="product" 
        :key="product.id"
        :page="page"
        @updateHeroCall="changeHero($event)"
      ></product-card>
    </div>
    <pagination-section :page="page" :pages="pages" :productCount="productCount"></pagination-section>
    
  </div>
</template>

<script>
// store of how to invoke state in case switch to it later
//    <h4>{{ this.$store.state.page }}</h4>

import Card from './Card.vue';
import Hero from './Hero.vue';
import Pagination from './Pagination.vue';
//import { eventBus } from '../main';

export default {
  name: 'Home',
  created: async function(){
    console.log('Home::created'); //useful to understand lifecycle
    //console.log(eventBus);
    const response = await fetch("/api");
    const data = await response.json();

    this.$data.heroObj = data.heroObj
    this.$data.productList = data.products
    this.$data.page = data.page
    this.$data.pages = data.pages
    this.$data.productCount = data.productCount
  },
  data: function() {
    return {
      heroObj: {},
      productList: [],
      page: 1,
      pages: 8,
      productCount: 60
    }
  },
  components: {
    heroSection: Hero,
    productCard: Card,
    paginationSection: Pagination
  },
  methods: {
    changeHero(e) {
      this.$data.heroObj = this.$data.productList.find(product => product.pricing.productId == e)
    }
  }
}
</script>

<style>
.cardList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; }
</style>

