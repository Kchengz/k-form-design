((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[12],{

/***/ "0bfa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"290d0cd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KBatch/batch.vue?vue&type=template&id=d0bec50e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a-form-model',{ref:"dynamicValidateForm",attrs:{"layout":"inline","model":_vm.dynamicValidateForm}},[_c('a-table',{staticClass:"batch-table",attrs:{"pagination":false,"rowKey":function (record) { return record.key; },"columns":_vm.columns,"dataSource":_vm.dynamicValidateForm.domains,"bordered":"","scroll":{
      x: _vm.listLength * 190 + 80 + (!_vm.record.options.hideSequence ? 60 : 0),
      y: _vm.record.options.scrollY
    }},scopedSlots:_vm._u([_vm._l((_vm.record.list),function(item){return {key:item.key,fn:function(text, record, index){return [_c('KFormModelItem',{key:item.key + '1',attrs:{"record":item,"config":_vm.config,"parentDisabled":_vm.disabled,"index":index,"domains":_vm.dynamicValidateForm.domains,"dynamicData":_vm.dynamicData},on:{"input":_vm.handleInput},model:{value:(record[item.model]),callback:function ($$v) {_vm.$set(record, item.model, $$v)},expression:"record[item.model]"}})]}}}),{key:"dynamic-opr-button",fn:function(text, record){return [(!_vm.disabled)?_c('a-icon',{staticClass:"dynamic-opr-button",attrs:{"title":"删除该行","type":"minus-circle-o"},on:{"click":function($event){return _vm.removeDomain(record)}}}):_vm._e(),(!_vm.disabled)?_c('a-icon',{staticClass:"dynamic-opr-button",attrs:{"title":"复制添加","type":"copy-o"},on:{"click":function($event){return _vm.copyDomain(record)}}}):_vm._e()]}}],null,true)}),_c('Button',{attrs:{"type":"dashed","disabled":_vm.disabled},on:{"click":_vm.addDomain}},[_c('a-icon',{attrs:{"type":"plus"}}),_vm._v("增加 ")],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/KBatch/batch.vue?vue&type=template&id=d0bec50e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("2909");

// EXTERNAL MODULE: ./packages/KFormModelItem/KFormModelItem.vue + 4 modules
var KFormModelItem = __webpack_require__("8d96");

// EXTERNAL MODULE: ./packages/utils/getPluginManager.js + 1 modules
var getPluginManager = __webpack_require__("c78c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KBatch/batch.vue?vue&type=script&lang=js&







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


var Button = getPluginManager["a" /* pluginManager */].getComponent("aButton").component;
/* harmony default export */ var batchvue_type_script_lang_js_ = ({
  name: "KBatch",
  props: ["record", "value", "dynamicData", "config", "parentDisabled"],
  components: {
    KFormModelItem: KFormModelItem["a" /* default */],
    Button: Button
  },
  watch: {
    value: {
      // value 需要深度监听及默认先执行handler函数
      handler: function handler(val) {
        this.dynamicValidateForm.domains = val || [];
      },
      immediate: true,
      deep: true
    }
  },
  data: function data() {
    return {
      dynamicValidateForm: {
        domains: []
      }
    };
  },
  computed: {
    listLength: function listLength() {
      return this.record.list.filter(function (item) {
        return !item.options.hidden;
      }).length;
    },
    columns: function columns() {
      var _this = this;

      var columns = [];

      if (!this.record.options.hideSequence) {
        columns.push({
          title: "序号",
          dataIndex: "sequence_index_number",
          width: "60px",
          align: "center",
          customRender: function customRender(text, record, index) {
            return index + 1;
          }
        });
      }

      columns.push.apply(columns, Object(toConsumableArray["a" /* default */])(this.record.list.filter(function (item) {
        return !item.options.hidden;
      }).map(function (item, index) {
        return {
          title: item.label,
          dataIndex: item.key,
          width: index === _this.record.list.length - 1 ? "" : "190px",
          scopedSlots: {
            customRender: item.key
          }
        };
      })));
      columns.push({
        title: "操作",
        dataIndex: "dynamic-opr-button",
        fixed: "right",
        width: "80px",
        align: "center",
        scopedSlots: {
          customRender: "dynamic-opr-button"
        }
      });
      return columns;
    },
    disabled: function disabled() {
      return this.record.options.disabled || this.parentDisabled;
    }
  },
  methods: {
    validationSubform: function validationSubform() {
      var verification;
      this.$refs.dynamicValidateForm.validate(function (valid) {
        verification = valid;
      });
      return verification;
    },
    resetForm: function resetForm() {
      this.$refs.dynamicValidateForm.resetFields();
    },
    removeDomain: function removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);

      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    copyDomain: function copyDomain(record) {
      var data = {};
      this.record.list.forEach(function (item) {
        data[item.model] = record[item.model];
      });
      this.dynamicValidateForm.domains.push(_objectSpread(_objectSpread({}, data), {}, {
        key: Date.now()
      }));
      this.handleInput();
    },
    addDomain: function addDomain() {
      var data = {};
      this.record.list.forEach(function (item) {
        data[item.model] = item.options.defaultValue;
      });
      this.dynamicValidateForm.domains.push(_objectSpread(_objectSpread({}, data), {}, {
        key: Date.now()
      }));
      this.handleInput();
    },
    handleInput: function handleInput() {
      this.$emit("change", this.dynamicValidateForm.domains);
    }
  }
});
// CONCATENATED MODULE: ./packages/KBatch/batch.vue?vue&type=script&lang=js&
 /* harmony default export */ var KBatch_batchvue_type_script_lang_js_ = (batchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/KBatch/batch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KBatch_batchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var batch = (component.exports);
// CONCATENATED MODULE: ./packages/KBatch/index.js

/* harmony default export */ var KBatch = __webpack_exports__["default"] = (batch);

/***/ }),

