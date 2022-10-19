((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[7],{

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

/***/ "8df8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = isMobile
module.exports.isMobile = isMobile
module.exports.default = isMobile

var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i

var tabletRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i

function isMobile (opts) {
  if (!opts) opts = {}
  var ua = opts.ua
  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent']
  }
  if (typeof ua !== 'string') return false

  var result = opts.tablet ? tabletRE.test(ua) : mobileRE.test(ua)

  if (
    !result &&
    opts.tablet &&
    opts.featureDetect &&
    navigator &&
    navigator.maxTouchPoints > 1 &&
    ua.indexOf('Macintosh') !== -1 &&
    ua.indexOf('Safari') !== -1
  ) {
    result = true
  }

  return result
}


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