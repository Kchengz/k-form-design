((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[18,20],{

/***/ "0422":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__("2d38");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Checkbox2['default'];

/***/ }),

/***/ "1db9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.note = note;
exports.resetWarned = resetWarned;
exports.call = call;
exports.warningOnce = warningOnce;
exports.noteOnce = noteOnce;
/* eslint-disable no-console */
var warned = {};

function warning(valid, message) {
  // Support uglify
  if (false) {}
}

function note(valid, message) {
  // Support uglify
  if (false) {}
}

function resetWarned() {
  warned = {};
}

function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid, message) {
  call(warning, valid, message);
}

function noteOnce(valid, message) {
  call(note, valid, message);
}

exports['default'] = warningOnce;
/* eslint-enable */

/***/ }),

/***/ "2d38":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _propsUtil = __webpack_require__("73c8");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'Checkbox',
  mixins: [_BaseMixin2['default']],
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes2['default'].string,
    name: _vueTypes2['default'].string,
    id: _vueTypes2['default'].string,
    type: _vueTypes2['default'].string,
    defaultChecked: _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].bool]),
    checked: _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].bool]),
    disabled: _vueTypes2['default'].bool,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    // onChange: PropTypes.func,
    // onClick: PropTypes.func,
    tabIndex: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    readOnly: _vueTypes2['default'].bool,
    autoFocus: _vueTypes2['default'].bool,
    value: _vueTypes2['default'].any
  }, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  data: function data() {
    var checked = (0, _propsUtil.hasProp)(this, 'checked') ? this.checked : this.defaultChecked;
    return {
      sChecked: checked
    };
  },

  watch: {
    checked: function checked(val) {
      this.sChecked = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.autoFocus) {
        _this.$refs.input && _this.$refs.input.focus();
      }
    });
  },

  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    handleChange: function handleChange(e) {
      var props = (0, _propsUtil.getOptionProps)(this);
      if (props.disabled) {
        return;
      }
      if (!('checked' in props)) {
        this.sChecked = e.target.checked;
      }
      this.$forceUpdate(); // change前，维持现有状态
      e.shiftKey = this.eventShiftKey;
      this.__emit('change', {
        target: (0, _extends3['default'])({}, props, {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },

        nativeEvent: e
      });
      this.eventShiftKey = false;
      // fix https://github.com/vueComponent/ant-design-vue/issues/3047
      if ('checked' in props) {
        this.$refs.input.checked = props.checked;
      }
    },
    onClick: function onClick(e) {
      this.__emit('click', e);
      // onChange没能获取到shiftKey，使用onClick hack
      this.eventShiftKey = e.shiftKey;
    }
  },

  render: function render() {
    var _classNames;

    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _getOptionProps.prefixCls,
        name = _getOptionProps.name,
        id = _getOptionProps.id,
        type = _getOptionProps.type,
        disabled = _getOptionProps.disabled,
        readOnly = _getOptionProps.readOnly,
        tabIndex = _getOptionProps.tabIndex,
        autoFocus = _getOptionProps.autoFocus,
        value = _getOptionProps.value,
        others = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['prefixCls', 'name', 'id', 'type', 'disabled', 'readOnly', 'tabIndex', 'autoFocus', 'value']);

    var attrs = (0, _propsUtil.getAttrs)(this);
    var globalProps = Object.keys((0, _extends3['default'])({}, others, attrs)).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }
      return prev;
    }, {});

    var sChecked = this.sChecked;

    var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-checked', sChecked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));

    return h(
      'span',
      { 'class': classString },
      [h('input', (0, _babelHelperVueJsxMergeProps2['default'])([{
        attrs: {
          name: name,
          id: id,
          type: type,
          readOnly: readOnly,
          disabled: disabled,
          tabIndex: tabIndex,

          autoFocus: autoFocus
        },
        'class': prefixCls + '-input',
        domProps: {
          'checked': !!sChecked,
          'value': value
        },
        ref: 'input'
      }, {
        attrs: globalProps,
        on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
          change: this.handleChange,
          click: this.onClick
        })
      }])), h('span', { 'class': prefixCls + '-inner' })]
    );
  }
};

/***/ }),

/***/ "47db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _vcCheckbox = __webpack_require__("d1dd");

var _vcCheckbox2 = _interopRequireDefault(_vcCheckbox);

var _propsUtil = __webpack_require__("73c8");

var _propsUtil2 = _interopRequireDefault(_propsUtil);

var _configConsumerProps = __webpack_require__("bad7");

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

