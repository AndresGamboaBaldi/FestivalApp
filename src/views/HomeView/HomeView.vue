<template>
  <body>
    <div id="fest-home-background" />
    <div id="fest-home-header">
      <Header />
    </div>

    <div id="fest-home-body">
      <carousel-long />
      <div id="fest-home-event-text">Events</div>
      <div id="fest-home-events-row">
        <events-card
          class="fest-home-events-list"
          v-for="card in eventcards"
          :key="card.id"
          :imagen="card.imagen"
          :texto="card.texto"
          :subtitulo="card.subtitulo"
        ></events-card>
      </div>
      <div id="fest-home-news-text">News</div>
      <div id="fest-home-news-row">
        <news-card
          class="fest-home-news-list"
          v-for="card in newscards"
          :key="card.id"
          :imagen="card.imagen"
          :texto="card.texto"
          :titulo="card.titulo"
        ></news-card>
      </div>
    </div>
    <div id="fest-home-footer">
      <Footer />
    </div>
  </body>
</template>

<script>
import "./HomeView.sass";
import CarouselLong from "../../components/Carousel/CarouselLong.vue";
import Footer from "../../components/Footer/Footer.vue";
import Header from "../../components/Header/Header.vue";
import EventsCard from "../../components/EventsCard/EventsCard.vue";
import NewsCard from "../../components/NewsCard/NewsCard.vue";

export default {
  name: "App",

  components: {
    Footer,
    CarouselLong,
    Header,
    EventsCard,
    NewsCard,
  },

  data: () => ({
    eventcards: [
      {
        id: 1,
        imagen:
          "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/02/06/Pictures/_24d141fc-48a1-11ea-b9ea-c2a424b98379.jpg",
        texto: "Rainbow Fest",
        subtitulo: "July 16 & 17, 2021",
      },
      {
        id: 2,
        imagen:
          "https://radiolaplaya.cl/wp-content/uploads/2021/02/galeria_lp.jpg",
        texto: "Paradise Fest",
        subtitulo: "July 16 & 17, 2021",
      },
      {
        id: 3,
        imagen:
          "https://beehy.pe/wp-content/uploads/2017/07/flow-festival.jpg",
        texto: "Galaxy Fest",
        subtitulo: "July 16 & 17, 2021",
      },
      {
        id: 4,
        imagen:
          "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-652ovhkibhg82kh6on274ihkn1-20180301220130.Medi.jpeg",
        texto: "Life in Colors",
        subtitulo: "July 16 & 17, 2021",
      },
      {
        id: 5,
        imagen:
          "https://weraveyou.com/wp-content/uploads/2020/06/Sunset-Music-Festival.jpg",
        texto: "Sunset Fest",
        subtitulo: "July 16 & 17, 2021",
      },
    ],
    newscards: [
      {
        id: 1,
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStH2l0n5LI_va2x7w6x4nLXzgCBccc5YQONMOKtydnwAxgxwOkk7FC1G8Qcaj7Gixx2tE&usqp=CAU",
        texto: "Escucha el ultimo sencillo de coldplay",
        titulo: "Higher Power",
      },
      {
        id: 2,
        imagen:
          "https://i.pinimg.com/originals/69/5d/9c/695d9c252d307548ff37cac8ae26c8c4.jpg",
        texto: "Nuestras medidas de bioseguridad",
        titulo: "Covid-19 Medidas",
      },
      {
        id: 3,
        imagen:
          "https://s03.s3c.es/imag/efe/2011/06/12/20110612-3894113w.jpg",
        texto: "The Strokes, Stevie Nicks y mas 2021 lineup",
        titulo: "Atlanta Festival",
      },
      {
        id: 4,
        imagen:
          "https://consequence.net/wp-content/uploads/2021/05/rolling-loud-california-2021-lineup-kid-cudi-future-j-cole.jpg",
        texto: "Wiz Khalifa, Polo G, French Montana y mas",
        titulo: "Rolling Loud",
      },
      {
        id: 5,
        imagen:
          "https://i.guim.co.uk/img/media/57dd470a651ccd52252e66aaf8df885cda1f2d91/0_88_1896_1138/master/1896.jpg?width=645&quality=45&auto=format&fit=max&dpr=2&s=17459b68c5cd3bb29a2d78f12eba826a",
        texto: "Los festivales de musica regresaron",
        titulo: "Estamos de Vuelta",
      },
    ],
  }),
};
</script>
