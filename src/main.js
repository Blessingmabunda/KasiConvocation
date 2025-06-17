import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";  // Import Pinia
import store from "./store";
import "./style.css";
import "leaflet/dist/leaflet.css";
import App from "./App.vue";
import './assets/styles/tailwind.css';

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

// Add Pinia store to the app
const pinia = createPinia();
app.use(pinia);  // Add Pinia here

app.use(vuetify);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.component("VueDatePicker", VueDatePicker);

app.mount("#app");
