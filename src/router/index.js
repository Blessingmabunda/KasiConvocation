import { createRouter, createWebHistory } from "vue-router";

const routes = [

  {
    path: "/",
    name: "welcome",
    component: () => import("@/views/public/welcome.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/public/about.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("@/views/public/product.vue"),
  },
  {
    path: "/howItWorks",
    name: "howItWorks",
    component: () => import("@/views/public/howItWorks.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("@/views/public/pricing.vue"),
  },
  {
    path: "/kasiconvacationhub",
    name: "kasiconvacationhub",
    component: () => import("@/views/public/kasiconvacationhub.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
