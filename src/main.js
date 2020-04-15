import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import * as firebase from "firebase";
import store from "./store";

Vue.use(VueRouter);


const router = new VueRouter({
  routes: Routes,
  mode:'history'
});

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyALOlZ4CBgKvOsh3xLhiW2zuvlRvmrOl9Q",
  authDomain: "clubhub-9bb7a.firebaseapp.com",
  databaseURL: "https://clubhub-9bb7a.firebaseio.com",
  projectId: "clubhub-9bb7a",
  storageBucket: "clubhub-9bb7a.appspot.com",
  messagingSenderId: "906640855139",
  appId: "1:906640855139:web:d682aafc042905be922856",
  measurementId: "G-7TQQYV5G2Y"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  el:'#app',
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
