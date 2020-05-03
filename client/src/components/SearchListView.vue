<template>
<b-container fluid="lg">
<div>
    <b-alert variant="success" class="mt-5 pt-5" v-if="this.searchQuery === undefined || this.searchQuery.trim() === ''" show>Please use a search parameter</b-alert>
    <section class="bd-content" v-else>
    <b-alert variant="success" class="mt-5 pt-5" show> Search Results for: {{ this.searchQuery }} </b-alert>
    <b-table v-if="producers.length > 0 && (searchCategory === 'All' || searchCategory === 'Producers')" striped hover :items="producers" :fields="prodFields">
        <template v-slot:cell(producerName)="data">
            <router-link :to="'/ProducerProfile/' + data.item.producerName">{{data.value}}</router-link>
        </template>
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia</a>
        </template>
        <template v-slot:cell(song-link)="data">
            <router-link :to="'/ProducerSongs/' + data.item.producerName">Credits</router-link>
        </template>
    </b-table>
    <b-table v-if="artists.length > 0 && searchCategory === 'All' || searchCategory === 'Artists'" striped hover :items="artists" :fields="artistFields">
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia</a>
        </template>
        <!-- <template v-slot:cell(song-link)="data">
            <router-link :to="'/ProducerSongs/' + data.item.producerName">Credits</router-link>
        </template> -->
    </b-table>
    </section>
</div>
</b-container>
    
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
           prodFields: [],
           artistFields: [],
           producers : [],
           artists: []
       }
   }, 
   methods:{
       async getAllProducersLike(){
           return await ProducerService.getAllProducersLike('%'+this.searchQuery+'%', localStorage.getItem('jwt')); 
       },
       async getAllArtistsLike(){
           return await ProducerService.getAllArtistsLike('%'+this.searchQuery+'%', localStorage.getItem('jwt')); 
       }
   }, 
   created: function() {
       this.searchQuery = this.$route.params.query;
       this.searchCategory = this.$route.params.category;
       this.getAllProducersLike(this.searchQuery).then((result) => {
           this.producers = result.data[0];
           console.log(result);
           for(var prop in this.producers[0]){
               this.prodFields.push(prop);
           }
           this.prodFields.push('song-link')
        }).catch( (err) => console.log(err)); 
        this.getAllArtistsLike(this.searchQuery).then((result) => {
           this.artists = result.data[0]; 
           for(var prop in this.artists[0]){
               this.artistFields.push(prop); 
           }
           //this.artistFields.push('song-link')
        }).catch( (err) => console.log(err)); 
   }
}
</script>

<style scoped>
    h2 {
        text-align: left; /* Change later */
    }
</style>