<template>
<html>
  <head>
        <title>Student Club Hub</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div id = "header">
            <h1>Student Club Hub</h1>
        </div>

        <div id = "welcome">
            <p>Welcome to Student Club Hub, the place where you can connect with clubs at Walsh and the greater Canton Area!</p>
        </div>

        <div id = "navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="news.asp">Your Clubs</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
                <li style="float:right"><a  href="#Login">Login</a></li>
                <li style="float:right"><a  href="TEST.html">Sign-Up</a></li>
              </ul>
        </div>
        
        
        <div class = "flex-container">
            <div id = "content">
              <p>
                <add-blog></add-blog>
                <show-blogs></show-blogs>
              </p>
            </div>
        
            <div id = "messages">
                <ul>
                    <li><p>New Message</p></li>
                    <li><p>New Message</p></li>
                    <li><p>New Message</p></li>
                </ul>
            </div>
    </div>
    </body>

</html>
</template>

<script>  
import AddBlog from './components/AddBlog.vue';
import ShowBlogs from './components/ShowBlogs.vue'

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs' : ShowBlogs
  }
}

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
