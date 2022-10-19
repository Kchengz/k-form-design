((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[4],{

/***/ "3962":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__("c1df");

var _moment2 = _interopRequireDefault(_moment);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _Header = __webpack_require__("dfc9");

var _Header2 = _interopRequireDefault(_Header);

var _Combobox = __webpack_require__("b6d6");

var _Combobox2 = _interopRequireDefault(_Combobox);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var arr = [];
  for (var value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

function toNearestValidTime(time, hourOptions, minuteOptions, secondOptions) {
  var hour = hourOptions.slice().sort(function (a, b) {
    return Math.abs(time.hour() - a) - Math.abs(time.hour() - b);
  })[0];
  var minute = minuteOptions.slice().sort(function (a, b) {
    return Math.abs(time.minute() - a) - Math.abs(time.minute() - b);
  })[0];
  var second = secondOptions.slice().sort(function (a, b) {
    return Math.abs(time.second() - a) - Math.abs(time.second() - b);
  })[0];
  return (0, _moment2['default'])(hour + ':' + minute + ':' + second, 'HH:mm:ss');
}

var Panel = {
  mixins: [_BaseMixin2['default']],
  props: {
    clearText: _vueTypes2['default'].string,
    prefixCls: _vueTypes2['default'].string.def('rc-time-picker-panel'),
    defaultOpenValue: {
      type: Object,
      'default': function _default() {
        return (0, _moment2['default'])();
      }
    },
    value: _vueTypes2['default'].any,
    defaultValue: _vueTypes2['default'].any,
    placeholder: _vueTypes2['default'].string,
    format: _vueTypes2['default'].string,
    inputReadOnly: _vueTypes2['default'].bool.def(false),
    disabledHours: _vueTypes2['default'].func.def(noop),
    disabledMinutes: _vueTypes2['default'].func.def(noop),
    disabledSeconds: _vueTypes2['default'].func.def(noop),
    hideDisabledOptions: _vueTypes2['default'].bool,
    // onChange: PropTypes.func,
    // onEsc: PropTypes.func,
    allowEmpty: _vueTypes2['default'].bool,
    showHour: _vueTypes2['default'].bool,
    showMinute: _vueTypes2['default'].bool,
    showSecond: _vueTypes2['default'].bool,
    // onClear: PropTypes.func,
    use12Hours: _vueTypes2['default'].bool.def(false),
    hourStep: _vueTypes2['default'].number,
    minuteStep: _vueTypes2['default'].number,
    secondStep: _vueTypes2['default'].number,
    addon: _vueTypes2['default'].func.def(noop),
    focusOnOpen: _vueTypes2['default'].bool,
    // onKeydown: PropTypes.func,
    clearIcon: _vueTypes2['default'].any
  },
  data: function data() {
    return {
      sValue: this.value,
      selectionRange: [],
      currentSelectPanel: ''
    };
  },

  watch: {
    value: function value(val) {
      this.setState({
        sValue: val
      });
    }
  },

  methods: {
    onChange: function onChange(newValue) {
      this.setState({ sValue: newValue });
      this.__emit('change', newValue);
    },
    onAmPmChange: function onAmPmChange(ampm) {
      this.__emit('amPmChange', ampm);
    },
    onCurrentSelectPanelChange: function onCurrentSelectPanelChange(currentSelectPanel) {
      this.setState({ currentSelectPanel: currentSelectPanel });
    },


    // https://github.com/ant-design/ant-design/issues/5829
    close: function close() {
      this.__emit('esc');
    },
    onEsc: function onEsc(e) {
      this.__emit('esc', e);
    },
    disabledHours2: function disabledHours2() {
      var use12Hours = this.use12Hours,
          disabledHours = this.disabledHours;

      var disabledOptions = disabledHours();
      if (use12Hours && Array.isArray(disabledOptions)) {
        if (this.isAM()) {
          disabledOptions = disabledOptions.filter(function (h) {
            return h < 12;
          }).map(function (h) {
            return h === 0 ? 12 : h;
          });
        } else {
          disabledOptions = disabledOptions.map(function (h) {
            return h === 12 ? 12 : h - 12;
          });
        }
      }
      return disabledOptions;
    },
    isAM: function isAM() {
      var value = this.sValue || this.defaultOpenValue;
      return value.hour() >= 0 && value.hour() < 12;
    }
  },

  render: function render() {
    var h = arguments[0];
    var prefixCls = this.prefixCls,
        placeholder = this.placeholder,
        disabledMinutes = this.disabledMinutes,
        addon = this.addon,
        disabledSeconds = this.disabledSeconds,
        hideDisabledOptions = this.hideDisabledOptions,
        showHour = this.showHour,
        showMinute = this.showMinute,
        showSecond = this.showSecond,
        format = this.format,
        defaultOpenValue = this.defaultOpenValue,
        clearText = this.clearText,
        use12Hours = this.use12Hours,
        focusOnOpen = this.focusOnOpen,
        hourStep = this.hourStep,
        minuteStep = this.minuteStep,
        secondStep = this.secondStep,
        inputReadOnly = this.inputReadOnly,
        sValue = this.sValue,
        currentSelectPanel = this.currentSelectPanel;

    var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');

    var _getListeners = (0, _propsUtil.getListeners)(this),
        _getListeners$esc = _getListeners.esc,
        esc = _getListeners$esc === undefined ? noop : _getListeners$esc,
        _getListeners$keydown = _getListeners.keydown,
        keydown = _getListeners$keydown === undefined ? noop : _getListeners$keydown;

    var disabledHourOptions = this.disabledHours2();
    var disabledMinuteOptions = disabledMinutes(sValue ? sValue.hour() : null);
    var disabledSecondOptions = disabledSeconds(sValue ? sValue.hour() : null, sValue ? sValue.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);
    var validDefaultOpenValue = toNearestValidTime(defaultOpenValue, hourOptions, minuteOptions, secondOptions);
    return h(
      'div',
      { 'class': prefixCls + '-inner' },
      [h(_Header2['default'], {
        attrs: {
          clearText: clearText,
          prefixCls: prefixCls,
          defaultOpenValue: validDefaultOpenValue,
          value: sValue,
          currentSelectPanel: currentSelectPanel,

          format: format,
          placeholder: placeholder,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: this.disabledHours2,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,

          focusOnOpen: focusOnOpen,

          inputReadOnly: inputReadOnly,
          clearIcon: clearIcon
        },
        on: {
          'esc': esc,
          'change': this.onChange,
          'keydown': keydown
        }
      }), h(_Combobox2['default'], {
        attrs: {
          prefixCls: prefixCls,
          value: sValue,
          defaultOpenValue: validDefaultOpenValue,
          format: format,

          showHour: showHour,
          showMinute: showMinute,
          showSecond: showSecond,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: this.disabledHours2,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,

          use12Hours: use12Hours,

          isAM: this.isAM()
        },
        on: {
          'change': this.onChange,
          'amPmChange': this.onAmPmChange,
          'currentSelectPanelChange': this.onCurrentSelectPanelChange,
          'esc': this.onEsc
        }
      }), addon(this)]
    );
  }
};

exports['default'] = Panel;

/***/ }),

/***/ "628f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimePicker = __webpack_require__("ab96");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TimePicker)['default'];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ "86d2":
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

var placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;

/***/ }),

