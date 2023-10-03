import StrarStreetView from "@/views/StrarStreetView.vue";
import LoginVIew from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import FavoritesView from "@/views/FavoritesView.vue"

import { createRouter, createWebHistory } from "vue-router";
import ItemsView from "@/views/ItemsView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginVIew,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/starstreet",
    name: "starstreet",
    component: StrarStreetView,
  },
  {
    path: "/categories/:slug",
    name: "categories",
    component: ItemsView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
