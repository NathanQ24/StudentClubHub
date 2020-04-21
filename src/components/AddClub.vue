<template>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acme Web Design</title>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"
    />
    <!-- <link rel="stylesheet" href="style.css"> -->
  </head>
  <body>
    <div class="container">
      <h1 class="brand">
        <span>Add your Club to Student Club Hub</span>
      </h1>
      <div class="wrapper animated bounceInLeft">
        <div class="company-info">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <i class="fa fa-road"></i> 2020 E Maple St, North Canton, OH 44720
            </li>
            <li>
              <i class="fa fa-phone"></i> (555) 555-5555
            </li>
            <li>
              <i class="fa fa-envelope"></i> walsh@walsh.edu
            </li>
          </ul>
        </div>
        <div class="contact">
          <h3>Create A New Club</h3>

          <form action="#" @submit.prevent="submit">
            <p>
              <label>Club Name</label>
              <input
                id="name"
                type="name"
                class="form-control"
                name="name"
                value
                required
                autofocus
                v-model="form.name"
              />
            </p>

            <p>
              <label>Typical Meeting Time</label>
              <input
                id="meeting"
                type="name"
                class="form-control"
                name="meeting"
                placeholder="Ex. 12:00pm"
                value
                required
                autofocus
                v-model="form.meetingTime"
              />
            </p>

            <p>
              <label>Meeting Days</label>
              <input
                id="meeting-days"
                type="name"
                class="form-control"
                name="meeting-days"
                placeholder="Ex. MWF"
                value
                required
                autofocus
                v-model="form.meetingDays"
              />
            </p>

            <p>
              <label>Address</label>
              <input
                id="address"
                type="name"
                class="form-control"
                name="address"
                value
                required
                autofocus
                v-model="form.address"
              />
            </p>

            <p>
              <label>Location</label>
              <input
                id="meeting-days"
                type="name"
                class="form-control"
                name="meeting-days"
                placeholder="Ex. GLC 217"
                value
                required
                autofocus
                v-model="form.location"
              />
            </p>

            <p class="full">
              <label>Club Bio</label>
              <textarea name="message" v-model="form.bio" rows="5"></textarea>
            </p>
            <p class="full">
              <label for="logo">Club Logo:</label>

              <input type="file" id="logo" name="logo" accept="image/png, image/jpeg" />
            </p>

            <!-- <p>
            <label>Admin Password</label>
            <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
          </p>
       

          <p>
            <label>Confirm Password</label>
            <input type="password" name="confirmpassword">
            </p>-->

            <p class="full">
              <button v-on:click.prevent="post">Create Club</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </body>
</html>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        meetingTime: "",
        password: "",
        meetingDays: "",
        logo: "",
        address: "",
        location: "",
        bio: "",
        id: ""
      },
      error: null
    };
  },
  methods: {
    post: function() {
      firebase
        .firestore()
        .collection("clubs")
        .add({
          name: this.form.name,
          time: this.form.meetingTime,
          days: this.form.meetingDays,
          address: this.form.address,
          location: this.form.location,
          bio: this.form.bio
        })
        .then(function(docRef) {
          firebase
            .firestore()
            .collection("clubsJoined")
            .add({
              accessLevel: 1,
              clubID: docRef.id,
              userID: firebase.auth().currentUser.uid
            });
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(function(err) {
          this.error = err.message;
        });
    }
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: maroon;
  color: black;
  line-height: 1.6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 1em;
}

.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}

ul {
  list-style: none;
  padding: 0;
}

.brand {
  text-align: center;
}

.brand span {
  color: #fff;
}

.wrapper {
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
}

.wrapper > * {
  padding: 1em;
}

.company-info {
  background: gold;
}

.company-info h3,
.company-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
}

.contact {
  background: #f9feff;
}

/* FORM STYLES */
.contact form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.contact form label {
  display: block;
}

.contact form p {
  margin: 0;
}

.contact form .full {
  grid-column: 1 / 3;
}

.contact form button,
.contact form input,
.contact form textarea {
  width: 100%;
  padding: 1em;
  border: 1px solid maroon;
}

.contact form button {
  background: gold;
  border: 0;
  text-transform: uppercase;
}

.contact form button:hover,
.contact form button:focus {
  background: maroon;
  color: #fff;
  outline: 0;
  transition: background-color 2s ease-out;
}

/* LARGE SCREENS */
@media (min-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > * {
    padding: 2em;
  }

  .company-info h3,
  .company-info ul,
  .brand {
    text-align: left;
  }
}
</style>
