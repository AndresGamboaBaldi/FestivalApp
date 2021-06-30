<template>
  <v-card class="fest-news-card" :img="imagen">
    <v-card-title class="fest-news-card">
      {{titulo}}
    </v-card-title>
    <v-card-text class="fest-news-card">
        {{texto}}
    </v-card-text>
  </v-card>
</template>

<script>
import "./NewsCard.sass"
export default {
  name: 'NewsCard',
  props: {
    imagen: {
      type: String,
      default:"https://plus.cusica.com/wp-content/uploads/2021/06/coldplay-1-696x696-1.jpg"
    },
    texto:{
      type: String,
      default: " Escucha el ultimo sencillo de coldplay"
    },
    titulo:{
      type: String,
      default: "Higher power"
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