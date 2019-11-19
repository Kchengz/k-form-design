<template>
  <div>
    <k-form-design @handleSave="handleSave" />
  </div>
</template>
<script>
export default {
  methods: {
    handleSave(jsonData) {
      console.log(jsonData);
      this.$message.success("触发保存方法");
    }
  }
};
</script>
