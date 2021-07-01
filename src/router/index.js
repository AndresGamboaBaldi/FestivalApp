import Vue from "vue";
import VueRouter from "vue-router";
import Schedule from "../views/Schedule/Schedule.vue";
import Store from "../views/Store/Store.vue";
import Home from "../views/HomeView/HomeView.vue";
import Login from "../views/LoginView/LoginView.vue";
import Tickets from "../views/TicketsView/Tickets.vue"
import Components from "../views/ComponentsView/Components.vue"
import TicketsDefault from "../views/TicketsDefaultView/TicketsDefault.vue"

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
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Tickets",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/TicketsDefault",
    name: "TicketsDefault",
    component: TicketsDefault,
  },
  {
    path: "/Components",
    name: "Components",
    component: Components,
  }
];

const router = new VueRouter({
  routes,
});

export default router;