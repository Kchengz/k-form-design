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
      dynamicData: {
        ff() {
          alert(2342);
        }
      },
      jsonData: {
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
              disabled: false
            },
            model: "input_1588670842881",
            key: "input_1588670842881",
            rules: [
              {
                required: false,
                message: "必填项"
              }
            ]
          },
          {
            type: "button",
            label: "按钮",
            options: {
              type: "primary",
              handle: "dynamic",
              dynamicFun: "ff",
              disabled: false
            },
            key: "button_1588670829919"
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: {
            span: 4
          },
          wrapperCol: {
            span: 18
          },
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
    // setTimeout(() => {
    this.$refs.KFB.setData({
      input_1588670842881: 12.898
    });
    // }, 1000);
  }
};
</script>
