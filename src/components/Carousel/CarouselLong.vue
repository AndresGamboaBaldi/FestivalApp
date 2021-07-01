<template>
    <div class="fest-carousel-long">
        <v-carousel :show-arrows="false"
        cycle
        height="296"
        hide-delimiter-background
        >
        <v-carousel-item
            v-for="(data, i) in carousel_data"
            :key="i"
            :src="data.src"
        >
            <v-col id="fest-carousel-long-title">
                {{ data.title }}
            </v-col>
            <v-col id="fest-carousel-long-comment">
                {{ data.comment }}
            </v-col>
            <v-col id="fest-carousel-long-button">
                <v-btn 
                height="24px"
                width="96px"
                >
                Ver mas
                </v-btn>
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
            src:'https://cdn.asiatatler.com/asiatatler/i/hk/2020/02/17144957-tomorrowland-festival-music-festival-hong-kong-tatler-2020-hero_cover_2000x1250.jpg',
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
