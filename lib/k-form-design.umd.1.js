((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[1],{

/***/ "1c1f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5966":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25b6ad11-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/UploadImg/uploadImg.vue?vue&type=template&id=9c8d5d44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-img-box-9136076486841527",style:({ width: _vm.record.options.width })},[_c('a-upload',{attrs:{"name":_vm.record.model,"multiple":_vm.record.options.multiple,"listType":_vm.record.options.listType,"disabled":_vm.record.options.disabled,"data":_vm.optionsData,"fileList":_vm.fileList,"action":_vm.record.options.action,"accept":"image/gif, image/jpeg, image/png","remove":_vm.remove,"beforeUpload":_vm.beforeUpload},on:{"change":_vm.handleChange,"preview":_vm.handlePreview}},[(
        _vm.record.options.listType !== 'picture-card' &&
          _vm.fileList.length < _vm.record.options.limit
      )?_c('a-button',{attrs:{"disabled":_vm.record.options.disabled}},[_c('a-icon',{attrs:{"type":"upload"}}),_vm._v(" "+_vm._s(_vm.record.options.placeholder)+"\n    ")],1):_vm._e(),(
        _vm.record.options.listType === 'picture-card' &&
          _vm.fileList.length < _vm.record.options.limit
      )?_c('div',{attrs:{"disabled":_vm.record.options.disabled}},[_c('a-icon',{attrs:{"type":"plus"}}),_c('div',{staticClass:"ant-upload-text"},[_vm._v(_vm._s(_vm.record.options.placeholder))])],1):_vm._e()],1),_c('a-modal',{attrs:{"visible":_vm.previewVisible,"footer":null},on:{"cancel":_vm.handleCancel}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"alt":"example","src":_vm.previewImageUrl}})])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/UploadImg/uploadImg.vue?vue&type=template&id=9c8d5d44&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/UploadImg/uploadImg.vue?vue&type=script&lang=js&

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

/*
 * author kcz
 * date 2019-12-31
 * description 上传图片组件
 */
/* harmony default export */ var uploadImgvue_type_script_lang_js_ = ({
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value"],
  data: function data() {
    return {
      fileList: [],
      previewVisible: false,
      previewImageUrl: ""
    };
  },
  watch: {
    value: function value(val) {
      this.fileList = val;
    }
  },
  computed: {
    optionsData: function optionsData() {
      try {
        return JSON.parse(this.record.options.data);
      } catch (_unused) {
        return {};
      }
    }
  },
  methods: {
    handleSelectChange: function handleSelectChange() {
      var _this = this;

      setTimeout(function () {
        var arr = _this.fileList.map(function (item) {
          if (typeof item.response !== "undefined") {
            var res = item.response;
            return {
              // type: "img",
              name: item.name,
              status: item.status,
              uid: item.uid,
              url: res.data.url || ""
            };
          } else {
            return {
              // type: "img",
              name: item.name,
              status: item.status,
              uid: item.uid,
              url: item.url || ""
            };
          }
        });

        _this.$emit("change", arr);

        _this.$emit("input", arr);
      }, 10);
    },
    handlePreview: function handlePreview(file) {
      // 预览图片
      this.previewImageUrl = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleCancel: function handleCancel() {
      // 取消操作
      this.previewVisible = false;
    },
    remove: function remove() {
      this.handleSelectChange();
    },
    beforeUpload: function beforeUpload(e, files) {
      if (files.length + this.fileList.length > this.record.options.limit) {
        this.$message.warning("\u6700\u5927\u4E0A\u4F20\u6570\u91CF\u4E3A".concat(this.record.options.limit));
        files.splice(this.record.options.limit - this.fileList.length);
      }
    },
    handleChange: function handleChange(info) {
      // 上传数据改变时
      this.fileList = info.fileList;

      if (info.file.status === "done") {
        var res = info.file.response;

        if (res.code === 0) {
          this.handleSelectChange();
        } else {
          this.fileList.pop();
          this.$message.error("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
        }
      } else if (info.file.status === "error") {
        this.$message.error("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/UploadImg/uploadImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var UploadImg_uploadImgvue_type_script_lang_js_ = (uploadImgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/UploadImg/uploadImg.vue?vue&type=style&index=0&lang=less&
var uploadImgvue_type_style_index_0_lang_less_ = __webpack_require__("f2cd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/UploadImg/uploadImg.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  UploadImg_uploadImgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uploadImg = (component.exports);
// CONCATENATED MODULE: ./packages/UploadImg/index.js

/* harmony default export */ var UploadImg = __webpack_exports__["default"] = (uploadImg);

/***/ }),

/***/ "f2cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImg_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c1f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImg_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImg_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadImg_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);