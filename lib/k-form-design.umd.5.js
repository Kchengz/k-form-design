((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[5],{

/***/ "0055":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultProps = exports.defaultProps = {
  // className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  // style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};
var mixedType = _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].string]);

var propTypes = exports.propTypes = {
  // className: PropTypes.string,
  percent: _vueTypes2['default'].oneOfType([mixedType, _vueTypes2['default'].arrayOf(mixedType)]),
  prefixCls: _vueTypes2['default'].string,
  strokeColor: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object])), _vueTypes2['default'].object]),
  strokeLinecap: _vueTypes2['default'].oneOf(['butt', 'round', 'square']),
  strokeWidth: mixedType,
  // style: PropTypes.object,
  trailColor: _vueTypes2['default'].string,
  trailWidth: mixedType
};

/***/ }),

/***/ "02d7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _uid = __webpack_require__("5e22");

var _uid2 = _interopRequireDefault(_uid);

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999
};

// diferent from AjaxUpload, can only upload on at one time, serial seriously
var IframeUploader = {
  mixins: [_BaseMixin2['default']],
  props: {
    componentTag: _vueTypes2['default'].string,
    // style: PropTypes.object,
    disabled: _vueTypes2['default'].bool,
    prefixCls: _vueTypes2['default'].string,
    // className: PropTypes.string,
    accept: _vueTypes2['default'].string,
    // onStart: PropTypes.func,
    multiple: _vueTypes2['default'].bool,
    // children: PropTypes.any,
    data: _vueTypes2['default'].oneOfType([_vueTypes2['default'].object, _vueTypes2['default'].func]),
    action: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].func]),
    name: _vueTypes2['default'].string
  },
  data: function data() {
    this.file = {};
    return {
      uploading: false
    };
  },

  methods: {
    onLoad: function onLoad() {
      if (!this.uploading) {
        return;
      }
      var file = this.file;

      var response = void 0;
      try {
        var doc = this.getIframeDocument();
        var script = doc.getElementsByTagName('script')[0];
        if (script && script.parentNode === doc.body) {
          doc.body.removeChild(script);
        }
        response = doc.body.innerHTML;
        this.$emit('success', response, file);
      } catch (err) {
        (0, _warning2['default'])(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
        response = 'cross-domain';
        this.$emit('error', err, null, file);
      }
      this.endUpload();
    },
    onChange: function onChange() {
      var _this = this;

      var target = this.getFormInputNode();
      // ie8/9 don't support FileList Object
      // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
      var file = this.file = {
        uid: (0, _uid2['default'])(),
        name: target.value && target.value.substring(target.value.lastIndexOf('\\') + 1, target.value.length)
      };
      this.startUpload();
      var props = this.$props;

      if (!props.beforeUpload) {
        return this.post(file);
      }
      var before = props.beforeUpload(file);
      if (before && before.then) {
        before.then(function () {
          _this.post(file);
        }, function () {
          _this.endUpload();
        });
      } else if (before !== false) {
        this.post(file);
      } else {
        this.endUpload();
      }
    },
    getIframeNode: function getIframeNode() {
      return this.$refs.iframeRef;
    },
    getIframeDocument: function getIframeDocument() {
      return this.getIframeNode().contentDocument;
    },
    getFormNode: function getFormNode() {
      return this.getIframeDocument().getElementById('form');
    },
    getFormInputNode: function getFormInputNode() {
      return this.getIframeDocument().getElementById('input');
    },
    getFormDataNode: function getFormDataNode() {
      return this.getIframeDocument().getElementById('data');
    },
    getFileForMultiple: function getFileForMultiple(file) {
      return this.multiple ? [file] : file;
    },
    getIframeHTML: function getIframeHTML(domain) {
      var domainScript = '';
      var domainInput = '';
      if (domain) {
        var script = 'script';
        domainScript = '<' + script + '>document.domain="' + domain + '";</' + script + '>';
        domainInput = '<input name="_documentDomain" value="' + domain + '" />';
      }
      return '\n      <!DOCTYPE html>\n      <html>\n      <head>\n      <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n      <style>\n      body,html {padding:0;margin:0;border:0;overflow:hidden;}\n      </style>\n      ' + domainScript + '\n      </head>\n      <body>\n      <form method="post"\n      encType="multipart/form-data"\n      action="" id="form"\n      style="display:block;height:9999px;position:relative;overflow:hidden;">\n      <input id="input" type="file"\n       name="' + this.name + '"\n       style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n      ' + domainInput + '\n      <span id="data"></span>\n      </form>\n      </body>\n      </html>\n      ';
    },
    initIframeSrc: function initIframeSrc() {
      if (this.domain) {
        this.getIframeNode().src = 'javascript:void((function(){\n          var d = document;\n          d.open();\n          d.domain=\'' + this.domain + '\';\n          d.write(\'\');\n          d.close();\n        })())';
      }
    },
    initIframe: function initIframe() {
      var iframeNode = this.getIframeNode();
      var win = iframeNode.contentWindow;
      var doc = void 0;
      this.domain = this.domain || '';
      this.initIframeSrc();
      try {
        doc = win.document;
      } catch (e) {
        this.domain = document.domain;
        this.initIframeSrc();
        win = iframeNode.contentWindow;
        doc = win.document;
      }
      doc.open('text/html', 'replace');
      doc.write(this.getIframeHTML(this.domain));
      doc.close();
      this.getFormInputNode().onchange = this.onChange;
    },
    endUpload: function endUpload() {
      if (this.uploading) {
        this.file = {};
        // hack avoid batch
        this.uploading = false;
        this.setState({
          uploading: false
        });
        this.initIframe();
      }
    },
    startUpload: function startUpload() {
      if (!this.uploading) {
        this.uploading = true;
        this.setState({
          uploading: true
        });
      }
    },
    updateIframeWH: function updateIframeWH() {
      var rootNode = this.$el;
      var iframeNode = this.getIframeNode();
      iframeNode.style.height = rootNode.offsetHeight + 'px';
      iframeNode.style.width = rootNode.offsetWidth + 'px';
    },
    abort: function abort(file) {
      if (file) {
        var uid = file;
        if (file && file.uid) {
          uid = file.uid;
        }
        if (uid === this.file.uid) {
          this.endUpload();
        }
      } else {
        this.endUpload();
      }
    },
    post: function post(file) {
      var _this2 = this;

      var formNode = this.getFormNode();
      var dataSpan = this.getFormDataNode();
      var data = this.$props.data;

      if (typeof data === 'function') {
        data = data(file);
      }
      var inputs = document.createDocumentFragment();
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var input = document.createElement('input');
          input.setAttribute('name', key);
          input.value = data[key];
          inputs.appendChild(input);
        }
      }
      dataSpan.appendChild(inputs);
      new Promise(function (resolve) {
        var action = _this2.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }
        resolve(action);
      }).then(function (action) {
        formNode.setAttribute('action', action);
        formNode.submit();
        dataSpan.innerHTML = '';
        _this2.$emit('start', file);
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.updateIframeWH();
      _this3.initIframe();
    });
  },
  updated: function updated() {
    var _this4 = this;

    this.$nextTick(function () {
      _this4.updateIframeWH();
    });
  },
  render: function render() {
    var _classNames;

    var h = arguments[0];
    var _$props = this.$props,
        Tag = _$props.componentTag,
        disabled = _$props.disabled,
        prefixCls = _$props.prefixCls;

    var iframeStyle = (0, _extends3['default'])({}, IFRAME_STYLE, {
      display: this.uploading || disabled ? 'none' : ''
    });
    var cls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));

    return h(
      Tag,
      {
        attrs: { className: cls },
        style: { position: 'relative', zIndex: 0 } },
      [h('iframe', { ref: 'iframeRef', on: {
          'load': this.onLoad
        },
        style: iframeStyle }), this.$slots['default']]
    );
  }
};

exports['default'] = IframeUploader;

/***/ }),

/***/ "0606":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _propsUtil = __webpack_require__("73c8");

var _Upload = __webpack_require__("eb7b");

var _Upload2 = _interopRequireDefault(_Upload);

var _interface = __webpack_require__("80b9");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'AUploadDragger',
  props: _interface.UploadProps,
  render: function render() {
    var h = arguments[0];

    var props = (0, _propsUtil.getOptionProps)(this);
    var draggerProps = {
      props: (0, _extends3['default'])({}, props, {
        type: 'drag'
      }),
      on: (0, _propsUtil.getListeners)(this),
      style: { height: this.height }
    };
    return h(
      _Upload2['default'],
      draggerProps,
      [this.$slots['default']]
    );
  }
};

/***/ }),

/***/ "099a":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


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

/***/ "1c87":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

var _vueRef = __webpack_require__("46cf");

var _vueRef2 = _interopRequireDefault(_vueRef);

var _propsUtil = __webpack_require__("73c8");

var _enhancer = __webpack_require__("e988");

var _enhancer2 = _interopRequireDefault(_enhancer);

var _types = __webpack_require__("0055");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_vue2['default'].use(_vueRef2['default'], { name: 'ant-ref' });

var Line = {
  props: (0, _propsUtil.initDefaultProps)(_types.propTypes, _types.defaultProps),
  created: function created() {
    this.paths = {};
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var _$props = this.$props,
        percent = _$props.percent,
        prefixCls = _$props.prefixCls,
        strokeColor = _$props.strokeColor,
        strokeLinecap = _$props.strokeLinecap,
        strokeWidth = _$props.strokeWidth,
        trailColor = _$props.trailColor,
        trailWidth = _$props.trailWidth,
        transition = _$props.transition,
        restProps = (0, _objectWithoutProperties3['default'])(_$props, ['percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'trailColor', 'trailWidth', 'transition']);


    delete restProps.gapPosition;

    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;

    var stackPtg = 0;

    var pathFirst = {
      attrs: {
        d: pathString,
        'stroke-linecap': strokeLinecap,
        stroke: trailColor,
        'stroke-width': trailWidth || strokeWidth,
        'fill-opacity': '0'
      },
      'class': prefixCls + '-line-trail'
    };
    return h(
      'svg',
      (0, _babelHelperVueJsxMergeProps2['default'])([{
        'class': prefixCls + '-line',
        attrs: { viewBox: viewBoxString,
          preserveAspectRatio: 'none'
        }
      }, restProps]),
      [h('path', pathFirst), percentList.map(function (ptg, index) {
        var pathStyle = {
          strokeDasharray: ptg + 'px, 100px',
          strokeDashoffset: '-' + stackPtg + 'px',
          transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
        };
        var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];

        stackPtg += ptg;

        var pathProps = {
          key: index,
          attrs: {
            d: pathString,
            'stroke-linecap': strokeLinecap,
            stroke: color,
            'stroke-width': strokeWidth,
            'fill-opacity': '0'
          },
          'class': prefixCls + '-line-path',
          style: pathStyle,
          directives: [{
            name: 'ant-ref',
            value: function value(c) {
              _this.paths[index] = c;
            }
          }]
        };

        return h('path', pathProps);
      })]
    );
  }
};

exports['default'] = (0, _enhancer2['default'])(Line);

/***/ }),

