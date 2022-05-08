import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Routes } from "@/router/routes";
import Home from "@/views/Home.vue";
import Regions from "@/views/Regions.vue";
import Caves from "@/views/Caves.vue";
import Blog from "@/views/Blog.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: Routes.Home,
    component: Home,
  },
  {
    path: "/jaskyne",
    name: Routes.Regions,
    component: Regions,
  },
  {
    path: "/jaskyne/:region",
    name: Routes.Caves,
    component: Caves,
  },
  {
    path: "/blog",
    name: Routes.Blog,
    component: Blog,
  },
  {
    path: "/contact",
    name: Routes.Caves,
    component: Caves,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
