import Vue from "vue";
import VueRouter from "vue-router";
import PacientList from "../views/PacientList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PacientList",
    component: PacientList,
  },
  {
    path: "/pacient/:id",
    name: "Pacient",
    component: () => import("../views/Pacient.vue"),
  },
  {
    path: "/create_pacient",
    name: "CreatePacient",
    component: () => import("../views/CreatePacient.vue"),
  },
  {
    path: "/create_consultation",
    name: "CreateConsultation",
    component: () => import("../views/CreateConsultation.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
