((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[6],{

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

/***/ "148f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectPropTypes = exports.OptGroup = exports.Option = exports.Select = undefined;

var _Select = __webpack_require__("2649");

var _Select2 = _interopRequireDefault(_Select);

var _Option = __webpack_require__("b063");

var _Option2 = _interopRequireDefault(_Option);

var _PropTypes = __webpack_require__("87fc");

var _OptGroup = __webpack_require__("4913");

var _OptGroup2 = _interopRequireDefault(_OptGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// based on vc-select 9.2.2
_Select.Select.Option = _Option2['default'];
_Select.Select.OptGroup = _OptGroup2['default'];
_Select2['default'].Option = _Option2['default'];
_Select2['default'].OptGroup = _OptGroup2['default'];
exports.Select = _Select.Select;
exports.Option = _Option2['default'];
exports.OptGroup = _OptGroup2['default'];
exports.SelectPropTypes = _PropTypes.SelectPropTypes;
exports['default'] = _Select2['default'];

/***/ }),

/***/ "23f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PropTypes = __webpack_require__("aef2");

exports['default'] = {
  name: 'StoreProvider',
  props: {
    store: _PropTypes.storeShape.isRequired
  },
  provide: function provide() {
    return {
      storeContext: this.$props
    };
  },
  render: function render() {
    return this.$slots['default'][0];
  }
};

/***/ }),

/***/ "24ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _raf = __webpack_require__("c449");

var _raf2 = _interopRequireDefault(_raf);

var _vcTrigger = __webpack_require__("2f52");

var _vcTrigger2 = _interopRequireDefault(_vcTrigger);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _DropdownMenu = __webpack_require__("6945");

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _util = __webpack_require__("d938");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

exports['default'] = {
  name: 'SelectTrigger',
  mixins: [_BaseMixin2['default']],
  props: {
    // onPopupFocus: PropTypes.func,
    // onPopupScroll: PropTypes.func,
    dropdownMatchSelectWidth: _vueTypes2['default'].bool,
    defaultActiveFirstOption: _vueTypes2['default'].bool,
    dropdownAlign: _vueTypes2['default'].object,
    visible: _vueTypes2['default'].bool,
    disabled: _vueTypes2['default'].bool,
    showSearch: _vueTypes2['default'].bool,
    dropdownClassName: _vueTypes2['default'].string,
    dropdownStyle: _vueTypes2['default'].object,
    dropdownMenuStyle: _vueTypes2['default'].object,
    multiple: _vueTypes2['default'].bool,
    inputValue: _vueTypes2['default'].string,
    filterOption: _vueTypes2['default'].any,
    empty: _vueTypes2['default'].bool,
    options: _vueTypes2['default'].any,
    prefixCls: _vueTypes2['default'].string,
    popupClassName: _vueTypes2['default'].string,
    value: _vueTypes2['default'].array,
    // children: PropTypes.any,
    showAction: _vueTypes2['default'].arrayOf(_vueTypes2['default'].string),
    combobox: _vueTypes2['default'].bool,
    animation: _vueTypes2['default'].string,
    transitionName: _vueTypes2['default'].string,
    getPopupContainer: _vueTypes2['default'].func,
    backfillValue: _vueTypes2['default'].any,
    menuItemSelectedIcon: _vueTypes2['default'].any,
    dropdownRender: _vueTypes2['default'].func,
    ariaId: _vueTypes2['default'].string
  },
  data: function data() {
    return {
      dropdownWidth: 0
    };
  },
  created: function created() {
    this.rafInstance = null;
    this.saveDropdownMenuRef = (0, _util.saveRef)(this, 'dropdownMenuRef');
    this.saveTriggerRef = (0, _util.saveRef)(this, 'triggerRef');
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.setDropdownWidth();
    });
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.setDropdownWidth();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.cancelRafInstance();
  },

  methods: {
    setDropdownWidth: function setDropdownWidth() {
      var _this3 = this;

      this.cancelRafInstance();
      this.rafInstance = (0, _raf2['default'])(function () {
        var width = _this3.$el.offsetWidth;
        if (width !== _this3.dropdownWidth) {
          _this3.setState({ dropdownWidth: width });
        }
      });
    },
    cancelRafInstance: function cancelRafInstance() {
      if (this.rafInstance) {
        _raf2['default'].cancel(this.rafInstance);
      }
    },
    getInnerMenu: function getInnerMenu() {
      return this.dropdownMenuRef && this.dropdownMenuRef.$refs.menuRef;
    },
    getPopupDOMNode: function getPopupDOMNode() {
      return this.triggerRef.getPopupDomNode();
    },
    getDropdownElement: function getDropdownElement(newProps) {
      var h = this.$createElement;
      var value = this.value,
          firstActiveValue = this.firstActiveValue,
          defaultActiveFirstOption = this.defaultActiveFirstOption,
          dropdownMenuStyle = this.dropdownMenuStyle,
          getDropdownPrefixCls = this.getDropdownPrefixCls,
          backfillValue = this.backfillValue,
          menuItemSelectedIcon = this.menuItemSelectedIcon;

      var _getListeners = (0, _propsUtil.getListeners)(this),
          menuSelect = _getListeners.menuSelect,
          menuDeselect = _getListeners.menuDeselect,
          popupScroll = _getListeners.popupScroll;

      var props = this.$props;

      var dropdownRender = props.dropdownRender,
          ariaId = props.ariaId;

      var dropdownMenuProps = {
        props: (0, _extends3['default'])({}, newProps.props, {
          ariaId: ariaId,
          prefixCls: getDropdownPrefixCls(),
          value: value,
          firstActiveValue: firstActiveValue,
          defaultActiveFirstOption: defaultActiveFirstOption,
          dropdownMenuStyle: dropdownMenuStyle,
          backfillValue: backfillValue,
          menuItemSelectedIcon: menuItemSelectedIcon
        }),
        on: (0, _extends3['default'])({}, newProps.on, {
          menuSelect: menuSelect,
          menuDeselect: menuDeselect,
          popupScroll: popupScroll
        }),
        directives: [{
          name: 'ant-ref',
          value: this.saveDropdownMenuRef
        }]
      };
      var menuNode = h(_DropdownMenu2['default'], dropdownMenuProps);

      if (dropdownRender) {
        return dropdownRender(menuNode, props);
      }
      return null;
    },
    getDropdownTransitionName: function getDropdownTransitionName() {
      var props = this.$props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
      }
      return transitionName;
    },
    getDropdownPrefixCls: function getDropdownPrefixCls() {
      return this.prefixCls + '-dropdown';
    }
  },

  render: function render() {
    var _popupClassName;

    var h = arguments[0];
    var $props = this.$props,
        $slots = this.$slots;
    var multiple = $props.multiple,
        visible = $props.visible,
        inputValue = $props.inputValue,
        dropdownAlign = $props.dropdownAlign,
        disabled = $props.disabled,
        showSearch = $props.showSearch,
        dropdownClassName = $props.dropdownClassName,
        dropdownStyle = $props.dropdownStyle,
        dropdownMatchSelectWidth = $props.dropdownMatchSelectWidth,
        options = $props.options,
        getPopupContainer = $props.getPopupContainer,
        showAction = $props.showAction,
        empty = $props.empty;

    var _getListeners2 = (0, _propsUtil.getListeners)(this),
        mouseenter = _getListeners2.mouseenter,
        mouseleave = _getListeners2.mouseleave,
        popupFocus = _getListeners2.popupFocus,
        dropdownVisibleChange = _getListeners2.dropdownVisibleChange;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, (0, _defineProperty3['default'])(_popupClassName, dropdownClassName, !!dropdownClassName), (0, _defineProperty3['default'])(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), (0, _defineProperty3['default'])(_popupClassName, dropdownPrefixCls + '--empty', empty), _popupClassName);
    var popupElement = this.getDropdownElement({
      props: {
        menuItems: options,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      },
      on: {
        popupFocus: popupFocus
      }
    });
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if ((0, _util.isSingleMode)($props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    var popupStyle = (0, _extends3['default'])({}, dropdownStyle);
    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.dropdownWidth) {
      popupStyle[widthProp] = this.dropdownWidth + 'px';
    }
    var triggerProps = {
      props: (0, _extends3['default'])({}, $props, {
        showAction: disabled ? [] : showAction,
        hideAction: hideAction,
        ref: 'triggerRef',
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: getPopupContainer,
        popupClassName: (0, _classnames2['default'])(popupClassName),
        popupStyle: popupStyle
      }),
      on: {
        popupVisibleChange: dropdownVisibleChange
      },
      directives: [{
        name: 'ant-ref',
        value: this.saveTriggerRef
      }]
    };
    if (mouseenter) {
      triggerProps.on.mouseenter = mouseenter;
    }
    if (mouseleave) {
      triggerProps.on.mouseleave = mouseleave;
    }
    return h(
      _vcTrigger2['default'],
      triggerProps,
      [$slots['default'], h(
        'template',
        { slot: 'popup' },
        [popupElement]
      )]
    );
  }
};

/***/ }),

/***/ "2649":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _KeyCode = __webpack_require__("af09");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _classnames2 = __webpack_require__("4d26");

var _classnames3 = _interopRequireDefault(_classnames2);

var _componentClasses = __webpack_require__("3c55");

var _componentClasses2 = _interopRequireDefault(_componentClasses);

var _vcMenu = __webpack_require__("432f");

var _warning = __webpack_require__("d96e");

var _warning2 = _interopRequireDefault(_warning);

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

var _Option = __webpack_require__("b063");

var _Option2 = _interopRequireDefault(_Option);

var _OptGroup = __webpack_require__("4913");

var _OptGroup2 = _interopRequireDefault(_OptGroup);

var _propsUtil = __webpack_require__("73c8");

var _getTransitionProps = __webpack_require__("5c25");

var _getTransitionProps2 = _interopRequireDefault(_getTransitionProps);

var _vnode = __webpack_require__("d2f9");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _proxyComponent = __webpack_require__("5c06");

var _proxyComponent2 = _interopRequireDefault(_proxyComponent);

var _vueRef = __webpack_require__("46cf");

var _vueRef2 = _interopRequireDefault(_vueRef);

var _SelectTrigger = __webpack_require__("24ba");

var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);

var _util = __webpack_require__("d938");

var _PropTypes = __webpack_require__("87fc");

var _contains = __webpack_require__("af8e");

var _contains2 = _interopRequireDefault(_contains);

