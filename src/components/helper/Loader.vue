<template>
  <div v-show="loading">
    <div class="custom-loader">
      <h4>BUGS in the CITY... loading</h4>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'loader',
    props: ['loading']
  }
</script>
<style>
  .custom-loader { margin-top: 200px;}
</style>
