import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  options: {
    customProperties: true
  }
})

const vuetify = new Vuetify({
  treeShake: true,
    theme: {
      themes: {
        dark: {
          primary500: '#7F7F7F',
          primary50: '#FFFFFF',
          primary100: '#E5E5E5',
          primary200: '#CCCCCC',
          primary300: '#B2B2B2',
          primary400: '#999999',
          primary600: '#656565',
          primary700: '#4B4B4B',
          primary800: '#313131',
          primary900: '#171717',
          success500: '#18E400',
          success50: '#9EFF8B',
          success100: '#88FE71',
          success200: '#72FC58',
          success300: '#47F728',
          success400: '#22EF02',
          success600: '#0FD300',
          success700: '#05BD00',
          success800: '#00A303',
          success900: '#008709',
          info500: '#0082E4',
          info50: '#8BD8FF',
          info100: '#71CEFE',
          info200: '#58C4FC',
          info300: '#28ADF7',
          info400: '#0293EF',
          info600: '#006DD3',
          info700: '#0055BD',
          info800: '#003DA3',
          info900: '#002987',
          error500: '#DF2E21',
          error50: '#FFA6A6',
          error100: '#FD9291',
          error200: '#FC7E7D',
          error300: '#F65B57',
          error400: '#ED3F38',
          error600: '#CC2611',
          error700: '#B22307',
          error800: '#942102',
          error900: '#731F00',
          warning500: '#F9D625',
          warning50: '#FFF0A6',
          warning100: '#FFED92',
          warning200: '#FEE97F',
          warning300: '#FDE25A',
          warning400: '#FCDC3C',
          warning600: '#F6D015',
          warning700: '#F1CB0A',
          warning800: '#EBC503',
          warning900: '#E6BF00',
          charcoal500: '#BDBDBD',
          charcoal50: '#FFFFFF',
          charcoal100: '#F9F9F9',
          charcoal200: '#F1F1F1',
          charcoal300: '#E4E4E4',
          charcoal400: '#D4D4D4',
          charcoal600: '#9F9F9F',
          charcoal700: '#7E7E7E',
          charcoal800: '#575757',
          charcoal900: '#2E2E2E'
        }
      }
    }
})

export default vuetify