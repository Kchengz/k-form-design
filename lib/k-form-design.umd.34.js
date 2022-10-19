((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[34],{

/***/ "fcf0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"290d0cd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KEditor/kEditor.vue?vue&type=template&id=10b4b5be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('quillEditor',{ref:"vueQuillEditor",staticClass:"ql-editor-class",class:{ chinesization: _vm.record.options.chinesization },style:({ height: ((_vm.record.options.height) + "px") }),attrs:{"value":_vm.value,"options":_vm.editorOption,"disabled":_vm.record.options.disabled || _vm.parentDisabled},on:{"blur":function($event){return _vm.onEditorBlur($event)},"focus":function($event){return _vm.onEditorFocus($event)},"change":function($event){return _vm.onEditorChange($event)}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/KEditor/kEditor.vue?vue&type=template&id=10b4b5be&

// EXTERNAL MODULE: ./node_modules/vue-quill-editor/dist/vue-quill-editor.js
var vue_quill_editor = __webpack_require__("953d");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.core.css
var quill_core = __webpack_require__("a753");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.snow.css
var quill_snow = __webpack_require__("8096");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.bubble.css
var quill_bubble = __webpack_require__("14e1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KEditor/kEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //调用编辑器




/* harmony default export */ var kEditorvue_type_script_lang_js_ = ({
  name: "editor",
  props: ["value", "record", "parentDisabled"],
  components: {
    quillEditor: vue_quill_editor["quillEditor"]
  },
  data: function data() {
    return {
      editorOption: {
        placeholder: this.record.options.placeholder
      }
    };
  },
  methods: {
    onEditorBlur: function onEditorBlur() {},
    // 失去焦点事件
    onEditorFocus: function onEditorFocus() {},
    // 获得焦点事件
    onEditorChange: function onEditorChange(e) {
      this.$emit("change", e.html);
    }
  }
});
// CONCATENATED MODULE: ./packages/KEditor/kEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var KEditor_kEditorvue_type_script_lang_js_ = (kEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/KEditor/kEditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KEditor_kEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kEditor = (component.exports);
// CONCATENATED MODULE: ./packages/KEditor/index.js
/*
 * @Description:导出富文本编辑器
 * @Author: kcz
 * @Date: 2020-03-30 12:45:04
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-30 12:45:40
 */

/* harmony default export */ var KEditor = __webpack_exports__["default"] = (kEditor);

/***/ })

}]);