<template>
    <html>
         <head>
        <title>Student Club Hub</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
       

        
        <div id = "clubinfo">
            <div id = "banner">
                <h1>Club Name <img src = '../assets/wulogo.jpg' alt="Walsh logo"></h1>
            </div>

            <div id = "info">
                <h3>Address: 2020 East Maple, North Canton, OH 44720</h3>
                <h3>Location: GLC 217 </h3>
                <h3>Meeting Time: 6:00pm - 7:30pm </h3>
                <h3>Meeting Frequency: Bi-weekly </h3>
            </div>

            <div class="card">
                <img src='../assets/jerkofsky-j.jpg' alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>Jim Jerkofsky</b></h4>
                  <p>Club President</p>
                </div>
              </div>

              <div class="card">
                <img src= '../assets/jerkofsky-j.jpg' alt="Avatar" style="width:100%">
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>

            
        </div>
            
        <div id = "messages">
             <div id = "notifications">  
                <h1>Notifications</h1> 
             </div> 
                <ul>
                    <li>JJ: CS Club meeting @ midnight! Be there or fail my class.</li>
                    <li>David Kelly: Sorry guys I dropped the class and ghosted y'all.</li>
                    <li>John Doe: Why do I look like JJ?</li>
                </ul>
        </div>
    
        
    </body>
    </html>
</template>

<script>

export default {

};
</script>

<style scoped>
 *{
  box-sizing: border-box;
} 

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

#navbar{
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

#navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.20), 0 2px 10px 0 rgba(0,0,0,0.20);
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
#navbar li {
float: left;
}

li a{
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
  padding: 2%;
  margin-left: 2%;
  width: 60%;
}
#messages{
  float: left;
  height: auto; 
  width: 26%; 
  z-index: 1; 
  background-color: maroon; 
  padding: 2%;
  text-align: center;
  color: gold;
  margin-top: 1%;
  margin-right: 2%;
  margin-left: 2%;
  box-shadow: 0 0 40px 0 rgba(72,94,116,0.7);
  height: 100%;
}
#messages ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages li{
    border: 4px ridge gold;
    border-radius: 1px;
    margin: 1%;
}

#messages h1{
  background-color: gold;
  color: maroon;
  width: 100%;
}


#banner{
  background-color: gold;
  height: 75px;
  top: 0;
  position: relative;
}

#banner h1{
  padding-top: 2%;
  align-self: center;
  margin-left: 2%;
}

#banner img{
  height: 37px;
  width: 50px;
  float: right;
  border-radius: 50%;
  margin-right: 1.5%;
  vertical-align: middle;
}

#main{
  display: inline;
}

#footer{
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:gold;
  text-align: center;
  color: maroon;
  position: fixed;
}

#clubinfo{
  box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
  padding-bottom: 1%;
  height: 100%;
  float: left;
  width: 70%;
  top: 0;
  margin-bottom: 6%;
}


.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 1%;
  float: right;
  background-color: gold;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  display: inline;
}

#notifications{
  background-color: gold;
  width: 100%;
}

#info{
  margin-left: 2%;
  float: left;
  max-width: 50%;
}

</style>