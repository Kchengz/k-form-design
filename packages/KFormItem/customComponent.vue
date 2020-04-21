<template>
  <a-form-item
    :label="record.label"
    :label-col="config.layout === 'horizontal' ? config.labelCol : {}"
    :wrapper-col="config.layout === 'horizontal' ? config.wrapperCol : {}"
  >
    <component
      :record="record"
      :style="`width:${record.options.width}`"
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
  props: ["record", "config", "disabled", "dynamicData"],
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
  methods: {
    handleChange(value, key) {
      this.$emit("change", value, key);
    }
  }
};
</script>
