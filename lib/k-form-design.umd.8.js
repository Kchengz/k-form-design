((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[8],{

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

/***/ "1178":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = __webpack_require__("e098");

var _Event2 = _interopRequireDefault(_Event);

var _raf = __webpack_require__("ab92");

var _raf2 = _interopRequireDefault(_raf);

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var styleForPesudo = void 0;

// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  if (false) {}
  return !element || element.offsetParent === null;
}
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
exports['default'] = {
  name: 'Wave',
  props: ['insertExtraNode'],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var node = _this.$el;
      if (node.nodeType !== 1) {
        return;
      }
      _this.instance = _this.bindAnimationEvent(node);
    });
  },

  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.instance) {
      this.instance.cancel();
    }
    if (this.clickWaveTimeoutId) {
      clearTimeout(this.clickWaveTimeoutId);
    }
    this.destroy = true;
  },

  methods: {
    onClick: function onClick(node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }
      var insertExtraNode = this.$props.insertExtraNode;

      this.extraNode = document.createElement('div');
      var extraNode = this.extraNode;
      extraNode.className = 'ant-click-animating-node';
      var attributeName = this.getAttributeName();
      node.removeAttribute(attributeName);
      node.setAttribute(attributeName, 'true');
      // Not white or transparent or grey
      styleForPesudo = styleForPesudo || document.createElement('style');
      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (this.csp && this.csp.nonce) {
          styleForPesudo.nonce = this.csp.nonce;
        }
        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = '\n        [ant-click-animating-without-extra-node=\'true\']::after, .ant-click-animating-node {\n          --antd-wave-shadow-color: ' + waveColor + ';\n        }';
        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      _Event2['default'].addStartEventListener(node, this.onTransitionStart);
      _Event2['default'].addEndEventListener(node, this.onTransitionEnd);
    },
    onTransitionStart: function onTransitionStart(e) {
      if (this.destroy) return;

      var node = this.$el;
      if (!e || e.target !== node) {
        return;
      }

      if (!this.animationStart) {
        this.resetEffect(node);
      }
    },
    onTransitionEnd: function onTransitionEnd(e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }
      this.resetEffect(e.target);
    },
    getAttributeName: function getAttributeName() {
      var insertExtraNode = this.$props.insertExtraNode;

      return insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    },
    bindAnimationEvent: function bindAnimationEvent(node) {
      var _this2 = this;

      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }
      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }
        _this2.resetEffect(node);
        // Get wave color from target
        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this2.clickWaveTimeoutId = window.setTimeout(function () {
          return _this2.onClick(node, waveColor);
        }, 0);
        _raf2['default'].cancel(_this2.animationStartId);
        _this2.animationStart = true;

        // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
        _this2.animationStartId = (0, _raf2['default'])(function () {
          _this2.animationStart = false;
        }, 10);
      };
      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    },
    resetEffect: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = this.$props.insertExtraNode;

      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466
      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }
      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }
      _Event2['default'].removeStartEventListener(node, this.onTransitionStart);
      _Event2['default'].removeEndEventListener(node, this.onTransitionEnd);
    }
  },

  render: function render() {
    if (this.configProvider.csp) {
      this.csp = this.configProvider.csp;
    }
    return this.$slots['default'] && this.$slots['default'][0];
  }
};

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

/***/ "2fd5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _isMobile = __webpack_require__("8df8");

var _Input = __webpack_require__("0a1b");

var _Input2 = _interopRequireDefault(_Input);

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _inputProps = __webpack_require__("8bc7");

var _inputProps2 = _interopRequireDefault(_inputProps);

var _button = __webpack_require__("c4c6");

var _button2 = _interopRequireDefault(_button);

var _vnode = __webpack_require__("d2f9");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'AInputSearch',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change.value'
  },
  props: (0, _extends3['default'])({}, _inputProps2['default'], {
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: _vueTypes2['default'].any
  }),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  methods: {
    onChange: function onChange(e) {
      if (e && e.target && e.type === 'click') {
        this.$emit('search', e.target.value, e);
      }
      this.$emit('change', e);
    },
    onSearch: function onSearch(e) {
      if (this.loading || this.disabled) {
        return;
      }
      this.$emit('search', this.$refs.input.stateValue, e);
      if (!(0, _isMobile.isMobile)({ tablet: true })) {
        this.$refs.input.focus();
      }
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    renderLoading: function renderLoading(prefixCls) {
      var h = this.$createElement;
      var size = this.$props.size;

      var enterButton = (0, _propsUtil.getComponentFromProp)(this, 'enterButton');
      // 兼容 <a-input-search enterButton />， 因enterButton类型为 any，此类写法 enterButton 为空字符串
      enterButton = enterButton || enterButton === '';
      if (enterButton) {
        return h(
          _button2['default'],
          { 'class': prefixCls + '-button', attrs: { type: 'primary', size: size },
            key: 'enterButton' },
          [h(_icon2['default'], {
            attrs: { type: 'loading' }
          })]
        );
      }
      return h(_icon2['default'], { 'class': prefixCls + '-icon', attrs: { type: 'loading' },
        key: 'loadingIcon' });
    },
    renderSuffix: function renderSuffix(prefixCls) {
      var h = this.$createElement;
      var loading = this.loading;

      var suffix = (0, _propsUtil.getComponentFromProp)(this, 'suffix');
      var enterButton = (0, _propsUtil.getComponentFromProp)(this, 'enterButton');
      // 兼容 <a-input-search enterButton />， 因enterButton类型为 any，此类写法 enterButton 为空字符串
      enterButton = enterButton || enterButton === '';
      if (loading && !enterButton) {
        return [suffix, this.renderLoading(prefixCls)];
      }

      if (enterButton) return suffix;

      var icon = h(_icon2['default'], { 'class': prefixCls + '-icon', attrs: { type: 'search' },
        key: 'searchIcon', on: {
          'click': this.onSearch
        }
      });

      if (suffix) {
        // let cloneSuffix = suffix;
        // if (isValidElement(cloneSuffix) && !cloneSuffix.key) {
        //   cloneSuffix = cloneElement(cloneSuffix, {
        //     key: 'originSuffix',
        //   });
        // }
        return [suffix, icon];
      }

      return icon;
    },
    renderAddonAfter: function renderAddonAfter(prefixCls) {
      var h = this.$createElement;
      var size = this.size,
          disabled = this.disabled,
          loading = this.loading;

      var btnClassName = prefixCls + '-button';
      var enterButton = (0, _propsUtil.getComponentFromProp)(this, 'enterButton');
      enterButton = enterButton || enterButton === '';
      var addonAfter = (0, _propsUtil.getComponentFromProp)(this, 'addonAfter');
      if (loading && enterButton) {
        return [this.renderLoading(prefixCls), addonAfter];
      }
      if (!enterButton) return addonAfter;
      var enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      var button = void 0;
      var isAntdButton = enterButtonAsElement.componentOptions && enterButtonAsElement.componentOptions.Ctor.extendOptions.__ANT_BUTTON;
      if (enterButtonAsElement.tag === 'button' || isAntdButton) {
        button = (0, _vnode.cloneElement)(enterButtonAsElement, {
          key: 'enterButton',
          'class': isAntdButton ? btnClassName : '',
          props: isAntdButton ? { size: size } : {},
          on: {
            click: this.onSearch
          }
        });
      } else {
        button = h(
          _button2['default'],
          {
            'class': btnClassName,
            attrs: { type: 'primary',
              size: size,
              disabled: disabled
            },
            key: 'enterButton',
            on: {
              'click': this.onSearch
            }
          },
          [enterButton === true || enterButton === '' ? h(_icon2['default'], {
            attrs: { type: 'search' }
          }) : enterButton]
        );
      }
      if (addonAfter) {
        return [button, addonAfter];
      }

      return button;
    }
  },
  render: function render() {
    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        customizeInputPrefixCls = _getOptionProps.inputPrefixCls,
        size = _getOptionProps.size,
        loading = _getOptionProps.loading,
        others = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['prefixCls', 'inputPrefixCls', 'size', 'loading']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input-search', customizePrefixCls);
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);

    var enterButton = (0, _propsUtil.getComponentFromProp)(this, 'enterButton');
    var addonBefore = (0, _propsUtil.getComponentFromProp)(this, 'addonBefore');
    enterButton = enterButton || enterButton === '';
    var inputClassName = void 0;
    if (enterButton) {
      var _classNames;

      inputClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-enter-button', !!enterButton), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, !!size), _classNames));
    } else {
      inputClassName = prefixCls;
    }

    var on = (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this));
    delete on.search;
    var inputProps = {
      props: (0, _extends3['default'])({}, others, {
        prefixCls: inputPrefixCls,
        size: size,
        suffix: this.renderSuffix(prefixCls),
        prefix: (0, _propsUtil.getComponentFromProp)(this, 'prefix'),
        addonAfter: this.renderAddonAfter(prefixCls),
        addonBefore: addonBefore,
        className: inputClassName
      }),
      attrs: this.$attrs,
      ref: 'input',
      on: (0, _extends3['default'])({
        pressEnter: this.onSearch
      }, on, {
        change: this.onChange
      })
    };
    return h(_Input2['default'], inputProps);
  }
};