/***/ "243f":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("48a0");

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ "25d7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  props: {
    prefixCls: _vueTypes2['default'].string,
    overlay: _vueTypes2['default'].any,
    trigger: _vueTypes2['default'].any
  },
  updated: function updated() {
    var trigger = this.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  },
  render: function render() {
    var h = arguments[0];
    var overlay = this.overlay,
        prefixCls = this.prefixCls;

    return h(
      'div',
      { 'class': prefixCls + '-inner', attrs: { role: 'tooltip' }
      },
      [typeof overlay === 'function' ? overlay() : overlay]
    );
  }
};

/***/ }),

/***/ "260e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGradient = exports.sortGradient = undefined;

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _slicedToArray2 = __webpack_require__("b24f");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _utils = __webpack_require__("a74f");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * {
 *   '0%': '#afc163',
 *   '75%': '#009900',
 *   '50%': 'green',     ====>     '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *   '25%': '#66FF00',
 *   '100%': '#ffffff'
 * }
 */
var sortGradient = exports.sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  // eslint-disable-next-line no-restricted-syntax
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(gradients)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = (0, _slicedToArray3['default'])(_ref, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      var formatKey = parseFloat(key.replace(/%/g, ''));
      if (isNaN(formatKey)) {
        return {};
      }
      tempArr.push({
        key: formatKey,
        value: value
      });
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

  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref3) {
    var key = _ref3.key,
        value = _ref3.value;
    return value + ' ' + key + '%';
  }).join(', ');
};

/**
 * {
 *   '0%': '#afc163',
 *   '25%': '#66FF00',
 *   '50%': '#00CC00',     ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *   '75%': '#009900',              #00CC00 50%, #009900 75%, #ffffff 100%)
 *   '100%': '#ffffff'
 * }
 *
 * Then this man came to realize the truth:
 * Besides six pence, there is the moon.
 * Besides bread and butter, there is the bug.
 * And...
 * Besides women, there is the code.
 */
var handleGradient = function handleGradient(strokeColor) {
  var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === undefined ? '#1890ff' : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === undefined ? '#1890ff' : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === undefined ? 'to right' : _strokeColor$directio,
      rest = (0, _objectWithoutProperties3['default'])(strokeColor, ['from', 'to', 'direction']);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return { backgroundImage: 'linear-gradient(' + direction + ', ' + sortedGradients + ')' };
  }
  return { backgroundImage: 'linear-gradient(' + direction + ', ' + from + ', ' + to + ')' };
};

exports.handleGradient = handleGradient;
var Line = {
  functional: true,
  render: function render(h, context) {
    var props = context.props,
        children = context.children;
    var prefixCls = props.prefixCls,
        percent = props.percent,
        successPercent = props.successPercent,
        strokeWidth = props.strokeWidth,
        size = props.size,
        strokeColor = props.strokeColor,
        strokeLinecap = props.strokeLinecap;

    var backgroundProps = void 0;
    if (strokeColor && typeof strokeColor !== 'string') {
      backgroundProps = handleGradient(strokeColor);
    } else {
      backgroundProps = {
        background: strokeColor
      };
    }
    var percentStyle = (0, _extends3['default'])({
      width: (0, _utils.validProgress)(percent) + '%',
      height: (strokeWidth || (size === 'small' ? 6 : 8)) + 'px',
      background: strokeColor,
      borderRadius: strokeLinecap === 'square' ? 0 : '100px'
    }, backgroundProps);
    var successPercentStyle = {
      width: (0, _utils.validProgress)(successPercent) + '%',
      height: (strokeWidth || (size === 'small' ? 6 : 8)) + 'px',
      borderRadius: strokeLinecap === 'square' ? 0 : ''
    };
    var successSegment = successPercent !== undefined ? h('div', { 'class': prefixCls + '-success-bg', style: successPercentStyle }) : null;
    return h('div', [h(
      'div',
      { 'class': prefixCls + '-outer' },
      [h(
        'div',
        { 'class': prefixCls + '-inner' },
        [h('div', { 'class': prefixCls + '-bg', style: percentStyle }), successSegment]
      )]
    ), children]);
  }
};

exports['default'] = Line;

/***/ }),

/***/ "2c66":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("d612"),
    arrayIncludes = __webpack_require__("8db3"),
    arrayIncludesWith = __webpack_require__("5edf"),
    cacheHas = __webpack_require__("c584"),
    createSet = __webpack_require__("750a"),
    setToArray = __webpack_require__("ac41");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "2d2a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _AjaxUploader = __webpack_require__("7f91");

var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

var _IframeUploader = __webpack_require__("02d7");

var _IframeUploader2 = _interopRequireDefault(_IframeUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function empty() {}

var uploadProps = {
  componentTag: _vueTypes2['default'].string,
  prefixCls: _vueTypes2['default'].string,
  action: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].func]),
  name: _vueTypes2['default'].string,
  multipart: _vueTypes2['default'].bool,
  directory: _vueTypes2['default'].bool,
  // onError: PropTypes.func,
  // onSuccess: PropTypes.func,
  // onProgress: PropTypes.func,
  // onStart: PropTypes.func,
  data: _vueTypes2['default'].oneOfType([_vueTypes2['default'].object, _vueTypes2['default'].func]),
  headers: _vueTypes2['default'].object,
  accept: _vueTypes2['default'].string,
  multiple: _vueTypes2['default'].bool,
  disabled: _vueTypes2['default'].bool,
  beforeUpload: _vueTypes2['default'].func,
  customRequest: _vueTypes2['default'].func,
  // onReady: PropTypes.func,
  method: _vueTypes2['default'].string,
  withCredentials: _vueTypes2['default'].bool,
  supportServerRender: _vueTypes2['default'].bool,
  openFileDialogOnClick: _vueTypes2['default'].bool,
  transformFile: _vueTypes2['default'].func
};
exports['default'] = {
  name: 'Upload',
  mixins: [_BaseMixin2['default']],
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(uploadProps, {
    componentTag: 'span',
    prefixCls: 'rc-upload',
    data: {},
    headers: {},
    name: 'file',
    multipart: false,
    // onReady: empty,
    // onStart: empty,
    // onError: empty,
    // onSuccess: empty,
    supportServerRender: false,
    multiple: false,
    beforeUpload: empty,
    withCredentials: false,
    openFileDialogOnClick: true
  }),
  data: function data() {
    return {
      Component: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.supportServerRender) {
        _this.setState({
          Component: _this.getComponent()
        }, function () {
          _this.$emit('ready');
        });
      }
    });
  },

  methods: {
    getComponent: function getComponent() {
      return typeof File !== 'undefined' ? _AjaxUploader2['default'] : _IframeUploader2['default'];
    },
    abort: function abort(file) {
      this.$refs.uploaderRef.abort(file);
    }
  },

  render: function render() {
    var h = arguments[0];

    var componentProps = {
      props: (0, _extends3['default'])({}, this.$props),
      on: (0, _propsUtil.getListeners)(this),
      ref: 'uploaderRef',
      attrs: this.$attrs
    };
    if (this.supportServerRender) {
      var _ComponentUploader = this.Component;
      if (_ComponentUploader) {
        return h(
          _ComponentUploader,
          componentProps,
          [this.$slots['default']]
        );
      }
      return null;
    }
    var ComponentUploader = this.getComponent();
    return h(
      ComponentUploader,
      componentProps,
      [this.$slots['default']]
    );
  }
};

/***/ }),

/***/ "2e37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vcProgress = __webpack_require__("63f9");

var _utils = __webpack_require__("a74f");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068'
};

function getPercentage(_ref) {
  var percent = _ref.percent,
      successPercent = _ref.successPercent;

  var ptg = (0, _utils.validProgress)(percent);
  if (!successPercent) return ptg;

  var successPtg = (0, _utils.validProgress)(successPercent);
  return [successPercent, (0, _utils.validProgress)(ptg - successPtg)];
}

function getStrokeColor(_ref2) {
  var progressStatus = _ref2.progressStatus,
      successPercent = _ref2.successPercent,
      strokeColor = _ref2.strokeColor;

  var color = strokeColor || statusColorMap[progressStatus];
  if (!successPercent) return color;
  return [statusColorMap.success, color];
}

var Circle = {
  functional: true,
  render: function render(h, context) {
    var _wrapperClassName;

    var props = context.props,
        children = context.children;
    var prefixCls = props.prefixCls,
        width = props.width,
        strokeWidth = props.strokeWidth,
        trailColor = props.trailColor,
        strokeLinecap = props.strokeLinecap,
        gapPosition = props.gapPosition,
        gapDegree = props.gapDegree,
        type = props.type;

    var circleSize = width || 120;
    var circleStyle = {
      width: typeof circleSize === 'number' ? circleSize + 'px' : circleSize,
      height: typeof circleSize === 'number' ? circleSize + 'px' : circleSize,
      fontSize: circleSize * 0.15 + 6
    };
    var circleWidth = strokeWidth || 6;
    var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
    var gapDeg = gapDegree || type === 'dashboard' && 75;
    var strokeColor = getStrokeColor(props);
    var isGradient = Object.prototype.toString.call(strokeColor) === '[object Object]';

    var wrapperClassName = (_wrapperClassName = {}, (0, _defineProperty3['default'])(_wrapperClassName, prefixCls + '-inner', true), (0, _defineProperty3['default'])(_wrapperClassName, prefixCls + '-circle-gradient', isGradient), _wrapperClassName);

    return h(
      'div',
      { 'class': wrapperClassName, style: circleStyle },
      [h(_vcProgress.Circle, {
        attrs: {
          percent: getPercentage(props),
          strokeWidth: circleWidth,
          trailWidth: circleWidth,
          strokeColor: strokeColor,
          strokeLinecap: strokeLinecap,
          trailColor: trailColor,
          prefixCls: prefixCls,
          gapDegree: gapDeg,
          gapPosition: gapPos
        }
      }), children]
    );
  }
};

