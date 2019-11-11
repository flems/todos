import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/Index.vue")
  },
  {
    path: "/project/:id",
    name: "project",
    component: () => import("../pages/Project.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