/***/ }),

/***/ "306f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _propsUtil = __webpack_require__("73c8");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcTrigger = __webpack_require__("2f52");

var _vcTrigger2 = _interopRequireDefault(_vcTrigger);

var _Menus = __webpack_require__("3799");

var _Menus2 = _interopRequireDefault(_Menus);

var _KeyCode = __webpack_require__("af09");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _arrayTreeFilter = __webpack_require__("b8ad");

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _arrays = __webpack_require__("c2b3");

var _arrays2 = _interopRequireDefault(_arrays);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _vnode = __webpack_require__("d2f9");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
};

exports['default'] = {
  mixins: [_BaseMixin2['default']],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: _vueTypes2['default'].array,
    defaultValue: _vueTypes2['default'].array,
    options: _vueTypes2['default'].array,
    // onChange: PropTypes.func,
    // onPopupVisibleChange: PropTypes.func,
    popupVisible: _vueTypes2['default'].bool,
    disabled: _vueTypes2['default'].bool.def(false),
    transitionName: _vueTypes2['default'].string.def(''),
    popupClassName: _vueTypes2['default'].string.def(''),
    popupStyle: _vueTypes2['default'].object.def(function () {
      return {};
    }),
    popupPlacement: _vueTypes2['default'].string.def('bottomLeft'),
    prefixCls: _vueTypes2['default'].string.def('rc-cascader'),
    dropdownMenuColumnStyle: _vueTypes2['default'].object,
    builtinPlacements: _vueTypes2['default'].object.def(BUILT_IN_PLACEMENTS),
    loadData: _vueTypes2['default'].func,
    changeOnSelect: _vueTypes2['default'].bool,
    // onKeyDown: PropTypes.func,
    expandTrigger: _vueTypes2['default'].string.def('click'),
    fieldNames: _vueTypes2['default'].object.def(function () {
      return {
        label: 'label',
        value: 'value',
        children: 'children'
      };
    }),
    expandIcon: _vueTypes2['default'].any,
    loadingIcon: _vueTypes2['default'].any,
    getPopupContainer: _vueTypes2['default'].func
  },
  data: function data() {
    var initialValue = [];
    var value = this.value,
        defaultValue = this.defaultValue,
        popupVisible = this.popupVisible;

    if ((0, _propsUtil.hasProp)(this, 'value')) {
      initialValue = value || [];
    } else if ((0, _propsUtil.hasProp)(this, 'defaultValue')) {
      initialValue = defaultValue || [];
    }
    // warning(!('filedNames' in props),
    //   '`filedNames` of Cascader is a typo usage and deprecated, please use `fieldNames` instead.');

    return {
      sPopupVisible: popupVisible,
      sActiveValue: initialValue,
      sValue: initialValue
    };
  },

  watch: {
    value: function value(val, oldValue) {
      if (!(0, _arrays2['default'])(val, oldValue)) {
        var newValues = {
          sValue: val || []
        };
        // allow activeValue diff from value
        // https://github.com/ant-design/ant-design/issues/2767
        if (!(0, _propsUtil.hasProp)(this, 'loadData')) {
          newValues.sActiveValue = val || [];
        }
        this.setState(newValues);
      }
    },
    popupVisible: function popupVisible(val) {
      this.setState({
        sPopupVisible: val
      });
    }
  },
  methods: {
    getPopupDOMNode: function getPopupDOMNode() {
      return this.$refs.trigger.getPopupDomNode();
    },
    getFieldName: function getFieldName(name) {
      var defaultFieldNames = this.defaultFieldNames,
          fieldNames = this.fieldNames;

      return fieldNames[name] || defaultFieldNames[name];
    },
    getFieldNames: function getFieldNames() {
      return this.fieldNames;
    },
    getCurrentLevelOptions: function getCurrentLevelOptions() {
      var _this = this;

      var _options = this.options,
          options = _options === undefined ? [] : _options,
          _sActiveValue = this.sActiveValue,
          sActiveValue = _sActiveValue === undefined ? [] : _sActiveValue;

      var result = (0, _arrayTreeFilter2['default'])(options, function (o, level) {
        return o[_this.getFieldName('value')] === sActiveValue[level];
      }, { childrenKeyName: this.getFieldName('children') });
      if (result[result.length - 2]) {
        return result[result.length - 2][this.getFieldName('children')];
      }
      return [].concat((0, _toConsumableArray3['default'])(options)).filter(function (o) {
        return !o.disabled;
      });
    },
    getActiveOptions: function getActiveOptions(activeValue) {
      var _this2 = this;

      return (0, _arrayTreeFilter2['default'])(this.options || [], function (o, level) {
        return o[_this2.getFieldName('value')] === activeValue[level];
      }, { childrenKeyName: this.getFieldName('children') });
    },
    setPopupVisible: function setPopupVisible(popupVisible) {
      if (!(0, _propsUtil.hasProp)(this, 'popupVisible')) {
        this.setState({ sPopupVisible: popupVisible });
      }
      // sync activeValue with value when panel open
      if (popupVisible && !this.sPopupVisible) {
        this.setState({
          sActiveValue: this.sValue
        });
      }
      this.__emit('popupVisibleChange', popupVisible);
    },
    handleChange: function handleChange(options, setProps, e) {
      var _this3 = this;

      if (e.type !== 'keydown' || e.keyCode === _KeyCode2['default'].ENTER) {
        this.__emit('change', options.map(function (o) {
          return o[_this3.getFieldName('value')];
        }), options);
        this.setPopupVisible(setProps.visible);
      }
    },
    handlePopupVisibleChange: function handlePopupVisibleChange(popupVisible) {
      this.setPopupVisible(popupVisible);
    },
    handleMenuSelect: function handleMenuSelect(targetOption, menuIndex, e) {
      // Keep focused state for keyboard support
      var triggerNode = this.$refs.trigger.getRootDomNode();
      if (triggerNode && triggerNode.focus) {
        triggerNode.focus();
      }
      var changeOnSelect = this.changeOnSelect,
          loadData = this.loadData,
          expandTrigger = this.expandTrigger;

      if (!targetOption || targetOption.disabled) {
        return;
      }
      var sActiveValue = this.sActiveValue;

      sActiveValue = sActiveValue.slice(0, menuIndex + 1);
      sActiveValue[menuIndex] = targetOption[this.getFieldName('value')];
      var activeOptions = this.getActiveOptions(sActiveValue);
      if (targetOption.isLeaf === false && !targetOption[this.getFieldName('children')] && loadData) {
        if (changeOnSelect) {
          this.handleChange(activeOptions, { visible: true }, e);
        }
        this.setState({ sActiveValue: sActiveValue });
        loadData(activeOptions);
        return;
      }
      var newState = {};
      if (!targetOption[this.getFieldName('children')] || !targetOption[this.getFieldName('children')].length) {
        this.handleChange(activeOptions, { visible: false }, e);
        // set value to activeValue when select leaf option
        newState.sValue = sActiveValue;
        // add e.type judgement to prevent `onChange` being triggered by mouseEnter
      } else if (changeOnSelect && (e.type === 'click' || e.type === 'keydown')) {
        if (expandTrigger === 'hover') {
          this.handleChange(activeOptions, { visible: false }, e);
        } else {
          this.handleChange(activeOptions, { visible: true }, e);
        }
        // set value to activeValue on every select
        newState.sValue = sActiveValue;
      }
      newState.sActiveValue = sActiveValue;
      //  not change the value by keyboard
      if ((0, _propsUtil.hasProp)(this, 'value') || e.type === 'keydown' && e.keyCode !== _KeyCode2['default'].ENTER) {
        delete newState.sValue;
      }
      this.setState(newState);
    },
    handleItemDoubleClick: function handleItemDoubleClick() {
      var changeOnSelect = this.$props.changeOnSelect;

      if (changeOnSelect) {
        this.setPopupVisible(false);
      }
    },
    handleKeyDown: function handleKeyDown(e) {
      var _this4 = this;

      var $slots = this.$slots;

      var children = $slots['default'] && $slots['default'][0];
      // https://github.com/ant-design/ant-design/issues/6717
      // Don't bind keyboard support when children specify the onKeyDown
      if (children) {
        var keydown = (0, _propsUtil.getEvents)(children).keydown;
        if (keydown) {
          keydown(e);
          return;
        }
      }
      var activeValue = [].concat((0, _toConsumableArray3['default'])(this.sActiveValue));
      var currentLevel = activeValue.length - 1 < 0 ? 0 : activeValue.length - 1;
      var currentOptions = this.getCurrentLevelOptions();
      var currentIndex = currentOptions.map(function (o) {
        return o[_this4.getFieldName('value')];
      }).indexOf(activeValue[currentLevel]);
      if (e.keyCode !== _KeyCode2['default'].DOWN && e.keyCode !== _KeyCode2['default'].UP && e.keyCode !== _KeyCode2['default'].LEFT && e.keyCode !== _KeyCode2['default'].RIGHT && e.keyCode !== _KeyCode2['default'].ENTER && e.keyCode !== _KeyCode2['default'].SPACE && e.keyCode !== _KeyCode2['default'].BACKSPACE && e.keyCode !== _KeyCode2['default'].ESC && e.keyCode !== _KeyCode2['default'].TAB) {
        return;
      }
      // Press any keys above to reopen menu
      if (!this.sPopupVisible && e.keyCode !== _KeyCode2['default'].BACKSPACE && e.keyCode !== _KeyCode2['default'].LEFT && e.keyCode !== _KeyCode2['default'].RIGHT && e.keyCode !== _KeyCode2['default'].ESC && e.keyCode !== _KeyCode2['default'].TAB) {
        this.setPopupVisible(true);
        return;
      }
      if (e.keyCode === _KeyCode2['default'].DOWN || e.keyCode === _KeyCode2['default'].UP) {
        e.preventDefault();
        var nextIndex = currentIndex;
        if (nextIndex !== -1) {
          if (e.keyCode === _KeyCode2['default'].DOWN) {
            nextIndex += 1;
            nextIndex = nextIndex >= currentOptions.length ? 0 : nextIndex;
          } else {
            nextIndex -= 1;
            nextIndex = nextIndex < 0 ? currentOptions.length - 1 : nextIndex;
          }
        } else {
          nextIndex = 0;
        }
        activeValue[currentLevel] = currentOptions[nextIndex][this.getFieldName('value')];
      } else if (e.keyCode === _KeyCode2['default'].LEFT || e.keyCode === _KeyCode2['default'].BACKSPACE) {
        e.preventDefault();
        activeValue.splice(activeValue.length - 1, 1);
      } else if (e.keyCode === _KeyCode2['default'].RIGHT) {
        e.preventDefault();
        if (currentOptions[currentIndex] && currentOptions[currentIndex][this.getFieldName('children')]) {
          activeValue.push(currentOptions[currentIndex][this.getFieldName('children')][0][this.getFieldName('value')]);
        }
      } else if (e.keyCode === _KeyCode2['default'].ESC || e.keyCode === _KeyCode2['default'].TAB) {
        this.setPopupVisible(false);
        return;
      }
      if (!activeValue || activeValue.length === 0) {
        this.setPopupVisible(false);
      }
      var activeOptions = this.getActiveOptions(activeValue);
      var targetOption = activeOptions[activeOptions.length - 1];
      this.handleMenuSelect(targetOption, activeOptions.length - 1, e);
      this.__emit('keydown', e);
    }
  },

  render: function render() {
    var h = arguments[0];
    var $props = this.$props,
        sActiveValue = this.sActiveValue,
        handleMenuSelect = this.handleMenuSelect,
        sPopupVisible = this.sPopupVisible,
        handlePopupVisibleChange = this.handlePopupVisibleChange,
        handleKeyDown = this.handleKeyDown;

    var listeners = (0, _propsUtil.getListeners)(this);
    var prefixCls = $props.prefixCls,
        transitionName = $props.transitionName,
        popupClassName = $props.popupClassName,
        _$props$options = $props.options,
        options = _$props$options === undefined ? [] : _$props$options,
        disabled = $props.disabled,
        builtinPlacements = $props.builtinPlacements,
        popupPlacement = $props.popupPlacement,
        restProps = (0, _objectWithoutProperties3['default'])($props, ['prefixCls', 'transitionName', 'popupClassName', 'options', 'disabled', 'builtinPlacements', 'popupPlacement']);
    // Did not show popup when there is no options

    var menus = h('div');
    var emptyMenuClassName = '';
    if (options && options.length > 0) {
      var loadingIcon = (0, _propsUtil.getComponentFromProp)(this, 'loadingIcon');
      var expandIcon = (0, _propsUtil.getComponentFromProp)(this, 'expandIcon') || '>';
      var menusProps = {
        props: (0, _extends3['default'])({}, $props, {
          fieldNames: this.getFieldNames(),
          defaultFieldNames: this.defaultFieldNames,
          activeValue: sActiveValue,
          visible: sPopupVisible,
          loadingIcon: loadingIcon,
          expandIcon: expandIcon
        }),
        on: (0, _extends3['default'])({}, listeners, {
          select: handleMenuSelect,
          itemDoubleClick: this.handleItemDoubleClick
        })
      };
      menus = h(_Menus2['default'], menusProps);
    } else {
      emptyMenuClassName = ' ' + prefixCls + '-menus-empty';
    }
    var triggerProps = {
      props: (0, _extends3['default'])({}, restProps, {
        disabled: disabled,
        popupPlacement: popupPlacement,
        builtinPlacements: builtinPlacements,
        popupTransitionName: transitionName,
        action: disabled ? [] : ['click'],
        popupVisible: disabled ? false : sPopupVisible,
        prefixCls: prefixCls + '-menus',
        popupClassName: popupClassName + emptyMenuClassName
      }),
      on: (0, _extends3['default'])({}, listeners, {
        popupVisibleChange: handlePopupVisibleChange
      }),
      ref: 'trigger'
    };
    var children = (0, _propsUtil.getSlot)(this, 'default')[0];
    return h(
      _vcTrigger2['default'],
      triggerProps,
      [children && (0, _vnode.cloneElement)(children, {
        on: {
          keydown: handleKeyDown
        },
        attrs: {
          tabIndex: disabled ? undefined : 0
        }
      }), h(
        'template',
        { slot: 'popup' },
        [menus]
      )]
    );
  }
};

