<template> 
<b-container>
<div class="pr-5 pl-5 mr-5 mt-5 pt-5 center">
    <div class="mt-5">
        <h1>Add an Artist</h1>
    </div>
    <div class="pr-5 pl-5 mr-5 ml-5 pt-5">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Artist Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.artistName"
          required
          placeholder="Enter Artists' Stage Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.first_name"
          required
          placeholder="Enter artists' first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Last Name:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.last_name"
          required
          placeholder="Enter artists' last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="State/Country Name:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.state"
          required
          placeholder="Enter artists' State/Country of origin"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="City Name:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.city"
          required
          placeholder="Enter artists' City of origin"
        ></b-form-input>
      </b-form-group>
    
      <b-form-group id="input-group-6" label="Wikipedia URL" label-for="input-6" description="optional">
        <b-form-input
          id="input-6"
          v-model="form.wiki"
          type="url"
          placeholder="Wiki URL"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Enter Instagram handle" label-for="input-7" description="optional">
        <b-form-input
          id="input-7"
          v-model="form.instagram"
          placeholder="Artists' instragram name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Enter Twitter handle" label-for="input-8" description="optional">
        <b-form-input
          id="input-8"
          v-model="form.twitter"
          placeholder="Artists' Twitter name"
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
          artistName: '',
          first_name: '',
          last_name: '',
          state: '',
          city: '',
          wiki: '',
          instagram: '',
          twitter: '',
        },
        show: true
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        try{
          await ProducerService.insertArtist(this.form, localStorage.getItem('jwt'))
          alert('Insert successful!'); 
          this.$router.push('/'); 
        }catch(er){
          alert('Insert not successful')
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.artistName = ''
        this.form.first_name = ''
        this.form.twitter = ''
        this.form.last_name = ''
        this.form.wiki = ''
        this.form.instagram = ''
        this.form.state = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>