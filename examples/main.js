// 引入@babel/polyfill处理兼容
import "@babel/polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/";

import KFormDesign from "../packages/index";
Vue.use(KFormDesign);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