var _env = __webpack_require__("a9eb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_vue2['default'].use(_vueRef2['default'], { name: 'ant-ref' });
var SELECT_EMPTY_VALUE_KEY = 'RC_SELECT_EMPTY_VALUE_KEY';

var noop = function noop() {
  return null;
};

// Where el is the DOM element you'd like to test for visibility
function isHidden(node) {
  return !node || node.offsetParent === null;
}

function chaining() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // eslint-disable-line
    // eslint-disable-line
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(chaining, args);
      }
    }
  };
}
var Select = {
  inheritAttrs: false,
  Option: _Option2['default'],
  OptGroup: _OptGroup2['default'],
  name: 'Select',
  mixins: [_BaseMixin2['default']],
  props: (0, _extends3['default'])({}, _PropTypes.SelectPropTypes, {
    prefixCls: _PropTypes.SelectPropTypes.prefixCls.def('rc-select'),
    defaultOpen: _vueTypes2['default'].bool.def(false),
    labelInValue: _PropTypes.SelectPropTypes.labelInValue.def(false),
    defaultActiveFirstOption: _PropTypes.SelectPropTypes.defaultActiveFirstOption.def(true),
    showSearch: _PropTypes.SelectPropTypes.showSearch.def(true),
    allowClear: _PropTypes.SelectPropTypes.allowClear.def(false),
    placeholder: _PropTypes.SelectPropTypes.placeholder.def(''),
    // showArrow: SelectPropTypes.showArrow.def(true),
    dropdownMatchSelectWidth: _vueTypes2['default'].bool.def(true),
    dropdownStyle: _PropTypes.SelectPropTypes.dropdownStyle.def(function () {
      return {};
    }),
    dropdownMenuStyle: _vueTypes2['default'].object.def(function () {
      return {};
    }),
    optionFilterProp: _PropTypes.SelectPropTypes.optionFilterProp.def('value'),
    optionLabelProp: _PropTypes.SelectPropTypes.optionLabelProp.def('value'),
    notFoundContent: _vueTypes2['default'].any.def('Not Found'),
    backfill: _vueTypes2['default'].bool.def(false),
    showAction: _PropTypes.SelectPropTypes.showAction.def(['click']),
    combobox: _vueTypes2['default'].bool.def(false),
    tokenSeparators: _vueTypes2['default'].arrayOf(_vueTypes2['default'].string).def([]),
    autoClearSearchValue: _vueTypes2['default'].bool.def(true),
    tabIndex: _vueTypes2['default'].any.def(0),
    dropdownRender: _vueTypes2['default'].func.def(function (menu) {
      return menu;
    })
    // onChange: noop,
    // onFocus: noop,
    // onBlur: noop,
    // onSelect: noop,
    // onSearch: noop,
    // onDeselect: noop,
    // onInputKeydown: noop,
  }),
  model: {
    prop: 'value',
    event: 'change'
  },
  created: function created() {
    this.saveInputRef = (0, _util.saveRef)(this, 'inputRef');
    this.saveInputMirrorRef = (0, _util.saveRef)(this, 'inputMirrorRef');
    this.saveTopCtrlRef = (0, _util.saveRef)(this, 'topCtrlRef');
    this.saveSelectTriggerRef = (0, _util.saveRef)(this, 'selectTriggerRef');
    this.saveRootRef = (0, _util.saveRef)(this, 'rootRef');
    this.saveSelectionRef = (0, _util.saveRef)(this, 'selectionRef');
    this._focused = false;
    this._mouseDown = false;
    this._options = [];
    this._empty = false;
  },
  data: function data() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var optionsInfo = this.getOptionsInfoFromProps(props);
    (0, _warning2['default'])(this.__propsSymbol__, 'Replace slots.default with props.children and pass props.__propsSymbol__');
    if (props.tags && typeof props.filterOption !== 'function') {
      var isDisabledExist = Object.keys(optionsInfo).some(function (key) {
        return optionsInfo[key].disabled;
      });
      (0, _warning2['default'])(!isDisabledExist, 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    }
    var state = {
      _value: this.getValueFromProps(props, true), // true: use default value
      _inputValue: props.combobox ? this.getInputValueForCombobox(props, optionsInfo, true // use default value
      ) : '',
      _open: props.defaultOpen,
      _optionsInfo: optionsInfo,
      _backfillValue: '',
      // a flag for aviod redundant getOptionsInfoFromProps call
      _skipBuildOptionsInfo: true,
      _ariaId: (0, _util.generateUUID)()
    };
    return (0, _extends3['default'])({}, state, {
      _mirrorInputValue: state._inputValue }, this.getDerivedState(props, state));
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // when defaultOpen is true, we should auto focus search input
      // https://github.com/ant-design/ant-design/issues/14254
      if (_this.autoFocus || _this._open) {
        _this.focus();
      }
      // this.setState({
      //   _ariaId: generateUUID(),
      // });
    });
  },

  watch: {
    __propsSymbol__: function __propsSymbol__() {
      (0, _extends3['default'])(this.$data, this.getDerivedState((0, _propsUtil.getOptionProps)(this), this.$data));
    },
    '$data._inputValue': function $data_inputValue(val) {
      this.$data._mirrorInputValue = val;
    }
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      if ((0, _util.isMultipleOrTags)(_this2.$props)) {
        var inputNode = _this2.getInputDOMNode();
        var mirrorNode = _this2.getInputMirrorDOMNode();
        if (inputNode && inputNode.value && mirrorNode) {
          inputNode.style.width = '';
          inputNode.style.width = mirrorNode.clientWidth + 10 + 'px';
        } else if (inputNode) {
          inputNode.style.width = '';
        }
      }
      _this2.forcePopupAlign();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearFocusTime();
    this.clearBlurTime();
    this.clearComboboxTime();
    if (this.dropdownContainer) {
      document.body.removeChild(this.dropdownContainer);
      this.dropdownContainer = null;
    }
  },

  methods: {
    getDerivedState: function getDerivedState(nextProps, prevState) {
      var optionsInfo = prevState._skipBuildOptionsInfo ? prevState._optionsInfo : this.getOptionsInfoFromProps(nextProps, prevState);

      var newState = {
        _optionsInfo: optionsInfo,
        _skipBuildOptionsInfo: false
      };

      if ('open' in nextProps) {
        newState._open = nextProps.open;
      }

      if ('value' in nextProps) {
        var value = this.getValueFromProps(nextProps);
        newState._value = value;
        if (nextProps.combobox) {
          newState._inputValue = this.getInputValueForCombobox(nextProps, optionsInfo);
        }
      }
      return newState;
    },
    getOptionsFromChildren: function getOptionsFromChildren() {
      var _this3 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      children.forEach(function (child) {
        if (!child.data || child.data.slot !== undefined) {
          return;
        }
        if ((0, _propsUtil.getSlotOptions)(child).isSelectOptGroup) {
          _this3.getOptionsFromChildren(child.componentOptions.children, options);
        } else {
          options.push(child);
        }
      });
      return options;
    },
    getInputValueForCombobox: function getInputValueForCombobox(props, optionsInfo, useDefaultValue) {
      var value = [];
      if ('value' in props && !useDefaultValue) {
        value = (0, _util.toArray)(props.value);
      }
      if ('defaultValue' in props && useDefaultValue) {
        value = (0, _util.toArray)(props.defaultValue);
      }
      if (value.length) {
        value = value[0];
      } else {
        return '';
      }
      var label = value;
      if (props.labelInValue) {
        label = value.label;
      } else if (optionsInfo[(0, _util.getMapKey)(value)]) {
        label = optionsInfo[(0, _util.getMapKey)(value)].label;
      }
      if (label === undefined) {
        label = '';
      }
      return label;
    },
    getLabelFromOption: function getLabelFromOption(props, option) {
      return (0, _util.getPropValue)(option, props.optionLabelProp);
    },
    getOptionsInfoFromProps: function getOptionsInfoFromProps(props, preState) {
      var _this4 = this;

      var options = this.getOptionsFromChildren(this.$props.children);
      var optionsInfo = {};
      options.forEach(function (option) {
        var singleValue = (0, _util.getValuePropValue)(option);
        optionsInfo[(0, _util.getMapKey)(singleValue)] = {
          option: option,
          value: singleValue,
          label: _this4.getLabelFromOption(props, option),
          title: (0, _propsUtil.getValueByProp)(option, 'title'),
          disabled: (0, _propsUtil.getValueByProp)(option, 'disabled')
        };
      });
      if (preState) {
        // keep option info in pre state value.
        var oldOptionsInfo = preState._optionsInfo;
        var value = preState._value;
        if (value) {
          value.forEach(function (v) {
            var key = (0, _util.getMapKey)(v);
            if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
              optionsInfo[key] = oldOptionsInfo[key];
            }
          });
        }
      }
      return optionsInfo;
    },
    getValueFromProps: function getValueFromProps(props, useDefaultValue) {
      var value = [];
      if ('value' in props && !useDefaultValue) {
        value = (0, _util.toArray)(props.value);
      }
      if ('defaultValue' in props && useDefaultValue) {
        value = (0, _util.toArray)(props.defaultValue);
      }
      if (props.labelInValue) {
        value = value.map(function (v) {
          return v.key;
        });
      }
      return value;
    },
    onInputChange: function onInputChange(e) {
      var _e$target = e.target,
          val = _e$target.value,
          composing = _e$target.composing;

      var _$data$_inputValue = this.$data._inputValue,
          _inputValue = _$data$_inputValue === undefined ? '' : _$data$_inputValue;

      if (e.isComposing || composing || _inputValue === val) {
        this.setState({
          _mirrorInputValue: val
        });
        return;
      }
      var tokenSeparators = this.$props.tokenSeparators;

      if ((0, _util.isMultipleOrTags)(this.$props) && tokenSeparators.length && (0, _util.includesSeparators)(val, tokenSeparators)) {
        var nextValue = this.getValueByInput(val);
        if (nextValue !== undefined) {
          this.fireChange(nextValue);
        }
        this.setOpenState(false, { needFocus: true });
        this.setInputValue('', false);
        return;
      }
      this.setInputValue(val);
      this.setState({
        _open: true
      });
      if ((0, _util.isCombobox)(this.$props)) {
        this.fireChange([val]);
      }
    },
    onDropdownVisibleChange: function onDropdownVisibleChange(open) {
      if (open && !this._focused) {
        this.clearBlurTime();
        this.timeoutFocus();
        this._focused = true;
        this.updateFocusClassName();
      }
      this.setOpenState(open);
    },


    // combobox ignore
    onKeyDown: function onKeyDown(event) {
      var open = this.$data._open;
      var disabled = this.$props.disabled;

      if (disabled) {
        return;
      }
      var keyCode = event.keyCode;
      if (open && !this.getInputDOMNode()) {
        this.onInputKeydown(event);
      } else if (keyCode === _KeyCode2['default'].ENTER || keyCode === _KeyCode2['default'].DOWN) {
        // vue state是同步更新，onKeyDown在onMenuSelect后会再次调用，单选时不在调用setOpenState
        // https://github.com/vueComponent/ant-design-vue/issues/1142
        if (keyCode === _KeyCode2['default'].ENTER && !(0, _util.isMultipleOrTags)(this.$props)) {
          this.maybeFocus(true);
        } else if (!open) {
          this.setOpenState(true);
        }
        event.preventDefault();
      } else if (keyCode === _KeyCode2['default'].SPACE) {
        // Not block space if popup is shown
        if (!open) {
          this.setOpenState(true);
          event.preventDefault();
        }
      }
    },
    onInputKeydown: function onInputKeydown(event) {
      var _this5 = this;

      var _$props = this.$props,
          disabled = _$props.disabled,
          combobox = _$props.combobox,
          defaultActiveFirstOption = _$props.defaultActiveFirstOption;

      if (disabled) {
        return;
      }
      var state = this.$data;
      var isRealOpen = this.getRealOpenState(state);
      var keyCode = event.keyCode;
      if ((0, _util.isMultipleOrTags)(this.$props) && !event.target.value && keyCode === _KeyCode2['default'].BACKSPACE) {
        event.preventDefault();
        var value = state._value;

        if (value.length) {
          this.removeSelected(value[value.length - 1]);
        }
        return;
      }
      if (keyCode === _KeyCode2['default'].DOWN) {
        if (!state._open) {
          this.openIfHasChildren();
          event.preventDefault();
          event.stopPropagation();
          return;
        }
      } else if (keyCode === _KeyCode2['default'].ENTER && state._open) {
        // Aviod trigger form submit when select item
        // https://github.com/ant-design/ant-design/issues/10861
        // https://github.com/ant-design/ant-design/issues/14544
        if (isRealOpen || !combobox) {
          event.preventDefault();
        }
        // Hard close popup to avoid lock of non option in combobox mode
        if (isRealOpen && combobox && defaultActiveFirstOption === false) {
          this.comboboxTimer = setTimeout(function () {
            _this5.setOpenState(false);
          });
        }
      } else if (keyCode === _KeyCode2['default'].ESC) {
        if (state._open) {
          this.setOpenState(false);
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }

      if (isRealOpen && this.selectTriggerRef) {
        var menu = this.selectTriggerRef.getInnerMenu();
        if (menu && menu.onKeyDown(event, this.handleBackfill)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    onMenuSelect: function onMenuSelect(_ref) {
      var item = _ref.item;

      if (!item) {
        return;
      }
      var value = this.$data._value;
      var props = this.$props;
      var selectedValue = (0, _util.getValuePropValue)(item);
      var lastValue = value[value.length - 1];
      var skipTrigger = false;

      if ((0, _util.isMultipleOrTags)(props)) {
        if ((0, _util.findIndexInValueBySingleValue)(value, selectedValue) !== -1) {
          skipTrigger = true;
        } else {
          value = value.concat([selectedValue]);
        }
      } else {
        if (!(0, _util.isCombobox)(props) && lastValue !== undefined && lastValue === selectedValue && selectedValue !== this.$data._backfillValue) {
          this.setOpenState(false, { needFocus: true, fireSearch: false });
          skipTrigger = true;
        } else {
          value = [selectedValue];
          this.setOpenState(false, { needFocus: true, fireSearch: false });
        }
      }
      if (!skipTrigger) {
        this.fireChange(value);
      }
      if (!skipTrigger) {
        this.fireSelect(selectedValue);
        var inputValue = (0, _util.isCombobox)(props) ? (0, _util.getPropValue)(item, props.optionLabelProp) : '';

        if (props.autoClearSearchValue) {
          this.setInputValue(inputValue, false);
        }
      }
    },
    onMenuDeselect: function onMenuDeselect(_ref2) {
      var item = _ref2.item,
          domEvent = _ref2.domEvent;

      if (domEvent.type === 'keydown' && domEvent.keyCode === _KeyCode2['default'].ENTER) {
        var menuItemDomNode = item.$el;
        // https://github.com/ant-design/ant-design/issues/20465#issuecomment-569033796
        if (!isHidden(menuItemDomNode)) {
          this.removeSelected((0, _util.getValuePropValue)(item));
        }
        return;
      }
      if (domEvent.type === 'click') {
        this.removeSelected((0, _util.getValuePropValue)(item));
      }
      if (this.autoClearSearchValue) {
        this.setInputValue('');
      }
    },
    onArrowClick: function onArrowClick(e) {
      e.stopPropagation();
      e.preventDefault();
      this.clearBlurTime();
      if (!this.disabled) {
        this.setOpenState(!this.$data._open, { needFocus: !this.$data._open });
      }
    },
    onPlaceholderClick: function onPlaceholderClick() {
      if (this.getInputDOMNode() && this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    },
    onPopupFocus: function onPopupFocus() {
      // fix ie scrollbar, focus element again
      this.maybeFocus(true, true);
    },
    onClearSelection: function onClearSelection(event) {
      var props = this.$props;
      var state = this.$data;
      if (props.disabled) {
        return;
      }
      var inputValue = state._inputValue,
          value = state._value;

      event.stopPropagation();
      if (inputValue || value.length) {
        if (value.length) {
          this.fireChange([]);
        }
        this.setOpenState(false, { needFocus: true });
        if (inputValue) {
          this.setInputValue('');
        }
      }
    },
    onChoiceAnimationLeave: function onChoiceAnimationLeave() {
      this.forcePopupAlign();
    },
    getOptionInfoBySingleValue: function getOptionInfoBySingleValue(value, optionsInfo) {
      var h = this.$createElement;

      var info = void 0;
      optionsInfo = optionsInfo || this.$data._optionsInfo;
      if (optionsInfo[(0, _util.getMapKey)(value)]) {
        info = optionsInfo[(0, _util.getMapKey)(value)];
      }
      if (info) {
        return info;
      }
      var defaultLabel = value;
      if (this.$props.labelInValue) {
        var valueLabel = (0, _util.getLabelFromPropsValue)(this.$props.value, value);
        var defaultValueLabel = (0, _util.getLabelFromPropsValue)(this.$props.defaultValue, value);
        if (valueLabel !== undefined) {
          defaultLabel = valueLabel;
        } else if (defaultValueLabel !== undefined) {
          defaultLabel = defaultValueLabel;
        }
      }
      var defaultInfo = {
        option: h(
          _Option2['default'],
          {
            attrs: { value: value },
            key: value },
          [value]
        ),
        value: value,
        label: defaultLabel
      };
      return defaultInfo;
    },
    getOptionBySingleValue: function getOptionBySingleValue(value) {
      var _getOptionInfoBySingl = this.getOptionInfoBySingleValue(value),
          option = _getOptionInfoBySingl.option;

      return option;
    },
    getOptionsBySingleValue: function getOptionsBySingleValue(values) {
      var _this6 = this;

      return values.map(function (value) {
        return _this6.getOptionBySingleValue(value);
      });
    },
    getValueByLabel: function getValueByLabel(label) {
      var _this7 = this;

      if (label === undefined) {
        return null;
      }
      var value = null;
      Object.keys(this.$data._optionsInfo).forEach(function (key) {
        var info = _this7.$data._optionsInfo[key];
        var disabled = info.disabled;

        if (disabled) {
          return;
        }
        var oldLable = (0, _util.toArray)(info.label);
        if (oldLable && oldLable.join('') === label) {
          value = info.value;
        }
      });
      return value;
    },
    getVLBySingleValue: function getVLBySingleValue(value) {
      if (this.$props.labelInValue) {
        return {
          key: value,
          label: this.getLabelBySingleValue(value)
        };
      }
      return value;
    },
    getVLForOnChange: function getVLForOnChange(vlsS) {
      var _this8 = this;

      var vls = vlsS;
      if (vls !== undefined) {
        if (!this.labelInValue) {
          vls = vls.map(function (v) {
            return v;
          });
        } else {
          vls = vls.map(function (vl) {
            return {
              key: vl,
              label: _this8.getLabelBySingleValue(vl)
            };
          });
        }
        return (0, _util.isMultipleOrTags)(this.$props) ? vls : vls[0];
      }
      return vls;
    },
    getLabelBySingleValue: function getLabelBySingleValue(value, optionsInfo) {
      var _getOptionInfoBySingl2 = this.getOptionInfoBySingleValue(value, optionsInfo),
          label = _getOptionInfoBySingl2.label;

      return label;
    },
    getDropdownContainer: function getDropdownContainer() {
      if (!this.dropdownContainer) {
        this.dropdownContainer = document.createElement('div');
        document.body.appendChild(this.dropdownContainer);
      }
      return this.dropdownContainer;
    },
    getPlaceholderElement: function getPlaceholderElement() {
      var h = this.$createElement;
      var props = this.$props,
          state = this.$data;

      var hidden = false;
      if (state._mirrorInputValue) {
        hidden = true;
      }
      var value = state._value;
      if (value.length) {
        hidden = true;
      }
      if (!state._mirrorInputValue && (0, _util.isCombobox)(props) && value.length === 1 && state._value && !state._value[0]) {
        hidden = false;
      }
      var placeholder = props.placeholder;
      if (placeholder) {
        var p = {
          on: {
            mousedown: _util.preventDefaultEvent,
            click: this.onPlaceholderClick
          },
          attrs: _util.UNSELECTABLE_ATTRIBUTE,
          style: (0, _extends3['default'])({
            display: hidden ? 'none' : 'block'
          }, _util.UNSELECTABLE_STYLE),
          'class': props.prefixCls + '-selection__placeholder'
        };
        return h(
          'div',
          p,
          [placeholder]
        );
      }
      return null;
    },
    inputClick: function inputClick(e) {
      if (this.$data._open) {
        this.clearBlurTime();
        e.stopPropagation();
      } else {
        this._focused = false;
      }
    },
    inputBlur: function inputBlur(e) {
      var _this9 = this;

      var target = e.relatedTarget || document.activeElement;

      // https://github.com/vueComponent/ant-design-vue/issues/999
      // https://github.com/vueComponent/ant-design-vue/issues/1223
      if ((_env.isIE || _env.isEdge) && (e.relatedTarget === this.$refs.arrow || target && this.selectTriggerRef && this.selectTriggerRef.getInnerMenu() && this.selectTriggerRef.getInnerMenu().$el === target || (0, _contains2['default'])(e.target, target))) {
        e.target.focus();
        e.preventDefault();
        return;
      }
      this.clearBlurTime();
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      this.blurTimer = setTimeout(function () {
        _this9._focused = false;
        _this9.updateFocusClassName();
        var props = _this9.$props;
        var value = _this9.$data._value;
        var inputValue = _this9.$data._inputValue;

        if ((0, _util.isSingleMode)(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
          var options = _this9._options || [];
          if (options.length) {
            var firstOption = (0, _util.findFirstMenuItem)(options);
            if (firstOption) {
              value = [(0, _util.getValuePropValue)(firstOption)];
              _this9.fireChange(value);
            }
          }
        } else if ((0, _util.isMultipleOrTags)(props) && inputValue) {
          if (_this9._mouseDown) {
            // need update dropmenu when not blur
            _this9.setInputValue('');
          } else {
            // why not use setState?
            _this9.$data._inputValue = '';
            if (_this9.getInputDOMNode && _this9.getInputDOMNode()) {
              _this9.getInputDOMNode().value = '';
            }
          }
          var tmpValue = _this9.getValueByInput(inputValue);
          if (tmpValue !== undefined) {
            value = tmpValue;
            _this9.fireChange(value);
          }
        }
        // if click the rest space of Select in multiple mode
        if ((0, _util.isMultipleOrTags)(props) && _this9._mouseDown) {
          _this9.maybeFocus(true, true);
          _this9._mouseDown = false;
          return;
        }
        _this9.setOpenState(false);
        _this9.$emit('blur', _this9.getVLForOnChange(value));
      }, 200);
    },
    inputFocus: function inputFocus(e) {
      if (this.$props.disabled) {
        e.preventDefault();
        return;
      }
      this.clearBlurTime();

      // In IE11, onOuterFocus will be trigger twice when focus input
      // First one: e.target is div
      // Second one: e.target is input
      // other browser only trigger second one
      // https://github.com/ant-design/ant-design/issues/15942
      // Here we ignore the first one when e.target is div
      var inputNode = this.getInputDOMNode();
      if (inputNode && e.target === this.rootRef) {
        return;
      }
      if (!(0, _util.isMultipleOrTagsOrCombobox)(this.$props) && e.target === inputNode) {
        return;
      }
      if (this._focused) {
        return;
      }
      this._focused = true;
      this.updateFocusClassName();
      // only effect multiple or tag mode
      if (!(0, _util.isMultipleOrTags)(this.$props) || !this._mouseDown) {
        this.timeoutFocus();
      }
    },
    _getInputElement: function _getInputElement() {
      var h = this.$createElement;

      var props = this.$props;
      var _$data = this.$data,
          inputValue = _$data._inputValue,
          _mirrorInputValue = _$data._mirrorInputValue;

      var attrs = (0, _propsUtil.getAttrs)(this);
      var defaultInput = h('input', {
        attrs: { id: attrs.id, autoComplete: 'off' }
      });

      var inputElement = props.getInputElement ? props.getInputElement() : defaultInput;
      var inputCls = (0, _classnames3['default'])((0, _propsUtil.getClass)(inputElement), (0, _defineProperty3['default'])({}, props.prefixCls + '-search__field', true));
      var inputEvents = (0, _propsUtil.getEvents)(inputElement);
      // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
      // Add space to the end of the inputValue as the width measurement tolerance
      inputElement.data = inputElement.data || {};
      return h(
        'div',
        { 'class': props.prefixCls + '-search__field__wrap', on: {
            'click': this.inputClick
          }
        },
        [(0, _vnode.cloneElement)(inputElement, {
          props: {
            disabled: props.disabled,
            value: inputValue
          },
          attrs: (0, _extends3['default'])({}, inputElement.data.attrs || {}, {
            disabled: props.disabled,
            value: inputValue
          }),
          domProps: {
            value: inputValue
          },
          'class': inputCls,
          directives: [{
            name: 'ant-ref',
            value: this.saveInputRef
          }, {
            name: 'ant-input'
          }],
          on: {
            input: this.onInputChange,
            keydown: chaining(this.onInputKeydown, inputEvents.keydown, (0, _propsUtil.getListeners)(this).inputKeydown),
            focus: chaining(this.inputFocus, inputEvents.focus),
            blur: chaining(this.inputBlur, inputEvents.blur)
          }
        }), h(
          'span',
          (0, _babelHelperVueJsxMergeProps2['default'])([{
            directives: [{
              name: 'ant-ref',
              value: this.saveInputMirrorRef
            }]
          }, {
            // ref='inputMirrorRef'
            'class': props.prefixCls + '-search__field__mirror'
          }]),
          [_mirrorInputValue, '\xA0']
        )]
      );
    },
    getInputDOMNode: function getInputDOMNode() {
      return this.topCtrlRef ? this.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : this.inputRef;
    },
    getInputMirrorDOMNode: function getInputMirrorDOMNode() {
      return this.inputMirrorRef;
    },
    getPopupDOMNode: function getPopupDOMNode() {
      if (this.selectTriggerRef) {
        return this.selectTriggerRef.getPopupDOMNode();
      }
    },
    getPopupMenuComponent: function getPopupMenuComponent() {
      if (this.selectTriggerRef) {
        return this.selectTriggerRef.getInnerMenu();
      }
    },
    setOpenState: function setOpenState(open) {
      var _this10 = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var props = this.$props,
          state = this.$data;
      var needFocus = config.needFocus,
          fireSearch = config.fireSearch;

      if (state._open === open) {
        this.maybeFocus(open, !!needFocus);
        return;
      }
      this.__emit('dropdownVisibleChange', open);
      var nextState = {
        _open: open,
        _backfillValue: ''
      };
      // clear search input value when open is false in singleMode.
      if (!open && (0, _util.isSingleMode)(props) && props.showSearch) {
        this.setInputValue('', fireSearch);
      }
      if (!open) {
        this.maybeFocus(open, !!needFocus);
      }
      this.setState(nextState, function () {
        if (open) {
          _this10.maybeFocus(open, !!needFocus);
        }
      });
    },
    setInputValue: function setInputValue(inputValue) {
      var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (inputValue !== this.$data._inputValue) {
        this.setState({
          _inputValue: inputValue
        }, this.forcePopupAlign);
        if (fireSearch) {
          this.$emit('search', inputValue);
        }
      }
    },
    getValueByInput: function getValueByInput(str) {
      var _this11 = this;

      var _$props2 = this.$props,
          multiple = _$props2.multiple,
          tokenSeparators = _$props2.tokenSeparators;

      var nextValue = this.$data._value;
      var hasNewValue = false;
      (0, _util.splitBySeparators)(str, tokenSeparators).forEach(function (label) {
        var selectedValue = [label];
        if (multiple) {
          var value = _this11.getValueByLabel(label);
          if (value && (0, _util.findIndexInValueBySingleValue)(nextValue, value) === -1) {
            nextValue = nextValue.concat(value);
            hasNewValue = true;
            _this11.fireSelect(value);
          }
        } else if ((0, _util.findIndexInValueBySingleValue)(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;
          _this11.fireSelect(label);
        }
      });
      return hasNewValue ? nextValue : undefined;
    },
    getRealOpenState: function getRealOpenState(state) {
      var _open = this.$props.open;

      if (typeof _open === 'boolean') {
        return _open;
      }

      var open = (state || this.$data)._open;
      var options = this._options || [];
      if ((0, _util.isMultipleOrTagsOrCombobox)(this.$props) || !this.$props.showSearch) {
        if (open && !options.length) {
          open = false;
        }
      }
      return open;
    },
    focus: function focus() {
      if ((0, _util.isSingleMode)(this.$props) && this.selectionRef) {
        this.selectionRef.focus();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    },
    blur: function blur() {
      if ((0, _util.isSingleMode)(this.$props) && this.selectionRef) {
        this.selectionRef.blur();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().blur();
      }
    },
    markMouseDown: function markMouseDown() {
      this._mouseDown = true;
    },
    markMouseLeave: function markMouseLeave() {
      this._mouseDown = false;
    },
    handleBackfill: function handleBackfill(item) {
      if (!this.backfill || !((0, _util.isSingleMode)(this.$props) || (0, _util.isCombobox)(this.$props))) {
        return;
      }

      var key = (0, _util.getValuePropValue)(item);

      if ((0, _util.isCombobox)(this.$props)) {
        this.setInputValue(key, false);
      }

      this.setState({
        _value: [key],
        _backfillValue: key
      });
    },
    _filterOption: function _filterOption(input, child) {
      var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util.defaultFilterFn;
      var _$data2 = this.$data,
          value = _$data2._value,
          backfillValue = _$data2._backfillValue;

      var lastValue = value[value.length - 1];
      if (!input || lastValue && lastValue === backfillValue) {
        return true;
      }
      var filterFn = this.$props.filterOption;
      if ((0, _propsUtil.hasProp)(this, 'filterOption')) {
        if (filterFn === true) {
          filterFn = defaultFilter.bind(this);
        }
      } else {
        filterFn = defaultFilter.bind(this);
      }
      if (!filterFn) {
        return true;
      } else if (typeof filterFn === 'function') {
        return filterFn.call(this, input, child);
      } else if ((0, _propsUtil.getValueByProp)(child, 'disabled')) {
        return false;
      }
      return true;
    },
    timeoutFocus: function timeoutFocus() {
      var _this12 = this;

      if (this.focusTimer) {
        this.clearFocusTime();
      }
      this.focusTimer = window.setTimeout(function () {
        // this._focused = true
        // this.updateFocusClassName()
        _this12.$emit('focus');
      }, 10);
    },
    clearFocusTime: function clearFocusTime() {
      if (this.focusTimer) {
        clearTimeout(this.focusTimer);
        this.focusTimer = null;
      }
    },
    clearBlurTime: function clearBlurTime() {
      if (this.blurTimer) {
        clearTimeout(this.blurTimer);
        this.blurTimer = null;
      }
    },
    clearComboboxTime: function clearComboboxTime() {
      if (this.comboboxTimer) {
        clearTimeout(this.comboboxTimer);
        this.comboboxTimer = null;
      }
    },
    updateFocusClassName: function updateFocusClassName() {
      var rootRef = this.rootRef,
          prefixCls = this.prefixCls;
      // avoid setState and its side effect

      if (this._focused) {
        (0, _componentClasses2['default'])(rootRef).add(prefixCls + '-focused');
      } else {
        (0, _componentClasses2['default'])(rootRef).remove(prefixCls + '-focused');
      }
    },
    maybeFocus: function maybeFocus(open, needFocus) {
      if (needFocus || open) {
        var input = this.getInputDOMNode();
        var _document = document,
            activeElement = _document.activeElement;

        if (input && (open || (0, _util.isMultipleOrTagsOrCombobox)(this.$props))) {
          if (activeElement !== input) {
            input.focus();
            this._focused = true;
          }
        } else if (activeElement !== this.selectionRef && this.selectionRef) {
          this.selectionRef.focus();
          this._focused = true;
        }
      }
    },
    removeSelected: function removeSelected(selectedKey, e) {
      var props = this.$props;
      if (props.disabled || this.isChildDisabled(selectedKey)) {
        return;
      }
      // Do not trigger Trigger popup
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
      var oldValue = this.$data._value;
      var value = oldValue.filter(function (singleValue) {
        return singleValue !== selectedKey;
      });
      var canMultiple = (0, _util.isMultipleOrTags)(props);

      if (canMultiple) {
        var event = selectedKey;
        if (props.labelInValue) {
          event = {
            key: selectedKey,
            label: this.getLabelBySingleValue(selectedKey)
          };
        }
        this.$emit('deselect', event, this.getOptionBySingleValue(selectedKey));
      }
      this.fireChange(value);
    },
    openIfHasChildren: function openIfHasChildren() {
      var $props = this.$props;

      if ($props.children && $props.children.length || (0, _util.isSingleMode)($props)) {
        this.setOpenState(true);
      }
    },
    fireSelect: function fireSelect(value) {
      this.$emit('select', this.getVLBySingleValue(value), this.getOptionBySingleValue(value));
    },
    fireChange: function fireChange(value) {
      if (!(0, _propsUtil.hasProp)(this, 'value')) {
        this.setState({
          _value: value
        }, this.forcePopupAlign);
      }
      var vls = this.getVLForOnChange(value);
      var options = this.getOptionsBySingleValue(value);
      this._valueOptions = options;
      this.$emit('change', vls, (0, _util.isMultipleOrTags)(this.$props) ? options : options[0]);
    },
    isChildDisabled: function isChildDisabled(key) {
      return (this.$props.children || []).some(function (child) {
        var childValue = (0, _util.getValuePropValue)(child);
        return childValue === key && (0, _propsUtil.getValueByProp)(child, 'disabled');
      });
    },
    forcePopupAlign: function forcePopupAlign() {
      if (!this.$data._open) {
        return;
      }
      if (this.selectTriggerRef && this.selectTriggerRef.triggerRef) {
        this.selectTriggerRef.triggerRef.forcePopupAlign();
      }
    },
    renderFilterOptions: function renderFilterOptions() {
      var h = this.$createElement;
      var inputValue = this.$data._inputValue;
      var _$props3 = this.$props,
          children = _$props3.children,
          tags = _$props3.tags,
          notFoundContent = _$props3.notFoundContent;

      var menuItems = [];
      var childrenKeys = [];
      var empty = false;
      var options = this.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);
      if (tags) {
        // tags value must be string
        var value = this.$data._value;
        value = value.filter(function (singleValue) {
          return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
        });

        // sort by length
        value.sort(function (val1, val2) {
          return val1.length - val2.length;
        });

        value.forEach(function (singleValue) {
          var key = singleValue;
          var attrs = (0, _extends3['default'])({}, _util.UNSELECTABLE_ATTRIBUTE, {
            role: 'option'
          });
          var menuItem = h(
            _vcMenu.Item,
            (0, _babelHelperVueJsxMergeProps2['default'])([{ style: _util.UNSELECTABLE_STYLE }, { attrs: attrs }, {
              attrs: { value: key },
              key: key }]),
            [key]
          );
          options.push(menuItem);
          menuItems.push(menuItem);
        });
        // ref: https://github.com/ant-design/ant-design/issues/14090
        if (inputValue && menuItems.every(function (option) {
          return (0, _util.getValuePropValue)(option) !== inputValue;
        })) {
          var p = {
            attrs: _util.UNSELECTABLE_ATTRIBUTE,
            key: inputValue,
            props: {
              value: inputValue,
              role: 'option'
            },
            style: _util.UNSELECTABLE_STYLE
          };
          options.unshift(h(
            _vcMenu.Item,
            p,
            [inputValue]
          ));
        }
      }

      if (!options.length && notFoundContent) {
        empty = true;
        var _p = {
          attrs: _util.UNSELECTABLE_ATTRIBUTE,
          key: 'NOT_FOUND',
          props: {
            value: 'NOT_FOUND',
            disabled: true,
            role: 'option'
          },
          style: _util.UNSELECTABLE_STYLE
        };
        options = [h(
          _vcMenu.Item,
          _p,
          [notFoundContent]
        )];
      }
      return { empty: empty, options: options };
    },
    renderFilterOptionsFromChildren: function renderFilterOptionsFromChildren() {
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _this13 = this;

      var childrenKeys = arguments[1];
      var menuItems = arguments[2];
      var h = this.$createElement;

      var sel = [];
      var props = this.$props;
      var inputValue = this.$data._inputValue;

      var tags = props.tags;
      children.forEach(function (child) {
        if (!child.data || child.data.slot !== undefined) {
          return;
        }
        if ((0, _propsUtil.getSlotOptions)(child).isSelectOptGroup) {
          var label = (0, _propsUtil.getComponentFromProp)(child, 'label');
          var key = child.key;
          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          }
          var childChildren = (0, _propsUtil.getSlots)(child)['default'];
          childChildren = typeof childChildren === 'function' ? childChildren() : childChildren;
          // Match option group label
          if (inputValue && _this13._filterOption(inputValue, child)) {
            var innerItems = childChildren.map(function (subChild) {
              var childValueSub = (0, _util.getValuePropValue)(subChild) || subChild.key;
              return h(
                _vcMenu.Item,
                (0, _babelHelperVueJsxMergeProps2['default'])([{ key: childValueSub, attrs: { value: childValueSub }
                }, subChild.data]),
                [subChild.componentOptions.children]
              );
            });

            sel.push(h(
              _vcMenu.ItemGroup,
              { key: key, attrs: { title: label },
                'class': (0, _propsUtil.getClass)(child) },
              [innerItems]
            ));

            // Not match
          } else {
            var _innerItems = _this13.renderFilterOptionsFromChildren(childChildren, childrenKeys, menuItems);
            if (_innerItems.length) {
              sel.push(h(
                _vcMenu.ItemGroup,
                (0, _babelHelperVueJsxMergeProps2['default'])([{ key: key, attrs: { title: label }
                }, child.data]),
                [_innerItems]
              ));
            }
          }

          return;
        }
        (0, _warning2['default'])((0, _propsUtil.getSlotOptions)(child).isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + ('instead of `' + ((0, _propsUtil.getSlotOptions)(child).name || (0, _propsUtil.getSlotOptions)(child)) + '`.'));

        var childValue = (0, _util.getValuePropValue)(child);

        (0, _util.validateOptionValue)(childValue, _this13.$props);
        if (_this13._filterOption(inputValue, child)) {
          var p = {
            attrs: (0, _extends3['default'])({}, _util.UNSELECTABLE_ATTRIBUTE, (0, _propsUtil.getAttrs)(child)),
            key: childValue,
            props: (0, _extends3['default'])({
              value: childValue
            }, (0, _propsUtil.getPropsData)(child), {
              role: 'option'
            }),
            style: _util.UNSELECTABLE_STYLE,
            on: (0, _propsUtil.getEvents)(child),
            'class': (0, _propsUtil.getClass)(child)
          };
          var menuItem = h(
            _vcMenu.Item,
            p,
            [child.componentOptions.children]
          );
          sel.push(menuItem);
          menuItems.push(menuItem);
        }
        if (tags) {
          childrenKeys.push(childValue);
        }
      });

      return sel;
    },
    renderTopControlNode: function renderTopControlNode() {
      var _this14 = this;

      var h = this.$createElement;
      var props = this.$props;
      var _$data3 = this.$data,
          value = _$data3._value,
          inputValue = _$data3._inputValue,
          open = _$data3._open;
      var choiceTransitionName = props.choiceTransitionName,
          prefixCls = props.prefixCls,
          maxTagTextLength = props.maxTagTextLength,
          maxTagCount = props.maxTagCount,
          maxTagPlaceholder = props.maxTagPlaceholder,
          showSearch = props.showSearch;

      var removeIcon = (0, _propsUtil.getComponentFromProp)(this, 'removeIcon');
      var className = prefixCls + '-selection__rendered';
      // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
      var innerNode = null;
      if ((0, _util.isSingleMode)(props)) {
        var selectedValue = null;
        if (value.length) {
          var showSelectedValue = false;
          var opacity = 1;
          if (!showSearch) {
            showSelectedValue = true;
          } else if (open) {
            showSelectedValue = !inputValue;
            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }
          var singleValue = value[0];

          var _getOptionInfoBySingl3 = this.getOptionInfoBySingleValue(singleValue),
              label = _getOptionInfoBySingl3.label,
              title = _getOptionInfoBySingl3.title;

          selectedValue = h(
            'div',
            {
              key: 'value',
              'class': prefixCls + '-selection-selected-value',
              attrs: { title: (0, _util.toTitle)(title || label)
              },
              style: {
                display: showSelectedValue ? 'block' : 'none',
                opacity: opacity
              }
            },
            [label]
          );
        }
        if (!showSearch) {
          innerNode = [selectedValue];
        } else {
          innerNode = [selectedValue, h(
            'div',
            {
              'class': prefixCls + '-search ' + prefixCls + '-search--inline',
              key: 'input',
              style: {
                display: open ? 'block' : 'none'
              }
            },
            [this._getInputElement()]
          )];
        }
      } else {
        var selectedValueNodes = [];
        var limitedCountValue = value;
        var maxTagPlaceholderEl = void 0;
        if (maxTagCount !== undefined && value.length > maxTagCount) {
          limitedCountValue = limitedCountValue.slice(0, maxTagCount);
          var omittedValues = this.getVLForOnChange(value.slice(maxTagCount, value.length));
          var content = '+ ' + (value.length - maxTagCount) + ' ...';
          if (maxTagPlaceholder) {
            content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
          }
          var attrs = (0, _extends3['default'])({}, _util.UNSELECTABLE_ATTRIBUTE, {
            role: 'presentation',
            title: (0, _util.toTitle)(content)
          });
          maxTagPlaceholderEl = h(
            'li',
            (0, _babelHelperVueJsxMergeProps2['default'])([{
              style: _util.UNSELECTABLE_STYLE
            }, { attrs: attrs }, {
              on: {
                'mousedown': _util.preventDefaultEvent
              },

              'class': prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled',
              key: 'maxTagPlaceholder'
            }]),
            [h(
              'div',
              { 'class': prefixCls + '-selection__choice__content' },
              [content]
            )]
          );
        }
        if ((0, _util.isMultipleOrTags)(props)) {
          selectedValueNodes = limitedCountValue.map(function (singleValue) {
            var info = _this14.getOptionInfoBySingleValue(singleValue);
            var content = info.label;
            var title = info.title || content;
            if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
              content = content.slice(0, maxTagTextLength) + '...';
            }
            var disabled = _this14.isChildDisabled(singleValue);
            var choiceClassName = disabled ? prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled' : prefixCls + '-selection__choice';
            // attrs 放在一起，避免动态title混乱问题，很奇怪的问题 https://github.com/vueComponent/ant-design-vue/issues/588
            var attrs = (0, _extends3['default'])({}, _util.UNSELECTABLE_ATTRIBUTE, {
              role: 'presentation',
              title: (0, _util.toTitle)(title)
            });
            return h(
              'li',
              (0, _babelHelperVueJsxMergeProps2['default'])([{
                style: _util.UNSELECTABLE_STYLE
              }, { attrs: attrs }, {
                on: {
                  'mousedown': _util.preventDefaultEvent
                },

                'class': choiceClassName,
                key: singleValue || SELECT_EMPTY_VALUE_KEY
              }]),
              [h(
                'div',
                { 'class': prefixCls + '-selection__choice__content' },
                [content]
              ), disabled ? null : h(
                'span',
                {
                  on: {
                    'click': function click(event) {
                      _this14.removeSelected(singleValue, event);
                    }
                  },

                  'class': prefixCls + '-selection__choice__remove'
                },
                [removeIcon || h(
                  'i',
                  { 'class': prefixCls + '-selection__choice__remove-icon' },
                  ['\xD7']
                )]
              )]
            );
          });
        }
        if (maxTagPlaceholderEl) {
          selectedValueNodes.push(maxTagPlaceholderEl);
        }
        selectedValueNodes.push(h(
          'li',
          { 'class': prefixCls + '-search ' + prefixCls + '-search--inline', key: '__input' },
          [this._getInputElement()]
        ));

        if ((0, _util.isMultipleOrTags)(props) && choiceTransitionName) {
          var transitionProps = (0, _getTransitionProps2['default'])(choiceTransitionName, {
            tag: 'ul',
            afterLeave: this.onChoiceAnimationLeave
          });
          innerNode = h(
            'transition-group',
            transitionProps,
            [selectedValueNodes]
          );
        } else {
          innerNode = h('ul', [selectedValueNodes]);
        }
      }
      return h(
        'div',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          'class': className
        }, {
          directives: [{
            name: 'ant-ref',
            value: this.saveTopCtrlRef
          }]
        }, {
          on: {
            'click': this.topCtrlContainerClick
          }
        }]),
        [this.getPlaceholderElement(), innerNode]
      );
    },
    renderArrow: function renderArrow(multiple) {
      var h = this.$createElement;

      // showArrow : Set to true if not multiple by default but keep set value.
      var _$props4 = this.$props,
          _$props4$showArrow = _$props4.showArrow,
          showArrow = _$props4$showArrow === undefined ? !multiple : _$props4$showArrow,
          loading = _$props4.loading,
          prefixCls = _$props4.prefixCls;

      var inputIcon = (0, _propsUtil.getComponentFromProp)(this, 'inputIcon');
      if (!showArrow && !loading) {
        return null;
      }
      // if loading  have loading icon
      var defaultIcon = loading ? h('i', { 'class': prefixCls + '-arrow-loading' }) : h('i', { 'class': prefixCls + '-arrow-icon' });
      return h(
        'span',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          key: 'arrow',
          'class': prefixCls + '-arrow',
          style: _util.UNSELECTABLE_STYLE
        }, { attrs: _util.UNSELECTABLE_ATTRIBUTE }, {
          on: {
            'click': this.onArrowClick
          },

          ref: 'arrow'
        }]),
        [inputIcon || defaultIcon]
      );
    },
    topCtrlContainerClick: function topCtrlContainerClick(e) {
      if (this.$data._open && !(0, _util.isSingleMode)(this.$props)) {
        e.stopPropagation();
      }
    },
    renderClear: function renderClear() {
      var h = this.$createElement;
      var _$props5 = this.$props,
          prefixCls = _$props5.prefixCls,
          allowClear = _$props5.allowClear;
      var _$data4 = this.$data,
          value = _$data4._value,
          inputValue = _$data4._inputValue;

      var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');
      var clear = h(
        'span',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          key: 'clear',
          'class': prefixCls + '-selection__clear',
          on: {
            'mousedown': _util.preventDefaultEvent
          },

          style: _util.UNSELECTABLE_STYLE
        }, { attrs: _util.UNSELECTABLE_ATTRIBUTE }, {
          on: {
            'click': this.onClearSelection
          }
        }]),
        [clearIcon || h(
          'i',
          { 'class': prefixCls + '-selection__clear-icon' },
          ['\xD7']
        )]
      );
      if (!allowClear) {
        return null;
      }
      if ((0, _util.isCombobox)(this.$props)) {
        if (inputValue) {
          return clear;
        }
        return null;
      }
      if (inputValue || value.length) {
        return clear;
      }
      return null;
    },
    selectionRefClick: function selectionRefClick() {
      //e.stopPropagation();
      if (!this.disabled) {
        var input = this.getInputDOMNode();
        if (this._focused && this.$data._open) {
          // this._focused = false;
          this.setOpenState(false, false);
          input && input.blur();
        } else {
          this.clearBlurTime();
          //this._focused = true;
          this.setOpenState(true, true);
          input && input.focus();
        }
      }
    },
    selectionRefFocus: function selectionRefFocus(e) {
      if (this._focused || this.disabled || (0, _util.isMultipleOrTagsOrCombobox)(this.$props)) {
        e.preventDefault();
        return;
      }
      this._focused = true;
      this.updateFocusClassName();
      this.$emit('focus');
    },
    selectionRefBlur: function selectionRefBlur(e) {
      if ((0, _util.isMultipleOrTagsOrCombobox)(this.$props)) {
        e.preventDefault();
        return;
      }
      this.inputBlur(e);
    }
  },

  render: function render() {
    var _rootCls;

    var h = arguments[0];

    var props = this.$props;
    var multiple = (0, _util.isMultipleOrTags)(props);
    // Default set showArrow to true if not set (not set directly in defaultProps to handle multiple case)
    var _props$showArrow = props.showArrow,
        showArrow = _props$showArrow === undefined ? true : _props$showArrow;

    var state = this.$data;
    var disabled = props.disabled,
        prefixCls = props.prefixCls,
        loading = props.loading;

    var ctrlNode = this.renderTopControlNode();
    var _$data5 = this.$data,
        open = _$data5._open,
        inputValue = _$data5._inputValue,
        value = _$data5._value;

    if (open) {
      var filterOptions = this.renderFilterOptions();
      this._empty = filterOptions.empty;
      this._options = filterOptions.options;
    }
    var realOpen = this.getRealOpenState();
    var empty = this._empty;
    var options = this._options || [];

    var _getListeners = (0, _propsUtil.getListeners)(this),
        _getListeners$mouseen = _getListeners.mouseenter,
        mouseenter = _getListeners$mouseen === undefined ? noop : _getListeners$mouseen,
        _getListeners$mousele = _getListeners.mouseleave,
        mouseleave = _getListeners$mousele === undefined ? noop : _getListeners$mousele,
        _getListeners$popupSc = _getListeners.popupScroll,
        popupScroll = _getListeners$popupSc === undefined ? noop : _getListeners$popupSc;

    var selectionProps = {
      props: {},
      attrs: {
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-haspopup': 'true',
        'aria-expanded': realOpen,
        'aria-controls': this.$data._ariaId
      },
      on: {
        // click: this.selectionRefClick,
      },
      'class': prefixCls + '-selection ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
      // directives: [
      //   {
      //     name: 'ant-ref',
      //     value: this.saveSelectionRef,
      //   },
      // ],
      key: 'selection'
    };
    //if (!isMultipleOrTagsOrCombobox(props)) {
    // selectionProps.on.keydown = this.onKeyDown;
    // selectionProps.on.focus = this.selectionRefFocus;
    // selectionProps.on.blur = this.selectionRefBlur;
    // selectionProps.attrs.tabIndex = props.disabled ? -1 : props.tabIndex;
    //}
    var extraSelectionProps = { attrs: { tabIndex: -1 } };
    if (!(0, _util.isMultipleOrTagsOrCombobox)(props)) {
      extraSelectionProps.attrs.tabIndex = props.disabled ? -1 : props.tabIndex;
    }
    var rootCls = (_rootCls = {}, (0, _defineProperty3['default'])(_rootCls, prefixCls, true), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-open', open), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-focused', open || !!this._focused), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-combobox', (0, _util.isCombobox)(props)), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-enabled', !disabled), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-allow-clear', !!props.allowClear), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-no-arrow', !showArrow), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-loading', !!loading), _rootCls);
    return h(
      _SelectTrigger2['default'],
      (0, _babelHelperVueJsxMergeProps2['default'])([{
        attrs: {
          dropdownAlign: props.dropdownAlign,
          dropdownClassName: props.dropdownClassName,
          dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
          defaultActiveFirstOption: props.defaultActiveFirstOption,
          dropdownMenuStyle: props.dropdownMenuStyle,
          transitionName: props.transitionName,
          animation: props.animation,
          prefixCls: props.prefixCls,
          dropdownStyle: props.dropdownStyle,
          combobox: props.combobox,
          showSearch: props.showSearch,
          options: options,
          empty: empty,
          multiple: multiple,
          disabled: disabled,
          visible: realOpen,
          inputValue: inputValue,
          value: value,
          backfillValue: state._backfillValue,
          firstActiveValue: props.firstActiveValue,

          getPopupContainer: props.getPopupContainer,

          showAction: props.showAction,
          menuItemSelectedIcon: (0, _propsUtil.getComponentFromProp)(this, 'menuItemSelectedIcon')
        },
        on: {
          'dropdownVisibleChange': this.onDropdownVisibleChange,
          'menuSelect': this.onMenuSelect,
          'menuDeselect': this.onMenuDeselect,
          'popupScroll': popupScroll,
          'popupFocus': this.onPopupFocus,
          'mouseenter': mouseenter,
          'mouseleave': mouseleave
        }
      }, {
        directives: [{
          name: 'ant-ref',
          value: this.saveSelectTriggerRef
        }]
      }, {
        attrs: {
          dropdownRender: props.dropdownRender,
          ariaId: this.$data._ariaId
        }
      }]),
      [h(
        'div',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          directives: [{
            name: 'ant-ref',
            value: chaining(this.saveRootRef, this.saveSelectionRef)
          }]
        }, {
          style: (0, _propsUtil.getStyle)(this),
          'class': (0, _classnames3['default'])(rootCls),
          on: {
            'mousedown': this.markMouseDown,
            'mouseup': this.markMouseLeave,
            'mouseout': this.markMouseLeave
          }
        }, extraSelectionProps, {
          on: {
            'blur': this.selectionRefBlur,
            'focus': this.selectionRefFocus,
            'click': this.selectionRefClick,
            'keydown': (0, _util.isMultipleOrTagsOrCombobox)(props) ? noop : this.onKeyDown
          }
        }]),
        [h(
          'div',
          selectionProps,
          [ctrlNode, this.renderClear(), this.renderArrow(!!multiple)]
        )]
      )]
    );
  }
};
exports.Select = Select;
exports['default'] = (0, _proxyComponent2['default'])(Select);

