<!--
 * @Description: 头部
 * @Author: kcz
 * @Date: 2019-12-30 00:37:05
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-26 20:18:56
 -->
<template>
  <header class="header" v-text="title"></header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "表单设计器 --by kcz"
    }
  }
};
</script>
