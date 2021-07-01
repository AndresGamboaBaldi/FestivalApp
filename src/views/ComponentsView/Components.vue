<template>
    <div class="components">
    <div id="header"><Header/></div>
    <div class="fest-carousel-large"><CarouselLarge/></div>
    <div class="fest-carousel-long "><CarouselLong/></div>
    <div class="fest-events-card"><EventsCard/></div>
    <div class="fest-news-card"><NewsCard/></div>
    <div class="fest-schedule-card"><ScheduleCard/></div>
    <div class="fest-store-card"><StoreCard/></div>
    <div class="fest-ticket-card"><TicketCard/></div>
    <div id="fest-footer"><Footer/></div>
    </div>
</template>
<script>
import CarouselLarge from '../../components/Carousel/CarouselLarge.vue';
import CarouselLong from '../../components/Carousel/CarouselLong.vue';
import EventsCard from '../../components/EventsCard/EventsCard.vue';
import Footer from '../../components/Footer/Footer.vue';
import Header from '../../components/Header/Header.vue';
import NewsCard from '../../components/NewsCard/NewsCard.vue';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard.vue';
import StoreCard from '../../components/StoreCard/StoreCard.vue';
import TicketCard from '../../components/TicketCard/TicketCard.vue';

import "./Components.sass"
export default {
  name: 'Store',

  components: {
    CarouselLarge,
    CarouselLong,
    EventsCard,
    Footer,
    Header,
    NewsCard,
    ScheduleCard,
    StoreCard,
    TicketCard
  }
};
</script>
