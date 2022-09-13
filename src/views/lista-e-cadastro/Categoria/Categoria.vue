<template>
    <div>
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
import CategoryComponnent from './CardCategoryComponnent.vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,CategoryComponnent,
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
       
    
      categorias: [

      ],
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