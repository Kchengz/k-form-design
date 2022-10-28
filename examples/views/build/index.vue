<template>
  <div id="app">
    <button @click="setData">set</button>
    <div v-show="show">
      <k-form-build ref="kfb" :value="configJsonData" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      show: false,
      configJsonData: {}
    };
  },
  methods: {
    setData() {
      this.configJsonData = {
        list: [
          {
            type: "input",
            label: "时间",
            options: {
              type: "text",
              width: "100%",
              defaultValue: "",
              placeholder: "请输入",
              clearable: false,
              maxLength: null,
              addonBefore: "",
              addonAfter: "秒",
              hidden: false,
              disabled: false
            },
            model: "time",
            key: "input_1664028803991",
            help: "这是时间",
            rules: [
              {
                required: true,
                message: "必填项"
              }
            ]
          },
          {
            type: "input",
            label: "次数",
            options: {
              type: "text",
              width: "100%",
              defaultValue: "",
              placeholder: "请输入",
              clearable: false,
              maxLength: null,
              addonBefore: "",
              addonAfter: "",
              hidden: false,
              disabled: false
            },
            model: "count",
            key: "input_1664028804858",
            help: "",
            rules: [
              {
                required: true,
                message: "必填项"
              }
            ]
          }
        ],
        config: {
          layout: "horizontal",
          labelCol: {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4
          },
          labelWidth: 100,
          labelLayout: "flex",
          wrapperCol: {
            xs: 18,
            sm: 18,
            md: 18,
            lg: 18,
            xl: 18,
            xxl: 18
          },
          hideRequiredMark: false,
          customStyle: ""
        }
      };
      this.show = true;
      const data = { count: "1000", time: "10" };
      this.$refs.kfb.setData(data);
    }
  }
};
</script>
