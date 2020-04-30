<template>
    <div>
        <h1 class="mb-5 mt-5 pt-5">Welcome to the Producer Database!</h1>
        <p>{{this.searchString}}</p> <!-- For testing, we don't need this p tag -->
        <HomeListView></HomeListView>
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
            searchString: ""
        }
    },
    methods: {
        //sets the search to the input it is listening on
        showSearch: function(params) {
            this.searchString = params;
        }
    }
}
</script>