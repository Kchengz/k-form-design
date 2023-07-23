# 表单设计器 k-form-design

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vueComponent/ant-design-vue">
    <img src="https://img.shields.io/badge/Ant%20Design%20Vue-1.5.1-blue" alt="ant-design-vue">
  </a>
  <a href="https://github.com/Kchengz/k-form-design/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>
![](http://cdn.kcz66.com/demo.gif)



<b>感谢您的支持！由于已经将项目的重心转向 Vue 3 版本设计器，对于k-form-design项目决定暂停维护更新，欢迎您使用全新的 Vue3 版本设计器[ epic-designer](https://gitee.com/kcz66/epic-designer)，以便享受到更多优化和功能！</b>

## 简介

基于vue和ant-design-vue实现的表单设计器，样式使用less作为开发语言，主要功能是能通过简单操作来生成配置表单，生成可保存的JSON数据，并能将JSON还原成表单，使表单开发更简单更快速

- [github](https://github.com/Kchengz/k-form-design)
- [码云](https://gitee.com/kcz66/k-form-design)
- [项目预览](http://cdn.kcz66.com/k-form-design.html)
- [项目文档 Github Pages](https://kchengz.github.io/k-form-design/)
- [项目文档 Gitee Pages 较快](http://kcz66.gitee.io/k-form-design/#/)

## 特性
- 可视化配置页面
- 提供栅格、表格等布局
- 布局嵌套使用
- 提供预览、保存、生成json、生成可执行代码等操作
- 支持表单验证
- 快速获取表单数据
- 自定义组件插入
- 自定义主题色

## 组件
- KFormDesign 表单设计器（基于可视化操作快速设计出表单页面，生成配置json或页面）
- KFormBuild 表单构建器（根据设计器中获取的配置json数据，快速构建出表单页面）



## 安装

> 安装表单设计器

```cmd
npm i k-form-design --save
 
# OR
yarn add k-form-design
```

> 安装 ant-design-vue UI ，推荐 vue2 版本最新的 1.7.8版本

```cmd
npm i ant-design-vue@1.7.8 --save

# OR
yarn add ant-design-vue@1.7.8
```

### 

## 引入组件

``` javascript
// 在main.js引入

// 注：useComponents 需放最上面，优先注册懒加载组件
import { useAntd } from 'k-form-design/packages/core/useComponents'
import KFormDesign from 'k-form-design/packages/use.js'
import 'k-form-design/lib/k-form-design.css'

useAntd(Vue)
Vue.use(KFormDesign)
```

## 使用组件
``` html
<template>
  <div>
   <k-form-design />
  </div>
</template>
```

## 交流
点击链接加入qq群聊

- [【k-form-desgin交流群：1020643215】](https://jq.qq.com/?_wv=1027&k=5BeoFAr) 
- [【k-form-desgin交流二群：727396923】](https://jq.qq.com/?_wv=1027&k=uYyqQPlQ)

License
---
[MIT](https://github.com/Kchengz/k-form-design/blob/master/LICENSE)
Copyright (c) 2019 Kchengz

