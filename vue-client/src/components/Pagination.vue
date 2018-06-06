<template>
  <div class="pagination">
    <div class="paginationWrapper">
      <div class="pagination_prev_wrapper">
        <button class="pagination_prev" v-if="page > 1" @click="updateProducts({page: (page - 1), pages: pages, productCount: productCount})">
          <
        </button>
        <button class="pagination_prev" v-else disabled>
          <
        </button>
      </div>
      <div class="pagination_numbers">
        <template v-if="page < 5">
          <template v-for="n in 5">
            <div class="pageNumberCurrentWrapper" v-if="n === page" :key="n">
              <button @click="updateProducts(n)">
                {{n}}
              </button>
            </div>
            <div class="pageNumberWrapper" v-else :key="n">
              <button @click="updateProducts({page: n, pages: pages, productCount: productCount})">
                {{n}}
              </button>
            </div>
          </template>
          <template v-if="pages >= 6">
            <div class="pageDots">
              <p>...</p>
            </div>
            <div class="pageEndWrapper">
              <button @click="updateProducts({page: pages, pages: pages, productCount: productCount})">
                {{pages}}
              </button>
            </div>
          </template>
          <div class="pagination_next_wrapper">
            <div class="pageNumber" v-if="page >= pages">
              <p>></p>
            </div>
             <button @click="updateProducts({page: (n+1), pages: pages, productCount: productCount})" v-else>
              >
            </button>
          </div>
        </template>
        <template v-else-if="page >= pages">
        </template>
        <template v-else>
          <div class="pageNumberWrapper">
            <button @click="updateProducts({page: pages, pages: pages, productCount: productCount})">
              {{pages}}
            </button>
          </div>
          <div class="pagination_next_wrapper">
            <button @click="updateProducts({page: pages, pages: pages, productCount: productCount})">
              >
            </button>
          </div>
        </template>
      </div>
    </div>
    <div class="pagination_mobile_wrapper">
      <div class="pagination_prev_wrapper">
        <button @click="updateProducts({page: (page - 1), pages: pages, productCount: productCount})" v-if="page > 1">
          <
        </button>
        <div class="pagination_prev" v-else>
            <p><</p>
        </div>
      </div>
      <div class="mobile_number_display_wrapper">
        <p>Page {{page}}</p>
      </div>
      <template v-if="page >= pages">
      </template>
      <div class="pagination_next_wrapper" v-else>
        <button @click="updateProducts({page: (page + 1), pages: pages, productCount: productCount})">
          >
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    page: {
      type: Number
    },
    pages: {
      type: Number
    },
    productCount: {
      type: Number
    }
  },
  methods: {
    updateProducts(page) {
      console.log(page);
      this.$emit("updateProductsCall", page)
    }
  }
}
</script>


<style>
.pagination {
  display: flex;
  justify-content: space-around;
  margin-top: 50px; }
  .pagination .paginationWrapper {
    display: flex; }
    @media all and (max-width: 550px) {
      .pagination .paginationWrapper {
        display: none; } }
    .pagination .paginationWrapper a {
      color: inherit;
      text-decoration: none;
      vertical-align: middle; }
    .pagination .paginationWrapper button {
      color: inherit;
      text-decoration: none;
      vertical-align: middle; }
    .pagination .paginationWrapper .pagination_prev {
      color: #ffffff;
      background-color: #cccccc;
      padding: 0px 17px;
      margin: 0px 5px;
      border: 1px solid #cccccc;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'BenchNine', sans-serif;
      font-size: 1.7em; }
    .pagination .paginationWrapper .pagination_numbers {
      display: flex;
      font-weight: bold;
      font-family: helvetica, sans-serif; }
      .pagination .paginationWrapper .pagination_numbers .pageNumberCurrentWrapper button {
        padding: 11px 17px;
        margin: 0px 5px;
        height: 100%;
        background-color: #0471af;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .pagination .paginationWrapper .pagination_numbers .pageNumber {
        padding: 11px 17px;
        margin: 0px 5px;
        height: 17px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .pagination .paginationWrapper .pagination_numbers button {
        height: 100%;
        border: none;
        background-color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        font-family: helvetica, sans-serif;
        padding: 11px 17px;
        margin: 0px 5px;
      } 
      .pagination .paginationWrapper .pagination_numbers .pageDots {
        font-family: ICON;
        font-weight: 400;
        font-size: 1.5em;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        height: 13px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 11px 17px;
        margin: 0px 5px; }
      .pagination .paginationWrapper .pagination_numbers .pagination_next {
        border: 1px solid #cccccc;
        height: 15px;
        color: #0471af; }
      .pagination .paginationWrapper .pagination_numbers .pagination_next_wrapper button {
        border: 1px solid #cccccc;
        height: 100%;
        color: #0471af;
        padding: 1px 17px;
        margin: 0px 5px;
        font-family: 'BenchNine', sans-serif;
        font-size: 1.7em; }
  .pagination .pagination_mobile_wrapper {
    display: none;
    font-weight: bold;
    font-family: helvetica, sans-serif; }
    .pagination .pagination_mobile_wrapper a {
      color: inherit;
      text-decoration: none;
      vertical-align: middle; }
    .pagination .pagination_mobile_wrapper .pagination_prev {
      color: #ffffff;
      background-color: #cccccc;
      padding: 11px 17px;
      margin: 0px 5px;
      border: 1px solid #cccccc;
      height: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center; }
    .pagination .pagination_mobile_wrapper .pagination_prev_wrapper button {
      color: #0471af;
      background-color: #ffffff;
      padding: 1px 17px;
      margin: 0px 5px;
      border: 1px solid #cccccc;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'BenchNine', sans-serif;
      font-size: 1.7em; }
    .pagination .pagination_mobile_wrapper .pagination_next_wrapper button {
      border: 1px solid #cccccc;
      color: #0471af;
      height: 100%;
      padding: 1px 17px;
      margin: 0px 5px;
      display: flex;
      background-color: #ffffff;
      flex-direction: column;
      justify-content: center;
      font-family: 'BenchNine', sans-serif;
      font-size: 1.7em; }
    .pagination .pagination_mobile_wrapper .mobile_number_display_wrapper {
      padding: 11px 17px;
      margin: 0px 5px;
      height: 17px;
      display: flex;
      flex-direction: column;
      justify-content: center; }
    @media all and (max-width: 550px) {
      .pagination .pagination_mobile_wrapper {
        display: flex; } }
</style>
