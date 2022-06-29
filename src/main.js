import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import infiniteScroll from "vue-infinite-scroll";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import DataTables from "datatables.net-dt";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(infiniteScroll);

//Vue.use(DataTables);

// Utilisation d'axios
Vue.prototype.$api = axios.create({
  baseURL: "http://localhost:8080/grpacks",
});
Vue.prototype.$bus = new Vue();

// Rendre BootstrapVue disponible dans l'ensemble de votre projet
Vue.use(BootstrapVue);

// Installation optionnelle du plugin de composants d'icônes BootstrapVue
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

// Activation du mode de performance
Vue.config.performance = true;

/* Pour pouvoir utiliser Navigation sur le projet */
Vue.component("Navigation", () => import("@/components/Navigation.vue"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
