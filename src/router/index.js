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
import AdminHomeView from "@/views/admin/AdminHomeView.vue";
import AdminOrdersView from "@/views/admin/AdminOrdersView.vue";
import AdminProductsView from "@/views/admin/AdminProductsView.vue";
import AdminClientsView from "@/views/admin/AdminClientsView.vue";
import AdminCategoriesView from "@/views/admin/AdminCategoriesView.vue";


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
  },
  {
    path: "/admin",
    name: "admin-home",
    component: AdminHomeView,
  },
  {
    path: "/admin/orders",
    name: "admin-orders",
    component: AdminOrdersView,
  },
  {
    path: "/admin/products",
    name: "admin-products",
    component: AdminProductsView,
  },
  {
    path: "/admin/clients",
    name: "admin-clients",
    component: AdminClientsView,
  },
  {
    path: "/admin/categories",
    name: "admin-categories",
    component: AdminCategoriesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
