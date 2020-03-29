<template>
  <div>
    <k-form-build
      :value="jsonData"
      ref="KFB"
      :dynamicData="dynamicData"
      @submit="handleSubmit"
    />
    <button @click="getData">提交</button>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      dynamicData: {
        funName: this.printHelloWorld
      },
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
            model: "input_1585484534818",
            key: "input_1585484534818",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "button",
            label: "按钮",
            options: {
              type: "primary",
              handle: "dynamic",
              dynamicFun: "funName",
              disabled: false
            },
            key: "button_1585484533580"
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
    },
    printHelloWorld() {
      alert("hello world");
    }
  }
};
</script>
