<template>
    <v-app-bar id="fest-header" class="v-toolbar__content .v-toolbar__extension">
      <v-btn>
      <v-icon class="fest-firsticon">mdi-fire</v-icon>
      </v-btn>
      <v-btn>
      <v-col class="fest-firstcol"> {{ tienda[0] }} </v-col>
      </v-btn>
      <v-btn>
      <v-col class="fest-col"> {{ tienda[1] }} </v-col> 
      </v-btn>
      <v-btn>
      <v-col class="fest-col"> {{ tienda[2] }} </v-col>
      </v-btn>
      <v-btn>
      <v-col class="fest-lastcol"> {{ tienda[3] }} </v-col>      
      </v-btn>
      <v-btn>
      <v-icon class="fest-lasticon">mdi-account-circle-outline</v-icon>
      </v-btn>
      
    </v-app-bar>
</template>

<script>
  import "./Header.sass"
  export default {
    name: 'Header',
    data: () => ({
      titles: ['NOVEDADES', 'CRONOGRAMA', 'TIENDA', 'INFORMACION'],
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
