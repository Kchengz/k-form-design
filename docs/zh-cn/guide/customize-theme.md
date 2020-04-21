### 定制主题

k-form-design 的样式使用了 Less 作为开发语言，并定义了主色、布局色变量，你可以根据需求进行相应调整
#### k-form-design样式变量
```less
@primary-color: "#13c2c2"; // 主色
@layout-color: "#ee88aa"; // 布局色
@title-text-color: "#ffffff"; // 标题文字颜色
@header-height: 56px; // 头部高度
@left-right-width: 270px; // 左右栏宽度
@border-color: #ccc; // 边框颜色
```
#### 首先需要引入less文件才能生效
```javascript
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
```bash
yarn add ant-design-vue
```
引入组件样式
```javascript
// 需要在k-form-design样式后引入，覆盖默认的样式
import 'ant-design-vue/dist/antd.less'
```
?> 参考[ant-design-vue 定制主题](https://www.antdv.com/docs/vue/customize-theme-cn/#Ant-Design-Vue-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F)
