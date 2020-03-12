# k-form-design
### 介绍
表单设计器，通过拖拽或点击生成表单[预览地址](http://cdn.kcz66.com/k-form-design.html)

建议将表单设计器组件放到全屏组件或页面使用，使用表格布局时，在设计界面右键可以添加行列和合并单元格
### 基础用法
```  javascript
<template>
  <div>
    <k-form-design />
  </div>
</template>
```

### 自定义头部操作按钮
通过toolbars属性显示隐藏默认按钮

```html
<template>
  <div>
   <k-form-design :toolbars="['save', 'preview', 'importJson']" />
  </div>
</template>
```
使用插槽插入自定义按钮
```html
<template>
  <div>
   <k-form-design >
      <template slot="action">
        <a><a-icon type="code" /> 代码</a>
      </template>
    </k-form-design>
  </div>
</template>
```

### 表单设计器save事件，点击保存时触发

```  javascript
<template>
  <div>
    <k-form-design @save="handleSave" />
  </div>
</template>
<script>
export default {
  methods: {
    handleSave(values) {
      this.$message.success("触发保存方法");
      console.log(values);
    }
  }
};
</script>
```
### 使用API

```  javascript
<template>
  <div>
    <k-form-design 
      :title="title" 
      :toolbars="toolbars" 
     />
  </div>
</template>
<script>
export default {
  data(){
      return {
        title: "表单设计器 -by kcz",
        toolbars: [ "save", "preview", "importJson", "exportJson", "exportCode", "reset"]
      }
    }
};
</script>
```
### 使用handleSetData函数

```  javascript
<template>
  <div>
    <k-form-design
      ref="kfd"
     />
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsonData: {
        'list': [
          {
            'type': 'input',
            'label': '单行文本',
            'options': {
              'width': '100%',
              'defaultValue': '',
              'placeholder': '请输入',
              'disabled': false
            },
            'model': 'input_1577875678405',
            'key': 'input_1577875678405',
            'rules': [
              {
                'required': true,
                'message': '必填项'
              }
            ]
          }
        ],
        'config': {
          'layout': 'horizontal',
          'labelCol': {
            'span': 4
          },
          'wrapperCol': {
            'span': 18
          },
          'hideRequiredMark': false,
          'customStyle': ''
        }
      }
    }
  },
  methods: {
    importData () {
      // 导入数据
      this.$refs.kfd.handleSetData(this.jsonData)
    }
  }
}
</script>
```



### API
  <table>
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>title</td>
        <td>表单设计器标题</td>
        <td>string</td>
        <td>"表单设计器 --by kcz"</td>
      </tr>
      <tr>
        <td>showHead</td>
        <td>是否显示head部分</td>
        <td>boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>toolbars</td>
        <td>显示对应的操作按钮</td>
        <td>array</td>
        <td>[
        'save',
        'preview',
        'importJson',
        'exportJson',
        'exportCode',
        'reset',
        'close'
      ]</td>
      </tr>
            <tr>
        <td>fields</td>
        <td>自定义左侧控件列表</td>
        <td>array</td>
        <td style="max-width:280px;">[
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
        "switch",
        "button",
        "alert",
        "text",
        "html",
        "divider",
        "card",
        "grid",
        "table"
      ]</td>
      </tr>
    </tbody>
  </table>


### Slots
<table>
    <thead>
      <tr>
        <th>label</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
     <tr>
     <td>action</td>
     <td>表单设计器头部操作区域插槽</td>
     </tr>
     </tbody>
</table>

### 函数
  <table>
    <thead>
      <tr>
        <th>函数名称</th>
        <th>说明</th>
        <th>参数</th>
        <th>回调参数</th>
      </tr>
    </thead>
    <tbody>
     <tr>
        <td>handleSetData</td>
        <td>导入json数据，继续编辑</td>
        <td>json</td>
        <td>boolean</td>
      </tr>
      <tr>
        <td>handleSave</td>
        <td>保存，触发save事件</td>
        <td>-</td>
        <td>void</td>
      </tr>
      <tr>
        <td>handleClose</td>
        <td>关闭，触发close事件</td>
        <td>-</td>
        <td>void</td>
      </tr>
      <tr>
        <td>handleReset</td>
        <td>清除表单</td>
        <td>-</td>
        <td>boolean</td>
      </tr>
    </tbody>
  </table>

  ### 事件
  <table>
    <thead>
      <tr>
        <th>事件名称</th>
        <th colspan="2">说明</th>
        <th>回调参数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>save</td>
        <td colspan="2">点击保存按钮时回调</td>
        <td>json</td>
      </tr>
      <tr>
        <td>close</td>
        <td colspan="2">点击关闭按钮时回调</td>
        <td>void</td>
      </tr>
    </tbody>
  </table>
