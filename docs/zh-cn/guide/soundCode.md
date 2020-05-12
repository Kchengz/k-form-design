> 本文档以vue-cli3.x以上搭建的项目为例

### 1.git源码到本地

```git clone git@gitee.com:kcz66/k-form-design.git```



### 2.将源码复制到你的项目的组件目录中

一般为components目录，建立"k-form-design目录"，将以下三个目录源码复制进来。
需要将源码复制的三个目录：packages、static、styles

> 目录结构如下：

```

├─components
│  └─k-form-design	// 新建k-form-design目录
│  │	├─packages	// 复制packages文件夹
│  │	├─static	// 复制static文件夹
│  │  	└─styles	// 复制styles文件夹

```



### 3. 设置项目中k-from-design需要的依赖

> 这是k-from-design需要的依赖，将下面的依赖与自己的项目对比，如果全部都有就不需要此步骤。

```json
  "dependencies": {
    "babel-plugin-import": "^1.13.0",
    "babel-polyfill": "^6.26.0",
    "clipboard": "^2.0.6",
    "core-js": "^2.6.5",
    "moment": "^2.24.0",
    "vue": "^2.6.10",
    "vue-codemirror-lite": "^1.0.4",
    "vue-quill-editor": "^3.0.6",
    "vue-router": "^3.0.3",
    "vuedraggable": "^2.23.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.1.0",
    "@vue/cli-plugin-eslint": "^3.1.0",
    "@vue/cli-service": "^4.2.3",
    "@vue/eslint-config-prettier": "^5.0.0",
    "ant-design-vue": "^1.5.1",
    "babel-eslint": "^10.0.1",
    "eslint": "^6.8.0",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-vue": "^5.0.0",
    "less": "^3.0.4",
    "less-loader": "^4.1.0",
    "prettier": "^1.18.2",
    "vue-template-compiler": "^2.6.10"
  }
```



### 4. 配置项目中k-from-design的less全局变量

> vue.config中less的全局变量，如果已配置可跳过

```js
module.exports={
 css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#13c2c2",
          "layout-color": "#9867f7"
        },
        javascriptEnabled: true
      }
    }
}
```



### 5. 配置项目中k-from-design的less全局变量

> 修改`babel.config.js`文件，配置 babel-plugin-import

```js
 module.exports = {
  presets: ["@vue/app"],
+  plugins: [
+    [
+      "import",
+      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
+    ]
+  ]
};
```



### 6. 注册全局组件

> 在main.js中注册组件，代码如下：

```javascript
import KFormDesign from './components/k-form-design/packages'
import './components/k-form-design/styles/form-design.less'
Vue.use(KFormDesign)
```



感谢群员提供的文档