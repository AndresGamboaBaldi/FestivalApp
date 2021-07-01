<template>
  <div id="store">
    <div id="header"><Header></Header></div>
    <div id="titlediv"><label id="fest-store-title">TIENDA</label></div>
    <div id="body">
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
    <div id="footer"><Footer></Footer></div>
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
        imagen: "https://ventaspop-images.staticgnt.com/cWc4-OW0pNEsDeS6mUSn8xynUQg=/filters:quality(100)/files/products/167/5493/229383.jpg",
        texto: "Poleras" 
      },
       {
        id:2,
        imagen: "https://www.manualidadesinfantiles.org/wp-content/uploads/DSC_0189-1088x728.jpg",
        texto: "Accesorios" 
      },
      {
        id: 3,
        imagen: "https://images.asos-media.com/products/sombrero-pork-pie-con-corona-de-rombo-en-gris-marga-con-detalle-de-banda-de-asos-design/10426304-1-grey?$XXL$&wid=513&fit=constrain",
        texto: "Sombreros" 
      },
       {
        id: 4,
        imagen: "https://esbarrio.com/wp-content/uploads/2017/06/chelas-2.jpg",
        texto: "Otros" 
      }
    ],
  }),
};
</script>