/***/ }),

/***/ "3799":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propsUtil = __webpack_require__("73c8");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _arrayTreeFilter = __webpack_require__("b8ad");

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'CascaderMenus',
  mixins: [_BaseMixin2['default']],
  props: {
    value: _vueTypes2['default'].array.def([]),
    activeValue: _vueTypes2['default'].array.def([]),
    options: _vueTypes2['default'].array,
    prefixCls: _vueTypes2['default'].string.def('rc-cascader-menus'),
    expandTrigger: _vueTypes2['default'].string.def('click'),
    // onSelect: PropTypes.func,
    visible: _vueTypes2['default'].bool.def(false),
    dropdownMenuColumnStyle: _vueTypes2['default'].object,
    defaultFieldNames: _vueTypes2['default'].object,
    fieldNames: _vueTypes2['default'].object,
    expandIcon: _vueTypes2['default'].any,
    loadingIcon: _vueTypes2['default'].any
  },
  data: function data() {
    this.menuItems = {};
    return {};
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.$nextTick(function () {
          _this.scrollActiveItemToView();
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.scrollActiveItemToView();
    });
  },

  methods: {
    getFieldName: function getFieldName(name) {
      var _$props = this.$props,
          fieldNames = _$props.fieldNames,
          defaultFieldNames = _$props.defaultFieldNames;
      // 防止只设置单个属性的名字

      return fieldNames[name] || defaultFieldNames[name];
    },
    getOption: function getOption(option, menuIndex) {
      var _this3 = this;

      var h = this.$createElement;
      var prefixCls = this.prefixCls,
          expandTrigger = this.expandTrigger;

      var loadingIcon = (0, _propsUtil.getComponentFromProp)(this, 'loadingIcon');
      var expandIcon = (0, _propsUtil.getComponentFromProp)(this, 'expandIcon');
      var onSelect = function onSelect(e) {
        _this3.__emit('select', option, menuIndex, e);
      };
      var onItemDoubleClick = function onItemDoubleClick(e) {
        _this3.__emit('itemDoubleClick', option, menuIndex, e);
      };
      var key = option[this.getFieldName('value')];
      var expandProps = {
        attrs: {
          role: 'menuitem'
        },
        on: {
          click: onSelect,
          dblclick: onItemDoubleClick,
          mousedown: function mousedown(e) {
            return e.preventDefault();
          }
        },
        key: Array.isArray(key) ? key.join('__ant__') : key
      };
      var menuItemCls = prefixCls + '-menu-item';
      var expandIconNode = null;
      var hasChildren = option[this.getFieldName('children')] && option[this.getFieldName('children')].length > 0;
      if (hasChildren || option.isLeaf === false) {
        menuItemCls += ' ' + prefixCls + '-menu-item-expand';
        if (!option.loading) {
          expandIconNode = h(
            'span',
            { 'class': prefixCls + '-menu-item-expand-icon' },
            [expandIcon]
          );
        }
      }
      if (expandTrigger === 'hover' && (hasChildren || option.isLeaf === false)) {
        expandProps.on = {
          mouseenter: this.delayOnSelect.bind(this, onSelect),
          mouseleave: this.delayOnSelect.bind(this),
          click: onSelect
        };
      }
      if (this.isActiveOption(option, menuIndex)) {
        menuItemCls += ' ' + prefixCls + '-menu-item-active';
        expandProps.ref = this.getMenuItemRef(menuIndex);
      }
      if (option.disabled) {
        menuItemCls += ' ' + prefixCls + '-menu-item-disabled';
      }
      var loadingIconNode = null;
      if (option.loading) {
        menuItemCls += ' ' + prefixCls + '-menu-item-loading';
        loadingIconNode = loadingIcon || null;
      }
      var title = '';
      if (option.title) {
        title = option.title;
      } else if (typeof option[this.getFieldName('label')] === 'string') {
        title = option[this.getFieldName('label')];
      }
      expandProps.attrs.title = title;
      expandProps['class'] = menuItemCls;
      return h(
        'li',
        expandProps,
        [option[this.getFieldName('label')], expandIconNode, loadingIconNode]
      );
    },
    getActiveOptions: function getActiveOptions(values) {
      var _this4 = this;

      var activeValue = values || this.activeValue;
      var options = this.options;
      return (0, _arrayTreeFilter2['default'])(options, function (o, level) {
        return o[_this4.getFieldName('value')] === activeValue[level];
      }, { childrenKeyName: this.getFieldName('children') });
    },
    getShowOptions: function getShowOptions() {
      var _this5 = this;

      var options = this.options;

      var result = this.getActiveOptions().map(function (activeOption) {
        return activeOption[_this5.getFieldName('children')];
      }).filter(function (activeOption) {
        return !!activeOption;
      });
      result.unshift(options);
      return result;
    },
    delayOnSelect: function delayOnSelect(onSelect) {
      var _this6 = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
      if (typeof onSelect === 'function') {
        this.delayTimer = setTimeout(function () {
          onSelect(args);
          _this6.delayTimer = null;
        }, 150);
      }
    },
    scrollActiveItemToView: function scrollActiveItemToView() {
      // scroll into view
      var optionsLength = this.getShowOptions().length;
      for (var i = 0; i < optionsLength; i++) {
        var itemComponent = this.$refs['menuItems_' + i];
        if (itemComponent) {
          var target = itemComponent;
          target.parentNode.scrollTop = target.offsetTop;
        }
      }
    },
    isActiveOption: function isActiveOption(option, menuIndex) {
      var _activeValue = this.activeValue,
          activeValue = _activeValue === undefined ? [] : _activeValue;

      return activeValue[menuIndex] === option[this.getFieldName('value')];
    },
    getMenuItemRef: function getMenuItemRef(index) {
      return 'menuItems_' + index;
    }
  },

  render: function render() {
    var _this7 = this;

    var h = arguments[0];
    var prefixCls = this.prefixCls,
        dropdownMenuColumnStyle = this.dropdownMenuColumnStyle;

    return h('div', [this.getShowOptions().map(function (options, menuIndex) {
      return h(
        'ul',
        { 'class': prefixCls + '-menu', key: menuIndex, style: dropdownMenuColumnStyle },
        [options.map(function (option) {
          return _this7.getOption(option, menuIndex);
        })]
      );
    })]);
  }
};

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

