<template>
  <a-modal
    title="JSON数据"
    :visible="visible"
    @ok="handleImportJson"
    @cancel="handleCancel"
    cancelText="关闭"
    :destroyOnClose="true"
    wrapClassName="code-modal-9136076486841527"
    style="top:20px;"
    width="850px"
  >
    <p class="hint-box">导入格式如下:</p>
    <div class="json-box-9136076486841527">
      <codemirror
        style="height:100%;"
        ref="myEditor"
        v-model="jsonFormat"
      ></codemirror>
    </div>
    <a-upload
      action="/abc"
      :beforeUpload="beforeUpload"
      :showUploadList="false"
      accept="application/json"
    >
      <a-button type="primary"> 导入json文件 </a-button>
    </a-upload>
  </a-modal>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 导入json Modal
 */
import { codemirror } from "vue-codemirror-lite";
import jsonFormat from "../config/jsonFormat";
export default {
  name: "importJsonModal",
  data() {
    return {
      visible: false,
      jsonFormat,
      jsonData: {},
      handleSetSelectItem: null
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.jsonFormat = jsonFormat;
      }
    }
  },
  components: {
    codemirror
  },
  computed: {
    editor() {
      // get current editor object
      return this.$refs.myEditor.editor;
    }
  },
  methods: {
    handleCancel() {
      this.visible = false;
    },
    beforeUpload(e) {
      // 通过json文件导入
      let _this = this;
      let reader = new FileReader();
      reader.readAsText(e);
      reader.onload = function() {
        _this.jsonFormat = this.result;
        _this.handleImportJson();
      };
      return false;
    },
    handleImportJson() {
      // 导入JSON
      try {
        const editorJsonData = JSON.parse(this.jsonFormat);
        this.jsonData.list = editorJsonData.list;
        this.jsonData.config = editorJsonData.config;
        this.jsonData.config.layout = editorJsonData.config.layout;
        this.handleCancel();
        // 导入之后，需要清除已选择key
        this.handleSetSelectItem({ key: "" });

        this.$message.success("导入成功");
      } catch (error) {
        this.$message.error("导入失败，数据格式不对");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hint-box {
  background: #e9e9e9;
  margin: 0;
  border-bottom: 2px solid #fff;
}
</style>
