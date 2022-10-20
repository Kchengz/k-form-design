((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[40],{

/***/ "5966":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bc23e376-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/UploadImg/uploadImg.vue?vue&type=template&id=bf7f8fca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-img-box-9136076486841527",style:({ width: _vm.record.options.width })},[_c('Upload',{attrs:{"name":_vm.config.uploadImageName || _vm.record.options.fileName,"headers":_vm.config.uploadImageHeaders || _vm.record.options.headers,"data":_vm.config.uploadImageData || _vm.optionsData,"action":_vm.config.uploadImage || _vm.record.options.action,"multiple":_vm.record.options.multiple,"listType":_vm.record.options.listType,"disabled":_vm.record.options.disabled || _vm.parentDisabled,"fileList":_vm.fileList,"accept":"image/gif, image/jpeg, image/png","remove":_vm.remove,"beforeUpload":_vm.beforeUpload},on:{"change":_vm.handleChange,"preview":_vm.handlePreview}},[(
        _vm.record.options.listType !== 'picture-card' &&
          _vm.fileList.length < _vm.record.options.limit
      )?_c('Button',{attrs:{"disabled":_vm.record.options.disabled || _vm.parentDisabled}},[_c('a-icon',{attrs:{"type":"upload"}}),_vm._v(" "+_vm._s(_vm.record.options.placeholder)+" ")],1):_vm._e(),(
        _vm.record.options.listType === 'picture-card' &&
          _vm.fileList.length < _vm.record.options.limit
      )?_c('div',{attrs:{"disabled":_vm.record.options.disabled || _vm.parentDisabled}},[_c('a-icon',{attrs:{"type":"plus"}}),_c('div',{staticClass:"ant-upload-text"},[_vm._v(_vm._s(_vm.record.options.placeholder))])],1):_vm._e()],1),_c('a-modal',{attrs:{"visible":_vm.previewVisible,"footer":null},on:{"cancel":_vm.handleCancel}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"alt":"example","src":_vm.previewImageUrl}})])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/UploadImg/uploadImg.vue?vue&type=template&id=bf7f8fca&

// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/style/index.js
var style = __webpack_require__("3b18");

// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/index.js + 4 modules
var message = __webpack_require__("f64c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./packages/utils/getPluginManager.js + 4 modules
var getPluginManager = __webpack_require__("c78c");

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

var Upload = getPluginManager["a" /* pluginManager */].getComponent("upload");
var Button = getPluginManager["a" /* pluginManager */].getComponent("aButton").component;
/* harmony default export */ var uploadImgvue_type_script_lang_js_ = ({
  name: "KUploadImg",
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value", "config", "parentDisabled"],
  components: {
    Upload: Upload.component,
    Button: Button
  },
  data: function data() {
    return {
      fileList: [],
      previewVisible: false,
      previewImageUrl: ""
    };
  },
  watch: {
    value: {
      // value 需要深度监听及默认先执行handler函数
      handler: function handler(val) {
        if (val) {
          this.setFileList();
        }
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    optionsData: function optionsData() {
      try {
        return JSON.parse(this.record.options.data);
      } catch (err) {
        console.error(err);
        return {};
      }
    }
  },
  methods: {
    setFileList: function setFileList() {
      // 当传入value改变时，fileList也要改变
      // 如果传入的值为字符串，则转成json
      if (typeof this.value === "string") {
        this.fileList = JSON.parse(this.value); // 将转好的json覆盖组件默认值的字符串

        this.handleSelectChange();
      } else {
        this.fileList = this.value;
      }
    },
    handleSelectChange: function handleSelectChange() {
      var _this = this;

      setTimeout(function () {
        var arr = _this.fileList.map(function (item) {
          if (typeof item.response !== "undefined") {
            var res = item.response;
            return {
              type: "img",
              name: item.name,
              status: item.status,
              uid: item.uid,
              url: res.data.url || ""
            };
          } else {
            return {
              type: "img",
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
        message["a" /* default */].warning("\u6700\u5927\u4E0A\u4F20\u6570\u91CF\u4E3A".concat(this.record.options.limit));

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

          message["a" /* default */].error("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
        }
      } else if (info.file.status === "error") {
        message["a" /* default */].error("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/UploadImg/uploadImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var UploadImg_uploadImgvue_type_script_lang_js_ = (uploadImgvue_type_script_lang_js_); 
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

/***/ })

}]);