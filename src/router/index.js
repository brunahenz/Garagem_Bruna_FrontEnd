import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import CoresView from "../views/CoresView.vue";
import MarcasView from "../views/MarcasView.vue";
import AcessoriosView from "../views/AcessoriosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categoria",
      name: "categoria",
      component: CategoriaView,
    },
    {
      path: "/acessorio",
      name: "acessorio",
      component: AcessoriosView,
    },
    {
      path: "/marca",
      name: "marca",
      component: MarcasView,
    },
    {
      path: "/cor",
      name: "cor",
      component: CoresView,
    }
  ],
});

export default router;