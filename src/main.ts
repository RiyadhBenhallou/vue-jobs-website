import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "primeicons/primeicons.css";
import router from "./router";
import Toast, { type PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
const options: PluginOptions = {
  // You can set your default options here
};

app.use(Toast, options);
app.mount("#app");
