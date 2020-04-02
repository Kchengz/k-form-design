<template>
  <div>
    <k-form-build
      :value="jsonData"
      ref="KFB"
      @change="handleChange"
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
            model: "input_1585831687473",
            key: "input_1585831687473",
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
            model: "textarea_1585831687776",
            key: "textarea_1585831687776",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "number",
            label: "数字输入框",
            icon: "icon-number",
            options: {
              width: "100%",
              defaultValue: 0,
              min: 0,
              max: 100,
              step: 1,
              disabled: false,
              placeholder: "请输入"
            },
            model: "number_1585831688098",
            key: "number_1585831688098",
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
            model: "select_1585831688352",
            key: "select_1585831688352",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "checkbox",
            label: "多选框",
            icon: "icon-duoxuan1",
            options: {
              disabled: false,
              defaultValue: [],
              dynamicKey: "",
              dynamic: false,
              options: [
                { value: "1", label: "选项1" },
                { value: "2", label: "选项2" },
                { value: "3", label: "选项3" }
              ]
            },
            model: "checkbox_1585831688680",
            key: "checkbox_1585831688680",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "radio",
            label: "单选框",
            icon: "icon-danxuan-cuxiantiao",
            options: {
              disabled: false,
              defaultValue: "",
              dynamicKey: "",
              dynamic: false,
              options: [
                { value: "1", label: "选项1" },
                { value: "2", label: "选项2" },
                { value: "3", label: "选项3" }
              ]
            },
            model: "radio_1585831688984",
            key: "radio_1585831688984",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "time",
            label: "时间选择框",
            icon: "icon-time",
            options: {
              width: "100%",
              defaultValue: "",
              disabled: false,
              clearable: false,
              placeholder: "请选择",
              format: "HH:mm:ss"
            },
            model: "time_1585831689288",
            key: "time_1585831689288",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "date",
            label: "日期选择框",
            icon: "icon-calendar",
            options: {
              width: "100%",
              defaultValue: "",
              rangeDefaultValue: [],
              range: false,
              showTime: false,
              disabled: false,
              clearable: false,
              placeholder: "请选择",
              rangePlaceholder: ["开始时间", "结束时间"],
              format: "YYYY-MM-DD"
            },
            model: "date_1585831689608",
            key: "date_1585831689608",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "rate",
            label: "评分",
            icon: "icon-pingfen_moren",
            options: {
              defaultValue: 0,
              max: 5,
              disabled: false,
              allowHalf: false
            },
            model: "rate_1585831689976",
            key: "rate_1585831689976",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "slider",
            label: "滑动输入条",
            icon: "icon-menu",
            options: {
              width: "100%",
              defaultValue: 0,
              disabled: false,
              min: 0,
              max: 100,
              step: 1,
              showInput: false
            },
            model: "slider_1585831690320",
            key: "slider_1585831690320",
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
              drag: false,
              width: "100%",
              limit: 3,
              data: "{}",
              action: "http://cdn.kcz66.com/uploadFile.txt",
              placeholder: "上传"
            },
            model: "uploadFile_1585831690715",
            key: "uploadFile_1585831690715",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "uploadImg",
            label: "上传图片",
            icon: "icon-image",
            options: {
              defaultValue: "",
              multiple: false,
              disabled: false,
              width: "100%",
              data: "{}",
              limit: 3,
              placeholder: "上传",
              action: "http://cdn.kcz66.com/upload-img.txt",
              listType: "picture-card"
            },
            model: "uploadImg_1585831691280",
            key: "uploadImg_1585831691280",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "batch",
            label: "动态表格",
            icon: "icon-biaoge",
            list: [
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
                model: "textarea_1585831695714",
                key: "textarea_1585831695714",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "radio",
                label: "单选框",
                icon: "icon-danxuan-cuxiantiao",
                options: {
                  disabled: false,
                  defaultValue: "",
                  dynamicKey: "",
                  dynamic: false,
                  options: [
                    { value: "1", label: "选项1" },
                    { value: "2", label: "选项2" },
                    { value: "3", label: "选项3" }
                  ]
                },
                model: "radio_1585831697817",
                key: "radio_1585831697817",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "time",
                label: "时间选择框",
                icon: "icon-time",
                options: {
                  width: "100%",
                  defaultValue: "",
                  disabled: false,
                  clearable: false,
                  placeholder: "请选择",
                  format: "HH:mm:ss"
                },
                model: "time_1585831698117",
                key: "time_1585831698117",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "slider",
                label: "滑动输入条",
                icon: "icon-menu",
                options: {
                  width: "100%",
                  defaultValue: 0,
                  disabled: false,
                  min: 0,
                  max: 100,
                  step: 1,
                  showInput: false
                },
                model: "slider_1585831700296",
                key: "slider_1585831700296",
                rules: [{ required: false, message: "必填项" }]
              }
            ],
            options: {
              scrollY: 0,
              disabled: false,
              showLabel: false,
              hideSequence: false,
              width: "100%"
            },
            model: "batch_1585831693904",
            key: "batch_1585831693904"
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
    handleChange(value, key) {
      console.log(value);
      console.log(key, 1231);
    }
  }
};
</script>
