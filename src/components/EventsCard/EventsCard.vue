<template>
  <v-card class="fest-events-card" :img="imagen">
    <v-card-title class="fest-events-card">
      {{texto}}
    </v-card-title>
    <v-card-subtitle class="fest-events-card">
        {{subtitulo}}
    </v-card-subtitle>
  </v-card>
</template>

<script>
import "./EventsCard.sass"
export default {
  name: 'TicketCard',
  props: {
    imagen: {
      type: String,
      default:"https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/02/06/Pictures/_24d141fc-48a1-11ea-b9ea-c2a424b98379.jpg"
    },
    texto:{
      type: String,
      default: "Rainbow Fest"
    },
    subtitulo:{
      type: String,
      default: "July 16 & 17, 2021"
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