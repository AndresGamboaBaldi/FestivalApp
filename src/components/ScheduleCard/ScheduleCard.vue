<template>
  <v-card class="fest-schedule-card" img="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/28/16091698032437.jpg">
    <v-card-title class="fest-schedule-card">
      Viernes
    </v-card-title>
  </v-card>
</template>
<script>
import "./ScheduleCard.sass"
  export default {
  name: 'ScheduleCard',
  data(){
    return{
      image:[
        {src:"https://catalog.21buttons.com/e9f3b44504e17c16049e36c6fa480c72a7aa4ab1.smedium.jpg"},
        {src:"https://i.pinimg.com/736x/83/16/14/8316146c5a95c15a763ac4fcefc95608.jpg"},
        {src:"../../assets/cardDomingo.png"},
      ]
    }
  }
}
</script>

