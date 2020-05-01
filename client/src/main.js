import Vue from 'vue'
import App from './App.vue'; 
import VueRouter from 'vue-router'; 
import BootstrapVue from 'bootstrap-vue'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-vue/dist/bootstrap-vue.css'; 

// import the vue components for routing
import Login from './components/Login.vue'; 
import Register from './components/Register.vue'; 
import Home from './components/Home.vue'; 
import ProducerSongs from './components/ProducerSongs.vue'; 
import SearchListView from './components/SearchListView.vue'; 

Vue.use(BootstrapVue); 
Vue.use(VueRouter); 

Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    {
      path: '/', 
      name: 'Home', 
      component: Home
    },
    {
      path: '/Login', 
      name: 'Login',
      component: Login
    }, 
    {
      path: '/Register', 
      name: 'Register', 
      component: Register
    }, 
    {
      path: '/ProducerSongs/:producer', 
      name: 'ProducerSongs', 
      component: ProducerSongs,
      props: true
    }, 
    {
      path: '/SearchListView/:query', 
      name: 'SearchListView', 
      component: SearchListView, 
      props: true
    }, 
    {
      path: '/SearchListView',
      name: 'EmptySearch', 
      component: SearchListView
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/Login', '/Register']; 
//   const authRequired = !publicPages.includes(to.path); 
//   const loggedIn = localStorage.getItem('user'); 
  
//   console.log(localStorage); 
//   if(authRequired && !loggedIn){
//     return next('/Login'); 
//   }

//   next(); 
// }); 

// we need to use vuex for the login authentication

new Vue({
  render: h => h(App),
  router
}).$mount('#app'); 



