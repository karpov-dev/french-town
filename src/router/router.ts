import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes";

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (to.hash) {
    setTimeout(() => {
      const element = document.getElementById(to.hash.replace(/#/, ''))
      if (element && element.scrollIntoView) {
        element.scrollIntoView({block: 'end', behavior: 'smooth'})
      }
    }, 500)

    return {el: to.hash};
  }
  else if (savedPosition) {
    return savedPosition
  }
  return {top: 0}
}

export const router = createRouter({
  history: createWebHistory(),
  routes: Object.values(routes),
  scrollBehavior
})