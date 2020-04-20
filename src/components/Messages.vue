<template>
  <div id="messages">
    <div id="notifications">
      <h1>Notifications</h1>
    </div>
    <ul>
      <li>JJ: CS Club meeting @ midnight! Be there or fail my class.</li>
      <li>David Kelly: Sorry guys I dropped the class and ghosted y'all.</li>
      <li>John Doe: Why do I look like JJ?</li>
    </ul>
  </div>
</template>

<style scoped>
#messages {
  float: right;
  height: auto;
  width: 28%;
  z-index: 1;
  background-color: maroon;
  padding: 2%;
  text-align: center;
  color: gold;
  margin-top: 1%;
  margin-right: 2%;
  margin-left: 2%;
  box-shadow: 0 0 40px 0 rgba(72, 94, 116, 0.7);
  height: 100%;
}
#messages ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages li {
  border: 4px ridge gold;
  border-radius: 1px;
  margin: 1%;
}
#messages h1 {
  background-color: gold;
  color: maroon;
  width: 100%;
}

#notifications {
  background-color: gold;
  width: 100%;
}
</style>