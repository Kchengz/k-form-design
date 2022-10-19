<template>
  <span>
    <Button
      v-bind="this.$attrs"
      @click="
        record.options.handle === 'submit'
          ? false
          : record.options.handle === 'reset'
          ? $attrs.onHandleReset()
          : dynamicData[record.options.dynamicFun]
          ? dynamicData[record.options.dynamicFun]()
          : false
      "
      :html-type="record.options.handle === 'submit' ? 'submit' : undefined"
      v-text="record.label"
    ></Button>
  </span>
</template>
<script>
import { pluginManager } from "../utils/PluginManager";
const Button = pluginManager.getComponent("aButton").component;
export default {
  name: "KButton",
  props: ["record", "dynamicData"],
  components: { Button }
};
</script>
