<template>
    <div>
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
} from 'bootstrap-vue'
import AuthorComponnent from './CardAuthorComponnent.vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,AuthorComponnent,
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