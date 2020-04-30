<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="/">Producer-DB</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" @submit="letsSee">
            <b-dropdown split split-variant="outline-success" :text="dropdown" class="mr-2" variant="success">
                <b-dropdown-item variant="success" @click="dropListen">All</b-dropdown-item>
                <b-dropdown-item variant="success" @click="dropListen">Artists</b-dropdown-item>
                <b-dropdown-item variant="success" @click="dropListen">Producers</b-dropdown-item>
            </b-dropdown>
            <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" value="Submit">Search</button>
            </form>
            <router-link to="/Login" class="btn ml-sm-2 btn-primary">Login</router-link>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            search: "", 
            dropdown: "Search By:"
        }
    },
    methods: {
        letsSee:function(e) {
            alert(this.search) //for testing
            e.preventDefault();
        }, 
        dropListen: function(e){
            this.dropdown = e.srcElement.innerHTML; 
        }
    },
    watch: {
        //watches input for user's search
        search: function() {
            this.$emit("child-search", this.search); //passes back up to parent (Home)
        }
    }
}
</script>

<style>

</style>

