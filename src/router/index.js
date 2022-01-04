import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/home/Home.vue");
const Organization = () =>
  import("views/VoluntaryOrganization/Organization.vue");
const Project = () => import("views/VoluntaryProject/Project.vue");
const Style = () => import("views/VoluntaryStyle/Style.vue");
const Join = () => import("views/join/Join.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/Organization",
    component: Organization,
  },
  {
    path: "/Project",
    component: Project,
  },
  {
    path: "/Style",
    component: Style,
  },
  {
    path: "/join",
    component: Join,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
