# k-form-build form属性
## 介绍
k-form-bulild有个this.form属性,可以用来修改表单值,参照[Ant Design form](https://www.antdv.com/components/form-cn/#api)的API

  

## 使用form属性修改表单value

[filename](./form-build2.html ':include :type=iframe width=100% height=340px')

> 代码示例

```javascript
<template>
  <div>
    <k-form-build ref="kfb" :value="jsonData" />
    <button @click="handleChange">修改数据</button>
    <button @click="handleReset">重置表单</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsonData: {
        list: [
          {
            type: 'input',
            name: '单行文本',
            options: {
              width: '100%',
              defaultValue: '',
              placeholder: '请输入',
              disabled: false
            },
            model: 'input_1577875678405',
            key: 'input_1577875678405',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'date',
            name: '日期选择器',
            options: {
              width: '100%',
              defaultValue: '',
              range: false,
              showTime: false,
              disabled: false,
              clearable: false,
              placeholder: '请选择',
              rangePlaceholder: ['开始时间', '结束时间'],
              format: 'YYYY-MM-DD'
            },
            model: 'date_1577877450971',
            key: 'date_1577877450971',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'textarea',
            name: '多行文本',
            options: {
              width: '100%',
              minRows: 4,
              maxRows: 6,
              defaultValue: '',
              disabled: false,
              placeholder: '请输入'
            },
            model: 'textarea_1577877446659',
            key: 'textarea_1577877446659',
            rules: [{ required: true, message: '必填项' }]
          },
          {
            type: 'rate',
            name: '评分',
            options: {
              defaultValue: 0,
              max: 5,
              disabled: false,
              allowHalf: false
            },
            model: 'rate_1577877468717',
            key: 'rate_1577877468717',
            rules: [{ required: true, message: '必填项' }]
          }
        ],
        config: {
          layout: 'horizontal',
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ''
        }
      }
    }
  },
  methods: {
    handleChange () {
      // 使用k-form-design组件的form属性修改表单数据
      this.$refs.kfb.form.setFieldsValue({
        input_1577875678405: '设置input值',
        date_1577877450971: '2019-11-12',
        textarea_1577877446659: '设置textarea值',
        rate_1577877468717: 3
      })
    },
    handleReset () {
      // 重置表单
      this.$refs.kfb.reset()
    }
  }
}
</script>
```


