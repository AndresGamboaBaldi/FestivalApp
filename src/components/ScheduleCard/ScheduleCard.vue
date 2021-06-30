<template>
  <v-card class="fest-schedule-card" :img="imagen">
    <v-card-title class="fest-schedule-card">
      {{texto}}
    </v-card-title>
  </v-card>
</template>
<script>
import "./ScheduleCard.sass"
  export default {
  name: 'ScheduleCard',
  props: {
    imagen: 
      {
      type: String,
      default: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/28/16091698032437.jpg"
      },
    texto: 
      {
      type: String,
      default: "Viernes"
      }
    },
  data: () => ({
      img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/28/16091698032437.jpg"
    }),
}
</script>

