import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import "./core/components_use";
import "ant-design-vue/dist/antd.css";

import clipboard from "clipboard";
import kBuildForm from "@/components/KBuildForm/";
Vue.use(kBuildForm);
Vue.prototype.clipboard = clipboard;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
