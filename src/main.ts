import { createApp } from 'vue'
import './css/css/global.css'
import App from './App.vue'
import {router} from "./router/router";
import 'vue3-toastify/dist/index.css';

createApp(App)
  .use(router)
  .mount('#app');