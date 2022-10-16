/*
 * @Descripttion:
 * @Author: kcz
 * @Date: 2021-05-02 16:04:02
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-16 16:08:33
 */
// 引入@babel/polyfill处理兼容
import "@babel/polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import Cmp from "./components/CustomComponent/index.vue";

import KFormDesign from "../packages/index";
import "../packages/utils/components_use";

KFormDesign.setFormDesignConfig({
  title: "测试自定义字段",
  list: [
    {
      type: "demo", // 表单类型
      label: "自定义组件", // 标题文字
      icon: "icon-gallery",
      component: Cmp,
      options: {
        defaultValue: undefined,
        multiple: false,
        disabled: false,
        width: "100%",
        clearable: true,
        placeholder: "请选择",
        showSearch: false
      },
      model: "",
      key: "",
      rules: [
        {
          required: false,
          message: "必填项"
        }
      ]
    }
  ],
  uploadFile: "",
  uploadImage: "",
  uploadFileName: "",
  uploadImageName: "",
  uploadFileData: { data: 1545 },
  uploadImageData: { data: 1545 },
  uploadFileHeaders: { data: 1545 },
  uploadImageHeaders: { data: 1545 }
});
Vue.use(KFormDesign);
// KFormDesign.setFormBuildConfig({
//   dynamicData: {
//     test: [
//       { label: "test", value: "1" },
//       { label: "test1", value: "2" }
//     ]
//   }
// });
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
