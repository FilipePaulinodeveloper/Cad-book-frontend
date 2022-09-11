<template>
    <div>
        
        <b-card
            :img-src="capa"
            img-alt="Card image cap"
            img-top
            :title="titulo"                                                                                     
        >
            <b-card-text>           
                {{sinopse}}
            </b-card-text>

            <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            >
            Ver detalhes
            </b-button>
        </b-card>
        
    </div>
</template>

<script>
import {
  BCard, BCardText, BButton,  
} from 'bootstrap-vue'

import Ripple from 'vue-ripple-directive'

export default {
    components: {
    BCard,BButton,BCardText,
  },
  directives: {
    Ripple,
  },

    data(){
        return {
            livro: ' ',
        }
    },

    props:[
        'titulo',
        'sinopse',
        'capa'
    ],

}
</script>

<style>

</style>