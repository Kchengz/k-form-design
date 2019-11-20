<template>
  <a-modal
    title="vue代码"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
    style="top:20px;"
    width="850px"
    :destroyOnClose="true"
  >
    <div class="json-box">
      <codemirror
        style="height:100%;"
        ref="myEditor"
        v-model="editorJson"
      ></codemirror>
    </div>
    <div class="copy-btn-box">
      <a-button
        @click="handleCopyJson"
        type="primary"
        class="copy-btn"
        data-clipboard-action="copy"
        :data-clipboard-text="editorJson"
      >
        复制数据
      </a-button>
      <a-button @click="handleExportJson" type="primary">
        导出代码
      </a-button>
    </div>
  </a-modal>
</template>
<script>
/*
 * athor kcz
 * date 2019-11-20
 */
let codeVueFront = `<template>
  <div>
    <k-form-build
      :value="jsonData"
      ref="KFormBuild"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data () {
    return {
      jsonData: `;
/* eslint-disable */
let codeVueBack = `
    }
  },
  methods: {
    handleSubmit (p) {
      p().then(res => {
          // 获取数据成功
          alert(JSON.stringify(res))
        })
        .catch(err => {
          console.log(err, '校验失败')
        })
    }
  }
}
<\/script>`;
/* eslint-enable */
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
        this.editorJson =
          codeVueFront + JSON.stringify(this.jsonData) + codeVueBack;
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
    exportData(data, fileName = "demo.vue") {
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
<style lang="less">
.json-box {
  height: 580px;
  overflow: auto;
  .vue-codemirror-wrap {
    height: 100%;

    .CodeMirror-wrap {
      height: 100%;
      background: #f6f6f6;
    }
  }
}
.copy-btn-box {
  padding-top: 8px;
  text-align: center;
  .copy-btn {
    margin-right: 8px;
  }
}
</style>
