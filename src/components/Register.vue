<template>
  <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Acme Web Design</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
  <div class="container">
    <h1 class="brand"><span>Sign Up</span></h1>
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3>Contact Us</h3>
        <ul>
          <li><i class="fa fa-road"></i> 2020 E Maple St, North Canton, OH 44720</li>
          <li><i class="fa fa-phone"></i> (555) 555-5555</li>
          <li><i class="fa fa-envelope"></i> walsh@walsh.edu</li>
        </ul>
      </div>
      <div class="contact">
        <h3>Sign Up for the Student Club Hub</h3>
        <div v-if="error" class="alert alert-danger">{{error}}</div>
        <form action="#" @submit.prevent="submit">
          <p>
            <label>First Name</label>
            <input
                    id="fname"
                    type="fname"
                    class="form-control"
                    name="fname"
                    value
                    required
                    autofocus
                    v-model="form.fname"
                  />
          </p>
          <p>
            <label>Last Name</label>
            <input
                    id="lname"
                    type="lname"
                    class="form-control"
                    name="lname"
                    value
                    required
                    autofocus
                    v-model="form.lname"
                  />
          </p>
          <p>
            <label>Email Address</label>
            <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
          </p>
          <p>
            <label>Password</label>
            <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password1"
              />
          </p>
          <p>
            <label>Confirm Password</label>
            <input 
              id="password"
              type="password"
              class="form-control"
              name="password"
              required
              v-model="form.password2"
             />
          </p>
          <p>
            <label>Major</label>
            <select name="major">
              <option value="1">Computer Science</option>
              <option value="2">Business</option>
              <option value="3">Nursing</option>
              <option value="4">Graphic Design</option>
            </select>
          </p>
          <p class="full">
            <label>Message</label>
            <textarea name="message" rows="5"></textarea>
          </p>
          <p class="full">
            <button>Submit</button>
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
        fname: "",
        lname: "",
        email: "",
        password1: "",
        password2: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      if(this.form.password1 === this.form.password2){
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password1)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.fname
            })
            .then(() => {});
            this.$router.replace({ fname: "Dashboard" });

            firebase.firestore().collection('user').add({
            firstName: this.form.fname,
            lastName: this.form.lname,
            id: firebase.auth().currentUser.uid
        })
        })
        .catch(err => {
          this.error = err.message;
        });
    }
    else{
      alert("Password must match.")
    }
    }
  }
};

</script>