exports['default'] = Circle;

/***/ }),

/***/ "2ee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressProps = exports.ProgressSize = exports.ProgressType = undefined;

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

var _configConsumerProps = __webpack_require__("bad7");

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _line = __webpack_require__("260e");

var _line2 = _interopRequireDefault(_line);

var _circle = __webpack_require__("2e37");

var _circle2 = _interopRequireDefault(_circle);

var _utils = __webpack_require__("a74f");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ProgressStatuses = ['normal', 'exception', 'active', 'success'];
var ProgressType = exports.ProgressType = _vueTypes2['default'].oneOf(['line', 'circle', 'dashboard']);
var ProgressSize = exports.ProgressSize = _vueTypes2['default'].oneOf(['default', 'small']);

var ProgressProps = exports.ProgressProps = {
  prefixCls: _vueTypes2['default'].string,
  type: ProgressType,
  percent: _vueTypes2['default'].number,
  successPercent: _vueTypes2['default'].number,
  format: _vueTypes2['default'].func,
  status: _vueTypes2['default'].oneOf(ProgressStatuses),
  showInfo: _vueTypes2['default'].bool,
  strokeWidth: _vueTypes2['default'].number,
  strokeLinecap: _vueTypes2['default'].oneOf(['butt', 'round', 'square']),
  strokeColor: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object]),
  trailColor: _vueTypes2['default'].string,
  width: _vueTypes2['default'].number,
  gapDegree: _vueTypes2['default'].number,
  gapPosition: _vueTypes2['default'].oneOf(['top', 'bottom', 'left', 'right']),
  size: ProgressSize
};

exports['default'] = {
  name: 'AProgress',
  props: (0, _propsUtil.initDefaultProps)(ProgressProps, {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    size: 'default',
    gapDegree: 0,
    strokeLinecap: 'round'
  }),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  methods: {
    getPercentNumber: function getPercentNumber() {
      var _$props = this.$props,
          successPercent = _$props.successPercent,
          _$props$percent = _$props.percent,
          percent = _$props$percent === undefined ? 0 : _$props$percent;

      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    },
    getProgressStatus: function getProgressStatus() {
      var status = this.$props.status;

      if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
        return 'success';
      }
      return status || 'normal';
    },
    renderProcessInfo: function renderProcessInfo(prefixCls, progressStatus) {
      var h = this.$createElement;
      var _$props2 = this.$props,
          showInfo = _$props2.showInfo,
          format = _$props2.format,
          type = _$props2.type,
          percent = _$props2.percent,
          successPercent = _$props2.successPercent;

      if (!showInfo) return null;

      var text = void 0;
      var textFormatter = format || this.$scopedSlots.format || function (percentNumber) {
        return percentNumber + '%';
      };
      var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';
      if (format || this.$scopedSlots.format || progressStatus !== 'exception' && progressStatus !== 'success') {
        text = textFormatter((0, _utils.validProgress)(percent), (0, _utils.validProgress)(successPercent));
      } else if (progressStatus === 'exception') {
        text = h(_icon2['default'], {
          attrs: { type: 'close' + iconType, theme: type === 'line' ? 'filled' : 'outlined' }
        });
      } else if (progressStatus === 'success') {
        text = h(_icon2['default'], {
          attrs: { type: 'check' + iconType, theme: type === 'line' ? 'filled' : 'outlined' }
        });
      }
      return h(
        'span',
        { 'class': prefixCls + '-text', attrs: { title: typeof text === 'string' ? text : undefined }
        },
        [text]
      );
    }
  },
  render: function render() {
    var _classNames;

    var h = arguments[0];

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        size = props.size,
        type = props.type,
        showInfo = props.showInfo;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('progress', customizePrefixCls);
    var progressStatus = this.getProgressStatus();
    var progressInfo = this.renderProcessInfo(prefixCls, progressStatus);

    var progress = void 0;

    // Render progress shape
    if (type === 'line') {
      var lineProps = {
        props: (0, _extends3['default'])({}, props, {
          prefixCls: prefixCls
        })
      };
      progress = h(
        _line2['default'],
        lineProps,
        [progressInfo]
      );
    } else if (type === 'circle' || type === 'dashboard') {
      var circleProps = {
        props: (0, _extends3['default'])({}, props, {
          prefixCls: prefixCls,
          progressStatus: progressStatus
        })
      };
      progress = h(
        _circle2['default'],
        circleProps,
        [progressInfo]
      );
    }

    var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-show-info', showInfo), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, size), _classNames));

    var progressProps = {
      on: (0, _propsUtil.getListeners)(this),
      'class': classString
    };
    return h(
      'div',
      progressProps,
      [progress]
    );
  }
};

/***/ }),

/***/ "327d":
/***/ (function(module, exports, __webpack_require__) {

var createAggregator = __webpack_require__("50c6");

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 * _.partition(users, function(o) { return o.active; });
 * // => objects for [['fred'], ['barney', 'pebbles']]
 *
 * // The `_.matches` iteratee shorthand.
 * _.partition(users, { 'age': 1, 'active': false });
 * // => objects for [['pebbles'], ['barney', 'fred']]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.partition(users, ['active', false]);
 * // => objects for [['barney', 'pebbles'], ['fred']]
 *
 * // The `_.property` iteratee shorthand.
 * _.partition(users, 'active');
 * // => objects for [['fred'], ['barney', 'pebbles']]
 */
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });

module.exports = partition;


/***/ }),

/***/ "3432":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = exports.placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;

/***/ }),

/***/ "47f5":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("2b03"),
    baseIsNaN = __webpack_require__("d9a8"),
    strictIndexOf = __webpack_require__("099a");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "48a0":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("242e"),
    createBaseEach = __webpack_require__("950a");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "50c6":
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__("a0c4"),
    baseAggregator = __webpack_require__("243f"),
    baseIteratee = __webpack_require__("badf"),
    isArray = __webpack_require__("6747");

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


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

/***/ "5708":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports.getOverflowOptions = getOverflowOptions;
exports['default'] = getPlacements;

var _placements = __webpack_require__("3432");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};

var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};

var targetOffset = [0, 0];

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }
  return (0, _extends3['default'])({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}

function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === undefined ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === undefined ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === undefined ? 12 : _config$verticalArrow,
      _config$autoAdjustOve = config.autoAdjustOverflow,
      autoAdjustOverflow = _config$autoAdjustOve === undefined ? true : _config$autoAdjustOve;

  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? (0, _extends3['default'])({}, placementMap[key], {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : (0, _extends3['default'])({}, _placements.placements[key], {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}

/***/ }),

/***/ "5c25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cssAnimation = __webpack_require__("401b");

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var noop = function noop() {};
var getTransitionProps = function getTransitionProps(transitionName) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var beforeEnter = opt.beforeEnter,
      enter = opt.enter,
      afterEnter = opt.afterEnter,
      leave = opt.leave,
      afterLeave = opt.afterLeave,
      _opt$appear = opt.appear,
      appear = _opt$appear === undefined ? true : _opt$appear,
      tag = opt.tag,
      nativeOn = opt.nativeOn;

  var transitionProps = {
    props: {
      appear: appear,
      css: false
    },
    on: {
      beforeEnter: beforeEnter || noop,
      enter: enter || function (el, done) {
        (0, _cssAnimation2['default'])(el, transitionName + '-enter', done);
      },
      afterEnter: afterEnter || noop,
      leave: leave || function (el, done) {
        (0, _cssAnimation2['default'])(el, transitionName + '-leave', done);
      },
      afterLeave: afterLeave || noop
    },
    nativeOn: nativeOn
  };
  // transition-group
  if (tag) {
    transitionProps.tag = tag;
  }
  return transitionProps;
};

exports['default'] = getTransitionProps;

/***/ }),

/***/ "5e22":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = uid;
var now = +new Date();
var index = 0;

function uid() {
  return "vc-upload-" + now + "-" + ++index;
}

/***/ }),

/***/ "5edf":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "63f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = exports.Line = undefined;

var _src = __webpack_require__("9a4c");

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Line = _src.Line;
exports.Circle = _src.Circle; // based on rc-progress 2.5.2

exports['default'] = _src2['default'];

/***/ }),

/***/ "750a":
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__("c869"),
    noop = __webpack_require__("bcdf"),
    setToArray = __webpack_require__("ac41");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "77e4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = upload;
function getError(option, xhr) {
  var msg = 'cannot ' + option.method + ' ' + option.action + ' ' + xhr.status + '\'';
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
// }
function upload(option) {
  var xhr = new window.XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  var formData = new window.FormData();

  if (option.data) {
    Object.keys(option.data).forEach(function (key) {
      var value = option.data[key];
      // support key-value array data
      if (Array.isArray(value)) {
        value.forEach(function (item) {
          // { list: [ 11, 22 ] }
          // formData.append('list[]', 11);
          formData.append(key + '[]', item);
        });
        return;
      }

      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open(option.method, option.action, true);

  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  for (var h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);

  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}

/***/ }),

/***/ "797d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Upload = __webpack_require__("2d2a");

var _Upload2 = _interopRequireDefault(_Upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Upload2['default']; // export this package's api

/***/ }),

/***/ "7f91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _partition = __webpack_require__("327d");

var _partition2 = _interopRequireDefault(_partition);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _request = __webpack_require__("77e4");

var _request2 = _interopRequireDefault(_request);

var _uid = __webpack_require__("5e22");

var _uid2 = _interopRequireDefault(_uid);

var _attrAccept = __webpack_require__("cd24");

var _attrAccept2 = _interopRequireDefault(_attrAccept);

var _traverseFileTree = __webpack_require__("b938");

var _traverseFileTree2 = _interopRequireDefault(_traverseFileTree);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var upLoadPropTypes = {
  componentTag: _vueTypes2['default'].string,
  // style: PropTypes.object,
  prefixCls: _vueTypes2['default'].string,
  name: _vueTypes2['default'].string,
  // className: PropTypes.string,
  multiple: _vueTypes2['default'].bool,
  directory: _vueTypes2['default'].bool,
  disabled: _vueTypes2['default'].bool,
  accept: _vueTypes2['default'].string,
  // children: PropTypes.any,
  // onStart: PropTypes.func,
  data: _vueTypes2['default'].oneOfType([_vueTypes2['default'].object, _vueTypes2['default'].func]),
  action: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].func]),
  headers: _vueTypes2['default'].object,
  beforeUpload: _vueTypes2['default'].func,
  customRequest: _vueTypes2['default'].func,
  // onProgress: PropTypes.func,
  withCredentials: _vueTypes2['default'].bool,
  openFileDialogOnClick: _vueTypes2['default'].bool,
  transformFile: _vueTypes2['default'].func,
  method: _vueTypes2['default'].string
};

