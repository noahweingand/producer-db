<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark bd-navbar">
        <a class="navbar-brand" href="/">Producer-DB</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <b-dropdown split split-variant="outline-success" :text="dropdown" class="mr-2" variant="success">
                <b-dropdown-item variant="success" @click="dropListen">All</b-dropdown-item>
                <b-dropdown-item variant="success" @click="dropListen">Artists</b-dropdown-item>
                <b-dropdown-item variant="success" @click="dropListen">Producers</b-dropdown-item>
            </b-dropdown>
            <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <router-link :to="'/SearchListView/' + this.search" class="btn btn-outline-success my-2 my-sm-0" tag="button" type="submit" value="Submit">Search</router-link>
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
        dropListen: function(e){
            this.dropdown = e.srcElement.innerHTML; 
        }
    }
}
</script>

<style>

</style>

