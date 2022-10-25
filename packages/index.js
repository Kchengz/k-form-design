// 导入样式
import "../styles/form-design.less";
// 导入antD样式
import "./utils/antdStyle";

// 导出本地iconfont
import "../static/icons/iconfont";
import { pluginManager, nodeSchema } from "./utils/getUtility";
// 导入单个组件
import KFormDesign from "./KFormDesign/index";
import KFormPreview from "./KFormPreview/index";
import KFormBuild from "./KFormBuild/index";
import KFormItem from "./KFormItem/index";
import { setFormDesignConfig, setFormBuildConfig } from "./mini";
// 导入ant组件
import "./utils/useComponents";

// import "./utils/components_use";

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

export default {
  install,
  setConfig: setFormDesignConfig,
  setFormDesignConfig: setFormDesignConfig,
  setFormBuildConfig: setFormBuildConfig,
  pluginManager,
  nodeSchema
};

export {
  install,
  KFormDesign,
  KFormBuild,
  KFormItem,
  KFormPreview,
  setFormDesignConfig,
  setFormBuildConfig,
  pluginManager,
  nodeSchema
};
