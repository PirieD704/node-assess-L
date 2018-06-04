<template>
  <div class="home">
    <h1>Home</h1>
    <h4>{{ this.$store.state.page }}</h4>
    <hero-section :heroObj="heroObj"></hero-section>
    <product-list :productList="productList"></product-list>
  </div>
</template>

<script>
import List from './List.vue';
import Hero from './Hero.vue';
import { eventBus } from '../main';

export default {
  name: 'Home',
  created: async function(){
    console.log('Home::created'); //useful to understand lifecycle
    console.log(eventBus);
    const response = await fetch("/api");
    const data = await response.json();

    this.$data.heroObj = data.heroObj
    this.$data.productList = data.products
  },
  data: function() {
    return {
      heroObj: {},
      productList: {}
    }
  },
  components: {
    heroSection: Hero,
    productList: List
  }
}
</script>