var AjaxUploader = {
  inheritAttrs: false,
  name: 'ajaxUploader',
  mixins: [_BaseMixin2['default']],
  props: upLoadPropTypes,
  data: function data() {
    this.reqs = {};
    return {
      uid: (0, _uid2['default'])()
    };
  },
  mounted: function mounted() {
    this._isMounted = true;
  },
  beforeDestroy: function beforeDestroy() {
    this._isMounted = false;
    this.abort();
  },

  methods: {
    onChange: function onChange(e) {
      var files = e.target.files;
      this.uploadFiles(files);
      this.reset();
    },
    onClick: function onClick() {
      var el = this.$refs.fileInputRef;
      if (!el) {
        return;
      }
      el.click();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        this.onClick();
      }
    },
    onFileDrop: function onFileDrop(e) {
      var _this = this;

      var multiple = this.$props.multiple;

      e.preventDefault();
      if (e.type === 'dragover') {
        return;
      }
      if (this.directory) {
        (0, _traverseFileTree2['default'])(e.dataTransfer.items, this.uploadFiles, function (_file) {
          return (0, _attrAccept2['default'])(_file, _this.accept);
        });
      } else {
        var files = (0, _partition2['default'])(Array.prototype.slice.call(e.dataTransfer.files), function (file) {
          return (0, _attrAccept2['default'])(file, _this.accept);
        });
        var successFiles = files[0];
        var errorFiles = files[1];
        if (multiple === false) {
          successFiles = successFiles.slice(0, 1);
        }
        this.uploadFiles(successFiles);

        if (errorFiles.length) {
          this.$emit('reject', errorFiles);
        }
      }
    },
    uploadFiles: function uploadFiles(files) {
      var _this2 = this;

      var postFiles = Array.prototype.slice.call(files);
      postFiles.map(function (file) {
        file.uid = (0, _uid2['default'])();
        return file;
      }).forEach(function (file) {
        _this2.upload(file, postFiles);
      });
    },
    upload: function upload(file, fileList) {
      var _this3 = this;

      if (!this.beforeUpload) {
        // always async in case use react state to keep fileList
        return setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }

      var before = this.beforeUpload(file, fileList);
      if (before && before.then) {
        before.then(function (processedFile) {
          var processedFileType = Object.prototype.toString.call(processedFile);
          if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
            return _this3.post(processedFile);
          }
          return _this3.post(file);
        })['catch'](function (e) {
          console && console.log(e); // eslint-disable-line
        });
      } else if (before !== false) {
        setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }
    },
    post: function post(file) {
      var _this4 = this;

      if (!this._isMounted) {
        return;
      }
      var props = this.$props;
      var data = props.data;
      var _props$transformFile = props.transformFile,
          transformFile = _props$transformFile === undefined ? function (originFile) {
        return originFile;
      } : _props$transformFile;


      new Promise(function (resolve) {
        var action = _this4.action;

        if (typeof action === 'function') {
          return resolve(action(file));
        }
        resolve(action);
      }).then(function (action) {
        var uid = file.uid;

        var request = _this4.customRequest || _request2['default'];
        var transform = Promise.resolve(transformFile(file))['catch'](function (e) {
          console.error(e); // eslint-disable-line no-console
        });
        transform.then(function (transformedFile) {
          if (typeof data === 'function') {
            data = data(file);
          }

          var requestOption = {
            action: action,
            filename: _this4.name,
            data: data,
            file: transformedFile,
            headers: _this4.headers,
            withCredentials: _this4.withCredentials,
            method: props.method || 'post',
            onProgress: function onProgress(e) {
              _this4.$emit('progress', e, file);
            },
            onSuccess: function onSuccess(ret, xhr) {
              delete _this4.reqs[uid];
              _this4.$emit('success', ret, file, xhr);
            },
            onError: function onError(err, ret) {
              delete _this4.reqs[uid];
              _this4.$emit('error', err, ret, file);
            }
          };
          _this4.reqs[uid] = request(requestOption);
          _this4.$emit('start', file);
        });
      });
    },
    reset: function reset() {
      this.setState({
        uid: (0, _uid2['default'])()
      });
    },
    abort: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file;
        if (file && file.uid) {
          uid = file.uid;
        }
        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }
        delete reqs[uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  },

  render: function render() {
    var _classNames;

    var h = arguments[0];
    var $props = this.$props,
        $attrs = this.$attrs;
    var Tag = $props.componentTag,
        prefixCls = $props.prefixCls,
        disabled = $props.disabled,
        multiple = $props.multiple,
        accept = $props.accept,
        directory = $props.directory,
        openFileDialogOnClick = $props.openFileDialogOnClick;

    var cls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));
    var events = disabled ? {} : {
      click: openFileDialogOnClick ? this.onClick : function () {},
      keydown: openFileDialogOnClick ? this.onKeyDown : function () {},
      drop: this.onFileDrop,
      dragover: this.onFileDrop
    };
    var tagProps = {
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), events),
      attrs: {
        role: 'button',
        tabIndex: disabled ? null : '0'
      },
      'class': cls
    };
    return h(
      Tag,
      tagProps,
      [h('input', {
        attrs: {
          id: $attrs.id,
          type: 'file',

          accept: accept,
          directory: directory ? 'directory' : null,
          webkitdirectory: directory ? 'webkitdirectory' : null,
          multiple: multiple
        },
        ref: 'fileInputRef',
        on: {
          'click': function click(e) {
            return e.stopPropagation();
          },
          'change': this.onChange
        },
        // https://github.com/ant-design/ant-design/issues/19948
        key: this.uid,
        style: { display: 'none' } }), this.$slots['default']]
    );
  }
};

exports['default'] = AjaxUploader;

/***/ }),

/***/ "80b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadListProps = exports.UploadState = exports.UploadProps = exports.UploadLocale = exports.ShowUploadListInterface = exports.UploadChangeParam = exports.UploadFileStatus = undefined;

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UploadFileStatus = exports.UploadFileStatus = _vueTypes2['default'].oneOf(['error', 'success', 'done', 'uploading', 'removed']);

// export const HttpRequestHeader {
//   [key: string]: string;
// }

// export const UploadFile = PropsTypes.shape({
//   uid: PropsTypes.oneOfType([
//     PropsTypes.string,
//     PropsTypes.number,
//   ]),
//   size: PropsTypes.number,
//   name: PropsTypes.string,
//   filename: PropsTypes.string,
//   lastModified: PropsTypes.number,
//   lastModifiedDate: PropsTypes.any,
//   url: PropsTypes.string,
//   status: UploadFileStatus,
//   percent: PropsTypes.number,
//   thumbUrl: PropsTypes.string,
//   originFileObj: PropsTypes.any,
//   response: PropsTypes.any,
//   error: PropsTypes.any,
//   linkProps: PropsTypes.any,
//   type: PropsTypes.string,
// }).loose

function UploadFile(_ref) {
  var uid = _ref.uid,
      name = _ref.name;

  if (!uid && uid !== 0) return false;
  if (!['string', 'number'].includes(typeof uid === 'undefined' ? 'undefined' : (0, _typeof3['default'])(uid))) return false;
  if (name === '' || typeof name !== 'string') return false;
  return true;
}

var UploadChangeParam = exports.UploadChangeParam = {
  file: _vueTypes2['default'].custom(UploadFile),
  fileList: _vueTypes2['default'].arrayOf(_vueTypes2['default'].custom(UploadFile)),
  event: _vueTypes2['default'].object
};

var ShowUploadListInterface = exports.ShowUploadListInterface = _vueTypes2['default'].shape({
  showRemoveIcon: _vueTypes2['default'].bool,
  showPreviewIcon: _vueTypes2['default'].bool
}).loose;

var UploadLocale = exports.UploadLocale = _vueTypes2['default'].shape({
  uploading: _vueTypes2['default'].string,
  removeFile: _vueTypes2['default'].string,
  downloadFile: _vueTypes2['default'].string,
  uploadError: _vueTypes2['default'].string,
  previewFile: _vueTypes2['default'].string
}).loose;

var UploadProps = exports.UploadProps = {
  type: _vueTypes2['default'].oneOf(['drag', 'select']),
  name: _vueTypes2['default'].string,
  defaultFileList: _vueTypes2['default'].arrayOf(_vueTypes2['default'].custom(UploadFile)),
  fileList: _vueTypes2['default'].arrayOf(_vueTypes2['default'].custom(UploadFile)),
  action: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].func]),
  directory: _vueTypes2['default'].bool,
  data: _vueTypes2['default'].oneOfType([_vueTypes2['default'].object, _vueTypes2['default'].func]),
  method: _vueTypes2['default'].oneOf(['POST', 'PUT', 'post', 'put']),
  headers: _vueTypes2['default'].object,
  showUploadList: _vueTypes2['default'].oneOfType([_vueTypes2['default'].bool, ShowUploadListInterface]),
  multiple: _vueTypes2['default'].bool,
  accept: _vueTypes2['default'].string,
  beforeUpload: _vueTypes2['default'].func,
  // onChange: PropsTypes.func,
  listType: _vueTypes2['default'].oneOf(['text', 'picture', 'picture-card']),
  // className: PropsTypes.string,
  // onPreview: PropsTypes.func,
  remove: _vueTypes2['default'].func,
  supportServerRender: _vueTypes2['default'].bool,
  // style: PropsTypes.object,
  disabled: _vueTypes2['default'].bool,
  prefixCls: _vueTypes2['default'].string,
  customRequest: _vueTypes2['default'].func,
  withCredentials: _vueTypes2['default'].bool,
  openFileDialogOnClick: _vueTypes2['default'].bool,
  locale: UploadLocale,
  height: _vueTypes2['default'].number,
  id: _vueTypes2['default'].string,
  previewFile: _vueTypes2['default'].func,
  transformFile: _vueTypes2['default'].func
};

var UploadState = exports.UploadState = {
  fileList: _vueTypes2['default'].arrayOf(_vueTypes2['default'].custom(UploadFile)),
  dragState: _vueTypes2['default'].string
};