/***/ }),

/***/ "432f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.itemProps = exports.Item = exports.SubMenu = undefined;

var _Menu = __webpack_require__("94cd");

var _Menu2 = _interopRequireDefault(_Menu);

var _SubMenu = __webpack_require__("695d");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _MenuItem = __webpack_require__("ced9");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuItemGroup = __webpack_require__("e98d");

var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

var _Divider = __webpack_require__("d937");

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.SubMenu = _SubMenu2['default'];
exports.Item = _MenuItem2['default'];
exports.itemProps = _MenuItem.menuItemProps;
exports.MenuItem = _MenuItem2['default'];
exports.MenuItemGroup = _MenuItemGroup2['default'];
exports.ItemGroup = _MenuItemGroup2['default'];
exports.Divider = _Divider2['default']; // based on rc-menu 7.5.5

exports['default'] = _Menu2['default'];

/***/ }),

/***/ "4913":
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
    value: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    label: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])
  },
  isSelectOptGroup: true
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

/***/ "5c06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = wrapWithConnect;

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.name || 'Component';
}
function wrapWithConnect(WrappedComponent) {
  var tempProps = WrappedComponent.props || {};
  var methods = WrappedComponent.methods || {};
  var props = {};
  Object.keys(tempProps).forEach(function (k) {
    props[k] = (0, _extends3['default'])({}, tempProps[k], { required: false });
  });
  WrappedComponent.props.__propsSymbol__ = _vueTypes2['default'].any;
  WrappedComponent.props.children = _vueTypes2['default'].array.def([]);
  var ProxyWrappedComponent = {
    props: props,
    model: WrappedComponent.model,
    name: 'Proxy_' + getDisplayName(WrappedComponent),
    methods: {
      getProxyWrappedInstance: function getProxyWrappedInstance() {
        return this.$refs.wrappedInstance;
      }
    },
    render: function render() {
      var h = arguments[0];
      var _$slots = this.$slots,
          $slots = _$slots === undefined ? {} : _$slots,
          $scopedSlots = this.$scopedSlots;

      var props = (0, _propsUtil.getOptionProps)(this);
      var wrapProps = {
        props: (0, _extends3['default'])({}, props, {
          __propsSymbol__: Symbol(),
          componentWillReceiveProps: (0, _extends3['default'])({}, props),
          children: $slots['default'] || props.children || []
        }),
        on: (0, _propsUtil.getListeners)(this)
      };
      if (Object.keys($scopedSlots).length) {
        wrapProps.scopedSlots = $scopedSlots;
      }
      var slotsKey = Object.keys($slots);
      return h(
        WrappedComponent,
        (0, _babelHelperVueJsxMergeProps2['default'])([wrapProps, { ref: 'wrappedInstance' }]),
        [slotsKey.length ? slotsKey.map(function (name) {
          return h(
            'template',
            { slot: name },
            [$slots[name]]
          );
        }) : null]
      );
    }
  };
  Object.keys(methods).map(function (m) {
    ProxyWrappedComponent.methods[m] = function () {
      var _getProxyWrappedInsta;

      return (_getProxyWrappedInsta = this.getProxyWrappedInstance())[m].apply(_getProxyWrappedInsta, arguments);
    };
  });
  return ProxyWrappedComponent;
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

/***/ "6945":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _raf = __webpack_require__("c449");

var _raf2 = _interopRequireDefault(_raf);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcMenu = __webpack_require__("432f");

var _vcMenu2 = _interopRequireDefault(_vcMenu);

var _domScrollIntoView = __webpack_require__("ec44");

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _util = __webpack_require__("d938");

var _vnode = __webpack_require__("d2f9");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'DropdownMenu',
  mixins: [_BaseMixin2['default']],
  props: {
    ariaId: _vueTypes2['default'].string,
    defaultActiveFirstOption: _vueTypes2['default'].bool,
    value: _vueTypes2['default'].any,
    dropdownMenuStyle: _vueTypes2['default'].object,
    multiple: _vueTypes2['default'].bool,
    // onPopupFocus: PropTypes.func,
    // onPopupScroll: PropTypes.func,
    // onMenuDeSelect: PropTypes.func,
    // onMenuSelect: PropTypes.func,
    prefixCls: _vueTypes2['default'].string,
    menuItems: _vueTypes2['default'].any,
    inputValue: _vueTypes2['default'].string,
    visible: _vueTypes2['default'].bool,
    backfillValue: _vueTypes2['default'].any,
    firstActiveValue: _vueTypes2['default'].string,
    menuItemSelectedIcon: _vueTypes2['default'].any
  },
  watch: {
    visible: function visible(val) {
      var _this = this;

      if (!val) {
        this.lastVisible = val;
      } else {
        this.$nextTick(function () {
          _this.scrollActiveItemToView();
        });
      }
    }
  },

  created: function created() {
    this.rafInstance = null;
    this.lastInputValue = this.$props.inputValue;
    this.lastVisible = false;
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.scrollActiveItemToView();
    });
    this.lastVisible = this.$props.visible;
  },
  updated: function updated() {
    var props = this.$props;
    // if (!this.prevVisible && props.visible) {
    //   this.$nextTick(() => {
    //     this.scrollActiveItemToView();
    //   });
    // }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
    this.prevVisible = this.visible;
  },
  beforeDestroy: function beforeDestroy() {
    if (this.rafInstance) {
      _raf2['default'].cancel(this.rafInstance);
    }
  },

  methods: {
    scrollActiveItemToView: function scrollActiveItemToView() {
      var _this3 = this;

      // scroll into view
      var itemComponent = this.firstActiveItem && this.firstActiveItem.$el;
      var props = this.$props;
      var value = props.value,
          visible = props.visible,
          firstActiveValue = props.firstActiveValue;

      if (!itemComponent || !visible) {
        return;
      }
      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };
      if ((!value || value.length === 0) && firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      }
      // Delay to scroll since current frame item position is not ready when pre view is by filter
      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462
      this.rafInstance = (0, _raf2['default'])(function () {
        (0, _domScrollIntoView2['default'])(itemComponent, _this3.$refs.menuRef.$el, scrollIntoViewOpts);
      });
    },
    renderMenu: function renderMenu() {
      var _this4 = this;

      var h = this.$createElement;

      var props = this.$props;
      var menuItems = props.menuItems,
          defaultActiveFirstOption = props.defaultActiveFirstOption,
          value = props.value,
          prefixCls = props.prefixCls,
          multiple = props.multiple,
          inputValue = props.inputValue,
          firstActiveValue = props.firstActiveValue,
          dropdownMenuStyle = props.dropdownMenuStyle,
          backfillValue = props.backfillValue,
          visible = props.visible;

      var menuItemSelectedIcon = (0, _propsUtil.getComponentFromProp)(this, 'menuItemSelectedIcon');

      var _getListeners = (0, _propsUtil.getListeners)(this),
          menuDeselect = _getListeners.menuDeselect,
          menuSelect = _getListeners.menuSelect,
          popupScroll = _getListeners.popupScroll;

      if (menuItems && menuItems.length) {
        var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
        var menuProps = {
          props: {
            multiple: multiple,
            itemIcon: multiple ? menuItemSelectedIcon : null,
            selectedKeys: selectedKeys,
            prefixCls: prefixCls + '-menu'
          },
          on: {},
          style: dropdownMenuStyle,
          ref: 'menuRef',
          attrs: {
            role: 'listbox'
          }
        };
        if (popupScroll) {
          menuProps.on.scroll = popupScroll;
        }
        if (multiple) {
          menuProps.on.deselect = menuDeselect;
          menuProps.on.select = menuSelect;
        } else {
          menuProps.on.click = menuSelect;
        }
        var activeKeyProps = {};

        var defaultActiveFirst = defaultActiveFirstOption;
        var clonedMenuItems = menuItems;
        if (selectedKeys.length || firstActiveValue) {
          if (props.visible && !this.lastVisible) {
            activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
          } else if (!visible) {
            // Do not trigger auto active since we already have selectedKeys
            if (selectedKeys[0]) {
              defaultActiveFirst = false;
            }
            activeKeyProps.activeKey = undefined;
          }
          var foundFirst = false;
          // set firstActiveItem via cloning menus
          // for scroll into view
          var clone = function clone(item) {
            if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
              foundFirst = true;
              return (0, _vnode.cloneElement)(item, {
                directives: [{
                  name: 'ant-ref',
                  value: function value(ref) {
                    _this4.firstActiveItem = ref;
                  }
                }]
              });
            }
            return item;
          };

          clonedMenuItems = menuItems.map(function (item) {
            if ((0, _propsUtil.getSlotOptions)(item).isMenuItemGroup) {
              var children = item.componentOptions.children.map(clone);
              return (0, _vnode.cloneElement)(item, { children: children });
            }
            return clone(item);
          });
        } else {
          // Clear firstActiveItem when dropdown menu items was empty
          // Avoid `Unable to find node on an unmounted component`
          // https://github.com/ant-design/ant-design/issues/10774
          this.firstActiveItem = null;
        }

        // clear activeKey when inputValue change
        var lastValue = value && value[value.length - 1];
        if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
          activeKeyProps.activeKey = '';
        }
        menuProps.props = (0, _extends3['default'])({}, activeKeyProps, menuProps.props, { defaultActiveFirst: defaultActiveFirst });
        return h(
          _vcMenu2['default'],
          menuProps,
          [clonedMenuItems]
        );
      }
      return null;
    }
  },
  render: function render() {
    var h = arguments[0];

    var renderMenu = this.renderMenu();

    var _getListeners2 = (0, _propsUtil.getListeners)(this),
        popupFocus = _getListeners2.popupFocus,
        popupScroll = _getListeners2.popupScroll;

    return renderMenu ? h(
      'div',
      {
        style: {
          overflow: 'auto',
          transform: 'translateZ(0)'
        },
        attrs: { id: this.$props.ariaId,
          tabIndex: '-1'
        },
        on: {
          'focus': popupFocus,
          'mousedown': _util.preventDefaultEvent,
          'scroll': popupScroll
        },

        ref: 'menuContainer'
      },
      [renderMenu]
    ) : null;
  }
};

