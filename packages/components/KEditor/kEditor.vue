<!--
 * @Description: 对vue-quill-editor封装
 * @Author: kcz
 * @Date: 2020-03-30 12:44:03
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-19 13:53:56
 -->
<template>
  <quillEditor
    :style="{ height: `${record.options.height}px` }"
    :value="value"
    ref="vueQuillEditor"
    class="ql-editor-class"
    :class="{ chinesization: record.options.chinesization }"
    :options="editorOption"
    :disabled="record.options.disabled || parentDisabled"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  >
  </quillEditor>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "editor",
  props: ["value", "record", "parentDisabled"],
  components: { quillEditor },
  data() {
    return {
      editorOption: {
        placeholder: this.record.options.placeholder
      }
    };
  },
  methods: {
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange(e) {
      this.$emit("change", e.html);
    }
  }
};
</script>
