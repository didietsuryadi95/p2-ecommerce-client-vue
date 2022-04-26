import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/views/HomeView")
    },
    {
      name: "favourite",
      path: "/favourite",
      component: () => import("@/views/FavouriteView")
    },
    {
      name: "popular",
      path: "/popular",
      component: () => import("@/views/PopularView")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("@/views/Register")
    }
  ]
});