((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[38],{

/***/ "4b02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"290d0cd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KTimePicker/timePicker.vue?vue&type=template&id=d813d58a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('TimePicker',{style:(("width:" + (_vm.record.options.width))),attrs:{"disabled":_vm.record.options.disabled || _vm.parentDisabled,"allowClear":_vm.record.options.clearable,"placeholder":_vm.record.options.placeholder,"format":_vm.record.options.format,"value":_vm.time},on:{"change":_vm.handleSelectChange}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/KTimePicker/timePicker.vue?vue&type=template&id=d813d58a&

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./packages/utils/getPluginManager.js + 4 modules
var getPluginManager = __webpack_require__("c78c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KTimePicker/timePicker.vue?vue&type=script&lang=js&
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


var TimePicker = getPluginManager["a" /* pluginManager */].getComponent("timePicker");
/* harmony default export */ var timePickervue_type_script_lang_js_ = ({
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value", "parentDisabled"],
  components: {
    TimePicker: TimePicker.component
  },
  computed: {
    time: function time() {
      if (!this.value) {
        return undefined;
      } else {
        return moment_default()(this.value, this.record.options.format);
      }
    }
  },
  methods: {
    handleSelectChange: function handleSelectChange(val) {
      var time;

      if (!val) {
        time = "";
      } else {
        time = val.format(this.record.options.format);
      }

      this.$emit("change", time);
      this.$emit("input", time);
    }
  }
});
// CONCATENATED MODULE: ./packages/KTimePicker/timePicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var KTimePicker_timePickervue_type_script_lang_js_ = (timePickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/KTimePicker/timePicker.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KTimePicker_timePickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var timePicker = (component.exports);
// CONCATENATED MODULE: ./packages/KTimePicker/index.js

/* harmony default export */ var KTimePicker = __webpack_exports__["default"] = (timePicker);

/***/ })

}]);