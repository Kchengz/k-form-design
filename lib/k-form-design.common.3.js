((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[3],{

/***/ "0a1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.fixControlledValue = fixControlledValue;
exports.resolveOnChange = resolveOnChange;
exports.getInputClassName = getInputClassName;

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _TextArea = __webpack_require__("516f");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _inputProps = __webpack_require__("8bc7");

var _inputProps2 = _interopRequireDefault(_inputProps);

var _propsUtil = __webpack_require__("73c8");

var _configConsumerProps = __webpack_require__("bad7");

var _ClearableLabeledInput = __webpack_require__("1fde");

var _ClearableLabeledInput2 = _interopRequireDefault(_ClearableLabeledInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

function resolveOnChange(target, e, onChange) {
  if (onChange) {
    var event = e;
    if (e.type === 'click') {
      // click clear icon
      //event = Object.create(e);
      Object.defineProperty(event, 'target', {
        writable: true
      });
      Object.defineProperty(event, 'currentTarget', {
        writable: true
      });
      event.target = target;
      event.currentTarget = target;
      var originalInputValue = target.value;
      // change target ref value cause e.target.value should be '' when clear input
      target.value = '';
      onChange(event);
      // reset target ref value
      target.value = originalInputValue;
      return;
    }
    onChange(event);
  }
}

function getInputClassName(prefixCls, size, disabled) {
  var _classNames;

  return (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));
}

exports['default'] = {
  name: 'AInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change.value'
  },
  props: (0, _extends3['default'])({}, _inputProps2['default']),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  data: function data() {
    var props = this.$props;
    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    return {
      stateValue: typeof value === 'undefined' ? '' : value
    };
  },

  watch: {
    value: function value(val) {
      this.stateValue = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.autoFocus) {
        _this.focus();
      }
      _this.clearPasswordValueAttribute();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.removePasswordTimeout) {
      clearTimeout(this.removePasswordTimeout);
    }
  },

  methods: {
    onBlur: function onBlur(e) {
      // fix this isssue: https://github.com/vueComponent/ant-design-vue/issues/3816
      // reference: https://github.com/vuejs/vue/issues/5847 and https://github.com/vuejs/vue/issues/8431
      this.$forceUpdate();

      var _getListeners = (0, _propsUtil.getListeners)(this),
          blur = _getListeners.blur;

      blur && blur(e);
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    select: function select() {
      this.$refs.input.select();
    },
    setValue: function setValue(value, callback) {
      if (this.stateValue === value) {
        return;
      }
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.stateValue = value;
        this.$nextTick(function () {
          callback && callback();
        });
      } else {
        // 不在严格受控
        // https://github.com/vueComponent/ant-design-vue/issues/2207，modal 是 新 new 实例，更新队列和当前不在同一个更新队列中
        // this.$forceUpdate();
      }
    },
    onChange: function onChange(e) {
      this.$emit('change.value', e.target.value);
      this.$emit('change', e);
      this.$emit('input', e);
    },
    handleReset: function handleReset(e) {
      var _this2 = this;

      this.setValue('', function () {
        _this2.focus();
      });
      resolveOnChange(this.$refs.input, e, this.onChange);
    },
    renderInput: function renderInput(prefixCls) {
      var h = this.$createElement;

      var otherProps = (0, _omit2['default'])(this.$props, ['prefixCls', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', 'value', 'defaultValue', 'lazy', 'size', 'inputType', 'className']);
      var stateValue = this.stateValue,
          handleKeyDown = this.handleKeyDown,
          handleChange = this.handleChange,
          size = this.size,
          disabled = this.disabled;

      var inputProps = {
        directives: [{ name: 'ant-input' }],
        domProps: {
          value: fixControlledValue(stateValue)
        },
        attrs: (0, _extends3['default'])({}, otherProps, this.$attrs),
        on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
          keydown: handleKeyDown,
          input: handleChange,
          change: noop,
          blur: this.onBlur
        }),
        'class': getInputClassName(prefixCls, size, disabled),
        ref: 'input',
        key: 'ant-input'
      };
      return h('input', inputProps);
    },
    clearPasswordValueAttribute: function clearPasswordValueAttribute() {
      var _this3 = this;

      // https://github.com/ant-design/ant-design/issues/20541
      this.removePasswordTimeout = setTimeout(function () {
        if (_this3.$refs.input && _this3.$refs.input.getAttribute && _this3.$refs.input.getAttribute('type') === 'password' && _this3.$refs.input.hasAttribute('value')) {
          _this3.$refs.input.removeAttribute('value');
        }
      });
    },
    handleChange: function handleChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing;
      // https://github.com/vueComponent/ant-design-vue/issues/2203

      if ((e.isComposing || composing) && this.lazy || this.stateValue === value) return;
      this.setValue(value, this.clearPasswordValueAttribute);
      resolveOnChange(this.$refs.input, e, this.onChange);
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.$emit('pressEnter', e);
      }
      this.$emit('keydown', e);
    }
  },
  render: function render() {
    var h = arguments[0];

    if (this.$props.type === 'textarea') {
      var textareaProps = {
        props: this.$props,
        attrs: this.$attrs,
        on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
          input: this.handleChange,
          keydown: this.handleKeyDown,
          change: noop,
          blur: this.onBlur
        })
      };
      return h(_TextArea2['default'], (0, _babelHelperVueJsxMergeProps2['default'])([textareaProps, { ref: 'input' }]));
    }
    var customizePrefixCls = this.$props.prefixCls;
    var stateValue = this.$data.stateValue;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input', customizePrefixCls);
    var addonAfter = (0, _propsUtil.getComponentFromProp)(this, 'addonAfter');
    var addonBefore = (0, _propsUtil.getComponentFromProp)(this, 'addonBefore');
    var suffix = (0, _propsUtil.getComponentFromProp)(this, 'suffix');
    var prefix = (0, _propsUtil.getComponentFromProp)(this, 'prefix');
    var props = {
      props: (0, _extends3['default'])({}, (0, _propsUtil.getOptionProps)(this), {
        prefixCls: prefixCls,
        inputType: 'input',
        value: fixControlledValue(stateValue),
        element: this.renderInput(prefixCls),
        handleReset: this.handleReset,
        addonAfter: addonAfter,
        addonBefore: addonBefore,
        suffix: suffix,
        prefix: prefix
      }),
      on: (0, _propsUtil.getListeners)(this)
    };
    return h(_ClearableLabeledInput2['default'], props);
  }
};

