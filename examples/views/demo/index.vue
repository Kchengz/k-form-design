<template>
  <div>
    <k-form-build
      :value="jsonData"
      ref="KFB"
      :dynamicData="dynamicData"
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
        treeData: [
          {
            value: "3333",
            label: "选项133",
            children: [{ value: "113", label: "选项311" }]
          },
          {
            value: "2",
            label: "选项233",
            children: [{ value: "22", label: "选项2233" }]
          }
        ],
        cascaderData: [
          {
            value: "1",
            label: "选项1sdfsd",
            children: [{ value: "11", label: "选项11dsfs" }]
          },
          {
            value: "2",
            label: "选项2sdf",
            children: [{ value: "22", label: "选项22sdfsd" }]
          }
        ]
      },
      jsonData: {
        list: [
          {
            type: "batch",
            label: "动态表格",
            list: [
              {
                type: "treeSelect",
                label: "树选择器",
                icon: "icon-tree",
                options: {
                  disabled: false,
                  multiple: false,
                  clearable: false,
                  showSearch: false,
                  treeCheckable: false,
                  placeholder: "请选择",
                  dynamicKey: "treeData",
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
                model: "treeSelect_1586599364501",
                key: "treeSelect_1586599364501",
                rules: [{ required: false, message: "必填项" }]
              },
              {
                type: "cascader",
                label: "级联选择器",
                icon: "icon-guanlian",
                options: {
                  disabled: false,
                  showSearch: false,
                  placeholder: "请选择",
                  clearable: false,
                  dynamicKey: "cascaderData",
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
                model: "cascader_1586599365832",
                key: "cascader_1586599365832",
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
            model: "batch_1586599364018",
            key: "batch_1586599364018"
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
