((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[0],{

/***/ "0978":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__("8726");

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _en_US2['default'];

/***/ }),

/***/ "0ca5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getRequestAnimationFrame;
exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame;
var availablePrefixs = ['moz', 'ms', 'webkit'];

function requestAnimationFramePolyfill() {
  var lastTime = 0;
  return function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return function () {};
  }
  if (window.requestAnimationFrame) {
    // https://github.com/vuejs/vue/issues/4465
    return window.requestAnimationFrame.bind(window);
  }

  var prefix = availablePrefixs.filter(function (key) {
    return key + 'RequestAnimationFrame' in window;
  })[0];

  return prefix ? window[prefix + 'RequestAnimationFrame'] : requestAnimationFramePolyfill();
}

function cancelRequestAnimationFrame(id) {
  if (typeof window === 'undefined') {
    return null;
  }
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }
  var prefix = availablePrefixs.filter(function (key) {
    return key + 'CancelAnimationFrame' in window || key + 'CancelRequestAnimationFrame' in window;
  })[0];

  return prefix ? (window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']).call(this, id) : clearTimeout(id);
}

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

/***/ "2721":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  functional: true,
  PRESENTED_IMAGE_SIMPLE: true,
  render: function render() {
    var h = arguments[0];

    return h(
      "svg",
      {
        attrs: { width: "64", height: "41", viewBox: "0 0 64 41", xmlns: "http://www.w3.org/2000/svg" }
      },
      [h(
        "g",
        {
          attrs: { transform: "translate(0 1)", fill: "none", fillRule: "evenodd" }
        },
        [h("ellipse", {
          attrs: { fill: "#F5F5F5", cx: "32", cy: "33", rx: "32", ry: "7" }
        }), h(
          "g",
          {
            attrs: { fillRule: "nonzero", stroke: "#D9D9D9" }
          },
          [h("path", {
            attrs: { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }
          }), h("path", {
            attrs: {
              d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
              fill: "#FAFAFA"
            }
          })]
        )]
      )]
    );
  }
};

/***/ }),

/***/ "2b93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _empty = __webpack_require__("5eea");

var _empty2 = _interopRequireDefault(_empty);

var _configConsumerProps = __webpack_require__("bad7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RenderEmpty = {
  functional: true,
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  props: {
    componentName: _vueTypes2['default'].string
  },
  render: function render(createElement, context) {
    var h = arguments[0];
    var props = context.props,
        injections = context.injections;

    function renderHtml(componentName) {
      var getPrefixCls = injections.configProvider.getPrefixCls;
      var prefix = getPrefixCls('empty');
      switch (componentName) {
        case 'Table':
        case 'List':
          return h(_empty2['default'], {
            attrs: { image: _empty2['default'].PRESENTED_IMAGE_SIMPLE }
          });

        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return h(_empty2['default'], {
            attrs: { image: _empty2['default'].PRESENTED_IMAGE_SIMPLE },
            'class': prefix + '-small' });

        default:
          return h(_empty2['default']);
      }
    }
    return renderHtml(props.componentName);
  }
};

function renderEmpty(h, componentName) {
  return h(RenderEmpty, {
    attrs: { componentName: componentName }
  });
}

exports['default'] = renderEmpty;

/***/ }),

/***/ "31f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAnimationTimeout = exports.cancelAnimationTimeout = undefined;

var _getRequestAnimationFrame = __webpack_require__("0ca5");

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var raf = (0, _getRequestAnimationFrame2['default'])();

var cancelAnimationTimeout = exports.cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0, _getRequestAnimationFrame.cancelRequestAnimationFrame)(frame.id);
};

var requestAnimationTimeout = exports.requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = Date.now();
  function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf(timeout);
    }
  }

  var frame = {
    id: raf(timeout)
  };

  return frame;
};

/***/ }),

/***/ "3f5f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _default2 = __webpack_require__("94ef");

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'LocaleReceiver',
  props: {
    componentName: _vueTypes2['default'].string.def('global'),
    defaultLocale: _vueTypes2['default'].oneOfType([_vueTypes2['default'].object, _vueTypes2['default'].func]),
    children: _vueTypes2['default'].func
  },
  inject: {
    localeData: { 'default': function _default() {
        return {};
      } }
  },
  methods: {
    getLocale: function getLocale() {
      var componentName = this.componentName,
          defaultLocale = this.defaultLocale;

      var locale = defaultLocale || _default3['default'][componentName || 'global'];
      var antLocale = this.localeData.antLocale;


      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends3['default'])({}, typeof locale === 'function' ? locale() : locale, localeFromContext || {});
    },
    getLocaleCode: function getLocaleCode() {
      var antLocale = this.localeData.antLocale;

      var localeCode = antLocale && antLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (antLocale && antLocale.exist && !localeCode) {
        return _default3['default'].locale;
      }
      return localeCode;
    }
  },
  render: function render() {
    var $scopedSlots = this.$scopedSlots;

    var children = this.children || $scopedSlots['default'];
    var antLocale = this.localeData.antLocale;

    return children(this.getLocale(), this.getLocaleCode(), antLocale);
  }
};

/***/ }),

/***/ "401b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCssAnimationSupported = undefined;

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _Event = __webpack_require__("e098");

var _Event2 = _interopRequireDefault(_Event);

