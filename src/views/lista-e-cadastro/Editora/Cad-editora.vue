 
<template>
  <div>    
    <b-card>
      <validation-observer ref="simpleRules">
        <b-form @submit.prevent="validationForm">
          <b-row>
            <b-col md="6">
              <b-form-group label="Nome da Editora" label-for="nome">
                <validation-provider
                  #default="{ errors }"
                  name="Nome da Editora"
                  rules="required"
                >
                  <b-form-input
                    v-model="nome"
                    id="nome"
                    placeholder="Nome da Editora"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>            
            
            <b-col md="6">
              <validation-provider
                #default="{ errors }"
                name="Foto da Editora"
                
              >
                <b-form-group label="Foto da Editora" label-for="authorPhoto">                  
                  <b-form-file
                    v-model="foto"
                    id="authorPhoto"
                    accept="image/*"                    
                    @change="handleFileUpload"
                  />
                </b-form-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-col>

            <b-col md="12">
              <b-form-group label="Descricao da Editora" label-for="description">
                <div>
                  <validation-provider
                    #default="{ errors }"
                    name="Descrição da Editora"
                    rules="required"
                  >
                    <b-form-textarea
                      v-model="descricao"
                      id="description"
                      placeholder="Descrição da Editora"
                      rows="3"
                      no-resize
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </div>
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
              
                Enviar
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-card>
  </div>
</template>


<script>
import {
  BCard,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormTextarea,
  BFormFile,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required } from "@validations";
import vSelect from "vue-select";

import Ripple from "vue-ripple-directive";

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
    BFormTextarea,
    ValidationProvider,
    required,
    ValidationObserver,
    vSelect,
  },
  directives: {
    Ripple,
  },

  data() {
    return {
      required,

      // file: '',      
      nome:'',
      foto:'',
      descricao:'',    

    };
  },

  methods: {
   validationForm() {
      var campos = {
        name: this.nome,
        publishing_company_photo: this.foto.name,
        description: this.descricao,       
      };

        // console.log(this.foto);

        // let formData = new FormData();
        // formData.append('author_photo', this.foto);    
        

      this.$refs.simpleRules.validate().then((success) => {
        if (success) {
          this.$http.post("publishCompany/", campos)
          .then((response) => {
              this.$swal({
                title: 'Editora cadastrada com sucesso!',
                text: '',
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })     
              this.$router.push('/Editora')         
           })
        } 
      })
    
      
    },
   handleFileUpload( event ){
      console.log(event)      
   },
  },  
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>