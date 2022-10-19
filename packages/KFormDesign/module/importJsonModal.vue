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
      <Codemirror
        style="height:100%;"
        ref="myEditor"
        v-model="jsonFormat"
      ></Codemirror>
    </div>
    <Upload
      action="/abc"
      :beforeUpload="beforeUpload"
      :showUploadList="false"
      accept="application/json"
    >
      <Button type="primary"> 导入json文件 </Button>
    </Upload>
  </a-modal>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 导入json Modal
 */
import jsonFormat from "../config/jsonFormat";
import { pluginManager } from "../../utils/getPluginManager";
import { message } from "ant-design-vue";
const Button = pluginManager.getComponent("aButton").component;
const Upload = pluginManager.getComponent("upload").component;
const Codemirror = pluginManager.getComponent("codemirror").component;
export default {
  name: "importJsonModal",
  components: {
    Codemirror,
    Button,
    Upload
  },
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
      const _this = this;
      const reader = new FileReader();
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

        message.success("导入成功");
      } catch (error) {
        console.error(error);
        message.error("导入失败，数据格式不对");
      }
    }
  }
};
</script>