var _componentClasses = __webpack_require__("3c55");

var _componentClasses2 = _interopRequireDefault(_componentClasses);

var _requestAnimationTimeout = __webpack_require__("31f2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isCssAnimationSupported = _Event2['default'].endEvents.length !== 0; // https://github.com/yiminghe/css-animation 1.5.0

var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : (0, _typeof3['default'])(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = (0, _componentClasses2['default'])(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event2['default'].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = (0, _requestAnimationTimeout.requestAnimationTimeout)(function () {
    node.rcAnimTimeout = null;

    nodeClasses.add(className);
    nodeClasses.add(activeClassName);

    if (active) {
      (0, _requestAnimationTimeout.requestAnimationTimeout)(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event2['default'].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = (0, _requestAnimationTimeout.requestAnimationTimeout)(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

exports.isCssAnimationSupported = isCssAnimationSupported;
exports['default'] = cssAnimation;

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

/***/ "5eea":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyProps = exports.TransferLocale = undefined;

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _configConsumerProps = __webpack_require__("bad7");

var _propsUtil = __webpack_require__("73c8");

var _LocaleReceiver = __webpack_require__("3f5f");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _empty = __webpack_require__("c4ff");

var _empty2 = _interopRequireDefault(_empty);

var _simple = __webpack_require__("2721");

var _simple2 = _interopRequireDefault(_simple);

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TransferLocale = exports.TransferLocale = function TransferLocale() {
  return {
    description: _vueTypes2['default'].string
  };
};

var EmptyProps = exports.EmptyProps = function EmptyProps() {
  return {
    prefixCls: _vueTypes2['default'].string,
    image: _vueTypes2['default'].any,
    description: _vueTypes2['default'].any,
    imageStyle: _vueTypes2['default'].object
  };
};

var Empty = {
  name: 'AEmpty',
  props: (0, _extends3['default'])({}, EmptyProps()),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  methods: {
    renderEmpty: function renderEmpty(contentLocale) {
      var h = this.$createElement;
      var _$props = this.$props,
          customizePrefixCls = _$props.prefixCls,
          imageStyle = _$props.imageStyle;
      var getPrefixCls = this.configProvider.getPrefixCls;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var image = (0, _propsUtil.getComponentFromProp)(this, 'image') || h(_empty2['default']);
      var description = (0, _propsUtil.getComponentFromProp)(this, 'description');

      var des = typeof description !== 'undefined' ? description : contentLocale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var cls = (0, _defineProperty3['default'])({}, prefixCls, true);
      var imageNode = null;
      if (typeof image === 'string') {
        imageNode = h('img', {
          attrs: { alt: alt, src: image }
        });
      } else if ((typeof image === 'undefined' ? 'undefined' : (0, _typeof3['default'])(image)) === 'object' && image.PRESENTED_IMAGE_SIMPLE) {
        var Image = image;
        imageNode = h(Image);
        cls[prefixCls + '-normal'] = true;
      } else {
        imageNode = image;
      }
      return h(
        'div',
        (0, _babelHelperVueJsxMergeProps2['default'])([{ 'class': cls }, { on: (0, _propsUtil.getListeners)(this) }]),
        [h(
          'div',
          { 'class': prefixCls + '-image', style: imageStyle },
          [imageNode]
        ), des && h(
          'p',
          { 'class': prefixCls + '-description' },
          [des]
        ), this.$slots['default'] && h(
          'div',
          { 'class': prefixCls + '-footer' },
          [this.$slots['default']]
        )]
      );
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(_LocaleReceiver2['default'], {
      attrs: { componentName: 'Empty' },
      scopedSlots: { 'default': this.renderEmpty } });
  }
};

Empty.PRESENTED_IMAGE_DEFAULT = _empty2['default'];
Empty.PRESENTED_IMAGE_SIMPLE = _simple2['default'];

/* istanbul ignore next */
Empty.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(Empty.name, Empty);
};

exports['default'] = Empty;

/***/ }),

/***/ "73c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllChildren = exports.getAllProps = exports.getSlot = exports.getSlots = exports.camelize = exports.isValidElement = exports.initDefaultProps = exports.parseStyleText = exports.getValueByProp = exports.getAttrs = exports.getKey = exports.getPropsData = exports.slotHasProp = exports.getSlotOptions = exports.getComponentFromProp = exports.getOptionProps = exports.filterProps = exports.hasProp = undefined;

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = __webpack_require__("b24f");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports.getEvents = getEvents;
exports.getDataEvents = getDataEvents;
exports.getListeners = getListeners;
exports.getClass = getClass;
exports.getStyle = getStyle;
exports.getComponentName = getComponentName;
exports.isEmptyElement = isEmptyElement;
exports.isStringElement = isStringElement;
exports.filterEmpty = filterEmpty;
exports.mergeProps = mergeProps;

var _isPlainObject = __webpack_require__("60ed");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

var camelizeRE = /-(\w)/g;
var camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};
var parseStyleText = function parseStyleText() {
  var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var camel = arguments[1];

  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        var k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};

var hasProp = function hasProp(instance, prop) {
  var $options = instance.$options || {};
  var propsData = $options.propsData || {};
  return prop in propsData;
};
var slotHasProp = function slotHasProp(slot, prop) {
  var $options = slot.componentOptions || {};
  var propsData = $options.propsData || {};
  return prop in propsData;
};
var filterProps = function filterProps(props) {
  var propsData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var res = {};
  Object.keys(props).forEach(function (k) {
    if (k in propsData || props[k] !== undefined) {
      res[k] = props[k];
    }
  });
  return res;
};

var getScopedSlots = function getScopedSlots(ele) {
  return ele.data && ele.data.scopedSlots || {};
};

var getSlots = function getSlots(ele) {
  var componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }
  var children = ele.children || componentOptions.children || [];
  var slots = {};
  children.forEach(function (child) {
    if (!isEmptyElement(child)) {
      var name = child.data && child.data.slot || 'default';
      slots[name] = slots[name] || [];
      slots[name].push(child);
    }
  });
  return (0, _extends3['default'])({}, slots, getScopedSlots(ele));
};
var getSlot = function getSlot(self) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return self.$scopedSlots && self.$scopedSlots[name] && self.$scopedSlots[name](options) || self.$slots[name] || [];
};

var getAllChildren = function getAllChildren(ele) {
  var componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }
  return ele.children || componentOptions.children || [];
};
var getSlotOptions = function getSlotOptions(ele) {
  if (ele.fnOptions) {
    // 函数式组件
    return ele.fnOptions;
  }
  var componentOptions = ele.componentOptions;
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions;
  }
  return componentOptions ? componentOptions.Ctor.options || {} : {};
};
var getOptionProps = function getOptionProps(instance) {
  if (instance.componentOptions) {
    var componentOptions = instance.componentOptions;
    var _componentOptions$pro = componentOptions.propsData,
        propsData = _componentOptions$pro === undefined ? {} : _componentOptions$pro,
        _componentOptions$Cto = componentOptions.Ctor,
        Ctor = _componentOptions$Cto === undefined ? {} : _componentOptions$Cto;

    var props = (Ctor.options || {}).props || {};
    var res = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.entries(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = (0, _slicedToArray3['default'])(_ref, 2);

        var k = _ref2[0];
        var v = _ref2[1];

        var def = v['default'];
        if (def !== undefined) {
          res[k] = typeof def === 'function' && getType(v.type) !== 'Function' ? def.call(instance) : def;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return (0, _extends3['default'])({}, res, propsData);
  }
  var _instance$$options = instance.$options,
      $options = _instance$$options === undefined ? {} : _instance$$options,
      _instance$$props = instance.$props,
      $props = _instance$$props === undefined ? {} : _instance$$props;

  return filterProps($props, $options.propsData);
};

var getComponentFromProp = function getComponentFromProp(instance, prop) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (instance.$createElement) {
    var h = instance.$createElement;
    var temp = instance[prop];
    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(h, options) : temp;
    }
    return instance.$scopedSlots[prop] && execute && instance.$scopedSlots[prop](options) || instance.$scopedSlots[prop] || instance.$slots[prop] || undefined;
  } else {
    var _h = instance.context.$createElement;
    var _temp = getPropsData(instance)[prop];
    if (_temp !== undefined) {
      return typeof _temp === 'function' && execute ? _temp(_h, options) : _temp;
    }
    var slotScope = getScopedSlots(instance)[prop];
    if (slotScope !== undefined) {
      return typeof slotScope === 'function' && execute ? slotScope(_h, options) : slotScope;
    }
    var slotsProp = [];
    var componentOptions = instance.componentOptions || {};
    (componentOptions.children || []).forEach(function (child) {
      if (child.data && child.data.slot === prop) {
        if (child.data.attrs) {
          delete child.data.attrs.slot;
        }
        if (child.tag === 'template') {
          slotsProp.push(child.children);
        } else {
          slotsProp.push(child);
        }
      }
    });
    return slotsProp.length ? slotsProp : undefined;
  }
};

var getAllProps = function getAllProps(ele) {
  var data = ele.data || {};
  var componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    data = ele.$vnode.data || {};
    componentOptions = ele.$vnode.componentOptions || {};
  }
  return (0, _extends3['default'])({}, data.props, data.attrs, componentOptions.propsData);
};

