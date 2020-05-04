<template>
    <div>
        <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark" :key="checkLoggedIn">
            <b-navbar-brand href="/">Producer-DB</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown split split-variant="outline-success" text="Add" class="ml-2" variant="success">
                        <router-link :to="{ path : '/AddProducers'}" tag="b-dropdown-item" variant="success">Producer</router-link>
                        <router-link :to="{ path: '/AddArtists'}" tag="b-dropdown-item" variant="success">Artist</router-link>
                        <router-link :to="{ path: '/AddSong'}" tag="b-dropdown-item" variant="success">Song</router-link>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-if="this.checkLoggedIn" href="#">{{loggedInAs}}</b-nav-item>
                    <b-nav-item-dropdown class="mr-2"  :text="dropdown" right>
                        <b-dropdown-item  @click="dropListen">All</b-dropdown-item>
                        <b-dropdown-item  @click="dropListen">Artists</b-dropdown-item>
                        <b-dropdown-item  @click="dropListen">Producers</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-form>
                        <b-form-input v-model="search" class="mr-sm-2" type="search" placeholder="Search" aria-label="Search"></b-form-input>
                        <router-link :to="{path : '/SearchListView/' + this.dropdown + '/'+ this.search}" tag="b-button" size="sm"  type="submit">Search</router-link>
                    </b-nav-form>
                    <router-link v-if="!this.checkLoggedIn" to="/Login" tag="b-button" class="ml-2">Login</router-link>
                    <b-navbar-nav v-else>
                        <b-button @click="this.logout" variant="danger" class="ml-2">Logout</b-button>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        loggedIn: Boolean
    }, 
    data() {
        return {
            search: "", 
            dropdown: "All"
        }
    },
    methods: {
        dropListen: function(e){
            this.dropdown = e.srcElement.innerHTML; 
        }, 
        logout: function(){
            localStorage.removeItem('jwt'); 
            localStorage.removeItem('user');
            this.$emit('authenticated', false); 
            this.$router.go('/'); 
        }
    }, 
    computed: {
        checkLoggedIn: function(){
            return this.loggedIn; 
        }, 
        loggedInAs: function(){
            return localStorage.getItem('user'); 
        }
    }
}
</script>

<style>

</style>

