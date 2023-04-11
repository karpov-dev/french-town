import {RouteRecordRaw} from "vue-router";
import MainPage from "../pages/MainPage.vue";
import ServicePage from "../pages/ServicePage.vue";
import AboutPage from "../pages/AboutPage.vue";

export const routes = {
  main: {
    path: '/',
    name: 'main',
    component: MainPage,
    props: true,
  } as RouteRecordRaw,

  service: {
    path: '/service',
    name: 'service',
    component: ServicePage,
    props: true
  },

  about: {
    path: '/about',
    name: 'about',
    component: AboutPage,
    props: true
  }
}

export const pages = {

}