var getPropsData = function getPropsData(ele) {
  var componentOptions = ele.componentOptions;
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions;
  }
  return componentOptions ? componentOptions.propsData || {} : {};
};
var getValueByProp = function getValueByProp(ele, prop) {
  return getPropsData(ele)[prop];
};

var getAttrs = function getAttrs(ele) {
  var data = ele.data;
  if (ele.$vnode) {
    data = ele.$vnode.data;
  }
  return data ? data.attrs || {} : {};
};

var getKey = function getKey(ele) {
  var key = ele.key;
  if (ele.$vnode) {
    key = ele.$vnode.key;
  }
  return key;
};

function getEvents(child) {
  var events = {};
  if (child.componentOptions && child.componentOptions.listeners) {
    events = child.componentOptions.listeners;
  } else if (child.data && child.data.on) {
    events = child.data.on;
  }
  return (0, _extends3['default'])({}, events);
}

// 获取 xxx.native 或者 原生标签 事件
function getDataEvents(child) {
  var events = {};
  if (child.data && child.data.on) {
    events = child.data.on;
  }
  return (0, _extends3['default'])({}, events);
}

// use getListeners instead this.$listeners
// https://github.com/vueComponent/ant-design-vue/issues/1705
function getListeners(context) {
  return (context.$vnode ? context.$vnode.componentOptions.listeners : context.$listeners) || {};
}
function getClass(ele) {
  var data = {};
  if (ele.data) {
    data = ele.data;
  } else if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data;
  }
  var tempCls = data['class'] || {};
  var staticClass = data.staticClass;
  var cls = {};
  staticClass && staticClass.split(' ').forEach(function (c) {
    cls[c.trim()] = true;
  });
  if (typeof tempCls === 'string') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(tempCls)) {
    (0, _classnames2['default'])(tempCls).split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0, _extends3['default'])({}, cls, tempCls);
  }
  return cls;
}
function getStyle(ele, camel) {
  var data = {};
  if (ele.data) {
    data = ele.data;
  } else if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data;
  }
  var style = data.style || data.staticStyle;
  if (typeof style === 'string') {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    // 驼峰化
    var res = {};
    Object.keys(style).forEach(function (k) {
      return res[camelize(k)] = style[k];
    });
    return res;
  }
  return style;
}

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function isEmptyElement(c) {
  return !(c.tag || c.text && c.text.trim() !== '');
}

