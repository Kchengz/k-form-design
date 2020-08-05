<!--
 * @Description:自定义控件
 * @Author: kcz
 * @Date: 2020-03-13 10:50:49
 * @LastEditors: kcz
 * @LastEditTime: 2020-07-09 22:19:53
 -->
<template>
  <div>
    <input
      type="text"
      :disabled="disabled"
      :value="value"
      @input="handleChange"
    />
  </div>
</template>
<script>
export default {
  name: "cc",
  props: ["record", "value", "disabled", "dynamicData"],
  // props: {
  //   record: {
  //     type: Object,
  //     require: true
  //   },
  //   value: {
  //     type: String,
  //     default: ''
  //   }
  // },
  methods: {
    handleChange(e) {
      // 使用 onChange 事件修改值
      this.$emit("change", e.target.value);
    }
  }
};
</script>