var UploadListProps = exports.UploadListProps = {
  listType: _vueTypes2['default'].oneOf(['text', 'picture', 'picture-card']),
  // onPreview: PropsTypes.func,
  // onRemove: PropsTypes.func,
  // items: PropsTypes.arrayOf(UploadFile),
  items: _vueTypes2['default'].arrayOf(_vueTypes2['default'].custom(UploadFile)),
  // items: PropsTypes.any,
  progressAttr: _vueTypes2['default'].object,
  prefixCls: _vueTypes2['default'].string,
  showRemoveIcon: _vueTypes2['default'].bool,
  showDownloadIcon: _vueTypes2['default'].bool,
  showPreviewIcon: _vueTypes2['default'].bool,
  locale: UploadLocale,
  previewFile: _vueTypes2['default'].func
};

/***/ }),

/***/ "828a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var triggerType = _vueTypes2['default'].oneOf(['hover', 'focus', 'click', 'contextmenu']);

exports['default'] = function () {
  return {
    trigger: _vueTypes2['default'].oneOfType([triggerType, _vueTypes2['default'].arrayOf(triggerType)]).def('hover'),
    visible: _vueTypes2['default'].bool,
    defaultVisible: _vueTypes2['default'].bool,
    placement: _vueTypes2['default'].oneOf(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']).def('top'),
    transitionName: _vueTypes2['default'].string.def('zoom-big-fast'),
    // onVisibleChange: PropTypes.func,
    overlayStyle: _vueTypes2['default'].object.def(function () {
      return {};
    }),
    overlayClassName: _vueTypes2['default'].string,
    prefixCls: _vueTypes2['default'].string,
    mouseEnterDelay: _vueTypes2['default'].number.def(0.1),
    mouseLeaveDelay: _vueTypes2['default'].number.def(0.1),
    getPopupContainer: _vueTypes2['default'].func,
    arrowPointAtCenter: _vueTypes2['default'].bool.def(false),
    autoAdjustOverflow: _vueTypes2['default'].oneOfType([_vueTypes2['default'].bool, _vueTypes2['default'].object]).def(true),
    destroyTooltipOnHide: _vueTypes2['default'].bool.def(false),
    align: _vueTypes2['default'].object.def(function () {
      return {};
    }),
    builtinPlacements: _vueTypes2['default'].object
  };
};

/***/ }),

/***/ "8b6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImageUrl = undefined;

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports.T = T;
exports.fileToObject = fileToObject;
exports.genPercentAdd = genPercentAdd;
exports.getFileItem = getFileItem;
exports.removeFileItem = removeFileItem;
exports.previewImage = previewImage;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function T() {
  return true;
}

// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
  return (0, _extends3['default'])({}, file, {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}

/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
  var k = 0.1;
  var i = 0.01;
  var end = 0.98;
  return function (s) {
    var start = s;
    if (start >= end) {
      return start;
    }

    start += k;
    k = k - i;
    if (k < 0.001) {
      k = 0.001;
    }
    return start;
  };
}

function getFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter(function (item) {
    return item[matchKey] === file[matchKey];
  })[0];
}

function removeFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  var removed = fileList.filter(function (item) {
    return item[matchKey] !== file[matchKey];
  });
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}

// ==================== Default Image Preview ====================
var extname = function extname() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var temp = url.split('/');
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

var isImageFileType = function isImageFileType(type) {
  return !!type && type.indexOf('image/') === 0;
};

var isImageUrl = exports.isImageUrl = function isImageUrl(file) {
  if (isImageFileType(file.type)) {
    return true;
  }
  var url = file.thumbUrl || file.url;
  var extension = extname(url);
  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }
  if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  }
  if (extension) {
    // other file types which have extension
    return false;
  }
  return true;
};

var MEASURE_SIZE = 200;
function previewImage(file) {
  return new Promise(function (resolve) {
    if (!isImageFileType(file.type)) {
      resolve('');
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = 'position: fixed; left: 0; top: 0; width: ' + MEASURE_SIZE + 'px; height: ' + MEASURE_SIZE + 'px; z-index: 9999; display: none;';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function () {
      var width = img.width,
          height = img.height;


      var drawWidth = MEASURE_SIZE;
      var drawHeight = MEASURE_SIZE;
      var offsetX = 0;
      var offsetY = 0;

      if (width < height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      var dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);

      resolve(dataURL);
    };
    img.src = window.URL.createObjectURL(file);
  });
}

/***/ }),

/***/ "8db3":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("47f5");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "9098":
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

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("73c8");

var _getTransitionProps = __webpack_require__("5c25");

var _getTransitionProps2 = _interopRequireDefault(_getTransitionProps);

var _configConsumerProps = __webpack_require__("bad7");

var _utils = __webpack_require__("8b6b");

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _tooltip = __webpack_require__("edb7");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _progress = __webpack_require__("b025");

var _progress2 = _interopRequireDefault(_progress);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _interface = __webpack_require__("80b9");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'AUploadList',
  mixins: [_BaseMixin2['default']],
  props: (0, _propsUtil.initDefaultProps)(_interface.UploadListProps, {
    listType: 'text', // or picture
    progressAttr: {
      strokeWidth: 2,
      showInfo: false
    },
    showRemoveIcon: true,
    showDownloadIcon: false,
    showPreviewIcon: true,
    previewFile: _utils.previewImage
  }),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      var _$props = _this.$props,
          listType = _$props.listType,
          items = _$props.items,
          previewFile = _$props.previewFile;

      if (listType !== 'picture' && listType !== 'picture-card') {
        return;
      }
      (items || []).forEach(function (file) {
        if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
          return;
        }
        /*eslint-disable */
        file.thumbUrl = '';
        if (previewFile) {
          previewFile(file.originFileObj).then(function (previewDataUrl) {
            // Need append '' to avoid dead loop
            file.thumbUrl = previewDataUrl || '';
            _this.$forceUpdate();
          });
        }
      });
    });
  },

  methods: {
    handlePreview: function handlePreview(file, e) {
      var _getListeners = (0, _propsUtil.getListeners)(this),
          preview = _getListeners.preview;

      if (!preview) {
        return;
      }
      e.preventDefault();
      return this.$emit('preview', file);
    },
    handleDownload: function handleDownload(file) {
      var _getListeners2 = (0, _propsUtil.getListeners)(this),
          download = _getListeners2.download;

      if (typeof download === 'function') {
        download(file);
      } else if (file.url) {
        window.open(file.url);
      }
    },
    handleClose: function handleClose(file) {
      this.$emit('remove', file);
    }
  },
  render: function render() {
    var _this2 = this,
        _classNames4;

    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        _getOptionProps$items = _getOptionProps.items,
        items = _getOptionProps$items === undefined ? [] : _getOptionProps$items,
        listType = _getOptionProps.listType,
        showPreviewIcon = _getOptionProps.showPreviewIcon,
        showRemoveIcon = _getOptionProps.showRemoveIcon,
        showDownloadIcon = _getOptionProps.showDownloadIcon,
        locale = _getOptionProps.locale,
        progressAttr = _getOptionProps.progressAttr;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('upload', customizePrefixCls);

    var list = items.map(function (file) {
      var _classNames, _classNames2;

      var progress = void 0;
      var icon = h(_icon2['default'], {
        attrs: { type: file.status === 'uploading' ? 'loading' : 'paper-clip' }
      });

      if (listType === 'picture' || listType === 'picture-card') {
        if (listType === 'picture-card' && file.status === 'uploading') {
          icon = h(
            'div',
            { 'class': prefixCls + '-list-item-uploading-text' },
            [locale.uploading]
          );
        } else if (!file.thumbUrl && !file.url) {
          icon = h(_icon2['default'], { 'class': prefixCls + '-list-item-thumbnail', attrs: { type: 'picture', theme: 'twoTone' }
          });
        } else {
          var thumbnail = (0, _utils.isImageUrl)(file) ? h('img', {
            attrs: {
              src: file.thumbUrl || file.url,
              alt: file.name
            },
            'class': prefixCls + '-list-item-image'
          }) : h(_icon2['default'], {
            attrs: { type: 'file', theme: 'twoTone' },
            'class': prefixCls + '-list-item-icon' });
          icon = h(
            'a',
            {
              'class': prefixCls + '-list-item-thumbnail',
              on: {
                'click': function click(e) {
                  return _this2.handlePreview(file, e);
                }
              },
              attrs: {
                href: file.url || file.thumbUrl,
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            },
            [thumbnail]
          );
        }
      }

      if (file.status === 'uploading') {
        var progressProps = {
          props: (0, _extends3['default'])({}, progressAttr, {
            type: 'line',
            percent: file.percent
          })
        };
        // show loading icon if upload progress listener is disabled
        var loadingProgress = 'percent' in file ? h(_progress2['default'], progressProps) : null;

        progress = h(
          'div',
          { 'class': prefixCls + '-list-item-progress', key: 'progress' },
          [loadingProgress]
        );
      }
      var infoUploadingClass = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-list-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-list-item-' + file.status, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-list-item-list-type-' + listType, true), _classNames));
      var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;

      var removeIcon = showRemoveIcon ? h(_icon2['default'], {
        attrs: { type: 'delete', title: locale.removeFile },
        on: {
          'click': function click() {
            return _this2.handleClose(file);
          }
        }
      }) : null;
      var downloadIcon = showDownloadIcon && file.status === 'done' ? h(_icon2['default'], {
        attrs: {
          type: 'download',
          title: locale.downloadFile
        },
        on: {
          'click': function click() {
            return _this2.handleDownload(file);
          }
        }
      }) : null;
      var downloadOrDelete = listType !== 'picture-card' && h(
        'span',
        {
          key: 'download-delete',
          'class': prefixCls + '-list-item-card-actions ' + (listType === 'picture' ? 'picture' : '')
        },
        [downloadIcon && h(
          'a',
          {
            attrs: { title: locale.downloadFile }
          },
          [downloadIcon]
        ), removeIcon && h(
          'a',
          {
            attrs: { title: locale.removeFile }
          },
          [removeIcon]
        )]
      );
      var listItemNameClass = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-list-item-name', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-list-item-name-icon-count-' + [downloadIcon, removeIcon].filter(function (x) {
        return x;
      }).length, true), _classNames2));

      var preview = file.url ? [h(
        'a',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          attrs: {
            target: '_blank',
            rel: 'noopener noreferrer',

            title: file.name
          },
          'class': listItemNameClass }, linkProps, {
          attrs: {
            href: file.url
          },
          on: {
            'click': function click(e) {
              return _this2.handlePreview(file, e);
            }
          }
        }]),
        [file.name]
      ), downloadOrDelete] : [h(
        'span',
        {
          key: 'view',
          'class': prefixCls + '-list-item-name',
          on: {
            'click': function click(e) {
              return _this2.handlePreview(file, e);
            }
          },
          attrs: {
            title: file.name
          }
        },
        [file.name]
      ), downloadOrDelete];
      var style = file.url || file.thumbUrl ? undefined : {
        pointerEvents: 'none',
        opacity: 0.5
      };
      var previewIcon = showPreviewIcon ? h(
        'a',
        {
          attrs: {
            href: file.url || file.thumbUrl,
            target: '_blank',
            rel: 'noopener noreferrer',

            title: locale.previewFile
          },
          style: style,
          on: {
            'click': function click(e) {
              return _this2.handlePreview(file, e);
            }
          }
        },
        [h(_icon2['default'], {
          attrs: { type: 'eye-o' }
        })]
      ) : null;
      var actions = listType === 'picture-card' && file.status !== 'uploading' && h(
        'span',
        { 'class': prefixCls + '-list-item-actions' },
        [previewIcon, file.status === 'done' && downloadIcon, removeIcon]
      );
      var message = void 0;
      if (file.response && typeof file.response === 'string') {
        message = file.response;
      } else {
        message = file.error && file.error.statusText || locale.uploadError;
      }
      var iconAndPreview = h('span', [icon, preview]);
      var transitionProps = (0, _getTransitionProps2['default'])('fade');
      var dom = h(
        'div',
        { 'class': infoUploadingClass, key: file.uid },
        [h(
          'div',
          { 'class': prefixCls + '-list-item-info' },
          [iconAndPreview]
        ), actions, h(
          'transition',
          transitionProps,
          [progress]
        )]
      );
      var listContainerNameClass = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-list-picture-card-container', listType === 'picture-card'));
      return h(
        'div',
        { key: file.uid, 'class': listContainerNameClass },
        [file.status === 'error' ? h(
          _tooltip2['default'],
          {
            attrs: { title: message }
          },
          [dom]
        ) : h('span', [dom])]
      );
    });
    var listClassNames = (0, _classnames2['default'])((_classNames4 = {}, (0, _defineProperty3['default'])(_classNames4, prefixCls + '-list', true), (0, _defineProperty3['default'])(_classNames4, prefixCls + '-list-' + listType, true), _classNames4));
    var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
    var transitionGroupProps = (0, _getTransitionProps2['default'])(prefixCls + '-' + animationDirection);
    return h(
      'transition-group',
      (0, _babelHelperVueJsxMergeProps2['default'])([transitionGroupProps, {
        attrs: { tag: 'div' },
        'class': listClassNames }]),
      [list]
    );
  }
};

