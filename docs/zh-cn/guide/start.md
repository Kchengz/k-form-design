
## 快速上手
k-form-design 让表单开发更简单高效
> 在开始之前，推荐先学习 Vue 和 ES2015，并正确安装和配置了 Node.js v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式

## 引入 k-form-design

#### 1. 安装脚手架工具 vue-cli
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

#### 2. 创建一个项目

使用命令行初始化。
```
vue create kfd-demo
```
并配置项目。

若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装

#### 3. 使用组件
```
npm i k-form-design --save
# OR
yarn add k-form-design
```
main.js引入
```javascript
import { KFormDesign, KFormBuild } from "k-form-design";
import "k-form-design/lib/k-form-design.css";

Vue.use(KFormDesign);
Vue.use(KFormBuild);
```

## 定制主题
k-form-design 的样式使用了 Less 作为开发语言，并定义了主色、布局色变量，你可以根据需求进行相应调整
#### k-form-design样式变量
```less
@primary-color: "#13c2c2"; // 主色
@layout-color: "#ee88aa"; // 布局色
```
#### 首先需要引入less文件才能生效
```less
// 引入less文件后，无需再引入上述的css文件
import 'k-form-design/styles/k-form-design.less'
```
#### 定制方式
我们使用 modifyVars 的方式来进行覆盖变量。下面将针对不同的场景提供一些常用的定制方式

#### 在 webpack 中定制主题
我们以 webpack@4 为例进行说明，以下是一个 webpack.config.js 的典型例子，对 less-loader 的 options 属性进行相应配置
```javascript
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
     options: {
       modifyVars: {
         "primary-color": "#13c2c2",
          "layout-color": "#ee88aa"
       },
       javascriptEnabled: true,
     },
    }],
    // ...other rules
  }],
  // ...other config
}
```
#### 在 vue cli 3 中定制主题
项目根目录下新建文件vue.config.js 
```javascript
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#13c2c2",
          "layout-color": "#ee88aa"
        },
        javascriptEnabled: true
      }
    }
  }
}
```
#### ant-design-vue主题自定义
首先需要安装ant-design-vue
```
yarn add ant-design-vue
```
引入组件样式
```
// 需要在k-form-design样式后引入，覆盖默认的样式
import 'ant-design-vue/dist/antd.less'
```
> 参考[ant-design-vue 定制主题](https://www.antdv.com/docs/vue/customize-theme-cn/#Ant-Design-Vue-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F)

## 使用建议
> k-form-design基于[Ant Design](https://www.antdv.com/docs/vue/introduce-cn/)组件,k-form-build组件里面提供了form属性可以调用，建议先了解[Ant Design form](https://www.antdv.com/components/form-cn/#api)组件的API
>
>ant-design-vue 默认文案是英文，如果需要使用其他语言，可以参考[ant-design 国际化](https://www.antdv.com/docs/vue/i18n-cn/)