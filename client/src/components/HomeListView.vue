<template>
    <b-container fluid="lg">
        <b-row>
            <h2>Producers:</h2>
            <b-table v-if="producers.length > 0" striped hover :items="producers" :fields="prodFields">
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
        </b-row>
        <b-row>
            <h2>Artists:</h2>
            <b-table v-if="artists.length > 0" striped hover :items="artists" :fields="artistFields">
                <template v-slot:cell(stageName)="data">
                    <router-link :to="'/ArtistProfile/' + data.item.stageName">{{data.value}}</router-link>
                </template>
                <template v-slot:cell(wikiPage)="data">
                    <a :href="data.value">Wikipedia</a>
                </template>
            </b-table>
        </b-row>
    </b-container>
</template>

<script>
import ProducerService from '../ProducerService'; 

export default {
   name: 'HomeListView' , 
   data() {
       return {
           prodFields : [],
           artistFields : [],
           producers : [],
           artists : []
       }
   }, 
   methods:{
       async getAllProducers(){
           return await ProducerService.getAllProducers(['producerName', 'wikiPage'], localStorage.getItem('jwt')); 
       },
       async getAllArtists(){
           return await ProducerService.getAllArtists(['stageName','wikiPage'], localStorage.getItem('jwt')); 
       }
   }, 
   created: function() {
       this.getAllProducers().then((result) => {
           this.producers = result.data; 
           for(var prop in this.producers[0]){
               this.prodFields.push(prop); 
           }
           this.prodFields.push('song-link')
        }).catch( (err) => console.log(err));
        this.getAllArtists().then((result) => {
           this.artists = result.data; 
           for(var prop in this.artists[0]){
               this.artistFields.push(prop); 
           }
        }).catch( (err) => console.log(err)); 
   }
}
</script>

<style>

</style>