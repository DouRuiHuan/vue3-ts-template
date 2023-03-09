export default [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    meta: {
      hideInMenu: true,
    },
    component: () => import("@/views/login/index.vue"),
  },
];
