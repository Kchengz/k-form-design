// 引入@babel/polyfill处理兼容
import "@babel/polyfill";

import Vue from "vue";

import antdv from "ant-design-vue";
Vue.use(antdv);
import "ant-design-vue/dist/antd.css";

import KFormDesign from "../packages/index";
Vue.use(KFormDesign);

Vue.config.productionTip = false;

import App from "./App.vue";
import router from "./router/";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
