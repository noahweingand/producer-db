<template>
<div>
    <b-alert variant="success" class="mt-5 pt-5" v-if="!this.searchQuery || this.searchQuery.trim() === ''" show>Please use a search parameter</b-alert>
    <section class="bd-content" v-else>
    <b-alert variant="success" class="mt-5 pt-5" show> Search Results for: {{ this.searchQuery }} </b-alert>
    <b-table v-if="producers.length > 0" striped hover :items="producers" :fields="fields">
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia</a>
        </template>
        <template v-slot:cell(song-link)="data">
            <router-link :to="'/ProducerSongs/' + data.item.producerName">Credits</router-link>
        </template>
    </b-table>
    </section>
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
           searchCategory: this.$route.params.category.trim(),
           fields: [],
           producers : []
       }
   }, 
   methods:{
       async getAllProducersLike(){
           return await ProducerService.getAllProducersLike('%'+this.searchQuery+'%', localStorage.getItem('jwt')); 
       }
   }, 
   created: function() {
       this.searchQuery = this.$route.params.query;
       this.searchCategory = this.$route.params.category;
       this.getAllProducersLike(this.searchQuery).then((result) => {
           this.producers = result.data[0]; 
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