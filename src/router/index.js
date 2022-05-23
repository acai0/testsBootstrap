import Vue from "vue";
import VueRouter from "vue-router";
import Bulma from "../views/Bulma.vue";
// voir ligne 19 import Bootstrap from "../views/Bootstrap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "bulma",
    component: Bulma,
  },
  {
    path: "/bootstrap",
    name: "bootstrap",

    component: () =>
      // Une autre version de import Bootstrap from "../views/Bootstrap.vue"
      import(/* webpackChunkName: "about" */ "../views/Bootstrap.vue"),
  },
  {
    path: "/test",
    name: "test",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/tag",
    name: "tag",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tag.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
