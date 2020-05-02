<template>
  <div id="app">
    <Navbar @child-search="showSearch" @authenticated="setAuthenticated" v-bind:loggedIn="loggedIn"></Navbar>
    <router-view :key="$route.fullPath" @authenticated="setAuthenticated"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'; 

export default {
  name: 'App', 
  components: {
    Navbar
  }, 
  data(){
    return {
      loggedIn: false
    }
  }, 
  methods: {
    showSearch: function(params) {
        this.searchString = params;
    },
    setAuthenticated: function(status){
      this.loggedIn = status; 
    } 
  }, 
  computed: {
    checkLoggedIn: function(){
      if(localStorage.getItem('jwt')) return true; 
      else return false; 
    }
  }, 
  created() {
    this.loggedIn = this.checkLoggedIn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
