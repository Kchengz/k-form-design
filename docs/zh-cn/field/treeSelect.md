# 树选择器

## 加载动态数据

配置界面选择动态数据，输入数据key

![image-20200411183148543](assets/image-20200411183148543.png)

定义动态数据

![image-20200411183620984](assets/image-20200411183620984.png)

最后使用k-form-build组件dynamicData属性传入动态数据

![image-20200411183727771](assets/image-20200411183727771.png)

代码示例：

```html
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
        treeData: [
          {
            value: "1",
            label: "树形选项1",
            children: [
              { value: "11", label: "树形选项1-1" },
              { value: "12", label: "树形选项1-2" }
            ]
          },
          {
            value: "2",
            label: "树形选项2",
            children: [
              { value: "21", label: "树形选项2-1" },
              { value: "22", label: "树形选项2-2" }
            ]
          }
        ]
      },
      jsonData: {
        list: [
          {
            type: "treeSelect",
            label: "树选择器",
            options: {
              disabled: false,
              multiple: false,
              clearable: false,
              showSearch: false,
              treeCheckable: false,
              placeholder: "请选择",
              dynamicKey: "treeData",
              dynamic: true,
              options: []
            },
            model: "treeSelect_1586601044471",
            key: "treeSelect_1586601044471",
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
```

