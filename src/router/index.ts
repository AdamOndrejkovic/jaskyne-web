import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Routes } from "@/router/routes";
import Home from "@/views/Home.vue";
import Regions from "@/views/Regions.vue";
import Caves from "@/views/Caves.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: Routes.Home,
    component: Home,
  },
  {
    path: "/jaskyne",
    name: Routes.Caves,
    component: Regions,
  },
  {
    path: "/jaskyne/:region",
    name: Routes.Caves,
    component: Caves,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
