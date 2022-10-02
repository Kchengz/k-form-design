> 本文档以vue-cli3搭建的项目为例

### 1.git源码到本地

```git clone https://gitee.com/kcz66/k-form-design.git```



### 2.将源码复制到你的项目的组件目录中

一般为components目录，建立"k-form-design目录"，将以源码根目录的下三个文件夹复制进来

packages、static、styles



> 目录结构如下：

```

├─components
│  └─k-form-design	// 新建k-form-design目录
│  │	├─packages	// 复制packages文件夹
│  │	├─static	// 复制static文件夹
│  │	└─styles	// 复制styles文件夹

```



### 3. 设置项目中k-form-design需要的依赖

> 这是k-form-design需要的依赖，将下面的依赖与自己的项目对比，将没有安装的依赖都安装一下

```json
  "dependencies": {
    "clipboard": "^2.0.6",
    "moment": "^2.24.0",
    "vue-codemirror-lite": "^1.0.4",
    "vue-quill-editor": "^3.0.6",
    "vuedraggable": "^2.23.2"
  },
  "devDependencies": {
    "ant-design-vue": "^1.5.1",
    "less": "^3.0.4",
    "less-loader": "^4.1.0"
  },
```



### 4. 启用less内联javascript

> vue.config.js中less配置，如果已配置可跳过

```js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#13c2c2',
          'layout-color': '#9867f7'
        },
        javascriptEnabled: true
      }
    }
  }
}
```

> 如果项目中的less及less-loader与上面依赖版本不一致，可能存在版本差异，可以自行去网上查找一下如何启用对应的less版本的内联javascript

### 5. k-form-design使用了[antd ui的高级配置](https://www.antdv.com/docs/vue/use-with-vue-cli-cn/#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE)

> 这里展示vue-cli 3如何使用antd ui高级配置，vue-cli 2的小伙伴可以自行去antd ui官网查看如何配置
>
> 安装babel-plugin-import

```
yarn add babel-plugin-import --dev
```

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