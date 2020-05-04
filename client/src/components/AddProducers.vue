<template> 
<b-container>
<div class="pr-5 pl-5 mr-5 mt-5 pt-5 center">
    <div class="mt-5 pt-5">
        <h1>Add a Producer</h1>
    </div>
    <div class="pr-5 pl-5 mr-5 ml-5 pt-5">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Producer Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.producerName"
          required
          placeholder="Enter Producer's Stage Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.first_name"
          required
          placeholder="Enter producer's first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Last Name:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.last_name"
          required
          placeholder="Enter producer's last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="State/Country Name:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.state"
          required
          placeholder="Enter producer's State/Country of origin"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="City Name:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.city"
          required
          placeholder="Enter producer's City of origin"
        ></b-form-input>
      </b-form-group>
    
      <b-form-group id="input-group-6" label="Wikipedia URL" label-for="input-6" description="optional">
        <b-form-input
          id="input-6"
          type="url"
          v-model="form.wiki"
          placeholder="Wiki URL"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Enter Instagram handle" label-for="input-7" description="optional">
        <b-form-input
          id="input-7"
          v-model="form.instagram"
          placeholder="Producer's Instagram name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Enter Twitter handle" label-for="input-8" description="optional">
        <b-form-input
          id="input-8"
          v-model="form.twitter"
          placeholder="Producer's Twitter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Enter Producer's DOB" label-for="input-9" description="optional">
      <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="form.dob"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="form.dob"
          button-only
          right
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
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
          producerName: '',
          first_name: '',
          last_name: '',
          state: '',
          city: '',
          wiki: '',
          instagram: '',
          twitter: '',
          dob: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        try{
          ProducerService.insertProducer(this.form, localStorage.getItem('jwt'))
          alert('Producer Submitted Successfully'); 
          this.$router.push('/'); 
        }catch(err){
          alert(err); 
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.producerName = ''
        this.form.city = ''
        this.form.first_name = ''
        this.form.twitter = ''
        this.form.last_name = ''
        this.form.wiki = ''
        this.form.instagram = ''
        this.form.state = ''
        this.form.dob = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>