/***/ "57df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

var _Input = __webpack_require__("0a1b");

var _Input2 = _interopRequireDefault(_Input);

var _Group = __webpack_require__("de9b");

var _Group2 = _interopRequireDefault(_Group);

var _Search = __webpack_require__("2fd5");

var _Search2 = _interopRequireDefault(_Search);

var _TextArea = __webpack_require__("516f");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Password = __webpack_require__("b3d8");

var _Password2 = _interopRequireDefault(_Password);

var _antInputDirective = __webpack_require__("fcb9");

var _antInputDirective2 = _interopRequireDefault(_antInputDirective);

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_vue2['default'].use(_antInputDirective2['default']);

_Input2['default'].Group = _Group2['default'];
_Input2['default'].Search = _Search2['default'];
_Input2['default'].TextArea = _TextArea2['default'];
_Input2['default'].Password = _Password2['default'];

/* istanbul ignore next */
_Input2['default'].install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(_Input2['default'].name, _Input2['default']);
  Vue.component(_Input2['default'].Group.name, _Input2['default'].Group);
  Vue.component(_Input2['default'].Search.name, _Input2['default'].Search);
  Vue.component(_Input2['default'].TextArea.name, _Input2['default'].TextArea);
  Vue.component(_Input2['default'].Password.name, _Input2['default'].Password);
};

exports['default'] = _Input2['default'];

/***/ }),

/***/ "807c":
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

var _wave = __webpack_require__("1178");

var _wave2 = _interopRequireDefault(_wave);

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _buttonTypes = __webpack_require__("f70b");

var _buttonTypes2 = _interopRequireDefault(_buttonTypes);

