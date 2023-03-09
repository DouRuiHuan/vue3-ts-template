import { createRouter, createWebHistory } from "vue-router";
import route from "./routes";
const router = createRouter({
  history: createWebHistory(),
  routes: route,
});

export default router;
