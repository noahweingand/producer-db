<template>
    <div>
        <Navbar @child-search="showSearch"></Navbar> 
        <h1 class="mb-5 mt-5">Welcome to the Producer Database!</h1>
        <p>{{this.searchString}}</p> <!-- For testing, we don't need this p tag -->
        <ListView></ListView>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import ListView from './ListView.vue'

export default {
    name: 'Home', 
    components: {
        Navbar, 
        ListView
    },
    data() {
        return {
            searchString: "dope"
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