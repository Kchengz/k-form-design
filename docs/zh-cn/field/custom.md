# 添加自定义组件

可以参考[使用Demo](https://gitee.com/kcz66/k-form-design-demo)
## 使用KFormDesign的setConfig函数
```javascript
import KFormDesign from 'k-form-design'


// 自定义组件
let Cmp = {
  label: "cmp",
  render: function(h) {
    return h("div", "我是自定义组件");
  }
};

// 使用函数配置
KFormDesign.setConfig({
  title: "自定义字段",
  list: [
    {
      type: "demo", // 组件类型
      label: "自定义组件", // 组件名称
      component: Cmp, // 组件
      options: {
        defaultValue: undefined, // 可选值
        multiple: false, // 可选值
        disabled: false, // 可选值
        width: "100%",
        clearable: true, // 可选值
        placeholder: "请选择", // 可选值
        showSearch: false // 可选值
      },
      model: "", // 可选值
      key: "",
      rules: [ // 可选值
        {
          required: false,
          message: "必填项"
        }
      ]
    }
  ]
})
```

## 或引入 setFormDesignConfig 函数
```javascript

import { setFormDesignConfig } form 'k-form-design'

// 自定义组件
let Cmp = {
  label: "cmp",
  render: function(h) {
    return h("div", "我是自定义组件");
  }
};

// 或者引入.vue文件
// import Cmp from './Cmp.vue'

// 使用函数配置
setFormDesignConfig({
  title: "自定义字段",
  list: [
    {
      type: "demo", // 组件类型
      label: "自定义组件", // 组件名称
      component: Cmp, // 组件
      options: {
        defaultValue: undefined, // 可选值
        multiple: false, // 可选值
        disabled: false, // 可选值
        width: "100%",
        clearable: true, // 可选值
        placeholder: "请选择", // 可选值
        showSearch: false // 可选值
      },
      model: "", // 可选值
      key: "",
      rules: [ // 可选值
        {
          required: false,
          message: "必填项"
        }
      ]
    }
  ]
})
```