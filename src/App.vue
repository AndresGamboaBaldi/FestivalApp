<template>
  <v-app :style="cssProps">
    <v-main>
      <!--
      <store-card/>
      <ticket-card/>
      <events-card/>
      <news-card/>
      <CarouselLarge/>
      <CarouselLong/>
      <Store-card/>
      <Hello-world/>
      <ScheduleCard/>
      <Footer/>
      <LoginView/>
      -->
    </v-main>
  </v-app>
</template>

<script>
//import Footer from './components/Footer/Footer';
//import ScheduleCard from './components/ScheduleCard/ScheduleCard.vue';
//import Footer from './components/Footer/Footer.vue';
//<store-card/>
//<ticket-card/>
//<events-card/>
/*
import StoreCard from './components/StoreCard/StoreCard.vue';
import TicketCard from './components/TicketCard/TicketCard.vue';
import EventsCard from './components/EventsCard/EventsCard.vue'
import NewsCard from './components/NewsCard/NewsCard.vue'
import CarouselLarge from './components/Carousel/CarouselLarge.vue';
import CarouselLong from './components/Carousel/CarouselLong.vue';
import LoginView from './components/LoginView/LoginView.vue'
*/
export default {
  name: 'App',

  components: {
    /*
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
    //
  }),
};
</script>
