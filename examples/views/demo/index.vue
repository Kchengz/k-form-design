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
            type: "number",
            label: "数字输入框",
            options: {
              width: "100%",
              defaultValue: 0,
              min: null,
              max: null,
              precision: 2,
              step: 1,
              disabled: false,
              placeholder: "请输入"
            },
            model: "number_1586776385747",
            key: "number_1586776385747",
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
      this.$refs.KFB.setData({
        number_1586776385747: 12.898
      });
    }, 1000);
  }
};
</script>