/***/ }),

/***/ "133a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgBaseProps = undefined;
exports.getThemeFromTypeName = getThemeFromTypeName;
exports.removeTypeTheme = removeTypeTheme;
exports.withThemeSuffix = withThemeSuffix;
exports.alias = alias;

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = exports.svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};

var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;

function getThemeFromTypeName(type) {
  var result = null;
  if (fillTester.test(type)) {
    result = 'filled';
  } else if (outlineTester.test(type)) {
    result = 'outlined';
  } else if (twoToneTester.test(type)) {
    result = 'twoTone';
  }
  return result;
}

function removeTypeTheme(type) {
  return type.replace(fillTester, '').replace(outlineTester, '').replace(twoToneTester, '');
}

function withThemeSuffix(type, theme) {
  var result = type;
  if (theme === 'filled') {
    result += '-fill';
  } else if (theme === 'outlined') {
    result += '-o';
  } else if (theme === 'twoTone') {
    result += '-twotone';
  } else {
    (0, _warning2['default'])(false, 'Icon', 'This icon \'' + type + '\' has unknown theme \'' + theme + '\'');
  }
  return result;
}

// For alias or compatibility
function alias(type) {
  var newType = type;
  switch (type) {
    case 'cross':
      newType = 'close';
      break;
    // https://github.com/ant-design/ant-design/issues/13007
    case 'interation':
      newType = 'interaction';
      break;
    // https://github.com/ant-design/ant-design/issues/16810
    case 'canlendar':
      newType = 'calendar';
      break;
    // https://github.com/ant-design/ant-design/issues/17448
    case 'colum-height':
      newType = 'column-height';
      break;
    default:
  }
  (0, _warning2['default'])(newType === type, 'Icon', 'Icon \'' + type + '\' was a typo and is now deprecated, please use \'' + newType + '\' instead.');
  return newType;
}

/***/ }),

/***/ "1fde":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.hasPrefixSuffix = hasPrefixSuffix;

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _Input = __webpack_require__("0a1b");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vnode = __webpack_require__("d2f9");

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function hasPrefixSuffix(instance) {
  return !!((0, _propsUtil.getComponentFromProp)(instance, 'prefix') || (0, _propsUtil.getComponentFromProp)(instance, 'suffix') || instance.$props.allowClear);
}

var ClearableInputType = ['text', 'input'];

