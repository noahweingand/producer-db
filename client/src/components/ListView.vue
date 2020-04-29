<template>
<div>
    <b-table v-if="producers.length > 0" striped hover :items="producers" :fields="fields">
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia</a>
        </template>
    </b-table>
    <div v-else>No results found...</div>
</div>
    
</template>

<script>
import ProducerService from '../ProducerService'; 

export default {
   name: 'ListView' , 
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
           console.log(this.producers);
           for(var prop in this.producers[0]){
               this.fields.push(prop); 
           }
        }).catch( (err) => console.log(err)); 
   }
}
</script>

<style>

</style>