/***/ }),

/***/ "695d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__("41b2");

var _extends4 = _interopRequireDefault(_extends3);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcTrigger = __webpack_require__("2f52");

var _vcTrigger2 = _interopRequireDefault(_vcTrigger);

var _KeyCode = __webpack_require__("af09");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _store = __webpack_require__("e8a7");

var _SubPopupMenu = __webpack_require__("b733");

var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);

var _placements = __webpack_require__("ebf1");

var _placements2 = _interopRequireDefault(_placements);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("73c8");

var _requestAnimationTimeout = __webpack_require__("31f2");

var _util = __webpack_require__("7c18");

var _getTransitionProps = __webpack_require__("5c25");

var _getTransitionProps2 = _interopRequireDefault(_getTransitionProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var guid = 0;

var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var menuId = (0, _util.getMenuIdFromSubMenuEventKey)(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: (0, _extends4['default'])({}, state.defaultActiveFirst, (0, _defineProperty3['default'])({}, menuId, defaultActiveFirst))
  });
};

var SubMenu = {
  name: 'SubMenu',
  props: {
    parentMenu: _vueTypes2['default'].object,
    title: _vueTypes2['default'].any,
    selectedKeys: _vueTypes2['default'].array.def([]),
    openKeys: _vueTypes2['default'].array.def([]),
    openChange: _vueTypes2['default'].func.def(_util.noop),
    rootPrefixCls: _vueTypes2['default'].string,
    eventKey: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    multiple: _vueTypes2['default'].bool,
    active: _vueTypes2['default'].bool, // TODO: remove
    isRootMenu: _vueTypes2['default'].bool.def(false),
    index: _vueTypes2['default'].number,
    triggerSubMenuAction: _vueTypes2['default'].string,
    popupClassName: _vueTypes2['default'].string,
    getPopupContainer: _vueTypes2['default'].func,
    forceSubMenuRender: _vueTypes2['default'].bool,
    openAnimation: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object]),
    disabled: _vueTypes2['default'].bool,
    subMenuOpenDelay: _vueTypes2['default'].number.def(0.1),
    subMenuCloseDelay: _vueTypes2['default'].number.def(0.1),
    level: _vueTypes2['default'].number.def(1),
    inlineIndent: _vueTypes2['default'].number.def(24),
    openTransitionName: _vueTypes2['default'].string,
    popupOffset: _vueTypes2['default'].array,
    isOpen: _vueTypes2['default'].bool,
    store: _vueTypes2['default'].object,
    mode: _vueTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']).def('vertical'),
    manualRef: _vueTypes2['default'].func.def(_util.noop),
    builtinPlacements: _vueTypes2['default'].object.def(function () {
      return {};
    }),
    itemIcon: _vueTypes2['default'].any,
    expandIcon: _vueTypes2['default'].any,
    subMenuKey: _vueTypes2['default'].string
  },
  mixins: [_BaseMixin2['default']],
  isSubMenu: true,
  data: function data() {
    var props = this.$props;
    var store = props.store;
    var eventKey = props.eventKey;
    var defaultActiveFirst = store.getState().defaultActiveFirst;
    var value = false;

    if (defaultActiveFirst) {
      value = defaultActiveFirst[eventKey];
    }

    updateDefaultActiveFirst(store, eventKey, value);
    return {
      // defaultActiveFirst: false,
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.handleUpdated();
    });
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.handleUpdated();
    });
  },
  beforeDestroy: function beforeDestroy() {
    var eventKey = this.eventKey;

    this.__emit('destroy', eventKey);

    /* istanbul ignore if */
    if (this.minWidthTimeout) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(this.minWidthTimeout);
      this.minWidthTimeout = null;
    }

    /* istanbul ignore if */
    if (this.mouseenterTimeout) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(this.mouseenterTimeout);
      this.mouseenterTimeout = null;
    }
  },

  methods: {
    handleUpdated: function handleUpdated() {
      var _this3 = this;

      var _$props = this.$props,
          mode = _$props.mode,
          parentMenu = _$props.parentMenu,
          manualRef = _$props.manualRef;

      // invoke customized ref to expose component to mixin

      if (manualRef) {
        manualRef(this);
      }

      if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.isOpen) {
        return;
      }

      this.minWidthTimeout = (0, _requestAnimationTimeout.requestAnimationTimeout)(function () {
        return _this3.adjustWidth();
      }, 0);
    },
    onKeyDown: function onKeyDown(e) {
      var keyCode = e.keyCode;
      var menu = this.menuInstance;
      var _$props2 = this.$props,
          store = _$props2.store,
          isOpen = _$props2.isOpen;


      if (keyCode === _KeyCode2['default'].ENTER) {
        this.onTitleClick(e);
        updateDefaultActiveFirst(store, this.eventKey, true);
        return true;
      }

      if (keyCode === _KeyCode2['default'].RIGHT) {
        if (isOpen) {
          menu.onKeyDown(e);
        } else {
          this.triggerOpenChange(true);
          // need to update current menu's defaultActiveFirst value
          updateDefaultActiveFirst(store, this.eventKey, true);
        }
        return true;
      }
      if (keyCode === _KeyCode2['default'].LEFT) {
        var handled = void 0;
        if (isOpen) {
          handled = menu.onKeyDown(e);
        } else {
          return undefined;
        }
        if (!handled) {
          this.triggerOpenChange(false);
          handled = true;
        }
        return handled;
      }

      if (isOpen && (keyCode === _KeyCode2['default'].UP || keyCode === _KeyCode2['default'].DOWN)) {
        return menu.onKeyDown(e);
      }
      return undefined;
    },
    onPopupVisibleChange: function onPopupVisibleChange(visible) {
      this.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
    },
    onMouseEnter: function onMouseEnter(e) {
      var _$props3 = this.$props,
          key = _$props3.eventKey,
          store = _$props3.store;

      updateDefaultActiveFirst(store, key, false);
      this.__emit('mouseenter', {
        key: key,
        domEvent: e
      });
    },
    onMouseLeave: function onMouseLeave(e) {
      var eventKey = this.eventKey,
          parentMenu = this.parentMenu;

      parentMenu.subMenuInstance = this;
      // parentMenu.subMenuLeaveFn = () => {
      // // trigger mouseleave
      //   this.__emit('mouseleave', {
      //     key: eventKey,
      //     domEvent: e,
      //   })
      // }
      this.__emit('mouseleave', {
        key: eventKey,
        domEvent: e
      });
      // prevent popup menu and submenu gap
      // parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.subMenuLeaveFn, 100)
    },
    onTitleMouseEnter: function onTitleMouseEnter(domEvent) {
      var key = this.$props.eventKey;
      // this.clearSubMenuTitleLeaveTimer()

      this.__emit('itemHover', {
        key: key,
        hover: true
      });
      this.__emit('titleMouseenter', {
        key: key,
        domEvent: domEvent
      });
    },
    onTitleMouseLeave: function onTitleMouseLeave(e) {
      var eventKey = this.eventKey,
          parentMenu = this.parentMenu;

      parentMenu.subMenuInstance = this;
      this.__emit('itemHover', {
        key: eventKey,
        hover: false
      });
      this.__emit('titleMouseleave', {
        key: eventKey,
        domEvent: e
      });
    },
    onTitleClick: function onTitleClick(e) {
      var _$props4 = this.$props,
          triggerSubMenuAction = _$props4.triggerSubMenuAction,
          eventKey = _$props4.eventKey,
          isOpen = _$props4.isOpen,
          store = _$props4.store;

      this.__emit('titleClick', {
        key: eventKey,
        domEvent: e
      });
      if (triggerSubMenuAction === 'hover') {
        return;
      }
      this.triggerOpenChange(!isOpen, 'click');
      updateDefaultActiveFirst(store, eventKey, false);
    },
    onSubMenuClick: function onSubMenuClick(info) {
      this.__emit('click', this.addKeyPath(info));
    },
    getPrefixCls: function getPrefixCls() {
      return this.$props.rootPrefixCls + '-submenu';
    },
    getActiveClassName: function getActiveClassName() {
      return this.getPrefixCls() + '-active';
    },
    getDisabledClassName: function getDisabledClassName() {
      return this.getPrefixCls() + '-disabled';
    },
    getSelectedClassName: function getSelectedClassName() {
      return this.getPrefixCls() + '-selected';
    },
    getOpenClassName: function getOpenClassName() {
      return this.$props.rootPrefixCls + '-submenu-open';
    },
    saveMenuInstance: function saveMenuInstance(c) {
      // children menu instance
      this.menuInstance = c;
    },
    addKeyPath: function addKeyPath(info) {
      return (0, _extends4['default'])({}, info, {
        keyPath: (info.keyPath || []).concat(this.$props.eventKey)
      });
    },


    // triggerOpenChange (open, type) {
    //   const key = this.$props.eventKey
    //   this.__emit('openChange', {
    //     key,
    //     item: this,
    //     trigger: type,
    //     open,
    //   })
    // },
    triggerOpenChange: function triggerOpenChange(open, type) {
      var _this4 = this;

      var key = this.$props.eventKey;
      var openChange = function openChange() {
        _this4.__emit('openChange', {
          key: key,
          item: _this4,
          trigger: type,
          open: open
        });
      };
      if (type === 'mouseenter') {
        // make sure mouseenter happen after other menu item's mouseleave
        this.mouseenterTimeout = (0, _requestAnimationTimeout.requestAnimationTimeout)(function () {
          openChange();
        }, 0);
      } else {
        openChange();
      }
    },
    isChildrenSelected: function isChildrenSelected() {
      var ret = { find: false };
      (0, _util.loopMenuItemRecursively)(this.$slots['default'], this.$props.selectedKeys, ret);
      return ret.find;
    },

    // isOpen () {
    //   return this.$props.openKeys.indexOf(this.$props.eventKey) !== -1
    // },

    adjustWidth: function adjustWidth() {
      /* istanbul ignore if */
      if (!this.$refs.subMenuTitle || !this.menuInstance) {
        return;
      }
      var popupMenu = this.menuInstance.$el;
      if (popupMenu.offsetWidth >= this.$refs.subMenuTitle.offsetWidth) {
        return;
      }

      /* istanbul ignore next */
      popupMenu.style.minWidth = this.$refs.subMenuTitle.offsetWidth + 'px';
    },
    renderChildren: function renderChildren(children) {
      var h = this.$createElement;

      var props = this.$props;

      var _getListeners = (0, _propsUtil.getListeners)(this),
          select = _getListeners.select,
          deselect = _getListeners.deselect,
          openChange = _getListeners.openChange;

      var subPopupMenuProps = {
        props: {
          mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
          visible: props.isOpen,
          level: props.level + 1,
          inlineIndent: props.inlineIndent,
          focusable: false,
          selectedKeys: props.selectedKeys,
          eventKey: props.eventKey + '-menu-',
          openKeys: props.openKeys,
          openTransitionName: props.openTransitionName,
          openAnimation: props.openAnimation,
          subMenuOpenDelay: props.subMenuOpenDelay,
          parentMenu: this,
          subMenuCloseDelay: props.subMenuCloseDelay,
          forceSubMenuRender: props.forceSubMenuRender,
          triggerSubMenuAction: props.triggerSubMenuAction,
          builtinPlacements: props.builtinPlacements,
          defaultActiveFirst: props.store.getState().defaultActiveFirst[(0, _util.getMenuIdFromSubMenuEventKey)(props.eventKey)],
          multiple: props.multiple,
          prefixCls: props.rootPrefixCls,
          manualRef: this.saveMenuInstance,
          itemIcon: (0, _propsUtil.getComponentFromProp)(this, 'itemIcon'),
          expandIcon: (0, _propsUtil.getComponentFromProp)(this, 'expandIcon'),
          children: children
        },
        on: {
          click: this.onSubMenuClick,
          select: select,
          deselect: deselect,
          openChange: openChange
        },
        id: this.internalMenuId
      };
      var baseProps = subPopupMenuProps.props;
      var haveRendered = this.haveRendered;
      this.haveRendered = true;

      this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender;
      // never rendered not planning to, don't render
      if (!this.haveOpened) {
        return h('div');
      }

      // don't show transition on first rendering (no animation for opened menu)
      // show appear transition if it's not visible (not sure why)
      // show appear transition if it's not inline mode
      var transitionAppear = haveRendered || !baseProps.visible || !baseProps.mode === 'inline';
      subPopupMenuProps['class'] = ' ' + baseProps.prefixCls + '-sub';
      var animProps = { appear: transitionAppear, css: false };
      var transitionProps = {
        props: animProps,
        on: {}
      };
      if (baseProps.openTransitionName) {
        transitionProps = (0, _getTransitionProps2['default'])(baseProps.openTransitionName, {
          appear: transitionAppear
        });
      } else if ((0, _typeof3['default'])(baseProps.openAnimation) === 'object') {
        animProps = (0, _extends4['default'])({}, animProps, baseProps.openAnimation.props || {});
        if (!transitionAppear) {
          animProps.appear = false;
        }
      } else if (typeof baseProps.openAnimation === 'string') {
        transitionProps = (0, _getTransitionProps2['default'])(baseProps.openAnimation, { appear: transitionAppear });
      }

      if ((0, _typeof3['default'])(baseProps.openAnimation) === 'object' && baseProps.openAnimation.on) {
        transitionProps.on = baseProps.openAnimation.on;
      }
      return h(
        'transition',
        transitionProps,
        [h(_SubPopupMenu2['default'], (0, _babelHelperVueJsxMergeProps2['default'])([{
          directives: [{
            name: 'show',
            value: props.isOpen
          }]
        }, subPopupMenuProps]))]
      );
    }
  },

  render: function render() {
    var _className, _attrs;

    var h = arguments[0];

    var props = this.$props;
    var rootPrefixCls = this.rootPrefixCls,
        parentMenu = this.parentMenu;

    var isOpen = props.isOpen;
    var prefixCls = this.getPrefixCls();
    var isInlineMode = props.mode === 'inline';
    var className = (_className = {}, (0, _defineProperty3['default'])(_className, prefixCls, true), (0, _defineProperty3['default'])(_className, prefixCls + '-' + props.mode, true), (0, _defineProperty3['default'])(_className, this.getOpenClassName(), isOpen), (0, _defineProperty3['default'])(_className, this.getActiveClassName(), props.active || isOpen && !isInlineMode), (0, _defineProperty3['default'])(_className, this.getDisabledClassName(), props.disabled), (0, _defineProperty3['default'])(_className, this.getSelectedClassName(), this.isChildrenSelected()), _className);

    if (!this.internalMenuId) {
      if (props.eventKey) {
        this.internalMenuId = props.eventKey + '$Menu';
      } else {
        this.internalMenuId = '$__$' + ++guid + '$Menu';
      }
    }

    var mouseEvents = {};
    var titleClickEvents = {};
    var titleMouseEvents = {};
    if (!props.disabled) {
      mouseEvents = {
        mouseleave: this.onMouseLeave,
        mouseenter: this.onMouseEnter
      };

      // only works in title, not outer li
      titleClickEvents = {
        click: this.onTitleClick
      };
      titleMouseEvents = {
        mouseenter: this.onTitleMouseEnter,
        mouseleave: this.onTitleMouseLeave
      };
    }

    var style = {};
    if (isInlineMode) {
      style.paddingLeft = props.inlineIndent * props.level + 'px';
    }
    var ariaOwns = {};
    // only set aria-owns when menu is open
    // otherwise it would be an invalid aria-owns value
    // since corresponding node cannot be found
    if (isOpen) {
      ariaOwns = {
        'aria-owns': this.internalMenuId
      };
    }
    var titleProps = {
      attrs: (0, _extends4['default'])({
        'aria-expanded': isOpen
      }, ariaOwns, {
        'aria-haspopup': 'true',
        title: typeof props.title === 'string' ? props.title : undefined
      }),
      on: (0, _extends4['default'])({}, titleMouseEvents, titleClickEvents),
      style: style,
      'class': prefixCls + '-title',
      ref: 'subMenuTitle'
    };
    // expand custom icon should NOT be displayed in menu with horizontal mode.
    var icon = null;
    if (props.mode !== 'horizontal') {
      icon = (0, _propsUtil.getComponentFromProp)(this, 'expandIcon', props);
    }
    var title = h(
      'div',
      titleProps,
      [(0, _propsUtil.getComponentFromProp)(this, 'title'), icon || h('i', { 'class': prefixCls + '-arrow' })]
    );
    var children = this.renderChildren((0, _propsUtil.filterEmpty)(this.$slots['default']));

    var getPopupContainer = this.parentMenu.isRootMenu ? this.parentMenu.getPopupContainer : function (triggerNode) {
      return triggerNode.parentNode;
    };
    var popupPlacement = popupPlacementMap[props.mode];
    var popupAlign = props.popupOffset ? { offset: props.popupOffset } : {};
    var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
    var liProps = {
      on: (0, _extends4['default'])({}, (0, _omit2['default'])((0, _propsUtil.getListeners)(this), ['click']), mouseEvents),
      'class': className
    };

    return h(
      'li',
      (0, _babelHelperVueJsxMergeProps2['default'])([liProps, {
        attrs: { role: 'menuitem' }
      }]),
      [isInlineMode && title, isInlineMode && children, !isInlineMode && h(
        _vcTrigger2['default'],
        {
          attrs: (_attrs = {
            prefixCls: prefixCls,
            popupClassName: prefixCls + '-popup ' + rootPrefixCls + '-' + parentMenu.theme + ' ' + (popupClassName || ''),
            getPopupContainer: getPopupContainer,
            builtinPlacements: _placements2['default']
          }, (0, _defineProperty3['default'])(_attrs, 'builtinPlacements', (0, _extends4['default'])({}, _placements2['default'], props.builtinPlacements)), (0, _defineProperty3['default'])(_attrs, 'popupPlacement', popupPlacement), (0, _defineProperty3['default'])(_attrs, 'popupVisible', isOpen), (0, _defineProperty3['default'])(_attrs, 'popupAlign', popupAlign), (0, _defineProperty3['default'])(_attrs, 'action', props.disabled ? [] : [props.triggerSubMenuAction]), (0, _defineProperty3['default'])(_attrs, 'mouseEnterDelay', props.subMenuOpenDelay), (0, _defineProperty3['default'])(_attrs, 'mouseLeaveDelay', props.subMenuCloseDelay), (0, _defineProperty3['default'])(_attrs, 'forceRender', props.forceSubMenuRender), _attrs),
          on: {
            'popupVisibleChange': this.onPopupVisibleChange
          }
        },
        [h(
          'template',
          { slot: 'popup' },
          [children]
        ), title]
      )]
    );
  }
};

