/*
 * @Description: 组件输出文件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors  : kcz
 * @LastEditTime : 2020-01-16 16:51:58
 */

// 导入ant组件
import "./core/components_use";
import "ant-design-vue/dist/antd.less";

// 导入样式
import "../styles/form-design.less";

// 导出本地iconfont
import "../static/icons/iconfont";

// 导入单个组件
// import KChangeOption from "./KChangeOption/index.vue";
// import KCheckbox from "./KCheckbox/index.vue";
import KFormDesign from "./KFormDesign/index";
import KFormPreview from "./KFormPreview/index";
import KFormBuild from "./KFormBuild/index";
import KFormItem from "./KFormItem/index";
import {
  customComponents,
  basicsList
} from "./KFormDesign/config/formItemsConfig";
const components = [KFormDesign, KFormBuild, KFormItem, KFormPreview];

const install = function(Vue) {
  // use ant组件
  if (install.installed) return;
  install.installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// import { Alert } from "ant-design-vue";

// // const UploadImg = () => import("../../UploadImg");
// // 自定义组件
// const customComponents = {
//   title: "自定义组件",
//   list: [
//     {
//       name: "测试",
//       type: "jkjksdf",
//       component: Alert,
//       options: {
//         multiple: false,
//         disabled: false,
//         width: "100%",
//         data: "{}",
//         limit: 3,
//         placeholder: "上传",
//         action: "",
//         listType: "picture-card"
//       },
//       model: "",
//       key: "",
//       rules: [
//         {
//           required: false,
//           message: "必填项"
//         }
//       ]
//     }
//   ]
// };

// /**
//  * @Author: kcz
//  * @description:
//  * @param {type}
//  * @return:
//  */
// export function getCustomComponents(){
//   // 获取自定义组件数据
//   return customComponents
// }

/**
 * @Author: kcz
 * @description: 配置组件及添加自定义组件
 * @param {json}
 * @return: Boolean
 */
function setFormDesignConfig(config) {
  try {
    customComponents.title = config.title || "自义定组件";
    customComponents.list = config.list || [];
    window.$customComponentList = config.list || [];
    basicsList[10].options.action =
      config.uploadFile || "http://cdn.kcz66.com/uploadFile.txt";
    basicsList[11].options.action =
      config.uploadImage || "http://cdn.kcz66.com/upload-img.txt";
    return true;
  } catch {
    return false;
  }
}

// 这里可以用es6的解构语法导入组件 大概就是这个意思 毕竟没有用插件
export {
  KFormDesign,
  KFormBuild,
  KFormItem,
  KFormPreview,
  setFormDesignConfig
};
export default {
  install,
  setConfig: setFormDesignConfig
};
