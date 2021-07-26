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
export default {
  name: "KFormPreview",
  data() {
    return {
      visible: false,
      previewWidth: 850,
      jsonData: {},
        dialogStyle: {
        position: "absolute",
        right: "150px",
        left: "150px",
        minWidth: "700px",
        width: "auto",
        top: "56px",
        bottom: "30px",
        minHeight: "500px"
      },
      bodyStyle: {
        height: "calc(100% - 108px)",
        overflow: "auto"
      }
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
    handleGetData() {
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
<style lang="less" scoped>
.ant-modal-root::v-deep .ant-modal-body::-webkit-scrollbar{
  width: 6px;
    height: 6px;
}
.ant-modal-root::v-deep .ant-modal-body::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
    box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
    background: rgba(0, 0, 0, 0.2);
    scrollbar-arrow-color: red;
}
.ant-modal-root::v-deep .ant-modal-body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
    box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
}
.ant-modal-root::v-deep .ant-modal-content {
  height: 100%;
}
</style>