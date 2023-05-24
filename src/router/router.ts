import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes";

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (to.hash) {
    setTimeout(() => {
      const element = document.getElementById(to.hash.replace(/#/, ''))
      if (element && element.scrollIntoView) {
        element.scrollIntoView({block: 'start', behavior: 'smooth'})
      }
    }, 500)

    return {el: to.hash};
  }
  else if (savedPosition) {
    return savedPosition
  }
  return {top: 0}
}

const baseUrl = import.meta.env.BASE_URL

export const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl),
  routes: Object.values(routes),
  scrollBehavior
})