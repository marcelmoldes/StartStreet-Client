import StarStreetView  from "@/views/StarStreetView.vue";
import LoginVIew from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import FavoritesView from "@/views/FavoritesView.vue"
import CategoryView from "@/views/CategoryView.vue"
import ItemView from "@/views/ItemView.vue";
import { createRouter, createWebHistory } from "vue-router";
import CheckoutView from "@/views/CheckoutView.vue";
import OrdersView from "@/views/OrdersView.vue";


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
    component: StarStreetView,
  },
  {
    path: "/categories/:slug",
    name: "categories",
    component: CategoryView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/items/:slug",
    name:"item",
    component: ItemView
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView
  },
  {
    path: "/orders",
    name: "Orders",
    component: OrdersView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
