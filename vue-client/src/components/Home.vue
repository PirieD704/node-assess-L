<template>
  <div class="home">
    <hero-section :heroObj="heroObj" @open="showModal = true"></hero-section>
    <modal 
      v-if="showModal" 
      @close="showModal = false"
      :heroObj="heroObj">
    </modal>
    <div class="cardList">
      <product-card 
        v-for="product in productList" 
        :product="product" 
        :key="product.id"
        :page="page"
        @updateHeroCall="changeHero($event)"
      ></product-card>
    </div>
    <pagination-section 
      :page="page" 
      :pages="pages" 
      :productCount="productCount"
      :maxResults="maxResults"
      @updateProductsCall="getMoreProducts($event)"
    ></pagination-section>
    
  </div>
</template>

<script>
import Card from './Card.vue';
import Hero from './Hero.vue';
import Pagination from './Pagination.vue';
import Modal from './Modal.vue';

let self = this
export default {
  name: 'Home',
  created: async function(){
    console.log('Home::created'); //useful to understand lifecycle
    const response = await fetch("/api");
    const returnedData = await response.json();

    console.log("this")
    console.log(this) 
    this.$data.heroObj = returnedData.heroObj
    this.$data.productList = returnedData.products
    this.$data.page = returnedData.page
    this.$data.pages = returnedData.pages
    this.$data.productCount = returnedData.productCount
    this.$data.maxResults = returnedData.maxResults
  },
  data: function() {
    return {
      heroObj: {},
      productList: [],
      page: 1,
      pages: 8,
      productCount: 60,
      showModal: false,
      maxResults: 8
    }
  },
  components: {
    heroSection: Hero,
    productCard: Card,
    paginationSection: Pagination,
    modal: Modal
  },
  watch: {
    '$route' (e) {
      console.log("this is the watcher")
      console.log(e)
      console.log(e.params.page)
      this.getMoreProducts(e)
    }
  },
  methods: {
    changeHero(e) {
      this.$data.heroObj = this.$data.productList.find(product => product.pricing.productId == e)
      console.log(this.$data.productList);
    },
    getMoreProducts: async function (e) {
      const apiCall = "/api/page/" + e.params.page + "?maxResults=" + e.query.maxResults;
      console.log(apiCall);
      
      const response =  await fetch(apiCall);
      const returnedData =  await response.json();
      console.log("apiResponse")
      console.log(typeof(await returnedData.page));
      
      this.$data.productList = await returnedData.products
      this.$data.page = await returnedData.page
      this.$data.pages = await returnedData.pages
      this.$data.productCount = await returnedData.productCount
      this.$data.maxResults = await returnedData.maxResults
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

