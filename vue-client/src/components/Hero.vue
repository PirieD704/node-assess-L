<template>
  <div class="cardHero" :prop="heroObj">
    <div class="heroWrapper">
      <div class="imageWrapper">
        <img :src="heroObj.imageUrls.md" alt="">
      </div>
      <div class="heroContent">
        <div class="heroTitle">
          {{ heroObj.brand }} {{ heroObj.description }}
        </div>
        <div class="heroBullets">
          <ul>
            <li v-for="(bullet, index) in heroObj.marketingBullets" :key="bullet.id" v-if="index < 3">{{ bullet }}</li>
          </ul>
        </div>
      </div>
      <div class="heroPriceAndButton">
        <div class="heroPrice">
          <p>{{heroObj.networkPrice.replace(/(\.\d+)/g, ".00")}}</p>
          <a href="nothing!">
            <button type="submit" disabled>
              ADD TO CART
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    heroObj: {
      type: Object
    }
  }
  
}
</script>


<style>
.cardHero {
  font-family: Helvetica, sans-serif;
  width: 100%;
  position: relative;
  border: 1px solid #cccccc;
  margin-bottom: 15px; }
  .cardHero .heroWrapper {
    padding: 20px;
    display: flex; }
    .cardHero .heroWrapper .imageWrapper {
      max-width: 195px;
      max-height: 195px; }
      .cardHero .heroWrapper .imageWrapper img {
        position: relative; }
    .cardHero .heroWrapper .heroContent {
      color: #333333;
      padding: 0px 20px 0px 10px; }
      .cardHero .heroWrapper .heroContent .heroTitle {
        font-size: 16px;
        font-weight: bold; }
      .cardHero .heroWrapper .heroContent .heroBullets {
        font-size: 14px; }
        .cardHero .heroWrapper .heroContent .heroBullets .listWrapper {
          line-height: 1.5em;
          overflow: hidden;
          text-overflow: ellipsis; }
    .cardHero .heroWrapper .heroPriceAndButton {
      padding-left: 10px;
      width: 28%;
      vertical-align: top; }
      .cardHero .heroWrapper .heroPriceAndButton .heroPrice {
        color: #333333;
        font-size: 22px;
        font-weight: bold;
        line-height: 0px; }
      .cardHero .heroWrapper .heroPriceAndButton button {
        color: #ffffff;
        height: 44px;
        background-color: #338700;
        width: 100%;
        border: none;
        font-size: 14px; }
  @media all and (max-width: 850px) {
    .cardHero .heroWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 48%; } }
  @media all and (max-width: 550px) {
    .cardHero .heroWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 82%; }
      .cardHero .heroWrapper .imageWrapper {
        padding: 0px 30px 15px; }
      .cardHero .heroWrapper .heroContent {
        padding: 0px; }
        .cardHero .heroWrapper .heroContent .heroBullets {
          font-size: 11px; }
          .cardHero .heroWrapper .heroContent .heroBullets .listWrapper {
            line-height: 1.65em;
            margin-left: -30px; }
      .cardHero .heroWrapper .heroPriceAndButton {
        width: 100%; } }

</style>