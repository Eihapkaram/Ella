import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createHead } from "@vueuse/head";
const vuetify = createVuetify({
  components,
  directives,
});

import AOS from "aos";
import "aos/dist/aos.css";
import jQuery from "jquery";
import "../node_modules/jquery/dist/jquery.js";
window.jQuery = jQuery;
import { createPinia } from "pinia";
import "@mdi/font/css/materialdesignicons.css";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mitt from "mitt";
const Emitter = mitt();
const head = createHead();
AOS.init();
// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Scrollbar],
});
createApp(App)
  .use(head)
  .use(store)
  .use(createPinia())
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(swiper)
  .use(router)
  .mount("#app");
