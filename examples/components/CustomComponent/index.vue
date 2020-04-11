<!--
 * @Description:自定义控件
 * @Author: kcz
 * @Date: 2020-03-13 10:50:49
 * @LastEditors: kcz
 * @LastEditTime: 2020-04-11 15:58:34
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
      console.log(e.target.value);
      // 使用 onChange 事件修改值
      this.$emit("change", e.target.value);
    }
  },
  mounted() {
    // 打印接收的options
    console.log(this.record);
    console.log(this.dynamicData);
  }
};
</script>
