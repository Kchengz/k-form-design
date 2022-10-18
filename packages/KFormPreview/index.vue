<template>
  <a-modal
    title="预览"
    :visible="visible"
    @ok="handleGetData"
    @cancel="handleCancel"
    okText="获取数据"
    cancelText="关闭"
    style="top:20px;"
    :destroyOnClose="true"
    :centered="true"
    :dialogStyle="dialogStyle"
    :bodyStyle="bodyStyle"
    wrapClassName="k-form-modal"
    :width="`${previewWidth}px`"
  >
    <k-form-build :value="jsonData" @submit="handleSubmit" ref="KFormBuild" />
    <jsonModel ref="jsonModel" />
  </a-modal>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import jsonModel from "../KFormDesign/module/jsonModal";
import { dialogStyle, bodyStyle } from "@/config/modal.js";
export default {
  name: "KFormPreview",
  data() {
    return {
      visible: false,
      previewWidth: 850,
      jsonData: {},
      dialogStyle,
      bodyStyle
    };
  },
  components: {
    jsonModel
  },
  methods: {
    handleSubmit(p) {
      p.then(res => {
        console.log(res, "获取数据成功");
        this.$refs.jsonModel.jsonData = res;
        this.$refs.jsonModel.visible = true;
      }).catch(err => {
        console.error(err, "获取数据失败");
      });
    },
    async handleGetData() {
      this.$refs.KFormBuild.getData()
        .then(res => {
          console.log(res, "获取数据成功");
          this.$refs.jsonModel.jsonData = res;
          this.$refs.jsonModel.visible = true;
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