var connected = (0, _store.connect)(function (_ref, _ref2) {
  var openKeys = _ref.openKeys,
      activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey,
    selectedKeys: selectedKeys
  };
})(SubMenu);

connected.isSubMenu = true;

exports['default'] = connected;

/***/ }),

/***/ "6e22":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__("b24f");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// MIT License from https://github.com/kaimallea/isMobile

var applePhone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i; // Match 'Android' AND 'Mobile'
var androidTablet = /Android/i;
var amazonPhone = /\bAndroid(?:.+)SD4930UR\b/i;
var amazonTablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i; // Match 'Windows' AND 'ARM'
var otherBlackberry = /BlackBerry/i;
var otherBlackberry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i; // Match 'Mobile' AND 'Firefox'

function match(regex, userAgent) {
  return regex.test(userAgent);
}

function isMobile(userAgent) {
  var ua = userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '');

  // Facebook mobile app's integrated browser adds a bunch of strings that
  // match everything. Strip it out if it exists.
  var tmp = ua.split('[FBAN');
  if (typeof tmp[1] !== 'undefined') {
    var _tmp = tmp;

    var _tmp2 = (0, _slicedToArray3['default'])(_tmp, 1);

    ua = _tmp2[0];
  }

  // Twitter mobile app's integrated browser on iPad adds a "Twitter for
  // iPhone" string. Same probably happens on other tablet platforms.
  // This will confuse detection so strip it out if it exists.
  tmp = ua.split('Twitter');
  if (typeof tmp[1] !== 'undefined') {
    var _tmp3 = tmp;

    var _tmp4 = (0, _slicedToArray3['default'])(_tmp3, 1);

    ua = _tmp4[0];
  }

  var result = {
    apple: {
      phone: match(applePhone, ua) && !match(windowsPhone, ua),
      ipod: match(appleIpod, ua),
      tablet: !match(applePhone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),
      device: (match(applePhone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)
    },
    amazon: {
      phone: match(amazonPhone, ua),
      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),
      device: match(amazonPhone, ua) || match(amazonTablet, ua)
    },
    android: {
      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),
      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),
      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\bokhttp\b/i, ua)
    },
    windows: {
      phone: match(windowsPhone, ua),
      tablet: match(windowsTablet, ua),
      device: match(windowsPhone, ua) || match(windowsTablet, ua)
    },
    other: {
      blackberry: match(otherBlackberry, ua),
      blackberry10: match(otherBlackberry10, ua),
      opera: match(otherOpera, ua),
      firefox: match(otherFirefox, ua),
      chrome: match(otherChrome, ua),
      device: match(otherBlackberry, ua) || match(otherBlackberry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)
    },

    // Additional
    any: null,
    phone: null,
    tablet: null
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;

  // excludes 'other' devices and ipods, targeting touchscreen phones
  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;

  return result;
}

var defaultResult = (0, _extends3['default'])({}, isMobile(), {
  isMobile: isMobile
});

exports['default'] = defaultResult;

/***/ }),

/***/ "7c18":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobileDevice = exports.setStyle = exports.getWidth = exports.menuAllProps = undefined;

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.noop = noop;
exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
exports.getMenuIdFromSubMenuEventKey = getMenuIdFromSubMenuEventKey;
exports.loopMenuItem = loopMenuItem;
exports.loopMenuItemRecursively = loopMenuItemRecursively;

var _isMobile = __webpack_require__("6e22");

var _isMobile2 = _interopRequireDefault(_isMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key === undefined ? prefix + 'item_' + index : child.key;
}

function getMenuIdFromSubMenuEventKey(eventKey) {
  return eventKey + '-menu-';
}

function loopMenuItem(children, cb) {
  var index = -1;
  children.forEach(function (c) {
    index++;
    if (c && c.type && c.type.isMenuItemGroup) {
      c.$slots['default'].forEach(function (c2) {
        index++;
        c.componentOptions && cb(c2, index);
      });
    } else {
      c.componentOptions && cb(c, index);
    }
  });
}

function loopMenuItemRecursively(children, keys, ret) {
  if (!children || ret.find) {
    return;
  }
  children.forEach(function (c) {
    if (ret.find) {
      return;
    }
    if (c.data && c.data.slot && c.data.slot !== 'default') {
      return;
    }
    if (c && c.componentOptions) {
      var options = c.componentOptions.Ctor.options;
      if (!options || !(options.isSubMenu || options.isMenuItem || options.isMenuItemGroup)) {
        return;
      }
      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.componentOptions.children) {
        loopMenuItemRecursively(c.componentOptions.children, keys, ret);
      }
    }
  });
}

var menuAllProps = exports.menuAllProps = {
  props: ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator',

  // the following keys found need to be removed from test regression
  'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon'],
  on: ['select', 'deselect', 'destroy', 'openChange', 'itemHover', 'titleMouseenter', 'titleMouseleave', 'titleClick']
};

// ref: https://github.com/ant-design/ant-design/issues/14007
// ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
// getBoundingClientRect return the full precision value, which is
// not the same behavior as on chrome. Set the precision to 6 to
// unify their behavior
var getWidth = exports.getWidth = function getWidth(elem) {
  var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
  if (width) {
    width = +width.toFixed(6);
  }
  return width || 0;
};

var setStyle = exports.setStyle = function setStyle(elem, styleProperty, value) {
  if (elem && (0, _typeof3['default'])(elem.style) === 'object') {
    elem.style[styleProperty] = value;
  }
};

var isMobileDevice = exports.isMobileDevice = function isMobileDevice() {
  return _isMobile2['default'].any;
};

/***/ }),

