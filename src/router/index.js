import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stop-info",
    name: "StopInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StopInfo.vue"),
  },
  {
    path: "/route-info",
    name: "RouteInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RouteInfo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
