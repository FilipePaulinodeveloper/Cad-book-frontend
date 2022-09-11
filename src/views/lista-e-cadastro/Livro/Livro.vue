<template>
    <div>
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
} from 'bootstrap-vue'
import CardBook from './CardBookComponnent.vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,CardBook,
  },
  directives: {
    Ripple,
  },

  data() {
    return {
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