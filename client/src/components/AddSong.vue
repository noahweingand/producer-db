<template> 
<b-container>
<div class="pr-5 pl-5 mr-5 mt-5 pt-5 center">
    <div class="mt-5">
        <h1>Add a Song</h1>
    </div>
    <div class="pr-5 pl-5 mr-5 ml-5 pt-5">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Song Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.songName"
          required
          placeholder="Enter Song Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Album Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.album_name"
          required
          placeholder="Enter Album Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Producer(s) Name:" label-for="input-3" description="Producer must already exist in DB">
        <b-form-select v-for="(v, i) of this.form.producerNames" :key="i" :options="producerOptions"
          id="input-3"
          v-model="form.producerNames[i]"
          required
          placeholder="Enter Producer name"
          class="mt-1"
        ></b-form-select>
      <b-button size="sm" variant="primary" @click="addProducer"  class="mt-2">+</b-button>
      </b-form-group>

      <b-form-group id="input-group-4" label="Artist(s) Name:" label-for="input-4" description="Artist must already exist in DB">
        <b-form-select v-for="(v,i) of this.form.artistNames" :key="i" :options="artistOptions"
          id="input-4"
          v-model="form.artistNames[i]"
          required
          placeholder="Enter Artist Name"
          class="mt-1"
        ></b-form-select>
      <b-button size="sm" variant="primary" @click="addArtist"  class="mt-2">+</b-button>
      </b-form-group>

      <b-form-group id="input-group-5" label="Song length:" label-for="input-6" description="Format in 'HH:mm:ss'">
        <b-form-input 
          id="input-5"
          v-model="form.song_length"
          required
          placeholder="Enter Song length"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Genre:" label-for="input-7">
        <b-form-input 
          id="input-5"
          v-model="form.genre"
          placeholder="Enter Genre:"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>

</div>
</b-container>
</template>

<script>
import ProducerService from '../ProducerService'; 

 export default {
    data() {
      return {
        form: {
          artistNames: [''],
          song_length: '',
          producerNames: [''],
          album_name: '',
          songName: '', 
          genre: ''
        },
        show: true, 
        producerOptions : [], 
        artistOptions : []
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()

        //check proper time format

        let message = undefined

        try{
          message = await ProducerService.addSong(this.form, localStorage.getItem('jwt')); 
          alert(message.data.status); 
          this.$router.push('/')
        }catch(err){
          alert('Song not inserted properly'); 
          console.log(err); 
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.artistNames = ['']
        this.form.song_length = ''
        this.form.producerNames = ['']
        this.form.album_name = ''
        this.form.songName = ''
        this.form.genre = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }, 
      addProducer(){
          this.form.producerNames.push(''); 
      }, 
      addArtist(){
          this.form.artistNames.push(''); 
      }, 
      async getAllProducers(){
          return await ProducerService.getAllProducers(['producerName'], localStorage.getItem('jwt')); 
      },
      async getAllArtists(){
          return await ProducerService.getAllArtists(['stageName','wikiPage'], localStorage.getItem('jwt')); 
      }
    }, 
    created(){
      this.getAllProducers().then((result) => {
        result.data.forEach((el) => this.producerOptions.push(el.producerName)); 
      }).catch( (err) => console.log(err));

      this.getAllArtists().then( (result) => {
        result.data.forEach((el) => this.artistOptions.push(el.stageName)); 
      }).catch( (err) => console.log(err)); 
    }
  }
</script>