<template>
  <v-card class="fest-store-card" img="https://catalog.21buttons.com/e9f3b44504e17c16049e36c6fa480c72a7aa4ab1.smedium.jpg">
    <v-card-title class="fest-store-card">
      Poleras
    </v-card-title>
  </v-card>
</template>

<script>
import "./StoreCard.sass"
export default {
  name: 'StoreCard',
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
