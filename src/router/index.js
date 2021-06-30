import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "../views/Schedule/Schedule.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/Schedule",
    name: "Schedule",
    component: Schedule,
  },
];

const router = new VueRouter({
  routes,
});

export default router;