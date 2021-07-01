<template>
  <body>
      <Header/>
      <TicketCard />
      <Footer />
  </body>
</template>

<script>
import "./Tickets.sass";
import TicketCard from "../../components/TicketCard/TicketCard.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";

export default {
  name: "App",

  components: {
    Footer,
    TicketCard,
    Header
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
