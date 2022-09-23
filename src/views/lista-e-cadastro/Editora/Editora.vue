<template>
    <div>

       <b-row class="d-flex justify-content-center">
        <b-col 
        md = "6"
        lg = "6"
        sm="9"
        >
            <b-input-group class="mb-2">
              <b-form-input placeholder="Pesquisar nome do Altor" v-model="search" />
                  <b-input-group-append>
                    <b-button variant="outline-primary" @click.prevent="searchEditora()">
                          <feather-icon icon="SearchIcon" />
                    </b-button>
              </b-input-group-append>
            </b-input-group>
            
        </b-col> 
        

      <div v-if="search">
        <b-col
        lg="6"
        md="3"

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
                            <router-link :to="{name: 'cad-editora'}" > 
                              <span>Cadastrar editora</span>  

                                <feather-icon icon="BookmarkIcon" />
                            </router-link>
                </b-button> 

          </b-col>        

      </b-row>


      <b-row class="match-height">  
        <b-col
          md="6"
          lg="4"      
          v-for="editoraItem in editoras"
          :key="editoraItem.id"
        >
          
          <EditoraComponnent
              :codigo = 'editoraItem.id'
              :editora = 'editoraItem'
              :nome= 'editoraItem.name'
              :descricao= 'editoraItem.description'
              :foto = 'editoraItem.publishing_company_photo'
              @afterDeleting = 'afterDeleting'
          />

        </b-col>                 

      </b-row>    

            <div v-if="editoras == '' ">
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
                  <span>Não foi possivel encontrar uma editora, tente cadastrar uma </span>                  
                </div>
              </b-alert>
                 <b-button                            
                            variant="outline-primary"
                            class=" btn mt-1 "
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        >                                                     
                            <router-link :to="{name: 'cad-editora'}" > 
                              <span>Cadastrar editora</span>  

                                <feather-icon icon="BookmarkIcon" />
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
import EditoraComponnent from './CardPublishingCompanyComponnent .vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,EditoraComponnent,
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
          label: 'codigo',        
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
       
    
      editoras: [

      ],
    }
  },


   methods: {
    searchEditora() {                    
       this.$http.get("publishcompanyfiltername/"+this.search+"/publishcompany")
        .then(response => {
          
          this.editoras = response.data.data
          
        })      
    },
    limparfiltro(){
        this.$http.get("publishCompany/")
    .then(response => {
      console.table(response.data.data)
      this.editoras = response.data.data
    })
    },

     afterDeleting(){
       this.$http.get("publishCompany/")
      .then(response => {     
        this.editoras = response.data.data
      })
    }
  },

  created()
  {
    this.$http.get("publishCompany/")
    .then(response => {
      console.table(response.data.data)
      this.editoras = response.data.data
    })
  }

}
</script>

<style>

</style>