<template>
  <v-app>
    <v-main>
      <Store-card/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

import StoreCard from './components/StoreCard/StoreCard.vue';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    StoreCard
  },

  data: () => ({
    //
  }),
};
</script>
