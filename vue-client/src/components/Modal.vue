<template>
  <transition name="modal">
    <div class="modal-mask" :prop="heroObj">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="exitButton">
            <button @click="$emit('close')">✕</button>
          </div>
          <div class="modal-header">
            {{ heroObj.brand }} {{ heroObj.description }}
          </div>

          <div class="modal-body">
            <img :src="heroObj.imageUrls.lg" alt="">
          </div>
          <div class="ratingsWrapper">
            <span v-for="n in (Math.floor(heroObj.rating))" :key="n">⭐️</span>
          </div>
          <div class="modal-footer">
            <div class="priceWrapper">
              {{heroObj.pricing.price.selling.replace(/(\.\d+)/g, ".00")}}
            </div>
            <button class="modal-default-button" @click="$emit('close')">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  color: #333333;
  font-size: 16px;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: bold;
}

.modal-default-button {
  color: #ffffff;
  height: 44px;
  background-color: #338700;
  width: 50%;
  border: none;
  font-size: 14px;
}

.exitButton button{
  float: right;
  border: none;
  font-size: 21px;
  background-color: #ffffff;
  padding-right: 0px;
}

.ratingsWrapper {
  padding-bottom: 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
