<template>
    <div>
      <b-row class="d-flex justify-content-center">
        <b-col 
        md = "6"
        lg = "6"
        sm="12"
        >
            <b-input-group class="mb-2">
              <b-form-input placeholder="Pesquisar nome do livro" v-model="search" />
                  <b-input-group-append>
                    <b-button variant="outline-primary" @click.prevent="searchlivros()">
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
                            <router-link :to="{name: 'cad-livro'}" > 
                              <span>Cadastrar livro</span>  

                                <feather-icon icon="BookOpenIcon" />
                            </router-link>
                </b-button> 

          </b-col>         
    

      </b-row>

    
      <b-row class="match-height">          
          <b-col
            md="6"
            lg="4"      
            v-for="livroItem in livros"
            :key="livroItem.id"            
          >          
            <CardBook 
                :livro = 'livroItem'
                :titulo= 'livroItem.title'
                :sinopse= 'livroItem.sinopse'
                :capa = 'livroItem.book_photo'
            />
          </b-col>         
       </b-row>          

        <div v-if="livros == '' ">
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
                  <span>Não foi possivel encontrar um livro, tente cadastrar um </span>                  
                </div>
              </b-alert>
                 <b-button                            
                            variant="outline-primary"
                            class=" btn mt-1 "
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        >                                                     
                            <router-link :to="{name: 'cad-livro'}" > 
                              <span>Cadastrar livro</span>  

                                <feather-icon icon="BookOpenIcon" />
                            </router-link>
                        </b-button> 
               </b-col>
              </b-row>          
          </div>

             
            
               


          
             
   
     

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
import vSelect from 'vue-select'
import CardBook from './CardBookComponnent.vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,CardBook,
    BInputGroup, BFormInput, BInputGroupAppend, BInputGroupPrepend,
    BFormGroup,
    BAlert,
    vSelect
  },
  directives: {
    Ripple,
  },

  

  data() {
    return {
      search: ' ' ,
      showsearch:false,
            
      campos: [
        
        {
          key: 'id',
          label: 'Código',        
        }, 
        {
          key: 'title',
          label: 'Título',        
        }, 
        {
          key: 'sinopse',
          label: 'Sinopse',        
        }, 
        {
          key: 'pages',
          label: 'Núm. Pág.',        
        }, 
        {
          key: 'cover_type',
          label: 'Tipo de capa',        
        }, 
        {
          key: 'book_photo',
          label: 'Capa',        
        }, 
        {
          key: 'publishing_company_id',
          label: 'Editora',        
        },
      ], 
       
    
      livros: [

      ],   

    }    
    
    
  },
  
  methods: {
    searchlivros() {                    
       this.$http.get("bookfiltertitle/"+this.search.trim()+"/books")
        .then(response => {
          
          this.livros = response.data.data
          
        })      
    },
    limparfiltro(){
        this.$http.get("book/")
    .then(response => {    
      this.livros = response.data.data
    })
    }
  },


  created()
  {
    this.$http.get("book/")
    .then(response => {
      console.table(response.data.data)
      this.livros = response.data.data
    })
 
  }

}

</script>

<style>

</style>