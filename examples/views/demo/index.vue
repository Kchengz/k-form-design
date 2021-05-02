<template>
  <div>
    <k-form-build :value="jsonData" @change="handleChange" ref="KFB" />
    <button @click="hide">隐藏</button>
    <button @click="show">显示</button>
    <button @click="disable">禁用</button>
    <button @click="enable">启用</button>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      jsonData: {
        list: [
          {
            type: "input",
            label: "输入框",
            options: {
              type: "text",
              width: "100%",
              defaultValue: "",
              placeholder: "请输入",
              clearable: false,
              maxLength: null,
              disabled: false
            },
            model: "input_1585832448970",
            key: "input_1585832448970",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "textarea",
            label: "文本框",
            icon: "icon-edit",
            options: {
              width: "100%",
              minRows: 4,
              maxRows: 6,
              maxLength: null,
              defaultValue: "",
              clearable: false,
              disabled: false,
              placeholder: "请输入"
            },
            model: "textarea_1585832449337",
            key: "textarea_1585832449337",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "select",
            label: "下拉选择器",
            icon: "icon-xiala",
            options: {
              width: "100%",
              multiple: false,
              disabled: false,
              clearable: false,
              placeholder: "请选择",
              dynamicKey: "",
              dynamic: false,
              options: [
                { value: "1", label: "下拉框1" },
                { value: "2", label: "下拉框2" }
              ],
              filterable: false
            },
            model: "select_1585832450864",
            key: "select_1585832450864",
            rules: [{ required: false, message: "必填项" }]
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      }
    };
  },
  methods: {
    handleChange(value, key) {
      // 数据变化时触发
      console.log(value, key);
    },
    show() {
      this.$refs.KFB.show(["textarea_1585832449337"]);
    },
    hide() {
      this.$refs.KFB.hide(["textarea_1585832449337"]);
    },
    disable() {
      this.$refs.KFB.disable(["textarea_1585832449337"]);
    },
    enable() {
      this.$refs.KFB.enable(["textarea_1585832449337"]);
    }
  }
};
</script>
