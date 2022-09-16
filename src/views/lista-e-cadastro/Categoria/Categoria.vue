<template>
    <div>
       <b-row class="d-flex justify-content-center">
        <b-col 
        md = "6"
        lg = "6"
        sm="12"
        >
            <b-input-group class="mb-2">
              <b-form-input placeholder="Pesquisar nome da Categoria" v-model="search" />
                  <b-input-group-append>
                    <b-button variant="outline-primary"  @click.prevent="searchCategoria()" >
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
                            <router-link :to="{name: 'cad-categoria'}" > 
                              <span>Cadastrar categoria</span>  

                                <feather-icon icon="GridIcon" />
                            </router-link>
                </b-button> 

          </b-col>        
      </b-row>

      <b-row class="match-height">  
        <b-col
          md="6"
          lg="4"      
          v-for="categoriaItem in categorias"
          :key="categoriaItem.id"
        >
          
          <CategoryComponnent
              :categoria = 'categoriaItem'
              :nome= 'categoriaItem.name'
              :descricao= 'categoriaItem.description'
              :foto = 'categoriaItem.category_photo'
          />

        </b-col>     
        
         

      
      </b-row>    

      <div v-if="categorias == '' ">
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
                  <span>Não foi possivel encontrar uma Categoria, tente cadastrar uma</span>                  
                </div>
              </b-alert>
                 <b-button                            
                            variant="outline-primary"
                            class=" btn mt-1 "
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        >                                                     
                            <router-link :to="{name: 'cad-categoria'}" > 
                              <span>Cadastrar categoria</span>  

                                <feather-icon icon="GridIcon" />
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
import CategoryComponnent from './CardCategoryComponnent.vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,CategoryComponnent,
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
       
    
      categorias: [

      ],
    }
  },

 methods: {
    searchCategoria() {                    
       this.$http.get("categoryfiltername/"+this.search+"/category")
        .then(response => {
          
          this.categorias = response.data.data
          
        })      
    },
    limparfiltro(){
        this.$http.get("category/")
    .then(response => {    
      this.categorias = response.data.data
    })
    }
  },


  created()
  {
    this.$http.get("category/")
    .then(response => {
      console.table(response.data.data)
      this.categorias = response.data.data
    })
  }

}
</script>

<style>

</style>