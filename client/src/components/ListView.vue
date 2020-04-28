<template>
<div>
    <ul class="list-group">
        <li v-for="(v,i) in producers" :key="i"  class="list-group-item">{{ v.producerName }} <a :href="v.wikiPage">wikipedia</a></li>
    </ul>
</div>
    
</template>

<script>
import ProducerService from '../ProducerService'; 

export default {
   name: 'ListView' , 
   data() {
       return {
           producers : []
       }
   }, 
   methods:{
       async getAllProducers(){
           return await ProducerService.getAllProducers(); 
       }
   }, 
   created: function() {
       this.getAllProducers().then((result) => this.producers = result.data)
             .catch( (err) => console.log(err + 'error getting all producers')); 
   }
}
</script>

<style>

</style>