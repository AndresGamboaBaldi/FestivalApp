<template>
    <div class="components">
    <Header/>
    <CarouselLarge/>
    <CarouselLong/>
    <EventsCard/>
    <NewsCard/>
    <ScheduleCard/>
    <StoreCard/>
    <TicketCard/>
    <Footer/>
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
