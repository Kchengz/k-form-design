<template>
  <div>
    <k-form-build
      :value="jsonData"
      ref="KFB"
      :config="config"
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
      config: {
        uploadFile: "", // 上传文件地址
        uploadImage: "", // 上传图片地址
        uploadFileName: "", // 上传文件name
        uploadImageName: "", // 上传图片name
        uploadFileData: { data: 223 }, // 上传文件额外参数
        uploadImageData: { data: 223 }, // 上传图片额外参数
        uploadFileHeaders: { data: 1545 }, // 上传文件请求头部
        uploadImageHeaders: { data: 1545 } // 上传图片请求头部
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
              downloadWay: "a",
              dynamicFun: "",
              width: "100%",
              limit: 3,
              data: "{}",
              fileName: "file",
              headers: {},
              action: "http://cdn.kcz66.com/uploadFile.txt",
              placeholder: "上传"
            },
            model: "uploadFile_1591622045312",
            key: "uploadFile_1591622045312",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "uploadImg",
            label: "上传图片",
            icon: "icon-image",
            options: {
              defaultValue: "",
              multiple: false,
              hidden: false,
              disabled: false,
              width: "100%",
              data: "{}",
              limit: 3,
              placeholder: "上传",
              fileName: "image",
              headers: {},
              action: "http://cdn.kcz66.com/upload-img.txt",
              listType: "picture-card"
            },
            model: "uploadImg_1591622045790",
            key: "uploadImg_1591622045790",
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
  }
};
</script>
