<template>
  <div id = 'app'>
      <myheader></myheader>
      <router-view></router-view>
      <myfooter></myfooter>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    'myheader': Header,
    'myfooter': Footer,
  }
}
</script>

<style scoped>
body{
  font-family: Muli,sans-serif;
  font-style: normal;
  padding-bottom: 2%;
  color: maroon;
}
</style>