/***/ "9076":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _classnames2 = __webpack_require__("4d26");

var _classnames3 = _interopRequireDefault(_classnames2);

var _raf = __webpack_require__("c449");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}
var scrollTo = function scrollTo(element, to, duration) {
  // jump to target if duration zero
  if (duration <= 0) {
    (0, _raf2['default'])(function () {
      element.scrollTop = to;
    });
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  (0, _raf2['default'])(function () {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = {
  mixins: [_BaseMixin2['default']],
  props: {
    prefixCls: _vueTypes2['default'].string,
    options: _vueTypes2['default'].array,
    selectedIndex: _vueTypes2['default'].number,
    type: _vueTypes2['default'].string
    // onSelect: PropTypes.func,
    // onMouseEnter: PropTypes.func,
  },
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // jump to selected option
      _this.scrollToSelected(0);
    });
  },

  watch: {
    selectedIndex: function selectedIndex() {
      var _this2 = this;

      this.$nextTick(function () {
        // smooth scroll to selected option
        _this2.scrollToSelected(120);
      });
    }
  },
  methods: {
    onSelect: function onSelect(value) {
      var type = this.type;

      this.__emit('select', type, value);
    },
    onEsc: function onEsc(e) {
      this.__emit('esc', e);
    },
    getOptions: function getOptions() {
      var _this3 = this;

      var h = this.$createElement;
      var options = this.options,
          selectedIndex = this.selectedIndex,
          prefixCls = this.prefixCls;

      return options.map(function (item, index) {
        var _classnames;

        var cls = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), (0, _defineProperty3['default'])(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
        var onClick = item.disabled ? noop : function () {
          _this3.onSelect(item.value);
        };
        var onKeyDown = function onKeyDown(e) {
          if (e.keyCode === 13) onClick();else if (e.keyCode === 27) _this3.onEsc();
        };
        return h(
          'li',
          {
            attrs: {
              role: 'button',

              disabled: item.disabled,
              tabIndex: '0'
            },
            on: {
              'click': onClick,
              'keydown': onKeyDown
            },

            'class': cls,
            key: index },
          [item.value]
        );
      });
    },
    handleMouseEnter: function handleMouseEnter(e) {
      this.setState({ active: true });
      this.__emit('mouseenter', e);
    },
    handleMouseLeave: function handleMouseLeave() {
      this.setState({ active: false });
    },
    scrollToSelected: function scrollToSelected(duration) {
      // move to selected item
      var select = this.$el;
      var list = this.$refs.list;
      if (!list) {
        return;
      }
      var index = this.selectedIndex;
      if (index < 0) {
        index = 0;
      }
      var topOption = list.children[index];
      var to = topOption.offsetTop;
      scrollTo(select, to, duration);
    }
  },

  render: function render() {
    var _cls;

    var h = arguments[0];
    var prefixCls = this.prefixCls,
        options = this.options,
        active = this.active;

    if (options.length === 0) {
      return null;
    }

    var cls = (_cls = {}, (0, _defineProperty3['default'])(_cls, prefixCls + '-select', 1), (0, _defineProperty3['default'])(_cls, prefixCls + '-select-active', active), _cls);

    return h(
      'div',
      { 'class': cls, on: {
          'mouseenter': this.handleMouseEnter,
          'mouseleave': this.handleMouseLeave
        }
      },
      [h(
        'ul',
        { ref: 'list' },
        [this.getOptions()]
      )]
    );
  }
};

exports['default'] = Select;

/***/ }),

