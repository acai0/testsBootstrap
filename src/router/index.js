import Vue from "vue";
import VueRouter from "vue-router";
import Bulma from "../views/Bulma.vue";
// voir ligne 19 import Bootstrap from "../views/Bootstrap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/bulma",
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

    component: () => import(/* webpackChunkName: "about" */ "../views/Tag.vue"),
  },
  {
    path: "/cell",
    name: "cell",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cell.vue"),
  },
  {
    path: "/table",
    name: "table",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Table.vue"),
  },
  {
    path: "/accordeon",
    name: "accordeon",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Accordeon.vue"),
  },
  {
    path: "/accordiontest",
    name: "accordiontest",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Accordiontest.vue"),
  },
  {
    path: "/collapse",
    name: "collapse",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Collapse.vue"),
  },
  {
    path: "/",
    name: "json",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Json.vue"),
  },
  {
    path: "/remotejson",
    name: "remotejson",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/remoteJson.vue"),
  },
  {
    path: "/composant",
    name: "composant",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/composantTable.vue"),
  },
  {
    path: "/scroll",
    name: "scroll",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scroll.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
