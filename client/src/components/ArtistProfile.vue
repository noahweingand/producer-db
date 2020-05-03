<template>
<b-container fluid="lg">
<div>
    <div v-if="info.length > 0">
        <h1 class="bd-title pt-5 mt-5 mb-5"> Artist: {{ this.producer }} </h1>
        <b-table striped hover :items="info" :fields="infoFields">
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia</a>
        </template>
        </b-table>
    </div>
</div>
</b-container>
</template>

<script>
import ProducerService from '../ProducerService';

export default {
    name: 'ArtistProfile',
    data() {
        return {
            artist: this.$route.params.artist,
            info: [],
            infoFields: []
        }
    },
    methods: {
        async GetArtistInfo(){
            return await ProducerService.getArtistInfo(this.artist, localStorage.getItem('jwt'));
        }
    },
    created: function() {
        this.GetArtistInfo().then((result) =>{
            this.info = result.data[0];
            for(var prop in this.info[0]){
                this.infoFields.push(prop); 
            }
        }).catch((err) => {
            console.log(err); 
        });
    }
}
</script>

<style scoped>

</style>