/***/ "ab96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _moment = __webpack_require__("c1df");

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("73c8");

var _vnode = __webpack_require__("d2f9");

var _vcTrigger = __webpack_require__("2f52");

var _vcTrigger2 = _interopRequireDefault(_vcTrigger);

var _Panel = __webpack_require__("3962");

var _Panel2 = _interopRequireDefault(_Panel);

var _placements = __webpack_require__("86d2");

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

exports['default'] = {
  name: 'VcTimePicker',
  mixins: [_BaseMixin2['default']],
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes2['default'].string,
    clearText: _vueTypes2['default'].string,
    value: _vueTypes2['default'].any,
    defaultOpenValue: {
      type: Object,
      'default': function _default() {
        return (0, _moment2['default'])();
      }
    },
    inputReadOnly: _vueTypes2['default'].bool,
    disabled: _vueTypes2['default'].bool,
    allowEmpty: _vueTypes2['default'].bool,
    defaultValue: _vueTypes2['default'].any,
    open: _vueTypes2['default'].bool,
    defaultOpen: _vueTypes2['default'].bool,
    align: _vueTypes2['default'].object,
    placement: _vueTypes2['default'].any,
    transitionName: _vueTypes2['default'].string,
    getPopupContainer: _vueTypes2['default'].func,
    placeholder: _vueTypes2['default'].string,
    format: _vueTypes2['default'].string,
    showHour: _vueTypes2['default'].bool,
    showMinute: _vueTypes2['default'].bool,
    showSecond: _vueTypes2['default'].bool,
    popupClassName: _vueTypes2['default'].string,
    popupStyle: _vueTypes2['default'].object,
    disabledHours: _vueTypes2['default'].func,
    disabledMinutes: _vueTypes2['default'].func,
    disabledSeconds: _vueTypes2['default'].func,
    hideDisabledOptions: _vueTypes2['default'].bool,
    // onChange: PropTypes.func,
    // onAmPmChange: PropTypes.func,
    // onOpen: PropTypes.func,
    // onClose: PropTypes.func,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    name: _vueTypes2['default'].string,
    autoComplete: _vueTypes2['default'].string,
    use12Hours: _vueTypes2['default'].bool,
    hourStep: _vueTypes2['default'].number,
    minuteStep: _vueTypes2['default'].number,
    secondStep: _vueTypes2['default'].number,
    focusOnOpen: _vueTypes2['default'].bool,
    // onKeyDown: PropTypes.func,
    autoFocus: _vueTypes2['default'].bool,
    id: _vueTypes2['default'].string,
    inputIcon: _vueTypes2['default'].any,
    clearIcon: _vueTypes2['default'].any,
    addon: _vueTypes2['default'].func
  }, {
    clearText: 'clear',
    prefixCls: 'rc-time-picker',
    defaultOpen: false,
    inputReadOnly: false,
    popupClassName: '',
    popupStyle: {},
    align: {},
    allowEmpty: true,
    showHour: true,
    showMinute: true,
    showSecond: true,
    disabledHours: noop,
    disabledMinutes: noop,
    disabledSeconds: noop,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    use12Hours: false,
    focusOnOpen: false
  }),
  data: function data() {
    var defaultOpen = this.defaultOpen,
        defaultValue = this.defaultValue,
        _open = this.open,
        open = _open === undefined ? defaultOpen : _open,
        _value = this.value,
        value = _value === undefined ? defaultValue : _value;

    return {
      sOpen: open,
      sValue: value
    };
  },


  watch: {
    value: function value(val) {
      this.setState({
        sValue: val
      });
    },
    open: function open(val) {
      if (val !== undefined) {
        this.setState({
          sOpen: val
        });
      }
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
    onPanelChange: function onPanelChange(value) {
      this.setValue(value);
    },
    onAmPmChange: function onAmPmChange(ampm) {
      this.__emit('amPmChange', ampm);
    },
    onClear: function onClear(event) {
      event.stopPropagation();
      this.setValue(null);
      this.setOpen(false);
    },
    onVisibleChange: function onVisibleChange(open) {
      this.setOpen(open);
    },
    onEsc: function onEsc() {
      this.setOpen(false);
      this.focus();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 40) {
        this.setOpen(true);
      }
    },
    onKeyDown2: function onKeyDown2(e) {
      this.__emit('keydown', e);
    },
    setValue: function setValue(value) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          sValue: value
        });
      }
      this.__emit('change', value);
    },
    getFormat: function getFormat() {
      var format = this.format,
          showHour = this.showHour,
          showMinute = this.showMinute,
          showSecond = this.showSecond,
          use12Hours = this.use12Hours;

      if (format) {
        return format;
      }

      if (use12Hours) {
        var fmtString = [showHour ? 'h' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
          return !!item;
        }).join(':');

        return fmtString.concat(' a');
      }

      return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
        return !!item;
      }).join(':');
    },
    getPanelElement: function getPanelElement() {
      var h = this.$createElement;
      var prefixCls = this.prefixCls,
          placeholder = this.placeholder,
          disabledHours = this.disabledHours,
          addon = this.addon,
          disabledMinutes = this.disabledMinutes,
          disabledSeconds = this.disabledSeconds,
          hideDisabledOptions = this.hideDisabledOptions,
          inputReadOnly = this.inputReadOnly,
          showHour = this.showHour,
          showMinute = this.showMinute,
          showSecond = this.showSecond,
          defaultOpenValue = this.defaultOpenValue,
          clearText = this.clearText,
          use12Hours = this.use12Hours,
          focusOnOpen = this.focusOnOpen,
          onKeyDown2 = this.onKeyDown2,
          hourStep = this.hourStep,
          minuteStep = this.minuteStep,
          secondStep = this.secondStep,
          sValue = this.sValue;

      var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');
      return h(_Panel2['default'], {
        attrs: {
          clearText: clearText,
          prefixCls: prefixCls + '-panel',

          value: sValue,
          inputReadOnly: inputReadOnly,

          defaultOpenValue: defaultOpenValue,
          showHour: showHour,
          showMinute: showMinute,
          showSecond: showSecond,

          format: this.getFormat(),
          placeholder: placeholder,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          hideDisabledOptions: hideDisabledOptions,
          use12Hours: use12Hours,
          hourStep: hourStep,
          minuteStep: minuteStep,
          secondStep: secondStep,
          focusOnOpen: focusOnOpen,

          clearIcon: clearIcon,
          addon: addon
        },
        ref: 'panel', on: {
          'change': this.onPanelChange,
          'amPmChange': this.onAmPmChange,
          'esc': this.onEsc,
          'keydown': onKeyDown2
        }
      });
    },
    getPopupClassName: function getPopupClassName() {
      var showHour = this.showHour,
          showMinute = this.showMinute,
          showSecond = this.showSecond,
          use12Hours = this.use12Hours,
          prefixCls = this.prefixCls,
          popupClassName = this.popupClassName;


      var selectColumnCount = 0;
      if (showHour) {
        selectColumnCount += 1;
      }
      if (showMinute) {
        selectColumnCount += 1;
      }
      if (showSecond) {
        selectColumnCount += 1;
      }
      if (use12Hours) {
        selectColumnCount += 1;
      }
      // Keep it for old compatibility
      return (0, _classnames2['default'])(popupClassName, (0, _defineProperty3['default'])({}, prefixCls + '-panel-narrow', (!showHour || !showMinute || !showSecond) && !use12Hours), prefixCls + '-panel-column-' + selectColumnCount);
    },
    setOpen: function setOpen(open) {
      if (this.sOpen !== open) {
        if (!(0, _propsUtil.hasProp)(this, 'open')) {
          this.setState({ sOpen: open });
        }
        if (open) {
          this.__emit('open', { open: open });
        } else {
          this.__emit('close', { open: open });
        }
      }
    },
    focus: function focus() {
      this.$refs.picker.focus();
    },
    blur: function blur() {
      this.$refs.picker.blur();
    },
    onFocus: function onFocus(e) {
      this.__emit('focus', e);
    },
    onBlur: function onBlur(e) {
      this.__emit('blur', e);
    },
    renderClearButton: function renderClearButton() {
      var _this2 = this;

      var h = this.$createElement;
      var sValue = this.sValue;
      var _$props = this.$props,
          prefixCls = _$props.prefixCls,
          allowEmpty = _$props.allowEmpty,
          clearText = _$props.clearText,
          disabled = _$props.disabled;

      if (!allowEmpty || !sValue || disabled) {
        return null;
      }
      var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');
      if ((0, _propsUtil.isValidElement)(clearIcon)) {
        var _ref = (0, _propsUtil.getEvents)(clearIcon) || {},
            _click = _ref.click;

        return (0, _vnode.cloneElement)(clearIcon, {
          on: {
            click: function click() {
              if (_click) _click.apply(undefined, arguments);
              _this2.onClear.apply(_this2, arguments);
            }
          }
        });
      }

      return h(
        'a',
        {
          attrs: {
            role: 'button',

            title: clearText,

            tabIndex: 0
          },
          'class': prefixCls + '-clear', on: {
            'click': this.onClear
          }
        },
        [clearIcon || h('i', { 'class': prefixCls + '-clear-icon' })]
      );
    }
  },

  render: function render() {
    var h = arguments[0];
    var prefixCls = this.prefixCls,
        placeholder = this.placeholder,
        placement = this.placement,
        align = this.align,
        id = this.id,
        disabled = this.disabled,
        transitionName = this.transitionName,
        getPopupContainer = this.getPopupContainer,
        name = this.name,
        autoComplete = this.autoComplete,
        autoFocus = this.autoFocus,
        sOpen = this.sOpen,
        sValue = this.sValue,
        onFocus = this.onFocus,
        onBlur = this.onBlur,
        popupStyle = this.popupStyle;

    var popupClassName = this.getPopupClassName();
    var inputIcon = (0, _propsUtil.getComponentFromProp)(this, 'inputIcon');
    return h(
      _vcTrigger2['default'],
      {
        attrs: {
          prefixCls: prefixCls + '-panel',
          popupClassName: popupClassName,
          popupStyle: popupStyle,
          popupAlign: align,
          builtinPlacements: _placements2['default'],
          popupPlacement: placement,
          action: disabled ? [] : ['click'],
          destroyPopupOnHide: true,
          getPopupContainer: getPopupContainer,
          popupTransitionName: transitionName,
          popupVisible: sOpen
        },
        on: {
          'popupVisibleChange': this.onVisibleChange
        }
      },
      [h(
        'template',
        { slot: 'popup' },
        [this.getPanelElement()]
      ), h(
        'span',
        { 'class': '' + prefixCls },
        [h('input', {
          'class': prefixCls + '-input',
          ref: 'picker',
          attrs: { type: 'text',
            placeholder: placeholder,
            name: name,

            disabled: disabled,

            autoComplete: autoComplete,

            autoFocus: autoFocus,
            readOnly: true,
            id: id
          },
          on: {
            'keydown': this.onKeyDown,
            'focus': onFocus,
            'blur': onBlur
          },
          domProps: {
            'value': sValue && sValue.format(this.getFormat()) || ''
          }
        }), inputIcon || h('span', { 'class': prefixCls + '-icon' }), this.renderClearButton()]
      )]
    );
  }
};