var ClearableLabeledInput = {
  props: {
    prefixCls: _vueTypes2['default'].string,
    inputType: _vueTypes2['default'].oneOf(ClearableInputType),
    value: _vueTypes2['default'].any,
    defaultValue: _vueTypes2['default'].any,
    allowClear: _vueTypes2['default'].bool,
    element: _vueTypes2['default'].any,
    handleReset: _vueTypes2['default'].func,
    disabled: _vueTypes2['default'].bool,
    size: _vueTypes2['default'].oneOf(['small', 'large', 'default']),
    suffix: _vueTypes2['default'].any,
    prefix: _vueTypes2['default'].any,
    addonBefore: _vueTypes2['default'].any,
    addonAfter: _vueTypes2['default'].any,
    className: _vueTypes2['default'].string,
    readOnly: _vueTypes2['default'].bool
  },
  methods: {
    renderClearIcon: function renderClearIcon(prefixCls) {
      var h = this.$createElement;
      var _$props = this.$props,
          allowClear = _$props.allowClear,
          value = _$props.value,
          disabled = _$props.disabled,
          readOnly = _$props.readOnly,
          inputType = _$props.inputType,
          handleReset = _$props.handleReset;

      if (!allowClear || disabled || readOnly || value === undefined || value === null || value === '') {
        return null;
      }
      var className = inputType === ClearableInputType[0] ? prefixCls + '-textarea-clear-icon' : prefixCls + '-clear-icon';
      return h(_icon2['default'], {
        attrs: {
          type: 'close-circle',
          theme: 'filled',

          role: 'button'
        },
        on: {
          'click': handleReset
        },

        'class': className });
    },
    renderSuffix: function renderSuffix(prefixCls) {
      var h = this.$createElement;
      var _$props2 = this.$props,
          suffix = _$props2.suffix,
          allowClear = _$props2.allowClear;

      if (suffix || allowClear) {
        return h(
          'span',
          { 'class': prefixCls + '-suffix' },
          [this.renderClearIcon(prefixCls), suffix]
        );
      }
      return null;
    },
    renderLabeledIcon: function renderLabeledIcon(prefixCls, element) {
      var _classNames;

      var h = this.$createElement;

      var props = this.$props;
      var suffix = this.renderSuffix(prefixCls);
      if (!hasPrefixSuffix(this)) {
        return (0, _vnode.cloneElement)(element, {
          props: { value: props.value }
        });
      }

      var prefix = props.prefix ? h(
        'span',
        { 'class': prefixCls + '-prefix' },
        [props.prefix]
      ) : null;

      var affixWrapperCls = (0, _classnames2['default'])(props.className, prefixCls + '-affix-wrapper', (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-affix-wrapper-sm', props.size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-affix-wrapper-lg', props.size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-affix-wrapper-input-with-clear-btn', props.suffix && props.allowClear && this.$props.value), _classNames));

      return h(
        'span',
        { 'class': affixWrapperCls, style: props.style },
        [prefix, (0, _vnode.cloneElement)(element, {
          style: null,
          props: { value: props.value },
          'class': (0, _Input.getInputClassName)(prefixCls, props.size, props.disabled)
        }), suffix]
      );
    },
    renderInputWithLabel: function renderInputWithLabel(prefixCls, labeledElement) {
      var _classNames3;

      var h = this.$createElement;
      var _$props3 = this.$props,
          addonBefore = _$props3.addonBefore,
          addonAfter = _$props3.addonAfter,
          style = _$props3.style,
          size = _$props3.size,
          className = _$props3.className;
      // Not wrap when there is not addons

      if (!addonBefore && !addonAfter) {
        return labeledElement;
      }

      var wrapperClassName = prefixCls + '-group';
      var addonClassName = wrapperClassName + '-addon';
      var addonBeforeNode = addonBefore ? h(
        'span',
        { 'class': addonClassName },
        [addonBefore]
      ) : null;
      var addonAfterNode = addonAfter ? h(
        'span',
        { 'class': addonClassName },
        [addonAfter]
      ) : null;

      var mergedWrapperClassName = (0, _classnames2['default'])(prefixCls + '-wrapper', (0, _defineProperty3['default'])({}, wrapperClassName, addonBefore || addonAfter));

      var mergedGroupClassName = (0, _classnames2['default'])(className, prefixCls + '-group-wrapper', (_classNames3 = {}, (0, _defineProperty3['default'])(_classNames3, prefixCls + '-group-wrapper-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-group-wrapper-lg', size === 'large'), _classNames3));

      // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper
      return h(
        'span',
        { 'class': mergedGroupClassName, style: style },
        [h(
          'span',
          { 'class': mergedWrapperClassName },
          [addonBeforeNode, (0, _vnode.cloneElement)(labeledElement, { style: null }), addonAfterNode]
        )]
      );
    },
    renderTextAreaWithClearIcon: function renderTextAreaWithClearIcon(prefixCls, element) {
      var h = this.$createElement;
      var _$props4 = this.$props,
          value = _$props4.value,
          allowClear = _$props4.allowClear,
          className = _$props4.className,
          style = _$props4.style;

      if (!allowClear) {
        return (0, _vnode.cloneElement)(element, {
          props: { value: value }
        });
      }
      var affixWrapperCls = (0, _classnames2['default'])(className, prefixCls + '-affix-wrapper', prefixCls + '-affix-wrapper-textarea-with-clear-btn');
      return h(
        'span',
        { 'class': affixWrapperCls, style: style },
        [(0, _vnode.cloneElement)(element, {
          style: null,
          props: { value: value }
        }), this.renderClearIcon(prefixCls)]
      );
    },
    renderClearableLabeledInput: function renderClearableLabeledInput() {
      var _$props5 = this.$props,
          prefixCls = _$props5.prefixCls,
          inputType = _$props5.inputType,
          element = _$props5.element;

      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }
      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  },
  render: function render() {
    return this.renderClearableLabeledInput();
  }
};

exports['default'] = ClearableLabeledInput;

/***/ }),