var _propsUtil = __webpack_require__("73c8");

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
var props = (0, _buttonTypes2['default'])();
exports['default'] = {
  name: 'AButton',
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: props,
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  data: function data() {
    return {
      sizeMap: {
        large: 'lg',
        small: 'sm'
      },
      sLoading: !!this.loading,
      hasTwoCNChar: false
    };
  },

  computed: {
    classes: function classes() {
      var _ref;

      var customizePrefixCls = this.prefixCls,
          type = this.type,
          shape = this.shape,
          size = this.size,
          hasTwoCNChar = this.hasTwoCNChar,
          sLoading = this.sLoading,
          ghost = this.ghost,
          block = this.block,
          icon = this.icon,
          $slots = this.$slots;

      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var autoInsertSpace = this.configProvider.autoInsertSpaceInButton !== false;

      // large => lg
      // small => sm
      var sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        default:
          break;
      }
      var iconType = sLoading ? 'loading' : icon;
      var children = (0, _propsUtil.filterEmpty)($slots['default']);
      return _ref = {}, (0, _defineProperty3['default'])(_ref, '' + prefixCls, true), (0, _defineProperty3['default'])(_ref, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_ref, prefixCls + '-' + shape, shape), (0, _defineProperty3['default'])(_ref, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3['default'])(_ref, prefixCls + '-icon-only', children.length === 0 && iconType), (0, _defineProperty3['default'])(_ref, prefixCls + '-loading', sLoading), (0, _defineProperty3['default'])(_ref, prefixCls + '-background-ghost', ghost || type === 'ghost'), (0, _defineProperty3['default'])(_ref, prefixCls + '-two-chinese-chars', hasTwoCNChar && autoInsertSpace), (0, _defineProperty3['default'])(_ref, prefixCls + '-block', block), _ref;
    }
  },
  watch: {
    loading: function loading(val, preVal) {
      var _this = this;

      if (preVal && typeof preVal !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }
      if (val && typeof val !== 'boolean' && val.delay) {
        this.delayTimeout = setTimeout(function () {
          _this.sLoading = !!val;
        }, val.delay);
      } else {
        this.sLoading = !!val;
      }
    }
  },
  mounted: function mounted() {
    this.fixTwoCNChar();
  },
  updated: function updated() {
    this.fixTwoCNChar();
  },
  beforeDestroy: function beforeDestroy() {
    // if (this.timeout) {
    //   clearTimeout(this.timeout)
    // }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  },

  methods: {
    fixTwoCNChar: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      var node = this.$refs.buttonNode;
      if (!node) {
        return;
      }
      var buttonText = node.textContent;
      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.hasTwoCNChar) {
          this.hasTwoCNChar = true;
        }
      } else if (this.hasTwoCNChar) {
        this.hasTwoCNChar = false;
      }
    },
    handleClick: function handleClick(event) {
      var sLoading = this.$data.sLoading;

      if (sLoading) {
        return;
      }
      this.$emit('click', event);
    },
    insertSpace: function insertSpace(child, needInserted) {
      var h = this.$createElement;

      var SPACE = needInserted ? ' ' : '';
      if (typeof child.text === 'string') {
        var text = child.text.trim();
        if (isTwoCNChar(text)) {
          text = text.split('').join(SPACE);
        }
        return h('span', [text]);
      }
      return child;
    },
    isNeedInserted: function isNeedInserted() {
      var $slots = this.$slots,
          type = this.type;

      var icon = (0, _propsUtil.getComponentFromProp)(this, 'icon');
      return $slots['default'] && $slots['default'].length === 1 && !icon && type !== 'link';
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var type = this.type,
        htmlType = this.htmlType,
        classes = this.classes,
        disabled = this.disabled,
        handleClick = this.handleClick,
        sLoading = this.sLoading,
        $slots = this.$slots,
        $attrs = this.$attrs;

    var icon = (0, _propsUtil.getComponentFromProp)(this, 'icon');
    var buttonProps = {
      attrs: (0, _extends3['default'])({}, $attrs, {
        disabled: disabled
      }),
      'class': classes,
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
        click: handleClick
      })
    };
    var iconType = sLoading ? 'loading' : icon;
    var iconNode = iconType ? h(_icon2['default'], {
      attrs: { type: iconType }
    }) : null;
    var children = (0, _propsUtil.filterEmpty)($slots['default']);
    var autoInsertSpace = this.configProvider.autoInsertSpaceInButton !== false;
    var kids = children.map(function (child) {
      return _this2.insertSpace(child, _this2.isNeedInserted() && autoInsertSpace);
    });

    if ($attrs.href !== undefined) {
      return h(
        'a',
        (0, _babelHelperVueJsxMergeProps2['default'])([buttonProps, { ref: 'buttonNode' }]),
        [iconNode, kids]
      );
    }

    var buttonNode = h(
      'button',
      (0, _babelHelperVueJsxMergeProps2['default'])([buttonProps, { ref: 'buttonNode', attrs: { type: htmlType || 'button' }
      }]),
      [iconNode, kids]
    );

    if (type === 'link') {
      return buttonNode;
    }

    return h(_wave2['default'], [buttonNode]);
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

/***/ "aac0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cascader = __webpack_require__("306f");

var _Cascader2 = _interopRequireDefault(_Cascader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Cascader2['default']; // based on rc-cascader 0.17.4

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

/***/ "af09":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;

/***/ }),

/***/ "b3d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _propsUtil = __webpack_require__("73c8");

var _Input = __webpack_require__("0a1b");

var _Input2 = _interopRequireDefault(_Input);

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _inputProps = __webpack_require__("8bc7");

var _inputProps2 = _interopRequireDefault(_inputProps);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ActionMap = {
  click: 'click',
  hover: 'mouseover'
};

exports['default'] = {
  name: 'AInputPassword',
  mixins: [_BaseMixin2['default']],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change.value'
  },
  props: (0, _extends3['default'])({}, _inputProps2['default'], {
    prefixCls: _vueTypes2['default'].string,
    inputPrefixCls: _vueTypes2['default'].string,
    action: _vueTypes2['default'].string.def('click'),
    visibilityToggle: _vueTypes2['default'].bool.def(true)
  }),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  data: function data() {
    return {
      visible: false
    };
  },

  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    onVisibleChange: function onVisibleChange() {
      if (this.disabled) {
        return;
      }
      this.setState({
        visible: !this.visible
      });
    },
    getIcon: function getIcon(prefixCls) {
      var _on;

      var h = this.$createElement;
      var action = this.$props.action;

      var iconTrigger = ActionMap[action] || '';
      var iconProps = {
        props: {
          type: this.visible ? 'eye' : 'eye-invisible'
        },
        on: (_on = {}, (0, _defineProperty3['default'])(_on, iconTrigger, this.onVisibleChange), (0, _defineProperty3['default'])(_on, 'mousedown', function mousedown(e) {
          // Prevent focused state lost
          // https://github.com/ant-design/ant-design/issues/15173
          e.preventDefault();
        }), (0, _defineProperty3['default'])(_on, 'mouseup', function mouseup(e) {
          // Prevent focused state lost
          // https://github.com/ant-design/ant-design/pull/23633/files
          e.preventDefault();
        }), _on),
        'class': prefixCls + '-icon',
        key: 'passwordIcon'
      };
      return h(_icon2['default'], iconProps);
    }
  },
  render: function render() {
    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        customizeInputPrefixCls = _getOptionProps.inputPrefixCls,
        size = _getOptionProps.size,
        suffix = _getOptionProps.suffix,
        visibilityToggle = _getOptionProps.visibilityToggle,
        restProps = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['prefixCls', 'inputPrefixCls', 'size', 'suffix', 'visibilityToggle']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var prefixCls = getPrefixCls('input-password', customizePrefixCls);

    var suffixIcon = visibilityToggle && this.getIcon(prefixCls);
    var inputClassName = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + size, !!size));
    var inputProps = {
      props: (0, _extends3['default'])({}, restProps, {
        prefixCls: inputPrefixCls,
        size: size,
        suffix: suffixIcon,
        prefix: (0, _propsUtil.getComponentFromProp)(this, 'prefix'),
        addonAfter: (0, _propsUtil.getComponentFromProp)(this, 'addonAfter'),
        addonBefore: (0, _propsUtil.getComponentFromProp)(this, 'addonBefore')
      }),
      attrs: (0, _extends3['default'])({}, this.$attrs, {
        type: this.visible ? 'text' : 'password'
      }),
      'class': inputClassName,
      ref: 'input',
      on: (0, _propsUtil.getListeners)(this)
    };
    return h(_Input2['default'], inputProps);
  }
};

