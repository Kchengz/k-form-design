((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[36],{

/***/ "6985":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"290d0cd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KSlider/KSlider.vue?vue&type=template&id=bb11ba26&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider-box",style:(("width:" + (_vm.record.options.width)))},[_c('div',{staticClass:"slider"},[_c('Slider',_vm._b({model:{value:(_vm.sliderValue),callback:function ($$v) {_vm.sliderValue=$$v},expression:"sliderValue"}},'Slider',this.$attrs,false))],1),(_vm.record.options.showInput)?_c('div',{staticClass:"number"},[_c('InputNumber',_vm._b({staticStyle:{"width":"100%"},model:{value:(_vm.sliderValue),callback:function ($$v) {_vm.sliderValue=$$v},expression:"sliderValue"}},'InputNumber',this.$attrs,false))],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/KSlider/KSlider.vue?vue&type=template&id=bb11ba26&

// EXTERNAL MODULE: ./packages/utils/getPluginManager.js + 4 modules
var getPluginManager = __webpack_require__("c78c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KSlider/KSlider.vue?vue&type=script&lang=js&
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

var Slider = getPluginManager["a" /* pluginManager */].getComponent("aSlider").component;
var InputNumber = getPluginManager["a" /* pluginManager */].getComponent("number").component;
/* harmony default export */ var KSlidervue_type_script_lang_js_ = ({
  name: "KSlider",
  props: ["record", "value"],
  components: {
    Slider: Slider,
    InputNumber: InputNumber
  },
  computed: {
    sliderValue: {
      get: function get() {
        return this.value;
      },
      set: function set(e) {
        this.$emit("change", e);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/KSlider/KSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var KSlider_KSlidervue_type_script_lang_js_ = (KSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/KSlider/KSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KSlider_KSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var KSlider = (component.exports);
// CONCATENATED MODULE: ./packages/KSlider/index.js

/* harmony default export */ var packages_KSlider = __webpack_exports__["default"] = (KSlider);

/***/ })

}]);