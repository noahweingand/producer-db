<template>
    <div>
        <Navbar></Navbar>
        <h1 class="mb-5 mt-5">Welcome to the Producer Database!</h1>
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
    }
}
</script>