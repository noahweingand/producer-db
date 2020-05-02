<template>
    <div v-if="this.loggedIn">
        <h1 class="mb-5 mt-5 pt-5">Welcome to the Producer Database!</h1>
        <p>{{this.searchString}}</p> <!-- For testing, we don't need this p tag -->
        <HomeListView></HomeListView>
    </div>
    <div v-else>
        <h1 class="mb-5 mt-5 pt-5">Login to view content</h1>
    </div>
</template>
<script>
//import Navbar from './Navbar.vue'
import HomeListView from './HomeListView.vue'
export default {
    name: 'Home', 
    components: {
        HomeListView,
    },
    data() {
        return {
            searchString: "", 
            loggedIn: true, 
        }
    },
    methods: {
        //sets the search to the input it is listening on
        showSearch: function(params) {
            this.searchString = params;
        }
    }, 
    created() {
        if(localStorage.getItem('jwt')) this.loggedIn = true; 
        else this.loggedIn = false; 
    }
}
</script>