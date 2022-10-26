KFormBuild
====
  构建表单
 将传入的json数组,解析成ant UI组件


### 使用方式

```vue
<template>
  <k-form-build :value="jsonData" />
</template>

<script>

const jsonData = {
	"list": [
		{
			"type": "input",
			"name": "单行文本",
			"options": {
				"width": "100%",
				"defaultValue": "",
				"placeholder": "请输入",
				"disabled": false
			},
			"model": "input_1569051592984",
			"key": "input_1569051592984",
			"rules": [
				{
					"required": false,
					"message": "必填项"
				}
			]
		}
	],
	"config": {
		"layout": "horizontal",
		"labelCol": {
			"span": 4
		},
		"wrapperCol": {
			"span": 18
		},
		"hideRequiredMark": false,
		"customStyle": ""
	}
}
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      jsonData
    }
  }
}
</script>
```


父组件可调用函数 getData - 返回Porimse对象

