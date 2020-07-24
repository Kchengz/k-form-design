<template>
  <a-form-item
    :label="record.label"
    :label-col="formConfig.layout === 'horizontal' ? formConfig.labelCol : {}"
    :wrapper-col="
      formConfig.layout === 'horizontal' ? formConfig.wrapperCol : {}
    "
  >
    <component
      :record="record"
      :style="`width:${record.options.width}`"
      v-bind="$attrs"
      @change="handleChange"
      :disabled="disabled"
      :dynamicData="dynamicData"
      :height="
        typeof record.options.height !== 'undefined'
          ? record.options.height
          : ''
      "
      v-decorator="[
        record.model,
        {
          initialValue: record.options.defaultValue,
          rules: record.rules
        }
      ]"
      :is="customComponent"
    ></component>
  </a-form-item>
</template>
<script>
export default {
  name: "customComponent",
  inheritAttrs: false,
  props: ["record", "formConfig", "disabled", "dynamicData"],
  computed: {
    customComponent() {
      // 计算需要显示的组件
      let customComponentList = {};
      if (window.$customComponentList) {
        // 将数组映射成json
        window.$customComponentList.forEach(item => {
          customComponentList[item.type] = item.component;
        });
      }
      return customComponentList[this.record.type];
    }
  },
  mounted() {},
  methods: {
    handleChange(value, key) {
      this.$emit("change", value, key);
    }
  }
};
</script>
