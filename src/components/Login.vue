<template>
<html>
  <div class="content">
    <h2>Login</h2>
    <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form action="#" @submit.prevent="submit">
      <label for="email">Email</label>

      <div class="email">
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
      </div>

      <label for="password">Password</label>

      <div class="password">
        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          v-model="form.password"
        />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</html>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      form: {
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
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
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
.content {
  padding: 1%;
  margin-left: 35%;
  margin-right: auto;
  float: left;
  background-color: gold;
  width: 30%;
  height: 30%;
  box-shadow: 0 0 40px 0 rgba(99, 35, 23, 0.7);
  color: maroon;
  border: 3px outset maroon;
}

.content h2 {
  color: maroon;
}

.content span {
  width: 100%;
  border-bottom: 2px solid maroon;
}

.password {
  padding-bottom: 5%;
}

button {
  background: gold;
  border: 2px outset maroon;
}

button:hover {
  box-shadow: 0 0 40px 0 rgba(99, 35, 23, 0.7);
  background: maroon;
}

label {
  color: maroon;
}
</style>
