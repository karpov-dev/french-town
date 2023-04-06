export const routes = {
  main: {
    path: '/',
    name: 'main',
    component: () => import('../pages/MainPage.vue'),
    props: true
  },

  about: {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutPage.vue'),
    props: true
  }
}

