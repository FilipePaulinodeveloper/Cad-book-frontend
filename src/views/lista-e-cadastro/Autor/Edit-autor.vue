 
<template>
  <div>    
    <b-card>
      <validation-observer ref="simpleRules">
        <b-form @submit.prevent="cadastrarAutor">
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
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
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
import router from '@/router'
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

      nome:"",
       foto:"",
      descricao:"",

      autor:[]

    };
  },

  methods: {
    cadastrarAutor() {
      let id =  router.currentRoute.params.id ;         
      var campos = {
        id: this.id,
        name: this.nome,
        author_photo: this.foto,
        description: this.descricao,              
      };

      this.$refs.simpleRules.validate().then((success) => {
        if (success) {
          this.$http.put("author/"+id , campos).then((response) => {  
           alert('deu certo')
          });
        }
      });
    },
    
  },  
  created()
  {
    let id =  router.currentRoute.params.id ;
    this.$http.get("author/"+id)
    .then(response => {    
       this.nome = response.data.data.data.name
        this.foto = response.data.data.data.author_photo
        this.descricao = response.data.data.data.description
    })    
    // this.$http.get("author/").then((response) => {
    //     this.nome = response.data.data.name
    //    this.foto = response.data.data.author_photo
    //     this.descricao = response.data.data.description
    // });
  }

};

</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>