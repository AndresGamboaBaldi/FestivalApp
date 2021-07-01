<template>
  <div> 
  <v-app-bar id="fest-header" class="v-toolbar__content .v-toolbar__extension">
      <button>
        <router-link class="fest-router" to="/Home">
          <v-icon class="fest-firsticon">mdi-fire</v-icon>
        </router-link>
      </button>
      <button>
        <v-col class="fest-firstcol">
          <router-link class="fest-router" to="/Store">
            {{ titles[0] }}
          </router-link> 
        </v-col>
      </button>
      <button>
        <v-col class="fest-col">
          <router-link class="fest-router" to="/Schedule">
            {{ titles[1] }}
          </router-link> 
        </v-col>
      </button>
      <button>
        <v-col class="fest-col64">
          <router-link class="fest-router" to="/Tickets">
            {{ titles[2] }}
          </router-link> 
        </v-col>
      </button>
      <button>
        <v-col class="fest-col56">
          <router-link class="fest-router" to="/Store">
            {{ titles[3] }}
          </router-link> 
        </v-col>
      </button>
      <button>
        <v-col class="fest-lastcol">
          <router-link class="fest-router" to="/Home">
            {{ titles[4] }}
          </router-link> 
        </v-col>
      </button>
      <button>
        <router-link class="fest-router" to="/">
          <v-icon class="fest-lasticon">mdi-account-circle-outline</v-icon>
        </router-link> 
      </button>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<script>
  import "./Header.sass"
  export default {
    name: 'Header',
    data: () => ({
      titles: ['Novedades', 'Cronograma','Tickets', 'Tienda', 'Informacion'],
    }),
  }
</script>
