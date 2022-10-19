((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[39],{

/***/ "0574":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"290d0cd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/UploadFile/uploadFile.vue?vue&type=template&id=c32ee07c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({ width: _vm.record.options.width })},[(!_vm.record.options.drag)?_c('Upload',{attrs:{"disabled":_vm.record.options.disabled || _vm.parentDisabled,"name":_vm.config.uploadFileName || _vm.record.options.fileName,"headers":_vm.config.uploadFileHeaders || _vm.record.options.headers,"data":_vm.config.uploadFileData || _vm.optionsData,"action":_vm.config.uploadFile || _vm.record.options.action,"multiple":_vm.record.options.multiple,"fileList":_vm.fileList,"remove":_vm.remove,"beforeUpload":_vm.beforeUpload},on:{"preview":_vm.handlePreview,"change":_vm.handleChange}},[(_vm.fileList.length < _vm.record.options.limit)?_c('Button',{attrs:{"disabled":_vm.record.options.disabled || _vm.parentDisabled}},[_c('a-icon',{attrs:{"type":"upload"}}),_vm._v(" "+_vm._s(_vm.record.options.placeholder)+" ")],1):_vm._e()],1):_c('UploadDragger',{class:{ 'hide-upload-drag': !(_vm.fileList.length < _vm.record.options.limit) },attrs:{"disabled":_vm.record.options.disabled || _vm.parentDisabled,"name":_vm.config.uploadFileName || _vm.record.options.fileName,"headers":_vm.config.uploadFileHeaders || _vm.record.options.headers,"data":_vm.config.uploadFileData || _vm.optionsData,"action":_vm.config.uploadFile || _vm.record.options.action,"multiple":_vm.record.options.multiple,"fileList":_vm.fileList,"remove":_vm.remove,"beforeUpload":_vm.beforeUpload},on:{"preview":_vm.handlePreview,"change":_vm.handleChange}},[_c('p',{staticClass:"ant-upload-drag-icon"},[_c('a-icon',{attrs:{"type":"cloud-upload"}})],1),_c('p',{staticClass:"ant-upload-text"},[_vm._v("单击或拖动文件到此区域")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/UploadFile/uploadFile.vue?vue&type=template&id=c32ee07c&

// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/style/index.js
var style = __webpack_require__("3b18");

// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/index.js + 4 modules
var message = __webpack_require__("f64c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./packages/utils/getPluginManager.js
var getPluginManager = __webpack_require__("c78c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/UploadFile/uploadFile.vue?vue&type=script&lang=js&





var Upload = getPluginManager["a" /* pluginManager */].getComponent("upload");
var UploadDragger = getPluginManager["a" /* pluginManager */].getComponent("uploadDragger");
var Button = getPluginManager["a" /* pluginManager */].getComponent("aButton").component;
/* harmony default export */ var uploadFilevue_type_script_lang_js_ = ({
  name: "KUploadFile",
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value", "config", "parentDisabled", "dynamicData"],
  components: {
    Upload: Upload.component,
    UploadDragger: UploadDragger.component,
    Button: Button
  },
  data: function data() {
    return {
      fileList: []
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
              type: "file",
              name: item.name,
              status: item.status,
              uid: res.data.fileId || Date.now(),
              url: res.data.url || ""
            };
          } else {
            return {
              type: "file",
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
      var _this2 = this;

      // 下载文件
      var downloadWay = this.record.options.downloadWay;
      var dynamicFun = this.record.options.dynamicFun;

      if (downloadWay === "a") {
        // 使用a标签下载
        var a = document.createElement("a");
        a.href = file.url || file.thumbUrl;
        a.download = file.name;
        a.click();
      } else if (downloadWay === "ajax") {
        // 使用ajax获取文件blob，并保持到本地
        this.getBlob(file.url || file.thumbUrl).then(function (blob) {
          _this2.saveAs(blob, file.name);
        });
      } else if (downloadWay === "dynamic") {
        // 触发动态函数
        this.dynamicData[dynamicFun](file);
      }
    },

    /**
     * 获取 blob
     * url 目标文件地址
     */
    getBlob: function getBlob(url) {
      return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";

        xhr.onload = function () {
          if (xhr.status === 200) {
            resolve(xhr.response);
          }
        };

        xhr.send();
      });
    },

    /**
     * 保存 blob
     * filename 想要保存的文件名称
     */
    saveAs: function saveAs(blob, filename) {
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        var link = document.createElement("a");
        var body = document.querySelector("body");
        link.href = window.URL.createObjectURL(blob);
        link.download = filename; // fix Firefox

        link.style.display = "none";
        body.appendChild(link);
        link.click();
        body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      }
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
      this.fileList = info.fileList;

      if (info.file.status === "done") {
        var res = info.file.response;

        if (res.code === 0) {
          this.handleSelectChange();
        } else {
          this.fileList.pop();

          message["a" /* default */].error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25");
        }
      } else if (info.file.status === "error") {
        message["a" /* default */].error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25");
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