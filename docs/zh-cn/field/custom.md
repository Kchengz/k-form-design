### 添加自定义组件

```javascript
// 使用KFormDesign的setConfig函数
// import KFormDesign from 'k-form-design'
// KFormDesign.setConfig({配置数据})

// 单独引入setFormDesignConfig函数 与 使用KFormDesign的setConfig函数用法相同

// 这里以单独引入 setFormDesignConfig 函数为例
import { setFormDesignConfig } form 'k-form-design'


// 自定义组件
let Cmp = {
  name: "cmp",
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
      name: "自定义组件", // 组件名称
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