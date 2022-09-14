<template>
    <div>
      <b-row class="d-flex justify-content-center">
        <b-col 
        md = "6"
        lg = "6"
        sm="12"
        >
            <b-input-group class="mb-2">
              <b-form-input placeholder="Pesquisar nome do livro" />
                  <b-input-group-append>
                    <b-button variant="outline-primary" @click="filtrar">
                          <feather-icon icon="SearchIcon" />
                    </b-button>
              </b-input-group-append>
            </b-input-group>
            
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
  BFormGroup
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
    vSelect
  },
  directives: {
    Ripple,
  },

  

  data() {
    return {
      filtrolivro: ' ' ,
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

      filtrolivros:[
        
      ],

    }    
    
    
  },
  
  methods: {
    filtrar(filtrolivros) {

     this.teste = this.livro.length

    //  console.log(this.filtrolivros);
      console.log(this.teste);
    }
  },


  created()
  {
    this.$http.get("book/")
    .then(response => {
      console.table(response.data.data)
      this.livros = response.data.data
    })

     this.$http.get("bookfiltertitle/{{title}}/books")
    .then(response => {
      console.table(response.data.data)
      this.filtrolivros = response.data.data
    })
  }

}
</script>

<style>

</style>