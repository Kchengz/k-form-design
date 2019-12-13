/*
 * author kcz
 * date 2019-11-20
 */

// 导入ant组件
import "./core/components_use";
import "ant-design-vue/dist/antd.css";

// 导入样式
import "../styles/formDesign.less";

// 导入单个组件
// import KChangeOption from "./KChangeOption/index.vue";
// import KCheckbox from "./KCheckbox/index.vue";
import KFormDesign from "./KFormDesign/index";
import KFormBuild from "./KFormBuild/index";
import KFormItem from "./KFormItem/index";

const components = [KFormDesign, KFormBuild, KFormItem];

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

// 这里可以用es6的解构语法导入组件 大概就是这个意思 毕竟没有用插件
export { KFormDesign, KFormBuild, KFormItem };
export default {
  install
  // ...components //这个经过测试 似乎没啥用
};
