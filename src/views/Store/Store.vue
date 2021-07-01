<template>
  <div id="store">
    <div id="header"><Header></Header></div>
    <div id="titlediv"><label id="fest-store-title">TIENDA</label></div>
    <div id="store-body">
      <button id="button"> Ver Todo </button>
      <v-row id="cards">
        <v-col v-for="card in storecards"
          :key="card.id">
          <store-card class="fest-store-cards"  
          :imagen="card.imagen" 
          :texto="card.texto"></store-card>    
        </v-col>
      </v-row>    
    </div>
    <div id="store-footer"><Footer></Footer></div>
  </div>
</template>

<script>
import StoreCard from '../../components/StoreCard/StoreCard.vue';
import Footer from '../../components/Footer/Footer.vue';
import Header from '../../components/Header/Header.vue';
import "./Store.sass"
export default {
  name: 'Store',

  components: {
    StoreCard,
    Footer,
    Header
  },

  data: () => ({
    storecards: [
      {
        id: 1,
        imagen: "https://i.ebayimg.com/images/g/G-YAAOSwqctcf6Oe/s-l1600.png",
        texto: "Poleras" 
      },
       {
        id:2,
        imagen: "https://cf.shopee.co.id/file/6e775bf04aadaefb96019caf10ef9cb4_tn",
        texto: "Accesorios" 
      },
      {
        id: 3,
        imagen: "https://i.pinimg.com/originals/5b/7d/e2/5b7de2804f2c33c867ef72ecf8fd759b.png",
        texto: "Sombreros" 
      },
       {
        id: 4,
        imagen: "https://i.pinimg.com/564x/1d/5c/9d/1d5c9d1478ffc3f1dbc5cd06162d5204.jpg",
        texto: "Otros" 
      }
    ],
  }),
};
</script>
