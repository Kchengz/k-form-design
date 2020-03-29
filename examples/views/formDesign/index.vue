<template>
  <div>
    <k-form-build :value="jsonData" disabled ref="KFB" @submit="handleSubmit" />
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
            model: "input_1585470636977",
            key: "input_1585470636977",
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
            model: "textarea_1585470637385",
            key: "textarea_1585470637385",
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
            model: "number_1585470637849",
            key: "number_1585470637849",
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
            model: "select_1585470638217",
            key: "select_1585470638217",
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
            model: "checkbox_1585470638665",
            key: "checkbox_1585470638665",
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
            model: "radio_1585470639057",
            key: "radio_1585470639057",
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
            model: "date_1585470639553",
            key: "date_1585470639553",
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
            model: "time_1585470639929",
            key: "time_1585470639929",
            rules: [{ required: false, message: "必填项" }]
          },
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
                  disabled: false
                },
                model: "input_1585470656992",
                key: "input_1585470656992",
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
                model: "textarea_1585470660819",
                key: "textarea_1585470660819",
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
                model: "number_1585470661777",
                key: "number_1585470661777",
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
                model: "select_1585470662098",
                key: "select_1585470662098",
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
                model: "checkbox_1585470662473",
                key: "checkbox_1585470662473",
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
                model: "radio_1585470662833",
                key: "radio_1585470662833",
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
                model: "date_1585470663257",
                key: "date_1585470663257",
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
                model: "time_1585470663600",
                key: "time_1585470663600",
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
                model: "slider_1585470664857",
                key: "slider_1585470664857",
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
                model: "rate_1585470665313",
                key: "rate_1585470665313",
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
                model: "uploadFile_1585470665929",
                key: "uploadFile_1585470665929",
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
                model: "uploadImg_1585470666361",
                key: "uploadImg_1585470666361",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "switch",
                label: "开关",
                icon: "icon-kaiguan3",
                options: { defaultValue: false, disabled: false },
                model: "switch_1585470667337",
                key: "switch_1585470667337",
                rules: [{ required: false, message: "必填项" }]
              }
            ],
            options: {
              scrollY: 0,
              defaultValue: "",
              disabled: false,
              showLabel: false,
              hideSequence: false,
              width: "100%"
            },
            model: "batch_1585470647880",
            key: "batch_1585470647880",
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
            model: "rate_1585470640409",
            key: "rate_1585470640409",
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
            model: "slider_1585470640769",
            key: "slider_1585470640769",
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
            model: "uploadFile_1585470641425",
            key: "uploadFile_1585470641425",
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
            model: "uploadImg_1585470641817",
            key: "uploadImg_1585470641817",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "switch",
            label: "开关",
            icon: "icon-kaiguan3",
            options: { defaultValue: false, disabled: false },
            model: "switch_1585470642449",
            key: "switch_1585470642449",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "button",
            label: "按钮",
            icon: "icon-button-remove",
            options: { type: "primary", handle: "submit", disabled: false },
            key: "button_1585470644306"
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