function isStringElement(c) {
  return !c.tag;
}

function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return children.filter(function (c) {
    return !isEmptyElement(c);
  });
}
var initDefaultProps = function initDefaultProps(propTypes, defaultProps) {
  Object.keys(defaultProps).forEach(function (k) {
    if (propTypes[k]) {
      propTypes[k].def && (propTypes[k] = propTypes[k].def(defaultProps[k]));
    } else {
      throw new Error('not have ' + k + ' prop');
    }
  });
  return propTypes;
};

function mergeProps() {
  var args = [].slice.call(arguments, 0);
  var props = {};
  args.forEach(function () {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = Object.entries(p)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ref3 = _step2.value;

        var _ref4 = (0, _slicedToArray3['default'])(_ref3, 2);

        var k = _ref4[0];
        var v = _ref4[1];

        props[k] = props[k] || {};
        if ((0, _isPlainObject2['default'])(v)) {
          (0, _extends3['default'])(props[k], v);
        } else {
          props[k] = v;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
  return props;
}

function isValidElement(element) {
  return element && (typeof element === 'undefined' ? 'undefined' : (0, _typeof3['default'])(element)) === 'object' && 'componentOptions' in element && 'context' in element && element.tag !== undefined; // remove text node
}

exports.hasProp = hasProp;
exports.filterProps = filterProps;
exports.getOptionProps = getOptionProps;
exports.getComponentFromProp = getComponentFromProp;
exports.getSlotOptions = getSlotOptions;
exports.slotHasProp = slotHasProp;
exports.getPropsData = getPropsData;
exports.getKey = getKey;
exports.getAttrs = getAttrs;
exports.getValueByProp = getValueByProp;
exports.parseStyleText = parseStyleText;
exports.initDefaultProps = initDefaultProps;
exports.isValidElement = isValidElement;
exports.camelize = camelize;
exports.getSlots = getSlots;
exports.getSlot = getSlot;
exports.getAllProps = getAllProps;
exports.getAllChildren = getAllChildren;
exports['default'] = hasProp;

/***/ }),

/***/ "7b44":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _isPlainObject = __webpack_require__("60ed");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _utils = __webpack_require__("bb78");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var VuePropTypes = {
  get any() {
    return (0, _utils.toType)('any', {
      type: null
    });
  },

  get func() {
    return (0, _utils.toType)('function', {
      type: Function
    }).def(currentDefaults.func);
  },

  get bool() {
    return (0, _utils.toType)('boolean', {
      type: Boolean
    }).def(currentDefaults.bool);
  },

  get string() {
    return (0, _utils.toType)('string', {
      type: String
    }).def(currentDefaults.string);
  },

  get number() {
    return (0, _utils.toType)('number', {
      type: Number
    }).def(currentDefaults.number);
  },

  get array() {
    return (0, _utils.toType)('array', {
      type: Array
    }).def(currentDefaults.array);
  },

  get object() {
    return (0, _utils.toType)('object', {
      type: Object
    }).def(currentDefaults.object);
  },

  get integer() {
    return (0, _utils.toType)('integer', {
      type: Number,
      validator: function validator(value) {
        return (0, _utils.isInteger)(value);
      }
    }).def(currentDefaults.integer);
  },

  get symbol() {
    return (0, _utils.toType)('symbol', {
      type: null,
      validator: function validator(value) {
        return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'symbol';
      }
    });
  },

  custom: function custom(validatorFn) {
    var warnMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'custom validation failed';

    if (typeof validatorFn !== 'function') {
      throw new TypeError('[VueTypes error]: You must provide a function as argument');
    }

    return (0, _utils.toType)(validatorFn.name || '<<anonymous function>>', {
      validator: function validator() {
        var valid = validatorFn.apply(undefined, arguments);
        if (!valid) (0, _utils.warn)(this._vueTypes_name + ' - ' + warnMsg);
        return valid;
      }
    });
  },
  oneOf: function oneOf(arr) {
    if (!(0, _utils.isArray)(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }
    var msg = 'oneOf - value should be one of "' + arr.join('", "') + '"';
    var allowedTypes = arr.reduce(function (ret, v) {
      if (v !== null && v !== undefined) {
        ret.indexOf(v.constructor) === -1 && ret.push(v.constructor);
      }
      return ret;
    }, []);

    return (0, _utils.toType)('oneOf', {
      type: allowedTypes.length > 0 ? allowedTypes : null,
      validator: function validator(value) {
        var valid = arr.indexOf(value) !== -1;
        if (!valid) (0, _utils.warn)(msg);
        return valid;
      }
    });
  },
  instanceOf: function instanceOf(instanceConstructor) {
    return (0, _utils.toType)('instanceOf', {
      type: instanceConstructor
    });
  },
  oneOfType: function oneOfType(arr) {
    if (!(0, _utils.isArray)(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }

    var hasCustomValidators = false;

    var nativeChecks = arr.reduce(function (ret, type) {
      if ((0, _isPlainObject2['default'])(type)) {
        if (type._vueTypes_name === 'oneOf') {
          return ret.concat(type.type || []);
        }
        if (type.type && !(0, _utils.isFunction)(type.validator)) {
          if ((0, _utils.isArray)(type.type)) return ret.concat(type.type);
          ret.push(type.type);
        } else if ((0, _utils.isFunction)(type.validator)) {
          hasCustomValidators = true;
        }
        return ret;
      }
      ret.push(type);
      return ret;
    }, []);

    if (!hasCustomValidators) {
      // we got just native objects (ie: Array, Object)
      // delegate to Vue native prop check
      return (0, _utils.toType)('oneOfType', {
        type: nativeChecks
      }).def(undefined);
    }

    var typesStr = arr.map(function (type) {
      if (type && (0, _utils.isArray)(type.type)) {
        return type.type.map(_utils.getType);
      }
      return (0, _utils.getType)(type);
    }).reduce(function (ret, type) {
      return ret.concat((0, _utils.isArray)(type) ? type : [type]);
    }, []).join('", "');

    return this.custom(function oneOfType(value) {
      var valid = arr.some(function (type) {
        if (type._vueTypes_name === 'oneOf') {
          return type.type ? (0, _utils.validateType)(type.type, value, true) : true;
        }
        return (0, _utils.validateType)(type, value, true);
      });
      if (!valid) (0, _utils.warn)('oneOfType - value type should be one of "' + typesStr + '"');
      return valid;
    }).def(undefined);
  },
  arrayOf: function arrayOf(type) {
    return (0, _utils.toType)('arrayOf', {
      type: Array,
      validator: function validator(values) {
        var valid = values.every(function (value) {
          return (0, _utils.validateType)(type, value);
        });
        if (!valid) (0, _utils.warn)('arrayOf - value must be an array of "' + (0, _utils.getType)(type) + '"');
        return valid;
      }
    });
  },
  objectOf: function objectOf(type) {
    return (0, _utils.toType)('objectOf', {
      type: Object,
      validator: function validator(obj) {
        var valid = Object.keys(obj).every(function (key) {
          return (0, _utils.validateType)(type, obj[key]);
        });
        if (!valid) (0, _utils.warn)('objectOf - value must be an object of "' + (0, _utils.getType)(type) + '"');
        return valid;
      }
    });
  },
  shape: function shape(obj) {
    var keys = Object.keys(obj);
    var requiredKeys = keys.filter(function (key) {
      return obj[key] && obj[key].required === true;
    });

    var type = (0, _utils.toType)('shape', {
      type: Object,
      validator: function validator(value) {
        var _this = this;

        if (!(0, _isPlainObject2['default'])(value)) {
          return false;
        }
        var valueKeys = Object.keys(value);

        // check for required keys (if any)
        if (requiredKeys.length > 0 && requiredKeys.some(function (req) {
          return valueKeys.indexOf(req) === -1;
        })) {
          (0, _utils.warn)('shape - at least one of required properties "' + requiredKeys.join('", "') + '" is not present');
          return false;
        }

        return valueKeys.every(function (key) {
          if (keys.indexOf(key) === -1) {
            if (_this._vueTypes_isLoose === true) return true;
            (0, _utils.warn)('shape - object is missing "' + key + '" property');
            return false;
          }
          var type = obj[key];
          return (0, _utils.validateType)(type, value[key]);
        });
      }
    });

    Object.defineProperty(type, '_vueTypes_isLoose', {
      enumerable: false,
      writable: true,
      value: false
    });

    Object.defineProperty(type, 'loose', {
      get: function get() {
        this._vueTypes_isLoose = true;
        return this;
      },

      enumerable: false
    });

    return type;
  }
};

var typeDefaults = function typeDefaults() {
  return {
    func: undefined,
    bool: undefined,
    string: undefined,
    number: undefined,
    array: undefined,
    object: undefined,
    integer: undefined
  };
};

var currentDefaults = typeDefaults();

Object.defineProperty(VuePropTypes, 'sensibleDefaults', {
  enumerable: false,
  set: function set(value) {
    if (value === false) {
      currentDefaults = {};
    } else if (value === true) {
      currentDefaults = typeDefaults();
    } else if ((0, _isPlainObject2['default'])(value)) {
      currentDefaults = value;
    }
  },
  get: function get() {
    return currentDefaults;
  }
});

exports['default'] = VuePropTypes;

/***/ }),

/***/ "81b0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.antPortal = antPortal;
function antPortal(Vue) {
  return Vue.directive('ant-portal', {
    inserted: function inserted(el, binding) {
      var value = binding.value;

      var parentNode = typeof value === 'function' ? value(el) : value;
      if (parentNode !== el.parentNode) {
        parentNode.appendChild(el);
      }
    },
    componentUpdated: function componentUpdated(el, binding) {
      var value = binding.value;

      var parentNode = typeof value === 'function' ? value(el) : value;
      if (parentNode !== el.parentNode) {
        parentNode.appendChild(el);
      }
    }
  });
}

exports['default'] = {
  install: function install(Vue) {
    antPortal(Vue);
  }
};

/***/ }),

