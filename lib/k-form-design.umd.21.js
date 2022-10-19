((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[21],{

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


/***/ })

}]);