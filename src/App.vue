<template>
  <v-app :style="cssProps">
    <v-main>
      <store-card/>
      <ticket-card/>
      <events-card/>
      <news-card/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
//import Footer from './components/Footer/Footer.vue';
//import HelloWorld from './components/HelloWorld';
//<store-card/>
//<ticket-card/>
//<events-card/>
import StoreCard from './components/StoreCard/StoreCard.vue';
import TicketCard from './components/TicketCard/TicketCard.vue';
import EventsCard from './components/EventsCard/EventsCard.vue'
import NewsCard from './components/NewsCard/NewsCard.vue'

export default {
  name: 'App',

  components: {
    //HelloWorld,
    //Footer,
    StoreCard,
    TicketCard,
    EventsCard,
    NewsCard
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
