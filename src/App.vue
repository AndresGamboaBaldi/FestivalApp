<template>
  <v-app :style="cssProps">
    <v-main>
      <Store-card/>
      <Hello-world/>
      <ScheduleCard/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer/Footer';
//import HelloWorld from './components/HelloWorld';
import StoreCard from './components/StoreCard/StoreCard.vue';
import ScheduleCard from './components/ScheduleCard/ScheduleCard.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Footer,
    StoreCard,
    ScheduleCard
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
