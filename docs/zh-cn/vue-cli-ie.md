
### 问题：使用k-form-design后在ie浏览器打开，出现属性不支持等问题

环境：vue cli3以上版本搭建的项目

ie兼容 >= 9

### Installation

```
npm install babel/polyfill --save
# or
yarn add babel/polyfill
```

### 修改` babel.config.js`文件

```js
module.exports = {
  presets: [
    '@vue/app',
    // 兼容配置
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry'
      }
    ]
  ]
}
```

### `main.js`文件（项目入口）

```js
// 在顶部引入@babel/polyfill处理兼容,以确保首先加载polyfill
import '@babel/polyfill'

import Vue from 'vue'
```





重启项目如果没有报错，就已经完成了，如果在编译时出现以下错误,

```
To install them, you can run: npm install --save core-js/modules/es6.array.copy-within core-js/modules/es6.array.fill core-js/modules/es6.array.find core-js/modules/es6.array.find-index core-js/modules/es6.array.from core-js/modules/es6.array.iterator core-js/modules/es6.array.of core-js/modules/es6.array.species core-js/modules/es6.date.to-primitive core-js/modules/es6.function.has-instance core-js/modules/es6.function.name core-js/modules/es6.map core-js/modules/es6.math.acosh core-js/modules/es6.math.asinh core-js/modules/es6.math.atanh core-js/modules/es6.math.cbrt core-js/modules/es6
```

这是因为最新的 vue-cli 版本，core-js是3.x的版本，而这个版本中，对那些polly补丁包进行了整理，所以，在项目的根目录，```yarn add core-js@2.6.9 --save ```安装这个版本就没问题



#### 参考文章：

[ant-design-vue的兼容问题](https://blog.csdn.net/lydxwj/article/details/89912983)

[npm 解决缺失 core-js 的问题,遇到core-js/modules/es6.regexp.replace 问题](https://www.jianshu.com/p/fe6900748aa3)