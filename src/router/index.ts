import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Routes } from "@/router/routes";
import Home from "@/views/Home.vue";
import Regions from "@/views/Regions.vue";
import Caves from "@/views/Caves.vue";
import Chat from "@/views/Chat.vue";
import Contact from "@/views/Contact.vue"
import Auth from "@/views/Auth.vue"

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
    path: "/chat",
    name: Routes.Chat,
    component: Chat,
  },
  {
    path: "/contact",
    name: Routes.Contact,
    component: Contact,
  },
  {
    path: "/authenticate",
    name: Routes.Authenticate,
    component: Auth,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
