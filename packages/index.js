// 导入ant组件
import "./utils/useComponents";
import { setFormDesignConfig, setFormBuildConfig, pluginManager } from "./mini";

export { pluginManager } from "./utils/getPluginManager";

// 导入单个组件
import KFormDesign from "./KFormDesign/index";
import KFormPreview from "./KFormPreview/index";
import KFormBuild from "./KFormBuild/index";
import KFormItem from "./KFormItem/index";
const components = [KFormDesign, KFormBuild, KFormItem, KFormPreview];

const install = function(Vue) {
  // use ant组件
  if (install.installed) return;
  install.installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

export {
  KFormDesign,
  KFormPreview,
  KFormBuild,
  KFormItem,
  setFormDesignConfig,
  setFormBuildConfig
};

// 这里默认导出全部组件
export default {
  install,
  KFormDesign,
  KFormPreview,
  KFormBuild,
  KFormItem,
  setConfig: setFormDesignConfig,
  setFormDesignConfig: setFormDesignConfig,
  setFormBuildConfig: setFormBuildConfig,
  pluginManager
};
