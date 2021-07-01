<template>
<body>
  <div class="tickets-default"></div>
    <div class="header"><Header/></div>
    <div class="titlediv"><label class="tickets-label">Tickets</label></div>
    <div class="tickets-body">
      <button class="button">Reservar</button>
      <div class="fest-ticket-row">
        <v-row class="fest-tickets">
          <v-col v-for="ticket in ticketscard2"
          :key="ticket.id">
          <TicketCard class="fest-tickets-cards"
          :imagen="ticket.imagen" 
          :pase="ticket.pase"></TicketCard>    
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="tickets-footer"><Footer></Footer></div>
</body>  
</template>

<script>
import "./TicketsDefault.sass";
import TicketCard from "../../components/TicketCard/TicketCard.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";

export default {
  name: "Tickets",

  components: {
    Footer,
    TicketCard,
    Header
  },

  data: () => ({
        ticketscard2: [
      {
        id: 1,
        imagen: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/02/06/Pictures/_24d141fc-48a1-11ea-b9ea-c2a424b98379.jpg",
        pase: "2x Festival Pass"
      },
       {
        id:2,
        imagen: "https://i.pinimg.com/736x/b0/dc/41/b0dc415856b0326ec6d24c20aacfd55c.jpg",
        pase: "2x Silver Pass"
      },
      {
        id: 3,
        imagen: "https://images.canvas8.com/2020/07/06/06-07-20-virgin-money-music-st.jpg",
        pase: "2x Gold Pass"
      }
    ]
  }),
};
</script>
