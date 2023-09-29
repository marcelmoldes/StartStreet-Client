import StrarStreetView from "@/views/StrarStreetView.vue";
import LoginVIew from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue"

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/starstreet",
    name: "starstreet",
    component: StrarStreetView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginVIew
  },
  {
    path:"/register",
    name:"register",
    component:RegisterView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
