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
            type: "batch",
            label: "动态表格",
            list: [
              {
                type: "input",
                label: "输入框",
                icon: "icon-write",
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
                model: "kkl",
                key: "input_1603875821327",
                rules: [{ required: false, message: "必填项" }]
              }
            ],
            options: {
              scrollY: 0,
              disabled: false,
              hidden: false,
              showLabel: false,
              hideSequence: false,
              width: "100%"
            },
            model: "batch_1603875820022",
            key: "batch_1603875820022"
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 },
          wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 },
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
      this.$refs.KFB.hide(["kkl"]);
      setTimeout(() => {
        this.$refs.KFB.show(["kkl"]);
      }, 2000);
      setTimeout(() => {
        this.$refs.KFB.disable(["kkl"]);
      }, 4000);
      setTimeout(() => {
        this.$refs.KFB.enable(["kkl"]);
      }, 6000);
    }
  }
};
</script>