/***/ "50f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _dist = __webpack_require__("3a9b");

var allIcons = _interopRequireWildcard(_dist);

var _iconsVue = __webpack_require__("8520");

var _iconsVue2 = _interopRequireDefault(_iconsVue);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _IconFont = __webpack_require__("bbf5");

var _IconFont2 = _interopRequireDefault(_IconFont);

var _utils = __webpack_require__("133a");

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

var _LocaleReceiver = __webpack_require__("3f5f");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _twoTonePrimaryColor = __webpack_require__("f3dc");

var _propsUtil = __webpack_require__("73c8");

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Initial setting

// https://github.com/vueComponent/ant-design-vue/issues/2745
_iconsVue2['default'].add.apply(_iconsVue2['default'], (0, _toConsumableArray3['default'])(Object.keys(allIcons).filter(function (key) {
  return key !== 'default';
}).map(function (key) {
  return allIcons[key];
})));
(0, _twoTonePrimaryColor.setTwoToneColor)('#1890ff');
var defaultTheme = 'outlined';
var dangerousTheme = void 0;

function renderIcon(h, locale, context) {
  var _classNames;

  var props = context.$props,
      $slots = context.$slots;

  var listeners = (0, _propsUtil.getListeners)(context);
  var type = props.type,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      theme = props.theme,
      twoToneColor = props.twoToneColor,
      rotate = props.rotate,
      tabIndex = props.tabIndex;

  var children = (0, _propsUtil.filterEmpty)($slots['default']);
  children = children.length === 0 ? undefined : children;
  (0, _warning2['default'])(Boolean(type || Component || children), 'Icon', 'Icon should have `type` prop or `component` prop or `children`.');

  var classString = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, 'anticon', true), (0, _defineProperty3['default'])(_classNames, 'anticon-' + type, !!type), _classNames));

  var svgClassString = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, 'anticon-spin', !!spin || type === 'loading'));

  var svgStyle = rotate ? {
    msTransform: 'rotate(' + rotate + 'deg)',
    transform: 'rotate(' + rotate + 'deg)'
  } : undefined;

  var innerSvgProps = {
    attrs: (0, _extends3['default'])({}, _utils.svgBaseProps, {
      viewBox: viewBox
    }),
    'class': svgClassString,
    style: svgStyle
  };
  if (!viewBox) {
    delete innerSvgProps.attrs.viewBox;
  }

  var renderInnerNode = function renderInnerNode() {
    // component > children > type
    if (Component) {
      return h(
        Component,
        innerSvgProps,
        [children]
      );
    }
    if (children) {
      (0, _warning2['default'])(Boolean(viewBox) || children.length === 1 && children[0].tag === 'use', 'Icon', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      var _innerSvgProps = {
        attrs: (0, _extends3['default'])({}, _utils.svgBaseProps),
        'class': svgClassString,
        style: svgStyle
      };
      return h(
        'svg',
        (0, _babelHelperVueJsxMergeProps2['default'])([_innerSvgProps, {
          attrs: { viewBox: viewBox }
        }]),
        [children]
      );
    }

    if (typeof type === 'string') {
      var computedType = type;
      if (theme) {
        var themeInName = (0, _utils.getThemeFromTypeName)(type);
        (0, _warning2['default'])(!themeInName || theme === themeInName, 'Icon', 'The icon name \'' + type + '\' already specify a theme \'' + themeInName + '\',' + (' the \'theme\' prop \'' + theme + '\' will be ignored.'));
      }
      computedType = (0, _utils.withThemeSuffix)((0, _utils.removeTypeTheme)((0, _utils.alias)(computedType)), dangerousTheme || theme || defaultTheme);

      return h(_iconsVue2['default'], {
        attrs: {
          focusable: 'false',

          type: computedType,
          primaryColor: twoToneColor
        },
        'class': svgClassString, style: svgStyle
      });
    }
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && 'click' in listeners) {
    iconTabIndex = -1;
  }
  // functional component not support nativeOn，https://github.com/vuejs/vue/issues/7526
  var iProps = {
    attrs: {
      'aria-label': type && locale.icon + ': ' + type,
      tabIndex: iconTabIndex
    },
    on: listeners,
    'class': classString,
    staticClass: ''
  };
  return h(
    'i',
    iProps,
    [renderInnerNode()]
  );
}

