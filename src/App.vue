<template>
  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
</script>

<style>
#header{
    background-color: maroon;
    color: gold;
    margin: 0%;
    width: 100%;
    padding: 20px;
    text-align: center;
}

body{
    font-family: Muli,sans-serif;
    font-style: normal;
    margin: 0%;
    padding: 0%;
    background-color: honeydew;
    color: maroon;
}

#welcome{
    padding: 10px;
    font-size: larger;
    text-align-last: center;
    background-color: gold;
    width: 100%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: maroon;
}

li {
  float: left;
}

li a {
  display: block;
  color: gold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: gold;
  color: maroon;
}

#content{
    flex-grow: 4;
    padding: 2%;
    margin-left: 2%;
    width: 60%;
  }

  #messages{
    flex-grow: 4;
    list-style-type: none;
    align-self: start;
    padding: 2%;
    text-align: center;
    color: gold;
  }

  #messages ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #messages li{
      border-width: 5px;
  }

  .flex-container {
    display: flex;
    align-items: flex-start;
  }
</style>