import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "../views/Schedule/Schedule.vue";
import Store from "../views/Store/Store.vue";
import Home from "../views/HomeView/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Store",
    name: "Store",
    component: Store,
  },
  {
    path: "/Schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;