/***/ }),

/***/ "b786":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcCascader = __webpack_require__("aac0");

var _vcCascader2 = _interopRequireDefault(_vcCascader);

var _arrayTreeFilter = __webpack_require__("b8ad");

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _KeyCode = __webpack_require__("af09");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _input = __webpack_require__("57df");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _propsUtil = __webpack_require__("73c8");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _vnode = __webpack_require__("d2f9");

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

var _configConsumerProps = __webpack_require__("bad7");

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CascaderOptionType = _vueTypes2['default'].shape({
  value: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
  label: _vueTypes2['default'].any,
  disabled: _vueTypes2['default'].bool,
  children: _vueTypes2['default'].array,
  key: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])
}).loose;

var FieldNamesType = _vueTypes2['default'].shape({
  value: _vueTypes2['default'].string.isRequired,
  label: _vueTypes2['default'].string.isRequired,
  children: _vueTypes2['default'].string
}).loose;

var CascaderExpandTrigger = _vueTypes2['default'].oneOf(['click', 'hover']);

var ShowSearchType = _vueTypes2['default'].shape({
  filter: _vueTypes2['default'].func,
  render: _vueTypes2['default'].func,
  sort: _vueTypes2['default'].func,
  matchInputWidth: _vueTypes2['default'].bool,
  limit: _vueTypes2['default'].oneOfType([Boolean, Number])
}).loose;
function noop() {}

var CascaderProps = {
  /** 可选项数据源 */
  options: _vueTypes2['default'].arrayOf(CascaderOptionType).def([]),
  /** 默认的选中项 */
  defaultValue: _vueTypes2['default'].array,
  /** 指定选中项 */
  value: _vueTypes2['default'].array,
  /** 选择完成后的回调 */
  // onChange?: (value: string[], selectedOptions?: CascaderOptionType[]) => void;
  /** 选择后展示的渲染函数 */
  displayRender: _vueTypes2['default'].func,
  transitionName: _vueTypes2['default'].string.def('slide-up'),
  popupStyle: _vueTypes2['default'].object.def(function () {
    return {};
  }),
  /** 自定义浮层类名 */
  popupClassName: _vueTypes2['default'].string,
  /** 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` */
  popupPlacement: _vueTypes2['default'].oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']).def('bottomLeft'),
  /** 输入框占位文本*/
  placeholder: _vueTypes2['default'].string.def('Please select'),
  /** 输入框大小，可选 `large` `default` `small` */
  size: _vueTypes2['default'].oneOf(['large', 'default', 'small']),
  /** 禁用*/
  disabled: _vueTypes2['default'].bool.def(false),
  /** 是否支持清除*/
  allowClear: _vueTypes2['default'].bool.def(true),
  showSearch: _vueTypes2['default'].oneOfType([Boolean, ShowSearchType]),
  notFoundContent: _vueTypes2['default'].any,
  loadData: _vueTypes2['default'].func,
  /** 次级菜单的展开方式，可选 'click' 和 'hover' */
  expandTrigger: CascaderExpandTrigger,
  /** 当此项为 true 时，点选每级菜单选项值都会发生变化 */
  changeOnSelect: _vueTypes2['default'].bool,
  /** 浮层可见变化时回调 */
  // onPopupVisibleChange?: (popupVisible: boolean) => void;
  prefixCls: _vueTypes2['default'].string,
  inputPrefixCls: _vueTypes2['default'].string,
  getPopupContainer: _vueTypes2['default'].func,
  popupVisible: _vueTypes2['default'].bool,
  fieldNames: FieldNamesType,
  autoFocus: _vueTypes2['default'].bool,
  suffixIcon: _vueTypes2['default'].any
};

// We limit the filtered item count by default
var defaultLimit = 50;

function defaultFilterOption(inputValue, path, names) {
  return path.some(function (option) {
    return option[names.label].indexOf(inputValue) > -1;
  });
}

function defaultSortFilteredOption(a, b, inputValue, names) {
  function callback(elem) {
    return elem[names.label].indexOf(inputValue) > -1;
  }

  return a.findIndex(callback) - b.findIndex(callback);
}

function getFilledFieldNames(_ref) {
  var _ref$fieldNames = _ref.fieldNames,
      fieldNames = _ref$fieldNames === undefined ? {} : _ref$fieldNames;

  var names = {
    children: fieldNames.children || 'children',
    label: fieldNames.label || 'label',
    value: fieldNames.value || 'value'
  };
  return names;
}

function flattenTree() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var props = arguments[1];
  var ancestor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var names = getFilledFieldNames(props);
  var flattenOptions = [];
  var childrenName = names.children;
  options.forEach(function (option) {
    var path = ancestor.concat(option);
    if (props.changeOnSelect || !option[childrenName] || !option[childrenName].length) {
      flattenOptions.push(path);
    }
    if (option[childrenName]) {
      flattenOptions = flattenOptions.concat(flattenTree(option[childrenName], props, path));
    }
  });
  return flattenOptions;
}

var defaultDisplayRender = function defaultDisplayRender(_ref2) {
  var labels = _ref2.labels;
  return labels.join(' / ');
};

