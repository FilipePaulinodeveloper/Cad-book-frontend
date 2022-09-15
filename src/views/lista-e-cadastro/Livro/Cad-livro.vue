 
<template>
    <div>
      <b-card>
          <b-form @submit.prevent>
    <b-row>
      <b-col md="6">
        <b-form-group
          label="First Name"
          label-for="mc-first-name"
        >
          <b-form-input
            id="mc-first-name"
            placeholder="First Name"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Last Name"
          label-for="mc-last-name"
        >
          <b-form-input
            id="mc-last-name"
            placeholder="Last Name"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="City"
          label-for="mc-city"
        >
          <b-form-input
            id="mc-city"
            placeholder="City"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Country"
          label-for="mc-country"
        >
          <b-form-input
            id="mc-country"
            placeholder="Country"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Company"
          label-for="mc-company"
        >
          <div class="form-label-group">
            <b-form-input
              id="mc-company"
              placeholder="Company"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label-for="mc-email"
          label="Email"
        >
          <div class="form-label-group">
            <b-form-input
              id="mc-email"
              type="email"
              placeholder="Email"
            />
          </div>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group
          label-for="textarea-no-resize"
          label="textarea-no-resize"
        >
           <div>
              <b-form-textarea
                id="textarea-no-resize"
                placeholder="Fixed height textarea"
                rows="3"
                no-resize
              />
            </div>
        </b-form-group>
      </b-col>
       <b-col md="6">
        <b-form-group
          label-for="wildcard"
          label="wildcard"
        >
            
             
      <b-form-file
        id="wildcard"
        accept="image/*"
      />
        </b-form-group>
      </b-col>



      <!-- submit and reset -->
      <b-col>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
      </b-card>
    </div>
</template>


<script>
import {
  BCard,
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
  BFormTextarea ,
  BFormFile ,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormFile,
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BFormTextarea 
  },
  directives: {
    Ripple,
  },
}
</script>