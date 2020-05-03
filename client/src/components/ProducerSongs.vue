<template>
<b-container fluid="lg">
<div>
    <div v-if="songs.length > 0">
        <h1 class="bd-title pt-5 mt-5 mb-5"> All credits by: {{ this.producer }} </h1>
        <b-table striped hover :items="songs" :fields="fields"></b-table>
    </div>
    <b-alert v-else variant="danger" class="mt-5 pt-5" v-cloak show>No results found...</b-alert>
</div>
</b-container>
</template>

<script>
import ProducerService from '../ProducerService';

export default {
    name: 'ProducerSongs',
    data(){
        return {
            fields: [], 
            songs: [], 
            producer: this.$route.params.producer
        }
    }, 
    created: function(){
        this.getSongs().then((result) =>{
            this.songs = result.data[0]
            for(var prop in this.songs[0]){
                this.fields.push(prop); 
            }
        }).catch((err) => {
            console.log(err); 
        }); 
        
    }, 
    methods: {
        async getSongs(){
            return await ProducerService.getSongsBy(this.producer, localStorage.getItem('jwt'));
        }
    }
}
</script>

<style>
[v-cloak]{
    display: none; 
}
</style>