<template>
  <div class="fest-carousel-large">
    <v-carousel :show-arrows="false"
      cycle
      height="600"
      width="596"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(data, i) in carousel_data"
        :key="i"
        :src="data.src"
      >
          <v-col id="fest-carousel-large-title">
            {{ data.title }}
          </v-col>
          <v-col id="fest-carousel-large-comment">
            {{ data.comment }}
          </v-col>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import "./Carousel.sass"
  export default {
    name: 'Carousel',

    data () {
      return {
        carousel_data: [
          {
            src: 'https://headbangersla.com/wp-content/uploads/2020/12/Conciertos1.jpg',
            title: 'Next Events',
            comment: 'Discover the festivals you are the most interested',
          },
          {
            
            //src: 'https://www.pariszigzag.fr/wp-content/uploads/2019/04/festival-paris-zigzag-e1555594557490.jpg',
            //src:'https://cdn.asiatatler.com/asiatatler/i/hk/2020/02/17144957-tomorrowland-festival-music-festival-hong-kong-tatler-2020-hero_cover_2000x1250.jpg',
            //src: 'http://audicionmexico.com/wp-content/uploads/2018/09/pemberton-music-festival-evening.jpg',
            src: 'https://www.ogscapital.com/wp-content/uploads/2013/10/pemberton-music-festival-evening-e1535452027130.jpg',
            //src: 'https://hudsonradc.com/wp-content/uploads/2020/11/music-festival-evening-business-plan-template-school-artist-sample.jpeg',
            title: 'Live the Experience',
            comment: 'Listen to your favorite artists',
          },
          {
            src: 'https://scontent.fvvi1-1.fna.fbcdn.net/v/t1.6435-9/144199939_2725547287755891_5580509566480479588_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=Yduh3JA9ao8AX9oNkdV&tn=QavYgOEX-JcdHB9n&_nc_ht=scontent.fvvi1-1.fna&oh=6a36c91fcceaad9073e3ca780d6137df&oe=60E00483',
            title: 'Madness Festival ',
            comment: 'Discover the artists that will play',
          },
        ],
      }
    },
  }
</script>
