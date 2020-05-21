<template>
  <div>
    <k-form-build
      :value="jsonData"
      :dynamicData="dynamicData"
      ref="KFB"
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
        ff(file) {
          console.log(file);
        }
      },
      jsonData: {
        list: [
          {
            type: "uploadFile",
            label: "上传文件",
            options: {
              defaultValue: "",
              multiple: false,
              disabled: false,
              hidden: false,
              drag: false,
              downloadWay: "dynamic",
              dynamicFun: "ff",
              width: "100%",
              limit: 3,
              data: "{}",
              action: "http://cdn.kcz66.com/uploadFile.txt",
              placeholder: "上传"
            },
            model: "uploadFile_1590063525149",
            key: "uploadFile_1590063525149",
            rules: [
              {
                required: false,
                message: "必填项"
              }
            ]
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
    // this.$refs.KFB.setData({
    //   input_1588670842881: 12.898
    // });
    // }, 1000);
  }
};
</script>
