<template>
<div>
    <h2 class="mt-5 pt-5" v-if="!this.searchQuery || this.searchQuery.trim() === ''">Please use a search parameter</h2>
    <div v-else>
    <h2 class="mt-5 pt-5">Search Results for: {{ this.searchQuery }}</h2>
    <b-table v-if="producers.length > 0" striped hover :items="producers" :fields="fields">
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia</a>
        </template>
        <template v-slot:cell(song-link)="data">
            <router-link :to="'/ProducerSongs/' + data.item.producerName">Credits</router-link>
        </template>
    </b-table>
    </div>
</div>
    
</template>

<script>
import ProducerService from '../ProducerService'; 

export default {
   name: 'SearchListView' , 
   //passed in search query
   data() {
       return {
           searchQuery: this.$route.params.query.trim(), 
           fields: [],
           producers : []
       }
   }, 
   methods:{
       async getAllProducers(){
           return await ProducerService.getAllProducers(['producerName', 'wikiPage']); 
       }
   }, 
   created: function() {
       this.searchQuery = this.$route.params.query
       this.getAllProducers().then((result) => {
           this.producers = result.data; 
           for(var prop in this.producers[0]){
               this.fields.push(prop); 
           }
           this.fields.push('song-link')
        }).catch( (err) => console.log(err)); 
   }
}
</script>

<style scoped>
    h2 {
        text-align: left; /* Change later */
    }
</style>