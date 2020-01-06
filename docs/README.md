


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
- [预览地址](http://cdn.kcz66.com/2.1.5/form-design.html)
<!-- - [开源地址](https://github.com/Kchengz/k-form-design) -->

## 特性
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

## 安装
```
# 使用yarn 
yarn add k-form-design

# 使用npm 
npm i k-form-design --save
```

### 引入组件
``` javascript
// 在main.js引入

import { KFormDesign, KFormBuild } from "k-form-design";
import "k-form-design/lib/k-form-design.css";

Vue.use(KFormDesign);
Vue.use(KFormBuild);
```

## 捐赠
如果你觉得k-form-design对你有帮助，欢迎给我捐赠
![](http://cdn.kcz66.com/donation.png)

License
---
[MIT](https://github.com/Kchengz/k-form-design/blob/master/LICENSE)
Copyright (c) 2019-present kchengz