var Cascader = {
  inheritAttrs: false,
  name: 'ACascader',
  mixins: [_BaseMixin2['default']],
  props: CascaderProps,
  model: {
    prop: 'value',
    event: 'change'
  },
  provide: function provide() {
    return {
      savePopupRef: this.savePopupRef
    };
  },

  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } },
    localeData: { 'default': function _default() {
        return {};
      } }
  },
  data: function data() {
    this.cachedOptions = [];
    var value = this.value,
        defaultValue = this.defaultValue,
        popupVisible = this.popupVisible,
        showSearch = this.showSearch,
        options = this.options;

    return {
      sValue: value || defaultValue || [],
      inputValue: '',
      inputFocused: false,
      sPopupVisible: popupVisible,
      flattenOptions: showSearch ? flattenTree(options, this.$props) : undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.autoFocus && !_this.showSearch && !_this.disabled) {
        _this.$refs.picker.focus();
      }
    });
  },

  watch: {
    value: function value(val) {
      this.setState({ sValue: val || [] });
    },
    popupVisible: function popupVisible(val) {
      this.setState({ sPopupVisible: val });
    },
    options: function options(val) {
      if (this.showSearch) {
        this.setState({ flattenOptions: flattenTree(val, this.$props) });
      }
    }
  },
  methods: {
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    highlightKeyword: function highlightKeyword(str, keyword, prefixCls) {
      var h = this.$createElement;

      return str.split(keyword).map(function (node, index) {
        return index === 0 ? node : [h(
          'span',
          { 'class': prefixCls + '-menu-item-keyword' },
          [keyword]
        ), node];
      });
    },
    defaultRenderFilteredOption: function defaultRenderFilteredOption(_ref3) {
      var _this2 = this;

      var inputValue = _ref3.inputValue,
          path = _ref3.path,
          prefixCls = _ref3.prefixCls,
          names = _ref3.names;

      return path.map(function (option, index) {
        var label = option[names.label];
        var node = label.indexOf(inputValue) > -1 ? _this2.highlightKeyword(label, inputValue, prefixCls) : label;
        return index === 0 ? node : [' / ', node];
      });
    },
    handleChange: function handleChange(value, selectedOptions) {
      this.setState({ inputValue: '' });
      if (selectedOptions[0].__IS_FILTERED_OPTION) {
        var unwrappedValue = value[0];
        var unwrappedSelectedOptions = selectedOptions[0].path;
        this.setValue(unwrappedValue, unwrappedSelectedOptions);
        return;
      }
      this.setValue(value, selectedOptions);
    },
    handlePopupVisibleChange: function handlePopupVisibleChange(popupVisible) {
      if (!(0, _propsUtil.hasProp)(this, 'popupVisible')) {
        this.setState(function (state) {
          return {
            sPopupVisible: popupVisible,
            inputFocused: popupVisible,
            inputValue: popupVisible ? state.inputValue : ''
          };
        });
      }
      this.$emit('popupVisibleChange', popupVisible);
    },
    handleInputFocus: function handleInputFocus(e) {
      this.$emit('focus', e);
    },
    handleInputBlur: function handleInputBlur(e) {
      this.setState({
        inputFocused: false
      });
      this.$emit('blur', e);
    },
    handleInputClick: function handleInputClick(e) {
      var inputFocused = this.inputFocused,
          sPopupVisible = this.sPopupVisible;
      // Prevent `Trigger` behaviour.

      if (inputFocused || sPopupVisible) {
        e.stopPropagation();
        if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
          e.nativeEvent.stopImmediatePropagation();
        }
      }
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === _KeyCode2['default'].BACKSPACE || e.keyCode === _KeyCode2['default'].SPACE) {
        e.stopPropagation();
      }
    },
    handleInputChange: function handleInputChange(e) {
      var inputValue = e.target.value;
      this.setState({ inputValue: inputValue });
      this.$emit('search', inputValue);
    },
    setValue: function setValue(value, selectedOptions) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({ sValue: value });
      }
      this.$emit('change', value, selectedOptions);
    },
    getLabel: function getLabel() {
      var options = this.options,
          $scopedSlots = this.$scopedSlots;

      var names = getFilledFieldNames(this.$props);
      var displayRender = this.displayRender || $scopedSlots.displayRender || defaultDisplayRender;
      var value = this.sValue;
      var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
      var selectedOptions = (0, _arrayTreeFilter2['default'])(options, function (o, level) {
        return o[names.value] === unwrappedValue[level];
      }, { childrenKeyName: names.children });
      var labels = selectedOptions.map(function (o) {
        return o[names.label];
      });
      return displayRender({ labels: labels, selectedOptions: selectedOptions });
    },
    clearSelection: function clearSelection(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!this.inputValue) {
        this.setValue([]);
        this.handlePopupVisibleChange(false);
      } else {
        this.setState({ inputValue: '' });
      }
    },
    generateFilteredOptions: function generateFilteredOptions(prefixCls, renderEmpty) {
      var _ref5;

      var h = this.$createElement;
      var showSearch = this.showSearch,
          notFoundContent = this.notFoundContent,
          $scopedSlots = this.$scopedSlots;

      var names = getFilledFieldNames(this.$props);
      var _showSearch$filter = showSearch.filter,
          filter = _showSearch$filter === undefined ? defaultFilterOption : _showSearch$filter,
          _showSearch$sort = showSearch.sort,
          sort = _showSearch$sort === undefined ? defaultSortFilteredOption : _showSearch$sort,
          _showSearch$limit = showSearch.limit,
          limit = _showSearch$limit === undefined ? defaultLimit : _showSearch$limit;

      var render = showSearch.render || $scopedSlots.showSearchRender || this.defaultRenderFilteredOption;
      var _$data = this.$data,
          _$data$flattenOptions = _$data.flattenOptions,
          flattenOptions = _$data$flattenOptions === undefined ? [] : _$data$flattenOptions,
          inputValue = _$data.inputValue;

      // Limit the filter if needed

      var filtered = void 0;
      if (limit > 0) {
        filtered = [];
        var matchCount = 0;

        // Perf optimization to filter items only below the limit
        flattenOptions.some(function (path) {
          var match = filter(inputValue, path, names);
          if (match) {
            filtered.push(path);
            matchCount += 1;
          }
          return matchCount >= limit;
        });
      } else {
        (0, _warning2['default'])(typeof limit !== 'number', 'Cascader', "'limit' of showSearch in Cascader should be positive number or false.");
        filtered = flattenOptions.filter(function (path) {
          return filter(inputValue, path, names);
        });
      }

      filtered.sort(function (a, b) {
        return sort(a, b, inputValue, names);
      });

      if (filtered.length > 0) {
        return filtered.map(function (path) {
          var _ref4;

          return _ref4 = {
            __IS_FILTERED_OPTION: true,
            path: path
          }, (0, _defineProperty3['default'])(_ref4, names.label, render({ inputValue: inputValue, path: path, prefixCls: prefixCls, names: names })), (0, _defineProperty3['default'])(_ref4, names.value, path.map(function (o) {
            return o[names.value];
          })), (0, _defineProperty3['default'])(_ref4, 'disabled', path.some(function (o) {
            return !!o.disabled;
          })), _ref4;
        });
      }
      return [(_ref5 = {}, (0, _defineProperty3['default'])(_ref5, names.label, notFoundContent || renderEmpty(h, 'Cascader')), (0, _defineProperty3['default'])(_ref5, names.value, 'ANT_CASCADER_NOT_FOUND'), (0, _defineProperty3['default'])(_ref5, 'disabled', true), _ref5)];
    },
    focus: function focus() {
      if (this.showSearch) {
        this.$refs.input.focus();
      } else {
        this.$refs.picker.focus();
      }
    },
    blur: function blur() {
      if (this.showSearch) {
        this.$refs.input.blur();
      } else {
        this.$refs.picker.blur();
      }
    }
  },

  render: function render() {
    var _classNames, _classNames2, _classNames3;

    var h = arguments[0];
    var $slots = this.$slots,
        sPopupVisible = this.sPopupVisible,
        inputValue = this.inputValue,
        configProvider = this.configProvider,
        localeData = this.localeData;
    var _$data2 = this.$data,
        value = _$data2.sValue,
        inputFocused = _$data2.inputFocused;

    var props = (0, _propsUtil.getOptionProps)(this);
    var suffixIcon = (0, _propsUtil.getComponentFromProp)(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var getContextPopupContainer = configProvider.getPopupContainer;
    var customizePrefixCls = props.prefixCls,
        customizeInputPrefixCls = props.inputPrefixCls,
        _props$placeholder = props.placeholder,
        placeholder = _props$placeholder === undefined ? localeData.placeholder : _props$placeholder,
        size = props.size,
        disabled = props.disabled,
        allowClear = props.allowClear,
        _props$showSearch = props.showSearch,
        showSearch = _props$showSearch === undefined ? false : _props$showSearch,
        notFoundContent = props.notFoundContent,
        otherProps = (0, _objectWithoutProperties3['default'])(props, ['prefixCls', 'inputPrefixCls', 'placeholder', 'size', 'disabled', 'allowClear', 'showSearch', 'notFoundContent']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var renderEmpty = this.configProvider.renderEmpty;
    var prefixCls = getPrefixCls('cascader', customizePrefixCls);
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);

    var sizeCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, inputPrefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, inputPrefixCls + '-sm', size === 'small'), _classNames));
    var clearIcon = allowClear && !disabled && value.length > 0 || inputValue ? h(_icon2['default'], {
      attrs: {
        type: 'close-circle',
        theme: 'filled'
      },
      'class': prefixCls + '-picker-clear',
      on: {
        'click': this.clearSelection
      },

      key: 'clear-icon'
    }) : null;
    var arrowCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-picker-arrow', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-picker-arrow-expand', sPopupVisible), _classNames2));
    var pickerCls = (0, _classnames2['default'])((0, _propsUtil.getClass)(this), prefixCls + '-picker', (_classNames3 = {}, (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker-with-value', inputValue), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker-disabled', disabled), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker-' + size, !!size), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker-show-search', !!showSearch), (0, _defineProperty3['default'])(_classNames3, prefixCls + '-picker-focused', inputFocused), _classNames3));

    // Fix bug of https://github.com/facebook/react/pull/5004
    // and https://fb.me/react-unknown-prop
    var tempInputProps = (0, _omit2['default'])(otherProps, ['options', 'popupPlacement', 'transitionName', 'displayRender', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName', 'filterOption', 'renderFilteredOption', 'sortFilteredOption', 'notFoundContent', 'defaultValue', 'fieldNames']);

    var options = props.options;
    var names = getFilledFieldNames(this.$props);
    if (options && options.length > 0) {
      if (inputValue) {
        options = this.generateFilteredOptions(prefixCls, renderEmpty);
      }
    } else {
      var _ref6;

      options = [(_ref6 = {}, (0, _defineProperty3['default'])(_ref6, names.label, notFoundContent || renderEmpty(h, 'Cascader')), (0, _defineProperty3['default'])(_ref6, names.value, 'ANT_CASCADER_NOT_FOUND'), (0, _defineProperty3['default'])(_ref6, 'disabled', true), _ref6)];
    }

    // Dropdown menu should keep previous status until it is fully closed.
    if (!sPopupVisible) {
      options = this.cachedOptions;
    } else {
      this.cachedOptions = options;
    }

    var dropdownMenuColumnStyle = {};
    var isNotFound = (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';
    if (isNotFound) {
      dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
    }
    // The default value of `matchInputWidth` is `true`
    var resultListMatchInputWidth = showSearch.matchInputWidth !== false;
    if (resultListMatchInputWidth && (inputValue || isNotFound) && this.$refs.input) {
      dropdownMenuColumnStyle.width = this.$refs.input.$el.offsetWidth + 'px';
    }
    // showSearch时，focus、blur在input上触发，反之在ref='picker'上触发
    var inputProps = {
      props: (0, _extends3['default'])({}, tempInputProps, {
        prefixCls: inputPrefixCls,
        placeholder: value && value.length > 0 ? undefined : placeholder,
        value: inputValue,
        disabled: disabled,
        readOnly: !showSearch,
        autoComplete: 'off'
      }),
      'class': prefixCls + '-input ' + sizeCls,
      ref: 'input',
      on: {
        focus: showSearch ? this.handleInputFocus : noop,
        click: showSearch ? this.handleInputClick : noop,
        blur: showSearch ? this.handleInputBlur : noop,
        keydown: this.handleKeyDown,
        change: showSearch ? this.handleInputChange : noop
      },
      attrs: (0, _propsUtil.getAttrs)(this)
    };
    var children = (0, _propsUtil.filterEmpty)($slots['default']);
    var inputIcon = suffixIcon && ((0, _propsUtil.isValidElement)(suffixIcon) ? (0, _vnode.cloneElement)(suffixIcon, {
      'class': (0, _defineProperty3['default'])({}, prefixCls + '-picker-arrow', true)
    }) : h(
      'span',
      { 'class': prefixCls + '-picker-arrow' },
      [suffixIcon]
    )) || h(_icon2['default'], {
      attrs: { type: 'down' },
      'class': arrowCls });

    var input = children.length ? children : h(
      'span',
      { 'class': pickerCls, style: (0, _propsUtil.getStyle)(this), ref: 'picker' },
      [showSearch ? h(
        'span',
        { 'class': prefixCls + '-picker-label' },
        [this.getLabel()]
      ) : null, h(_input2['default'], inputProps), !showSearch ? h(
        'span',
        { 'class': prefixCls + '-picker-label' },
        [this.getLabel()]
      ) : null, clearIcon, inputIcon]
    );

    var expandIcon = h(_icon2['default'], {
      attrs: { type: 'right' }
    });

    var loadingIcon = h(
      'span',
      { 'class': prefixCls + '-menu-item-loading-icon' },
      [h(_icon2['default'], {
        attrs: { type: 'redo', spin: true }
      })]
    );
    var getPopupContainer = props.getPopupContainer || getContextPopupContainer;
    var cascaderProps = {
      props: (0, _extends3['default'])({}, props, {
        getPopupContainer: getPopupContainer,
        options: options,
        prefixCls: prefixCls,
        value: value,
        popupVisible: sPopupVisible,
        dropdownMenuColumnStyle: dropdownMenuColumnStyle,
        expandIcon: expandIcon,
        loadingIcon: loadingIcon
      }),
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
        popupVisibleChange: this.handlePopupVisibleChange,
        change: this.handleChange
      })
    };
    return h(
      _vcCascader2['default'],
      cascaderProps,
      [input]
    );
  }
};

