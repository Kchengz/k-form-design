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
      // console.log(val);
    }
  }
};
</script>
