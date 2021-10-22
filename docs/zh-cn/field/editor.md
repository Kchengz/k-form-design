# 富文本

## 富文本样式问题

使用富文本导出数据转成html时缺少样式问题

> 解决：引入snow.css，在需要展示的页面中用如下元素包裹即可

```html
<div class="ql-container ql-snow">
    <div class="ql-editor" v-html="content">
    </div>
</div>
```

> 示例

![image-20200330143658696](assets/image-20200330143658696.png)

```html
<template>
  <div class="ql-container ql-snow">
    <div class="ql-editor" v-html="editor_1585549756333"></div>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      editor_1585549756333:
        '<blockquote>2342342</blockquote><pre class="ql-syntax" spellcheck="false">成功的秘诀，在永不改变既定的目的</pre><p><br></p><p><strong class="ql-size-large"><em>不断的奋斗就是走上成功之路</em><span class="ql-cursor">﻿</span></strong></p>'
    };
  }
};
</script>
```

