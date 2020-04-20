<template>
  <div id="single-club">
    <!-- <h1>This is a test: {{ clubIds }}</h1> -->
    <h1>Club: {{club.name}}</h1>
    <article>Location: {{club.location}}</article>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  props: ["clubIds"],
  data() {
    return {};
  }
};
</script>

<style>
#single-club {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: gold;
  border: 1px dotted #aaa;
}
</style>