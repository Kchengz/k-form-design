/*
 * @Description: 组件输出文件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2020-05-31 13:29:55
 */
// 引入@babel/polyfill处理兼容
import "@babel/polyfill";
// 导入ant组件
import "./core/components_use";
// import "ant-design-vue/dist/antd.less";

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
    // 将自定义组件列表绑到window.$customComponentList上
    window.$customComponentList = config.list || [];
    // uploadFile 配置 start
    // 配置uploadFile默认上传地址
    basicsList[10].options.action =
      config.uploadFile || "http://cdn.kcz66.com/uploadFile.txt";

    // 配置uploadFile默认额外参数
    basicsList[10].options.data = JSON.stringify(config.uploadFileData || {});

    // 配置uploadFile默认name
    basicsList[10].options.fileName = config.uploadFileName || "file";
    // 配置uploadFile默认headers
    basicsList[10].options.headers = config.uploadFileHeaders || {};
    // uploadFile 配置 end

    // uploadImage配置 start
    // 配置uploadImage默认上传地址
    basicsList[11].options.action =
      config.uploadImage || "http://cdn.kcz66.com/upload-img.txt";
    // 配置uploadImage默认额外参数
    basicsList[11].options.data = JSON.stringify(config.uploadImageData || {});
    // 配置uploadFile默认name
    basicsList[11].options.fileName = config.uploadImageName || "image";
    // 配置uploadFile默认headers
    basicsList[11].options.headers = config.uploadImageHeaders || {};
    // uploadImage配置 end

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

// 这里可以用es6的解构语法导入组件
export {
  KFormDesign,
  KFormBuild,
  KFormItem,
  KFormPreview,
  setFormDesignConfig
};

// 这里默认导入全部组件
export default {
  install,
  setConfig: setFormDesignConfig
};
