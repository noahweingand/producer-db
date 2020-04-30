<template>
<div>
  <h1> {{ producer }} </h1>
  <b-table v-if="songs.length > 0" striped hover :items="songs" :fields="fields"></b-table>
</div>
</template>

<script>
import ProducerService from '../ProducerService';

export default {
    name: 'ProducerSongs',
    props: ['producer'],
    data(){
        return {
            fields: [], 
            songs: []
        }
    }, 
    created: function(){
        this.getSongs().then((result) =>{
            this.songs = result.data[0]
            for(var prop in this.songs[0]){
                this.fields.push(prop); 
            }
        }).catch((err) => console.log(err)); 
    }, 
    methods: {
        async getSongs(){
            return await ProducerService.getSongsBy(this.producer)
        }
    }
}
</script>

<style>

</style>