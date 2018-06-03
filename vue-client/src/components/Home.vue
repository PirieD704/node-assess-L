<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created: async function(){
    console.log('Home::created'); //useful to understand lifecycle

    const response = await fetch("/api/hello");
    const data = await response.json();

    console.log(data);
  }
}
</script>
