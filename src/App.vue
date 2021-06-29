<template>
  <v-app :style="cssProps">
    <v-main>
      <Carousel/>
      <!--
      <Store-card/>
      <Hello-world/>
      <Footer/>
      -->
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Carousel from './components/Carousel/Carousel.vue';
//import HelloWorld from './components/HelloWorld';
//import Footer from './components/Footer/Footer.vue';

//import StoreCard from './components/StoreCard/StoreCard.vue';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Carousel,
    //HelloWorld,
    //Footer,
    //StoreCard
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
