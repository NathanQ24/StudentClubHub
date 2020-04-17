<template>
    <body>
        <div id = "header">
            <h1>Student Club Hub</h1>
        </div>

        <div id = "welcome">
            <p>Welcome to Student Club Hub, the place where you can connect with clubs at Walsh and the greater Canton Area!</p>
        </div>

        <div id = "navbar">
            <ul>
                <li><router-link to = "/">Home</router-link></li>
                <li><router-link to = "/club">Your Clubs</router-link></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
                <template v-if="user.loggedIn">
                <li>Welcome, {{user.data.displayName}}</li>
                <li class="nav-item">
                  <a class="nav-link" @click.prevent="signOut">Sign out</a>
                </li>
              </template>
                <template v-else>
                <li><router-link to = "/login">Login</router-link></li>
                <li><router-link to = "/register">Register</router-link></li>
                </template>
              </ul>
        </div>
      </body>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
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
</style>

