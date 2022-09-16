 
<template>
  <div>
    <b-card>
     <validation-observer ref="simpleRules">
      <b-form @submit.prevent>
        <b-row>

          <b-col md="6">
              <b-form-group
                label="Titulo"
                label-for="title"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Titulo"
                  rules="required"
                >
                  <b-form-input
                    v-model="titulo"
                    id="title"
                    placeholder="Titulo do livro"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group
              label="Número de Páginas"
              label-for="pages"
            >
                <b-form-input
                  id="pages"
                  placeholder="Número de Páginas"
                />
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group          
              label="Editora"    
              label-for="publishingCompany"
            >
            <validation-provider
                  #default="{ errors }"
                  name="Editora"
                  rules="required"
                >
              <v-select
                  id="publishingCompany"
                  v-model="selectedEditora"                                                                  
                  :options='optionsEditoras'
                  :value = 'optionsEditoras.name'
                  :reduce = "optionsEditoras => optionsEditoras.id"
                  label = 'name'
                />      
               <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>    
            </b-form-group>
          </b-col>

            <b-col md="6">
              <b-form-group
                label="Autor"
                label-for="author"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Autor"
                  rules="required"
                >
                  <v-select
                      id = 'author'
                      multiple
                      v-model="selectedAutor"                                                                  
                      :options='optionsAutores'
                      :value = 'optionsAutores.name'
                      :reduce = "optionsAutores => optionsAutores.id"
                      label = 'name'

                    />       
                 <small class="text-danger">{{ errors[0] }}</small>
               </validation-provider>
              </b-form-group>
            </b-col>

          <b-col md="6">
            <b-form-group
              label="Categoria"
              label-for="category"
            >
              <validation-provider
                  #default="{ errors }"
                  name="Categoria"
                  rules="required"
                >
                  <v-select
                      id = 'category'
                      multiple
                      v-model="selecteCategoria"                                                                  
                      :options='optionsCategorias'
                      :value = 'optionsCategorias.name'
                      :reduce = "optionsCategorias => optionsCategorias.id"
                      label = 'name'
                    />

               <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>       

            </b-form-group>
          </b-col>      

      

          <b-col md="6">
              <validation-provider
                  #default="{ errors }"
                  name="Capa do livro"
                  rules="required"
                >
                  <b-form-group
                    label="Capa do livro"
                    label-for="bookphoto"
                  >              
                    <b-form-file
                    v-model="capadolivro"
                      id="bookphoto"
                      accept="image/*"
                    />
                  </b-form-group>
                 <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
          </b-col>


          <b-col md="12">
              <b-form-group
                label="Sinopse"
                label-for="sinopse"
              >              
                <div>
                    <validation-provider
                  #default="{ errors }"
                  name="Sinopse"
                  rules="required"
                >
                      <b-form-textarea
                        v-model="sinopse"
                        id="sinopse"
                        placeholder="Sinopse do livro"
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
              @click.prevent="validationForm" 
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
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
  BFormTextarea ,
  BFormFile ,
  
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {required} from '@validations'
import vSelect from 'vue-select'

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
      titulo: this.titulo = '',
      capadolivro:this.capadolivro = '',
      sinopse: this.sinopse = '',
      selectedEditora: this.selectedEditora = '',
      selectedAutor: this.selectedAutor = '',
      selecteCategoria: this.selecteCategoria = '',

      optionsEditoras: [],  
      optionsAutores:[],
      optionsCategorias:[],
      
   
    }
  },

  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.$http.post("book/")
          .then(response => {           
            this.livros = response.data.data
          })
        }
      })
    },
  },

  created()
  {
    this.$http.get("publishCompany/")
    .then(response => {    
      this.optionsEditoras = response.data.data
    }) 
    this.$http.get("author/")
    .then(response => {    
      this.optionsAutores = response.data.data
    }) 
     this.$http.get("category/")
    .then(response => {    
      this.optionsCategorias = response.data.data
    }) 
  }
}

</script>

<style lang="scss">

@import '@core/scss/vue/libs/vue-select.scss';

</style>