/***/ }),

/***/ "950a":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("30c9");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "9a4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = exports.Line = undefined;

var _Line = __webpack_require__("1c87");

var _Line2 = _interopRequireDefault(_Line);

var _Circle = __webpack_require__("9e98");

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Line = _Line2['default'];
exports.Circle = _Circle2['default'];
exports['default'] = {
  Line: _Line2['default'],
  Circle: _Circle2['default']
};

/***/ }),

/***/ "9e98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

var _vueRef = __webpack_require__("46cf");

var _vueRef2 = _interopRequireDefault(_vueRef);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

var _enhancer = __webpack_require__("e988");

var _enhancer2 = _interopRequireDefault(_enhancer);

var _types = __webpack_require__("0055");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var circlePropTypes = (0, _extends3['default'])({}, _types.propTypes, {
  gapPosition: _vueTypes2['default'].oneOf(['top', 'bottom', 'left', 'right']),
  gapDegree: _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].string, _vueTypes2['default'].bool])
});

var circleDefaultProps = (0, _extends3['default'])({}, _types.defaultProps, {
  gapPosition: 'top'
});

_vue2['default'].use(_vueRef2['default'], { name: 'ant-ref' });

var gradientSeed = 0;

function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}

function toArray(symArray) {
  return Array.isArray(symArray) ? symArray : [symArray];
}

function getPathStyles(offset, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gapPosition = arguments[5];

  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;
  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;
    case 'right':
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;
    case 'bottom':
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;
    default:
  }
  var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n   a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n   a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
  var len = Math.PI * 2 * radius;

  var pathStyle = {
    stroke: strokeColor,
    strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
    strokeDashoffset: '-' + (gapDegree / 2 + offset / 100 * (len - gapDegree)) + 'px',
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s' // eslint-disable-line
  };

  return {
    pathString: pathString,
    pathStyle: pathStyle
  };
}

var Circle = {
  props: (0, _propsUtil.initDefaultProps)(circlePropTypes, circleDefaultProps),
  created: function created() {
    this.paths = {};
    this.gradientId = gradientSeed;
    gradientSeed += 1;
  },

  methods: {
    getStokeList: function getStokeList() {
      var _this = this;

      var h = this.$createElement;
      var _$props = this.$props,
          prefixCls = _$props.prefixCls,
          percent = _$props.percent,
          strokeColor = _$props.strokeColor,
          strokeWidth = _$props.strokeWidth,
          strokeLinecap = _$props.strokeLinecap,
          gapDegree = _$props.gapDegree,
          gapPosition = _$props.gapPosition;

      var percentList = toArray(percent);
      var strokeColorList = toArray(strokeColor);

      var stackPtg = 0;
      return percentList.map(function (ptg, index) {
        var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
        var stroke = Object.prototype.toString.call(color) === '[object Object]' ? 'url(#' + prefixCls + '-gradient-' + _this.gradientId + ')' : '';

        var _getPathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition),
            pathString = _getPathStyles.pathString,
            pathStyle = _getPathStyles.pathStyle;

        stackPtg += ptg;

        var pathProps = {
          key: index,
          attrs: {
            d: pathString,
            stroke: stroke,
            'stroke-linecap': strokeLinecap,
            'stroke-width': strokeWidth,
            opacity: ptg === 0 ? 0 : 1,
            'fill-opacity': '0'
          },
          'class': prefixCls + '-circle-path',
          style: pathStyle,
          directives: [{
            name: 'ant-ref',
            value: function value(c) {
              _this.paths[index] = c;
            }
          }]
        };
        return h('path', pathProps);
      });
    }
  },

  render: function render() {
    var h = arguments[0];
    var _$props2 = this.$props,
        prefixCls = _$props2.prefixCls,
        strokeWidth = _$props2.strokeWidth,
        trailWidth = _$props2.trailWidth,
        gapDegree = _$props2.gapDegree,
        gapPosition = _$props2.gapPosition,
        trailColor = _$props2.trailColor,
        strokeLinecap = _$props2.strokeLinecap,
        strokeColor = _$props2.strokeColor,
        restProps = (0, _objectWithoutProperties3['default'])(_$props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'gapDegree', 'gapPosition', 'trailColor', 'strokeLinecap', 'strokeColor']);

    var _getPathStyles2 = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
        pathString = _getPathStyles2.pathString,
        pathStyle = _getPathStyles2.pathStyle;

    delete restProps.percent;
    var strokeColorList = toArray(strokeColor);
    var gradient = strokeColorList.find(function (color) {
      return Object.prototype.toString.call(color) === '[object Object]';
    });
    var pathFirst = {
      attrs: {
        d: pathString,
        stroke: trailColor,
        'stroke-linecap': strokeLinecap,
        'stroke-width': trailWidth || strokeWidth,
        'fill-opacity': '0'
      },
      'class': prefixCls + '-circle-trail',
      style: pathStyle
    };

    return h(
      'svg',
      (0, _babelHelperVueJsxMergeProps2['default'])([{ 'class': prefixCls + '-circle', attrs: { viewBox: '0 0 100 100' }
      }, restProps]),
      [gradient && h('defs', [h(
        'linearGradient',
        {
          attrs: {
            id: prefixCls + '-gradient-' + this.gradientId,
            x1: '100%',
            y1: '0%',
            x2: '0%',
            y2: '0%'
          }
        },
        [Object.keys(gradient).sort(function (a, b) {
          return stripPercentToNumber(a) - stripPercentToNumber(b);
        }).map(function (key, index) {
          return h('stop', { key: index, attrs: { offset: key, 'stop-color': gradient[key] }
          });
        })]
      )]), h('path', pathFirst), this.getStokeList().reverse()]
    );
  }
};

exports['default'] = (0, _enhancer2['default'])(Circle);

/***/ }),

/***/ "a0c4":
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ "a74f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validProgress = validProgress;
function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}

/***/ }),

/***/ "a8fc":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("badf"),
    baseUniq = __webpack_require__("2c66");

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ "b025":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressProps = undefined;

var _progress = __webpack_require__("2ee4");

Object.defineProperty(exports, 'ProgressProps', {
  enumerable: true,
  get: function get() {
    return _progress.ProgressProps;
  }
});

var _progress2 = _interopRequireDefault(_progress);

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* istanbul ignore next */
_progress2['default'].install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(_progress2['default'].name, _progress2['default']);
};

exports['default'] = _progress2['default'];

/***/ }),

/***/ "b10b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vnode = __webpack_require__("d2f9");

var _vcTooltip = __webpack_require__("f6b7");

var _vcTooltip2 = _interopRequireDefault(_vcTooltip);

var _placements = __webpack_require__("5708");

var _placements2 = _interopRequireDefault(_placements);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

var _configConsumerProps = __webpack_require__("bad7");

var _abstractTooltipProps = __webpack_require__("828a");

