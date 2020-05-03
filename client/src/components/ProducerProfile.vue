<template>
<div>
    <div v-if="info.length > 0">
        <h1 class="bd-title pt-5 mt-5 mb-5"> Producer: {{ this.producer }} </h1>
        <b-table striped hover :items="info" :fields="infoFields">
        <template v-slot:cell(wikiPage)="data">
            <a :href="data.value">Wikipedia</a>
        </template>
        </b-table>

        <h2>Tags:</h2>
        <b-table v-if="tags.length > 0" striped hover :items="tags" :fields="tagFields">
        <template v-slot:cell(sound)="data">
            <a :href="data.value">Audio Link</a>
        </template>
        </b-table>
        <b-alert v-else variant="danger" class="mt-5 pt-5" v-cloak show>No tags found...</b-alert>

        <h2>Digital Audio Workshops:</h2>
        <b-table v-if="daws.length > 0" striped hover :items="daws" :fields="toolsFields">
        
        </b-table>
        <b-alert v-else variant="danger" class="mt-5 pt-5" v-cloak show>No DAWs found...</b-alert>

        <h2>Virtual Studio Technologies:</h2>
        <b-table v-if="vsts.length > 0" striped hover :items="vsts" :fields="toolsFields">
        
        </b-table>
        <b-alert v-else variant="danger" class="mt-5 pt-5" v-cloak show>No VSTs found...</b-alert>

        <h2>Hardware:</h2>
        <b-table v-if="hardware.length > 0" striped hover :items="hardware" :fields="toolsFields">
        
        </b-table>
        <b-alert v-else variant="danger" class="mt-5 pt-5" v-cloak show>No hardware found...</b-alert>
    </div>
    <b-alert v-else variant="danger" class="mt-5 pt-5" v-cloak show>No results found...</b-alert>
    <b-button v-b-modal="'delete-modal'" squared variant="danger">Delete Producer</b-button>
    <b-modal @ok="deleteListen" variant="danger" id="delete-modal">
        <h3>Are you sure you want to delete the producer, {{ this.producer }}? This cannot be undone.</h3>
    </b-modal>
</div>
</template>

<script>
import ProducerService from '../ProducerService';

export default {
    name: 'ProducerProfile',
    data(){
        return {
            infoFields: [],
            toolsFields: [],
            tagFields: [], 
            info: [],
            daws: [],
            vsts: [],
            tags: [],
            hardware: [],
            producer: this.$route.params.producer,
            delete: false
        }
    }, 
    methods: {
        async GetProducerInfo(){
            return await ProducerService.getProducerInfo(this.producer, localStorage.getItem('jwt'));
        },
        async GetProducerDaws(){
            return await ProducerService.getProducerDaws(this.producer, localStorage.getItem('jwt'));
        },
        async GetProducerVsts(){
            return await ProducerService.getProducerVsts(this.producer, localStorage.getItem('jwt'));
        },
        async GetProducerHardware(){
            return await ProducerService.getProducerHardware(this.producer, localStorage.getItem('jwt'));
        },
        async GetProducerTags(){
            return await ProducerService.getProducerTags(this.producer, localStorage.getItem('jwt'));
        },
        async deleteProducer(){
            return await ProducerService.deleteProducer(this.producer, localStorage.getItem('jwt'));
        },
        deleteListen: function(){
            this.deleteProducer().then(( result ) => {
                alert(result.data.status); 
                this.$router.push({name: 'Home'})
            }).catch( (err) => console.log(err)); 
        }
    },
    created: function(){
        this.GetProducerInfo().then((result) =>{
            this.info = result.data[0];
            for(var prop in this.info[0]){
                this.infoFields.push(prop); 
            }
        }).catch((err) => {
            console.log(err); 
        });
        this.GetProducerDaws().then((result) =>{
            this.daws = result.data[0];
            for(var prop in this.daws[0]){
                this.toolsFields.push(prop); 
            }
        }).catch((err) => {
            console.log(err); 
        });
        this.GetProducerVsts().then((result) =>{
            this.vsts = result.data[0];
        }).catch((err) => {
            console.log(err); 
        });
        this.GetProducerHardware().then((result) =>{
            this.hardware = result.data[0];
        }).catch((err) => {
            console.log(err); 
        });
        this.GetProducerTags().then((result) =>{
            this.tags = result.data[0];
            for(var prop in this.tags[0]){
                this.tagFields.push(prop); 
            }
        }).catch((err) => {
            console.log(err); 
        }); 
        
    }
}
</script>

<style>
[v-cloak]{
    display: none; 
}
</style>