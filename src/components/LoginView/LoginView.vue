<template>
  <div >
    <div class='login_view'>
        <v-row>
            <v-col id="login-carousel">
                <CarouselLarge />
            </v-col >
            <v-col>
                <v-row id='buttonfacebook'>
                <v-btn
                  height="48px"
                  width="400px">Login with Facebook</v-btn>
                </v-row>
                <v-row id='buttongoogle'>
                <v-btn
                  height="48px"
                  width="400px">Login with Google</v-btn>
                </v-row>
            </v-col>
        </v-row>  
    </div>
  </div>
</template>

<script>
  import "./LoginView.sass"
  import CarouselLarge from '../Carousel/CarouselLarge.vue';
  export default {
    name: 'LoginView',

    components: {
    CarouselLarge,
    },
    data:function () {
        return {

        }
    },
  }
</script>
