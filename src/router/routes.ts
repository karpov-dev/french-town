export const routes = {
  main: {
    path: '/',
    name: 'main',
    component: () => import('../pages/MainPage.vue'),
    props: true
  },

  service: {
    path: '/service',
    name: 'service',
    component: () => import('../pages/ServicePage.vue'),
    props: true
  },

  about: {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutPage.vue'),
    props: true
  }
}

