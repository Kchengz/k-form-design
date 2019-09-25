import KBuildForm from "./index.vue";

const kBuildForm = {
  install: function(Vue) {
    Vue.component("k-build-form", KBuildForm);
  }
};

export default kBuildForm;
