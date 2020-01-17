<!--
 * @Description: 时间选择器
 * @Author: kcz
 * @Date: 2020-01-11 17:30:48
 * @LastEditors  : kcz
 * @LastEditTime : 2020-01-18 00:47:16
 -->
<template>
  <a-time-picker 
    :style="`width:${record.options.width}`"
    :disabled="record.options.disabled"
    :allowEmpty="record.options.clearable"
    :placeholder="record.options.placeholder"
    :format="record.options.format"
    @change="handleSelectChange"
    :value="time"
  />
</template>
<script>
import moment from "moment";
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value"],
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
