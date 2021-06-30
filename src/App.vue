<template>
  <v-app :style="cssProps">
    <v-main>
      <home-view/>
      <!--<events-card v-for="card in schedulecards"
        :key="card.id"
        :imagen="card.imagen"
        :texto="card.texto"
        :subtitulo="card.subtitulo"></events-card> 
      <store-card/>
      <ticket-card/>
      <events-card/>
      <news-card/>
      <CarouselLarge/>
      <CarouselLong/>
      <Store-card/>
      <Hello-world/>
      <ScheduleCard/>
      <carousel/>
      <schedule-card/>
      <Footer/>
      <schedule-card  v-for="card in schedulecards"
          :key="card.id"
          :imagen="card.imagen" 
          :texto="card.texto"></schedule-card>   
      <LoginView/>
      -->
    </v-main>
  </v-app>
</template>

<script>
/*
import Header from './components/Header/Header.vue'
import StoreCard from './components/StoreCard/StoreCard.vue';
import TicketCard from './components/TicketCard/TicketCard.vue';
import EventsCard from './components/EventsCard/EventsCard.vue'
import NewsCard from './components/NewsCard/NewsCard.vue'
import CarouselLarge from './components/Carousel/CarouselLarge.vue';
import CarouselLong from './components/Carousel/CarouselLong.vue';
import LoginView from './components/LoginView/LoginView.vue'
import ScheduleCard from './components/ScheduleCard/ScheduleCard.vue';
import Footer from './components/Footer/Footer.vue';
<store-card/>
<ticket-card/>
<events-card/>
*/
import HomeView from "./views/HomeView/HomeView.vue"
export default {
  name: 'App',

  components: {
    /*
      Header,
      Footer,
      ScheduleCard,
      StoreCard,
      TicketCard,
      EventsCard,
      NewsCard,
      CarouselLarge,
      CarouselLong,
      LoginView,
    */
   HomeView
  },
  computed: {
   cssProps () {
      var themeColors = {}
      Object.keys(this.$vuetify.theme.themes.dark).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes.dark[color]
      })
      return themeColors
   }
  },

  data: () => ({
    schedulecards: [
      {
        id: 1,
        imagen: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/28/16091698032437.jpg",
        texto: "Viernes",
        subtitulo: "jabalajaba"
      },
       {
        id:2,
        imagen:  "https://www.brusselstimes.com/wp-content/uploads/2019/04/k2_items_src_885112323029b4ff67c59e5af71d2a8a.jpg",
        texto: "Sabado",
        subtitulo: "jabalajaba2"
      }
    ],
    
    //
  }),
};
</script>