var _abstractTooltipProps2 = _interopRequireDefault(_abstractTooltipProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var splitObject = function splitObject(obj, keys) {
  var picked = {};
  var omitted = (0, _extends3['default'])({}, obj);
  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return { picked: picked, omitted: omitted };
};
var props = (0, _abstractTooltipProps2['default'])();
exports['default'] = {
  name: 'ATooltip',
  model: {
    prop: 'visible',
    event: 'visibleChange'
  },
  props: (0, _extends3['default'])({}, props, {
    title: _vueTypes2['default'].any
  }),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  data: function data() {
    return {
      sVisible: !!this.$props.visible || !!this.$props.defaultVisible
    };
  },

  watch: {
    visible: function visible(val) {
      this.sVisible = val;
    }
  },
  methods: {
    onVisibleChange: function onVisibleChange(visible) {
      if (!(0, _propsUtil.hasProp)(this, 'visible')) {
        this.sVisible = this.isNoTitle() ? false : visible;
      }
      if (!this.isNoTitle()) {
        this.$emit('visibleChange', visible);
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.tooltip.getPopupDomNode();
    },
    getPlacements: function getPlacements() {
      var _$props = this.$props,
          builtinPlacements = _$props.builtinPlacements,
          arrowPointAtCenter = _$props.arrowPointAtCenter,
          autoAdjustOverflow = _$props.autoAdjustOverflow;

      return builtinPlacements || (0, _placements2['default'])({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    },


    // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18
    getDisabledCompatibleChildren: function getDisabledCompatibleChildren(ele) {
      var h = this.$createElement;

      var options = ele.componentOptions && ele.componentOptions.Ctor.options || {};

      if ((options.__ANT_BUTTON === true || options.__ANT_SWITCH === true || options.__ANT_CHECKBOX === true) && (ele.componentOptions.propsData.disabled || ele.componentOptions.propsData.disabled === '') || ele.tag === 'button' && ele.data && ele.data.attrs && ele.data.attrs.disabled !== undefined) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject((0, _propsUtil.getStyle)(ele), ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;

        var spanStyle = (0, _extends3['default'])({
          display: 'inline-block' }, picked, {
          cursor: 'not-allowed',
          width: ele.componentOptions.propsData.block ? '100%' : null
        });
        var buttonStyle = (0, _extends3['default'])({}, omitted, {
          pointerEvents: 'none'
        });
        var spanCls = (0, _propsUtil.getClass)(ele);
        var child = (0, _vnode.cloneElement)(ele, {
          style: buttonStyle,
          'class': null
        });
        return h(
          'span',
          { style: spanStyle, 'class': spanCls },
          [child]
        );
      }
      return ele;
    },
    isNoTitle: function isNoTitle() {
      var title = (0, _propsUtil.getComponentFromProp)(this, 'title');
      return !title && title !== 0;
    },
    getOverlay: function getOverlay() {
      var title = (0, _propsUtil.getComponentFromProp)(this, 'title');
      if (title === 0) {
        return title;
      }
      return title || '';
    },


    // 动态设置动画点
    onPopupAlign: function onPopupAlign(domNode, align) {
      var placements = this.getPlacements();
      // 当前返回的位置
      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];
      if (!placement) {
        return;
      }
      // 根据当前坐标设置动画点
      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };
      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = rect.height - align.offset[1] + 'px';
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = -align.offset[1] + 'px';
      }
      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = rect.width - align.offset[0] + 'px';
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = -align.offset[0] + 'px';
      }
      domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
    }
  },

  render: function render() {
    var h = arguments[0];
    var $props = this.$props,
        $data = this.$data,
        $slots = this.$slots;
    var customizePrefixCls = $props.prefixCls,
        openClassName = $props.openClassName,
        getPopupContainer = $props.getPopupContainer;
    var getContextPopupContainer = this.configProvider.getPopupContainer;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
    var children = ($slots['default'] || []).filter(function (c) {
      return c.tag || c.text.trim() !== '';
    });
    children = children.length === 1 ? children[0] : children;
    var sVisible = $data.sVisible;
    // Hide tooltip when there is no title
    if (!(0, _propsUtil.hasProp)(this, 'visible') && this.isNoTitle()) {
      sVisible = false;
    }
    if (!children) {
      return null;
    }
    var child = this.getDisabledCompatibleChildren((0, _propsUtil.isValidElement)(children) ? children : h('span', [children]));
    var childCls = (0, _defineProperty3['default'])({}, openClassName || prefixCls + '-open', true);
    var tooltipProps = {
      props: (0, _extends3['default'])({}, $props, {
        prefixCls: prefixCls,
        getTooltipContainer: getPopupContainer || getContextPopupContainer,
        builtinPlacements: this.getPlacements(),
        overlay: this.getOverlay(),
        visible: sVisible
      }),
      ref: 'tooltip',
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
        visibleChange: this.onVisibleChange,
        popupAlign: this.onPopupAlign
      })
    };
    return h(
      _vcTooltip2['default'],
      tooltipProps,
      [sVisible ? (0, _vnode.cloneElement)(child, { 'class': childCls }) : child]
    );
  }
};

/***/ }),

/***/ "b938":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];

  function sequence() {
    dirReader.readEntries(function (entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList);

      // Check if all the file has been viewed
      var isFinished = !entryList.length;

      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }

  sequence();
}

var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
  var _traverseFileTree = function _traverseFileTree(item, path) {
    path = path || '';
    if (item.isFile) {
      item.file(function (file) {
        if (isAccepted(file)) {
          // https://github.com/ant-design/ant-design/issues/16426
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }
          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function (entries) {
        entries.forEach(function (entryItem) {
          _traverseFileTree(entryItem, '' + path + item.name + '/');
        });
      });
    }
  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var file = _step.value;

      _traverseFileTree(file.webkitGetAsEntry());
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
};

exports['default'] = traverseFileTree;

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

/***/ "bcdf":
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "cd24":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

exports['default'] = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');

    return acceptedFilesArray.some(function (type) {
      var validType = type.trim();
      if (validType.charAt(0) === '.') {
        return endsWith(fileName.toLowerCase(), validType.toLowerCase());
      } else if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
};

/***/ }),

/***/ "d9a8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "e1bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcTrigger = __webpack_require__("2f52");

var _vcTrigger2 = _interopRequireDefault(_vcTrigger);

var _placements = __webpack_require__("3432");

var _Content = __webpack_require__("25d7");

var _Content2 = _interopRequireDefault(_Content);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}
exports['default'] = {
  props: {
    trigger: _vueTypes2['default'].any.def(['hover']),
    defaultVisible: _vueTypes2['default'].bool,
    visible: _vueTypes2['default'].bool,
    placement: _vueTypes2['default'].string.def('right'),
    transitionName: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object]),
    animation: _vueTypes2['default'].any,
    afterVisibleChange: _vueTypes2['default'].func.def(function () {}),
    overlay: _vueTypes2['default'].any,
    overlayStyle: _vueTypes2['default'].object,
    overlayClassName: _vueTypes2['default'].string,
    prefixCls: _vueTypes2['default'].string.def('rc-tooltip'),
    mouseEnterDelay: _vueTypes2['default'].number.def(0),
    mouseLeaveDelay: _vueTypes2['default'].number.def(0.1),
    getTooltipContainer: _vueTypes2['default'].func,
    destroyTooltipOnHide: _vueTypes2['default'].bool.def(false),
    align: _vueTypes2['default'].object.def(function () {
      return {};
    }),
    arrowContent: _vueTypes2['default'].any.def(null),
    tipId: _vueTypes2['default'].string,
    builtinPlacements: _vueTypes2['default'].object
  },
  methods: {
    getPopupElement: function getPopupElement() {
      var h = this.$createElement;
      var _$props = this.$props,
          prefixCls = _$props.prefixCls,
          tipId = _$props.tipId;

      return [h(
        'div',
        { 'class': prefixCls + '-arrow', key: 'arrow' },
        [(0, _propsUtil.getComponentFromProp)(this, 'arrowContent')]
      ), h(_Content2['default'], {
        key: 'content',
        attrs: { trigger: this.$refs.trigger,
          prefixCls: prefixCls,
          id: tipId,
          overlay: (0, _propsUtil.getComponentFromProp)(this, 'overlay')
        }
      })];
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.trigger.getPopupDomNode();
    }
  },
  render: function render(h) {
    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        overlayClassName = _getOptionProps.overlayClassName,
        trigger = _getOptionProps.trigger,
        mouseEnterDelay = _getOptionProps.mouseEnterDelay,
        mouseLeaveDelay = _getOptionProps.mouseLeaveDelay,
        overlayStyle = _getOptionProps.overlayStyle,
        prefixCls = _getOptionProps.prefixCls,
        afterVisibleChange = _getOptionProps.afterVisibleChange,
        transitionName = _getOptionProps.transitionName,
        animation = _getOptionProps.animation,
        placement = _getOptionProps.placement,
        align = _getOptionProps.align,
        destroyTooltipOnHide = _getOptionProps.destroyTooltipOnHide,
        defaultVisible = _getOptionProps.defaultVisible,
        getTooltipContainer = _getOptionProps.getTooltipContainer,
        restProps = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = (0, _extends3['default'])({}, restProps);
    if ((0, _propsUtil.hasProp)(this, 'visible')) {
      extraProps.popupVisible = this.$props.visible;
    }
    var listeners = (0, _propsUtil.getListeners)(this);
    var triggerProps = {
      props: (0, _extends3['default'])({
        popupClassName: overlayClassName,
        prefixCls: prefixCls,
        action: trigger,
        builtinPlacements: _placements.placements,
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      on: (0, _extends3['default'])({}, listeners, {
        popupVisibleChange: listeners.visibleChange || noop,
        popupAlign: listeners.popupAlign || noop
      }),
      ref: 'trigger'
    };
    return h(
      _vcTrigger2['default'],
      triggerProps,
      [h(
        'template',
        { slot: 'popup' },
        [this.getPopupElement(h)]
      ), this.$slots['default']]
    );
  }
};

/***/ }),

/***/ "e363":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _src = __webpack_require__("797d");

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _src2['default']; // rc-upload 2.9.4

/***/ }),

/***/ "e988":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function enhancer(Component) {
  return {
    mixins: [Component],
    updated: function updated() {
      var _this = this;

      var now = Date.now();
      var updated = false;

      Object.keys(this.paths).forEach(function (key) {
        var path = _this.paths[key];

        if (!path) {
          return;
        }

        updated = true;
        var pathStyle = path.style;
        pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

        if (_this.prevTimeStamp && now - _this.prevTimeStamp < 100) {
          pathStyle.transitionDuration = '0s, 0s';
        }
      });
      if (updated) {
        this.prevTimeStamp = Date.now();
      }
    }
  };
}

exports['default'] = enhancer;

/***/ }),

/***/ "eb7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadProps = undefined;

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _uniqBy = __webpack_require__("a8fc");

var _uniqBy2 = _interopRequireDefault(_uniqBy);

var _findIndex = __webpack_require__("51f5");

var _findIndex2 = _interopRequireDefault(_findIndex);

var _pick = __webpack_require__("2593");