/***/ }),

/***/ "afdf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePickerProps = undefined;

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports.generateShowHourMinuteSecond = generateShowHourMinuteSecond;

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _vcTimePicker = __webpack_require__("628f");

var _vcTimePicker2 = _interopRequireDefault(_vcTimePicker);

var _LocaleReceiver = __webpack_require__("3f5f");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _en_US = __webpack_require__("ba1d");

var _en_US2 = _interopRequireDefault(_en_US);

var _propsUtil = __webpack_require__("73c8");

var _vnode = __webpack_require__("d2f9");

var _configConsumerProps = __webpack_require__("bad7");

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

var _momentUtil = __webpack_require__("4b93");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1
  };
}

var TimePickerProps = exports.TimePickerProps = function TimePickerProps() {
  return {
    size: _vueTypes2['default'].oneOf(['large', 'default', 'small']),
    value: _momentUtil.TimeOrTimesType,
    defaultValue: _momentUtil.TimeOrTimesType,
    open: _vueTypes2['default'].bool,
    format: _vueTypes2['default'].string,
    disabled: _vueTypes2['default'].bool,
    placeholder: _vueTypes2['default'].string,
    prefixCls: _vueTypes2['default'].string,
    hideDisabledOptions: _vueTypes2['default'].bool,
    disabledHours: _vueTypes2['default'].func,
    disabledMinutes: _vueTypes2['default'].func,
    disabledSeconds: _vueTypes2['default'].func,
    getPopupContainer: _vueTypes2['default'].func,
    use12Hours: _vueTypes2['default'].bool,
    focusOnOpen: _vueTypes2['default'].bool,
    hourStep: _vueTypes2['default'].number,
    minuteStep: _vueTypes2['default'].number,
    secondStep: _vueTypes2['default'].number,
    allowEmpty: _vueTypes2['default'].bool,
    allowClear: _vueTypes2['default'].bool,
    inputReadOnly: _vueTypes2['default'].bool,
    clearText: _vueTypes2['default'].string,
    defaultOpenValue: _vueTypes2['default'].object,
    popupClassName: _vueTypes2['default'].string,
    popupStyle: _vueTypes2['default'].object,
    suffixIcon: _vueTypes2['default'].any,
    align: _vueTypes2['default'].object,
    placement: _vueTypes2['default'].any,
    transitionName: _vueTypes2['default'].string,
    autoFocus: _vueTypes2['default'].bool,
    addon: _vueTypes2['default'].any,
    clearIcon: _vueTypes2['default'].any,
    locale: _vueTypes2['default'].object,
    valueFormat: _vueTypes2['default'].string
  };
};

