import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import './styles/variables.sass';
import router from './router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({ 
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
