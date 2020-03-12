<template>
  <div>
    <k-form-design @save="handleSave" @close="handleClose" :fields="['input']">
      <!-- <template slot="action">
        <a><a-icon type="code" /> jksdf</a>
      </template> -->
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