exports['default'] = {
  name: 'ACheckbox',
  inheritAttrs: false,
  __ANT_CHECKBOX: true,
  model: {
    prop: 'checked'
  },
  props: {
    prefixCls: _vueTypes2['default'].string,
    defaultChecked: _vueTypes2['default'].bool,
    checked: _vueTypes2['default'].bool,
    disabled: _vueTypes2['default'].bool,
    isGroup: _vueTypes2['default'].bool,
    value: _vueTypes2['default'].any,
    name: _vueTypes2['default'].string,
    id: _vueTypes2['default'].string,
    indeterminate: _vueTypes2['default'].bool,
    type: _vueTypes2['default'].string.def('checkbox'),
    autoFocus: _vueTypes2['default'].bool
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } },
    checkboxGroupContext: { 'default': function _default() {
        return undefined;
      } }
  },
  watch: {
    value: function value(_value, prevValue) {
      var _this = this;

      this.$nextTick(function () {
        var _checkboxGroupContext = _this.checkboxGroupContext,
            checkboxGroup = _checkboxGroupContext === undefined ? {} : _checkboxGroupContext;

        if (checkboxGroup.registerValue && checkboxGroup.cancelValue) {
          checkboxGroup.cancelValue(prevValue);
          checkboxGroup.registerValue(_value);
        }
      });
    }
  },
  mounted: function mounted() {
    var value = this.value,
        _checkboxGroupContext2 = this.checkboxGroupContext,
        checkboxGroup = _checkboxGroupContext2 === undefined ? {} : _checkboxGroupContext2;

    if (checkboxGroup.registerValue) {
      checkboxGroup.registerValue(value);
    }

    (0, _warning2['default'])((0, _propsUtil2['default'])(this, 'checked') || this.checkboxGroupContext || !(0, _propsUtil2['default'])(this, 'value'), 'Checkbox', '`value` is not validate prop, do you mean `checked`?');
  },
  beforeDestroy: function beforeDestroy() {
    var value = this.value,
        _checkboxGroupContext3 = this.checkboxGroupContext,
        checkboxGroup = _checkboxGroupContext3 === undefined ? {} : _checkboxGroupContext3;

    if (checkboxGroup.cancelValue) {
      checkboxGroup.cancelValue(value);
    }
  },

  methods: {
    handleChange: function handleChange(event) {
      var targetChecked = event.target.checked;
      this.$emit('input', targetChecked);
      this.$emit('change', event);
    },
    focus: function focus() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function blur() {
      this.$refs.vcCheckbox.blur();
    }
  },

  render: function render() {
    var _this2 = this,
        _classNames;

    var h = arguments[0];
    var checkboxGroup = this.checkboxGroupContext,
        $slots = this.$slots;

    var props = (0, _propsUtil.getOptionProps)(this);
    var children = $slots['default'];

    var _getListeners = (0, _propsUtil.getListeners)(this),
        _getListeners$mouseen = _getListeners.mouseenter,
        mouseenter = _getListeners$mouseen === undefined ? noop : _getListeners$mouseen,
        _getListeners$mousele = _getListeners.mouseleave,
        mouseleave = _getListeners$mousele === undefined ? noop : _getListeners$mousele,
        input = _getListeners.input,
        restListeners = (0, _objectWithoutProperties3['default'])(_getListeners, ['mouseenter', 'mouseleave', 'input']);

    var customizePrefixCls = props.prefixCls,
        indeterminate = props.indeterminate,
        restProps = (0, _objectWithoutProperties3['default'])(props, ['prefixCls', 'indeterminate']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('checkbox', customizePrefixCls);

    var checkboxProps = {
      props: (0, _extends3['default'])({}, restProps, { prefixCls: prefixCls }),
      on: restListeners,
      attrs: (0, _propsUtil.getAttrs)(this)
    };
    if (checkboxGroup) {
      checkboxProps.on.change = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2.$emit.apply(_this2, ['change'].concat(args));
        checkboxGroup.toggleOption({ label: children, value: props.value });
      };
      checkboxProps.props.name = checkboxGroup.name;
      checkboxProps.props.checked = checkboxGroup.sValue.indexOf(props.value) !== -1;
      checkboxProps.props.disabled = props.disabled || checkboxGroup.disabled;
      checkboxProps.props.indeterminate = indeterminate;
    } else {
      checkboxProps.on.change = this.handleChange;
    }
    var classString = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-checked', checkboxProps.props.checked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-disabled', checkboxProps.props.disabled), _classNames));
    var checkboxClass = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-indeterminate', indeterminate));
    return h(
      'label',
      { 'class': classString, on: {
          'mouseenter': mouseenter,
          'mouseleave': mouseleave
        }
      },
      [h(_vcCheckbox2['default'], (0, _babelHelperVueJsxMergeProps2['default'])([checkboxProps, { 'class': checkboxClass, ref: 'vcCheckbox' }])), children !== undefined && h('span', [children])]
    );
  }
};

