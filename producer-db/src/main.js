import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

Vue.config.productionTip = false // a little thing that tells us we're using dev version of vue

new Vue({
  render: h => h(App),
}).$mount('#app')
