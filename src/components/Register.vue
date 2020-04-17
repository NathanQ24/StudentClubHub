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
            <label>Name</label>
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
                    v-model="form.password"
                  />
          </p>
          <p>
            <label>Confirm Password</label>
            <input type="password" name="confirmpassword">
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
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
            this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};

</script>

<style scoped>
*{
  box-sizing: border-box;
}

body{
  background: maroon;
  color: black;
  line-height:1.6;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding:1em;
}

.container{
  max-width:1170px;
  margin-left:auto;
  margin-right:auto;
  padding:1em;
}

ul{
  list-style: none;
  padding:0;
}

.brand{
  text-align: center;
}

.brand span{
  color:#fff;
}

.wrapper{
  box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
}

.wrapper > *{
  padding: 1em;
}

.company-info{
  background:gold;
}

.company-info h3, .company-info ul{
  text-align: center;
  margin:0 0 1rem 0;
}

.contact{
  background:#f9feff;
}

/* FORM STYLES */
.contact form{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:20px;
}

.contact form label{
  display:block;
}

.contact form p{
  margin:0;
}

.contact form .full{
  grid-column: 1 / 3;
}

.contact form button, .contact form input, .contact form textarea{
  width:100%;
  padding:1em;
  border:1px solid maroon;
}

.contact form button{
  background:gold;
  border:0;
  text-transform: uppercase;
}

.contact form button:hover,.contact form button:focus{
  background:maroon;
  color:#fff;
  outline:0;
  transition: background-color 2s ease-out;
}

/* LARGE SCREENS */
@media(min-width:700px){
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > *{
    padding:2em;
  }

  .company-info h3, .company-info ul, .brand{
    text-align: left;
  }
}
</style>

