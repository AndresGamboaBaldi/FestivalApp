<template>
  <body>
    <div id="fest-home-background" />
    <div id="fest-home-body">
      <carousel-long />
      <p id="fest-home-event-text">Events</p>
    </div>
    <div id="fest-home-footer">
      <Footer />
    </div>
  </body>
  <!--<schedule-card  v-for="card in schedulecards"
          :key="card.id"
          :imagen="card.imagen" 
          :texto="card.texto"></schedule-card>    -->
</template>

<script>
import "./HomeView.sass";
import CarouselLong from "../../components/Carousel/CarouselLong.vue";
import Footer from "../../components/Footer/Footer.vue";

export default {
  name: "App",

  components: {
    Footer,
    CarouselLong,
  },

  data: () => ({
    schedulecards: [
      {
        id: 1,
        imagen:
          "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/12/28/16091698032437.jpg",
        texto: "Viernes",
      },
      {
        id: 2,
        imagen:
          "https://www.brusselstimes.com/wp-content/uploads/2019/04/k2_items_src_885112323029b4ff67c59e5af71d2a8a.jpg",
        texto: "Sabado",
      },
    ],

    //
  }),
};
</script>
