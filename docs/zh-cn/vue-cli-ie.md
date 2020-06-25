
### 问题：使用k-form-design后在ie浏览器打开，出现属性不支持等问题

环境：vue cli3以上版本搭建的项目

ie兼容 >= 9

### Installation

```
npm install babel/polyfill --save
# or
yarn add babel/polyfill
```

### `main.js`文件（项目入口）

```js
// 在顶部引入@babel/polyfill处理兼容,以确保首先加载polyfill
import '@babel/polyfill'

import Vue from 'vue'
```


#### 参考文章：

[ant-design-vue的兼容问题](https://blog.csdn.net/lydxwj/article/details/89912983)
