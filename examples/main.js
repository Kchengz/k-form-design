import Vue from "vue";
import App from "./App.vue";
import router from "./router/";

import {
  KFormDesign,
  KFormBuild,
  setFormDesignConfig
} from "../packages/index";
import Cmp from "./components/CustomComponent/index.vue";
// let Cmp = {
//   name: "cmp",
//   render: function(h) {
//     return h("div", "我是自定义组件");
//   }
// };
setFormDesignConfig({
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
Vue.use(KFormBuild);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
