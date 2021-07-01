<template>
  <v-card class="fest-ticket-card" :img="imagen">
    <v-card-title class="fest-ticket-card">
      Festival Card
    </v-card-title>
    <v-card-text class="fest-ticket-card">
        1 access to all stages only to Friday July 16 with sets of the best artist in the world
    </v-card-text>
    <v-card-subtitle class="fest-ticket-card">
        {{pase}}
    </v-card-subtitle>
  </v-card>
</template>

<script>
import "./TicketCard.sass"
export default {
  name: 'TicketCard',
  props: {
  imagen: 
    {
    type: String,
    default: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/02/06/Pictures/_24d141fc-48a1-11ea-b9ea-c2a424b98379.jpg"
    },
  pase: 
    {
    type: String,
    default: "1x Festival Pass"
    }
  },
  data(){
    return{
      image:[
        {src:"https://catalog.21buttons.com/e9f3b44504e17c16049e36c6fa480c72a7aa4ab1.smedium.jpg"},
        {src:"https://i.pinimg.com/736x/83/16/14/8316146c5a95c15a763ac4fcefc95608.jpg"}
      ]
    }
  }
}
</script>