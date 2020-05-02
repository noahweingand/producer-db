<template>
<div>
    <div v-if="info.length > 0">
        <b-button variant="danger">Button</b-button>
        <h1 class="bd-title pt-5 mt-5 mb-5"> Producer: {{ this.producer }} </h1>
        <b-table striped hover :items="info" :fields="infoFields">
        <template v-slot:cell(wikiPage)="data">
                    <a :href="data.value">Wikipedia</a>
        </template>
        </b-table>
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
            info: [], 
            producer: this.$route.params.producer,
            delete: false
        }
    }, 
    methods: {
        async GetProducerInfo(){
            return await ProducerService.getProducerInfo(this.producer, localStorage.getItem('jwt'));
        },
        async deleteProducer(){
            return await ProducerService.deleteProducer(this.producer, localStorage.getItem('jwt'));
        },
        deleteListen: function(){
            this.deleteProducer().then(() => {
                alert(this.producer + "has been deleted!")
                this.$router.push({name: 'Home'})
            })
        }
    },
    created: function(){
        this.GetProducerInfo().then((result) =>{
            this.info = result.data[0];
            console.log(this.info[0])
            for(var prop in this.info[0]){
                this.infoFields.push(prop); 
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