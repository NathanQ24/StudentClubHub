import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import VueResource from 'vue-resource'
=======
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);


const router = new VueRouter({
  routes: Routes,
  mode:'history'
});
>>>>>>> ff88a3b1ba9c2bfef9cb936893d58e2c8b023660

Vue.config.productionTip = false
Vue.use(VueResource)


new Vue({
  el:'#app',
  render: h => h(App),
  router: router
}).$mount('#app')
