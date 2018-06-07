<template>
  <div class="card" :prop="product">
    <div class="cardWrapper">
      <div class="cardImageWrapper">
        <img :src="product.imageUrls.sm" alt="">
      </div>
      <div class="textAndPriceWrapper">
        <div class="cardText">
          <p>{{product.brand}} {{product.description}}</p>
        </div>
        <div class="cardPrice">
          <p>{{product.pricing.price.selling.replace(/(\.\d+)/g, ".00")}}</p>
        </div>
        <button type="button" @click="updateHero(product.pricing.productId)">VIEW MORE</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    product: {
      type: Object
    },
    page: {
      type: Number
    }
  },
  methods: {
    updateHero(newHeroId) {
      console.log(newHeroId);
      this.$emit("updateHeroCall", newHeroId)
    }
  }
}
</script>


<style>
.card {
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  border: 1px solid #cccccc;
  width: calc(25% - 20px);
  text-align: center;
  margin: 10px 0px; }
  .card .cardWrapper {
    padding: 20px; }
    .card .cardWrapper img {
      max-width: 100px;
      max-height: 100px; }
    .card .cardWrapper .textAndPriceWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between; }
      .card .cardWrapper .textAndPriceWrapper .cardText {
        font-size: 14px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 58px; }
      .card .cardWrapper .textAndPriceWrapper .cardPrice {
        font-size: 16px;
        text-align: left; }
      .card .cardWrapper .textAndPriceWrapper button {
        border: 1px solid #cccccc;
        font-size: 14px;
        color: #0471af;
        width: 100%;
        height: 44px;
        background: none;
        transition: 0.25s; }
      .card .cardWrapper .textAndPriceWrapper button:hover {
        background: #0471af;
        color: #ffffff; }
  @media all and (max-width: 850px) {
    .card {
      width: 48%; }
      .card .cardWrapper {
        width: 100%;
        display: flex; }
        .card .cardWrapper .cardImageWrapper {
          width: 40%; }
          .card .cardWrapper .cardImageWrapper img {
            width: 100%; }
        .card .cardWrapper .textPriceWrapper {
          width: 50%; }
          .card .cardWrapper .textPriceWrapper .cardText p {
            font-size: 12px; }
          .card .cardWrapper .textPriceWrapper .cardPrice {
            font-size: 14px; }
          .card .cardWrapper .textPriceWrapper button {
            height: 35px; } }
  @media all and (max-width: 550px) {
    .card {
      width: 100%; }
      .card .cardWrapper {
        width: 90%;
        display: flex;
        padding: 0px 10px 10px 10px; }
        .card .cardWrapper .cardImageWrapper {
          width: 90%;
          padding-top: 10px; }
        .card .cardWrapper .textPriceWrapper {
          width: 50%; }
          .card .cardWrapper .textPriceWrapper .cardText {
            font-size: 12px; }
          .card .cardWrapper .textPriceWrapper .cardPrice {
            font-size: 14px; }
          .card .cardWrapper .textPriceWrapper button {
            height: 35px; } }
  @media all and (max-width: 350px) {
    .card .cardWrapper {
      width: 90%;
      padding: 0px 10px 10px 10px; }
      .card .cardWrapper .cardImageWrapper {
        width: 90%;
        padding-top: 20px; }
      .card .cardWrapper .textPriceWrapper .cardText p {
        font-size: 12px; }
      .card .cardWrapper .textPriceWrapper button {
        height: 39px; } }
</style>
