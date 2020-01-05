<template>
  <a-modal
    title="JSON数据"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
    :destroyOnClose="true"
    wrapClassName="code-modal-9136076486841527"
    style="top:20px;"
    width="850px"
  >
    <previewCode :editorJson="editorJson" />
  </a-modal>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 生成json Modal
 */
import previewCode from "../../PreviewCode/index";
export default {
  name: "JsonModal",
  data() {
    return {
      visible: false,
      editorJson: "",
      jsonData: {}
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.editorJson = JSON.stringify(this.jsonData, null, "\t");
      }
    }
  },
  components: {
    previewCode
  },
  methods: {
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