var TimePicker = {
  name: 'ATimePicker',
  mixins: [_BaseMixin2['default']],
  props: (0, _propsUtil.initDefaultProps)(TimePickerProps(), {
    align: {
      offset: [0, -2]
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    focusOnOpen: true,
    allowClear: true
  }),
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
      } }
  },
  data: function data() {
    var value = this.value,
        defaultValue = this.defaultValue,
        valueFormat = this.valueFormat;


    (0, _momentUtil.checkValidate)('TimePicker', defaultValue, 'defaultValue', valueFormat);
    (0, _momentUtil.checkValidate)('TimePicker', value, 'value', valueFormat);
    (0, _warning2['default'])(!(0, _propsUtil.hasProp)(this, 'allowEmpty'), 'TimePicker', '`allowEmpty` is deprecated. Please use `allowClear` instead.');
    return {
      sValue: (0, _momentUtil.stringToMoment)(value || defaultValue, valueFormat)
    };
  },

  watch: {
    value: function value(val) {
      (0, _momentUtil.checkValidate)('TimePicker', val, 'value', this.valueFormat);
      this.setState({ sValue: (0, _momentUtil.stringToMoment)(val, this.valueFormat) });
    }
  },
  methods: {
    getDefaultFormat: function getDefaultFormat() {
      var format = this.format,
          use12Hours = this.use12Hours;

      if (format) {
        return format;
      } else if (use12Hours) {
        return 'h:mm:ss a';
      }
      return 'HH:mm:ss';
    },
    getAllowClear: function getAllowClear() {
      var _$props = this.$props,
          allowClear = _$props.allowClear,
          allowEmpty = _$props.allowEmpty;

      if ((0, _propsUtil.hasProp)(this, 'allowClear')) {
        return allowClear;
      }
      return allowEmpty;
    },
    getDefaultLocale: function getDefaultLocale() {
      var defaultLocale = (0, _extends3['default'])({}, _en_US2['default'], this.$props.locale);
      return defaultLocale;
    },
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    handleChange: function handleChange(value) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({ sValue: value });
      }
      var _format = this.format,
          format = _format === undefined ? 'HH:mm:ss' : _format;

      this.$emit('change', this.valueFormat ? (0, _momentUtil.momentToString)(value, this.valueFormat) : value, value && value.format(format) || '');
    },
    handleOpenClose: function handleOpenClose(_ref) {
      var open = _ref.open;

      this.$emit('openChange', open);
      this.$emit('update:open', open);
    },
    focus: function focus() {
      this.$refs.timePicker.focus();
    },
    blur: function blur() {
      this.$refs.timePicker.blur();
    },
    renderInputIcon: function renderInputIcon(prefixCls) {
      var h = this.$createElement;

      var suffixIcon = (0, _propsUtil.getComponentFromProp)(this, 'suffixIcon');
      suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
      var clockIcon = suffixIcon && (0, _propsUtil.isValidElement)(suffixIcon) && (0, _vnode.cloneElement)(suffixIcon, {
        'class': prefixCls + '-clock-icon'
      }) || h(_icon2['default'], {
        attrs: { type: 'clock-circle' },
        'class': prefixCls + '-clock-icon' });

      return h(
        'span',
        { 'class': prefixCls + '-icon' },
        [clockIcon]
      );
    },
    renderClearIcon: function renderClearIcon(prefixCls) {
      var h = this.$createElement;

      var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');
      var clearIconPrefixCls = prefixCls + '-clear';

      if (clearIcon && (0, _propsUtil.isValidElement)(clearIcon)) {
        return (0, _vnode.cloneElement)(clearIcon, {
          'class': clearIconPrefixCls
        });
      }

      return h(_icon2['default'], {
        attrs: { type: 'close-circle', theme: 'filled' },
        'class': clearIconPrefixCls });
    },
    renderTimePicker: function renderTimePicker(locale) {
      var h = this.$createElement;

      var props = (0, _propsUtil.getOptionProps)(this);
      props = (0, _omit2['default'])(props, ['defaultValue', 'suffixIcon', 'allowEmpty', 'allowClear']);

      var _props = props,
          customizePrefixCls = _props.prefixCls,
          getPopupContainer = _props.getPopupContainer,
          placeholder = _props.placeholder,
          size = _props.size;

      var getPrefixCls = this.configProvider.getPrefixCls;
      var prefixCls = getPrefixCls('time-picker', customizePrefixCls);

      var format = this.getDefaultFormat();
      var pickerClassName = (0, _defineProperty3['default'])({}, prefixCls + '-' + size, !!size);
      var tempAddon = (0, _propsUtil.getComponentFromProp)(this, 'addon', {}, false);
      var pickerAddon = function pickerAddon(panel) {
        return tempAddon ? h(
          'div',
          { 'class': prefixCls + '-panel-addon' },
          [typeof tempAddon === 'function' ? tempAddon(panel) : tempAddon]
        ) : null;
      };
      var inputIcon = this.renderInputIcon(prefixCls);
      var clearIcon = this.renderClearIcon(prefixCls);
      var getContextPopupContainer = this.configProvider.getPopupContainer;

      var timeProps = {
        props: (0, _extends3['default'])({}, generateShowHourMinuteSecond(format), props, {
          allowEmpty: this.getAllowClear(),
          prefixCls: prefixCls,
          getPopupContainer: getPopupContainer || getContextPopupContainer,
          format: format,
          value: this.sValue,
          placeholder: placeholder === undefined ? locale.placeholder : placeholder,
          addon: pickerAddon,
          inputIcon: inputIcon,
          clearIcon: clearIcon
        }),
        'class': pickerClassName,
        ref: 'timePicker',
        on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
          change: this.handleChange,
          open: this.handleOpenClose,
          close: this.handleOpenClose
        })
      };
      return h(_vcTimePicker2['default'], timeProps);
    }
  },

  render: function render() {
    var h = arguments[0];

    return h(_LocaleReceiver2['default'], {
      attrs: {
        componentName: 'TimePicker',
        defaultLocale: this.getDefaultLocale()
      },
      scopedSlots: { 'default': this.renderTimePicker }
    });
  }
};