var Icon = {
  name: 'AIcon',
  props: {
    tabIndex: _vueTypes2['default'].number,
    type: _vueTypes2['default'].string,
    component: _vueTypes2['default'].any,
    viewBox: _vueTypes2['default'].any,
    spin: _vueTypes2['default'].bool.def(false),
    rotate: _vueTypes2['default'].number,
    theme: _vueTypes2['default'].oneOf(['filled', 'outlined', 'twoTone']),
    twoToneColor: _vueTypes2['default'].string,
    role: _vueTypes2['default'].string
  },
  render: function render(h) {
    var _this = this;

    return h(_LocaleReceiver2['default'], {
      attrs: {
        componentName: 'Icon'
      },
      scopedSlots: { 'default': function _default(locale) {
          return renderIcon(h, locale, _this);
        } }
    });
  }
};

Icon.createFromIconfontCN = _IconFont2['default'];
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;

/* istanbul ignore next */
Icon.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(Icon.name, Icon);
};

exports['default'] = Icon;

/***/ }),

/***/ "516f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _ClearableLabeledInput = __webpack_require__("1fde");

var _ClearableLabeledInput2 = _interopRequireDefault(_ClearableLabeledInput);

var _ResizableTextArea = __webpack_require__("ccf8");

var _ResizableTextArea2 = _interopRequireDefault(_ResizableTextArea);

var _inputProps = __webpack_require__("8bc7");

var _inputProps2 = _interopRequireDefault(_inputProps);

var _propsUtil = __webpack_require__("73c8");

var _propsUtil2 = _interopRequireDefault(_propsUtil);

var _configConsumerProps = __webpack_require__("bad7");

var _Input = __webpack_require__("0a1b");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TextAreaProps = (0, _extends3['default'])({}, _inputProps2['default'], {
  autosize: _vueTypes2['default'].oneOfType([Object, Boolean]),
  autoSize: _vueTypes2['default'].oneOfType([Object, Boolean])
});

