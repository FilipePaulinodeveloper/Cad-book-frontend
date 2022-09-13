<template>
    <div>
      <b-row class="match-height">  
        <b-col
          md="6"
          lg="4"      
          v-for="editoraItem in editoras"
          :key="editoraItem.id"
        >
          
          <EditoraComponnent
              :editora = 'editoraItem'
              :nome= 'editoraItem.name'
              :descricao= 'editoraItem.description'
              :foto = 'editoraItem.publishing_company_photo'
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
import EditoraComponnent from './CardPublishingCompanyComponnent .vue'
import Ripple from 'vue-ripple-directive'

export default { 
  components: {
    BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
    BTable,EditoraComponnent,
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
       
    
      editoras: [

      ],
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