# NodeSchema（节点管理对象）

> 这是一个节点管理对象，主要用于管理左侧面板中可拖拽的组件列表及分组

引入方式

```javascript
import { nodeSchema } from 'k-form-design'
```

## 添加组件（addSchemas）

```javascript
const Cmp = {
  label: "cmp",
  render: function(h) {
    return h("div", "我是自定义组件");
  }
};

// 添加组件
nodeSchema.addSchemas([
  {
    type: "demo", // 表单类型
    label: "自定义组件", // 标题文字
    icon: "icon-gallery",
    component: Cmp,
    options: {
      defaultValue: undefined,
      multiple: false,
      disabled: false,
      width: "100%",
      clearable: true,
      placeholder: "请选择",
      showSearch: false,
      showLabel: true
    },
    model: "",
    key: "",
    rules: [
      {
        required: false,
        message: "必填项"
      }
    ]
  }
]);
```

## 添加分组（addSchemaGroup）

```javascript
// 添加分组
nodeSchema.addSchemaGroup({
  title: "自定义组件",
  list: ["demo"]
});
```
添加自定义组件分组还可以使用以下方法
## 设置分组(setSchemaGroup)

> 可以通过这个方法自定义左侧面板显示组件和分组

```javascript
// 设置分组
// 需要隐藏的组件删减掉就ok了
nodeSchema.setSchemaGroup([
    {
      title: "基础组件",
      list: [
        "input",
        "textarea",
        "number",
        "select",
        "checkbox",
        "radio",
        "date",
        "time",
        "rate",
        "slider",
        "uploadFile",
        "uploadImg",
        "cascader",
        "treeSelect",
        "batch",
        "selectInputList",
        "editor",
        "switch",
        "button",
        "alert",
        "text",
        "html"
      ]
    },
    {
      title: "布局组件",
      list: ["divider", "card", "tabs", "grid", "table"]
    },
    {
  	  title: "自定义组件",
  	  list: ["demo"]
	}
  ]);
```

> 删减组件或者重新分组排序示例

```javascript
nodeSchema.setSchemaGroup([
    {
      title: "基础组件-自定义",
      list: [
        "textarea",
        "input",
        "number",
        "select",
        "checkbox",
        "editor",
        "switch",
      ]
    },
    {
      title: "布局组件-自定义",
      list: ["divider", "grid", "table", "card", "tabs"]
    },
  ]);
```