/***/ "8726":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _en_US = __webpack_require__("b655");

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__("ba1d");

var _en_US4 = _interopRequireDefault(_en_US3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Merge into a locale object
var locale = {
  lang: (0, _extends3['default'])({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, _en_US2['default']),
  timePickerLocale: (0, _extends3['default'])({}, _en_US4['default'])
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports['default'] = locale;

/***/ }),

/***/ "94ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = __webpack_require__("d46a");

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _default2['default'];

/***/ }),

/***/ "a0de":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
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

/***/ "b655":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};

/***/ }),

/***/ "ba1d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var locale = {
  placeholder: 'Select time'
};

exports['default'] = locale;

/***/ }),

/***/ "bad7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigConsumerProps = undefined;

var _renderEmpty = __webpack_require__("2b93");

var _renderEmpty2 = _interopRequireDefault(_renderEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ConfigConsumerProps = exports.ConfigConsumerProps = {
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return 'ant-' + suffixCls;
  },
  renderEmpty: _renderEmpty2['default']
};

/***/ }),

/***/ "baff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _antDirective = __webpack_require__("dda9");

var _antDirective2 = _interopRequireDefault(_antDirective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var base = {};
var install = function install(Vue) {
  base.Vue = Vue;
  Vue.use(_antDirective2['default']);
};
base.install = install;

exports['default'] = base;

/***/ }),

