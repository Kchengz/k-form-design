<template>
  <div>
    <k-form-build
      :value="jsonData"
    />
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
            type: "card",
            name: "卡片布局",
            list: [
              {
                type: "number",
                name: "计数器",
                options: {
                  width: "100%",
                  defaultValue: 0,
                  min: 0,
                  max: 12,
                  step: 1,
                  disabled: false,
                  placeholder: "请输入"
                },
                model: "number_1569147538484",
                key: "number_1569147538484",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "checkbox",
                name: "多选框组",
                options: {
                  disabled: false,
                  defaultValue: [],
                  options: [
                    { value: "1", label: "选项1" },
                    { value: "2", label: "选项2" },
                    { value: "3", label: "选项3" }
                  ]
                },
                model: "checkbox_1569147540013",
                key: "checkbox_1569147540013",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "textarea",
                name: "多行文本",
                options: {
                  width: "100%",
                  defaultValue: "",
                  disabled: false,
                  placeholder: "请输入"
                },
                model: "textarea_1569147537272",
                key: "textarea_1569147537272",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "input",
                name: "单行文本",
                options: {
                  width: "100%",
                  defaultValue: "",
                  placeholder: "请输入",
                  disabled: false
                },
                model: "input_1569147536144",
                key: "input_1569147536144",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "button",
                name: "按钮",
                options: { type: "primary", disabled: false },
                key: "button_1569147542203"
              }
            ],
            key: "card_1569147534267"
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          width: "100%",
          marginTop: "0px",
          marginRight: "0px",
          marginBottom: "0px",
          marginLeft: "0px"
        }
      }
    };
  },
  methods: {
    handleSubmit(p) {
      p.then(res => {
        // 获取数据成功
        alert(JSON.stringify(res));
      }).catch(err => {
        console.log(err, "校验失败");
      });
    }
  }
};
</script>