exports['default'] = {
  name: 'ATextarea',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change.value'
  },
  props: (0, _extends3['default'])({}, TextAreaProps),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  data: function data() {
    var value = typeof this.value === 'undefined' ? this.defaultValue : this.value;
    return {
      stateValue: typeof value === 'undefined' ? '' : value
    };
  },

  computed: {},
  watch: {
    value: function value(val) {
      this.stateValue = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.autoFocus) {
        _this.focus();
      }
    });
  },

  methods: {
    setValue: function setValue(value, callback) {
      if (!(0, _propsUtil2['default'])(this, 'value')) {
        this.stateValue = value;
        this.$nextTick(function () {
          callback && callback();
        });
      } else {
        // 不在严格受控
        // https://github.com/vueComponent/ant-design-vue/issues/2207，modal 是 新 new 实例，更新队列和当前不在同一个更新队列中
        // this.$forceUpdate();
      }
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.$emit('pressEnter', e);
      }
      this.$emit('keydown', e);
    },
    onChange: function onChange(e) {
      this.$emit('change.value', e.target.value);
      this.$emit('change', e);
      this.$emit('input', e);
    },
    handleChange: function handleChange(e) {
      var _this2 = this;

      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing;

      if ((e.isComposing || composing) && this.lazy || this.stateValue === value) return;

      this.setValue(e.target.value, function () {
        _this2.$refs.resizableTextArea.resizeTextarea();
      });
      (0, _Input.resolveOnChange)(this.$refs.resizableTextArea.$refs.textArea, e, this.onChange);
    },
    focus: function focus() {
      this.$refs.resizableTextArea.$refs.textArea.focus();
    },
    blur: function blur() {
      this.$refs.resizableTextArea.$refs.textArea.blur();
    },
    handleReset: function handleReset(e) {
      var _this3 = this;

      this.setValue('', function () {
        _this3.$refs.resizableTextArea.renderTextArea();
        _this3.focus();
      });
      (0, _Input.resolveOnChange)(this.$refs.resizableTextArea.$refs.textArea, e, this.onChange);
    },
    renderTextArea: function renderTextArea(prefixCls) {
      var h = this.$createElement;

      var props = (0, _propsUtil.getOptionProps)(this);
      var resizeProps = {
        props: (0, _extends3['default'])({}, props, {
          prefixCls: prefixCls
        }),
        on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
          input: this.handleChange,
          keydown: this.handleKeyDown
        }),
        attrs: this.$attrs
      };
      return h(_ResizableTextArea2['default'], (0, _babelHelperVueJsxMergeProps2['default'])([resizeProps, { ref: 'resizableTextArea' }]));
    }
  },
  render: function render() {
    var h = arguments[0];
    var stateValue = this.stateValue,
        customizePrefixCls = this.prefixCls;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input', customizePrefixCls);

    var props = {
      props: (0, _extends3['default'])({}, (0, _propsUtil.getOptionProps)(this), {
        prefixCls: prefixCls,
        inputType: 'text',
        value: (0, _Input.fixControlledValue)(stateValue),
        element: this.renderTextArea(prefixCls),
        handleReset: this.handleReset
      }),
      on: (0, _propsUtil.getListeners)(this)
    };
    return h(_ClearableLabeledInput2['default'], props);
  }
};

/***/ }),

/***/ "8bc7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  prefixCls: _vueTypes2['default'].string,
  inputPrefixCls: _vueTypes2['default'].string,
  defaultValue: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
  value: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
  placeholder: [String, Number],
  type: {
    'default': 'text',
    type: String
  },
  name: String,
  size: _vueTypes2['default'].oneOf(['small', 'large', 'default']),
  disabled: _vueTypes2['default'].bool,
  readOnly: _vueTypes2['default'].bool,
  addonBefore: _vueTypes2['default'].any,
  addonAfter: _vueTypes2['default'].any,
  // onPressEnter?: React.FormEventHandler<any>;
  // onKeyDown?: React.FormEventHandler<any>;
  // onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // onClick?: React.FormEventHandler<any>;
  // onFocus?: React.FormEventHandler<any>;
  // onBlur?: React.FormEventHandler<any>;
  prefix: _vueTypes2['default'].any,
  suffix: _vueTypes2['default'].any,
  // spellCheck: Boolean,
  autoFocus: Boolean,
  allowClear: Boolean,
  lazy: {
    'default': true,
    type: Boolean
  },
  maxLength: _vueTypes2['default'].number,
  loading: _vueTypes2['default'].bool,
  className: _vueTypes2['default'].string
};

/***/ }),

/***/ "a7f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resizeObserverPolyfill = __webpack_require__("6dd8");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Still need to be compatible with React 15, we use class component here
var VueResizeObserver = {
  name: 'ResizeObserver',
  props: {
    disabled: Boolean
  },
  data: function data() {
    this.currentElement = null;
    this.resizeObserver = null;
    return {
      width: 0,
      height: 0
    };
  },
  mounted: function mounted() {
    this.onComponentUpdated();
  },
  updated: function updated() {
    this.onComponentUpdated();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyObserver();
  },

  methods: {
    onComponentUpdated: function onComponentUpdated() {
      var disabled = this.$props.disabled;

      // Unregister if disabled

      if (disabled) {
        this.destroyObserver();
        return;
      }

      // Unregister if element changed
      var element = this.$el;
      var elementChanged = element !== this.currentElement;
      if (elementChanged) {
        this.destroyObserver();
        this.currentElement = element;
      }

      if (!this.resizeObserver && element) {
        this.resizeObserver = new _resizeObserverPolyfill2['default'](this.onResize);
        this.resizeObserver.observe(element);
      }
    },
    onResize: function onResize(entries) {
      var target = entries[0].target;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          width = _target$getBoundingCl.width,
          height = _target$getBoundingCl.height;
      /**
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use `boundary` instead of `contentRect` here to avoid shaking.
       */


      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);

      if (this.width !== fixedWidth || this.height !== fixedHeight) {
        var size = { width: fixedWidth, height: fixedHeight };
        this.width = fixedWidth;
        this.height = fixedHeight;
        this.$emit('resize', size);
      }
    },
    destroyObserver: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  },

  render: function render() {
    return this.$slots['default'][0];
  }
}; // based on rc-resize-observer 0.1.3
exports['default'] = VueResizeObserver;