/***/ "bb78":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.validateType = exports.toType = exports.withRequired = exports.withDefault = exports.isFunction = exports.isArray = exports.isInteger = exports.has = exports.noop = exports.getNativeType = exports.getType = exports.hasOwn = undefined;

var _isPlainObject = __webpack_require__("60ed");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ObjProto = Object.prototype;
var toString = ObjProto.toString;
var hasOwn = exports.hasOwn = ObjProto.hasOwnProperty;

var FN_MATCH_REGEXP = /^\s*function (\w+)/;

// https://github.com/vuejs/vue/blob/dev/src/core/util/props.js#L159
var getType = exports.getType = function getType(fn) {
  var type = fn !== null && fn !== undefined ? fn.type ? fn.type : fn : null;
  var match = type && type.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};

var getNativeType = exports.getNativeType = function getNativeType(value) {
  if (value === null || value === undefined) return null;
  var match = value.constructor.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};

/**
 * No-op function
 */
var noop = exports.noop = function noop() {};

/**
 * Checks for a own property in an object
 *
 * @param {object} obj - Object
 * @param {string} prop - Property to check
 */
var has = exports.has = function has(obj, prop) {
  return hasOwn.call(obj, prop);
};

/**
 * Determines whether the passed value is an integer. Uses `Number.isInteger` if available
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean}
 */
var isInteger = exports.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to be tested for being an array.
 * @returns {boolean}
 */
var isArray = exports.isArray = Array.isArray || function (value) {
  return toString.call(value) === '[object Array]';
};

/**
 * Checks if a value is a function
 *
 * @param {any} value - Value to check
 * @returns {boolean}
 */
var isFunction = exports.isFunction = function isFunction(value) {
  return toString.call(value) === '[object Function]';
};

/**
 * Adds a `def` method to the object returning a new object with passed in argument as `default` property
 *
 * @param {object} type - Object to enhance
 */
var withDefault = exports.withDefault = function withDefault(type) {
  Object.defineProperty(type, 'def', {
    value: function value(def) {
      if (def === undefined && this['default'] === undefined) {
        this['default'] = undefined;
        return this;
      }
      if (!isFunction(def) && !validateType(this, def)) {
        warn(this._vueTypes_name + ' - invalid default value: "' + def + '"', def);
        return this;
      }
      this['default'] = isArray(def) || (0, _isPlainObject2['default'])(def) ? function () {
        return def;
      } : def;

      return this;
    },

    enumerable: false,
    writable: false
  });
};

/**
 * Adds a `isRequired` getter returning a new object with `required: true` key-value
 *
 * @param {object} type - Object to enhance
 */
var withRequired = exports.withRequired = function withRequired(type) {
  Object.defineProperty(type, 'isRequired', {
    get: function get() {
      this.required = true;
      return this;
    },

    enumerable: false
  });
};

/**
 * Adds `isRequired` and `def` modifiers to an object
 *
 * @param {string} name - Type internal name
 * @param {object} obj - Object to enhance
 * @returns {object}
 */
var toType = exports.toType = function toType(name, obj) {
  Object.defineProperty(obj, '_vueTypes_name', {
    enumerable: false,
    writable: false,
    value: name
  });
  withRequired(obj);
  withDefault(obj);

  if (isFunction(obj.validator)) {
    obj.validator = obj.validator.bind(obj);
  }
  return obj;
};

