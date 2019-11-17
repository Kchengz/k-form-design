import Vue from "vue";
import App from "./App.vue";
import router from "./router/";

import { KFormDesign, KFormBuild } from "../packages/index";

Vue.use(KFormDesign);
Vue.use(KFormBuild);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
