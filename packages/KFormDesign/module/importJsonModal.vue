<template>
  <a-modal
    title="JSON数据"
    :visible="visible"
    @ok="handleImportJson"
    @cancel="handleCancel"
    cancelText="关闭"
    :destroyOnClose="true"
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
  </a-modal>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import { codemirror } from "vue-codemirror-lite";
import jsonFormat from "../config/jsonFormat";
export default {
  name: "importJsonModal",
  data() {
    return {
      visible: false,
      jsonFormat,
      jsonData: {}
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
    handleImportJson() {
      // 导入JSON
      try {
        const editorJsonData = JSON.parse(this.jsonFormat);
        this.jsonData.list = editorJsonData.list;
        this.jsonData.config = editorJsonData.config;
        this.jsonData.config.layout = editorJsonData.config.layout;
        this.handleCancel();
        this.$message.success("导入成功");
      } catch {
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
