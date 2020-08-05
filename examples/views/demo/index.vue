<template>
  <div>
    <k-form-build :value="jsonData" ref="KFB" @submit="handleSubmit" />
    <button @click="getData">提交</button>
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
              hidden: false,
              disabled: false
            },
            model: "input_1594301138054",
            key: "input_1594301138054",
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
              hidden: false,
              disabled: false,
              placeholder: "请输入"
            },
            model: "textarea_1594301138391",
            key: "textarea_1594301138391",
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
              hidden: false,
              placeholder: "请选择",
              dynamicKey: "",
              dynamic: false,
              options: [
                { value: "1", label: "下拉框1" },
                { value: "2", label: "下拉框2" }
              ],
              showSearch: false
            },
            model: "select_1594301138695",
            key: "select_1594301138695",
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
    handleSubmit(p) {
      // 通过表单提交按钮触发，获取promise对象
      p()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    },
    getData() {
      // 通过函数获取数据
      this.$refs.KFB.getData()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res));
        })
        .catch(err => {
          console.log(err, "校验失败");
        });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.KFB.disable(["textarea_1594301138391"]);
      setTimeout(() => {
        this.$refs.KFB.enable(["textarea_1594301138391"]);
      }, 1000);
    }, 1000);
  }
};
</script>
