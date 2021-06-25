import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import dark from './vuetify/theme';

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {dark}
  },
})

export default vuetify