<template>
  <div>
    <KFormDesign @handleSave="handleSave" />
  </div>
</template>
<script>
import { KFormDesign } from "@/components";
export default {
  components: {
    KFormDesign
  },
  methods: {
    handleSave(val) {
      this.$message.success("触发保存方法");
      console.log(val);
    }
  }
};
</script>
