<template>
  <div>
    <k-form-build
      :value="jsonData"
      :defaultValue="{ slider_1619948887083: 12, input_1619948973892: '23423' }"
      ref="KFB"
      @submit="handleSubmit"
    />

    <button @click="hide">隐藏</button>
    <button @click="show">显示</button>
    <button @click="disable">禁用</button>
    <button @click="enable">启用</button>
    <button @click="getData">提交</button>
    <button @click="setData">数据回显</button>
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
            type: "button",
            label: "按钮",
            options: {
              type: "primary",
              handle: "submit",
              dynamicFun: "",
              hidden: true,
              disabled: false
            },
            key: "button_1619948868332"
          },
          {
            type: "slider",
            label: "滑动输入条",
            icon: "icon-menu",
            options: {
              width: "100%",
              defaultValue: 0,
              disabled: false,
              hidden: false,
              min: 0,
              max: 100,
              step: 1,
              showInput: false
            },
            model: "slider_1619948887083",
            key: "slider_1619948887083",
            help: "",
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
              hidden: false,
              allowHalf: false
            },
            model: "rate_1619948887483",
            key: "rate_1619948887483",
            help: "",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "uploadImg",
            label: "上传图片",
            icon: "icon-image",
            options: {
              defaultValue: "[]",
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
            model: "uploadImg_1619948887819",
            key: "uploadImg_1619948887819",
            help: "",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "card",
            label: "卡片布局",
            list: [
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
                  hidden: false,
                  clearable: false,
                  placeholder: "请选择",
                  rangePlaceholder: ["开始时间", "结束时间"],
                  format: "YYYY-MM-DD"
                },
                model: "date_1619948975172",
                key: "date_1619948975172",
                help: "",
                rules: [{ required: false, message: "必填项" }]
              },
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
                model: "input_1619948973892",
                key: "input_1619948973892",
                help: "",
                prefix: "",
                suffix: "",
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
                model: "textarea_1619948974269",
                key: "textarea_1619948974269",
                help: "",
                rules: [{ required: false, message: "必填项" }]
              }
            ],
            key: "card_1619948983395"
          },
          {
            type: "table",
            label: "表格布局",
            trs: [
              {
                tds: [
                  {
                    colspan: 1,
                    rowspan: 1,
                    list: [
                      {
                        type: "slider",
                        label: "滑动输入条",
                        icon: "icon-menu",
                        options: {
                          width: "100%",
                          defaultValue: 0,
                          disabled: false,
                          hidden: false,
                          min: 0,
                          max: 100,
                          step: 1,
                          showInput: false
                        },
                        model: "slider_1619948976300",
                        key: "slider_1619948976300",
                        help: "",
                        rules: [{ required: false, message: "必填项" }]
                      }
                    ]
                  },
                  {
                    colspan: 1,
                    rowspan: 1,
                    list: [
                      {
                        type: "uploadImg",
                        label: "上传图片",
                        icon: "icon-image",
                        options: {
                          defaultValue: "[]",
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
                        model: "uploadImg_1619948977239",
                        key: "uploadImg_1619948977239",
                        help: "",
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
                          hidden: false,
                          clearable: false,
                          placeholder: "请选择",
                          format: "HH:mm:ss"
                        },
                        model: "time_1619948975820",
                        key: "time_1619948975820",
                        help: "",
                        rules: [{ required: false, message: "必填项" }]
                      }
                    ]
                  }
                ]
              },
              {
                tds: [
                  {
                    colspan: 1,
                    rowspan: 1,
                    list: [
                      {
                        type: "radio",
                        label: "单选框",
                        icon: "icon-danxuan-cuxiantiao",
                        options: {
                          disabled: false,
                          hidden: false,
                          defaultValue: "",
                          dynamicKey: "",
                          dynamic: false,
                          options: [
                            { value: "1", label: "选项1" },
                            { value: "2", label: "选项2" },
                            { value: "3", label: "选项3" }
                          ]
                        },
                        model: "radio_1619948974588",
                        key: "radio_1619948974588",
                        help: "",
                        rules: [{ required: false, message: "必填项" }]
                      }
                    ]
                  },
                  {
                    colspan: 1,
                    rowspan: 1,
                    list: [
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
                          hidden: false,
                          clearable: false,
                          placeholder: "请选择",
                          rangePlaceholder: ["开始时间", "结束时间"],
                          format: "YYYY-MM-DD"
                        },
                        model: "date_1619948975548",
                        key: "date_1619948975548",
                        help: "",
                        rules: [{ required: false, message: "必填项" }]
                      }
                    ]
                  }
                ]
              }
            ],
            options: {
              width: "100%",
              bordered: true,
              bright: false,
              small: true,
              customStyle: ""
            },
            key: "table_1619948992003"
          },
          {
            type: "uploadFile",
            label: "上传文件",
            icon: "icon-upload",
            options: {
              defaultValue: "[]",
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
            model: "uploadFile_1619948976948",
            key: "uploadFile_1619948976948",
            help: "",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "cascader",
            label: "级联选择器",
            icon: "icon-guanlian",
            options: {
              disabled: false,
              hidden: false,
              showSearch: false,
              placeholder: "请选择",
              clearable: false,
              dynamicKey: "",
              dynamic: true,
              options: [
                {
                  value: "1",
                  label: "选项1",
                  children: [{ value: "11", label: "选项11" }]
                },
                {
                  value: "2",
                  label: "选项2",
                  children: [{ value: "22", label: "选项22" }]
                }
              ]
            },
            model: "cascader_1619948977724",
            key: "cascader_1619948977724",
            help: "",
            rules: [{ required: false, message: "必填项" }]
          },
          {
            type: "treeSelect",
            label: "树选择器",
            icon: "icon-tree",
            options: {
              disabled: false,
              multiple: false,
              hidden: false,
              clearable: false,
              showSearch: false,
              treeCheckable: false,
              placeholder: "请选择",
              dynamicKey: "",
              dynamic: true,
              options: [
                {
                  value: "1",
                  label: "选项1",
                  children: [{ value: "11", label: "选项11" }]
                },
                {
                  value: "2",
                  label: "选项2",
                  children: [{ value: "22", label: "选项22" }]
                }
              ]
            },
            model: "treeSelect_1619948978156",
            key: "treeSelect_1619948978156",
            help: "",
            prefix: "",
            suffix: "",
            rules: [{ required: false, message: "必填项" }]
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
    show() {
      this.$refs.KFB.show(["date_1619948975172"]);
    },
    hide() {
      this.$refs.KFB.hide(["date_1619948975172"]);
    },
    disable() {
      this.$refs.KFB.disable(["date_1619948975172"]);
    },
    enable() {
      this.$refs.KFB.enable(["date_1619948975172"]);
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
    setData() {
      this.$refs.KFB.setData({
        date_1619948975172: "2019-12-12"
      });
    }
  },
  mounted() {
    this.setData();
  }
};
</script>
