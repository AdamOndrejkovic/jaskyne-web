import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Routes } from "@/router/routes";
import Home from "@/views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: Routes.Home,
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
