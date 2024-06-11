import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      component: () => import("../layouts/default.vue"),
      children: [
        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: () => import("../pages/not-found.vue"),
        },
      ],
    },

    {
      path: "/",
      component: () => import("../layouts/authLayout.vue"),
      children: [
        {
          path: "/",
          name: "login",
          component: () => import("../pages/auth/login.vue"),
        },
        {
          path: "/",
          name: "register",
          component: () => import("../pages/auth/register.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  const isLoggedin = true;

  if (!isLoggedin && to.name != "login") {
    return { name: "login" };
  }
});

export default router;