/***/ "87fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectPropTypes = undefined;

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SelectPropTypes = exports.SelectPropTypes = {
  defaultActiveFirstOption: _vueTypes2['default'].bool,
  multiple: _vueTypes2['default'].bool,
  filterOption: _vueTypes2['default'].any,
  // children: PropTypes.any,
  showSearch: _vueTypes2['default'].bool,
  disabled: _vueTypes2['default'].bool,
  allowClear: _vueTypes2['default'].bool,
  showArrow: _vueTypes2['default'].bool,
  tags: _vueTypes2['default'].bool,
  prefixCls: _vueTypes2['default'].string,
  // className: PropTypes.string,
  transitionName: _vueTypes2['default'].string,
  optionLabelProp: _vueTypes2['default'].string,
  optionFilterProp: _vueTypes2['default'].string,
  animation: _vueTypes2['default'].string,
  choiceTransitionName: _vueTypes2['default'].string,
  open: _vueTypes2['default'].bool,
  defaultOpen: _vueTypes2['default'].bool,
  // onChange: PropTypes.func,
  // onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
  // onSelect: PropTypes.func,
  // onSearch: PropTypes.func,
  // onPopupScroll: PropTypes.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onInputKeyDown: PropTypes.func,
  placeholder: _vueTypes2['default'].any,
  // onDeselect: PropTypes.func,
  labelInValue: _vueTypes2['default'].bool,
  loading: _vueTypes2['default'].bool,
  value: _vueTypes2['default'].any,
  defaultValue: _vueTypes2['default'].any,
  dropdownStyle: _vueTypes2['default'].object,
  dropdownClassName: _vueTypes2['default'].string,
  maxTagTextLength: _vueTypes2['default'].number,
  maxTagCount: _vueTypes2['default'].number,
  maxTagPlaceholder: _vueTypes2['default'].any,
  tokenSeparators: _vueTypes2['default'].arrayOf(_vueTypes2['default'].string),
  getInputElement: _vueTypes2['default'].func,
  showAction: _vueTypes2['default'].arrayOf(_vueTypes2['default'].string),
  autoFocus: _vueTypes2['default'].bool,
  getPopupContainer: _vueTypes2['default'].func,
  clearIcon: _vueTypes2['default'].any,
  inputIcon: _vueTypes2['default'].any,
  removeIcon: _vueTypes2['default'].any,
  menuItemSelectedIcon: _vueTypes2['default'].any,
  dropdownRender: _vueTypes2['default'].func,
  mode: _vueTypes2['default'].oneOf(['multiple', 'tags']),
  backfill: _vueTypes2['default'].bool,
  dropdownAlign: _vueTypes2['default'].any,
  dropdownMatchSelectWidth: _vueTypes2['default'].bool,
  dropdownMenuStyle: _vueTypes2['default'].object,
  notFoundContent: _vueTypes2['default'].oneOfType([String, Number]),
  tabIndex: _vueTypes2['default'].oneOfType([String, Number])
};

/***/ }),

/***/ "8f58":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectProps = exports.SelectValue = exports.AbstractSelectProps = undefined;

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcSelect = __webpack_require__("148f");

var _configConsumerProps = __webpack_require__("bad7");

var _propsUtil = __webpack_require__("73c8");

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _vnode = __webpack_require__("d2f9");

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AbstractSelectProps = function AbstractSelectProps() {
  return {
    prefixCls: _vueTypes2['default'].string,
    size: _vueTypes2['default'].oneOf(['small', 'large', 'default']),
    showAction: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].arrayOf(String)]),
    notFoundContent: _vueTypes2['default'].any,
    transitionName: _vueTypes2['default'].string,
    choiceTransitionName: _vueTypes2['default'].string,
    showSearch: _vueTypes2['default'].bool,
    allowClear: _vueTypes2['default'].bool,
    disabled: _vueTypes2['default'].bool,
    tabIndex: _vueTypes2['default'].number,
    placeholder: _vueTypes2['default'].any,
    defaultActiveFirstOption: _vueTypes2['default'].bool,
    dropdownClassName: _vueTypes2['default'].string,
    dropdownStyle: _vueTypes2['default'].any,
    dropdownMenuStyle: _vueTypes2['default'].any,
    dropdownMatchSelectWidth: _vueTypes2['default'].bool,
    // onSearch: (value: string) => any,
    filterOption: _vueTypes2['default'].oneOfType([_vueTypes2['default'].bool, _vueTypes2['default'].func]),
    autoFocus: _vueTypes2['default'].bool,
    backfill: _vueTypes2['default'].bool,
    showArrow: _vueTypes2['default'].bool,
    getPopupContainer: _vueTypes2['default'].func,
    open: _vueTypes2['default'].bool,
    defaultOpen: _vueTypes2['default'].bool,
    autoClearSearchValue: _vueTypes2['default'].bool,
    dropdownRender: _vueTypes2['default'].func,
    loading: _vueTypes2['default'].bool
  };
};
var Value = _vueTypes2['default'].shape({
  key: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])
}).loose;

var SelectValue = _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number, _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([Value, _vueTypes2['default'].string, _vueTypes2['default'].number])), Value]);

var SelectProps = (0, _extends3['default'])({}, AbstractSelectProps(), {
  value: SelectValue,
  defaultValue: SelectValue,
  // mode: PropTypes.oneOf(['default', 'multiple', 'tags', 'combobox']),
  mode: _vueTypes2['default'].string,
  optionLabelProp: _vueTypes2['default'].string,
  firstActiveValue: _vueTypes2['default'].oneOfType([String, _vueTypes2['default'].arrayOf(String)]),
  maxTagCount: _vueTypes2['default'].number,
  maxTagPlaceholder: _vueTypes2['default'].any,
  maxTagTextLength: _vueTypes2['default'].number,
  dropdownMatchSelectWidth: _vueTypes2['default'].bool,
  optionFilterProp: _vueTypes2['default'].string,
  labelInValue: _vueTypes2['default'].boolean,
  getPopupContainer: _vueTypes2['default'].func,
  tokenSeparators: _vueTypes2['default'].arrayOf(_vueTypes2['default'].string),
  getInputElement: _vueTypes2['default'].func,
  options: _vueTypes2['default'].array,
  suffixIcon: _vueTypes2['default'].any,
  removeIcon: _vueTypes2['default'].any,
  clearIcon: _vueTypes2['default'].any,
  menuItemSelectedIcon: _vueTypes2['default'].any
});

var SelectPropTypes = {
  prefixCls: _vueTypes2['default'].string,
  size: _vueTypes2['default'].oneOf(['default', 'large', 'small']),
  // combobox: PropTypes.bool,
  notFoundContent: _vueTypes2['default'].any,
  showSearch: _vueTypes2['default'].bool,
  optionLabelProp: _vueTypes2['default'].string,
  transitionName: _vueTypes2['default'].string,
  choiceTransitionName: _vueTypes2['default'].string
};

exports.AbstractSelectProps = AbstractSelectProps;
exports.SelectValue = SelectValue;
exports.SelectProps = SelectProps;

var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
var Select = {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: SECRET_COMBOBOX_MODE_DO_NOT_USE,
  Option: (0, _extends3['default'])({}, _vcSelect.Option, { name: 'ASelectOption' }),
  OptGroup: (0, _extends3['default'])({}, _vcSelect.OptGroup, { name: 'ASelectOptGroup' }),
  name: 'ASelect',
  props: (0, _extends3['default'])({}, SelectProps, {
    showSearch: _vueTypes2['default'].bool.def(false),
    transitionName: _vueTypes2['default'].string.def('slide-up'),
    choiceTransitionName: _vueTypes2['default'].string.def('zoom')
  }),
  propTypes: SelectPropTypes,
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
  created: function created() {
    (0, _warning2['default'])(this.$props.mode !== 'combobox', 'Select', 'The combobox mode of Select is deprecated,' + 'it will be removed in next major version,' + 'please use AutoComplete instead');
  },

  methods: {
    getNotFoundContent: function getNotFoundContent(renderEmpty) {
      var h = this.$createElement;
      var notFoundContent = (0, _propsUtil.getComponentFromProp)(this, 'notFoundContent');
      if (notFoundContent !== undefined) {
        return notFoundContent;
      }
      if (this.isCombobox()) {
        return null;
      }
      return renderEmpty(h, 'Select');
    },
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    focus: function focus() {
      this.$refs.vcSelect.focus();
    },
    blur: function blur() {
      this.$refs.vcSelect.blur();
    },
    isCombobox: function isCombobox() {
      var mode = this.mode;

      return mode === 'combobox' || mode === SECRET_COMBOBOX_MODE_DO_NOT_USE;
    },
    renderSuffixIcon: function renderSuffixIcon(prefixCls) {
      var h = this.$createElement;
      var loading = this.$props.loading;

      var suffixIcon = (0, _propsUtil.getComponentFromProp)(this, 'suffixIcon');
      suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
      if (suffixIcon) {
        return (0, _propsUtil.isValidElement)(suffixIcon) ? (0, _vnode.cloneElement)(suffixIcon, { 'class': prefixCls + '-arrow-icon' }) : suffixIcon;
      }
      if (loading) {
        return h(_icon2['default'], {
          attrs: { type: 'loading' }
        });
      }
      return h(_icon2['default'], {
        attrs: { type: 'down' },
        'class': prefixCls + '-arrow-icon' });
    }
  },
  render: function render() {
    var _cls;

    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        size = _getOptionProps.size,
        mode = _getOptionProps.mode,
        options = _getOptionProps.options,
        getPopupContainer = _getOptionProps.getPopupContainer,
        showArrow = _getOptionProps.showArrow,
        restProps = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['prefixCls', 'size', 'mode', 'options', 'getPopupContainer', 'showArrow']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var renderEmpty = this.configProvider.renderEmpty;
    var prefixCls = getPrefixCls('select', customizePrefixCls);

    var getContextPopupContainer = this.configProvider.getPopupContainer;

    var removeIcon = (0, _propsUtil.getComponentFromProp)(this, 'removeIcon');
    removeIcon = Array.isArray(removeIcon) ? removeIcon[0] : removeIcon;
    var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');
    clearIcon = Array.isArray(clearIcon) ? clearIcon[0] : clearIcon;
    var menuItemSelectedIcon = (0, _propsUtil.getComponentFromProp)(this, 'menuItemSelectedIcon');
    menuItemSelectedIcon = Array.isArray(menuItemSelectedIcon) ? menuItemSelectedIcon[0] : menuItemSelectedIcon;
    var rest = (0, _omit2['default'])(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'suffixIcon', 'menuItemSelectedIcon']);

    var cls = (_cls = {}, (0, _defineProperty3['default'])(_cls, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_cls, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_cls, prefixCls + '-show-arrow', showArrow), _cls);

    var optionLabelProp = this.$props.optionLabelProp;

    if (this.isCombobox()) {
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    var modeConfig = {
      multiple: mode === 'multiple',
      tags: mode === 'tags',
      combobox: this.isCombobox()
    };
    var finalRemoveIcon = removeIcon && ((0, _propsUtil.isValidElement)(removeIcon) ? (0, _vnode.cloneElement)(removeIcon, { 'class': prefixCls + '-remove-icon' }) : removeIcon) || h(_icon2['default'], {
      attrs: { type: 'close' },
      'class': prefixCls + '-remove-icon' });

    var finalClearIcon = clearIcon && ((0, _propsUtil.isValidElement)(clearIcon) ? (0, _vnode.cloneElement)(clearIcon, { 'class': prefixCls + '-clear-icon' }) : clearIcon) || h(_icon2['default'], {
      attrs: { type: 'close-circle', theme: 'filled' },
      'class': prefixCls + '-clear-icon' });

    var finalMenuItemSelectedIcon = menuItemSelectedIcon && ((0, _propsUtil.isValidElement)(menuItemSelectedIcon) ? (0, _vnode.cloneElement)(menuItemSelectedIcon, { 'class': prefixCls + '-selected-icon' }) : menuItemSelectedIcon) || h(_icon2['default'], {
      attrs: { type: 'check' },
      'class': prefixCls + '-selected-icon' });

    var selectProps = {
      props: (0, _extends3['default'])({
        inputIcon: this.renderSuffixIcon(prefixCls),
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon,
        menuItemSelectedIcon: finalMenuItemSelectedIcon,
        showArrow: showArrow
      }, rest, modeConfig, {
        prefixCls: prefixCls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: this.getNotFoundContent(renderEmpty),
        maxTagPlaceholder: (0, _propsUtil.getComponentFromProp)(this, 'maxTagPlaceholder'),
        placeholder: (0, _propsUtil.getComponentFromProp)(this, 'placeholder'),
        children: options ? options.map(function (option) {
          var key = option.key,
              _option$label = option.label,
              label = _option$label === undefined ? option.title : _option$label,
              on = option.on,
              cls = option['class'],
              style = option.style,
              restOption = (0, _objectWithoutProperties3['default'])(option, ['key', 'label', 'on', 'class', 'style']);

          return h(
            _vcSelect.Option,
            (0, _babelHelperVueJsxMergeProps2['default'])([{ key: key }, { props: restOption, on: on, 'class': cls, style: style }]),
            [label]
          );
        }) : (0, _propsUtil.filterEmpty)(this.$slots['default']),
        __propsSymbol__: Symbol(),
        dropdownRender: (0, _propsUtil.getComponentFromProp)(this, 'dropdownRender', {}, false),
        getPopupContainer: getPopupContainer || getContextPopupContainer
      }),
      on: (0, _propsUtil.getListeners)(this),
      'class': cls,
      ref: 'vcSelect'
    };
    return h(_vcSelect.Select, selectProps);
  }
};

/* istanbul ignore next */
Select.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(Select.name, Select);
  Vue.component(Select.Option.name, Select.Option);
  Vue.component(Select.OptGroup.name, Select.OptGroup);
};

exports['default'] = Select;

/***/ }),

/***/ "94cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _store = __webpack_require__("e8a7");

var _SubPopupMenu = __webpack_require__("b733");

var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("73c8");

var _propsUtil2 = _interopRequireDefault(_propsUtil);

var _commonPropsType = __webpack_require__("e6a0");

var _commonPropsType2 = _interopRequireDefault(_commonPropsType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Menu = {
  name: 'Menu',
  props: (0, _extends3['default'])({}, _commonPropsType2['default'], {
    selectable: _vueTypes2['default'].bool.def(true)
  }),
  mixins: [_BaseMixin2['default']],

  data: function data() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;
    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }
    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    this.store = (0, _store.create)({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: {
        '0-menu-': (0, _SubPopupMenu.getActiveKey)((0, _extends3['default'])({}, props, { children: this.$slots['default'] || [] }), props.activeKey)
      }
    });

    // this.isRootMenu = true // 声明在props上
    return {};
  },
  mounted: function mounted() {
    this.updateMiniStore();
  },
  updated: function updated() {
    this.updateMiniStore();
  },

  methods: {
    onSelect: function onSelect(selectInfo) {
      var props = this.$props;
      if (props.selectable) {
        // root menu
        var selectedKeys = this.store.getState().selectedKeys;
        var selectedKey = selectInfo.key;
        if (props.multiple) {
          selectedKeys = selectedKeys.concat([selectedKey]);
        } else {
          selectedKeys = [selectedKey];
        }
        if (!(0, _propsUtil2['default'])(this, 'selectedKeys')) {
          this.store.setState({
            selectedKeys: selectedKeys
          });
        }
        this.__emit('select', (0, _extends3['default'])({}, selectInfo, {
          selectedKeys: selectedKeys
        }));
      }
    },
    onClick: function onClick(e) {
      this.__emit('click', e);
    },

    // onKeyDown needs to be exposed as a instance method
    // e.g., in rc-select, we need to navigate menu item while
    // current active item is rc-select input box rather than the menu itself
    onKeyDown: function onKeyDown(e, callback) {
      this.$refs.innerMenu.getWrappedInstance().onKeyDown(e, callback);
    },
    onOpenChange: function onOpenChange(event) {
      var openKeys = this.store.getState().openKeys.concat();
      var changed = false;
      var processSingle = function processSingle(e) {
        var oneChanged = false;
        if (e.open) {
          oneChanged = openKeys.indexOf(e.key) === -1;
          if (oneChanged) {
            openKeys.push(e.key);
          }
        } else {
          var index = openKeys.indexOf(e.key);
          oneChanged = index !== -1;
          if (oneChanged) {
            openKeys.splice(index, 1);
          }
        }
        changed = changed || oneChanged;
      };
      if (Array.isArray(event)) {
        // batch change call
        event.forEach(processSingle);
      } else {
        processSingle(event);
      }
      if (changed) {
        if (!(0, _propsUtil2['default'])(this, 'openKeys')) {
          this.store.setState({ openKeys: openKeys });
        }
        this.__emit('openChange', openKeys);
      }
    },
    onDeselect: function onDeselect(selectInfo) {
      var props = this.$props;
      if (props.selectable) {
        var selectedKeys = this.store.getState().selectedKeys.concat();
        var selectedKey = selectInfo.key;
        var index = selectedKeys.indexOf(selectedKey);
        if (index !== -1) {
          selectedKeys.splice(index, 1);
        }
        if (!(0, _propsUtil2['default'])(this, 'selectedKeys')) {
          this.store.setState({
            selectedKeys: selectedKeys
          });
        }
        this.__emit('deselect', (0, _extends3['default'])({}, selectInfo, {
          selectedKeys: selectedKeys
        }));
      }
    },
    getOpenTransitionName: function getOpenTransitionName() {
      var props = this.$props;
      var transitionName = props.openTransitionName;
      var animationName = props.openAnimation;
      if (!transitionName && typeof animationName === 'string') {
        transitionName = props.prefixCls + '-open-' + animationName;
      }
      return transitionName;
    },
    updateMiniStore: function updateMiniStore() {
      var props = (0, _propsUtil.getOptionProps)(this);
      if ('selectedKeys' in props) {
        this.store.setState({
          selectedKeys: props.selectedKeys || []
        });
      }
      if ('openKeys' in props) {
        this.store.setState({
          openKeys: props.openKeys || []
        });
      }
    }
  },

  render: function render() {
    var h = arguments[0];

    var props = (0, _propsUtil.getOptionProps)(this);
    var subPopupMenuProps = {
      props: (0, _extends3['default'])({}, props, {
        itemIcon: (0, _propsUtil.getComponentFromProp)(this, 'itemIcon', props),
        expandIcon: (0, _propsUtil.getComponentFromProp)(this, 'expandIcon', props),
        overflowedIndicator: (0, _propsUtil.getComponentFromProp)(this, 'overflowedIndicator', props) || h('span', ['\xB7\xB7\xB7']),
        openTransitionName: this.getOpenTransitionName(),
        parentMenu: this,
        children: (0, _propsUtil.filterEmpty)(this.$slots['default'] || [])
      }),
      'class': props.prefixCls + '-root',
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
        click: this.onClick,
        openChange: this.onOpenChange,
        deselect: this.onDeselect,
        select: this.onSelect
      }),
      ref: 'innerMenu'
    };
    return h(
      _store.Provider,
      {
        attrs: { store: this.store }
      },
      [h(_SubPopupMenu2['default'], subPopupMenuProps)]
    );
  }
};
exports['default'] = Menu;

/***/ }),

/***/ "a9eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-undef */
// Browser environment sniffing
var inBrowser = exports.inBrowser = typeof window !== 'undefined';
var inWeex = exports.inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = exports.weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = exports.UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = exports.isIE = UA && /msie|trident/.test(UA);
var isIE9 = exports.isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = exports.isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = exports.isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = exports.isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = exports.isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = exports.isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = exports.isFF = UA && UA.match(/firefox\/(\d+)/);

/***/ }),

/***/ "aef2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = undefined;

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var storeShape = exports.storeShape = _vueTypes2['default'].shape({
  subscribe: _vueTypes2['default'].func.isRequired,
  setState: _vueTypes2['default'].func.isRequired,
  getState: _vueTypes2['default'].func.isRequired
});

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

/***/ "b063":
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
    value: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    label: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    disabled: _vueTypes2['default'].bool,
    title: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])
  },
  isSelectOption: true
};

/***/ }),

/***/ "b733":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__("41b2");

var _extends5 = _interopRequireDefault(_extends4);

exports.saveRef = saveRef;
exports.getActiveKey = getActiveKey;

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _store = __webpack_require__("e8a7");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _KeyCode = __webpack_require__("af09");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__("7c18");

var _DOMWrap = __webpack_require__("f0b1");

var _DOMWrap2 = _interopRequireDefault(_DOMWrap);