/**
 * Validates a given value against a prop type object
 *
 * @param {Object|*} type - Type to use for validation. Either a type object or a constructor
 * @param {*} value - Value to check
 * @param {boolean} silent - Silence warnings
 * @returns {boolean}
 */
var validateType = exports.validateType = function validateType(type, value) {
  var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var typeToCheck = type;
  var valid = true;
  var expectedType = void 0;
  if (!(0, _isPlainObject2['default'])(type)) {
    typeToCheck = { type: type };
  }
  var namePrefix = typeToCheck._vueTypes_name ? typeToCheck._vueTypes_name + ' - ' : '';

  if (hasOwn.call(typeToCheck, 'type') && typeToCheck.type !== null) {
    if (isArray(typeToCheck.type)) {
      valid = typeToCheck.type.some(function (type) {
        return validateType(type, value, true);
      });
      expectedType = typeToCheck.type.map(function (type) {
        return getType(type);
      }).join(' or ');
    } else {
      expectedType = getType(typeToCheck);

      if (expectedType === 'Array') {
        valid = isArray(value);
      } else if (expectedType === 'Object') {
        valid = (0, _isPlainObject2['default'])(value);
      } else if (expectedType === 'String' || expectedType === 'Number' || expectedType === 'Boolean' || expectedType === 'Function') {
        valid = getNativeType(value) === expectedType;
      } else {
        valid = value instanceof typeToCheck.type;
      }
    }
  }

  if (!valid) {
    silent === false && warn(namePrefix + 'value "' + value + '" should be of type "' + expectedType + '"');
    return false;
  }

  if (hasOwn.call(typeToCheck, 'validator') && isFunction(typeToCheck.validator)) {
    valid = typeToCheck.validator(value);
    if (!valid && silent === false) warn(namePrefix + 'custom validation failed');
    return valid;
  }
  return valid;
};

var warn = noop;

if (false) { var hasConsole; }

exports.warn = warn;

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

/***/ "c4ff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  functional: true,
  PRESENTED_IMAGE_DEFAULT: true,
  render: function render() {
    var h = arguments[0];

    return h(
      "svg",
      {
        attrs: { width: "184", height: "152", viewBox: "0 0 184 152", xmlns: "http://www.w3.org/2000/svg" }
      },
      [h(
        "g",
        {
          attrs: { fill: "none", fillRule: "evenodd" }
        },
        [h(
          "g",
          {
            attrs: { transform: "translate(24 31.67)" }
          },
          [h("ellipse", {
            attrs: {
              fillOpacity: ".8",
              fill: "#F5F5F7",
              cx: "67.797",
              cy: "106.89",
              rx: "67.797",
              ry: "12.668"
            }
          }), h("path", {
            attrs: {
              d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
              fill: "#AEB8C2"
            }
          }), h("path", {
            attrs: {
              d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
              fill: "url(#linearGradient-1)",
              transform: "translate(13.56)"
            }
          }), h("path", {
            attrs: {
              d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
              fill: "#F5F5F7"
            }
          }), h("path", {
            attrs: {
              d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
              fill: "#DCE0E6"
            }
          })]
        ), h("path", {
          attrs: {
            d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
            fill: "#DCE0E6"
          }
        }), h(
          "g",
          {
            attrs: { transform: "translate(149.65 15.383)", fill: "#FFF" }
          },
          [h("ellipse", {
            attrs: { cx: "20.654", cy: "3.167", rx: "2.849", ry: "2.815" }
          }), h("path", {
            attrs: { d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" }
          })]
        )]
      )]
    );
  }
};

/***/ }),

/***/ "d2f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports.cloneVNode = cloneVNode;
exports.cloneVNodes = cloneVNodes;
exports.cloneElement = cloneElement;

