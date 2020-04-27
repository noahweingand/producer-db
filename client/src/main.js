import Vue from 'vue'
import App from './App.vue'; 
import VueRouter from 'vue-router'; 
import BootstrapVue from 'bootstrap-vue'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-vue/dist/bootstrap-vue.css'; 

// import the vue components for routing
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(BootstrapVue); 
Vue.use(VueRouter); 

Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    {
      path: '/', 
      redirect : {
        name: 'Login'
      }
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
    }
  ]
})

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app'); 



