 
<template>
  <div>    
    <b-card>
      <validation-observer ref="simpleRules">
        <b-form @submit.prevent="validationForm">
          <b-row>
            <b-col md="6">
              <b-form-group label="Nome do autor" label-for="nome">
                <validation-provider
                  #default="{ errors }"
                  name="Nome do autor"
                  rules="required"
                >
                  <b-form-input
                    v-model="nome"
                    id="nome"
                    placeholder="Nome do autor"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>            
            
            <b-col md="6">
              <validation-provider
                #default="{ errors }"
                name="Foto do autor"
                
              >
                <b-form-group label="Foto do autor" label-for="authorPhoto">                  
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
              <b-form-group label="Descricao do autor" label-for="description">
                <div>
                  <validation-provider
                    #default="{ errors }"
                    name="Descrição do autor"
                    rules="required"
                  >
                    <b-form-textarea
                      v-model="descricao"
                      id="description"
                      placeholder="Descrição do autor"
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
        author_photo: this.foto.name,
        description: this.descricao,       
      };

        console.log(this.foto);

        let formData = new FormData();
        formData.append('author_photo', this.foto);    
        

      this.$refs.simpleRules.validate().then((success) => {
        if (success) {
          this.$http.post("author/", campos,
           formData,
              {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }

          )
          .then((response) => {
              this.$swal({
                title: 'Autor cadastrato com sucesso!',
                text: '',
                icon: 'success',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
              })     
              this.$router.push('/Autor')         
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