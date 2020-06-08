<template>
  <div>
    <k-form-build
      :value="jsonData"
      :config="config"
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
      config: {
        uploadFile: "uploadFile",
        uploadImage: "uploadImage",
        uploadFileName: "uploadFileName",
        uploadImageName: "uploadImageName",
        uploadFileData: { uploadFileData: 1545 },
        uploadImageData: { uploadImageData: 1545 },
        uploadFileHeaders: { uploadFileHeaders: 1545 },
        uploadImageHeaders: { uploadImageHeaders: 1545 }
      },
      jsonData: {
        list: [
          {
            type: "batch",
            label: "动态表格",
            list: [
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
                  data: '{"data":1545}',
                  limit: 3,
                  placeholder: "上传",
                  fileName: "image",
                  headers: { data: 1545 },
                  action: "http://cdn.kcz66.com/upload-img.txt",
                  listType: "picture-card"
                },
                model: "uploadImg_1591621665278",
                key: "uploadImg_1591621665278",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "uploadFile",
                label: "上传文件",
                icon: "icon-upload",
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
                  data: '{"data":1545}',
                  fileName: "file",
                  headers: { data: 1545 },
                  action: "http://cdn.kcz66.com/uploadFile.txt",
                  placeholder: "上传"
                },
                model: "uploadFile_1591621663790",
                key: "uploadFile_1591621663790",
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
            model: "batch_1591621662327",
            key: "batch_1591621662327"
          },
          {
            type: "card",
            label: "卡片布局",
            icon: "icon-qiapian",
            list: [
              {
                type: "uploadFile",
                label: "上传文件",
                icon: "icon-upload",
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
                  data: '{"data":1545}',
                  fileName: "file",
                  headers: { data: 1545 },
                  action: "http://cdn.kcz66.com/uploadFile.txt",
                  placeholder: "上传"
                },
                model: "uploadFile_1591621669174",
                key: "uploadFile_1591621669174",
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
                  data: '{"data":1545}',
                  limit: 3,
                  placeholder: "上传",
                  fileName: "image",
                  headers: { data: 1545 },
                  action: "http://cdn.kcz66.com/upload-img.txt",
                  listType: "picture-card"
                },
                model: "uploadImg_1591621669574",
                key: "uploadImg_1591621669574",
                rules: [{ required: false, message: "必填项" }]
              }
            ],
            key: "card_1591621671063"
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
