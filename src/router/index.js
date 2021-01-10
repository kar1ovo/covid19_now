import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Map from "../views/Map.vue";
import News from "../views/News.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/map",
    name: "Map",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Map,
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: News,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
