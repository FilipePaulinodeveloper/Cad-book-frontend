<template>
    <div>
        
        <b-card                    
            :img-src="foto"
            img-alt="Card image cap"
            img-top                                  
            :title="nome" 
        >           
            <b-card-text>           
                {{descricao}}
            </b-card-text>
            
            <!-- BOTAO -->
            <b-row class="match-height" >
                <b-col 
                    md="12"
                    lg="6"
                    sm="12"   
                >             
                    <b-button
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="primary"
                        class="mt-1"
                    >
                        Ver mais
                    </b-button>

                </b-col>

                <b-col 
                    md="6"
                    lg="3"   
                    sm="6"
                >
                        <b-button
                            variant="outline-primary"
                            class=" btn-icon mt-1 mb-1"
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        >
                            <router-link :to="{name: 'edit-editora', params: { id:codigo } }" >     
                                <feather-icon icon="EditIcon" />
                            </router-link>          

                        </b-button>     
                </b-col>    

                 <b-col 
                    md="6"
                    lg="3"   
                    sm="6"
                >
                        <b-button                            
                            variant="outline-primary"
                            class=" btn-icon mt-1 "
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            @click="deletar(codigo)"
                        >                                                     
                            
                                <feather-icon icon="TrashIcon" />
                           
                        </b-button>  

<!-- 
    <router-link to="/nova-unidade">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          <feather-icon
              icon="PlusCircleIcon"
              class="mr-50"
            />
            <span class="align-middle">Adicionar nova unidade</span>
        </b-button>
    </router-link> -->
                    
                </b-col>                    

              

                
            </b-row>           
           
          
        </b-card>
        
    </div>
</template>

<script>
import {
  BCard, BCardText, BButton, BRow,BCol 
} from 'bootstrap-vue'

import Ripple from 'vue-ripple-directive'

export default {
    components: {
    BCard,BButton,BCardText,BRow,BCol 
  },
  directives: {
    Ripple,
  },

    data(){
        return {
            editoras: ' ',        
      }
    },  
   

    props:[
        'codigo',
        'nome',
        'descricao',
        'foto'
    ],

    methods:{
        deletar(codigo) {                       
            this.$swal({            
                title: 'Você tem certeza?',
                text: "Você não será capaz de reverter isso!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, exclua!',
                customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ml-1',
                },
                buttonsStyling: false,
            }).then(result => {
                if (result.value) {
                    this.$http.delete("publishCompany/"+codigo)
                    .then(
                        this.$emit('afterDeleting')
                    )       
                this.$swal({
                    icon: 'success',
                    title: 'Excluido!',
                    text: 'A Editora foi excluida',
                    customClass: {
                    confirmButton: 'btn btn-success',
                    },
                })
                }
            })
          
      
        }
    }

}
</script>

<style>

</style>