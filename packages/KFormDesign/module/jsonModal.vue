<template>
  <a-modal
    title="JSON数据"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
    :destroyOnClose="true"
    style="top:20px;"
    width="850px"
  >
    <div class="json-box-9136076486841527">
      <codemirror
        style="height:100%;"
        ref="myEditor"
        v-model="editorJson"
      ></codemirror>
    </div>
    <div class="copy-btn-box-9136076486841527">
      <a-button
        @click="handleCopyJson"
        type="primary"
        class="copy-btn"
        data-clipboard-action="copy"
        :data-clipboard-text="JSON.stringify(jsonData)"
      >
        复制数据
      </a-button>
      <a-button @click="handleExportJson" type="primary">
        导出JSON
      </a-button>
    </div>
  </a-modal>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 生成json Modal
 */
import { codemirror } from "vue-codemirror-lite";
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
    exportData(data, fileName = "data.json") {
      let content = "data:text/csv;charset=utf-8,";
      content += data;
      var encodedUri = encodeURI(content);
      var actions = document.createElement("a");
      actions.setAttribute("href", encodedUri);
      actions.setAttribute("download", fileName);
      actions.click();
    },
    handleExportJson() {
      // 导出JSON
      this.exportData(this.editorJson);
    },
    handleCopyJson() {
      // 复制数据
      let clipboard = new this.clipboard(".copy-btn");
      clipboard.on("success", () => {
        this.$message.success("复制成功");
      });
      clipboard.on("error", () => {
        this.$message.error("复制失败");
      });
      setTimeout(() => {
        // 销毁实例
        clipboard.destroy();
      }, 122);
    }
  }
};
</script>
