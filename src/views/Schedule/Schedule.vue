<template>
  <div id="schedule">
    <div id="header"><Header></Header></div>
    <div id="titlediv"><label id="fest-schedule-title">CRONOGRAMA</label></div>
    <div id="schedule-body">
      <schedule-card class="fest-schedule" v-for="card in schedulecards"
          :key="card.id"
          :imagen="card.imagen" 
          :texto="card.texto"></schedule-card>    
    </div>
    <div id="schedule-footer"><Footer></Footer></div>
  </div>
</template>

<script>
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard.vue';
import Footer from '../../components/Footer/Footer.vue';
import Header from '../../components/Header/Header.vue';
import "./Schedule.sass"
export default {
  name: 'Schedule',

  components: {
    ScheduleCard,
    Footer,
    Header
  },

  data: () => ({
    schedulecards: [
      {
        id: 1,
        imagen: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/28/16091698032437.jpg",
        texto: "Viernes" 
      },
       {
        id:2,
        imagen: "https://www.brusselstimes.com/wp-content/uploads/2019/04/k2_items_src_885112323029b4ff67c59e5af71d2a8a.jpg",
        texto: "Sabado" 
      },
      {
        id: 3,
        imagen: "https://cdn1.matadornetwork.com/blogs/1/2015/03/First-1200x853.jpg",
        texto: "Domingo" 
      },
       {
        id: 4,
        imagen: "https://static.billboard.com/files/media/tomorrowland-live-audience-atmosphere-billboard-1548-compressed.jpg",
        texto: "Lunes" 
      }
    ],
  }),
};
</script>