/***/ }),

/***/ "48bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments[1];

      var newState = typeof state === 'function' ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        var s = this.getDerivedStateFromProps((0, _propsUtil.getOptionProps)(this), (0, _extends3['default'])({}, this.$data, newState));
        if (s === null) {
          return;
        } else {
          newState = (0, _extends3['default'])({}, newState, s || {});
        }
      }
      (0, _extends3['default'])(this.$data, newState);
      this.$forceUpdate();
      this.$nextTick(function () {
        callback && callback();
      });
    },
    __emit: function __emit() {
      // 直接调用listeners，底层组件不需要vueTool记录events
      var args = [].slice.call(arguments, 0);
      var eventName = args[0];
      var event = this.$listeners[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            event[i].apply(event, (0, _toConsumableArray3['default'])(args.slice(1)));
          }
        } else {
          event.apply(undefined, (0, _toConsumableArray3['default'])(args.slice(1)));
        }
      }
    }
  }
};

/***/ }),

/***/ "a7e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetWarned = undefined;

var _warning = __webpack_require__("1db9");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.resetWarned = _warning.resetWarned;

exports['default'] = function (valid, component) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  (0, _warning2['default'])(valid, '[antdv: ' + component + '] ' + message);
};

/***/ }),

/***/ "b98c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _Checkbox = __webpack_require__("47db");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _propsUtil = __webpack_require__("73c8");

var _propsUtil2 = _interopRequireDefault(_propsUtil);

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}
exports['default'] = {
  name: 'ACheckboxGroup',
  model: {
    prop: 'value'
  },
  props: {
    name: _vueTypes2['default'].string,
    prefixCls: _vueTypes2['default'].string,
    defaultValue: _vueTypes2['default'].array,
    value: _vueTypes2['default'].array,
    options: _vueTypes2['default'].array.def([]),
    disabled: _vueTypes2['default'].bool
  },
  provide: function provide() {
    return {
      checkboxGroupContext: this
    };
  },

  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue;

    return {
      sValue: value || defaultValue || [],
      registeredValues: []
    };
  },

  watch: {
    value: function value(val) {
      this.sValue = val || [];
    }
  },
  methods: {
    getOptions: function getOptions() {
      var options = this.options,
          $scopedSlots = this.$scopedSlots;

      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }
        var label = option.label;
        if (label === undefined && $scopedSlots.label) {
          label = $scopedSlots.label(option);
        }
        return (0, _extends3['default'])({}, option, { label: label });
      });
    },
    cancelValue: function cancelValue(value) {
      this.registeredValues = this.registeredValues.filter(function (val) {
        return val !== value;
      });
    },
    registerValue: function registerValue(value) {
      this.registeredValues = [].concat((0, _toConsumableArray3['default'])(this.registeredValues), [value]);
    },
    toggleOption: function toggleOption(option) {
      var registeredValues = this.registeredValues;

      var optionIndex = this.sValue.indexOf(option.value);
      var value = [].concat((0, _toConsumableArray3['default'])(this.sValue));
      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }
      if (!(0, _propsUtil2['default'])(this, 'value')) {
        this.sValue = value;
      }
      var options = this.getOptions();
      var val = value.filter(function (val) {
        return registeredValues.indexOf(val) !== -1;
      }).sort(function (a, b) {
        var indexA = options.findIndex(function (opt) {
          return opt.value === a;
        });
        var indexB = options.findIndex(function (opt) {
          return opt.value === b;
        });
        return indexA - indexB;
      });
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  render: function render() {
    var h = arguments[0];
    var props = this.$props,
        state = this.$data,
        $slots = this.$slots;
    var customizePrefixCls = props.prefixCls,
        options = props.options;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('checkbox', customizePrefixCls);

    var children = $slots['default'];
    var groupPrefixCls = prefixCls + '-group';
    if (options && options.length > 0) {
      children = this.getOptions().map(function (option) {
        return h(
          _Checkbox2['default'],
          {
            attrs: {
              prefixCls: prefixCls,

              disabled: 'disabled' in option ? option.disabled : props.disabled,
              indeterminate: option.indeterminate,
              value: option.value,
              checked: state.sValue.indexOf(option.value) !== -1
            },
            key: option.value.toString(), on: {
              'change': option.onChange || noop
            },

            'class': groupPrefixCls + '-item'
          },
          [option.label]
        );
      });
    }
    return h(
      'div',
      { 'class': groupPrefixCls },
      [children]
    );
  }
};

/***/ }),

/***/ "d1dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _src = __webpack_require__("0422");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_src)['default'];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ })

}]);