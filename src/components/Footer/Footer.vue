<template>
  <v-footer>
    <v-card
      flat
      tile
      id="footer"
    >
      <v-row>
        <v-col
          v-for="title in titles"
          :key="title"
        >
          {{ title }}
          <v-row
          v-for="title in novedades"
          :key="title"
          >
          {{ title }}
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

    </v-card>
  </v-footer>
</template>
<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      titles: ['NOVEDADES', 'CRONOGRAMA', 'TIENDA', 'INFORMACION'],
      novedades: ['Proximos Eventos', 'Artistas', 'Antiguos Eventos'],
      cronograma: ['Viernes', 'Sabado', 'Domingo', 'Lunes'],
      tienda: ['Poleras', 'Sombreros', 'Accesorios', 'Otros'],
      informacion: ['Terminos y Condiciones', 'Contactos', 'Politica de Privacidad'],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style lang="sass">
  #footer 
    height : 320px 
    width : 100%
    background-color:  var(--v-primary700)
    text-align: center
 
</style>
