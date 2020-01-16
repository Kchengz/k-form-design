
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
vue create demo
```
并配置项目。

若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装

#### 3. 下载依赖
```
npm i k-form-design --save
# OR
yarn add k-form-design
```
#### 4. 使用组件
main.js引入

完整引入
```javascript
import KFormDesign from 'k-form-design'
import 'k-form-design/lib/k-form-design.css'
Vue.use(KFormDesign)

```
以上代码便完整引入 k-form-design

<!-- 局部导入
```javascript
import { KFormDesign, KFormBuild } from "k-form-design";
import "k-form-design/lib/k-form-design.css";

Vue.use(KFormDesign);
Vue.use(KFormBuild);
``` -->

## 使用建议
?> k-form-design基于[Ant Design](https://www.antdv.com/docs/vue/introduce-cn/)组件,k-form-build组件里面提供了form属性可以调用，建议先了解[Ant Design form](https://www.antdv.com/components/form-cn/#api)组件的API
<!-- >
>ant-design-vue 默认文案是英文，如果需要使用其他语言，可以参考[ant-design 国际化](https://www.antdv.com/docs/vue/i18n-cn/) -->