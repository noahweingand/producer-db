<template>
    <div>
        <Navbar @child-search="showSearch"></Navbar> 
        <h1 class="mb-5 mt-5">Welcome to the Producer Database!</h1>
        <p>{{this.searchString}}</p> <!-- For testing, we don't need this p tag -->
        <HomeListView v-if="searchString.length == 0"></HomeListView>
        <SearchListView v-else></SearchListView> <!-- This is only shows when something's different? -->
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import HomeListView from './HomeListView.vue'
import SearchListView from './SearchListView'
export default {
    name: 'Home', 
    components: {
        Navbar, 
        HomeListView,
        SearchListView
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
        },
        getSearchLength: function() {
            var length = this.searchString.length;
            return length;
        }
    }
}
</script>