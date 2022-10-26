<!--
 * @Description: 时间选择器
 * @Author: kcz
 * @Date: 2020-01-11 17:30:48
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-26 21:14:03
 -->
<template>
  <TimePicker
    :style="`width:${record.options.width}`"
    :disabled="record.options.disabled || parentDisabled"
    :allowClear="record.options.clearable"
    :placeholder="record.options.placeholder"
    :format="record.options.format"
    @change="handleSelectChange"
    :value="time"
  />
</template>
<script>
import moment from "moment";
import { pluginManager } from "../../utils/index";

const TimePicker = pluginManager.getComponent("timePicker");
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value", "parentDisabled"],
  components: { TimePicker: TimePicker.component },
  computed: {
    time() {
      if (!this.value) {
        return undefined;
      } else {
        return moment(this.value, this.record.options.format);
      }
    }
  },
  methods: {
    handleSelectChange(val) {
      let time;
      if (!val) {
        time = "";
      } else {
        time = val.format(this.record.options.format);
      }
      this.$emit("change", time);
      this.$emit("input", time);
    }
  }
};
</script>