var _vnode = __webpack_require__("d2f9");

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }
  return arr.every(function (c) {
    return !!c.disabled;
  });
}

function updateActiveKey(store, menuId, activeKey) {
  var state = store.getState();
  store.setState({
    activeKey: (0, _extends5['default'])({}, state.activeKey, (0, _defineProperty3['default'])({}, menuId, activeKey))
  });
}

function getEventKey(props) {
  // when eventKey not available ,it's menu and return menu id '0-menu-'
  return props.eventKey || '0-menu-';
}

function saveRef(key, c) {
  if (c) {
    var index = this.instanceArrayKeyIndexMap[key];
    this.instanceArray[index] = c;
  }
}
function getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var eventKey = props.eventKey,
      defaultActiveFirst = props.defaultActiveFirst,
      children = props.children;

  if (activeKey !== undefined && activeKey !== null) {
    var found = void 0;
    (0, _util.loopMenuItem)(children, function (c, i) {
      var propsData = c.componentOptions.propsData || {};
      if (c && !propsData.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
        found = true;
      }
    });
    if (found) {
      return activeKey;
    }
  }
  activeKey = null;
  if (defaultActiveFirst) {
    (0, _util.loopMenuItem)(children, function (c, i) {
      var propsData = c.componentOptions.propsData || {};
      var noActiveKey = activeKey === null || activeKey === undefined;
      if (noActiveKey && c && !propsData.disabled) {
        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
      }
    });
    return activeKey;
  }
  return activeKey;
}

var SubPopupMenu = {
  name: 'SubPopupMenu',
  props: (0, _propsUtil.initDefaultProps)({
    // onSelect: PropTypes.func,
    // onClick: PropTypes.func,
    // onDeselect: PropTypes.func,
    // onOpenChange: PropTypes.func,
    // onDestroy: PropTypes.func,
    prefixCls: _vueTypes2['default'].string,
    openTransitionName: _vueTypes2['default'].string,
    openAnimation: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object]),
    openKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])),
    visible: _vueTypes2['default'].bool,
    parentMenu: _vueTypes2['default'].object,
    eventKey: _vueTypes2['default'].string,
    store: _vueTypes2['default'].object,
    forceSubMenuRender: _vueTypes2['default'].bool,

    // adding in refactor
    focusable: _vueTypes2['default'].bool,
    multiple: _vueTypes2['default'].bool,
    defaultActiveFirst: _vueTypes2['default'].bool,
    activeKey: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    selectedKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])),
    defaultSelectedKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])),
    defaultOpenKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])),
    level: _vueTypes2['default'].number,
    mode: _vueTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
    triggerSubMenuAction: _vueTypes2['default'].oneOf(['click', 'hover']),
    inlineIndent: _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].string]),
    manualRef: _vueTypes2['default'].func,
    itemIcon: _vueTypes2['default'].any,
    expandIcon: _vueTypes2['default'].any,
    overflowedIndicator: _vueTypes2['default'].any,
    children: _vueTypes2['default'].any.def([]),
    __propsSymbol__: _vueTypes2['default'].any // mock componentWillReceiveProps
  }, {
    prefixCls: 'rc-menu',
    mode: 'vertical',
    level: 1,
    inlineIndent: 24,
    visible: true,
    focusable: true,
    manualRef: _util.noop
  }),

  mixins: [_BaseMixin2['default']],
  created: function created() {
    var props = (0, _propsUtil.getOptionProps)(this);
    this.prevProps = (0, _extends5['default'])({}, props);
    props.store.setState({
      activeKey: (0, _extends5['default'])({}, props.store.getState().activeKey, (0, _defineProperty3['default'])({}, props.eventKey, getActiveKey(props, props.activeKey)))
    });
    this.instanceArray = [];
  },
  mounted: function mounted() {
    // invoke customized ref to expose component to mixin
    if (this.manualRef) {
      this.manualRef(this);
    }
  },
  updated: function updated() {
    var props = (0, _propsUtil.getOptionProps)(this);
    var prevProps = this.prevProps;
    var originalActiveKey = 'activeKey' in props ? props.activeKey : props.store.getState().activeKey[getEventKey(props)];
    var activeKey = getActiveKey(props, originalActiveKey);
    if (activeKey !== originalActiveKey) {
      updateActiveKey(props.store, getEventKey(props), activeKey);
    } else if ('activeKey' in prevProps) {
      // If prev activeKey is not same as current activeKey,
      // we should set it.
      var prevActiveKey = getActiveKey(prevProps, prevProps.activeKey);
      if (activeKey !== prevActiveKey) {
        updateActiveKey(props.store, getEventKey(props), activeKey);
      }
    }
    this.prevProps = (0, _extends5['default'])({}, props);
  },

  methods: {
    // all keyboard events callbacks run from here at first
    onKeyDown: function onKeyDown(e, callback) {
      var keyCode = e.keyCode;
      var handled = void 0;
      this.getFlatInstanceArray().forEach(function (obj) {
        if (obj && obj.active && obj.onKeyDown) {
          handled = obj.onKeyDown(e);
        }
      });
      if (handled) {
        return 1;
      }
      var activeItem = null;
      if (keyCode === _KeyCode2['default'].UP || keyCode === _KeyCode2['default'].DOWN) {
        activeItem = this.step(keyCode === _KeyCode2['default'].UP ? -1 : 1);
      }
      if (activeItem) {
        e.preventDefault();
        updateActiveKey(this.$props.store, getEventKey(this.$props), activeItem.eventKey);

        if (typeof callback === 'function') {
          callback(activeItem);
        }

        return 1;
      }
      return undefined;
    },
    onItemHover: function onItemHover(e) {
      var key = e.key,
          hover = e.hover;

      updateActiveKey(this.$props.store, getEventKey(this.$props), hover ? key : null);
    },
    onDeselect: function onDeselect(selectInfo) {
      this.__emit('deselect', selectInfo);
    },
    onSelect: function onSelect(selectInfo) {
      this.__emit('select', selectInfo);
    },
    onClick: function onClick(e) {
      this.__emit('click', e);
    },
    onOpenChange: function onOpenChange(e) {
      this.__emit('openChange', e);
    },
    onDestroy: function onDestroy(key) {
      this.__emit('destroy', key);
    },
    getFlatInstanceArray: function getFlatInstanceArray() {
      return this.instanceArray;
    },
    getOpenTransitionName: function getOpenTransitionName() {
      return this.$props.openTransitionName;
    },
    step: function step(direction) {
      var children = this.getFlatInstanceArray();
      var activeKey = this.$props.store.getState().activeKey[getEventKey(this.$props)];
      var len = children.length;
      if (!len) {
        return null;
      }
      if (direction < 0) {
        children = children.concat().reverse();
      }
      // find current activeIndex
      var activeIndex = -1;
      children.every(function (c, ci) {
        if (c && c.eventKey === activeKey) {
          activeIndex = ci;
          return false;
        }
        return true;
      });
      if (!this.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
        return undefined;
      }
      var start = (activeIndex + 1) % len;
      var i = start;

      do {
        var child = children[i];
        if (!child || child.disabled) {
          i = (i + 1) % len;
        } else {
          return child;
        }
      } while (i !== start);

      return null;
    },
    getIcon: function getIcon(instance, name) {
      if (instance.$createElement) {
        var temp = instance[name];
        if (temp !== undefined) {
          return temp;
        }
        return instance.$slots[name] || instance.$scopedSlots[name];
      } else {
        var _temp = (0, _propsUtil.getPropsData)(instance)[name];
        if (_temp !== undefined) {
          return _temp;
        }
        var slotsProp = [];
        var componentOptions = instance.componentOptions || {};
        (componentOptions.children || []).forEach(function (child) {
          if (child.data && child.data.slot === name) {
            if (child.tag === 'template') {
              slotsProp.push(child.children);
            } else {
              slotsProp.push(child);
            }
          }
        });
        return slotsProp.length ? slotsProp : undefined;
      }
    },
    renderCommonMenuItem: function renderCommonMenuItem(child, i, extraProps) {
      var _this = this;

      if (child.tag === undefined) {
        return child;
      }
      var state = this.$props.store.getState();
      var props = this.$props;
      var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
      var childProps = child.componentOptions.propsData || {};

      var isActive = key === state.activeKey[getEventKey(this.$props)];
      if (!childProps.disabled) {
        // manualRef的执行顺序不能保证，使用key映射ref在this.instanceArray中的位置
        this.instanceArrayKeyIndexMap[key] = Object.keys(this.instanceArrayKeyIndexMap).length;
      }
      var childListeners = (0, _propsUtil.getEvents)(child);
      var newChildProps = {
        props: (0, _extends5['default'])({
          mode: childProps.mode || props.mode,
          level: props.level,
          inlineIndent: props.inlineIndent,
          renderMenuItem: this.renderMenuItem,
          rootPrefixCls: props.prefixCls,
          index: i,
          parentMenu: props.parentMenu,
          // customized ref function, need to be invoked manually in child's componentDidMount
          manualRef: childProps.disabled ? _util.noop : saveRef.bind(this, key),
          eventKey: key,
          active: !childProps.disabled && isActive,
          multiple: props.multiple,
          openTransitionName: this.getOpenTransitionName(),
          openAnimation: props.openAnimation,
          subMenuOpenDelay: props.subMenuOpenDelay,
          subMenuCloseDelay: props.subMenuCloseDelay,
          forceSubMenuRender: props.forceSubMenuRender,
          builtinPlacements: props.builtinPlacements,
          itemIcon: this.getIcon(child, 'itemIcon') || this.getIcon(this, 'itemIcon'),
          expandIcon: this.getIcon(child, 'expandIcon') || this.getIcon(this, 'expandIcon')
        }, extraProps),
        on: {
          click: function click(e) {
            (childListeners.click || _util.noop)(e);
            _this.onClick(e);
          },
          itemHover: this.onItemHover,
          openChange: this.onOpenChange,
          deselect: this.onDeselect,
          // destroy: this.onDestroy,
          select: this.onSelect
        }
      };
      // ref: https://github.com/ant-design/ant-design/issues/13943
      if (props.mode === 'inline' || (0, _util.isMobileDevice)()) {
        newChildProps.props.triggerSubMenuAction = 'click';
      }
      return (0, _vnode.cloneElement)(child, newChildProps);
    },
    renderMenuItem: function renderMenuItem(c, i, subMenuKey) {
      if (!c) {
        return null;
      }
      var state = this.$props.store.getState();
      var extraProps = {
        openKeys: state.openKeys,
        selectedKeys: state.selectedKeys,
        triggerSubMenuAction: this.triggerSubMenuAction,
        isRootMenu: false,
        subMenuKey: subMenuKey
      };
      return this.renderCommonMenuItem(c, i, extraProps);
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var props = (0, _objectWithoutProperties3['default'])(this.$props, []);
    var eventKey = props.eventKey,
        prefixCls = props.prefixCls,
        visible = props.visible,
        level = props.level,
        mode = props.mode,
        theme = props.theme;

    this.instanceArray = [];
    this.instanceArrayKeyIndexMap = {};
    var className = (0, _classnames2['default'])(props.prefixCls, props.prefixCls + '-' + props.mode);
    var domWrapProps = {
      props: {
        tag: 'ul',
        // hiddenClassName: `${prefixCls}-hidden`,
        visible: visible,
        prefixCls: prefixCls,
        level: level,
        mode: mode,
        theme: theme,
        overflowedIndicator: (0, _propsUtil.getComponentFromProp)(this, 'overflowedIndicator')
      },
      attrs: {
        role: props.role || 'menu'
      },
      'class': className,
      // Otherwise, the propagated click event will trigger another onClick
      on: (0, _omit2['default'])((0, _propsUtil.getListeners)(this), ['click'])
    };
    // if (props.id) {
    //   domProps.id = props.id
    // }
    if (props.focusable) {
      domWrapProps.attrs.tabIndex = '0';
      domWrapProps.on.keydown = this.onKeyDown;
    }
    return (
      // ESLint is not smart enough to know that the type of `children` was checked.
      /* eslint-disable */
      h(
        _DOMWrap2['default'],
        domWrapProps,
        [props.children.map(function (c, i) {
          return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
        })]
      )
      /*eslint -enable */

    );
  }
};

exports['default'] = (0, _store.connect)()(SubPopupMenu);

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

/***/ "c43a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = connect;

var _shallowequal = __webpack_require__("1b2b");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _propsUtil = __webpack_require__("73c8");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _proxyComponent = __webpack_require__("5c06");

var _proxyComponent2 = _interopRequireDefault(_proxyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.name || 'Component';
}

var defaultMapStateToProps = function defaultMapStateToProps() {
  return {};
};
function connect(mapStateToProps) {
  var shouldSubscribe = !!mapStateToProps;
  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
  return function wrapWithConnect(WrappedComponent) {
    var tempProps = (0, _omit2['default'])(WrappedComponent.props || {}, ['store']);
    var props = {
      __propsSymbol__: _vueTypes2['default'].any
    };
    Object.keys(tempProps).forEach(function (k) {
      props[k] = (0, _extends3['default'])({}, tempProps[k], { required: false });
    });
    var Connect = {
      name: 'Connect_' + getDisplayName(WrappedComponent),
      props: props,
      inject: {
        storeContext: { 'default': function _default() {
            return {};
          } }
      },
      data: function data() {
        this.store = this.storeContext.store;
        this.preProps = (0, _omit2['default'])((0, _propsUtil.getOptionProps)(this), ['__propsSymbol__']);
        return {
          subscribed: finalMapStateToProps(this.store.getState(), this.$props)
        };
      },

      watch: {
        __propsSymbol__: function __propsSymbol__() {
          if (mapStateToProps && mapStateToProps.length === 2) {
            this.subscribed = finalMapStateToProps(this.store.getState(), this.$props);
          }
        }
      },
      mounted: function mounted() {
        this.trySubscribe();
      },
      beforeDestroy: function beforeDestroy() {
        this.tryUnsubscribe();
      },

      methods: {
        handleChange: function handleChange() {
          if (!this.unsubscribe) {
            return;
          }
          var props = (0, _omit2['default'])((0, _propsUtil.getOptionProps)(this), ['__propsSymbol__']);
          var nextSubscribed = finalMapStateToProps(this.store.getState(), props);
          if (!(0, _shallowequal2['default'])(this.preProps, props) || !(0, _shallowequal2['default'])(this.subscribed, nextSubscribed)) {
            this.subscribed = nextSubscribed;
          }
        },
        trySubscribe: function trySubscribe() {
          if (shouldSubscribe) {
            this.unsubscribe = this.store.subscribe(this.handleChange);
            this.handleChange();
          }
        },
        tryUnsubscribe: function tryUnsubscribe() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        },
        getWrappedInstance: function getWrappedInstance() {
          return this.$refs.wrappedInstance;
        }
      },
      render: function render() {
        var h = arguments[0];
        var _$slots = this.$slots,
            $slots = _$slots === undefined ? {} : _$slots,
            $scopedSlots = this.$scopedSlots,
            subscribed = this.subscribed,
            store = this.store;

        var props = (0, _propsUtil.getOptionProps)(this);
        this.preProps = (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['__propsSymbol__']));
        var wrapProps = {
          props: (0, _extends3['default'])({}, props, subscribed, {
            store: store
          }),
          on: (0, _propsUtil.getListeners)(this),
          scopedSlots: $scopedSlots
        };
        return h(
          WrappedComponent,
          (0, _babelHelperVueJsxMergeProps2['default'])([wrapProps, { ref: 'wrappedInstance' }]),
          [Object.keys($slots).map(function (name) {
            return h(
              'template',
              { slot: name },
              [$slots[name]]
            );
          })]
        );
      }
    };
    return (0, _proxyComponent2['default'])(Connect);
  };
}

/***/ }),

/***/ "ced9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuItemProps = undefined;

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _KeyCode = __webpack_require__("af09");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _domScrollIntoView = __webpack_require__("ec44");

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _store = __webpack_require__("e8a7");

var _util = __webpack_require__("7c18");

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var props = {
  attribute: _vueTypes2['default'].object,
  rootPrefixCls: _vueTypes2['default'].string,
  eventKey: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
  active: _vueTypes2['default'].bool,
  selectedKeys: _vueTypes2['default'].array,
  disabled: _vueTypes2['default'].bool,
  title: _vueTypes2['default'].any,
  index: _vueTypes2['default'].number,
  inlineIndent: _vueTypes2['default'].number.def(24),
  level: _vueTypes2['default'].number.def(1),
  mode: _vueTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']).def('vertical'),
  parentMenu: _vueTypes2['default'].object,
  multiple: _vueTypes2['default'].bool,
  value: _vueTypes2['default'].any,
  isSelected: _vueTypes2['default'].bool,
  manualRef: _vueTypes2['default'].func.def(_util.noop),
  role: _vueTypes2['default'].any,
  subMenuKey: _vueTypes2['default'].string,
  itemIcon: _vueTypes2['default'].any
  // clearSubMenuTimers: PropTypes.func.def(noop),
};
var MenuItem = {
  name: 'MenuItem',
  props: props,
  mixins: [_BaseMixin2['default']],
  isMenuItem: true,
  created: function created() {
    this.prevActive = this.active;
    // invoke customized ref to expose component to mixin
    this.callRef();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      var _$props = _this.$props,
          active = _$props.active,
          parentMenu = _$props.parentMenu,
          eventKey = _$props.eventKey;

      if (!_this.prevActive && active && (!parentMenu || !parentMenu['scrolled-' + eventKey])) {
        (0, _domScrollIntoView2['default'])(_this.$el, _this.parentMenu.$el, {
          onlyScrollIfNeeded: true
        });
        parentMenu['scrolled-' + eventKey] = true;
      } else if (parentMenu && parentMenu['scrolled-' + eventKey]) {
        delete parentMenu['scrolled-' + eventKey];
      }
      _this.prevActive = active;
    });
    this.callRef();
  },
  beforeDestroy: function beforeDestroy() {
    var props = this.$props;
    this.__emit('destroy', props.eventKey);
  },

  methods: {
    onKeyDown: function onKeyDown(e) {
      var keyCode = e.keyCode;
      if (keyCode === _KeyCode2['default'].ENTER) {
        this.onClick(e);
        return true;
      }
    },
    onMouseLeave: function onMouseLeave(e) {
      var eventKey = this.$props.eventKey;

      this.__emit('itemHover', {
        key: eventKey,
        hover: false
      });
      this.__emit('mouseleave', {
        key: eventKey,
        domEvent: e
      });
    },
    onMouseEnter: function onMouseEnter(e) {
      var eventKey = this.eventKey;

      this.__emit('itemHover', {
        key: eventKey,
        hover: true
      });
      this.__emit('mouseenter', {
        key: eventKey,
        domEvent: e
      });
    },
    onClick: function onClick(e) {
      var _$props2 = this.$props,
          eventKey = _$props2.eventKey,
          multiple = _$props2.multiple,
          isSelected = _$props2.isSelected;

      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: this,
        domEvent: e
      };

      this.__emit('click', info);
      if (multiple) {
        if (isSelected) {
          this.__emit('deselect', info);
        } else {
          this.__emit('select', info);
        }
      } else if (!isSelected) {
        this.__emit('select', info);
      }
    },
    getPrefixCls: function getPrefixCls() {
      return this.$props.rootPrefixCls + '-item';
    },
    getActiveClassName: function getActiveClassName() {
      return this.getPrefixCls() + '-active';
    },
    getSelectedClassName: function getSelectedClassName() {
      return this.getPrefixCls() + '-selected';
    },
    getDisabledClassName: function getDisabledClassName() {
      return this.getPrefixCls() + '-disabled';
    },
    callRef: function callRef() {
      if (this.manualRef) {
        this.manualRef(this);
      }
    }
  },

  render: function render() {
    var _className;

    var h = arguments[0];

    var props = (0, _extends3['default'])({}, this.$props);
    var className = (_className = {}, (0, _defineProperty3['default'])(_className, this.getPrefixCls(), true), (0, _defineProperty3['default'])(_className, this.getActiveClassName(), !props.disabled && props.active), (0, _defineProperty3['default'])(_className, this.getSelectedClassName(), props.isSelected), (0, _defineProperty3['default'])(_className, this.getDisabledClassName(), props.disabled), _className);
    var attrs = (0, _extends3['default'])({}, props.attribute, {
      title: props.title,
      role: props.role || 'menuitem',
      'aria-disabled': props.disabled
    });
    if (props.role === 'option') {
      // overwrite to option
      attrs = (0, _extends3['default'])({}, attrs, {
        role: 'option',
        'aria-selected': props.isSelected
      });
    } else if (props.role === null || props.role === 'none') {
      // sometimes we want to specify role inside <li/> element
      // <li><a role='menuitem'>Link</a></li> would be a good example
      // in this case the role on <li/> should be "none" to
      // remove the implied listitem role.
      // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
      attrs.role = 'none';
    }
    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
    var mouseEvent = {
      click: props.disabled ? _util.noop : this.onClick,
      mouseleave: props.disabled ? _util.noop : this.onMouseLeave,
      mouseenter: props.disabled ? _util.noop : this.onMouseEnter
    };

    var style = {};
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level + 'px';
    }
    var listeners = (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this));
    _util.menuAllProps.props.forEach(function (key) {
      return delete props[key];
    });
    _util.menuAllProps.on.forEach(function (key) {
      return delete listeners[key];
    });
    var liProps = {
      attrs: (0, _extends3['default'])({}, props, attrs),
      on: (0, _extends3['default'])({}, listeners, mouseEvent)
    };
    return h(
      'li',
      (0, _babelHelperVueJsxMergeProps2['default'])([liProps, { style: style, 'class': className }]),
      [this.$slots['default'], (0, _propsUtil.getComponentFromProp)(this, 'itemIcon', props)]
    );
  }
};

