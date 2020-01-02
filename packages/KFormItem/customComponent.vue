<template>
  <a-form-item
    :label="record.name"
    :label-col="config.layout === 'horizontal' ? config.labelCol : {}"
    :wrapper-col="config.layout === 'horizontal' ? config.wrapperCol : {}"
  >
    <component
      :record="record"
      :style="`width:${record.options.width}`"
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
import { customComponents } from "../KFormDesign/config/formItemsConfig";

// 将数组映射成json
let customComponentList = {};
customComponents.list.forEach(item => {
  customComponentList[item.type] = item.component;
});

export default {
  name: "customComponent",
  props: ["record", "config"],
  computed: {
    customComponent() {
      // 计算需要显示的组件
      return customComponentList[this.record.type];
    }
  }
};
</script>
