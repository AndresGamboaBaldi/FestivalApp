<template>
  <v-card class="fest-news-card" img="https://plus.cusica.com/wp-content/uploads/2021/06/coldplay-1-696x696-1.jpg">
    <v-card-title class="fest-news-card">
      Festival Card
    </v-card-title>
    <v-card-text class="fest-news-card">
        Listen to the latest song by Coldplay
    </v-card-text>
  </v-card>
</template>

<script>
import "./NewsCard.sass"
export default {
  name: 'NewsCard',
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