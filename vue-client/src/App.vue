<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  padding: 50px;
  font: 14px Helvetica, sans-serif;
  display: flex;
  justify-content: space-around; }
  body #app {
    max-width: 1032px; }
  @media all and (max-width: 550px) {
    body {
      padding: 10px;
      font-size: 12px; } }

a {
  color: #00B7FF; }
</style>
