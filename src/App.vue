<template>
  <v-app :style="cssProps">
    <v-main>
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  
  name: 'App',

  components: {
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
        texto: "Viernes" 
      },
       {
        id:2,
        imagen:  "https://www.brusselstimes.com/wp-content/uploads/2019/04/k2_items_src_885112323029b4ff67c59e5af71d2a8a.jpg",
        texto: "Sabado" 
      }
    ],
    
    //
  }),
};
</script>
