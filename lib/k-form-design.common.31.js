((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[31],{

/***/ "1982":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"290d0cd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KButton/KButton.vue?vue&type=template&id=63374778&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('Button',_vm._b({attrs:{"html-type":_vm.record.options.handle === 'submit' ? 'submit' : undefined},domProps:{"textContent":_vm._s(_vm.record.label)},on:{"click":function($event){_vm.record.options.handle === 'submit'
        ? false
        : _vm.record.options.handle === 'reset'
        ? _vm.$attrs.onHandleReset()
        : _vm.dynamicData[_vm.record.options.dynamicFun]
        ? _vm.dynamicData[_vm.record.options.dynamicFun]()
        : false}}},'Button',this.$attrs,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/KButton/KButton.vue?vue&type=template&id=63374778&

// EXTERNAL MODULE: ./packages/utils/PluginManager.js
var PluginManager = __webpack_require__("f5b9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KButton/KButton.vue?vue&type=script&lang=js&
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

var Button = PluginManager["a" /* pluginManager */].getComponent("aButton").component;
/* harmony default export */ var KButtonvue_type_script_lang_js_ = ({
  name: "KButton",
  props: ["record", "dynamicData"],
  components: {
    Button: Button
  }
});
// CONCATENATED MODULE: ./packages/KButton/KButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var KButton_KButtonvue_type_script_lang_js_ = (KButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/KButton/KButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KButton_KButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var KButton = (component.exports);
// CONCATENATED MODULE: ./packages/KButton/index.js

/* harmony default export */ var packages_KButton = __webpack_exports__["default"] = (KButton);

/***/ })

}]);