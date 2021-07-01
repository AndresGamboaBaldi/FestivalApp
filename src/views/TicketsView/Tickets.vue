<template>
<body>
  <div class="tickets"></div>
    <div class="header"><Header/></div>
    <div class="titlediv"><label class="tickets-label">Tickets</label></div>
    <div class="tickets-body">
      <button class="button">Reservar</button>
      <div>
        <v-row class="fest-tickets">
          <v-col v-for="ticket in ticketscard1"
          :key="ticket.id">
          <TicketCard class="fest-tickets-cards"
          :imagen="ticket.imagen" 
          :pase="ticket.pase"></TicketCard>    
          </v-col>
      </v-row>
      </div>
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
      <div class="fest-ticket-row">
        <v-row class="fest-tickets">
          <v-col v-for="ticket in ticketscard3"
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
import "./Tickets.sass";
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
    ],
        ticketscard1: [
      {
        id: 1,
        imagen: "https://paper-attachments.dropbox.com/s_337C6E9185C3BBBCB6BB3ED5F0B857E1A40A877C8984550A16D590E4A95072E0_1584580737658_ABGTW2019_0727_145220-5950_DVS_GroupTherapyWeekenderAtTheGorge.jpg",
        pase: "1x Festival Pass"
      },
       {
        id:2,
        imagen: "https://th.bing.com/th/id/R18c5f76d92316d658ccd54af4b633fbd?rik=R3pD2Oj0Dss%2fUg&riu=http%3a%2f%2fdjconcept.com.mx%2fwp-content%2fuploads%2f2018%2f03%2fBORIS-BREJCHA.jpg&ehk=myLvh73OPbJOWhsSYNbcg6Jg9P8PDoX6%2fiWCpGGvZzM%3d&risl=&pid=ImgRaw",
        pase: "1x Silver Pass"
      },
      {
        id: 3,
        imagen: "https://th.bing.com/th/id/OIP.9Kex8Os-V5VOaDmSyNikeAHaHa?pid=ImgDet&rs=1",
        pase: "1x Gold Pass"
      }
    ],
        ticketscard3: [
      {
        id: 1,
        imagen: "https://dancingastronaut.com/wp-content/uploads/2019/07/luttrell.jpg",
        pase: "3x Festival Pass"
      },
       {
        id:2,
        imagen: "https://th.bing.com/th/id/OIP.5grcJKypoB_b9HNt7kDXDwHaE9?pid=ImgDet&rs=1",
        pase: "3x Silver Pass"
      },
      {
        id: 3,
        imagen: "https://th.bing.com/th/id/OIP.McZVdEkGhHCwga2mIKNt1QHaE7?pid=ImgDet&rs=1",
        pase: "3x Gold Pass"
      }
    ],
    //
  }),
};
</script>