/* istanbul ignore next */
TimePicker.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(TimePicker.name, TimePicker);
};

exports['default'] = TimePicker;

/***/ }),

/***/ "b6d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _Select = __webpack_require__("9076");

var _Select2 = _interopRequireDefault(_Select);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var formatOption = function formatOption(option, disabledOptions) {
  var value = '' + option;
  if (option < 10) {
    value = '0' + option;
  }

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = {
  mixins: [_BaseMixin2['default']],
  name: 'Combobox',
  props: {
    format: _vueTypes2['default'].string,
    defaultOpenValue: _vueTypes2['default'].object,
    prefixCls: _vueTypes2['default'].string,
    value: _vueTypes2['default'].object,
    // onChange: PropTypes.func,
    // onAmPmChange: PropTypes.func,
    showHour: _vueTypes2['default'].bool,
    showMinute: _vueTypes2['default'].bool,
    showSecond: _vueTypes2['default'].bool,
    hourOptions: _vueTypes2['default'].array,
    minuteOptions: _vueTypes2['default'].array,
    secondOptions: _vueTypes2['default'].array,
    disabledHours: _vueTypes2['default'].func,
    disabledMinutes: _vueTypes2['default'].func,
    disabledSeconds: _vueTypes2['default'].func,
    // onCurrentSelectPanelChange: PropTypes.func,
    use12Hours: _vueTypes2['default'].bool,
    isAM: _vueTypes2['default'].bool
  },
  methods: {
    onItemChange: function onItemChange(type, itemValue) {
      var defaultOpenValue = this.defaultOpenValue,
          use12Hours = this.use12Hours,
          propValue = this.value,
          isAM = this.isAM;

      var value = (propValue || defaultOpenValue).clone();

      if (type === 'hour') {
        if (use12Hours) {
          if (isAM) {
            value.hour(+itemValue % 12);
          } else {
            value.hour(+itemValue % 12 + 12);
          }
        } else {
          value.hour(+itemValue);
        }
      } else if (type === 'minute') {
        value.minute(+itemValue);
      } else if (type === 'ampm') {
        var ampm = itemValue.toUpperCase();
        if (use12Hours) {
          if (ampm === 'PM' && value.hour() < 12) {
            value.hour(value.hour() % 12 + 12);
          }

          if (ampm === 'AM') {
            if (value.hour() >= 12) {
              value.hour(value.hour() - 12);
            }
          }
        }
        this.__emit('amPmChange', ampm);
      } else {
        value.second(+itemValue);
      }
      this.__emit('change', value);
    },
    onEnterSelectPanel: function onEnterSelectPanel(range) {
      this.__emit('currentSelectPanelChange', range);
    },
    onEsc: function onEsc(e) {
      this.__emit('esc', e);
    },
    getHourSelect: function getHourSelect(hour) {
      var _this = this;

      var h = this.$createElement;
      var prefixCls = this.prefixCls,
          hourOptions = this.hourOptions,
          disabledHours = this.disabledHours,
          showHour = this.showHour,
          use12Hours = this.use12Hours;

      if (!showHour) {
        return null;
      }
      var disabledOptions = disabledHours();
      var hourOptionsAdj = void 0;
      var hourAdj = void 0;
      if (use12Hours) {
        hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
          return h < 12 && h > 0;
        }));
        hourAdj = hour % 12 || 12;
      } else {
        hourOptionsAdj = hourOptions;
        hourAdj = hour;
      }

      return h(_Select2['default'], {
        attrs: {
          prefixCls: prefixCls,
          options: hourOptionsAdj.map(function (option) {
            return formatOption(option, disabledOptions);
          }),
          selectedIndex: hourOptionsAdj.indexOf(hourAdj),
          type: 'hour'
        },
        on: {
          'select': this.onItemChange,
          'mouseenter': function mouseenter() {
            return _this.onEnterSelectPanel('hour');
          },
          'esc': this.onEsc
        }
      });
    },
    getMinuteSelect: function getMinuteSelect(minute) {
      var _this2 = this;

      var h = this.$createElement;
      var prefixCls = this.prefixCls,
          minuteOptions = this.minuteOptions,
          disabledMinutes = this.disabledMinutes,
          defaultOpenValue = this.defaultOpenValue,
          showMinute = this.showMinute,
          propValue = this.value;

      if (!showMinute) {
        return null;
      }
      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledMinutes(value.hour());

      return h(_Select2['default'], {
        attrs: {
          prefixCls: prefixCls,
          options: minuteOptions.map(function (option) {
            return formatOption(option, disabledOptions);
          }),
          selectedIndex: minuteOptions.indexOf(minute),
          type: 'minute'
        },
        on: {
          'select': this.onItemChange,
          'mouseenter': function mouseenter() {
            return _this2.onEnterSelectPanel('minute');
          },
          'esc': this.onEsc
        }
      });
    },
    getSecondSelect: function getSecondSelect(second) {
      var _this3 = this;

      var h = this.$createElement;
      var prefixCls = this.prefixCls,
          secondOptions = this.secondOptions,
          disabledSeconds = this.disabledSeconds,
          showSecond = this.showSecond,
          defaultOpenValue = this.defaultOpenValue,
          propValue = this.value;

      if (!showSecond) {
        return null;
      }
      var value = propValue || defaultOpenValue;
      var disabledOptions = disabledSeconds(value.hour(), value.minute());

      return h(_Select2['default'], {
        attrs: {
          prefixCls: prefixCls,
          options: secondOptions.map(function (option) {
            return formatOption(option, disabledOptions);
          }),
          selectedIndex: secondOptions.indexOf(second),
          type: 'second'
        },
        on: {
          'select': this.onItemChange,
          'mouseenter': function mouseenter() {
            return _this3.onEnterSelectPanel('second');
          },
          'esc': this.onEsc
        }
      });
    },
    getAMPMSelect: function getAMPMSelect() {
      var _this4 = this;

      var h = this.$createElement;
      var prefixCls = this.prefixCls,
          use12Hours = this.use12Hours,
          format = this.format,
          isAM = this.isAM;

      if (!use12Hours) {
        return null;
      }

      var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
      .map(function (c) {
        return format.match(/\sA/) ? c.toUpperCase() : c;
      }).map(function (c) {
        return { value: c };
      });

      var selected = isAM ? 0 : 1;

      return h(_Select2['default'], {
        attrs: {
          prefixCls: prefixCls,
          options: AMPMOptions,
          selectedIndex: selected,
          type: 'ampm'
        },
        on: {
          'select': this.onItemChange,
          'mouseenter': function mouseenter() {
            return _this4.onEnterSelectPanel('ampm');
          },
          'esc': this.onEsc
        }
      });
    }
  },

  render: function render() {
    var h = arguments[0];
    var prefixCls = this.prefixCls,
        defaultOpenValue = this.defaultOpenValue,
        propValue = this.value;

    var value = propValue || defaultOpenValue;
    return h(
      'div',
      { 'class': prefixCls + '-combobox' },
      [this.getHourSelect(value.hour()), this.getMinuteSelect(value.minute()), this.getSecondSelect(value.second()), this.getAMPMSelect(value.hour())]
    );
  }
};

