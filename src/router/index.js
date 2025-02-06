import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DetilseProduct from "@/views/DetilseProduct.vue";
import CatigoryProduct from "@/views/CatigoryProduct.vue";
import CartPage from "@/views/CartPage.vue";
import ListsPage from "@/views/ListsPage.vue";
import CheckOutpage from "@/views/CheckOutpage.vue";
import SearchPage from "@/views/SearchPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/detilse/:idparam",
    name: "derilse",
    component: DetilseProduct,
  },
  {
    path: "/CatigoryProduct/:catigory",
    name: "catigory",
    component: CatigoryProduct,
  },
  {
    path: "/cartpage",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/listpage",
    name: "listpage",
    component: ListsPage,
  },
  {
    path: "/checkpage",
    name: "checkpage",
    component: CheckOutpage,
  },
  {
    path: "/shearch",
    name: "searchpage",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
