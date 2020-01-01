((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[2],{

/***/ "0574":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"25b6ad11-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/UploadFile/uploadFile.vue?vue&type=template&id=1918c2a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({ width: _vm.record.options.width })},[(!_vm.record.options.drag)?_c('a-upload',{attrs:{"disabled":_vm.record.options.disabled,"name":_vm.record.model,"multiple":_vm.record.options.multiple,"data":_vm.optionsData,"fileList":_vm.fileList,"action":_vm.record.options.action,"remove":_vm.remove,"beforeUpload":_vm.beforeUpload},on:{"preview":_vm.handlePreview,"change":_vm.handleChange}},[(_vm.fileList.length < _vm.record.options.limit)?_c('a-button',{attrs:{"disabled":_vm.record.options.disabled}},[_c('a-icon',{attrs:{"type":"upload"}}),_vm._v(" "+_vm._s(_vm.record.options.placeholder)+"\n    ")],1):_vm._e()],1):_c('a-upload-dragger',{attrs:{"disabled":_vm.record.options.disabled,"name":_vm.record.model,"multiple":_vm.record.options.multiple,"fileList":_vm.fileList,"data":_vm.optionsData,"action":_vm.record.options.action,"remove":_vm.remove,"beforeUpload":_vm.beforeUpload},on:{"preview":_vm.handlePreview,"change":_vm.handleChange}},[_c('p',{staticClass:"ant-upload-drag-icon"},[_c('a-icon',{attrs:{"type":"cloud-upload"}})],1),_c('p',{staticClass:"ant-upload-text"},[_vm._v("单击或拖动文件到此区域")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/UploadFile/uploadFile.vue?vue&type=template&id=1918c2a2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/UploadFile/uploadFile.vue?vue&type=script&lang=js&

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
 * description 上传文件组件
 */
/* harmony default export */ var uploadFilevue_type_script_lang_js_ = ({
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value"],
  data: function data() {
    return {
      fileList: []
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
              // type: "file",
              name: item.name,
              status: item.status,
              uid: res.data.fileId || new Date().getTime(),
              url: res.data.url || ""
            };
          } else {
            return {
              // type: "file",
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
      // 下载文件
      var a = document.createElement("a");
      a.href = file.url || file.thumbUrl;
      a.download = file.name;
      a.click();
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
      this.fileList = info.fileList;

      if (info.file.status === "done") {
        var res = info.file.response;

        if (res.code === 0) {
          this.handleSelectChange();
        } else {
          this.fileList.pop();
          this.$message.error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25");
        }
      } else if (info.file.status === "error") {
        this.$message.error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25");
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/UploadFile/uploadFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var UploadFile_uploadFilevue_type_script_lang_js_ = (uploadFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/UploadFile/uploadFile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  UploadFile_uploadFilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uploadFile = (component.exports);
// CONCATENATED MODULE: ./packages/UploadFile/index.js

/* harmony default export */ var UploadFile = __webpack_exports__["default"] = (uploadFile);

/***/ })

}]);