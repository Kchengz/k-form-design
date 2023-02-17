/*
 * @Descripttion:
 * @Author: kcz
 * @Date: 2021-05-02 16:04:02
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-26 23:28:19
 */
// 引入@babel/polyfill处理兼容
import "@babel/polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
// import Cmp from "./components/CustomComponent/index.vue";

// 预加载组件
// import "../packages/core/preUseComponents";
// 懒加载组件
import { useAntd } from "../packages/core/useComponents";
import { nodeSchema } from "../packages/mini";
import KFormDesign from "../packages/use";

const Cmp = {
  label: "cmp",
  render: function(h) {
    return h("div", "我是自定义组件");
  }
};

// 添加字段
nodeSchema.addSchemas([
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
      showSearch: false,
      showLabel: true
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
]);

// 添加分组
nodeSchema.addSchemaGroup({
  title: "自定义组件",
  list: ["demo"]
});

Vue.use(KFormDesign);
useAntd(Vue);
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
