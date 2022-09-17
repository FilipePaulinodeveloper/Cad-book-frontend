<template>
    <div>


        <b-row class="d-flex justify-content-center">
        <b-col 
        md = "6"
        lg = "6"
        sm="12"
        >
            <b-input-group class="mb-2">
              <b-form-input placeholder="Pesquisar nome do Altor" v-model="search" />
                  <b-input-group-append>
                    <b-button variant="outline-primary" @click.prevent="searchAutor()">
                          <feather-icon icon="SearchIcon" />
                    </b-button>
              </b-input-group-append>
            </b-input-group>
            
        </b-col> 
        

      <div v-if="search">
        <b-col
        lg="3"
        >
        <b-button variant="outline-primary"  @click.prevent="limparfiltro()">              
               <feather-icon icon="XCircleIcon" />                
        </b-button>

        </b-col>             
       </div>        

          <b-col
            md="6"
            lg="3"                       
          >          

                <b-button                            
                  variant="outline-primary"
                  class=" btn"
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                >                                                     
                            <router-link :to="{name: 'cad-autor'}" > 
                              <span>Cadastrar autor</span>  

                                <feather-icon icon="UserIcon" />
                            </router-link>
                </b-button> 

          </b-col>        
      </b-row>
      <div v-if="autores == '' ">
          <b-row class="d-flex justify-content-center">
                <b-col 
                md = "12"
                lg = "12"
                sm="12"
                >
              <b-alert
                variant="warning"
                show
              >
                <h4 class="alert-heading">
                  Mensagem:
                </h4>
                <div class="alert-body">
                  <span>Não foi possivel encontrar um autor, tente cadastrar um </span>                  
                </div>
              </b-alert>
                 <b-button                            
                            variant="outline-primary"
                            class=" btn mt-1 "
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        >                                                     
                            <router-link :to="{name: 'cad-autor'}" > 
                              <span>Cadastrar autor</span>  

                                <feather-icon icon="BookOpenIcon" />
                            </router-link>
                        </b-button> 
               </b-col>
              </b-row>          
          </div>
      <b-row class="match-height">  
        <b-col
          md="6"
          lg="4"      
          v-for="autorItem in autores"
          :key="autorItem.id"
        >
          
          <AuthorComponnent
              :autor = 'autorItem'
              :nome= 'autorItem.name'
              :descricao= 'autorItem.description'
              :foto = 'autorItem.author_photo'
          />

        </b-col>

           
        
         

      
      </b-row>          
 
     

      <!-- <b-table  
      :items="livros"  
      :fields="campos"
      /> -->
  


      
    </div>
   
</template>

<script>

import {
  BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
  BTable, 
  BInputGroup, BFormInput, BInputGroupAppend, BInputGroupPrepend,
  BFormGroup,
  BAlert

  
} from 'bootstrap-vue'
import AuthorComponnent from './CardAuthorComponnent.vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,AuthorComponnent,
    BInputGroup, BFormInput, BInputGroupAppend, BInputGroupPrepend,
    BFormGroup,
    BAlert
    
  },
  directives: {
    Ripple,
  },

  data() {
    return {
      search: ' ' ,
      campos: [
        
        {
          key: 'id',
          label: 'Código',        
        }, 
        {
          key: 'name',
          label: 'nome',        
        }, 
        {
          key: 'description',
          label: 'descricao',        
        }, 
        {
          key: 'author_photo',
          label: 'foto',        
        }, 
        
      ], 
       
    
      autores: [

      ],
    }
  },

  methods: {
    searchAutor() {                    
       this.$http.get("authorfiltername/"+this.search+"/author")
        .then(response => {
          
          this.autores = response.data.data
          
        })      
    },
    limparfiltro(){
        this.$http.get("author/")
    .then(response => {    
      this.autores = response.data.data
    })
    }
  },

  created()
  {
    this.$http.get("author/")
    .then(response => {
      console.table(response.data.data)
      this.autores = response.data.data
    })
  }

}
</script>

<style>

</style>