import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Rendre BootstrapVue disponible dans l'ensemble de votre projet
Vue.use(BootstrapVue)

// Installation optionnelle du plugin de composants d'icônes BootstrapVue
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

// Activation du mode de performance
Vue.config.performance = true;

/* Pour pouvoir utiliser Navigation sur le projet */
Vue.component('Navigation', ()=>import('@/components/Navigation.vue'));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
