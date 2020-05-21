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
            type: "card",
            label: "卡片布局",
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
                  hidden: false,
                  disabled: false
                },
                model: "input_1590069935921",
                key: "input_1590069935921",
                rules: [
                  {
                    required: false,
                    message: "必填项"
                  }
                ]
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
                model: "textarea_1590069938690",
                key: "textarea_1590069938690",
                rules: [
                  {
                    required: false,
                    message: "必填项"
                  }
                ]
              },
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
                    {
                      value: "1",
                      label: "选项1"
                    },
                    {
                      value: "2",
                      label: "选项2"
                    },
                    {
                      value: "3",
                      label: "选项3"
                    }
                  ]
                },
                model: "radio_1590069939106",
                key: "radio_1590069939106",
                rules: [
                  {
                    required: false,
                    message: "必填项"
                  }
                ]
              },
              {
                type: "checkbox",
                label: "多选框",
                icon: "icon-duoxuan1",
                options: {
                  disabled: false,
                  hidden: false,
                  defaultValue: [],
                  dynamicKey: "",
                  dynamic: false,
                  options: [
                    {
                      value: "1",
                      label: "选项1"
                    },
                    {
                      value: "2",
                      label: "选项2"
                    },
                    {
                      value: "3",
                      label: "选项3"
                    }
                  ]
                },
                model: "checkbox_1590069939586",
                key: "checkbox_1590069939586",
                rules: [
                  {
                    required: false,
                    message: "必填项"
                  }
                ]
              }
            ],
            key: "card_1590069934786"
          },
          {
            type: "grid",
            label: "栅格布局",
            columns: [
              {
                span: 12,
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
                    model: "input_1590069950753",
                    key: "input_1590069950753",
                    rules: [
                      {
                        required: false,
                        message: "必填项"
                      }
                    ]
                  }
                ]
              },
              {
                span: 12,
                list: []
              }
            ],
            options: {
              gutter: 0
            },
            key: "grid_1590069947825"
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
                        model: "input_1590069942977",
                        key: "input_1590069942977",
                        rules: [
                          {
                            required: false,
                            message: "必填项"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    colspan: 1,
                    rowspan: 1,
                    list: []
                  }
                ]
              },
              {
                tds: [
                  {
                    colspan: 1,
                    rowspan: 1,
                    list: []
                  },
                  {
                    colspan: 1,
                    rowspan: 1,
                    list: []
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
            key: "table_1590069941265"
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
      this.$refs.KFB.hide([
        "input_1590069942977",
        "input_1590069935921",
        "input_1590069950753"
      ]);
      // .then(res => {
      //   // 获取数据成功
      //   alert(JSON.stringify(res));
      // })
      // .catch(err => {
      //   console.log(err, "校验失败");
      // });
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
