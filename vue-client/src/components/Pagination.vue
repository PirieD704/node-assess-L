<template>
  <div class="pagination">
    <div class="paginationWrapper">
      <div class="pagination_prev_wrapper">
        <button class="pagination_prev" v-if="page > 1">
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
              <a :href="'/page/'+n+'?maxResults=8'">
                <div class="pageNumberCurrent">
                  <p>{{n}}</p>
                </div>
              </a>
            </div>
            <div class="pageNumberWrapper" v-else :key="n">
              <a :href="'/page/'+n+'?maxResults=8'">
                <div class="pageNumber">
                  <p>{{n}}</p>
                </div>
              </a>
            </div>
          </template>
          <template v-if="pages >= 6">
            <div class="pageDots">
              <p>...</p>
            </div>
            <div class="pageEndWrapper">
              <a :href="'/page/'+pages+'?maxResults=8'">
                <div class="pageEnd pageNumber">
                  <p>{{pages}}</p>
                </div>
              </a>
            </div>
          </template>
          <div class="pagination_next_wrapper">
            <div class="pageNumber" v-if="page >= pages">
              <p>></p>
            </div>
            <a :href="'/page/'+(page + 1)+'?maxResults=8'" v-else>
              <div class="pagination_next pageNumber">
                <p>></p>
              </div>
            </a>
          </div>
        </template>
        <template v-else-if="page >= pages">
        </template>
        <template v-else>
          <div class="pageNumberWrapper">
            <a :href="'/page/'+pages+'?maxResults=8'">
              <p>{{pages}}</p>
            </a>
          </div>
          <div class="pagination_next_wrapper">
            <a :href="'/page/'+(page + 1)+'?maxResults=8'">
              <div class="pagination_next pageNumber">
                <p><</p>
              </div>
            </a>
          </div>
        </template>
      </div>
    </div>
    <div class="pagination_mobile_wrapper">
      <div class="pagination_prev_wrapper">
        <a :href="'/page/'+(page - 1)+'?maxResults=8'" v-if="page > 1">
          <div class="pagination_prev">
            <p><</p>
          </div>
        </a>
        <a :href="'/page/'+(page - 1)+'?maxResults=8'" class="disabled" v-else disabled>
          <div class="pagination_prev">
            <p><</p>
          </div>
        </a>
      </div>
      <div class="mobile_number_display_wrapper">
        <p>Page {{page}}</p>
      </div>
      <template v-if="page >= pages">
      </template>
      <div class="pagination_next_wrapper" v-else>
        <a :href="'/page/'+(page + 1)+'?maxResults=8'">
          <div class="pagination_next pageNumber">
            <p>></p>
          </div>
        </a>
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
      .pagination .paginationWrapper .pagination_numbers .pageNumberCurrent {
        padding: 11px 17px;
        margin: 0px 5px;
        height: 17px;
        background-color: #0471af;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center; }
      .pagination .paginationWrapper .pagination_numbers .pageNumber {
        padding: 11px 17px;
        margin: 0px 5px;
        height: 17px;
        display: flex;
        flex-direction: column;
        justify-content: center; }
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
    .pagination .pagination_mobile_wrapper .pagination_next {
      border: 1px solid #cccccc;
      color: #0471af;
      height: 15px;
      padding: 11px 17px;
      margin: 0px 5px;
      display: flex;
      flex-direction: column;
      justify-content: center; }
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