var _pick2 = _interopRequireDefault(_pick);

var _vcUpload = __webpack_require__("e363");

var _vcUpload2 = _interopRequireDefault(_vcUpload);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("73c8");

var _LocaleReceiver = __webpack_require__("3f5f");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default2 = __webpack_require__("94ef");

var _default3 = _interopRequireDefault(_default2);

var _configConsumerProps = __webpack_require__("bad7");

var _Dragger = __webpack_require__("0606");

var _Dragger2 = _interopRequireDefault(_Dragger);

var _UploadList = __webpack_require__("9098");

var _UploadList2 = _interopRequireDefault(_UploadList);

var _interface = __webpack_require__("80b9");

var _utils = __webpack_require__("8b6b");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.UploadProps = _interface.UploadProps;
exports['default'] = {
  name: 'AUpload',
  mixins: [_BaseMixin2['default']],
  inheritAttrs: false,
  Dragger: _Dragger2['default'],
  props: (0, _propsUtil.initDefaultProps)(_interface.UploadProps, {
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    beforeUpload: _utils.T,
    showUploadList: true,
    listType: 'text', // or pictrue
    disabled: false,
    supportServerRender: true
  }),
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  // recentUploadStatus: boolean | PromiseLike<any>;
  data: function data() {
    this.progressTimer = null;
    return {
      sFileList: this.fileList || this.defaultFileList || [],
      dragState: 'drop'
    };
  },

  watch: {
    fileList: function fileList(val) {
      this.sFileList = val || [];
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clearProgressTimer();
  },

  methods: {
    onStart: function onStart(file) {
      var targetItem = (0, _utils.fileToObject)(file);
      targetItem.status = 'uploading';
      var nextFileList = this.sFileList.concat();
      var fileIndex = (0, _findIndex2['default'])(nextFileList, function (_ref) {
        var uid = _ref.uid;
        return uid === targetItem.uid;
      });
      if (fileIndex === -1) {
        nextFileList.push(targetItem);
      } else {
        nextFileList[fileIndex] = targetItem;
      }
      this.onChange({
        file: targetItem,
        fileList: nextFileList
      });
      // fix ie progress
      if (!window.File || Object({"NODE_ENV":"production","BASE_URL":"/"}).TEST_IE) {
        this.autoUpdateProgress(0, targetItem);
      }
    },
    onSuccess: function onSuccess(response, file, xhr) {
      this.clearProgressTimer();
      try {
        if (typeof response === 'string') {
          response = JSON.parse(response);
        }
      } catch (e) {
        /* do nothing */
      }
      var fileList = this.sFileList;
      var targetItem = (0, _utils.getFileItem)(file, fileList);
      // removed
      if (!targetItem) {
        return;
      }
      targetItem.status = 'done';
      targetItem.response = response;
      targetItem.xhr = xhr;
      this.onChange({
        file: (0, _extends3['default'])({}, targetItem),
        fileList: fileList
      });
    },
    onProgress: function onProgress(e, file) {
      var fileList = this.sFileList;
      var targetItem = (0, _utils.getFileItem)(file, fileList);
      // removed
      if (!targetItem) {
        return;
      }
      targetItem.percent = e.percent;
      this.onChange({
        event: e,
        file: (0, _extends3['default'])({}, targetItem),
        fileList: this.sFileList
      });
    },
    onError: function onError(error, response, file) {
      this.clearProgressTimer();
      var fileList = this.sFileList;
      var targetItem = (0, _utils.getFileItem)(file, fileList);
      // removed
      if (!targetItem) {
        return;
      }
      targetItem.error = error;
      targetItem.response = response;
      targetItem.status = 'error';
      this.onChange({
        file: (0, _extends3['default'])({}, targetItem),
        fileList: fileList
      });
    },
    onReject: function onReject(fileList) {
      this.$emit('reject', fileList);
    },
    handleRemove: function handleRemove(file) {
      var _this = this;

      var onRemove = this.remove;
      var fileList = this.$data.sFileList;


      Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
        // Prevent removing file
        if (ret === false) {
          return;
        }

        var removedFileList = (0, _utils.removeFileItem)(file, fileList);

        if (removedFileList) {
          file.status = 'removed'; // eslint-disable-line

          if (_this.upload) {
            _this.upload.abort(file);
          }

          _this.onChange({
            file: file,
            fileList: removedFileList
          });
        }
      });
    },
    handleManualRemove: function handleManualRemove(file) {
      if (this.$refs.uploadRef) {
        this.$refs.uploadRef.abort(file);
      }
      this.handleRemove(file);
    },
    onChange: function onChange(info) {
      if (!(0, _propsUtil.hasProp)(this, 'fileList')) {
        this.setState({ sFileList: info.fileList });
      }
      this.$emit('change', info);
    },
    onFileDrop: function onFileDrop(e) {
      this.setState({
        dragState: e.type
      });
    },
    reBeforeUpload: function reBeforeUpload(file, fileList) {
      var beforeUpload = this.$props.beforeUpload;
      var stateFileList = this.$data.sFileList;

      if (!beforeUpload) {
        return true;
      }
      var result = beforeUpload(file, fileList);
      if (result === false) {
        this.onChange({
          file: file,
          fileList: (0, _uniqBy2['default'])(stateFileList.concat(fileList.map(_utils.fileToObject)), function (item) {
            return item.uid;
          })
        });
        return false;
      }
      if (result && result.then) {
        return result;
      }
      return true;
    },
    clearProgressTimer: function clearProgressTimer() {
      clearInterval(this.progressTimer);
    },
    autoUpdateProgress: function autoUpdateProgress(_, file) {
      var _this2 = this;

      var getPercent = (0, _utils.genPercentAdd)();
      var curPercent = 0;
      this.clearProgressTimer();
      this.progressTimer = setInterval(function () {
        curPercent = getPercent(curPercent);
        _this2.onProgress({
          percent: curPercent * 100
        }, file);
      }, 200);
    },
    renderUploadList: function renderUploadList(locale) {
      var h = this.$createElement;

      var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
          _getOptionProps$showU = _getOptionProps.showUploadList,
          showUploadList = _getOptionProps$showU === undefined ? {} : _getOptionProps$showU,
          listType = _getOptionProps.listType,
          previewFile = _getOptionProps.previewFile,
          disabled = _getOptionProps.disabled,
          propLocale = _getOptionProps.locale;

      var showRemoveIcon = showUploadList.showRemoveIcon,
          showPreviewIcon = showUploadList.showPreviewIcon,
          showDownloadIcon = showUploadList.showDownloadIcon;
      var fileList = this.$data.sFileList;

      var uploadListProps = {
        props: {
          listType: listType,
          items: fileList,
          previewFile: previewFile,
          showRemoveIcon: !disabled && showRemoveIcon,
          showPreviewIcon: showPreviewIcon,
          showDownloadIcon: showDownloadIcon,
          locale: (0, _extends3['default'])({}, locale, propLocale)
        },
        on: (0, _extends3['default'])({
          remove: this.handleManualRemove
        }, (0, _pick2['default'])((0, _propsUtil.getListeners)(this), ['download', 'preview']))
      };
      return h(_UploadList2['default'], uploadListProps);
    }
  },
  render: function render() {
    var _classNames2;

    var h = arguments[0];

    var _getOptionProps2 = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps2.prefixCls,
        showUploadList = _getOptionProps2.showUploadList,
        listType = _getOptionProps2.listType,
        type = _getOptionProps2.type,
        disabled = _getOptionProps2.disabled;

    var _$data = this.$data,
        fileList = _$data.sFileList,
        dragState = _$data.dragState;

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('upload', customizePrefixCls);

    var vcUploadProps = {
      props: (0, _extends3['default'])({}, this.$props, {
        prefixCls: prefixCls,
        beforeUpload: this.reBeforeUpload
      }),
      on: {
        start: this.onStart,
        error: this.onError,
        progress: this.onProgress,
        success: this.onSuccess,
        reject: this.onReject
      },
      ref: 'uploadRef',
      attrs: (0, _extends3['default'])({}, this.$attrs)
    };
    var children = this.$slots['default'];
    // Remove id to avoid open by label when trigger is hidden
    // https://github.com/ant-design/ant-design/issues/14298
    if (!children || disabled) {
      delete vcUploadProps.props.id;
      delete vcUploadProps.attrs.id;
    }
    var uploadList = showUploadList ? h(_LocaleReceiver2['default'], {
      attrs: {
        componentName: 'Upload',
        defaultLocale: _default3['default'].Upload
      },
      scopedSlots: { 'default': this.renderUploadList }
    }) : null;

    if (type === 'drag') {
      var _classNames;

      var dragCls = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-drag', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-drag-uploading', fileList.some(function (file) {
        return file.status === 'uploading';
      })), (0, _defineProperty3['default'])(_classNames, prefixCls + '-drag-hover', dragState === 'dragover'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));
      return h('span', [h(
        'div',
        {
          'class': dragCls,
          on: {
            'drop': this.onFileDrop,
            'dragover': this.onFileDrop,
            'dragleave': this.onFileDrop
          }
        },
        [h(
          _vcUpload2['default'],
          (0, _babelHelperVueJsxMergeProps2['default'])([vcUploadProps, { 'class': prefixCls + '-btn' }]),
          [h(
            'div',
            { 'class': prefixCls + '-drag-container' },
            [children]
          )]
        )]
      ), uploadList]);
    }

    var uploadButtonCls = (0, _classnames2['default'])(prefixCls, (_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-select', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-select-' + listType, true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-disabled', disabled), _classNames2));

    var uploadButton = h(
      'div',
      { 'class': uploadButtonCls, style: children ? undefined : { display: 'none' } },
      [h(
        _vcUpload2['default'],
        vcUploadProps,
        [children]
      )]
    );

    if (listType === 'picture-card') {
      return h(
        'span',
        { 'class': prefixCls + '-picture-card-wrapper' },
        [uploadList, uploadButton]
      );
    }
    return h('span', [uploadButton, uploadList]);
  }
};

/***/ }),

/***/ "edb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tooltip = __webpack_require__("b10b");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* istanbul ignore next */
_Tooltip2['default'].install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(_Tooltip2['default'].name, _Tooltip2['default']);
};

exports['default'] = _Tooltip2['default'];

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

/***/ "f6b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tooltip = __webpack_require__("e1bc");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Tooltip2['default']; // based on rc-tooltip 3.7.3

/***/ })

}]);