/***/ "8d96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"290d0cd4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KFormModelItem/KFormModelItem.vue?vue&type=template&id=3c17cb1e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.record.options.noFormItem)?_c(_vm.componentItem,_vm._b({tag:"component"},'component',_vm.getComponentProps,false)):_c('a-form-model-item',{attrs:{"prop":("domains." + (_vm.record.model)),"rules":_vm.record.rules}},[_c(_vm.componentItem,_vm._b({ref:"inputItem",tag:"component",on:{"change":_vm.handleChange}},'component',_vm.getComponentProps,false))],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/KFormModelItem/KFormModelItem.vue?vue&type=template&id=3c17cb1e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./packages/utils/getPluginManager.js + 1 modules
var getPluginManager = __webpack_require__("c78c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/KFormModelItem/KFormModelItem.vue?vue&type=script&lang=js&






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * date 2019-11-20
 */


var _ = __webpack_require__("a6fb");

var ComponentArray = getPluginManager["a" /* pluginManager */].getComponents();
/* harmony default export */ var KFormModelItemvue_type_script_lang_js_ = ({
  name: "KFormModelItem",
  props: ["record", "domains", "index", "value", "parentDisabled", "dynamicData", "config"],
  computed: {
    /**
     * 计算组件props
     */
    getComponentProps: function getComponentProps() {
      var record = this.record;

      var componentProps = _objectSpread(_objectSpread({
        record: record
      }, this.componentOption), {}, {
        config: this.config,
        disabled: this.disabled || record.options.disabled,
        parentDisabled: this.disabled || record.options.disabled,
        allowClear: record.options.clearable,
        mode: record.options.multiple ? "multiple" : "",
        style: record.options.width && "width:".concat(record.options.width),
        height: typeof record.options.height !== "undefined" ? record.options.height : "",
        dynamicData: this.dynamicData,
        options: !record.options.dynamic ? record.options.options : this.dynamicData[record.options.dynamicKey] ? this.dynamicData[record.options.dynamicKey] : []
      });

      if (this.record.type === "textarea") {
        componentProps.autoSize = {
          minRows: record.options.minRows,
          maxRows: record.options.maxRows
        };
      }

      if (this.record.type === "alert") {
        componentProps.message = record.label;
      }

      if (this.record.type === "number") {
        componentProps.min = record.options.min || record.options.min === 0 ? record.options.min : -Infinity;
        componentProps.max = record.options.max || record.options.max === 0 ? record.options.max : Infinity;
        componentProps.precision = record.options.precision > 50 || !record.options.precision && record.options.precision !== 0 ? null : record.options.precision;
      }

      if (this.record.type === "select") {
        componentProps.filterOption = record.options.showSearch ? function (inputValue, option) {
          return option.componentOptions.children[0].text.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
        } : false;
      }

      return componentProps;
    },
    componentItem: function componentItem() {
      return ComponentArray[this.record.type].component;
    },
    componentOption: function componentOption() {
      return _.omit(this.record.options, ["defaultValue", "disabled"]);
    }
  },
  methods: {
    handleChange: function handleChange(e) {
      var value = e;

      if (e.target) {
        value = e.target.value;
      }

      this.$emit("input", value);
    }
  }
});
// CONCATENATED MODULE: ./packages/KFormModelItem/KFormModelItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var KFormModelItem_KFormModelItemvue_type_script_lang_js_ = (KFormModelItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/KFormModelItem/KFormModelItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KFormModelItem_KFormModelItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var KFormModelItem = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);