var _propsUtil = __webpack_require__("73c8");

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function cloneVNode(vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var data = vnode.data;

  var listeners = {};
  if (componentOptions && componentOptions.listeners) {
    listeners = (0, _extends3['default'])({}, componentOptions.listeners);
  }

  var on = {};
  if (data && data.on) {
    on = (0, _extends3['default'])({}, data.on);
  }

  var cloned = new vnode.constructor(vnode.tag, data ? (0, _extends3['default'])({}, data, { on: on }) : data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions ? (0, _extends3['default'])({}, componentOptions, { listeners: listeners }) : componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned;
}

function cloneVNodes(vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res;
}

function cloneElement(n) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var deep = arguments[2];

  var ele = n;
  if (Array.isArray(n)) {
    ele = (0, _propsUtil.filterEmpty)(n)[0];
  }
  if (!ele) {
    return null;
  }
  var node = cloneVNode(ele, deep);
  // // 函数式组件不支持clone  https://github.com/vueComponent/ant-design-vue/pull/1947
  // warning(
  //   !(node.fnOptions && node.fnOptions.functional),
  //   `can not use cloneElement for functional component (${node.fnOptions && node.fnOptions.name})`,
  // );
  var _nodeProps$props = nodeProps.props,
      props = _nodeProps$props === undefined ? {} : _nodeProps$props,
      key = nodeProps.key,
      _nodeProps$on = nodeProps.on,
      on = _nodeProps$on === undefined ? {} : _nodeProps$on,
      _nodeProps$nativeOn = nodeProps.nativeOn,
      nativeOn = _nodeProps$nativeOn === undefined ? {} : _nodeProps$nativeOn,
      children = nodeProps.children,
      _nodeProps$directives = nodeProps.directives,
      directives = _nodeProps$directives === undefined ? [] : _nodeProps$directives;

  var data = node.data || {};
  var cls = {};
  var style = {};
  var _nodeProps$attrs = nodeProps.attrs,
      attrs = _nodeProps$attrs === undefined ? {} : _nodeProps$attrs,
      ref = nodeProps.ref,
      _nodeProps$domProps = nodeProps.domProps,
      domProps = _nodeProps$domProps === undefined ? {} : _nodeProps$domProps,
      _nodeProps$style = nodeProps.style,
      tempStyle = _nodeProps$style === undefined ? {} : _nodeProps$style,
      _nodeProps$class = nodeProps['class'],
      tempCls = _nodeProps$class === undefined ? {} : _nodeProps$class,
      _nodeProps$scopedSlot = nodeProps.scopedSlots,
      scopedSlots = _nodeProps$scopedSlot === undefined ? {} : _nodeProps$scopedSlot;


  if (typeof data.style === 'string') {
    style = (0, _propsUtil.parseStyleText)(data.style);
  } else {
    style = (0, _extends3['default'])({}, data.style, style);
  }
  if (typeof tempStyle === 'string') {
    style = (0, _extends3['default'])({}, style, (0, _propsUtil.parseStyleText)(style));
  } else {
    style = (0, _extends3['default'])({}, style, tempStyle);
  }

  if (typeof data['class'] === 'string' && data['class'].trim() !== '') {
    data['class'].split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(data['class'])) {
    (0, _classnames2['default'])(data['class']).split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0, _extends3['default'])({}, data['class'], cls);
  }
  if (typeof tempCls === 'string' && tempCls.trim() !== '') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0, _extends3['default'])({}, cls, tempCls);
  }
  node.data = (0, _extends3['default'])({}, data, {
    style: style,
    attrs: (0, _extends3['default'])({}, data.attrs, attrs),
    'class': cls,
    domProps: (0, _extends3['default'])({}, data.domProps, domProps),
    scopedSlots: (0, _extends3['default'])({}, data.scopedSlots, scopedSlots),
    directives: [].concat((0, _toConsumableArray3['default'])(data.directives || []), (0, _toConsumableArray3['default'])(directives))
  });

  if (node.componentOptions) {
    node.componentOptions.propsData = node.componentOptions.propsData || {};
    node.componentOptions.listeners = node.componentOptions.listeners || {};
    node.componentOptions.propsData = (0, _extends3['default'])({}, node.componentOptions.propsData, props);
    node.componentOptions.listeners = (0, _extends3['default'])({}, node.componentOptions.listeners, on);
    if (children) {
      node.componentOptions.children = children;
    }
  } else {
    if (children) {
      node.children = children;
    }
    node.data.on = (0, _extends3['default'])({}, node.data.on || {}, on);
  }
  node.data.on = (0, _extends3['default'])({}, node.data.on || {}, nativeOn);

  if (key !== undefined) {
    node.key = key;
    node.data.key = key;
  }
  if (typeof ref === 'string') {
    node.data.ref = ref;
  }
  return node;
}

/***/ }),

/***/ "d46a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__("a0de");

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__("8726");

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__("ba1d");

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__("0978");

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  locale: 'en',
  Pagination: _en_US2['default'],
  DatePicker: _en_US4['default'],
  TimePicker: _en_US6['default'],
  Calendar: _en_US8['default'],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  }
};

/***/ }),

/***/ "dda9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueRef = __webpack_require__("46cf");

var _vueRef2 = _interopRequireDefault(_vueRef);

var _antInputDirective = __webpack_require__("fcb9");

var _FormDecoratorDirective = __webpack_require__("e7c4");

var _portalDirective = __webpack_require__("81b0");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  install: function install(Vue) {
    Vue.use(_vueRef2['default'], { name: 'ant-ref' });
    (0, _antInputDirective.antInput)(Vue);
    (0, _FormDecoratorDirective.antDecorator)(Vue);
    (0, _portalDirective.antPortal)(Vue);
  }
};

/***/ }),

/***/ "e098":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;

/***/ }),

/***/ "e7c4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.antDecorator = antDecorator;
function antDecorator(Vue) {
  return Vue.directive('decorator', {});
}

exports['default'] = {
  // just for tag
  install: function install(Vue) {
    antDecorator(Vue);
  }
};

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

/***/ }),

/***/ "fcb9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.antInput = antInput;
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var inBrowser = exports.inBrowser = typeof window !== 'undefined';
var UA = exports.UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE9 = exports.isIE9 = UA && UA.indexOf('msie 9.0') > 0;
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
var isTextInputType = makeMap('text,number,password,search,email,tel,url');

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) return;
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

function antInput(Vue) {
  return Vue.directive('ant-input', {
    inserted: function inserted(el, binding, vnode) {
      if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        if (!binding.modifiers || !binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    }
  });
}

exports['default'] = {
  install: function install(Vue) {
    antInput(Vue);
  }
};

/***/ })

}]);