var connected = (0, _store.connect)(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);

exports['default'] = connected;
exports.menuItemProps = props;

/***/ }),

/***/ "d937":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  name: 'MenuDivider',
  props: {
    disabled: {
      type: Boolean,
      'default': true
    },
    rootPrefixCls: String
  },
  render: function render() {
    var h = arguments[0];
    var rootPrefixCls = this.$props.rootPrefixCls;

    return h('li', { 'class': rootPrefixCls + '-item-divider' });
  }
};

/***/ }),

/***/ "d938":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_STYLE = undefined;

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.toTitle = toTitle;
exports.getValuePropValue = getValuePropValue;
exports.getPropValue = getPropValue;
exports.isMultiple = isMultiple;
exports.isCombobox = isCombobox;
exports.isMultipleOrTags = isMultipleOrTags;
exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
exports.isSingleMode = isSingleMode;
exports.toArray = toArray;
exports.getMapKey = getMapKey;
exports.preventDefaultEvent = preventDefaultEvent;
exports.findIndexInValueBySingleValue = findIndexInValueBySingleValue;
exports.getLabelFromPropsValue = getLabelFromPropsValue;
exports.getSelectKeys = getSelectKeys;
exports.findFirstMenuItem = findFirstMenuItem;
exports.includesSeparators = includesSeparators;
exports.splitBySeparators = splitBySeparators;
exports.defaultFilterFn = defaultFilterFn;
exports.validateOptionValue = validateOptionValue;
exports.saveRef = saveRef;
exports.generateUUID = generateUUID;

var _propsUtil = __webpack_require__("73c8");

var _vnode = __webpack_require__("d2f9");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toTitle(title) {
  if (typeof title === 'string') {
    return title.trim();
  }
  return '';
}
function getValuePropValue(child) {
  if (!child) {
    return null;
  }
  var props = (0, _propsUtil.getPropsData)(child);
  if ('value' in props) {
    return props.value;
  }
  if ((0, _propsUtil.getKey)(child) !== undefined) {
    return (0, _propsUtil.getKey)(child);
  }
  if ((0, _propsUtil.getSlotOptions)(child).isSelectOptGroup) {
    var label = (0, _propsUtil.getComponentFromProp)(child, 'label');
    if (label) {
      return label;
    }
  }
  throw new Error('Need at least a key or a value or a label (only for OptGroup) for ' + child);
}

function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }
  if (prop === 'children') {
    var newChild = child.$slots ? (0, _vnode.cloneVNodes)(child.$slots['default'], true) : (0, _vnode.cloneVNodes)(child.componentOptions.children, true);
    if (newChild.length === 1 && !newChild[0].tag) {
      return newChild[0].text;
    }
    return newChild;
  }
  var data = (0, _propsUtil.getPropsData)(child);
  if (prop in data) {
    return data[prop];
  } else {
    return (0, _propsUtil.getAttrs)(child)[prop];
  }
}

function isMultiple(props) {
  return props.multiple;
}

function isCombobox(props) {
  return props.combobox;
}

function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}

function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}

function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}

function toArray(value) {
  var ret = value;
  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }
  return ret;
}

function getMapKey(value) {
  return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) + '-' + value;
}

function preventDefaultEvent(e) {
  e.preventDefault();
}

function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;
  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === singleValue) {
        index = i;
        break;
      }
    }
  }
  return index;
}

function getLabelFromPropsValue(value, key) {
  var label = void 0;
  value = toArray(value);
  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i].key === key) {
        label = value[i].label;
        break;
      }
    }
  }
  return label;
}

function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }
  var selectedKeys = [];
  menuItems.forEach(function (item) {
    if ((0, _propsUtil.getSlotOptions)(item).isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.componentOptions.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;
      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey !== undefined) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}

var UNSELECTABLE_STYLE = exports.UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};

var UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'on'
};

function findFirstMenuItem(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var props = (0, _propsUtil.getPropsData)(child);
    if ((0, _propsUtil.getSlotOptions)(child).isMenuItemGroup) {
      var found = findFirstMenuItem(child.componentOptions.children);
      if (found) {
        return found;
      }
    } else if (!(props.disabled || props.disabled === '')) {
      return child;
    }
  }
  return null;
}

function includesSeparators(str, separators) {
  for (var i = 0; i < separators.length; ++i) {
    if (str.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }
  return false;
}

function splitBySeparators(str, separators) {
  var reg = new RegExp('[' + separators.join() + ']');
  return str.split(reg).filter(function (token) {
    return token;
  });
}

function defaultFilterFn(input, child) {
  var props = (0, _propsUtil.getPropsData)(child);
  if (props.disabled) {
    return false;
  }
  var value = getPropValue(child, this.optionFilterProp);
  if (value.length && value[0].text) {
    value = value[0].text;
  } else {
    value = String(value);
  }
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}

function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }
  if (typeof value !== 'string') {
    throw new Error('Invalid `value` of type `' + (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) + '` supplied to Option, ' + 'expected `string` when `tags/combobox` is `true`.');
  }
}

function saveRef(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}

function generateUUID() {
  if (false) {}
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return uuid;
}

/***/ }),

/***/ "e6a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  prefixCls: _vueTypes2['default'].string.def('rc-menu'),
  focusable: _vueTypes2['default'].bool.def(true),
  multiple: _vueTypes2['default'].bool,
  defaultActiveFirst: _vueTypes2['default'].bool,
  visible: _vueTypes2['default'].bool.def(true),
  activeKey: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
  selectedKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])),
  defaultSelectedKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])).def([]),
  defaultOpenKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])).def([]),
  openKeys: _vueTypes2['default'].arrayOf(_vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number])),
  openAnimation: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object]),
  mode: _vueTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']).def('vertical'),
  triggerSubMenuAction: _vueTypes2['default'].string.def('hover'),
  subMenuOpenDelay: _vueTypes2['default'].number.def(0.1),
  subMenuCloseDelay: _vueTypes2['default'].number.def(0.1),
  level: _vueTypes2['default'].number.def(1),
  inlineIndent: _vueTypes2['default'].number.def(24),
  theme: _vueTypes2['default'].oneOf(['light', 'dark']).def('light'),
  getPopupContainer: _vueTypes2['default'].func,
  openTransitionName: _vueTypes2['default'].string,
  forceSubMenuRender: _vueTypes2['default'].bool,
  selectable: _vueTypes2['default'].bool,
  isRootMenu: _vueTypes2['default'].bool.def(true),
  builtinPlacements: _vueTypes2['default'].object.def(function () {
    return {};
  }),
  itemIcon: _vueTypes2['default'].any,
  expandIcon: _vueTypes2['default'].any,
  overflowedIndicator: _vueTypes2['default'].any
};

/***/ }),

/***/ "e8a7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Provider = __webpack_require__("23f0");

Object.defineProperty(exports, 'Provider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Provider)['default'];
  }
});

var _connect = __webpack_require__("c43a");

Object.defineProperty(exports, 'connect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_connect)['default'];
  }
});

var _create = __webpack_require__("ea0f");

Object.defineProperty(exports, 'create', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_create)['default'];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ "e98d":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// import { menuAllProps } from './util'

var MenuItemGroup = {
  name: 'MenuItemGroup',

  props: {
    renderMenuItem: _vueTypes2['default'].func,
    index: _vueTypes2['default'].number,
    className: _vueTypes2['default'].string,
    subMenuKey: _vueTypes2['default'].string,
    rootPrefixCls: _vueTypes2['default'].string,
    disabled: _vueTypes2['default'].bool.def(true),
    title: _vueTypes2['default'].any
  },
  isMenuItemGroup: true,
  methods: {
    renderInnerMenuItem: function renderInnerMenuItem(item) {
      var _$props = this.$props,
          renderMenuItem = _$props.renderMenuItem,
          index = _$props.index,
          subMenuKey = _$props.subMenuKey;

      return renderMenuItem(item, index, subMenuKey);
    }
  },
  render: function render() {
    var h = arguments[0];

    var props = (0, _extends3['default'])({}, this.$props);
    var rootPrefixCls = props.rootPrefixCls,
        title = props.title;

    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    // menuAllProps.props.forEach(key => delete props[key])
    var listeners = (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this));
    delete listeners.click;

    return h(
      'li',
      { on: listeners, 'class': rootPrefixCls + '-item-group' },
      [h(
        'div',
        { 'class': titleClassName, attrs: { title: typeof title === 'string' ? title : undefined }
        },
        [(0, _propsUtil.getComponentFromProp)(this, 'title')]
      ), h(
        'ul',
        { 'class': listClassName },
        [this.$slots['default'] && this.$slots['default'].map(this.renderInnerMenuItem)]
      )]
    );
  }
};

exports['default'] = MenuItemGroup;

/***/ }),

/***/ "ea0f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports["default"] = create;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function create(initialState) {
  var state = initialState;
  var listeners = [];

  function setState(partial) {
    state = (0, _extends3["default"])({}, state, partial);
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      var index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe
  };
}

/***/ }),

/***/ "ebf1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var placements = exports.placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};

exports['default'] = placements;

/***/ }),

/***/ "f0b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _resizeObserverPolyfill = __webpack_require__("6dd8");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _SubMenu = __webpack_require__("695d");

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _util = __webpack_require__("7c18");

var _vnode = __webpack_require__("d2f9");

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
var FLOAT_PRECISION_ADJUST = 0.5;

// Fix ssr
if (canUseDOM) {
  __webpack_require__("0cdd");
}

var DOMWrap = {
  name: 'DOMWrap',
  mixins: [_BaseMixin2['default']],
  data: function data() {
    this.resizeObserver = null;
    this.mutationObserver = null;

    // original scroll size of the list
    this.originalTotalWidth = 0;

    // copy of overflowed items
    this.overflowedItems = [];

    // cache item of the original items (so we can track the size and order)
    this.menuItemSizes = [];
    return {
      lastVisibleIndex: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.setChildrenWidthAndResize();
      if (_this.level === 1 && _this.mode === 'horizontal') {
        var menuUl = _this.$el;
        if (!menuUl) {
          return;
        }
        _this.resizeObserver = new _resizeObserverPolyfill2['default'](function (entries) {
          entries.forEach(_this.setChildrenWidthAndResize);
        });

        [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
          _this.resizeObserver.observe(el);
        });

        if (typeof MutationObserver !== 'undefined') {
          _this.mutationObserver = new MutationObserver(function () {
            _this.resizeObserver.disconnect();
            [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
              _this.resizeObserver.observe(el);
            });
            _this.setChildrenWidthAndResize();
          });
          _this.mutationObserver.observe(menuUl, {
            attributes: false,
            childList: true,
            subTree: false
          });
        }
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  },

  methods: {
    // get all valid menuItem nodes
    getMenuItemNodes: function getMenuItemNodes() {
      var prefixCls = this.$props.prefixCls;

      var ul = this.$el;
      if (!ul) {
        return [];
      }

      // filter out all overflowed indicator placeholder
      return [].slice.call(ul.children).filter(function (node) {
        return node.className.split(' ').indexOf(prefixCls + '-overflowed-submenu') < 0;
      });
    },
    getOverflowedSubMenuItem: function getOverflowedSubMenuItem(keyPrefix, overflowedItems, renderPlaceholder) {
      var h = this.$createElement;
      var _$props = this.$props,
          overflowedIndicator = _$props.overflowedIndicator,
          level = _$props.level,
          mode = _$props.mode,
          prefixCls = _$props.prefixCls,
          theme = _$props.theme;

      if (level !== 1 || mode !== 'horizontal') {
        return null;
      }
      // put all the overflowed item inside a submenu
      // with a title of overflow indicator ('...')
      var copy = this.$slots['default'][0];

      var _getPropsData = (0, _propsUtil.getPropsData)(copy),
          title = _getPropsData.title,
          rest = (0, _objectWithoutProperties3['default'])(_getPropsData, ['title']); // eslint-disable-line no-unused-vars


      var events = (0, _propsUtil.getEvents)(copy);
      var style = {};
      var key = keyPrefix + '-overflowed-indicator';
      var eventKey = keyPrefix + '-overflowed-indicator';

      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
        style = {
          display: 'none'
        };
      } else if (renderPlaceholder) {
        style = {
          visibility: 'hidden',
          // prevent from taking normal dom space
          position: 'absolute'
        };
        key = key + '-placeholder';
        eventKey = eventKey + '-placeholder';
      }

      var popupClassName = theme ? prefixCls + '-' + theme : '';
      var props = {};
      var on = {};
      _util.menuAllProps.props.forEach(function (k) {
        if (rest[k] !== undefined) {
          props[k] = rest[k];
        }
      });
      _util.menuAllProps.on.forEach(function (k) {
        if (events[k] !== undefined) {
          on[k] = events[k];
        }
      });
      var subMenuProps = {
        props: (0, _extends3['default'])({
          title: overflowedIndicator,
          popupClassName: popupClassName
        }, props, {
          eventKey: eventKey,
          disabled: false
        }),
        'class': prefixCls + '-overflowed-submenu',
        key: key,
        style: style,
        on: on
      };

      return h(
        _SubMenu2['default'],
        subMenuProps,
        [overflowedItems]
      );
    },


    // memorize rendered menuSize
    setChildrenWidthAndResize: function setChildrenWidthAndResize() {
      if (this.mode !== 'horizontal') {
        return;
      }
      var ul = this.$el;

      if (!ul) {
        return;
      }

      var ulChildrenNodes = ul.children;

      if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
        return;
      }

      var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1];

      // need last overflowed indicator for calculating length;
      (0, _util.setStyle)(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');

      var menuItemNodes = this.getMenuItemNodes();

      // reset display attribute for all hidden elements caused by overflow to calculate updated width
      // and then reset to original state after width calculation

      var overflowedItems = menuItemNodes.filter(function (c) {
        return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
      });

      overflowedItems.forEach(function (c) {
        (0, _util.setStyle)(c, 'display', 'inline-block');
      });

      this.menuItemSizes = menuItemNodes.map(function (c) {
        return (0, _util.getWidth)(c);
      });

      overflowedItems.forEach(function (c) {
        (0, _util.setStyle)(c, 'display', 'none');
      });
      this.overflowedIndicatorWidth = (0, _util.getWidth)(ul.children[ul.children.length - 1]);
      this.originalTotalWidth = this.menuItemSizes.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
      this.handleResize();
      // prevent the overflowed indicator from taking space;
      (0, _util.setStyle)(lastOverflowedIndicatorPlaceholder, 'display', 'none');
    },
    handleResize: function handleResize() {
      var _this2 = this;

      if (this.mode !== 'horizontal') {
        return;
      }

      var ul = this.$el;
      if (!ul) {
        return;
      }
      var width = (0, _util.getWidth)(ul);

      this.overflowedItems = [];
      var currentSumWidth = 0;

      // index for last visible child in horizontal mode
      var lastVisibleIndex = void 0;

      // float number comparison could be problematic
      // e.g. 0.1 + 0.2 > 0.3 =====> true
      // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation
      if (this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
        lastVisibleIndex = -1;

        this.menuItemSizes.forEach(function (liWidth) {
          currentSumWidth += liWidth;
          if (currentSumWidth + _this2.overflowedIndicatorWidth <= width) {
            lastVisibleIndex += 1;
          }
        });
      }

      this.setState({ lastVisibleIndex: lastVisibleIndex });
    },
    renderChildren: function renderChildren(children) {
      var _this3 = this;

      // need to take care of overflowed items in horizontal mode
      var lastVisibleIndex = this.$data.lastVisibleIndex;

      var className = (0, _propsUtil.getClass)(this);
      return (children || []).reduce(function (acc, childNode, index) {
        var item = childNode;
        var eventKey = (0, _propsUtil.getPropsData)(childNode).eventKey;
        if (_this3.mode === 'horizontal') {
          var overflowed = _this3.getOverflowedSubMenuItem(eventKey, []);
          if (lastVisibleIndex !== undefined && className[_this3.prefixCls + '-root'] !== -1) {
            if (index > lastVisibleIndex) {
              item = (0, _vnode.cloneElement)(childNode,
              // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
              {
                style: { display: 'none' },
                props: { eventKey: eventKey + '-hidden' },
                'class': MENUITEM_OVERFLOWED_CLASSNAME
              });
            }
            if (index === lastVisibleIndex + 1) {
              _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
                return (0, _vnode.cloneElement)(c,
                // children[index].key will become '.$key' in clone by default,
                // we have to overwrite with the correct key explicitly
                {
                  key: (0, _propsUtil.getPropsData)(c).eventKey,
                  props: { mode: 'vertical-left' }
                });
              });

              overflowed = _this3.getOverflowedSubMenuItem(eventKey, _this3.overflowedItems);
            }
          }

          var ret = [].concat((0, _toConsumableArray3['default'])(acc), [overflowed, item]);

          if (index === children.length - 1) {
            // need a placeholder for calculating overflowed indicator width
            ret.push(_this3.getOverflowedSubMenuItem(eventKey, [], true));
          }
          return ret;
        }
        return [].concat((0, _toConsumableArray3['default'])(acc), [item]);
      }, []);
    }
  },

  render: function render() {
    var h = arguments[0];

    var Tag = this.$props.tag;
    var tagProps = {
      on: (0, _propsUtil.getListeners)(this)
    };
    return h(
      Tag,
      tagProps,
      [this.renderChildren(this.$slots['default'])]
    );
  }
};

DOMWrap.props = {
  mode: _vueTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  prefixCls: _vueTypes2['default'].string,
  level: _vueTypes2['default'].number,
  theme: _vueTypes2['default'].string,
  overflowedIndicator: _vueTypes2['default'].node,
  visible: _vueTypes2['default'].bool,
  hiddenClassName: _vueTypes2['default'].string,
  tag: _vueTypes2['default'].string.def('div')
};

exports['default'] = DOMWrap;

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