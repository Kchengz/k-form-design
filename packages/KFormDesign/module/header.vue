<!--
 * @Author: your name
 * @Date: 2019-12-30 00:37:05
 * @LastEditTime : 2020-01-01 11:05:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \k-form-design\packages\KFormDesign\module\header.vue
 -->
<template>
  <header class="header-9136076486841527" v-text="title"></header>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 头部
 */
export default {
  props: {
    title: {
      type: String,
      default: "表单设计器 --by kcz"
    }
  }
};
</script>
