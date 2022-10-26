
## 快速上手
k-form-design 可以通过拖拽配置操作快速构建表单![](https://img.shields.io/github/stars/Kchengz/k-form-design?style=social)
> 在开始之前，推荐先学习 Vue 和 ES2015，并正确安装和配置了 Node.js v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式


#### 1. 安装脚手架工具 vue-cli
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

#### 2. 创建一个项目

使用命令行初始化。
```
vue create demo
```
并配置项目。

若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装

#### 3. 下载依赖

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



#### 4. 使用组件

main.js引入

完整引入
```javascript
// 在main.js引入

// 注：useComponents 需放最上面，优先注册懒加载组件
import 'k-form-design/packages/core/useComponents'
import KFormDesign from 'k-form-design/packages/use.js'
import 'k-form-design/lib/k-form-design.css'

Vue.use(KFormDesign)
```
以上代码便完整引入 k-form-design，组件为懒加载方式，并不会一次性加载所有组件

如果您不想使用懒加载的方式使用preUseComponents替换useComponents文件，就可以切换到预加载组件的方式

```javascript
- import 'k-form-design/packages/core/useComponents'
+ import 'k-form-design/packages/core/preUseComponents'
```



#### ~~5. 引入mini包（3.6.0版本+）~~3.8.1 版本默认不再集成ant-design-vue，请参照其他方式使用

~~默认包是集成了antd ui的，如果项目中也有使用antd ui，可以选择引入mini包来达到减小最终项目的体积，当然要确认项目中已经引入[components_use.js](https://gitee.com/kcz66/k-form-design/blob/master/packages/core/components_use.js)中的组件~~

#### 按需加载

```javascript
import { KFormDesign, KFormBuild } from "k-form-design/packages/use.js";
import "k-form-design/lib/k-form-design.css";
```

#### 使用建议
> k-form-design基于[Ant Design](https://www.antdv.com/docs/vue/introduce-cn/)组件,k-form-build组件里面提供了form属性可以调用，建议先了解[Ant Design form](https://www.antdv.com/components/form-cn/#api)组件的API

