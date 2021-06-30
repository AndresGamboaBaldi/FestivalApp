<template>
  <div>
    a
  </div>  
</template>

<script>
  import "./LoginView.sass"
  export default {
    name: 'LoginView',

    data () {
      return {
        carousel_data: [
          {
            src: 'https://headbangersla.com/wp-content/uploads/2020/12/Conciertos1.jpg',
            title: 'Next Events',
            comment: 'Discover the festivals you are the most interested',
          },
          {
            src: 'https://www.pariszigzag.fr/wp-content/uploads/2019/04/festival-paris-zigzag-e1555594557490.jpg',
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
