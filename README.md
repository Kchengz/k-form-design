# 表单设计器 beta

## 安装依赖
``` 
# 使用yarn 
yarn add k-form-design

# 使用npm 
npm install k-form-design --seve
```

### 引入
``` 
在main.js引入

import { KFormDesign, KBuildForm } from "../packages/index";

Vue.use(KFormDesign);
Vue.use(KBuildForm);
```

### 设计器使用
``` 
<template>
  <div>
    <k-form-design @handleSave="handleSave" />
  </div>
</template>
<script>
export default {
  methods: {
    handleSave(val) {
      this.$message.success("触发保存方法");
      console.log(val);
    }
  }
};
</script>
```
### 解析器使用
``` 
// jsonData 为设计器生成的json
<k-build-form
      :jsonData="jsonData"
      ref="kBuildForm"
      @submit="handleSubmit"
    />
```

![1.jpg](https://i.loli.net/2019/09/29/X2h9Kji5HpC6ZdB.png)
![2.jpg](https://i.loli.net/2019/09/29/OzBGS6F2ZmflMCw.png)
![3.jpg](https://i.loli.net/2019/09/29/oYOjwT3qUr2SMmA.png)
![4.jpg](https://i.loli.net/2019/09/29/JtCDZELxe3r5ARl.png)
![5.jpg](https://i.loli.net/2019/09/29/NTGmdoDPXvqHJMe.png)