/***/ }),

/***/ "ab92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = wrapperRaf;

var _raf = __webpack_require__("c449");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var id = 0;
var ids = {};

// Support call raf with delay specified frame
function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf2['default'])(internalCallback);
    }
  }

  ids[myId] = (0, _raf2['default'])(internalCallback);

  return myId;
}

wrapperRaf.cancel = function (pid) {
  if (pid === undefined) return;
  _raf2['default'].cancel(ids[pid]);
  delete ids[pid];
};
wrapperRaf.ids = ids; // export this for test usage

/***/ }),

/***/ "bbf5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports['default'] = create;

var _index = __webpack_require__("50f6");

var _index2 = _interopRequireDefault(_index);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var customCache = new Set();

function create(options) {
  var scriptUrl = options.scriptUrl,
      _options$extraCommonP = options.extraCommonProps,
      extraCommonProps = _options$extraCommonP === undefined ? {} : _options$extraCommonP;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */

  if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  var Iconfont = {
    functional: true,
    name: 'AIconfont',
    props: _index2['default'].props,
    render: function render(h, context) {
      var props = context.props,
          slots = context.slots,
          listeners = context.listeners,
          data = context.data;
      var type = props.type,
          restProps = (0, _objectWithoutProperties3['default'])(props, ['type']);

      var slotsMap = slots();
      var children = slotsMap['default'];
      // component > children > type
      var content = null;
      if (type) {
        content = h('use', { attrs: { 'xlink:href': '#' + type } });
      }
      if (children) {
        content = children;
      }
      var iconProps = (0, _propsUtil.mergeProps)(extraCommonProps, data, { props: restProps, on: listeners });
      return h(
        _index2['default'],
        iconProps,
        [content]
      );
    }
  };
  return Iconfont;
}

/***/ }),

/***/ "bfb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateNodeStyling = calculateNodeStyling;
exports['default'] = calculateNodeHeight;
// Thanks to https://github.com/andreypopp/react-textarea-autosize/

/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */

var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

var computedStyleCache = {};
var hiddenTextarea = void 0;

function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  var style = window.getComputedStyle(node);

  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var sizingStyle = SIZING_STYLE.map(function (name) {
    return name + ':' + style.getPropertyValue(name);
  }).join(';');

  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}

function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577
  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  }

  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox

  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      sizingStyle = _calculateNodeStyling.sizingStyle;

  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content


  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';

  var minHeight = Number.MIN_SAFE_INTEGER;
  var maxHeight = Number.MAX_SAFE_INTEGER;
  var height = hiddenTextarea.scrollHeight;
  var overflowY = void 0;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }
  return {
    height: height + 'px',
    minHeight: minHeight + 'px',
    maxHeight: maxHeight + 'px',
    overflowY: overflowY
  };
}

/***/ }),

/***/ "ccf8":
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

var _vcResizeObserver = __webpack_require__("a7f2");

var _vcResizeObserver2 = _interopRequireDefault(_vcResizeObserver);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _calculateNodeHeight = __webpack_require__("bfb7");

var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

var _raf = __webpack_require__("ab92");

var _raf2 = _interopRequireDefault(_raf);

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _inputProps = __webpack_require__("8bc7");

var _inputProps2 = _interopRequireDefault(_inputProps);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RESIZE_STATUS_NONE = 0;
var RESIZE_STATUS_RESIZING = 1;
var RESIZE_STATUS_RESIZED = 2;

