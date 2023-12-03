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
import AdminOrderDetailsView from "@/views/admin/AdminOrderDetailsView.vue";
import AdminClientDetailsView from "@/views/admin/AdminClientDetailsView.vue";
import AdminProductView from "@/views/admin/AdminProductView.vue";

import AdminCategoryView from "@/views/admin/AdminCategoryView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";

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
    name: "change-password",
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
  {
    path: "/admin/orders/:id",
    name: "admin-order-details",
    component: AdminOrderDetailsView,
  },
  {
    path: "/admin/clients/:id",
    name: "admin-client-details",
    component: AdminClientDetailsView,
  },
  {
    path: "/admin/product",
    name: "admin-product",
    component: AdminProductView,
  },
  {
    path: "/admin/product/:id",
    name: "admin-edit-product",
    component: AdminProductView,
  },
  {
    path: "/admin/category/:id",
    name: "admin-category-details",
    component: AdminCategoryView,
  },
  {
    path: "/admin/addcategory",
    name: "admin-add-category",
    component: AdminCategoryView,
  },
  {
    path: "/strarstreet/forgotpassword",
    name: "forgot-password",
    component: ForgotPasswordView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
