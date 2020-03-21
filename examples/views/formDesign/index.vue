<template>
  <div>
    <k-form-design @save="handleSave" showToolbarsText @close="handleClose">
    </k-form-design>
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
export default {
  methods: {
    handleSave(jsonData) {
      console.log(jsonData);
      this.$message.success("触发保存方法");
    },
    handleClose() {
      this.$message.success("触发关闭方法");
    }
  }
};
</script>
