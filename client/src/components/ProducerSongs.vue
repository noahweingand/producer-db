<template>
<div>
    <h1 class="bd-title pt-5 mt-5 mb-5"> All credits by: {{ this.producer }} </h1>
  <b-table v-if="songs.length > 0" striped hover :items="songs" :fields="fields"></b-table>
</div>
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
        console.log(this.$route.params);
        this.getSongs().then((result) =>{
            this.songs = result.data[0]
            for(var prop in this.songs[0]){
                this.fields.push(prop); 
            }
        }).catch((err) => console.log(err)); 
    }, 
    methods: {
        async getSongs(){
            return await ProducerService.getSongsBy(this.producer);
        }
    }
}
</script>

<style>

</style>