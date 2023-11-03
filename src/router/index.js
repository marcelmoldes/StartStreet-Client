import StarStreetView from "@/views/StarStreetView.vue";
import LoginVIew from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import CategoryView from "@/views/CategoryView.vue";
import ItemView from "@/views/ItemView.vue";
import { createRouter, createWebHistory } from "vue-router";
import CheckoutView from "@/views/CheckoutView.vue";
import AccountView from "@/views/AccountView.vue";
import OrdersView from "@/views/OrdersView.vue";
import OrderDetailsView from "@/views/OrderDetailsView.vue";
import ChangePassword from "@/views/ChangePassword.vue";


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
    name: "item",
    component: ItemView,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
  {
    path: "/orders/:id",
    name: "order",
    component: OrderDetailsView,
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: ChangePassword,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
