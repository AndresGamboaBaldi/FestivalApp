<template>
  <v-footer id="fest-footer">
    <v-card
      flat
      tile 
      id="fest-card"
    >
      <v-row class= "fest-footer-row">
        <v-col class= "fest-footer-col">
          <v-row class= "fest-footer-title"> {{ titles[0] }}</v-row>
          <v-row
          v-for="text in novedades"
          :key="text"
          class= "fest-footer-body">
          {{ text }}
          </v-row>
        </v-col>
        <v-col class= "fest-footer-col">
          <v-row class= "fest-footer-title"> {{ titles[1] }}</v-row>
          <v-row
          v-for="text in cronograma"
          :key="text"
          class= "fest-footer-body">
          {{ text }}
          </v-row>
        </v-col>
        <v-col class= "fest-footer-col">
          <v-row class= "fest-footer-title"> {{ titles[2] }}</v-row>
          <v-row
          v-for="text in tienda"
          :key="text"
          class= "fest-footer-body">
          {{ text }}
          </v-row>
        </v-col>
        <v-col class= "fest-footer-col" id="fest-lastcol">
          <v-row class= "fest-footer-title"> {{ titles[3] }}</v-row>
          <v-row
          v-for="text in informacion"
          :key="text"
          class= "fest-footer-body">
          {{ text }}
          </v-row>
        </v-col>
      </v-row>
      <v-divider id="divider"></v-divider>

      <v-card-text>
          <v-icon size="24px"
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text">
            {{ icon }}
          </v-icon>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import "./Footer.sass"
  export default {
    name: 'HelloWorld',

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

