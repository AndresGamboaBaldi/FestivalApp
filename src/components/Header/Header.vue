<template>
    <v-app-bar id="fest-header" class="v-toolbar__content .v-toolbar__extension">
      <v-icon class="fest-firsticon">mdi-fire</v-icon>
      <v-col class="fest-firstcol"> {{ titles[0] }} </v-col>
      <v-col class="fest-col"> {{ titles[1] }} </v-col>
      <v-col class="fest-col"> {{ titles[2] }} </v-col>
      <v-col class="fest-col"> {{ titles[3] }} </v-col>
      <v-col class="fest-lastcol"> {{ titles[4] }} </v-col>
      <v-icon class="fest-lasticon">mdi-account-circle-outline</v-icon>
    </v-app-bar>
</template>

<script>
  import "./Header.sass"
  export default {
    name: 'Header',
    data: () => ({
      titles: ['Novedades', 'Cronograma','Tickets', 'Tienda', 'Informacion'],
      novedades: ['Proximos Eventos', 'Artistas', 'Antiguos Eventos'],
      cronograma: ['Viernes', 'Sabado', 'Domingo', 'Lunes'],
      tienda: ['Poleras', 'Sombreros', 'Accesorios', 'Otros'],
      informacion: ['Termi y Condiciones', 'Contactos', 'Privacidad'],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