exports['default'] = Combobox;

/***/ }),

/***/ "dfc9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _moment = __webpack_require__("c1df");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = {
  mixins: [_BaseMixin2['default']],
  props: {
    format: _vueTypes2['default'].string,
    prefixCls: _vueTypes2['default'].string,
    disabledDate: _vueTypes2['default'].func,
    placeholder: _vueTypes2['default'].string,
    clearText: _vueTypes2['default'].string,
    value: _vueTypes2['default'].object,
    inputReadOnly: _vueTypes2['default'].bool.def(false),
    hourOptions: _vueTypes2['default'].array,
    minuteOptions: _vueTypes2['default'].array,
    secondOptions: _vueTypes2['default'].array,
    disabledHours: _vueTypes2['default'].func,
    disabledMinutes: _vueTypes2['default'].func,
    disabledSeconds: _vueTypes2['default'].func,
    // onChange: PropTypes.func,
    // onClear: PropTypes.func,
    // onEsc: PropTypes.func,
    allowEmpty: _vueTypes2['default'].bool,
    defaultOpenValue: _vueTypes2['default'].object,
    currentSelectPanel: _vueTypes2['default'].string,
    focusOnOpen: _vueTypes2['default'].bool,
    // onKeyDown: PropTypes.func,
    clearIcon: _vueTypes2['default'].any
  },
  data: function data() {
    var value = this.value,
        format = this.format;

    return {
      str: value && value.format(format) || '',
      invalid: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.focusOnOpen) {
      // Wait one frame for the panel to be positioned before focusing
      var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
      requestAnimationFrame(function () {
        _this.$refs.input.focus();
        _this.$refs.input.select();
      });
    }
  },

  watch: {
    value: function value(val) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setState({
          str: val && val.format(_this2.format) || '',
          invalid: false
        });
      });
    }
  },

  methods: {
    onInputChange: function onInputChange(e) {
      var _e$target = e.target,
          str = _e$target.value,
          composing = _e$target.composing;
      var _str = this.str,
          oldStr = _str === undefined ? '' : _str;

      if (e.isComposing || composing || oldStr === str) return;

      this.setState({
        str: str
      });
      var format = this.format,
          hourOptions = this.hourOptions,
          minuteOptions = this.minuteOptions,
          secondOptions = this.secondOptions,
          disabledHours = this.disabledHours,
          disabledMinutes = this.disabledMinutes,
          disabledSeconds = this.disabledSeconds,
          originalValue = this.value;


      if (str) {
        var value = this.getProtoValue().clone();
        var parsed = (0, _moment2['default'])(str, format, true);
        if (!parsed.isValid()) {
          this.setState({
            invalid: true
          });
          return;
        }
        value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

        // if time value not allowed, response warning.
        if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
          this.setState({
            invalid: true
          });
          return;
        }

        // if time value is disabled, response warning.
        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.hour());
        var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
        if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
          this.setState({
            invalid: true
          });
          return;
        }

        if (originalValue) {
          if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.hour(value.hour());
            changedValue.minute(value.minute());
            changedValue.second(value.second());
            this.__emit('change', changedValue);
          }
        } else if (originalValue !== value) {
          this.__emit('change', value);
        }
      } else {
        this.__emit('change', null);
      }

      this.setState({
        invalid: false
      });
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === 27) {
        this.__emit('esc');
      }
      this.__emit('keydown', e);
    },
    getProtoValue: function getProtoValue() {
      return this.value || this.defaultOpenValue;
    },
    getInput: function getInput() {
      var h = this.$createElement;
      var prefixCls = this.prefixCls,
          placeholder = this.placeholder,
          inputReadOnly = this.inputReadOnly,
          invalid = this.invalid,
          str = this.str;

      var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
      return h('input', (0, _babelHelperVueJsxMergeProps2['default'])([{
        'class': prefixCls + '-input ' + invalidClass,
        ref: 'input',
        on: {
          'keydown': this.onKeyDown,
          'input': this.onInputChange
        },
        domProps: {
          'value': str
        },
        attrs: {
          placeholder: placeholder,

          readOnly: !!inputReadOnly
        }
      }, {
        directives: [{
          name: 'ant-input'
        }]
      }]));
    }
  },

  render: function render() {
    var h = arguments[0];
    var prefixCls = this.prefixCls;

    return h(
      'div',
      { 'class': prefixCls + '-input-wrap' },
      [this.getInput()]
    );
  }
};

exports['default'] = Header;

/***/ })

}]);