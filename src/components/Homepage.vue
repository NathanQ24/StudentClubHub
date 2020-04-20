<template>
<html>
  <body>
    <div id="content">
      <h1>The Best Way to find Clubs</h1>
      <p>Looking for a club at Walsh? You've come to the right place. Student Club Hub is the best way to connect with and join clubs.</p>
    </div>

    <div id="content">
      <h1>Club Presidents Lives are Made Easier</h1>
      <p>With Student Club Hub it has never been easier to inform club members of meeting times and other events!</p>
    </div>

    <div id="content">
      <h1>Communicate with members</h1>
      <p>Make posts that other members are able to see in order to communicate with your club!</p>
    </div>

    <div id="content">
      <h1>Sign-Up Today!</h1>
      <button type="button">
        <router-link to="/register">Sign-up</router-link>
      </button>
    </div>
  </body>
</html>
</template>

<script>
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#header {
  background-color: maroon;
  color: gold;
  margin: 0%;
  width: 100%;
  padding: 20px;
  text-align: center;
}
body {
  font-family: Muli, sans-serif;
  font-style: normal;
  margin: 0%;
  padding: 0%;
  background-color: honeydew;
  color: maroon;
}

#navbar {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
}

#navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}

#welcome {
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
#navbar li {
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

#content {
  padding: 1%;
  margin: 1%;
  float: left;
  background-color: gold;
  width: 48%;
  height: 30%;
  box-shadow: 0 0 20px 0 rgba(99, 35, 23, 0.7);
  border: 3px ridge maroon;
}

button {
  background-color: maroon;
  color: gold;
  border: gold;
  height: 35px;
  box-shadow: 0 0 40px 0 rgba(99, 35, 23, 0.7);
}

button a {
  color: gold;
}

button a:hover {
  color: maroon;
  background-color: gold;
}
</style>