var TextAreaProps = (0, _extends3['default'])({}, _inputProps2['default'], {
  autosize: _vueTypes2['default'].oneOfType([Object, Boolean]),
  autoSize: _vueTypes2['default'].oneOfType([Object, Boolean])
});
var ResizableTextArea = {
  name: 'ResizableTextArea',
  props: TextAreaProps,
  data: function data() {
    return {
      textareaStyles: {},
      resizeStatus: RESIZE_STATUS_NONE
    };
  },

  mixins: [_BaseMixin2['default']],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.resizeTextarea();
    });
  },
  beforeDestroy: function beforeDestroy() {
    _raf2['default'].cancel(this.nextFrameActionId);
    _raf2['default'].cancel(this.resizeFrameId);
  },

  watch: {
    value: function value() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.resizeTextarea();
      });
    }
  },
  methods: {
    handleResize: function handleResize(size) {
      var resizeStatus = this.$data.resizeStatus;
      var autoSize = this.$props.autoSize;


      if (resizeStatus !== RESIZE_STATUS_NONE) {
        return;
      }
      this.$emit('resize', size);
      if (autoSize) {
        this.resizeOnNextFrame();
      }
    },
    resizeOnNextFrame: function resizeOnNextFrame() {
      _raf2['default'].cancel(this.nextFrameActionId);
      this.nextFrameActionId = (0, _raf2['default'])(this.resizeTextarea);
    },
    resizeTextarea: function resizeTextarea() {
      var _this3 = this;

      var autoSize = this.$props.autoSize || this.$props.autosize;
      if (!autoSize || !this.$refs.textArea) {
        return;
      }
      var minRows = autoSize.minRows,
          maxRows = autoSize.maxRows;

      var textareaStyles = (0, _calculateNodeHeight2['default'])(this.$refs.textArea, false, minRows, maxRows);
      this.setState({ textareaStyles: textareaStyles, resizeStatus: RESIZE_STATUS_RESIZING }, function () {
        _raf2['default'].cancel(_this3.resizeFrameId);
        _this3.resizeFrameId = (0, _raf2['default'])(function () {
          _this3.setState({ resizeStatus: RESIZE_STATUS_RESIZED }, function () {
            _this3.resizeFrameId = (0, _raf2['default'])(function () {
              _this3.setState({ resizeStatus: RESIZE_STATUS_NONE });
              _this3.fixFirefoxAutoScroll();
            });
          });
        });
      });
    },

    // https://github.com/ant-design/ant-design/issues/21870
    fixFirefoxAutoScroll: function fixFirefoxAutoScroll() {
      try {
        if (document.activeElement === this.$refs.textArea) {
          var currentStart = this.$refs.textArea.selectionStart;
          var currentEnd = this.$refs.textArea.selectionEnd;
          this.$refs.textArea.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {
        // Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    },
    renderTextArea: function renderTextArea() {
      var h = this.$createElement;

      var props = (0, _propsUtil.getOptionProps)(this);
      var prefixCls = props.prefixCls,
          autoSize = props.autoSize,
          autosize = props.autosize,
          disabled = props.disabled;
      var _$data = this.$data,
          textareaStyles = _$data.textareaStyles,
          resizeStatus = _$data.resizeStatus;

      (0, _warning2['default'])(autosize === undefined, 'Input.TextArea', 'autosize is deprecated, please use autoSize instead.');
      var otherProps = (0, _omit2['default'])(props, ['prefixCls', 'autoSize', 'autosize', 'defaultValue', 'allowClear', 'type', 'lazy', 'value']);
      var cls = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-disabled', disabled));
      var domProps = {};
      // Fix https://github.com/ant-design/ant-design/issues/6776
      // Make sure it could be reset when using form.getFieldDecorator
      if ('value' in props) {
        domProps.value = props.value || '';
      }
      var style = (0, _extends3['default'])({}, textareaStyles, resizeStatus === RESIZE_STATUS_RESIZING ? { overflowX: 'hidden', overflowY: 'hidden' } : null);
      var textareaProps = {
        attrs: otherProps,
        domProps: domProps,
        style: style,
        'class': cls,
        on: (0, _omit2['default'])((0, _propsUtil.getListeners)(this), 'pressEnter'),
        directives: [{
          name: 'ant-input'
        }]
      };
      return h(
        _vcResizeObserver2['default'],
        {
          on: {
            'resize': this.handleResize
          },
          attrs: { disabled: !(autoSize || autosize) }
        },
        [h('textarea', (0, _babelHelperVueJsxMergeProps2['default'])([textareaProps, { ref: 'textArea' }]))]
      );
    }
  },

  render: function render() {
    return this.renderTextArea();
  }
};

exports['default'] = ResizableTextArea;

/***/ }),

/***/ "f3dc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTwoToneColor = setTwoToneColor;
exports.getTwoToneColor = getTwoToneColor;

var _iconsVue = __webpack_require__("8520");

var _iconsVue2 = _interopRequireDefault(_iconsVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function setTwoToneColor(primaryColor) {
  return _iconsVue2['default'].setTwoToneColors({
    primaryColor: primaryColor
  });
}

function getTwoToneColor() {
  var colors = _iconsVue2['default'].getTwoToneColors();
  return colors.primaryColor;
}

/***/ })

}]);