/* istanbul ignore next */
Cascader.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(Cascader.name, Cascader);
};

exports['default'] = Cascader;

/***/ }),

/***/ "b8ad":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function arrayTreeFilter(data, filterFn, options) {
    options = options || {};
    options.childrenKeyName = options.childrenKeyName || "children";
    var children = data || [];
    var result = [];
    var level = 0;
    do {
        var foundItem = children.filter(function (item) {
            return filterFn(item, level);
        })[0];
        if (!foundItem) {
            break;
        }
        result.push(foundItem);
        children = foundItem[options.childrenKeyName] || [];
        level += 1;
    } while (children.length > 0);
    return result;
}

return arrayTreeFilter;

})));


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

/***/ "c2b3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqualArrays;


/***/ }),

/***/ "c4c6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__("807c");

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__("d009");

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_button2['default'].Group = _buttonGroup2['default'];

/* istanbul ignore next */
_button2['default'].install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(_button2['default'].name, _button2['default']);
  Vue.component(_buttonGroup2['default'].name, _buttonGroup2['default']);
};

exports['default'] = _button2['default'];

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

/***/ "d009":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroupProps = undefined;

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _propsUtil = __webpack_require__("73c8");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ButtonGroupProps = {
  prefixCls: _vueTypes2['default'].string,
  size: {
    validator: function validator(value) {
      return ['small', 'large', 'default'].includes(value);
    }
  }
};
exports.ButtonGroupProps = ButtonGroupProps;
exports['default'] = {
  name: 'AButtonGroup',
  props: ButtonGroupProps,
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  data: function data() {
    return {
      sizeMap: {
        large: 'lg',
        small: 'sm'
      }
    };
  },
  render: function render() {
    var _classes;

    var h = arguments[0];
    var customizePrefixCls = this.prefixCls,
        size = this.size,
        $slots = this.$slots;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('btn-group', customizePrefixCls);

    // large => lg
    // small => sm
    var sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }
    var classes = (_classes = {}, (0, _defineProperty3['default'])(_classes, '' + prefixCls, true), (0, _defineProperty3['default'])(_classes, prefixCls + '-' + sizeCls, sizeCls), _classes);
    return h(
      'div',
      { 'class': classes },
      [(0, _propsUtil.filterEmpty)($slots['default'])]
    );
  }
};

/***/ }),

/***/ "de9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'AInputGroup',
  props: {
    prefixCls: _vueTypes2['default'].string,
    size: {
      validator: function validator(value) {
        return ['small', 'large', 'default'].includes(value);
      }
    },
    compact: Boolean
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  computed: {
    classes: function classes() {
      var _ref;

      var customizePrefixCls = this.prefixCls,
          size = this.size,
          _compact = this.compact,
          compact = _compact === undefined ? false : _compact;

      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('input-group', customizePrefixCls);

      return _ref = {}, (0, _defineProperty3['default'])(_ref, '' + prefixCls, true), (0, _defineProperty3['default'])(_ref, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_ref, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_ref, prefixCls + '-compact', compact), _ref;
    }
  },
  methods: {},
  render: function render() {
    var h = arguments[0];

    return h(
      'span',
      (0, _babelHelperVueJsxMergeProps2['default'])([{ 'class': this.classes }, { on: (0, _propsUtil.getListeners)(this) }]),
      [(0, _propsUtil.filterEmpty)(this.$slots['default'])]
    );
  }
};

/***/ }),

/***/ "f70b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function () {
  return {
    prefixCls: _vueTypes2['default'].string,
    type: _vueTypes2['default'].string,
    htmlType: _vueTypes2['default'].oneOf(['button', 'submit', 'reset']).def('button'),
    icon: _vueTypes2['default'].any,
    shape: _vueTypes2['default'].oneOf(['circle', 'circle-outline', 'round']),
    size: _vueTypes2['default'].oneOf(['small', 'large', 'default']).def('default'),
    loading: _vueTypes2['default'].oneOfType([_vueTypes2['default'].bool, _vueTypes2['default'].object]),
    disabled: _vueTypes2['default'].bool,
    ghost: _vueTypes2['default'].bool,
    block: _vueTypes2['default'].bool
  };
};

/***/ })

}]);