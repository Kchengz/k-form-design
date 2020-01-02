import Vue from "vue";
import App from "./App.vue";
import router from "./router/";

import {
  KFormDesign,
  KFormBuild,
  setFormDesignConfig
} from "../packages/index";

import { Alert } from "ant-design-vue";
setFormDesignConfig({
  title: "桂维字段",
  list: [
    {
      type: "jkjksdf34534522", // 表单类型
      name: "部门选择", // 标题文字
      component: Alert,
      options: {
        defaultValue: undefined, // 下拉选框请使用undefined为默认值
        multiple: false,
        disabled: false,
        width: "100%",
        clearable: true,
        placeholder: "请选择",
        showSearch: false // 是否显示搜索框，搜索选择的项的值，而不是文字
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
  uploadImage: ""
});
Vue.use(KFormDesign);
Vue.use(KFormBuild);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
