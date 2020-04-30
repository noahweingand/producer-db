<template>
<div>
    <h2>Search Results:</h2>
    <b-table v-if="producers.length > 0" striped hover :items="producers" :fields="fields">
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia2</a>
        </template>
        <template v-slot:cell(song-link)="data">
            <router-link :to="'/ProducerSongs/' + data.item.producerName">Credits</router-link>
        </template>
    </b-table>
</div>
    
</template>

<script>
import ProducerService from '../ProducerService'; 

export default {
   name: 'SearchListView' , 
   data() {
       return {
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