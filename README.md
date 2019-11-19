


# 表单设计器 k-form-design

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vueComponent/ant-design-vue">
    <img src="https://img.shields.io/badge/Ant%20Design%20Vue-1.3.14-blue" alt="ant-design-vue">
  </a>
  <a href="https://github.com/Kchengz/k-form-design/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

## 简介
基于vue和ant-design-vue实现的表单设计器，使用了最新的前端技术栈，让表单开发更简单高效
- [预览地址](http://cdn.kcz66.com/form-design.html)
<!-- - [开源地址](https://github.com/Kchengz/k-form-design) -->

## 简介
- 可视化配置页面
- 提供栅格、表格等布局
- 表单边距、布局等属性设置
- 提供预览、保存、生成json、生成可执行代码等操作
- 支持表单验证
- 快速获取表单数据
- 提供高级组件

## 组件
- KFormDesign 表单设计器（基于可视化操作快速设计出表单页面，生成配置json或页面）
- KFormBuild 表单构建器（根据设计器中获取的配置json数据，快速构建出表单页面）

## 安装依赖
``` 
# 使用yarn 
yarn add k-form-design

# 使用npm 
npm i k-form-design --save
```

### 引入组件
``` 
在main.js引入

import { KFormDesign, KFormBuild } from "k-form-design";

Vue.use(KFormDesign);
Vue.use(KFormBuild);
```

### 表单设计器使用
建议将表单设计器组件放到全屏组件或页面使用，如果是ant-design的Modal或者Drawer组件，使用className给容器添加类名，并设置width:100vw;height:100vh;

表单设计器handleSave事件，点击保存时触发

``` 
<template>
  <div>
    <k-form-design @handleSave="handleSave" />
  </div>
</template>
<script>
export default {
  methods: {
    handleSave(val) {
      this.$message.success("触发保存方法");
      console.log(val);
    }
  }
};
</script>
```
使用表格布局时，在设计界面右键可以添加行列和合并单元格
### 表单构建器使用
``` 
// jsonData 设计器生成的json数据
<k-form-build
      :value="jsonData"
      ref="KFormBuild"
      @submit="handleSubmit"
    />
```
如何触发提交操作
```
// 通过给k-form-build组件加ref="KFormBuild"

// 然后可以通过下面函数触发了(如果表单中设置了提交按钮，可以直接点击表单的提交按钮触发)
this.$refs.KFormBuild.handleSubmit()


```
如何获取表单数据
```
// 通过上面代码，会触发组件submit事件，我们需要给组件加上@submit="handleSubmit"
// 并在methods里面定义handleSubmit方法

handleSubmit (getData){
	getData.then(values=>{
		// 表单验证通过，并拿到values值
		console.log(value)
	}).catch(err=>{
		// 表单验证未通过
		console.log(err)
	})
}
```

<p style="color:#ca6820;">
说明，该项目已经把所有需要的依赖全部打包了，包括UI组件，无需额外引入依赖即可使用，但是包的体积增大了许多,介意勿用
</p>	


<!-- 
![1.jpg](https://i.loli.net/2019/09/29/X2h9Kji5HpC6ZdB.png)
![2.jpg](https://i.loli.net/2019/09/29/OzBGS6F2ZmflMCw.png)
![3.jpg](https://i.loli.net/2019/09/29/oYOjwT3qUr2SMmA.png)
![4.jpg](https://i.loli.net/2019/09/29/JtCDZELxe3r5ARl.png)
![5.jpg](https://i.loli.net/2019/09/29/NTGmdoDPXvqHJMe.png) -->
<!-- ## 支持
如果你发现了新的bug或者有新的feature request，请新建一个issue -->

License
---
[MIT](https://github.com/Kchengz/k-form-design/blob/master/LICENSE)
Copyright (c) 2017-present kchengz