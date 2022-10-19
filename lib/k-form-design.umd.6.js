((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[6],{

/***/ "06a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = undefined;

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__("d96e");

var _warning2 = _interopRequireDefault(_warning);

var _propsUtil = __webpack_require__("73c8");

var _vnode = __webpack_require__("d2f9");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _proxyComponent = __webpack_require__("5c06");

var _proxyComponent2 = _interopRequireDefault(_proxyComponent);

var _util = __webpack_require__("423e9");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Thought we still use `cloneElement` to pass `key`,
 * other props can pass with context for future refactor.
 */

function getWatch() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var watch = {};
  keys.forEach(function (k) {
    watch[k] = function () {
      this.needSyncKeys[k] = true;
    };
  });
  return watch;
}

var Tree = {
  name: 'Tree',
  mixins: [_BaseMixin2['default']],
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes2['default'].string,
    tabIndex: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    children: _vueTypes2['default'].any,
    treeData: _vueTypes2['default'].array, // Generate treeNode by children
    showLine: _vueTypes2['default'].bool,
    showIcon: _vueTypes2['default'].bool,
    icon: _vueTypes2['default'].oneOfType([_vueTypes2['default'].object, _vueTypes2['default'].func]),
    focusable: _vueTypes2['default'].bool,
    selectable: _vueTypes2['default'].bool,
    disabled: _vueTypes2['default'].bool,
    multiple: _vueTypes2['default'].bool,
    checkable: _vueTypes2['default'].oneOfType([_vueTypes2['default'].object, _vueTypes2['default'].bool]),
    checkStrictly: _vueTypes2['default'].bool,
    draggable: _vueTypes2['default'].bool,
    defaultExpandParent: _vueTypes2['default'].bool,
    autoExpandParent: _vueTypes2['default'].bool,
    defaultExpandAll: _vueTypes2['default'].bool,
    defaultExpandedKeys: _vueTypes2['default'].array,
    expandedKeys: _vueTypes2['default'].array,
    defaultCheckedKeys: _vueTypes2['default'].array,
    checkedKeys: _vueTypes2['default'].oneOfType([_vueTypes2['default'].array, _vueTypes2['default'].object]),
    defaultSelectedKeys: _vueTypes2['default'].array,
    selectedKeys: _vueTypes2['default'].array,
    // onClick: PropTypes.func,
    // onDoubleClick: PropTypes.func,
    // onExpand: PropTypes.func,
    // onCheck: PropTypes.func,
    // onSelect: PropTypes.func,
    loadData: _vueTypes2['default'].func,
    loadedKeys: _vueTypes2['default'].array,
    // onMouseEnter: PropTypes.func,
    // onMouseLeave: PropTypes.func,
    // onRightClick: PropTypes.func,
    // onDragStart: PropTypes.func,
    // onDragEnter: PropTypes.func,
    // onDragOver: PropTypes.func,
    // onDragLeave: PropTypes.func,
    // onDragEnd: PropTypes.func,
    // onDrop: PropTypes.func,
    filterTreeNode: _vueTypes2['default'].func,
    openTransitionName: _vueTypes2['default'].string,
    openAnimation: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object]),
    switcherIcon: _vueTypes2['default'].any,
    _propsSymbol: _vueTypes2['default'].any
  }, {
    prefixCls: 'rc-tree',
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: []
  }),

  data: function data() {
    (0, _warning2['default'])(this.$props.__propsSymbol__, 'must pass __propsSymbol__');
    (0, _warning2['default'])(this.$props.children, 'please use children prop replace slots.default');
    this.needSyncKeys = {};
    this.domTreeNodes = {};
    var state = {
      _posEntities: new Map(),
      _keyEntities: new Map(),
      _expandedKeys: [],
      _selectedKeys: [],
      _checkedKeys: [],
      _halfCheckedKeys: [],
      _loadedKeys: [],
      _loadingKeys: [],
      _treeNode: [],
      _prevProps: null,
      _dragOverNodeKey: '',
      _dropPosition: null,
      _dragNodesKeys: []
    };
    return (0, _extends3['default'])({}, state, this.getDerivedState((0, _propsUtil.getOptionProps)(this), state));
  },
  provide: function provide() {
    return {
      vcTree: this
    };
  },


  watch: (0, _extends3['default'])({}, getWatch(['treeData', 'children', 'expandedKeys', 'autoExpandParent', 'selectedKeys', 'checkedKeys', 'loadedKeys']), {
    __propsSymbol__: function __propsSymbol__() {
      this.setState(this.getDerivedState((0, _propsUtil.getOptionProps)(this), this.$data));
      this.needSyncKeys = {};
    }
  }),

  methods: {
    getDerivedState: function getDerivedState(props, prevState) {
      var _prevProps = prevState._prevProps;

      var newState = {
        _prevProps: (0, _extends3['default'])({}, props)
      };
      var self = this;
      function needSync(name) {
        return !_prevProps && name in props || _prevProps && self.needSyncKeys[name];
      }

      // ================== Tree Node ==================
      var treeNode = null;

      // Check if `treeData` or `children` changed and save into the state.
      if (needSync('treeData')) {
        treeNode = (0, _util.convertDataToTree)(this.$createElement, props.treeData);
      } else if (needSync('children')) {
        treeNode = props.children;
      }

      // Tree support filter function which will break the tree structure in the vdm.
      // We cache the treeNodes in state so that we can return the treeNode in event trigger.
      if (treeNode) {
        newState._treeNode = treeNode;

        // Calculate the entities data for quick match
        var entitiesMap = (0, _util.convertTreeToEntities)(treeNode);
        newState._keyEntities = entitiesMap.keyEntities;
      }

      var keyEntities = newState._keyEntities || prevState._keyEntities;

      // ================ expandedKeys =================
      if (needSync('expandedKeys') || _prevProps && needSync('autoExpandParent')) {
        newState._expandedKeys = props.autoExpandParent || !_prevProps && props.defaultExpandParent ? (0, _util.conductExpandParent)(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!_prevProps && props.defaultExpandAll) {
        newState._expandedKeys = [].concat((0, _toConsumableArray3['default'])(keyEntities.keys()));
      } else if (!_prevProps && props.defaultExpandedKeys) {
        newState._expandedKeys = props.autoExpandParent || props.defaultExpandParent ? (0, _util.conductExpandParent)(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }

      // ================ selectedKeys =================
      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState._selectedKeys = (0, _util.calcSelectedKeys)(props.selectedKeys, props);
        } else if (!_prevProps && props.defaultSelectedKeys) {
          newState._selectedKeys = (0, _util.calcSelectedKeys)(props.defaultSelectedKeys, props);
        }
      }

      // ================= checkedKeys =================
      if (props.checkable) {
        var checkedKeyEntity = void 0;

        if (needSync('checkedKeys')) {
          checkedKeyEntity = (0, _util.parseCheckedKeys)(props.checkedKeys) || {};
        } else if (!_prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = (0, _util.parseCheckedKeys)(props.defaultCheckedKeys) || {};
        } else if (treeNode) {
          // If treeNode changed, we also need check it
          checkedKeyEntity = (0, _util.parseCheckedKeys)(props.checkedKeys) || {
            checkedKeys: prevState._checkedKeys,
            halfCheckedKeys: prevState._halfCheckedKeys
          };
        }

        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
              _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
              checkedKeys = _checkedKeyEntity$che === undefined ? [] : _checkedKeyEntity$che,
              _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
              halfCheckedKeys = _checkedKeyEntity$hal === undefined ? [] : _checkedKeyEntity$hal;


          if (!props.checkStrictly) {
            var conductKeys = (0, _util.conductCheck)(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }

          newState._checkedKeys = checkedKeys;
          newState._halfCheckedKeys = halfCheckedKeys;
        }
      }
      // ================= loadedKeys ==================
      if (needSync('loadedKeys')) {
        newState._loadedKeys = props.loadedKeys;
      }

      return newState;
    },
    onNodeDragStart: function onNodeDragStart(event, node) {
      var _expandedKeys = this.$data._expandedKeys;
      var eventKey = node.eventKey;

      var children = (0, _propsUtil.getSlots)(node)['default'];
      this.dragNode = node;

      this.setState({
        _dragNodesKeys: (0, _util.getDragNodesKeys)(typeof children === 'function' ? children() : children, node),
        _expandedKeys: (0, _util.arrDel)(_expandedKeys, eventKey)
      });
      this.__emit('dragstart', { event: event, node: node });
    },


    /**
     * [Legacy] Select handler is less small than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */
    onNodeDragEnter: function onNodeDragEnter(event, node) {
      var _this = this;

      var expandedKeys = this.$data._expandedKeys;
      var pos = node.pos,
          eventKey = node.eventKey;


      if (!this.dragNode || !node.$refs.selectHandle) return;

      var dropPosition = (0, _util.calcDropPosition)(event, node);

      // Skip if drag node is self
      if (this.dragNode.eventKey === eventKey && dropPosition === 0) {
        this.setState({
          _dragOverNodeKey: '',
          _dropPosition: null
        });
        return;
      }

      // Ref: https://github.com/react-component/tree/issues/132
      // Add timeout to let onDragLevel fire before onDragEnter,
      // so that we can clean drag props for onDragLeave node.
      // Macro task for this:
      // https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script
      setTimeout(function () {
        // Update drag over node
        _this.setState({
          _dragOverNodeKey: eventKey,
          _dropPosition: dropPosition
        });

        // Side effect for delay drag
        if (!_this.delayedDragEnterLogic) {
          _this.delayedDragEnterLogic = {};
        }
        Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
          clearTimeout(_this.delayedDragEnterLogic[key]);
        });
        _this.delayedDragEnterLogic[pos] = setTimeout(function () {
          var newExpandedKeys = (0, _util.arrAdd)(expandedKeys, eventKey);
          if (!(0, _propsUtil.hasProp)(_this, 'expandedKeys')) {
            _this.setState({
              _expandedKeys: newExpandedKeys
            });
          }
          _this.__emit('dragenter', { event: event, node: node, expandedKeys: newExpandedKeys });
        }, 400);
      }, 0);
    },
    onNodeDragOver: function onNodeDragOver(event, node) {
      var eventKey = node.eventKey;
      var _$data = this.$data,
          _dragOverNodeKey = _$data._dragOverNodeKey,
          _dropPosition = _$data._dropPosition;
      // Update drag position

      if (this.dragNode && eventKey === _dragOverNodeKey && node.$refs.selectHandle) {
        var dropPosition = (0, _util.calcDropPosition)(event, node);

        if (dropPosition === _dropPosition) return;

        this.setState({
          _dropPosition: dropPosition
        });
      }
      this.__emit('dragover', { event: event, node: node });
    },
    onNodeDragLeave: function onNodeDragLeave(event, node) {
      this.setState({
        _dragOverNodeKey: ''
      });
      this.__emit('dragleave', { event: event, node: node });
    },
    onNodeDragEnd: function onNodeDragEnd(event, node) {
      this.setState({
        _dragOverNodeKey: ''
      });
      this.__emit('dragend', { event: event, node: node });
      this.dragNode = null;
    },
    onNodeDrop: function onNodeDrop(event, node) {
      var _$data2 = this.$data,
          _$data2$_dragNodesKey = _$data2._dragNodesKeys,
          _dragNodesKeys = _$data2$_dragNodesKey === undefined ? [] : _$data2$_dragNodesKey,
          _dropPosition = _$data2._dropPosition;

      var eventKey = node.eventKey,
          pos = node.pos;


      this.setState({
        _dragOverNodeKey: ''
      });

      if (_dragNodesKeys.indexOf(eventKey) !== -1) {
        (0, _warning2['default'])(false, "Can not drop to dragNode(include it's children node)");
        return;
      }

      var posArr = (0, _util.posToArr)(pos);

      var dropResult = {
        event: event,
        node: node,
        dragNode: this.dragNode,
        dragNodesKeys: _dragNodesKeys.slice(),
        dropPosition: _dropPosition + Number(posArr[posArr.length - 1]),
        dropToGap: false
      };

      if (_dropPosition !== 0) {
        dropResult.dropToGap = true;
      }
      this.__emit('drop', dropResult);
      this.dragNode = null;
    },
    onNodeClick: function onNodeClick(e, treeNode) {
      this.__emit('click', e, treeNode);
    },
    onNodeDoubleClick: function onNodeDoubleClick(e, treeNode) {
      this.__emit('dblclick', e, treeNode);
    },
    onNodeSelect: function onNodeSelect(e, treeNode) {
      var selectedKeys = this.$data._selectedKeys;
      var keyEntities = this.$data._keyEntities;
      var multiple = this.$props.multiple;

      var _getOptionProps = (0, _propsUtil.getOptionProps)(treeNode),
          selected = _getOptionProps.selected,
          eventKey = _getOptionProps.eventKey;

      var targetSelected = !selected;
      // Update selected keys
      if (!targetSelected) {
        selectedKeys = (0, _util.arrDel)(selectedKeys, eventKey);
      } else if (!multiple) {
        selectedKeys = [eventKey];
      } else {
        selectedKeys = (0, _util.arrAdd)(selectedKeys, eventKey);
      }

      // [Legacy] Not found related usage in doc or upper libs
      var selectedNodes = selectedKeys.map(function (key) {
        var entity = keyEntities.get(key);
        if (!entity) return null;

        return entity.node;
      }).filter(function (node) {
        return node;
      });

      this.setUncontrolledState({ _selectedKeys: selectedKeys });

      var eventObj = {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        selectedNodes: selectedNodes,
        nativeEvent: e
      };
      this.__emit('update:selectedKeys', selectedKeys);
      this.__emit('select', selectedKeys, eventObj);
    },
    onNodeCheck: function onNodeCheck(e, treeNode, checked) {
      var _$data3 = this.$data,
          keyEntities = _$data3._keyEntities,
          oriCheckedKeys = _$data3._checkedKeys,
          oriHalfCheckedKeys = _$data3._halfCheckedKeys;
      var checkStrictly = this.$props.checkStrictly;

      var _getOptionProps2 = (0, _propsUtil.getOptionProps)(treeNode),
          eventKey = _getOptionProps2.eventKey;

      // Prepare trigger arguments


      var checkedObj = void 0;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e
      };

      if (checkStrictly) {
        var checkedKeys = checked ? (0, _util.arrAdd)(oriCheckedKeys, eventKey) : (0, _util.arrDel)(oriCheckedKeys, eventKey);
        var halfCheckedKeys = (0, _util.arrDel)(oriHalfCheckedKeys, eventKey);
        checkedObj = { checked: checkedKeys, halfChecked: halfCheckedKeys };

        eventObj.checkedNodes = checkedKeys.map(function (key) {
          return keyEntities.get(key);
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });

        this.setUncontrolledState({ _checkedKeys: checkedKeys });
      } else {
        var _conductCheck = (0, _util.conductCheck)([eventKey], checked, keyEntities, {
          checkedKeys: oriCheckedKeys,
          halfCheckedKeys: oriHalfCheckedKeys
        }),
            _checkedKeys = _conductCheck.checkedKeys,
            _halfCheckedKeys = _conductCheck.halfCheckedKeys;

        checkedObj = _checkedKeys;

        // [Legacy] This is used for `rc-tree-select`
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;

        _checkedKeys.forEach(function (key) {
          var entity = keyEntities.get(key);
          if (!entity) return;

          var node = entity.node,
              pos = entity.pos;


          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({ node: node, pos: pos });
        });

        this.setUncontrolledState({
          _checkedKeys: _checkedKeys,
          _halfCheckedKeys: _halfCheckedKeys
        });
      }
      this.__emit('check', checkedObj, eventObj);
    },
    onNodeLoad: function onNodeLoad(treeNode) {
      var _this2 = this;

      return new Promise(function (resolve) {
        // We need to get the latest state of loading/loaded keys
        _this2.setState(function (_ref) {
          var _ref$_loadedKeys = _ref._loadedKeys,
              loadedKeys = _ref$_loadedKeys === undefined ? [] : _ref$_loadedKeys,
              _ref$_loadingKeys = _ref._loadingKeys,
              loadingKeys = _ref$_loadingKeys === undefined ? [] : _ref$_loadingKeys;
          var loadData = _this2.$props.loadData;

          var _getOptionProps3 = (0, _propsUtil.getOptionProps)(treeNode),
              eventKey = _getOptionProps3.eventKey;

          if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
            return {};
          }

          // Process load data
          var promise = loadData(treeNode);
          promise.then(function () {
            var _$data4 = _this2.$data,
                currentLoadedKeys = _$data4._loadedKeys,
                currentLoadingKeys = _$data4._loadingKeys;

            var newLoadedKeys = (0, _util.arrAdd)(currentLoadedKeys, eventKey);
            var newLoadingKeys = (0, _util.arrDel)(currentLoadingKeys, eventKey);

            // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464
            _this2.__emit('load', newLoadedKeys, {
              event: 'load',
              node: treeNode
            });
            _this2.setUncontrolledState({
              _loadedKeys: newLoadedKeys
            });
            _this2.setState({
              _loadingKeys: newLoadingKeys
            });
            resolve();
          });

          return {
            _loadingKeys: (0, _util.arrAdd)(loadingKeys, eventKey)
          };
        });
      });
    },
    onNodeExpand: function onNodeExpand(e, treeNode) {
      var _this3 = this;

      var expandedKeys = this.$data._expandedKeys;
      var loadData = this.$props.loadData;

      var _getOptionProps4 = (0, _propsUtil.getOptionProps)(treeNode),
          eventKey = _getOptionProps4.eventKey,
          expanded = _getOptionProps4.expanded;

      // Update selected keys


      var index = expandedKeys.indexOf(eventKey);
      var targetExpanded = !expanded;

      (0, _warning2['default'])(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

      if (targetExpanded) {
        expandedKeys = (0, _util.arrAdd)(expandedKeys, eventKey);
      } else {
        expandedKeys = (0, _util.arrDel)(expandedKeys, eventKey);
      }

      this.setUncontrolledState({ _expandedKeys: expandedKeys });
      this.__emit('expand', expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e
      });
      this.__emit('update:expandedKeys', expandedKeys);

      // Async Load data
      if (targetExpanded && loadData) {
        var loadPromise = this.onNodeLoad(treeNode);
        return loadPromise ? loadPromise.then(function () {
          // [Legacy] Refresh logic
          _this3.setUncontrolledState({ _expandedKeys: expandedKeys });
        }) : null;
      }

      return null;
    },
    onNodeMouseEnter: function onNodeMouseEnter(event, node) {
      this.__emit('mouseenter', { event: event, node: node });
    },
    onNodeMouseLeave: function onNodeMouseLeave(event, node) {
      this.__emit('mouseleave', { event: event, node: node });
    },
    onNodeContextMenu: function onNodeContextMenu(event, node) {
      event.preventDefault();
      this.__emit('rightClick', { event: event, node: node });
    },


    /**
     * Only update the value which is not in props
     */
    setUncontrolledState: function setUncontrolledState(state) {
      var needSync = false;
      var newState = {};
      var props = (0, _propsUtil.getOptionProps)(this);
      Object.keys(state).forEach(function (name) {
        if (name.replace('_', '') in props) return;
        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        this.setState(newState);
      }
    },
    registerTreeNode: function registerTreeNode(key, node) {
      if (node) {
        this.domTreeNodes[key] = node;
      } else {
        delete this.domTreeNodes[key];
      }
    },
    isKeyChecked: function isKeyChecked(key) {
      var _$data$_checkedKeys = this.$data._checkedKeys,
          checkedKeys = _$data$_checkedKeys === undefined ? [] : _$data$_checkedKeys;

      return checkedKeys.indexOf(key) !== -1;
    },


    /**
     * [Legacy] Original logic use `key` as tracking clue.
     * We have to use `cloneElement` to pass `key`.
     */
    renderTreeNode: function renderTreeNode(child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var _$data5 = this.$data,
          keyEntities = _$data5._keyEntities,
          _$data5$_expandedKeys = _$data5._expandedKeys,
          expandedKeys = _$data5$_expandedKeys === undefined ? [] : _$data5$_expandedKeys,
          _$data5$_selectedKeys = _$data5._selectedKeys,
          selectedKeys = _$data5$_selectedKeys === undefined ? [] : _$data5$_selectedKeys,
          _$data5$_halfCheckedK = _$data5._halfCheckedKeys,
          halfCheckedKeys = _$data5$_halfCheckedK === undefined ? [] : _$data5$_halfCheckedK,
          _$data5$_loadedKeys = _$data5._loadedKeys,
          loadedKeys = _$data5$_loadedKeys === undefined ? [] : _$data5$_loadedKeys,
          _$data5$_loadingKeys = _$data5._loadingKeys,
          loadingKeys = _$data5$_loadingKeys === undefined ? [] : _$data5$_loadingKeys,
          dragOverNodeKey = _$data5._dragOverNodeKey,
          dropPosition = _$data5._dropPosition;

      var pos = (0, _util.getPosition)(level, index);
      var key = child.key;
      if (!key && (key === undefined || key === null)) {
        key = pos;
      }
      if (!keyEntities.get(key)) {
        (0, _util.warnOnlyTreeNode)();
        return null;
      }

      return (0, _vnode.cloneElement)(child, {
        props: {
          eventKey: key,
          expanded: expandedKeys.indexOf(key) !== -1,
          selected: selectedKeys.indexOf(key) !== -1,
          loaded: loadedKeys.indexOf(key) !== -1,
          loading: loadingKeys.indexOf(key) !== -1,
          checked: this.isKeyChecked(key),
          halfChecked: halfCheckedKeys.indexOf(key) !== -1,
          pos: pos,

          // [Legacy] Drag props
          dragOver: dragOverNodeKey === key && dropPosition === 0,
          dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
          dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
        },
        key: key
      });
    }
  },

  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var treeNode = this.$data._treeNode;
    var _$props = this.$props,
        prefixCls = _$props.prefixCls,
        focusable = _$props.focusable,
        showLine = _$props.showLine,
        _$props$tabIndex = _$props.tabIndex,
        tabIndex = _$props$tabIndex === undefined ? 0 : _$props$tabIndex;


    return h(
      'ul',
      {
        'class': (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-show-line', showLine)),
        attrs: { role: 'tree',
          unselectable: 'on',
          tabIndex: focusable ? tabIndex : null
        }
      },
      [(0, _util.mapChildren)(treeNode, function (node, index) {
        return _this4.renderTreeNode(node, index);
      })]
    );
  }
};

exports.Tree = Tree;
exports['default'] = (0, _proxyComponent2['default'])(Tree);

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

/***/ "2050":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vcTree = __webpack_require__("8a23");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * SelectNode wrapped the tree node.
 * Let's use SelectNode instead of TreeNode
 * since TreeNode is so confuse here.
 */
exports['default'] = {
  name: 'SelectNode',
  functional: true,
  isTreeNode: true,
  props: _vcTree.TreeNode.props,
  render: function render(h, context) {
    var props = context.props,
        slots = context.slots,
        listeners = context.listeners,
        data = context.data,
        scopedSlots = context.scopedSlots;

    var $slots = slots() || {};
    var children = $slots['default'];
    var slotsKey = Object.keys($slots);
    var scopedSlotsTemp = {}; // for vue 2.5.x
    slotsKey.forEach(function (name) {
      scopedSlotsTemp[name] = function () {
        return $slots[name];
      };
    });
    var treeNodeProps = (0, _extends3['default'])({}, data, {
      on: (0, _extends3['default'])({}, listeners, data.nativeOn),
      props: props,
      scopedSlots: (0, _extends3['default'])({}, scopedSlotsTemp, scopedSlots)
    });
    return h(
      _vcTree.TreeNode,
      treeNodeProps,
      [children]
    );
  }
};

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

/***/ "269c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _warning = __webpack_require__("d96e");

var _warning2 = _interopRequireDefault(_warning);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcTree = __webpack_require__("8a23");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _util = __webpack_require__("2fd9");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// export const popupContextTypes = {
//   onPopupKeyDown: PropTypes.func.isRequired,
//   onTreeNodeSelect: PropTypes.func.isRequired,
//   onTreeNodeCheck: PropTypes.func.isRequired,
// }
function getDerivedState(nextProps, prevState) {
  var _ref = prevState || {},
      _ref$_prevProps = _ref._prevProps,
      prevProps = _ref$_prevProps === undefined ? {} : _ref$_prevProps,
      loadedKeys = _ref._loadedKeys,
      expandedKeyList = _ref._expandedKeyList,
      cachedExpandedKeyList = _ref._cachedExpandedKeyList;

  var valueList = nextProps.valueList,
      valueEntities = nextProps.valueEntities,
      keyEntities = nextProps.keyEntities,
      treeExpandedKeys = nextProps.treeExpandedKeys,
      filteredTreeNodes = nextProps.filteredTreeNodes,
      upperSearchValue = nextProps.upperSearchValue;


  var newState = {
    _prevProps: (0, _extends3['default'])({}, nextProps)
  };

  // Check value update
  if (valueList !== prevProps.valueList) {
    newState._keyList = valueList.map(function (_ref2) {
      var value = _ref2.value;
      return valueEntities[value];
    }).filter(function (entity) {
      return entity;
    }).map(function (_ref3) {
      var key = _ref3.key;
      return key;
    });
  }

  // Show all when tree is in filter mode
  if (!treeExpandedKeys && filteredTreeNodes && filteredTreeNodes.length && filteredTreeNodes !== prevProps.filteredTreeNodes) {
    newState._expandedKeyList = [].concat((0, _toConsumableArray3['default'])(keyEntities.keys()));
  }

  // Cache `expandedKeyList` when filter set
  if (upperSearchValue && !prevProps.upperSearchValue) {
    newState._cachedExpandedKeyList = expandedKeyList;
  } else if (!upperSearchValue && prevProps.upperSearchValue && !treeExpandedKeys) {
    newState._expandedKeyList = cachedExpandedKeyList || [];
    newState._cachedExpandedKeyList = [];
  }

  // Use expandedKeys if provided
  if (prevProps.treeExpandedKeys !== treeExpandedKeys) {
    newState._expandedKeyList = treeExpandedKeys;
  }

  // Clean loadedKeys if key not exist in keyEntities anymore
  if (nextProps.loadData) {
    newState._loadedKeys = loadedKeys.filter(function (key) {
      return keyEntities.has(key);
    });
  }

  return newState;
}
var BasePopup = {
  mixins: [_BaseMixin2['default']],
  name: 'BasePopup',
  props: {
    prefixCls: _vueTypes2['default'].string,
    upperSearchValue: _vueTypes2['default'].string,
    valueList: _vueTypes2['default'].array,
    searchHalfCheckedKeys: _vueTypes2['default'].array,
    valueEntities: _vueTypes2['default'].object,
    keyEntities: Map,
    treeIcon: _vueTypes2['default'].bool,
    treeLine: _vueTypes2['default'].bool,
    treeNodeFilterProp: _vueTypes2['default'].string,
    treeCheckable: _vueTypes2['default'].any,
    treeCheckStrictly: _vueTypes2['default'].bool,
    treeDefaultExpandAll: _vueTypes2['default'].bool,
    treeDefaultExpandedKeys: _vueTypes2['default'].array,
    treeExpandedKeys: _vueTypes2['default'].array,
    loadData: _vueTypes2['default'].func,
    multiple: _vueTypes2['default'].bool,
    // onTreeExpand: PropTypes.func,
    searchValue: _vueTypes2['default'].string,
    treeNodes: _vueTypes2['default'].any,
    filteredTreeNodes: _vueTypes2['default'].any,
    notFoundContent: _vueTypes2['default'].any,

    ariaId: _vueTypes2['default'].string,
    switcherIcon: _vueTypes2['default'].any,
    // HOC
    renderSearch: _vueTypes2['default'].func,
    // onTreeExpanded: PropTypes.func,

    __propsSymbol__: _vueTypes2['default'].any
  },
  inject: {
    vcTreeSelect: { 'default': function _default() {
        return {};
      } }
  },
  watch: {
    __propsSymbol__: function __propsSymbol__() {
      var state = getDerivedState(this.$props, this.$data);
      this.setState(state);
    }
  },
  data: function data() {
    this.treeRef = (0, _util.createRef)();
    (0, _warning2['default'])(this.$props.__propsSymbol__, 'must pass __propsSymbol__');
    var _$props = this.$props,
        treeDefaultExpandAll = _$props.treeDefaultExpandAll,
        treeDefaultExpandedKeys = _$props.treeDefaultExpandedKeys,
        keyEntities = _$props.keyEntities;

    // TODO: make `expandedKeyList` control

    var expandedKeyList = treeDefaultExpandedKeys;
    if (treeDefaultExpandAll) {
      expandedKeyList = [].concat((0, _toConsumableArray3['default'])(keyEntities.keys()));
    }

    var state = {
      _keyList: [],
      _expandedKeyList: expandedKeyList,
      // Cache `expandedKeyList` when tree is in filter. This is used in `getDerivedState`
      _cachedExpandedKeyList: [],
      _loadedKeys: [],
      _prevProps: {}
    };
    return (0, _extends3['default'])({}, state, getDerivedState(this.$props, state));
  },

  methods: {
    onTreeExpand: function onTreeExpand(expandedKeyList) {
      var _this = this;

      var treeExpandedKeys = this.$props.treeExpandedKeys;

      // Set uncontrolled state

      if (!treeExpandedKeys) {
        this.setState({ _expandedKeyList: expandedKeyList }, function () {
          _this.__emit('treeExpanded');
        });
      }
      this.__emit('update:treeExpandedKeys', expandedKeyList);
      this.__emit('treeExpand', expandedKeyList);
    },
    onLoad: function onLoad(loadedKeys) {
      this.setState({ _loadedKeys: loadedKeys });
    },
    getTree: function getTree() {
      return this.treeRef.current;
    },


    /**
     * Not pass `loadData` when searching. To avoid loop ajax call makes browser crash.
     */
    getLoadData: function getLoadData() {
      var _$props2 = this.$props,
          loadData = _$props2.loadData,
          upperSearchValue = _$props2.upperSearchValue;

      if (upperSearchValue) return null;
      return loadData;
    },


    /**
     * This method pass to Tree component which is used for add filtered class
     * in TreeNode > li
     */
    filterTreeNode: function filterTreeNode(treeNode) {
      var _$props3 = this.$props,
          upperSearchValue = _$props3.upperSearchValue,
          treeNodeFilterProp = _$props3.treeNodeFilterProp;


      var filterVal = treeNode[treeNodeFilterProp];
      if (typeof filterVal === 'string') {
        return upperSearchValue && filterVal.toUpperCase().indexOf(upperSearchValue) !== -1;
      }

      return false;
    },
    renderNotFound: function renderNotFound() {
      var h = this.$createElement;
      var _$props4 = this.$props,
          prefixCls = _$props4.prefixCls,
          notFoundContent = _$props4.notFoundContent;


      return h(
        'span',
        { 'class': prefixCls + '-not-found' },
        [notFoundContent]
      );
    }
  },

  render: function render() {
    var h = arguments[0];
    var _$data = this.$data,
        keyList = _$data._keyList,
        expandedKeyList = _$data._expandedKeyList,
        loadedKeys = _$data._loadedKeys;
    var _$props5 = this.$props,
        prefixCls = _$props5.prefixCls,
        treeNodes = _$props5.treeNodes,
        filteredTreeNodes = _$props5.filteredTreeNodes,
        treeIcon = _$props5.treeIcon,
        treeLine = _$props5.treeLine,
        treeCheckable = _$props5.treeCheckable,
        treeCheckStrictly = _$props5.treeCheckStrictly,
        multiple = _$props5.multiple,
        ariaId = _$props5.ariaId,
        renderSearch = _$props5.renderSearch,
        switcherIcon = _$props5.switcherIcon,
        searchHalfCheckedKeys = _$props5.searchHalfCheckedKeys;
    var _vcTreeSelect = this.vcTreeSelect,
        onPopupKeyDown = _vcTreeSelect.onPopupKeyDown,
        onTreeNodeSelect = _vcTreeSelect.onTreeNodeSelect,
        onTreeNodeCheck = _vcTreeSelect.onTreeNodeCheck;


    var loadData = this.getLoadData();

    var treeProps = {};

    if (treeCheckable) {
      treeProps.checkedKeys = keyList;
    } else {
      treeProps.selectedKeys = keyList;
    }
    var $notFound = void 0;
    var $treeNodes = void 0;
    if (filteredTreeNodes) {
      if (filteredTreeNodes.length) {
        treeProps.checkStrictly = true;
        $treeNodes = filteredTreeNodes;

        // Fill halfCheckedKeys
        if (treeCheckable && !treeCheckStrictly) {
          treeProps.checkedKeys = {
            checked: keyList,
            halfChecked: searchHalfCheckedKeys
          };
        }
      } else {
        $notFound = this.renderNotFound();
      }
    } else if (!treeNodes || !treeNodes.length) {
      $notFound = this.renderNotFound();
    } else {
      $treeNodes = treeNodes;
    }

    var $tree = void 0;
    if ($notFound) {
      $tree = $notFound;
    } else {
      var treeAllProps = {
        props: (0, _extends3['default'])({
          prefixCls: prefixCls + '-tree',
          showIcon: treeIcon,
          showLine: treeLine,
          selectable: !treeCheckable,
          checkable: treeCheckable,
          checkStrictly: treeCheckStrictly,
          multiple: multiple,
          loadData: loadData,
          loadedKeys: loadedKeys,
          expandedKeys: expandedKeyList,
          filterTreeNode: this.filterTreeNode,
          switcherIcon: switcherIcon
        }, treeProps, {
          __propsSymbol__: Symbol(),
          children: $treeNodes
        }),
        on: {
          select: onTreeNodeSelect,
          check: onTreeNodeCheck,
          expand: this.onTreeExpand,
          load: this.onLoad
        },
        directives: [{
          name: 'ant-ref',
          value: this.treeRef
        }]
      };
      $tree = h(_vcTree.Tree, treeAllProps);
    }

    return h(
      'div',
      {
        attrs: { role: 'listbox', id: ariaId, tabIndex: -1 },
        on: {
          'keydown': onPopupKeyDown
        }
      },
      [renderSearch ? renderSearch() : null, $tree]
    );
  }
};

exports['default'] = BasePopup;

/***/ }),

/***/ "2fbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _util = __webpack_require__("2fd9");

var _propsUtil = __webpack_require__("73c8");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Selection = {
  mixins: [_BaseMixin2['default']],
  props: {
    prefixCls: _vueTypes2['default'].string,
    maxTagTextLength: _vueTypes2['default'].number,
    // onRemove: PropTypes.func,

    label: _vueTypes2['default'].any,
    value: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    removeIcon: _vueTypes2['default'].any
  },
  methods: {
    onRemove: function onRemove(event) {
      var value = this.$props.value;

      this.__emit('remove', event, value);
      event.stopPropagation();
    }
  },

  render: function render() {
    var h = arguments[0];
    var _$props = this.$props,
        prefixCls = _$props.prefixCls,
        maxTagTextLength = _$props.maxTagTextLength,
        label = _$props.label,
        value = _$props.value;

    var content = label || value;
    if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
      content = content.slice(0, maxTagTextLength) + '...';
    }

    return h(
      'li',
      (0, _babelHelperVueJsxMergeProps2['default'])([{
        style: _util.UNSELECTABLE_STYLE
      }, { attrs: _util.UNSELECTABLE_ATTRIBUTE }, {
        attrs: {
          role: 'menuitem',

          title: (0, _util.toTitle)(label)
        },
        'class': prefixCls + '-selection__choice' }]),
      [(0, _propsUtil.getListeners)(this).remove && h(
        'span',
        { 'class': prefixCls + '-selection__choice__remove', on: {
            'click': this.onRemove
          }
        },
        [(0, _propsUtil.getComponentFromProp)(this, 'removeIcon')]
      ), h(
        'span',
        { 'class': prefixCls + '-selection__choice__content' },
        [content]
      )]
    );
  }
};

exports['default'] = Selection;

/***/ }),

/***/ "2fd9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conductCheck = exports.UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_STYLE = undefined;

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports.findPopupContainer = findPopupContainer;
exports.toTitle = toTitle;
exports.toArray = toArray;
exports.createRef = createRef;
exports.flatToHierarchy = flatToHierarchy;
exports.resetAriaId = resetAriaId;
exports.generateAriaId = generateAriaId;
exports.isLabelInValue = isLabelInValue;
exports.parseSimpleTreeData = parseSimpleTreeData;
exports.isPosRelated = isPosRelated;
exports.cleanEntity = cleanEntity;
exports.getFilterTree = getFilterTree;
exports.formatInternalValue = formatInternalValue;
exports.getLabel = getLabel;
exports.formatSelectorValue = formatSelectorValue;
exports.convertDataToTree = convertDataToTree;
exports.convertTreeToEntities = convertTreeToEntities;
exports.getHalfCheckedKeys = getHalfCheckedKeys;

var _warning = __webpack_require__("d96e");

var _warning2 = _interopRequireDefault(_warning);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _util = __webpack_require__("423e9");

var _class = __webpack_require__("c6a1");

var _strategies = __webpack_require__("cbda");

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var warnDeprecatedLabel = false;

// =================== DOM =====================
function findPopupContainer(node, prefixClass) {
  var current = node;
  while (current) {
    if ((0, _class.hasClass)(current, prefixClass)) {
      return current;
    }
    current = current.parentNode;
  }

  return null;
}

// =================== MISC ====================
function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }
  return null;
}

function toArray(data) {
  if (data === undefined || data === null) return [];

  return Array.isArray(data) ? data : [data];
}

function createRef() {
  var func = function setRef(node) {
    func.current = node;
  };
  return func;
}

// =============== Legacy ===============
var UNSELECTABLE_STYLE = exports.UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};

var UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'unselectable'
};

/**
 * Convert position list to hierarchy structure.
 * This is little hack since use '-' to split the position.
 */
function flatToHierarchy(positionList) {
  if (!positionList.length) {
    return [];
  }

  var entrances = {};

  // Prepare the position map
  var posMap = {};
  var parsedList = positionList.slice().map(function (entity) {
    var clone = (0, _extends3['default'])({}, entity, {
      fields: entity.pos.split('-')
    });
    delete clone.children;
    return clone;
  });

  parsedList.forEach(function (entity) {
    posMap[entity.pos] = entity;
  });

  parsedList.sort(function (a, b) {
    return a.fields.length - b.fields.length;
  });

  // Create the hierarchy
  parsedList.forEach(function (entity) {
    var parentPos = entity.fields.slice(0, -1).join('-');
    var parentEntity = posMap[parentPos];

    if (!parentEntity) {
      entrances[entity.pos] = entity;
    } else {
      parentEntity.children = parentEntity.children || [];
      parentEntity.children.push(entity);
    }

    // Some time position list provide `key`, we don't need it
    delete entity.key;
    delete entity.fields;
  });

  return Object.keys(entrances).map(function (key) {
    return entrances[key];
  });
}

// =============== Accessibility ===============
var ariaId = 0;

function resetAriaId() {
  ariaId = 0;
}

function generateAriaId(prefix) {
  ariaId += 1;
  return prefix + '_' + ariaId;
}

function isLabelInValue(props) {
  var treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      labelInValue = props.labelInValue;

  if (treeCheckable && treeCheckStrictly) {
    return true;
  }
  return labelInValue || false;
}

// =================== Tree ====================
function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
      pId = _ref.pId,
      rootPId = _ref.rootPId;

  var keyNodes = {};
  var rootNodeList = [];

  // Fill in the map
  var nodeList = treeData.map(function (node) {
    var clone = (0, _extends3['default'])({}, node);
    var key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  });

  // Connect tree
  nodeList.forEach(function (node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey];

    // Fill parent
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    }

    // Fill root tree node
    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });

  return rootNodeList;
}

/**
 * Detect if position has relation.
 * e.g. 1-2 related with 1-2-3
 * e.g. 1-3-2 related with 1
 * e.g. 1-2 not related with 1-21
 */
function isPosRelated(pos1, pos2) {
  var fields1 = pos1.split('-');
  var fields2 = pos2.split('-');

  var minLen = Math.min(fields1.length, fields2.length);
  for (var i = 0; i < minLen; i += 1) {
    if (fields1[i] !== fields2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * This function is only used on treeNode check (none treeCheckStrictly but has searchInput).
 * We convert entity to { node, pos, children } format.
 * This is legacy bug but we still need to do with it.
 * @param entity
 */
function cleanEntity(_ref2) {
  var node = _ref2.node,
      pos = _ref2.pos,
      children = _ref2.children;

  var instance = {
    node: node,
    pos: pos
  };

  if (children) {
    instance.children = children.map(cleanEntity);
  }

  return instance;
}

/**
 * Get a filtered TreeNode list by provided treeNodes.
 * [Legacy] Since `Tree` use `key` as map but `key` will changed by React,
 * we have to convert `treeNodes > data > treeNodes` to keep the key.
 * Such performance hungry!
 */
function getFilterTree(h, treeNodes, searchValue, filterFunc, valueEntities, Component) {
  if (!searchValue) {
    return null;
  }

  function mapFilteredNodeToData(node) {
    if (!node || (0, _propsUtil.isEmptyElement)(node)) return null;

    var match = false;
    if (filterFunc(searchValue, node)) {
      match = true;
    }
    var children = (0, _propsUtil.getSlots)(node)['default'];
    children = ((typeof children === 'function' ? children() : children) || []).map(mapFilteredNodeToData).filter(function (n) {
      return n;
    });
    if (children.length || match) {
      return h(
        Component,
        (0, _babelHelperVueJsxMergeProps2['default'])([node.data, { key: valueEntities[(0, _propsUtil.getPropsData)(node).value].key }]),
        [children]
      );
    }

    return null;
  }
  return treeNodes.map(mapFilteredNodeToData).filter(function (node) {
    return node;
  });
}

// =================== Value ===================
/**
 * Convert value to array format to make logic simplify.
 */
function formatInternalValue(value, props) {
  var valueList = toArray(value);

  // Parse label in value
  if (isLabelInValue(props)) {
    return valueList.map(function (val) {
      if ((typeof val === 'undefined' ? 'undefined' : (0, _typeof3['default'])(val)) !== 'object' || !val) {
        return {
          value: '',
          label: ''
        };
      }

      return val;
    });
  }

  return valueList.map(function (val) {
    return {
      value: val
    };
  });
}

function getLabel(wrappedValue, entity, treeNodeLabelProp) {
  if (wrappedValue.label) {
    return wrappedValue.label;
  }

  if (entity) {
    var props = (0, _propsUtil.getPropsData)(entity.node);
    if (Object.keys(props).length) {
      return props[treeNodeLabelProp];
    }
  }

  // Since value without entity will be in missValueList.
  // This code will never reached, but we still need this in case.
  return wrappedValue.value;
}

/**
 * Convert internal state `valueList` to user needed value list.
 * This will return an array list. You need check if is not multiple when return.
 *
 * `allCheckedNodes` is used for `treeCheckStrictly`
 */
function formatSelectorValue(valueList, props, valueEntities) {
  var treeNodeLabelProp = props.treeNodeLabelProp,
      treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      showCheckedStrategy = props.showCheckedStrategy;

  // Will hide some value if `showCheckedStrategy` is set

  if (treeCheckable && !treeCheckStrictly) {
    var values = {};
    valueList.forEach(function (wrappedValue) {
      values[wrappedValue.value] = wrappedValue;
    });
    var hierarchyList = flatToHierarchy(valueList.map(function (_ref3) {
      var value = _ref3.value;
      return valueEntities[value];
    }));

    if (showCheckedStrategy === _strategies.SHOW_PARENT) {
      // Only get the parent checked value
      return hierarchyList.map(function (_ref4) {
        var node = _ref4.node;

        var value = (0, _propsUtil.getPropsData)(node).value;
        return {
          label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
          value: value
        };
      });
    }
    if (showCheckedStrategy === _strategies.SHOW_CHILD) {
      // Only get the children checked value
      var targetValueList = [];

      // Find the leaf children
      var traverse = function traverse(_ref5) {
        var node = _ref5.node,
            children = _ref5.children;

        var value = (0, _propsUtil.getPropsData)(node).value;
        if (!children || children.length === 0) {
          targetValueList.push({
            label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
            value: value
          });
          return;
        }

        children.forEach(function (entity) {
          traverse(entity);
        });
      };

      hierarchyList.forEach(function (entity) {
        traverse(entity);
      });

      return targetValueList;
    }
  }

  return valueList.map(function (wrappedValue) {
    return {
      label: getLabel(wrappedValue, valueEntities[wrappedValue.value], treeNodeLabelProp),
      value: wrappedValue.value
    };
  });
}

/**
 * Use `rc-tree` convertDataToTree to convert treeData to TreeNodes.
 * This will change the label to title value
 */
function processProps(props) {
  var title = props.title,
      label = props.label,
      value = props.value,
      cls = props['class'],
      style = props.style,
      _props$on = props.on,
      on = _props$on === undefined ? {} : _props$on;

  var key = props.key;
  if (!key && (key === undefined || key === null)) {
    key = value;
  }
  var p = {
    props: (0, _omit2['default'])(props, ['on', 'key', 'class', 'className', 'style']),
    on: on,
    'class': cls || props.className,
    style: style,
    key: key
  };
  // Warning user not to use deprecated label prop.
  if (label && !title) {
    if (!warnDeprecatedLabel) {
      (0, _warning2['default'])(false, "'label' in treeData is deprecated. Please use 'title' instead.");
      warnDeprecatedLabel = true;
    }

    p.props.title = label;
  }

  return p;
}

function convertDataToTree(h, treeData) {
  return (0, _util.convertDataToTree)(h, treeData, { processProps: processProps });
}

/**
 * Use `rc-tree` convertTreeToEntities for entities calculation.
 * We have additional entities of `valueEntities`
 */
function initWrapper(wrapper) {
  return (0, _extends3['default'])({}, wrapper, {
    valueEntities: {}
  });
}

function processEntity(entity, wrapper) {
  var value = (0, _propsUtil.getPropsData)(entity.node).value;
  entity.value = value;

  // This should be empty, or will get error message.
  var currentEntity = wrapper.valueEntities[value];
  if (currentEntity) {
    (0, _warning2['default'])(false, 'Conflict! value of node \'' + entity.key + '\' (' + value + ') has already used by node \'' + currentEntity.key + '\'.');
  }
  wrapper.valueEntities[value] = entity;
}

function convertTreeToEntities(treeNodes) {
  return (0, _util.convertTreeToEntities)(treeNodes, {
    initWrapper: initWrapper,
    processEntity: processEntity
  });
}

/**
 * https://github.com/ant-design/ant-design/issues/13328
 * We need calculate the half check key when searchValue is set.
 */
// TODO: This logic may better move to rc-tree
function getHalfCheckedKeys(valueList, valueEntities) {
  var values = {};

  // Fill checked keys
  valueList.forEach(function (_ref6) {
    var value = _ref6.value;

    values[value] = false;
  });

  // Fill half checked keys
  valueList.forEach(function (_ref7) {
    var value = _ref7.value;

    var current = valueEntities[value];

    while (current && current.parent) {
      var parentValue = current.parent.value;
      if (parentValue in values) break;
      values[parentValue] = true;

      current = current.parent;
    }
  });

  // Get half keys
  return Object.keys(values).filter(function (value) {
    return values[value];
  }).map(function (value) {
    return valueEntities[value].key;
  });
}

var conductCheck = exports.conductCheck = _util.conductCheck;

/***/ }),

/***/ "3fa2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHOW_CHILD = exports.SHOW_PARENT = exports.SHOW_ALL = exports.TreeNode = undefined;

var _src = __webpack_require__("c7e3");

Object.defineProperty(exports, 'TreeNode', {
  enumerable: true,
  get: function get() {
    return _src.TreeNode;
  }
});
Object.defineProperty(exports, 'SHOW_ALL', {
  enumerable: true,
  get: function get() {
    return _src.SHOW_ALL;
  }
});
Object.defineProperty(exports, 'SHOW_PARENT', {
  enumerable: true,
  get: function get() {
    return _src.SHOW_PARENT;
  }
});
Object.defineProperty(exports, 'SHOW_CHILD', {
  enumerable: true,
  get: function get() {
    return _src.SHOW_CHILD;
  }
});

var _vue = __webpack_require__("8bbf");

var _vue2 = _interopRequireDefault(_vue);

var _src2 = _interopRequireDefault(_src);

var _vueRef = __webpack_require__("46cf");

var _vueRef2 = _interopRequireDefault(_vueRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_vue2['default'].use(_vueRef2['default'], { name: 'ant-ref' }); // export this package's api
// base 2.9.3
exports['default'] = _src2['default'];

/***/ }),

/***/ "423e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__("b24f");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.warnOnlyTreeNode = warnOnlyTreeNode;
exports.arrDel = arrDel;
exports.arrAdd = arrAdd;
exports.posToArr = posToArr;
exports.getPosition = getPosition;
exports.isTreeNode = isTreeNode;
exports.getNodeChildren = getNodeChildren;
exports.isCheckDisabled = isCheckDisabled;
exports.traverseTreeNodes = traverseTreeNodes;
exports.mapChildren = mapChildren;
exports.getDragNodesKeys = getDragNodesKeys;
exports.calcDropPosition = calcDropPosition;
exports.calcSelectedKeys = calcSelectedKeys;
exports.convertDataToTree = convertDataToTree;
exports.convertTreeToEntities = convertTreeToEntities;
exports.parseCheckedKeys = parseCheckedKeys;
exports.conductCheck = conductCheck;
exports.conductExpandParent = conductExpandParent;
exports.getDataAndAria = getDataAndAria;

var _warning = __webpack_require__("d96e");

var _warning2 = _interopRequireDefault(_warning);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

var _TreeNode = __webpack_require__("8a69");

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint no-loop-func: 0*/
var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

var onlyTreeNodeWarned = false;

function warnOnlyTreeNode() {
  if (onlyTreeNodeWarned) return;

  onlyTreeNodeWarned = true;
  (0, _warning2['default'])(false, 'Tree only accept TreeNode as children.');
}

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return level + '-' + index;
}

function isTreeNode(node) {
  return (0, _propsUtil.getSlotOptions)(node).isTreeNode;
}

function getNodeChildren() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return children.filter(isTreeNode);
}

function isCheckDisabled(node) {
  var _ref = (0, _propsUtil.getOptionProps)(node) || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox,
      checkable = _ref.checkable;

  return !!(disabled || disableCheckbox) || checkable === false;
}

function traverseTreeNodes(treeNodes, callback) {
  function processNode(node, index, parent) {
    var children = node ? node.componentOptions.children : treeNodes;
    var pos = node ? getPosition(parent.pos, index) : 0;

    // Filter children
    var childList = getNodeChildren(children);

    // Process node if is not root
    if (node) {
      var key = node.key;
      if (!key && (key === undefined || key === null)) {
        key = pos;
      }
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null
      };
      callback(data);
    }

    // Process children node
    childList.forEach(function (subNode, subIndex) {
      processNode(subNode, subIndex, { node: node, pos: pos });
    });
  }

  processNode(null);
}

/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */
function mapChildren() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var func = arguments[1];

  var list = children.map(func);
  if (list.length === 1) {
    return list[0];
  }
  return list;
}

function getDragNodesKeys(treeNodes, node) {
  var _getOptionProps = (0, _propsUtil.getOptionProps)(node),
      eventKey = _getOptionProps.eventKey,
      pos = _getOptionProps.pos;

  var dragNodesKeys = [];

  traverseTreeNodes(treeNodes, function (_ref2) {
    var key = _ref2.key;

    dragNodesKeys.push(key);
  });
  dragNodesKeys.push(eventKey || pos);
  return dragNodesKeys;
}

function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$$refs$selec = treeNode.$refs.selectHandle.getBoundingClientRect(),
      top = _treeNode$$refs$selec.top,
      bottom = _treeNode$$refs$selec.bottom,
      height = _treeNode$$refs$selec.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  }
  if (clientY >= bottom - des) {
    return 1;
  }
  return 0;
}

/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) {
    return undefined;
  }

  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}

/**
 * Since React internal will convert key to string,
 * we need do this to avoid `checkStrictly` use number match
 */
// function keyListToString (keyList) {
//   if (!keyList) return keyList
//   return keyList.map(key => String(key))
// }

var internalProcessProps = function internalProcessProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    props: (0, _omit2['default'])(props, ['on', 'key', 'class', 'className', 'style']),
    on: props.on || {},
    'class': props['class'] || props.className,
    style: props.style,
    key: props.key
  };
};
function convertDataToTree(h, treeData, processor) {
  if (!treeData) return [];

  var _ref3 = processor || {},
      _ref3$processProps = _ref3.processProps,
      processProps = _ref3$processProps === undefined ? internalProcessProps : _ref3$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref4) {
    var children = _ref4.children,
        props = (0, _objectWithoutProperties3['default'])(_ref4, ['children']);

    var childrenNodes = convertDataToTree(h, children, processor);
    return h(
      _TreeNode2['default'],
      processProps(props),
      [childrenNodes]
    );
  });
}

// TODO: ========================= NEW LOGIC =========================
/**
 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
 * @param treeNodes
 * @param processTreeEntity  User can customize the entity
 */
function convertTreeToEntities(treeNodes) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref5.initWrapper,
      processEntity = _ref5.processEntity,
      onProcessFinished = _ref5.onProcessFinished;

  var posEntities = new Map();
  var keyEntities = new Map();
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseTreeNodes(treeNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos;

    var entity = { node: node, index: index, key: key, pos: pos };

    posEntities.set(pos, entity);
    keyEntities.set(key, entity);

    // Fill children
    entity.parent = posEntities.get(parentPos);
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}

/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }

  // Convert keys to object format
  var keyProps = void 0;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if ((typeof keys === 'undefined' ? 'undefined' : (0, _typeof3['default'])(keys)) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    (0, _warning2['default'])(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  // keyProps.checkedKeys = keyListToString(keyProps.checkedKeys)
  // keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys)

  return keyProps;
}

/**
 * Conduct check state by the keyList. It will conduct up & from the provided key.
 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
 * @param keyList       list of keys
 * @param isCheck       is check the node or not
 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
 */
function conductCheck(keyList, isCheck, keyEntities) {
  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var checkedKeys = new Map();
  var halfCheckedKeys = new Map(); // Record the key has some child checked (include child half checked)

  (checkStatus.checkedKeys || []).forEach(function (key) {
    checkedKeys.set(key, true);
  });

  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
    halfCheckedKeys.set(key, true);
  });

  // Conduct up
  function conductUp(key) {
    if (checkedKeys.get(key) === isCheck) return;

    var entity = keyEntities.get(key);
    if (!entity) return;

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    // Check child node checked status
    var everyChildChecked = true;
    var someChildChecked = false; // Child checked or half checked

    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (_ref6) {
      var childKey = _ref6.key;

      var childChecked = checkedKeys.get(childKey);
      var childHalfChecked = halfCheckedKeys.get(childKey);

      if (childChecked || childHalfChecked) someChildChecked = true;
      if (!childChecked) everyChildChecked = false;
    });

    // Update checked status
    if (isCheck) {
      checkedKeys.set(key, everyChildChecked);
    } else {
      checkedKeys.set(key, false);
    }
    halfCheckedKeys.set(key, someChildChecked);

    if (parent) {
      conductUp(parent.key);
    }
  }

  // Conduct down
  function conductDown(key) {
    if (checkedKeys.get(key) === isCheck) return;

    var entity = keyEntities.get(key);
    if (!entity) return;

    var children = entity.children,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    checkedKeys.set(key, isCheck);

    (children || []).forEach(function (child) {
      conductDown(child.key);
    });
  }

  function conduct(key) {
    var entity = keyEntities.get(key);

    if (!entity) {
      (0, _warning2['default'])(false, '\'' + key + '\' does not exist in the tree.');
      return;
    }
    var children = entity.children,
        parent = entity.parent,
        node = entity.node;

    checkedKeys.set(key, isCheck);

    if (isCheckDisabled(node)) return;

    // Conduct down
    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (child) {
      conductDown(child.key);
    });

    // Conduct up
    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conduct(key);
  });

  var checkedKeyList = [];
  var halfCheckedKeyList = [];

  // Fill checked list
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = checkedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref7 = _step.value;

      var _ref8 = (0, _slicedToArray3['default'])(_ref7, 2);

      var key = _ref8[0];
      var value = _ref8[1];

      if (value) {
        checkedKeyList.push(key);
      }
    }

    // Fill half checked list
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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = halfCheckedKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _ref9 = _step2.value;

      var _ref10 = (0, _slicedToArray3['default'])(_ref9, 2);

      var _key = _ref10[0];
      var _value = _ref10[1];

      if (!checkedKeys.get(_key) && _value) {
        halfCheckedKeyList.push(_key);
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

  return {
    checkedKeys: checkedKeyList,
    halfCheckedKeys: halfCheckedKeyList
  };
}

/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Map();

  function conductUp(key) {
    if (expandedKeys.get(key)) return;

    var entity = keyEntities.get(key);
    if (!entity) return;

    expandedKeys.set(key, true);

    var parent = entity.parent,
        node = entity.node;

    var props = (0, _propsUtil.getOptionProps)(node);
    if (props && props.disabled) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });

  return [].concat((0, _toConsumableArray3['default'])(expandedKeys.keys()));
}

/**
 * Returns only the data- and aria- key/value pairs
 * @param {object} props
 */
function getDataAndAria(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "428c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelectProps = exports.TreeData = undefined;

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("8e8e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _interface = __webpack_require__("ca20");

Object.defineProperty(exports, 'TreeData', {
  enumerable: true,
  get: function get() {
    return _interface.TreeData;
  }
});
Object.defineProperty(exports, 'TreeSelectProps', {
  enumerable: true,
  get: function get() {
    return _interface.TreeSelectProps;
  }
});

var _vcTreeSelect = __webpack_require__("3fa2");

var _vcTreeSelect2 = _interopRequireDefault(_vcTreeSelect);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__("a7e2");

var _warning2 = _interopRequireDefault(_warning);

var _propsUtil = __webpack_require__("73c8");

var _configConsumerProps = __webpack_require__("bad7");

var _base = __webpack_require__("baff");

var _base2 = _interopRequireDefault(_base);

var _icon = __webpack_require__("50f6");

var _icon2 = _interopRequireDefault(_icon);

var _omit = __webpack_require__("0464");

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TreeSelect = {
  TreeNode: (0, _extends3['default'])({}, _vcTreeSelect.TreeNode, { name: 'ATreeSelectNode' }),
  SHOW_ALL: _vcTreeSelect.SHOW_ALL,
  SHOW_PARENT: _vcTreeSelect.SHOW_PARENT,
  SHOW_CHILD: _vcTreeSelect.SHOW_CHILD,
  name: 'ATreeSelect',
  props: (0, _propsUtil.initDefaultProps)((0, _interface.TreeSelectProps)(), {
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false
  }),
  model: {
    prop: 'value',
    event: 'change'
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  created: function created() {
    (0, _warning2['default'])(this.multiple !== false || !this.treeCheckable, 'TreeSelect', '`multiple` will alway be `true` when `treeCheckable` is true');
  },

  methods: {
    focus: function focus() {
      this.$refs.vcTreeSelect.focus();
    },
    blur: function blur() {
      this.$refs.vcTreeSelect.blur();
    },
    renderSwitcherIcon: function renderSwitcherIcon(prefixCls, _ref) {
      var isLeaf = _ref.isLeaf,
          loading = _ref.loading;
      var h = this.$createElement;

      if (loading) {
        return h(_icon2['default'], {
          attrs: { type: 'loading' },
          'class': prefixCls + '-switcher-loading-icon' });
      }
      if (isLeaf) {
        return null;
      }
      return h(_icon2['default'], {
        attrs: { type: 'caret-down' },
        'class': prefixCls + '-switcher-icon' });
    },
    onChange: function onChange() {
      this.$emit.apply(this, ['change'].concat(Array.prototype.slice.call(arguments)));
    },
    updateTreeData: function updateTreeData(treeData) {
      var _this = this;

      var $scopedSlots = this.$scopedSlots;

      var defaultFields = {
        children: 'children',
        title: 'title',
        key: 'key',
        label: 'label',
        value: 'value'
      };
      var replaceFields = (0, _extends3['default'])({}, defaultFields, this.$props.replaceFields);
      return treeData.map(function (item) {
        var _item$scopedSlots = item.scopedSlots,
            scopedSlots = _item$scopedSlots === undefined ? {} : _item$scopedSlots;

        var label = item[replaceFields.label];
        var title = item[replaceFields.title];
        var value = item[replaceFields.value];
        var key = item[replaceFields.key];
        var children = item[replaceFields.children];
        var newLabel = typeof label === 'function' ? label(_this.$createElement) : label;
        var newTitle = typeof title === 'function' ? title(_this.$createElement) : title;
        if (!newLabel && scopedSlots.label && $scopedSlots[scopedSlots.label]) {
          newLabel = $scopedSlots[scopedSlots.label](item);
        }
        if (!newTitle && scopedSlots.title && $scopedSlots[scopedSlots.title]) {
          newTitle = $scopedSlots[scopedSlots.title](item);
        }
        var treeNodeProps = (0, _extends3['default'])({}, item, {
          title: newTitle || newLabel,
          value: value,
          dataRef: item,
          key: key
        });
        if (children) {
          return (0, _extends3['default'])({}, treeNodeProps, { children: _this.updateTreeData(children) });
        }
        return treeNodeProps;
      });
    }
  },

  render: function render(h) {
    var _cls,
        _this2 = this;

    var props = (0, _propsUtil.getOptionProps)(this);
    var customizePrefixCls = props.prefixCls,
        size = props.size,
        dropdownStyle = props.dropdownStyle,
        dropdownClassName = props.dropdownClassName,
        getPopupContainer = props.getPopupContainer,
        restProps = (0, _objectWithoutProperties3['default'])(props, ['prefixCls', 'size', 'dropdownStyle', 'dropdownClassName', 'getPopupContainer']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('select', customizePrefixCls);

    var renderEmpty = this.configProvider.renderEmpty;
    var notFoundContent = (0, _propsUtil.getComponentFromProp)(this, 'notFoundContent');
    var removeIcon = (0, _propsUtil.getComponentFromProp)(this, 'removeIcon');
    var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');
    var getContextPopupContainer = this.configProvider.getPopupContainer;

    var rest = (0, _omit2['default'])(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon', 'suffixIcon']);
    var suffixIcon = (0, _propsUtil.getComponentFromProp)(this, 'suffixIcon');
    suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
    var treeData = props.treeData;
    if (treeData) {
      treeData = this.updateTreeData(treeData);
    }
    var cls = (_cls = {}, (0, _defineProperty3['default'])(_cls, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_cls, prefixCls + '-sm', size === 'small'), _cls);

    // showSearch: single - false, multiple - true
    var showSearch = restProps.showSearch;

    if (!('showSearch' in restProps)) {
      showSearch = !!(restProps.multiple || restProps.treeCheckable);
    }

    var checkable = (0, _propsUtil.getComponentFromProp)(this, 'treeCheckable');
    if (checkable) {
      checkable = h('span', { 'class': prefixCls + '-tree-checkbox-inner' });
    }

    var inputIcon = suffixIcon || h(_icon2['default'], {
      attrs: { type: 'down' },
      'class': prefixCls + '-arrow-icon' });

    var finalRemoveIcon = removeIcon || h(_icon2['default'], {
      attrs: { type: 'close' },
      'class': prefixCls + '-remove-icon' });

    var finalClearIcon = clearIcon || h(_icon2['default'], {
      attrs: { type: 'close-circle', theme: 'filled' },
      'class': prefixCls + '-clear-icon' });
    var VcTreeSelectProps = {
      props: (0, _extends3['default'])((0, _extends3['default'])({
        switcherIcon: function switcherIcon(nodeProps) {
          return _this2.renderSwitcherIcon(prefixCls, nodeProps);
        },
        inputIcon: inputIcon,
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon
      }, rest, {
        showSearch: showSearch,
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        dropdownClassName: (0, _classnames2['default'])(dropdownClassName, prefixCls + '-tree-dropdown'),
        prefixCls: prefixCls,
        dropdownStyle: (0, _extends3['default'])({ maxHeight: '100vh', overflow: 'auto' }, dropdownStyle),
        treeCheckable: checkable,
        notFoundContent: notFoundContent || renderEmpty(h, 'Select'),
        __propsSymbol__: Symbol()
      }), treeData ? { treeData: treeData } : {}),
      'class': cls,
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), { change: this.onChange }),
      ref: 'vcTreeSelect',
      scopedSlots: this.$scopedSlots
    };
    return h(
      _vcTreeSelect2['default'],
      VcTreeSelectProps,
      [(0, _propsUtil.filterEmpty)(this.$slots['default'])]
    );
  }
};

/* istanbul ignore next */
TreeSelect.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(TreeSelect.name, TreeSelect);
  Vue.component(TreeSelect.TreeNode.name, TreeSelect.TreeNode);
};

exports['default'] = TreeSelect;

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

/***/ "50d4":
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

var _vcTrigger = __webpack_require__("2f52");

var _vcTrigger2 = _interopRequireDefault(_vcTrigger);

var _util = __webpack_require__("2fd9");

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  }
};

var SelectTrigger = {
  name: 'SelectTrigger',
  props: {
    // Pass by outside user props
    disabled: _vueTypes2['default'].bool,
    showSearch: _vueTypes2['default'].bool,
    prefixCls: _vueTypes2['default'].string,
    dropdownPopupAlign: _vueTypes2['default'].object,
    dropdownClassName: _vueTypes2['default'].string,
    dropdownStyle: _vueTypes2['default'].object,
    transitionName: _vueTypes2['default'].string,
    animation: _vueTypes2['default'].string,
    getPopupContainer: _vueTypes2['default'].func,

    dropdownMatchSelectWidth: _vueTypes2['default'].bool,

    // Pass by Select
    isMultiple: _vueTypes2['default'].bool,
    dropdownPrefixCls: _vueTypes2['default'].string,
    dropdownVisibleChange: _vueTypes2['default'].func,
    popupElement: _vueTypes2['default'].node,
    open: _vueTypes2['default'].bool
  },
  created: function created() {
    this.triggerRef = (0, _util.createRef)();
  },

  methods: {
    getDropdownTransitionName: function getDropdownTransitionName() {
      var _$props = this.$props,
          transitionName = _$props.transitionName,
          animation = _$props.animation,
          dropdownPrefixCls = _$props.dropdownPrefixCls;

      if (!transitionName && animation) {
        return dropdownPrefixCls + '-' + animation;
      }
      return transitionName;
    },
    forcePopupAlign: function forcePopupAlign() {
      var $trigger = this.triggerRef.current;
      if ($trigger) {
        $trigger.forcePopupAlign();
      }
    }
  },

  render: function render() {
    var _classNames;

    var h = arguments[0];
    var _$props2 = this.$props,
        disabled = _$props2.disabled,
        isMultiple = _$props2.isMultiple,
        dropdownPopupAlign = _$props2.dropdownPopupAlign,
        dropdownMatchSelectWidth = _$props2.dropdownMatchSelectWidth,
        dropdownClassName = _$props2.dropdownClassName,
        dropdownStyle = _$props2.dropdownStyle,
        dropdownVisibleChange = _$props2.dropdownVisibleChange,
        getPopupContainer = _$props2.getPopupContainer,
        dropdownPrefixCls = _$props2.dropdownPrefixCls,
        popupElement = _$props2.popupElement,
        open = _$props2.open;

    // TODO: [Legacy] Use new action when trigger fixed: https://github.com/react-component/trigger/pull/86

    // When false do nothing with the width
    // ref: https://github.com/ant-design/ant-design/issues/10927

    var stretch = void 0;
    if (dropdownMatchSelectWidth !== false) {
      stretch = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    }
    return h(
      _vcTrigger2['default'],
      (0, _babelHelperVueJsxMergeProps2['default'])([{
        directives: [{
          name: 'ant-ref',
          value: this.triggerRef
        }]
      }, {
        attrs: {
          action: disabled ? [] : ['click'],
          popupPlacement: 'bottomLeft',
          builtinPlacements: BUILT_IN_PLACEMENTS,
          popupAlign: dropdownPopupAlign,
          prefixCls: dropdownPrefixCls,
          popupTransitionName: this.getDropdownTransitionName(),

          popup: popupElement,
          popupVisible: open,
          getPopupContainer: getPopupContainer,
          stretch: stretch,
          popupClassName: (0, _classnames2['default'])(dropdownClassName, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, dropdownPrefixCls + '--multiple', isMultiple), (0, _defineProperty3['default'])(_classNames, dropdownPrefixCls + '--single', !isMultiple), _classNames)),
          popupStyle: dropdownStyle
        },
        on: {
          'popupVisibleChange': dropdownVisibleChange
        }
      }]),
      [this.$slots['default']]
    );
  }
};

exports['default'] = SelectTrigger;

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

/***/ "5fca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BasePopup = __webpack_require__("269c");

var _BasePopup2 = _interopRequireDefault(_BasePopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _BasePopup2['default'];

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

/***/ "80e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _shallowequal = __webpack_require__("1b2b");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _raf = __webpack_require__("c449");

var _raf2 = _interopRequireDefault(_raf);

var _domScrollIntoView = __webpack_require__("ec44");

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _warning = __webpack_require__("d96e");

var _warning2 = _interopRequireDefault(_warning);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _KeyCode = __webpack_require__("af09");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _SelectTrigger = __webpack_require__("50d4");

var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);

var _SingleSelector = __webpack_require__("faee");

var _SingleSelector2 = _interopRequireDefault(_SingleSelector);

var _MultipleSelector = __webpack_require__("ee8f");

var _MultipleSelector2 = _interopRequireDefault(_MultipleSelector);

var _SinglePopup = __webpack_require__("96ba");

var _SinglePopup2 = _interopRequireDefault(_SinglePopup);

var _MultiplePopup = __webpack_require__("5fca");

var _MultiplePopup2 = _interopRequireDefault(_MultiplePopup);

var _strategies = __webpack_require__("cbda");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _util = __webpack_require__("2fd9");

var _SelectNode = __webpack_require__("2050");

var _SelectNode2 = _interopRequireDefault(_SelectNode);

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * ARIA: https://www.w3.org/TR/wai-aria/#combobox
 * Sample 1: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/combobox/aria1.1pattern/listbox-combo.html
 * Sample 2: https://www.w3.org/blog/wai-components-gallery/widget/combobox-with-aria-autocompleteinline/
 *
 * Tab logic:
 * Popup is close
 * 1. Focus input (mark component as focused)
 * 2. Press enter to show the popup
 * 3. If popup has input, focus it
 *
 * Popup is open
 * 1. press tab to close the popup
 * 2. Focus back to the selection input box
 * 3. Let the native tab going on
 *
 * TreeSelect use 2 design type.
 * In single mode, we should focus on the `span`
 * In multiple mode, we should focus on the `input`
 */

function getWatch() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var watch = {};
  keys.forEach(function (k) {
    watch[k] = function () {
      this.needSyncKeys[k] = true;
    };
  });
  return watch;
}
var Select = {
  name: 'Select',
  mixins: [_BaseMixin2['default']],
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes2['default'].string,
    prefixAria: _vueTypes2['default'].string,
    multiple: _vueTypes2['default'].bool,
    showArrow: _vueTypes2['default'].bool,
    open: _vueTypes2['default'].bool,
    value: _vueTypes2['default'].any,

    autoFocus: _vueTypes2['default'].bool,

    defaultOpen: _vueTypes2['default'].bool,
    defaultValue: _vueTypes2['default'].any,

    showSearch: _vueTypes2['default'].bool,
    placeholder: _vueTypes2['default'].any,
    inputValue: _vueTypes2['default'].string, // [Legacy] Deprecated. Use `searchValue` instead.
    searchValue: _vueTypes2['default'].string,
    autoClearSearchValue: _vueTypes2['default'].bool,
    searchPlaceholder: _vueTypes2['default'].any, // [Legacy] Confuse with placeholder
    disabled: _vueTypes2['default'].bool,
    children: _vueTypes2['default'].any,
    labelInValue: _vueTypes2['default'].bool,
    maxTagCount: _vueTypes2['default'].number,
    maxTagPlaceholder: _vueTypes2['default'].oneOfType([_vueTypes2['default'].any, _vueTypes2['default'].func]),
    maxTagTextLength: _vueTypes2['default'].number,
    showCheckedStrategy: _vueTypes2['default'].oneOf([_strategies.SHOW_ALL, _strategies.SHOW_PARENT, _strategies.SHOW_CHILD]),
    dropdownClassName: _vueTypes2['default'].string,
    dropdownStyle: _vueTypes2['default'].object,
    dropdownVisibleChange: _vueTypes2['default'].func,
    dropdownMatchSelectWidth: _vueTypes2['default'].bool,
    treeData: _vueTypes2['default'].array,
    treeDataSimpleMode: _vueTypes2['default'].oneOfType([_vueTypes2['default'].bool, _vueTypes2['default'].object]),
    treeNodeFilterProp: _vueTypes2['default'].string,
    treeNodeLabelProp: _vueTypes2['default'].string,
    treeCheckable: _vueTypes2['default'].oneOfType([_vueTypes2['default'].any, _vueTypes2['default'].object, _vueTypes2['default'].bool]),
    // treeCheckable: PropTypes.any,
    treeCheckStrictly: _vueTypes2['default'].bool,
    treeIcon: _vueTypes2['default'].bool,
    treeLine: _vueTypes2['default'].bool,
    treeDefaultExpandAll: _vueTypes2['default'].bool,
    treeDefaultExpandedKeys: _vueTypes2['default'].array,
    treeExpandedKeys: _vueTypes2['default'].array,
    loadData: _vueTypes2['default'].func,
    filterTreeNode: _vueTypes2['default'].oneOfType([_vueTypes2['default'].func, _vueTypes2['default'].bool]),

    notFoundContent: _vueTypes2['default'].any,
    getPopupContainer: _vueTypes2['default'].func,

    // onSearch: PropTypes.func,
    // onSelect: PropTypes.func,
    // onDeselect: PropTypes.func,
    // onChange: PropTypes.func,
    // onDropdownVisibleChange: PropTypes.func,

    // onTreeExpand: PropTypes.func,
    allowClear: _vueTypes2['default'].bool,
    transitionName: _vueTypes2['default'].string,
    animation: _vueTypes2['default'].string,
    choiceTransitionName: _vueTypes2['default'].string,
    inputIcon: _vueTypes2['default'].any,
    clearIcon: _vueTypes2['default'].any,
    removeIcon: _vueTypes2['default'].any,
    switcherIcon: _vueTypes2['default'].any,
    __propsSymbol__: _vueTypes2['default'].any
  }, {
    prefixCls: 'rc-tree-select',
    prefixAria: 'rc-tree-select',
    showSearch: true,
    autoClearSearchValue: true,
    showCheckedStrategy: _strategies.SHOW_CHILD,

    // dropdownMatchSelectWidth change the origin design, set to false now
    // ref: https://github.com/react-component/select/blob/4cad95e098a341a09de239ad6981067188842020/src/Select.jsx#L344
    // ref: https://github.com/react-component/select/pull/71
    treeNodeFilterProp: 'value',
    treeNodeLabelProp: 'title',
    treeIcon: false,
    notFoundContent: 'Not Found',
    dropdownStyle: {},
    dropdownVisibleChange: function dropdownVisibleChange() {
      return true;
    }
  }),

  data: function data() {
    (0, _warning2['default'])(this.$props.__propsSymbol__, 'must pass __propsSymbol__');
    var _$props = this.$props,
        prefixAria = _$props.prefixAria,
        defaultOpen = _$props.defaultOpen,
        open = _$props.open;

    this.needSyncKeys = {};
    this.selectorRef = (0, _util.createRef)();
    this.selectTriggerRef = (0, _util.createRef)();

    // ARIA need `aria-controls` props mapping
    // Since this need user input. Let's generate ourselves
    this.ariaId = (0, _util.generateAriaId)(prefixAria + '-list');

    var state = {
      _open: open || defaultOpen,
      _valueList: [],
      _searchHalfCheckedKeys: [],
      _missValueList: [], // Contains the value not in the tree
      _selectorValueList: [], // Used for multiple selector
      _valueEntities: {},
      _posEntities: new Map(),
      _keyEntities: new Map(),
      _searchValue: '',
      _prevProps: {},
      _init: true,
      _focused: undefined,
      _treeNodes: undefined,
      _filteredTreeNodes: undefined
    };
    var newState = this.getDerivedState(this.$props, state);
    return (0, _extends3['default'])({}, state, newState);
  },
  provide: function provide() {
    return {
      vcTreeSelect: {
        onSelectorFocus: this.onSelectorFocus,
        onSelectorBlur: this.onSelectorBlur,
        onSelectorKeyDown: this.onComponentKeyDown,
        onSelectorClear: this.onSelectorClear,
        onMultipleSelectorRemove: this.onMultipleSelectorRemove,

        onTreeNodeSelect: this.onTreeNodeSelect,
        onTreeNodeCheck: this.onTreeNodeCheck,
        onPopupKeyDown: this.onComponentKeyDown,

        onSearchInputChange: this.onSearchInputChange,
        onSearchInputKeyDown: this.onSearchInputKeyDown
      }
    };
  },

  watch: (0, _extends3['default'])({}, getWatch(['treeData', 'defaultValue', 'value']), {
    __propsSymbol__: function __propsSymbol__() {
      var state = this.getDerivedState(this.$props, this.$data);
      this.setState(state);
      this.needSyncKeys = {};
    },
    '$data._valueList': function $data_valueList() {
      var _this = this;

      this.$nextTick(function () {
        _this.forcePopupAlign();
      });
    },
    '$data._open': function $data_open(open) {
      var _this2 = this;

      setTimeout(function () {
        var prefixCls = _this2.$props.prefixCls;
        var _$data = _this2.$data,
            selectorValueList = _$data._selectorValueList,
            valueEntities = _$data._valueEntities;

        var isMultiple = _this2.isMultiple();

        // Scroll to value position, only need sync on single mode
        if (!isMultiple && selectorValueList.length && open && _this2.popup) {
          var value = selectorValueList[0].value;

          var _popup$getTree = _this2.popup.getTree(),
              domTreeNodes = _popup$getTree.domTreeNodes;

          var _ref = valueEntities[value] || {},
              key = _ref.key;

          var treeNode = domTreeNodes[key];

          if (treeNode) {
            var domNode = treeNode.$el;
            (0, _raf2['default'])(function () {
              var popupNode = _this2.popup.$el;
              var triggerContainer = (0, _util.findPopupContainer)(popupNode, prefixCls + '-dropdown');
              var searchNode = _this2.popup.searchRef.current;

              if (domNode && triggerContainer && searchNode) {
                (0, _domScrollIntoView2['default'])(domNode, triggerContainer, {
                  onlyScrollIfNeeded: true,
                  offsetTop: searchNode.offsetHeight
                });
              }
            });
          }
        }
      });
    }
  }),
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      var _$props2 = _this3.$props,
          autoFocus = _$props2.autoFocus,
          disabled = _$props2.disabled;

      if (autoFocus && !disabled) {
        _this3.focus();
      }
    });
  },


  methods: {
    getDerivedState: function getDerivedState(nextProps, prevState) {
      var h = this.$createElement;
      var _prevState$_prevProps = prevState._prevProps,
          prevProps = _prevState$_prevProps === undefined ? {} : _prevState$_prevProps;
      var treeCheckable = nextProps.treeCheckable,
          treeCheckStrictly = nextProps.treeCheckStrictly,
          filterTreeNode = nextProps.filterTreeNode,
          treeNodeFilterProp = nextProps.treeNodeFilterProp,
          treeDataSimpleMode = nextProps.treeDataSimpleMode;

      var newState = {
        _prevProps: (0, _extends3['default'])({}, nextProps),
        _init: false
      };
      var self = this;
      // Process the state when props updated
      function processState(propName, updater) {
        if (prevProps[propName] !== nextProps[propName] || self.needSyncKeys[propName]) {
          updater(nextProps[propName], prevProps[propName]);
          return true;
        }
        return false;
      }

      var valueRefresh = false;

      // Open
      processState('open', function (propValue) {
        newState._open = propValue;
      });

      // Tree Nodes
      var treeNodes = void 0;
      var treeDataChanged = false;
      var treeDataModeChanged = false;
      processState('treeData', function (propValue) {
        treeNodes = (0, _util.convertDataToTree)(h, propValue);
        treeDataChanged = true;
      });

      processState('treeDataSimpleMode', function (propValue, prevValue) {
        if (!propValue) return;

        var prev = !prevValue || prevValue === true ? {} : prevValue;

        // Shallow equal to avoid dynamic prop object
        if (!(0, _shallowequal2['default'])(propValue, prev)) {
          treeDataModeChanged = true;
        }
      });

      // Parse by `treeDataSimpleMode`
      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
        var simpleMapper = (0, _extends3['default'])({
          id: 'id',
          pId: 'pId',
          rootPId: null
        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});
        treeNodes = (0, _util.convertDataToTree)(h, (0, _util.parseSimpleTreeData)(nextProps.treeData, simpleMapper));
      }

      // If `treeData` not provide, use children TreeNodes
      if (!nextProps.treeData) {
        // processState('children', (propValue) => {
        //   treeNodes = Array.isArray(propValue) ? propValue : [propValue]
        // })
        treeNodes = (0, _propsUtil.filterEmpty)(this.$slots['default']);
      }

      // Convert `treeData` to entities
      if (treeNodes) {
        var entitiesMap = (0, _util.convertTreeToEntities)(treeNodes);
        newState._treeNodes = treeNodes;
        newState._posEntities = entitiesMap.posEntities;
        newState._valueEntities = entitiesMap.valueEntities;
        newState._keyEntities = entitiesMap.keyEntities;

        valueRefresh = true;
      }

      // Value List
      if (prevState._init) {
        processState('defaultValue', function (propValue) {
          newState._valueList = (0, _util.formatInternalValue)(propValue, nextProps);
          valueRefresh = true;
        });
      }

      processState('value', function (propValue) {
        newState._valueList = (0, _util.formatInternalValue)(propValue, nextProps);
        valueRefresh = true;
      });

      // Selector Value List
      if (valueRefresh) {
        // Find out that value not exist in the tree
        var missValueList = [];
        var filteredValueList = [];
        var keyList = [];

        // Get latest value list
        var latestValueList = newState._valueList;
        if (!latestValueList) {
          // Also need add prev missValueList to avoid new treeNodes contains the value
          latestValueList = [].concat((0, _toConsumableArray3['default'])(prevState._valueList), (0, _toConsumableArray3['default'])(prevState._missValueList));
        }

        // Get key by value
        var valueLabels = {};
        latestValueList.forEach(function (wrapperValue) {
          var value = wrapperValue.value,
              label = wrapperValue.label;

          var entity = (newState._valueEntities || prevState._valueEntities)[value];
          valueLabels[value] = label;

          if (entity) {
            keyList.push(entity.key);
            filteredValueList.push(wrapperValue);
            return;
          }

          // If not match, it may caused by ajax load. We need keep this
          missValueList.push(wrapperValue);
        });

        // We need calculate the value when tree is checked tree
        if (treeCheckable && !treeCheckStrictly) {
          // Calculate the keys need to be checked
          var _conductCheck = (0, _util.conductCheck)(keyList, true, newState._keyEntities || prevState._keyEntities),
              checkedKeys = _conductCheck.checkedKeys;

          // Format value list again for internal usage


          newState._valueList = checkedKeys.map(function (key) {
            var val = (newState._keyEntities || prevState._keyEntities).get(key).value;

            var wrappedValue = {
              value: val
            };

            if (valueLabels[val] !== undefined) {
              wrappedValue.label = valueLabels[val];
            }

            return wrappedValue;
          });
        } else {
          newState._valueList = filteredValueList;
        }

        // Fill the missValueList, we still need display in the selector
        newState._missValueList = missValueList;

        // Calculate the value list for `Selector` usage
        newState._selectorValueList = (0, _util.formatSelectorValue)(newState._valueList, nextProps, newState._valueEntities || prevState._valueEntities);
      }

      // [Legacy] To align with `Select` component,
      // We use `searchValue` instead of `inputValue` but still keep the api
      // `inputValue` support `null` to work as `autoClearSearchValue`
      processState('inputValue', function (propValue) {
        if (propValue !== null) {
          newState._searchValue = propValue;
        }
      });

      // Search value
      processState('searchValue', function (propValue) {
        newState._searchValue = propValue;
      });

      // Do the search logic
      if (newState._searchValue !== undefined || prevState._searchValue && treeNodes) {
        var searchValue = newState._searchValue !== undefined ? newState._searchValue : prevState._searchValue;
        var upperSearchValue = String(searchValue).toUpperCase();

        var filterTreeNodeFn = filterTreeNode;
        if (filterTreeNode === false) {
          // Don't filter if is false
          filterTreeNodeFn = function filterTreeNodeFn() {
            return true;
          };
        } else if (typeof filterTreeNodeFn !== 'function') {
          // When is not function (true or undefined), use inner filter
          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
            var nodeValue = String((0, _propsUtil.getPropsData)(node)[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        newState._filteredTreeNodes = (0, _util.getFilterTree)(this.$createElement, newState._treeNodes || prevState._treeNodes, searchValue, filterTreeNodeFn, newState._valueEntities || prevState._valueEntities, _SelectNode2['default']);
      }

      // We should re-calculate the halfCheckedKeys when in search mode
      if (valueRefresh && treeCheckable && !treeCheckStrictly && (newState._searchValue || prevState._searchValue)) {
        newState._searchHalfCheckedKeys = (0, _util.getHalfCheckedKeys)(newState._valueList, newState._valueEntities || prevState._valueEntities);
      }

      // Checked Strategy
      processState('showCheckedStrategy', function () {
        newState._selectorValueList = newState._selectorValueList || (0, _util.formatSelectorValue)(newState._valueList || prevState._valueList, nextProps, newState._valueEntities || prevState._valueEntities);
      });

      return newState;
    },

    // ==================== Selector ====================
    onSelectorFocus: function onSelectorFocus() {
      this.setState({ _focused: true });
    },
    onSelectorBlur: function onSelectorBlur() {
      this.setState({ _focused: false });

      // TODO: Close when Popup is also not focused
      // this.setState({ open: false });
    },


    // Handle key board event in both Selector and Popup
    onComponentKeyDown: function onComponentKeyDown(event) {
      var open = this.$data._open;
      var keyCode = event.keyCode;


      if (!open) {
        if ([_KeyCode2['default'].ENTER, _KeyCode2['default'].DOWN].indexOf(keyCode) !== -1) {
          this.setOpenState(true);
        }
      } else if (_KeyCode2['default'].ESC === keyCode) {
        this.setOpenState(false);
      } else if ([_KeyCode2['default'].UP, _KeyCode2['default'].DOWN, _KeyCode2['default'].LEFT, _KeyCode2['default'].RIGHT].indexOf(keyCode) !== -1) {
        // TODO: Handle `open` state
        event.stopPropagation();
      }
    },
    onDeselect: function onDeselect(wrappedValue, node, nodeEventInfo) {
      this.__emit('deselect', wrappedValue, node, nodeEventInfo);
    },
    onSelectorClear: function onSelectorClear(event) {
      var disabled = this.$props.disabled;

      if (disabled) return;

      this.triggerChange([], []);

      if (!this.isSearchValueControlled()) {
        this.setUncontrolledState({
          _searchValue: '',
          _filteredTreeNodes: null
        });
      }

      event.stopPropagation();
    },
    onMultipleSelectorRemove: function onMultipleSelectorRemove(event, removeValue) {
      event.stopPropagation();

      var _$data2 = this.$data,
          valueList = _$data2._valueList,
          missValueList = _$data2._missValueList,
          valueEntities = _$data2._valueEntities;
      var _$props3 = this.$props,
          treeCheckable = _$props3.treeCheckable,
          treeCheckStrictly = _$props3.treeCheckStrictly,
          treeNodeLabelProp = _$props3.treeNodeLabelProp,
          disabled = _$props3.disabled;

      if (disabled) return;

      // Find trigger entity
      var triggerEntity = valueEntities[removeValue];

      // Clean up value
      var newValueList = valueList;
      if (triggerEntity) {
        // If value is in tree
        if (treeCheckable && !treeCheckStrictly) {
          newValueList = valueList.filter(function (_ref2) {
            var value = _ref2.value;

            var entity = valueEntities[value];
            return !(0, _util.isPosRelated)(entity.pos, triggerEntity.pos);
          });
        } else {
          newValueList = valueList.filter(function (_ref3) {
            var value = _ref3.value;
            return value !== removeValue;
          });
        }
      }

      var triggerNode = triggerEntity ? triggerEntity.node : null;

      var extraInfo = {
        triggerValue: removeValue,
        triggerNode: triggerNode
      };
      var deselectInfo = {
        node: triggerNode
      };

      // [Legacy] Little hack on this to make same action as `onCheck` event.
      if (treeCheckable) {
        var filteredEntityList = newValueList.map(function (_ref4) {
          var value = _ref4.value;
          return valueEntities[value];
        });

        deselectInfo.event = 'check';
        deselectInfo.checked = false;
        deselectInfo.checkedNodes = filteredEntityList.map(function (_ref5) {
          var node = _ref5.node;
          return node;
        });
        deselectInfo.checkedNodesPositions = filteredEntityList.map(function (_ref6) {
          var node = _ref6.node,
              pos = _ref6.pos;
          return {
            node: node,
            pos: pos
          };
        });

        if (treeCheckStrictly) {
          extraInfo.allCheckedNodes = deselectInfo.checkedNodes;
        } else {
          // TODO: It's too expansive to get `halfCheckedKeys` in onDeselect. Not pass this.
          extraInfo.allCheckedNodes = (0, _util.flatToHierarchy)(filteredEntityList).map(function (_ref7) {
            var node = _ref7.node;
            return node;
          });
        }
      } else {
        deselectInfo.event = 'select';
        deselectInfo.selected = false;
        deselectInfo.selectedNodes = newValueList.map(function (_ref8) {
          var value = _ref8.value;
          return (valueEntities[value] || {}).node;
        });
      }

      // Some value user pass prop is not in the tree, we also need clean it
      var newMissValueList = missValueList.filter(function (_ref9) {
        var value = _ref9.value;
        return value !== removeValue;
      });
      var wrappedValue = void 0;
      if (this.isLabelInValue()) {
        wrappedValue = {
          label: triggerNode ? (0, _propsUtil.getPropsData)(triggerNode)[treeNodeLabelProp] : null,
          value: removeValue
        };
      } else {
        wrappedValue = removeValue;
      }

      this.onDeselect(wrappedValue, triggerNode, deselectInfo);

      this.triggerChange(newMissValueList, newValueList, extraInfo);
    },


    // ===================== Popup ======================
    onValueTrigger: function onValueTrigger(isAdd, nodeList, nodeEventInfo, nodeExtraInfo) {
      var node = nodeEventInfo.node;
      var value = node.$props.value;
      var _$data3 = this.$data,
          missValueList = _$data3._missValueList,
          valueEntities = _$data3._valueEntities,
          keyEntities = _$data3._keyEntities,
          searchValue = _$data3._searchValue;
      var _$props4 = this.$props,
          disabled = _$props4.disabled,
          inputValue = _$props4.inputValue,
          treeNodeLabelProp = _$props4.treeNodeLabelProp,
          multiple = _$props4.multiple,
          treeCheckable = _$props4.treeCheckable,
          treeCheckStrictly = _$props4.treeCheckStrictly,
          autoClearSearchValue = _$props4.autoClearSearchValue;

      var label = node.$props[treeNodeLabelProp];

      if (disabled) return;

      // Wrap the return value for user
      var wrappedValue = void 0;
      if (this.isLabelInValue()) {
        wrappedValue = {
          value: value,
          label: label
        };
      } else {
        wrappedValue = value;
      }

      // [Legacy] Origin code not trigger `onDeselect` every time. Let's align the behaviour.
      if (isAdd) {
        this.__emit('select', wrappedValue, node, nodeEventInfo);
      } else {
        this.__emit('deselect', wrappedValue, node, nodeEventInfo);
      }

      // Get wrapped value list.
      // This is a bit hack cause we use key to match the value.
      var newValueList = nodeList.map(function (node) {
        var props = (0, _propsUtil.getPropsData)(node);
        return {
          value: props.value,
          label: props[treeNodeLabelProp]
        };
      });

      // When is `treeCheckable` and with `searchValue`, `valueList` is not full filled.
      // We need calculate the missing nodes.
      if (treeCheckable && !treeCheckStrictly) {
        var keyList = newValueList.map(function (_ref10) {
          var val = _ref10.value;
          return valueEntities[val].key;
        });
        if (isAdd) {
          keyList = (0, _util.conductCheck)(keyList, true, keyEntities).checkedKeys;
        } else {
          keyList = (0, _util.conductCheck)([valueEntities[value].key], false, keyEntities, {
            checkedKeys: keyList
          }).checkedKeys;
        }
        newValueList = keyList.map(function (key) {
          var props = (0, _propsUtil.getPropsData)(keyEntities.get(key).node);
          return {
            value: props.value,
            label: props[treeNodeLabelProp]
          };
        });
      }

      // Clean up `searchValue` when this prop is set
      if (autoClearSearchValue || inputValue === null) {
        // Clean state `searchValue` if uncontrolled
        if (!this.isSearchValueControlled() && (multiple || treeCheckable)) {
          this.setUncontrolledState({
            _searchValue: '',
            _filteredTreeNodes: null
          });
        }

        // Trigger onSearch if `searchValue` to be empty.
        // We should also trigger onSearch with empty string here
        // since if user use `treeExpandedKeys`, it need user have the ability to reset it.
        if (searchValue && searchValue.length) {
          this.__emit('update:searchValue', '');
          this.__emit('search', '');
        }
      }

      // [Legacy] Provide extra info
      var extraInfo = (0, _extends3['default'])({}, nodeExtraInfo, {
        triggerValue: value,
        triggerNode: node
      });

      this.triggerChange(missValueList, newValueList, extraInfo);
    },
    onTreeNodeSelect: function onTreeNodeSelect(_, nodeEventInfo) {
      var _$data4 = this.$data,
          valueList = _$data4._valueList,
          valueEntities = _$data4._valueEntities;
      var _$props5 = this.$props,
          treeCheckable = _$props5.treeCheckable,
          multiple = _$props5.multiple;

      if (treeCheckable) return;

      if (!multiple) {
        this.setOpenState(false);
      }

      var isAdd = nodeEventInfo.selected;
      var selectedValue = nodeEventInfo.node.$props.value;


      var newValueList = void 0;

      if (!multiple) {
        newValueList = [{ value: selectedValue }];
      } else {
        newValueList = valueList.filter(function (_ref11) {
          var value = _ref11.value;
          return value !== selectedValue;
        });
        if (isAdd) {
          newValueList.push({ value: selectedValue });
        }
      }

      var selectedNodes = newValueList.map(function (_ref12) {
        var value = _ref12.value;
        return valueEntities[value];
      }).filter(function (entity) {
        return entity;
      }).map(function (_ref13) {
        var node = _ref13.node;
        return node;
      });

      this.onValueTrigger(isAdd, selectedNodes, nodeEventInfo, { selected: isAdd });
    },
    onTreeNodeCheck: function onTreeNodeCheck(_, nodeEventInfo) {
      var _$data5 = this.$data,
          searchValue = _$data5._searchValue,
          keyEntities = _$data5._keyEntities,
          valueEntities = _$data5._valueEntities,
          valueList = _$data5._valueList;
      var treeCheckStrictly = this.$props.treeCheckStrictly;
      var checkedNodes = nodeEventInfo.checkedNodes,
          checkedNodesPositions = nodeEventInfo.checkedNodesPositions;

      var isAdd = nodeEventInfo.checked;

      var extraInfo = {
        checked: isAdd
      };

      var checkedNodeList = checkedNodes;

      // [Legacy] Check event provide `allCheckedNodes`.
      // When `treeCheckStrictly` or internal `searchValue` is set, TreeNode will be unrelated:
      // - Related: Show the top checked nodes and has children prop.
      // - Unrelated: Show all the checked nodes.
      if (searchValue) {
        var oriKeyList = valueList.map(function (_ref14) {
          var value = _ref14.value;
          return valueEntities[value];
        }).filter(function (entity) {
          return entity;
        }).map(function (_ref15) {
          var key = _ref15.key;
          return key;
        });

        var keyList = void 0;
        if (isAdd) {
          keyList = Array.from(new Set([].concat((0, _toConsumableArray3['default'])(oriKeyList), (0, _toConsumableArray3['default'])(checkedNodeList.map(function (node) {
            var _getPropsData = (0, _propsUtil.getPropsData)(node),
                value = _getPropsData.value;

            return valueEntities[value].key;
          })))));
        } else {
          keyList = (0, _util.conductCheck)([(0, _propsUtil.getPropsData)(nodeEventInfo.node).eventKey], false, keyEntities, {
            checkedKeys: oriKeyList
          }).checkedKeys;
        }

        checkedNodeList = keyList.map(function (key) {
          return keyEntities.get(key).node;
        });

        // Let's follow as not `treeCheckStrictly` format
        extraInfo.allCheckedNodes = keyList.map(function (key) {
          return (0, _util.cleanEntity)(keyEntities.get(key));
        });
      } else if (treeCheckStrictly) {
        extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
      } else {
        extraInfo.allCheckedNodes = (0, _util.flatToHierarchy)(checkedNodesPositions);
      }

      this.onValueTrigger(isAdd, checkedNodeList, nodeEventInfo, extraInfo);
    },


    // ==================== Trigger =====================

    onDropdownVisibleChange: function onDropdownVisibleChange(open) {
      var _$props6 = this.$props,
          multiple = _$props6.multiple,
          treeCheckable = _$props6.treeCheckable;
      var _searchValue = this.$data._searchValue;

      // When set open success and single mode,
      // we will reset the input content.

      if (open && !multiple && !treeCheckable && _searchValue) {
        this.setUncontrolledState({
          _searchValue: '',
          _filteredTreeNodes: null
        });
      }
      this.setOpenState(open, true);
    },
    onSearchInputChange: function onSearchInputChange(event) {
      var value = event.target.value;
      var _$data6 = this.$data,
          treeNodes = _$data6._treeNodes,
          valueEntities = _$data6._valueEntities;
      var _$props7 = this.$props,
          filterTreeNode = _$props7.filterTreeNode,
          treeNodeFilterProp = _$props7.treeNodeFilterProp;

      this.__emit('update:searchValue', value);
      this.__emit('search', value);

      var isSet = false;

      if (!this.isSearchValueControlled()) {
        isSet = this.setUncontrolledState({
          _searchValue: value
        });
        this.setOpenState(true);
      }

      if (isSet) {
        // Do the search logic
        var upperSearchValue = String(value).toUpperCase();

        var filterTreeNodeFn = filterTreeNode;
        if (filterTreeNode === false) {
          filterTreeNodeFn = function filterTreeNodeFn() {
            return true;
          };
        } else if (!filterTreeNodeFn) {
          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
            var nodeValue = String((0, _propsUtil.getPropsData)(node)[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        this.setState({
          _filteredTreeNodes: (0, _util.getFilterTree)(this.$createElement, treeNodes, value, filterTreeNodeFn, valueEntities, _SelectNode2['default'])
        });
      }
    },
    onSearchInputKeyDown: function onSearchInputKeyDown(event) {
      var _$data7 = this.$data,
          searchValue = _$data7._searchValue,
          valueList = _$data7._valueList;
      var keyCode = event.keyCode;


      if (_KeyCode2['default'].BACKSPACE === keyCode && this.isMultiple() && !searchValue && valueList.length) {
        var lastValue = valueList[valueList.length - 1].value;
        this.onMultipleSelectorRemove(event, lastValue);
      }
    },
    onChoiceAnimationLeave: function onChoiceAnimationLeave() {
      var _this4 = this;

      (0, _raf2['default'])(function () {
        _this4.forcePopupAlign();
      });
    },
    setPopupRef: function setPopupRef(popup) {
      this.popup = popup;
    },


    /**
     * Only update the value which is not in props
     */
    setUncontrolledState: function setUncontrolledState(state) {
      var needSync = false;
      var newState = {};
      var props = (0, _propsUtil.getOptionProps)(this);
      Object.keys(state).forEach(function (name) {
        if (name.slice(1) in props) return;

        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        this.setState(newState);
      }

      return needSync;
    },


    // [Legacy] Origin provide `documentClickClose` which triggered by `Trigger`
    // Currently `TreeSelect` align the hide popup logic as `Select` which blur to hide.
    // `documentClickClose` is not accurate anymore. Let's just keep the key word.
    setOpenState: function setOpenState(open) {
      var byTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var dropdownVisibleChange = this.$props.dropdownVisibleChange;


      if (dropdownVisibleChange && dropdownVisibleChange(open, { documentClickClose: !open && byTrigger }) === false) {
        return;
      }

      this.setUncontrolledState({ _open: open });
    },


    // Tree checkable is also a multiple case
    isMultiple: function isMultiple() {
      var _$props8 = this.$props,
          multiple = _$props8.multiple,
          treeCheckable = _$props8.treeCheckable;

      return !!(multiple || treeCheckable);
    },
    isLabelInValue: function isLabelInValue() {
      return (0, _util.isLabelInValue)(this.$props);
    },


    // [Legacy] To align with `Select` component,
    // We use `searchValue` instead of `inputValue`
    // but currently still need support that.
    // Add this method the check if is controlled
    isSearchValueControlled: function isSearchValueControlled() {
      var props = (0, _propsUtil.getOptionProps)(this);
      var inputValue = props.inputValue;

      if ('searchValue' in props) return true;
      return 'inputValue' in props && inputValue !== null;
    },
    forcePopupAlign: function forcePopupAlign() {
      var $trigger = this.selectTriggerRef.current;
      if ($trigger) {
        $trigger.forcePopupAlign();
      }
    },
    delayForcePopupAlign: function delayForcePopupAlign() {
      var _this5 = this;

      // Wait 2 frame to avoid dom update & dom algin in the same time
      // https://github.com/ant-design/ant-design/issues/12031
      (0, _raf2['default'])(function () {
        (0, _raf2['default'])(_this5.forcePopupAlign);
      });
    },


    /**
     * 1. Update state valueList.
     * 2. Fire `onChange` event to user.
     */
    triggerChange: function triggerChange(missValueList, valueList) {
      var extraInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _$data8 = this.$data,
          valueEntities = _$data8._valueEntities,
          searchValue = _$data8._searchValue,
          prevSelectorValueList = _$data8._selectorValueList;

      var props = (0, _propsUtil.getOptionProps)(this);
      var disabled = props.disabled,
          treeCheckable = props.treeCheckable,
          treeCheckStrictly = props.treeCheckStrictly;

      if (disabled) return;

      // Trigger
      var extra = (0, _extends3['default'])({
        // [Legacy] Always return as array contains label & value
        preValue: prevSelectorValueList.map(function (_ref16) {
          var label = _ref16.label,
              value = _ref16.value;
          return { label: label, value: value };
        })
      }, extraInfo);

      // Format value by `treeCheckStrictly`
      var selectorValueList = (0, _util.formatSelectorValue)(valueList, props, valueEntities);

      if (!('value' in props)) {
        var newState = {
          _missValueList: missValueList,
          _valueList: valueList,
          _selectorValueList: selectorValueList
        };

        if (searchValue && treeCheckable && !treeCheckStrictly) {
          newState._searchHalfCheckedKeys = (0, _util.getHalfCheckedKeys)(valueList, valueEntities);
        }

        this.setState(newState);
      }

      // Only do the logic when `onChange` function provided
      if ((0, _propsUtil.getListeners)(this).change) {
        var connectValueList = void 0;

        // Get value by mode
        if (this.isMultiple()) {
          connectValueList = [].concat((0, _toConsumableArray3['default'])(missValueList), (0, _toConsumableArray3['default'])(selectorValueList));
        } else {
          connectValueList = selectorValueList.slice(0, 1);
        }

        var labelList = null;
        var returnValue = void 0;

        if (this.isLabelInValue()) {
          returnValue = connectValueList.map(function (_ref17) {
            var label = _ref17.label,
                value = _ref17.value;
            return { label: label, value: value };
          });
        } else {
          labelList = [];
          returnValue = connectValueList.map(function (_ref18) {
            var label = _ref18.label,
                value = _ref18.value;

            labelList.push(label);
            return value;
          });
        }

        if (!this.isMultiple()) {
          returnValue = returnValue[0];
        }
        this.__emit('change', returnValue, labelList, extra);
      }
    },
    focus: function focus() {
      this.selectorRef.current.focus();
    },
    blur: function blur() {
      this.selectorRef.current.blur();
    }
  },

  // ===================== Render =====================

  render: function render() {
    var h = arguments[0];
    var _$data9 = this.$data,
        valueList = _$data9._valueList,
        missValueList = _$data9._missValueList,
        selectorValueList = _$data9._selectorValueList,
        searchHalfCheckedKeys = _$data9._searchHalfCheckedKeys,
        valueEntities = _$data9._valueEntities,
        keyEntities = _$data9._keyEntities,
        searchValue = _$data9._searchValue,
        open = _$data9._open,
        focused = _$data9._focused,
        treeNodes = _$data9._treeNodes,
        filteredTreeNodes = _$data9._filteredTreeNodes;

    var props = (0, _propsUtil.getOptionProps)(this);
    var prefixCls = props.prefixCls,
        treeExpandedKeys = props.treeExpandedKeys;

    var isMultiple = this.isMultiple();

    var passProps = {
      props: (0, _extends3['default'])({}, props, {
        isMultiple: isMultiple,
        valueList: valueList,
        searchHalfCheckedKeys: searchHalfCheckedKeys,
        selectorValueList: [].concat((0, _toConsumableArray3['default'])(missValueList), (0, _toConsumableArray3['default'])(selectorValueList)),
        valueEntities: valueEntities,
        keyEntities: keyEntities,
        searchValue: searchValue,
        upperSearchValue: (searchValue || '').toUpperCase(), // Perf save
        open: open,
        focused: focused,
        dropdownPrefixCls: prefixCls + '-dropdown',
        ariaId: this.ariaId
      }),
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
        choiceAnimationLeave: this.onChoiceAnimationLeave
      }),
      scopedSlots: this.$scopedSlots
    };
    var popupProps = (0, _propsUtil.mergeProps)(passProps, {
      props: {
        treeNodes: treeNodes,
        filteredTreeNodes: filteredTreeNodes,
        // Tree expanded control
        treeExpandedKeys: treeExpandedKeys,
        __propsSymbol__: Symbol()
      },
      on: {
        treeExpanded: this.delayForcePopupAlign
      },
      directives: [{
        name: 'ant-ref',
        value: this.setPopupRef
      }]
    });

    var Popup = isMultiple ? _MultiplePopup2['default'] : _SinglePopup2['default'];
    var $popup = h(Popup, popupProps);

    var Selector = isMultiple ? _MultipleSelector2['default'] : _SingleSelector2['default'];
    var $selector = h(Selector, (0, _babelHelperVueJsxMergeProps2['default'])([passProps, {
      directives: [{
        name: 'ant-ref',
        value: this.selectorRef
      }]
    }]));
    var selectTriggerProps = (0, _propsUtil.mergeProps)(passProps, {
      props: {
        popupElement: $popup,
        dropdownVisibleChange: this.onDropdownVisibleChange
      },
      directives: [{
        name: 'ant-ref',
        value: this.selectTriggerRef
      }]
    });
    return h(
      _SelectTrigger2['default'],
      selectTriggerProps,
      [$selector]
    );
  }
};

Select.TreeNode = _SelectNode2['default'];
Select.SHOW_ALL = _strategies.SHOW_ALL;
Select.SHOW_PARENT = _strategies.SHOW_PARENT;
Select.SHOW_CHILD = _strategies.SHOW_CHILD;

// Let warning show correct component name
Select.name = 'TreeSelect';

exports['default'] = Select;

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

/***/ "8a23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// based on rc-tree 2.1.3


module.exports = __webpack_require__("bf74");

/***/ }),

/***/ "8a69":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__("1098");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__("423e9");

var _propsUtil = __webpack_require__("73c8");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _getTransitionProps = __webpack_require__("5c25");

var _getTransitionProps2 = _interopRequireDefault(_getTransitionProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}
var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';

var defaultTitle = '---';

var TreeNode = {
  name: 'TreeNode',
  mixins: [_BaseMixin2['default']],
  __ANT_TREE_NODE: true,
  props: (0, _propsUtil.initDefaultProps)({
    eventKey: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]), // Pass by parent `cloneElement`
    prefixCls: _vueTypes2['default'].string,
    // className: PropTypes.string,
    root: _vueTypes2['default'].object,
    // onSelect: PropTypes.func,

    // By parent
    expanded: _vueTypes2['default'].bool,
    selected: _vueTypes2['default'].bool,
    checked: _vueTypes2['default'].bool,
    loaded: _vueTypes2['default'].bool,
    loading: _vueTypes2['default'].bool,
    halfChecked: _vueTypes2['default'].bool,
    title: _vueTypes2['default'].any,
    pos: _vueTypes2['default'].string,
    dragOver: _vueTypes2['default'].bool,
    dragOverGapTop: _vueTypes2['default'].bool,
    dragOverGapBottom: _vueTypes2['default'].bool,

    // By user
    isLeaf: _vueTypes2['default'].bool,
    checkable: _vueTypes2['default'].bool,
    selectable: _vueTypes2['default'].bool,
    disabled: _vueTypes2['default'].bool,
    disableCheckbox: _vueTypes2['default'].bool,
    icon: _vueTypes2['default'].any,
    dataRef: _vueTypes2['default'].object,
    switcherIcon: _vueTypes2['default'].any,
    label: _vueTypes2['default'].any,
    value: _vueTypes2['default'].any
  }, {}),

  data: function data() {
    return {
      dragNodeHighlight: false
    };
  },

  inject: {
    vcTree: { 'default': function _default() {
        return {};
      } },
    vcTreeNode: { 'default': function _default() {
        return {};
      } }
  },
  provide: function provide() {
    return {
      vcTreeNode: this
    };
  },


  // Isomorphic needn't load data in server side
  mounted: function mounted() {
    var eventKey = this.eventKey,
        registerTreeNode = this.vcTree.registerTreeNode;

    this.syncLoadData(this.$props);
    registerTreeNode && registerTreeNode(eventKey, this);
  },
  updated: function updated() {
    this.syncLoadData(this.$props);
  },
  beforeDestroy: function beforeDestroy() {
    var eventKey = this.eventKey,
        registerTreeNode = this.vcTree.registerTreeNode;

    registerTreeNode && registerTreeNode(eventKey, null);
  },


  methods: {
    onSelectorClick: function onSelectorClick(e) {
      // Click trigger before select/check operation
      var onNodeClick = this.vcTree.onNodeClick;

      onNodeClick(e, this);
      if (this.isSelectable()) {
        this.onSelect(e);
      } else {
        this.onCheck(e);
      }
    },
    onSelectorDoubleClick: function onSelectorDoubleClick(e) {
      var onNodeDoubleClick = this.vcTree.onNodeDoubleClick;

      onNodeDoubleClick(e, this);
    },
    onSelect: function onSelect(e) {
      if (this.isDisabled()) return;

      var onNodeSelect = this.vcTree.onNodeSelect;

      e.preventDefault();
      onNodeSelect(e, this);
    },
    onCheck: function onCheck(e) {
      if (this.isDisabled()) return;

      var disableCheckbox = this.disableCheckbox,
          checked = this.checked;
      var onNodeCheck = this.vcTree.onNodeCheck;


      if (!this.isCheckable() || disableCheckbox) return;

      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, this, targetChecked);
    },
    onMouseEnter: function onMouseEnter(e) {
      var onNodeMouseEnter = this.vcTree.onNodeMouseEnter;

      onNodeMouseEnter(e, this);
    },
    onMouseLeave: function onMouseLeave(e) {
      var onNodeMouseLeave = this.vcTree.onNodeMouseLeave;

      onNodeMouseLeave(e, this);
    },
    onContextMenu: function onContextMenu(e) {
      var onNodeContextMenu = this.vcTree.onNodeContextMenu;

      onNodeContextMenu(e, this);
    },
    onDragStart: function onDragStart(e) {
      var onNodeDragStart = this.vcTree.onNodeDragStart;


      e.stopPropagation();
      this.setState({
        dragNodeHighlight: true
      });
      onNodeDragStart(e, this);

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {
        // empty
      }
    },
    onDragEnter: function onDragEnter(e) {
      var onNodeDragEnter = this.vcTree.onNodeDragEnter;


      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, this);
    },
    onDragOver: function onDragOver(e) {
      var onNodeDragOver = this.vcTree.onNodeDragOver;


      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, this);
    },
    onDragLeave: function onDragLeave(e) {
      var onNodeDragLeave = this.vcTree.onNodeDragLeave;


      e.stopPropagation();
      onNodeDragLeave(e, this);
    },
    onDragEnd: function onDragEnd(e) {
      var onNodeDragEnd = this.vcTree.onNodeDragEnd;


      e.stopPropagation();
      this.setState({
        dragNodeHighlight: false
      });
      onNodeDragEnd(e, this);
    },
    onDrop: function onDrop(e) {
      var onNodeDrop = this.vcTree.onNodeDrop;


      e.preventDefault();
      e.stopPropagation();
      this.setState({
        dragNodeHighlight: false
      });
      onNodeDrop(e, this);
    },


    // Disabled item still can be switch
    onExpand: function onExpand(e) {
      var onNodeExpand = this.vcTree.onNodeExpand;

      onNodeExpand(e, this);
    },
    getNodeChildren: function getNodeChildren() {
      var children = this.$slots['default'];

      var originList = (0, _propsUtil.filterEmpty)(children);
      var targetList = (0, _util.getNodeChildren)(originList);

      if (originList.length !== targetList.length) {
        (0, _util.warnOnlyTreeNode)();
      }

      return targetList;
    },
    getNodeState: function getNodeState() {
      var expanded = this.expanded;


      if (this.isLeaf2()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    },
    isLeaf2: function isLeaf2() {
      var isLeaf = this.isLeaf,
          loaded = this.loaded;
      var loadData = this.vcTree.loadData;


      var hasChildren = this.getNodeChildren().length !== 0;
      if (isLeaf === false) {
        return false;
      }
      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    },
    isDisabled: function isDisabled() {
      var disabled = this.disabled;
      var treeDisabled = this.vcTree.disabled;

      // Follow the logic of Selectable

      if (disabled === false) {
        return false;
      }

      return !!(treeDisabled || disabled);
    },
    isCheckable: function isCheckable() {
      var checkable = this.$props.checkable;
      var treeCheckable = this.vcTree.checkable;

      // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    },


    // Load data to avoid default expanded tree without data
    syncLoadData: function syncLoadData(props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _vcTree = this.vcTree,
          loadData = _vcTree.loadData,
          onNodeLoad = _vcTree.onNodeLoad;

      if (loading) return;
      // read from state to avoid loadData at same time
      if (loadData && expanded && !this.isLeaf2()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        var hasChildren = this.getNodeChildren().length !== 0;
        if (!hasChildren && !loaded) {
          onNodeLoad(this);
        }
      }
    },
    isSelectable: function isSelectable() {
      var selectable = this.selectable;
      var treeSelectable = this.vcTree.selectable;

      // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    },


    // Switcher
    renderSwitcher: function renderSwitcher() {
      var h = this.$createElement;
      var expanded = this.expanded;
      var prefixCls = this.vcTree.prefixCls;

      var switcherIcon = (0, _propsUtil.getComponentFromProp)(this, 'switcherIcon', {}, false) || (0, _propsUtil.getComponentFromProp)(this.vcTree, 'switcherIcon', {}, false);
      if (this.isLeaf2()) {
        return h(
          'span',
          {
            key: 'switcher',
            'class': (0, _classnames2['default'])(prefixCls + '-switcher', prefixCls + '-switcher-noop')
          },
          [typeof switcherIcon === 'function' ? switcherIcon((0, _extends3['default'])({}, this.$props, this.$props.dataRef, { isLeaf: true })) : switcherIcon]
        );
      }

      var switcherCls = (0, _classnames2['default'])(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE));
      return h(
        'span',
        { key: 'switcher', on: {
            'click': this.onExpand
          },
          'class': switcherCls },
        [typeof switcherIcon === 'function' ? switcherIcon((0, _extends3['default'])({}, this.$props, this.$props.dataRef, { isLeaf: false })) : switcherIcon]
      );
    },


    // Checkbox
    renderCheckbox: function renderCheckbox() {
      var h = this.$createElement;
      var checked = this.checked,
          halfChecked = this.halfChecked,
          disableCheckbox = this.disableCheckbox;
      var prefixCls = this.vcTree.prefixCls;

      var disabled = this.isDisabled();
      var checkable = this.isCheckable();

      if (!checkable) return null;

      // [Legacy] Custom element should be separate with `checkable` in future
      var $custom = typeof checkable !== 'boolean' ? checkable : null;

      return h(
        'span',
        {
          key: 'checkbox',
          'class': (0, _classnames2['default'])(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
          on: {
            'click': this.onCheck
          }
        },
        [$custom]
      );
    },
    renderIcon: function renderIcon() {
      var h = this.$createElement;
      var loading = this.loading;
      var prefixCls = this.vcTree.prefixCls;


      return h('span', {
        key: 'icon',
        'class': (0, _classnames2['default'])(prefixCls + '-iconEle', prefixCls + '-icon__' + (this.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
      });
    },


    // Icon + Title
    renderSelector: function renderSelector(h) {
      var selected = this.selected,
          loading = this.loading,
          dragNodeHighlight = this.dragNodeHighlight;

      var icon = (0, _propsUtil.getComponentFromProp)(this, 'icon', {}, false);
      var _vcTree2 = this.vcTree,
          prefixCls = _vcTree2.prefixCls,
          showIcon = _vcTree2.showIcon,
          treeIcon = _vcTree2.icon,
          draggable = _vcTree2.draggable,
          loadData = _vcTree2.loadData;

      var disabled = this.isDisabled();
      var title = (0, _propsUtil.getComponentFromProp)(this, 'title', {}, false);
      var wrapClass = prefixCls + '-node-content-wrapper';

      // Icon - Still show loading icon when loading without showIcon
      var $icon = void 0;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? h(
          'span',
          { 'class': (0, _classnames2['default'])(prefixCls + '-iconEle', prefixCls + '-icon__customize') },
          [typeof currentIcon === 'function' ? currentIcon((0, _extends3['default'])({}, this.$props, this.$props.dataRef), h) : currentIcon]
        ) : this.renderIcon();
      } else if (loadData && loading) {
        $icon = this.renderIcon();
      }

      var currentTitle = title;
      var $title = currentTitle ? h(
        'span',
        { 'class': prefixCls + '-title' },
        [typeof currentTitle === 'function' ? currentTitle((0, _extends3['default'])({}, this.$props, this.$props.dataRef), h) : currentTitle]
      ) : h(
        'span',
        { 'class': prefixCls + '-title' },
        [defaultTitle]
      );

      return h(
        'span',
        {
          key: 'selector',
          ref: 'selectHandle',
          attrs: { title: typeof title === 'string' ? title : '',

            draggable: !disabled && draggable || undefined,
            'aria-grabbed': !disabled && draggable || undefined
          },
          'class': (0, _classnames2['default'])('' + wrapClass, wrapClass + '-' + (this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'), on: {
            'mouseenter': this.onMouseEnter,
            'mouseleave': this.onMouseLeave,
            'contextmenu': this.onContextMenu,
            'click': this.onSelectorClick,
            'dblclick': this.onSelectorDoubleClick,
            'dragstart': draggable ? this.onDragStart : noop
          }
        },
        [$icon, $title]
      );
    },


    // Children list wrapped with `Animation`
    renderChildren: function renderChildren() {
      var h = this.$createElement;
      var expanded = this.expanded,
          pos = this.pos;
      var _vcTree3 = this.vcTree,
          prefixCls = _vcTree3.prefixCls,
          openTransitionName = _vcTree3.openTransitionName,
          openAnimation = _vcTree3.openAnimation,
          renderTreeNode = _vcTree3.renderTreeNode;


      var animProps = {};
      if (openTransitionName) {
        animProps = (0, _getTransitionProps2['default'])(openTransitionName);
      } else if ((typeof openAnimation === 'undefined' ? 'undefined' : (0, _typeof3['default'])(openAnimation)) === 'object') {
        animProps = (0, _extends3['default'])({}, openAnimation);
        animProps.props = (0, _extends3['default'])({ css: false }, animProps.props);
      }

      // Children TreeNode
      var nodeList = this.getNodeChildren();

      if (nodeList.length === 0) {
        return null;
      }

      var $children = void 0;
      if (expanded) {
        $children = h(
          'ul',
          {
            'class': (0, _classnames2['default'])(prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
            attrs: { 'data-expanded': expanded,
              role: 'group'
            }
          },
          [(0, _util.mapChildren)(nodeList, function (node, index) {
            return renderTreeNode(node, index, pos);
          })]
        );
      }

      return h(
        'transition',
        animProps,
        [$children]
      );
    }
  },

  render: function render(h) {
    var _ref;

    var _$props = this.$props,
        dragOver = _$props.dragOver,
        dragOverGapTop = _$props.dragOverGapTop,
        dragOverGapBottom = _$props.dragOverGapBottom,
        isLeaf = _$props.isLeaf,
        expanded = _$props.expanded,
        selected = _$props.selected,
        checked = _$props.checked,
        halfChecked = _$props.halfChecked,
        loading = _$props.loading;
    var _vcTree4 = this.vcTree,
        prefixCls = _vcTree4.prefixCls,
        filterTreeNode = _vcTree4.filterTreeNode,
        draggable = _vcTree4.draggable;

    var disabled = this.isDisabled();
    return h(
      'li',
      {
        'class': (_ref = {}, (0, _defineProperty3['default'])(_ref, prefixCls + '-treenode-disabled', disabled), (0, _defineProperty3['default'])(_ref, prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close'), !isLeaf), (0, _defineProperty3['default'])(_ref, prefixCls + '-treenode-checkbox-checked', checked), (0, _defineProperty3['default'])(_ref, prefixCls + '-treenode-checkbox-indeterminate', halfChecked), (0, _defineProperty3['default'])(_ref, prefixCls + '-treenode-selected', selected), (0, _defineProperty3['default'])(_ref, prefixCls + '-treenode-loading', loading), (0, _defineProperty3['default'])(_ref, 'drag-over', !disabled && dragOver), (0, _defineProperty3['default'])(_ref, 'drag-over-gap-top', !disabled && dragOverGapTop), (0, _defineProperty3['default'])(_ref, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0, _defineProperty3['default'])(_ref, 'filter-node', filterTreeNode && filterTreeNode(this)), _ref),
        attrs: { role: 'treeitem'
        },
        on: {
          'dragenter': draggable ? this.onDragEnter : noop,
          'dragover': draggable ? this.onDragOver : noop,
          'dragleave': draggable ? this.onDragLeave : noop,
          'drop': draggable ? this.onDrop : noop,
          'dragend': draggable ? this.onDragEnd : noop
        }
      },
      [this.renderSwitcher(), this.renderCheckbox(), this.renderSelector(h), this.renderChildren()]
    );
  }
};

TreeNode.isTreeNode = 1;

exports['default'] = TreeNode;

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

/***/ "94a9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectorPropTypes = undefined;

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("6042");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = function (modeName) {
  var BaseSelector = {
    name: 'BaseSelector',
    mixins: [_BaseMixin2['default']],
    props: (0, _propsUtil.initDefaultProps)((0, _extends3['default'])({}, selectorPropTypes(), {

      // Pass by HOC
      renderSelection: _vueTypes2['default'].func.isRequired,
      renderPlaceholder: _vueTypes2['default'].func,
      tabIndex: _vueTypes2['default'].number
    }), {
      tabIndex: 0
    }),
    inject: {
      vcTreeSelect: { 'default': function _default() {
          return {};
        } }
    },
    created: function created() {
      this.domRef = (0, _util.createRef)();
    },

    methods: {
      onFocus: function onFocus(e) {
        var focused = this.$props.focused;
        var onSelectorFocus = this.vcTreeSelect.onSelectorFocus;


        if (!focused) {
          onSelectorFocus();
        }
        this.__emit('focus', e);
      },
      onBlur: function onBlur(e) {
        var onSelectorBlur = this.vcTreeSelect.onSelectorBlur;

        // TODO: Not trigger when is inner component get focused

        onSelectorBlur();
        this.__emit('blur', e);
      },
      focus: function focus() {
        this.domRef.current.focus();
      },
      blur: function blur() {
        this.domRef.current.blur();
      },
      renderClear: function renderClear() {
        var h = this.$createElement;
        var _$props = this.$props,
            prefixCls = _$props.prefixCls,
            allowClear = _$props.allowClear,
            selectorValueList = _$props.selectorValueList;
        var onSelectorClear = this.vcTreeSelect.onSelectorClear;


        if (!allowClear || !selectorValueList.length || !selectorValueList[0].value) {
          return null;
        }
        var clearIcon = (0, _propsUtil.getComponentFromProp)(this, 'clearIcon');
        return h(
          'span',
          { key: 'clear', 'class': prefixCls + '-selection__clear', on: {
              'click': onSelectorClear
            }
          },
          [clearIcon]
        );
      },
      renderArrow: function renderArrow() {
        var h = this.$createElement;
        var _$props2 = this.$props,
            prefixCls = _$props2.prefixCls,
            showArrow = _$props2.showArrow;

        if (!showArrow) {
          return null;
        }
        var inputIcon = (0, _propsUtil.getComponentFromProp)(this, 'inputIcon');
        return h(
          'span',
          { key: 'arrow', 'class': prefixCls + '-arrow', style: { outline: 'none' } },
          [inputIcon]
        );
      }
    },

    render: function render() {
      var _classNames;

      var h = arguments[0];
      var _$props3 = this.$props,
          prefixCls = _$props3.prefixCls,
          className = _$props3.className,
          style = _$props3.style,
          open = _$props3.open,
          focused = _$props3.focused,
          disabled = _$props3.disabled,
          allowClear = _$props3.allowClear,
          ariaId = _$props3.ariaId,
          renderSelection = _$props3.renderSelection,
          renderPlaceholder = _$props3.renderPlaceholder,
          tabIndex = _$props3.tabIndex;
      var onSelectorKeyDown = this.vcTreeSelect.onSelectorKeyDown;


      var myTabIndex = tabIndex;
      if (disabled) {
        myTabIndex = null;
      }

      return h(
        'span',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          style: style,
          on: {
            'click': (0, _propsUtil.getListeners)(this).click || noop
          },

          'class': (0, _classnames2['default'])(className, prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-open', open), (0, _defineProperty3['default'])(_classNames, prefixCls + '-focused', open || focused), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-enabled', !disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-allow-clear', allowClear), _classNames))
        }, {
          directives: [{
            name: 'ant-ref',
            value: this.domRef
          }]
        }, {
          attrs: {
            role: 'combobox',
            'aria-expanded': open,
            'aria-owns': open ? ariaId : undefined,
            'aria-controls': open ? ariaId : undefined,
            'aria-haspopup': 'listbox',
            'aria-disabled': disabled,
            tabIndex: myTabIndex
          },
          on: {
            'focus': this.onFocus,
            'blur': this.onBlur,
            'keydown': onSelectorKeyDown
          }
        }]),
        [h(
          'span',
          {
            key: 'selection',
            'class': (0, _classnames2['default'])(prefixCls + '-selection', prefixCls + '-selection--' + modeName)
          },
          [renderSelection(), this.renderClear(), this.renderArrow(), renderPlaceholder && renderPlaceholder()]
        )]
      );
    }
  };

  return BaseSelector;
};

var _util = __webpack_require__("2fd9");

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _classnames = __webpack_require__("4d26");

var _classnames2 = _interopRequireDefault(_classnames);

var _propsUtil = __webpack_require__("73c8");

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var selectorPropTypes = exports.selectorPropTypes = function selectorPropTypes() {
  return {
    prefixCls: _vueTypes2['default'].string,
    className: _vueTypes2['default'].string,
    open: _vueTypes2['default'].bool,
    selectorValueList: _vueTypes2['default'].array,
    allowClear: _vueTypes2['default'].bool,
    showArrow: _vueTypes2['default'].bool,
    // onClick: PropTypes.func,
    // onBlur: PropTypes.func,
    // onFocus: PropTypes.func,
    removeSelected: _vueTypes2['default'].func,
    choiceTransitionName: _vueTypes2['default'].string,
    // Pass by component
    ariaId: _vueTypes2['default'].string,
    inputIcon: _vueTypes2['default'].any,
    clearIcon: _vueTypes2['default'].any,
    removeIcon: _vueTypes2['default'].any,
    placeholder: _vueTypes2['default'].any,
    disabled: _vueTypes2['default'].bool,
    focused: _vueTypes2['default'].bool
  };
}; /**
    * Input Box is in different position for different mode.
    * This not the same design as `Select` cause it's followed by antd 0.x `Select`.
    * We will not follow the new design immediately since antd 3.x is already released.
    *
    * So this file named as Selector to avoid confuse.
    */


function noop() {}

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

/***/ "96ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _BasePopup = __webpack_require__("269c");

var _BasePopup2 = _interopRequireDefault(_BasePopup);

var _SearchInput = __webpack_require__("e10c");

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _util = __webpack_require__("2fd9");

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SinglePopup = {
  name: 'SinglePopup',
  props: (0, _extends3['default'])({}, _BasePopup2['default'].props, _SearchInput2['default'].props, {
    searchValue: _vueTypes2['default'].string,
    showSearch: _vueTypes2['default'].bool,
    dropdownPrefixCls: _vueTypes2['default'].string,
    disabled: _vueTypes2['default'].bool,
    searchPlaceholder: _vueTypes2['default'].string
  }),
  created: function created() {
    this.inputRef = (0, _util.createRef)();
    this.searchRef = (0, _util.createRef)();
    this.popupRef = (0, _util.createRef)();
  },

  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    getTree: function getTree() {
      return this.popupRef.current && this.popupRef.current.getTree();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var h = this.$createElement;
      var _$props = this.$props,
          searchPlaceholder = _$props.searchPlaceholder,
          searchValue = _$props.searchValue,
          prefixCls = _$props.prefixCls;


      if (!searchPlaceholder) {
        return null;
      }

      return h(
        'span',
        {
          style: {
            display: searchValue ? 'none' : 'block'
          },
          on: {
            'click': this.onPlaceholderClick
          },

          'class': prefixCls + '-search__field__placeholder'
        },
        [searchPlaceholder]
      );
    },
    _renderSearch: function _renderSearch() {
      var h = this.$createElement;
      var _$props2 = this.$props,
          showSearch = _$props2.showSearch,
          dropdownPrefixCls = _$props2.dropdownPrefixCls;


      if (!showSearch) {
        return null;
      }

      return h(
        'span',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          'class': dropdownPrefixCls + '-search'
        }, {
          directives: [{
            name: 'ant-ref',
            value: this.searchRef
          }]
        }]),
        [h(_SearchInput2['default'], {
          props: (0, _extends3['default'])({}, this.$props, { renderPlaceholder: this._renderPlaceholder }),
          on: (0, _propsUtil.getListeners)(this),
          directives: [{
            name: 'ant-ref',
            value: this.inputRef
          }]
        })]
      );
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(_BasePopup2['default'], {
      props: (0, _extends3['default'])({}, this.$props, { renderSearch: this._renderSearch, __propsSymbol__: Symbol() }),
      on: (0, _propsUtil.getListeners)(this),
      directives: [{
        name: 'ant-ref',
        value: this.popupRef
      }]
    });
  }
};

exports['default'] = SinglePopup;

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

/***/ "bf74":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeNode = exports.Tree = undefined;

var _Tree = __webpack_require__("06a3");

var _Tree2 = _interopRequireDefault(_Tree);

var _TreeNode = __webpack_require__("8a69");

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Tree.Tree.TreeNode = _TreeNode2['default'];
_Tree2['default'].TreeNode = _TreeNode2['default'];

exports.Tree = _Tree.Tree;
exports.TreeNode = _TreeNode2['default'];
exports['default'] = _Tree2['default'];

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

/***/ "c6a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  var originClass = node.className;
  return (' ' + originClass + ' ').indexOf(' ' + className + ' ') > -1;
}

function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = node.className + ' ' + className;
    }
  }
}

function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      var originClass = node.className;
      node.className = (' ' + originClass + ' ').replace(' ' + className + ' ', ' ');
    }
  }
}

/***/ }),

/***/ "c7e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeNode = exports.SHOW_PARENT = exports.SHOW_CHILD = exports.SHOW_ALL = undefined;

var _strategies = __webpack_require__("cbda");

Object.defineProperty(exports, 'SHOW_ALL', {
  enumerable: true,
  get: function get() {
    return _strategies.SHOW_ALL;
  }
});
Object.defineProperty(exports, 'SHOW_CHILD', {
  enumerable: true,
  get: function get() {
    return _strategies.SHOW_CHILD;
  }
});
Object.defineProperty(exports, 'SHOW_PARENT', {
  enumerable: true,
  get: function get() {
    return _strategies.SHOW_PARENT;
  }
});

var _Select = __webpack_require__("80e1");

var _Select2 = _interopRequireDefault(_Select);

var _SelectNode = __webpack_require__("2050");

var _SelectNode2 = _interopRequireDefault(_SelectNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TreeNode = exports.TreeNode = _SelectNode2['default'];

exports['default'] = _Select2['default'];

/***/ }),

/***/ "ca20":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelectProps = exports.TreeData = undefined;

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _select = __webpack_require__("8f58");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TreeData = exports.TreeData = _vueTypes2['default'].shape({
  key: _vueTypes2['default'].string,
  value: _vueTypes2['default'].string,
  label: _vueTypes2['default'].any,
  scopedSlots: _vueTypes2['default'].object,
  children: _vueTypes2['default'].array
}).loose;

var TreeSelectProps = exports.TreeSelectProps = function TreeSelectProps() {
  return (0, _extends3['default'])({}, (0, _select.AbstractSelectProps)(), {
    autoFocus: _vueTypes2['default'].bool,
    dropdownStyle: _vueTypes2['default'].object,
    filterTreeNode: _vueTypes2['default'].oneOfType([Function, Boolean]),
    getPopupContainer: _vueTypes2['default'].func,
    labelInValue: _vueTypes2['default'].bool,
    loadData: _vueTypes2['default'].func,
    maxTagCount: _vueTypes2['default'].number,
    maxTagPlaceholder: _vueTypes2['default'].any,
    value: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object, _vueTypes2['default'].array, _vueTypes2['default'].number]),
    defaultValue: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].object, _vueTypes2['default'].array, _vueTypes2['default'].number]),
    multiple: _vueTypes2['default'].bool,
    notFoundContent: _vueTypes2['default'].any,
    // onSelect: (value: any) => void,
    // onChange: (value: any, label: any) => void,
    // onSearch: (value: any) => void,
    searchPlaceholder: _vueTypes2['default'].string,
    searchValue: _vueTypes2['default'].string,
    showCheckedStrategy: _vueTypes2['default'].oneOf(['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD']),
    suffixIcon: _vueTypes2['default'].any,
    treeCheckable: _vueTypes2['default'].oneOfType([_vueTypes2['default'].any, _vueTypes2['default'].bool]),
    treeCheckStrictly: _vueTypes2['default'].bool,
    treeData: _vueTypes2['default'].arrayOf(Object),
    treeDataSimpleMode: _vueTypes2['default'].oneOfType([Boolean, Object]),

    dropdownClassName: _vueTypes2['default'].string,
    dropdownMatchSelectWidth: _vueTypes2['default'].bool,
    treeDefaultExpandAll: _vueTypes2['default'].bool,
    treeExpandedKeys: _vueTypes2['default'].array,
    treeIcon: _vueTypes2['default'].bool,
    treeDefaultExpandedKeys: _vueTypes2['default'].array,
    treeNodeFilterProp: _vueTypes2['default'].string,
    treeNodeLabelProp: _vueTypes2['default'].string,
    replaceFields: _vueTypes2['default'].object.def({})
  });
};

/***/ }),

/***/ "cbda":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SHOW_ALL = exports.SHOW_ALL = 'SHOW_ALL';
var SHOW_PARENT = exports.SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = exports.SHOW_CHILD = 'SHOW_CHILD';

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

/***/ "e10c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _util = __webpack_require__("2fd9");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Since search box is in different position with different mode.
 * - Single: in the popup box
 * - multiple: in the selector
 * Move the code as a SearchInput for easy management.
 */

var SearchInput = {
  name: 'SearchInput',
  props: {
    open: _vueTypes2['default'].bool,
    searchValue: _vueTypes2['default'].string,
    prefixCls: _vueTypes2['default'].string,
    disabled: _vueTypes2['default'].bool,
    renderPlaceholder: _vueTypes2['default'].func,
    needAlign: _vueTypes2['default'].bool,
    ariaId: _vueTypes2['default'].string
  },
  inject: {
    vcTreeSelect: { 'default': function _default() {
        return {};
      } }
  },
  data: function data() {
    return {
      mirrorSearchValue: this.searchValue
    };
  },

  watch: {
    searchValue: function searchValue(val) {
      this.mirrorSearchValue = val;
    }
  },
  created: function created() {
    this.inputRef = (0, _util.createRef)();
    this.mirrorInputRef = (0, _util.createRef)();
    this.prevProps = (0, _extends3['default'])({}, this.$props);
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var _$props = _this.$props,
          open = _$props.open,
          needAlign = _$props.needAlign;

      if (needAlign) {
        _this.alignInputWidth();
      }

      if (open) {
        _this.focus(true);
      }
    });
  },
  updated: function updated() {
    var _this2 = this;

    var _$props2 = this.$props,
        open = _$props2.open,
        searchValue = _$props2.searchValue,
        needAlign = _$props2.needAlign;
    var prevProps = this.prevProps;

    this.$nextTick(function () {
      if (open && prevProps.open !== open) {
        _this2.focus();
      }
      if (needAlign && searchValue !== prevProps.searchValue) {
        _this2.alignInputWidth();
      }
      _this2.prevProps = (0, _extends3['default'])({}, _this2.$props);
    });
  },

  methods: {
    /**
     * `scrollWidth` is not correct in IE, do the workaround.
     * ref: https://github.com/react-component/tree-select/issues/65
     *  clientWidth 0 when mounted in vue. why?
     */
    alignInputWidth: function alignInputWidth() {
      this.inputRef.current.style.width = (this.mirrorInputRef.current.clientWidth || this.mirrorInputRef.current.offsetWidth) + 'px';
    },


    /**
     * Need additional timeout for focus cause parent dom is not ready when didMount trigger
     */
    focus: function focus(isDidMount) {
      var _this3 = this;

      if (this.inputRef.current) {
        if (isDidMount) {
          setTimeout(function () {
            _this3.inputRef.current.focus();
          }, 0);
        } else {
          // set it into else, Avoid scrolling when focus
          this.inputRef.current.focus();
        }
      }
    },
    blur: function blur() {
      if (this.inputRef.current) {
        this.inputRef.current.blur();
      }
    },
    handleInputChange: function handleInputChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          composing = _e$target.composing;
      var _searchValue = this.searchValue,
          searchValue = _searchValue === undefined ? '' : _searchValue;

      if (e.isComposing || composing || searchValue === value) {
        this.mirrorSearchValue = value;
        return;
      }
      this.vcTreeSelect.onSearchInputChange(e);
    }
  },

  render: function render() {
    var h = arguments[0];
    var _$props3 = this.$props,
        searchValue = _$props3.searchValue,
        prefixCls = _$props3.prefixCls,
        disabled = _$props3.disabled,
        renderPlaceholder = _$props3.renderPlaceholder,
        open = _$props3.open,
        ariaId = _$props3.ariaId;
    var onSearchInputKeyDown = this.vcTreeSelect.onSearchInputKeyDown,
        handleInputChange = this.handleInputChange,
        mirrorSearchValue = this.mirrorSearchValue;

    return h(
      'span',
      { 'class': prefixCls + '-search__field__wrap' },
      [h('input', (0, _babelHelperVueJsxMergeProps2['default'])([{
        attrs: {
          type: 'text'
        }
      }, {
        directives: [{
          name: 'ant-ref',
          value: this.inputRef
        }, {
          name: 'ant-input'
        }]
      }, {
        on: {
          'input': handleInputChange,
          'keydown': onSearchInputKeyDown
        },
        domProps: {
          'value': searchValue
        },
        attrs: {
          disabled: disabled,

          'aria-label': 'filter select',
          'aria-autocomplete': 'list',
          'aria-controls': open ? ariaId : undefined,
          'aria-multiline': 'false'
        },
        'class': prefixCls + '-search__field' }])), h(
        'span',
        (0, _babelHelperVueJsxMergeProps2['default'])([{
          directives: [{
            name: 'ant-ref',
            value: this.mirrorInputRef
          }]
        }, {
          'class': prefixCls + '-search__field__mirror'
        }]),
        [mirrorSearchValue, '\xA0']
      ), renderPlaceholder && !mirrorSearchValue ? renderPlaceholder() : null]
    );
  }
};

exports['default'] = SearchInput;

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

/***/ "ee8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("92fa");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _toConsumableArray2 = __webpack_require__("9b57");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("7b44");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _util = __webpack_require__("2fd9");

var _BaseSelector = __webpack_require__("94a9");

var _BaseSelector2 = _interopRequireDefault(_BaseSelector);

var _SearchInput = __webpack_require__("e10c");

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _Selection = __webpack_require__("2fbf");

var _Selection2 = _interopRequireDefault(_Selection);

var _propsUtil = __webpack_require__("73c8");

var _getTransitionProps = __webpack_require__("5c25");

var _getTransitionProps2 = _interopRequireDefault(_getTransitionProps);

var _BaseMixin = __webpack_require__("48bb");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TREE_SELECT_EMPTY_VALUE_KEY = 'RC_TREE_SELECT_EMPTY_VALUE_KEY';

var Selector = (0, _BaseSelector2['default'])('multiple');

// export const multipleSelectorContextTypes = {
//   onMultipleSelectorRemove: PropTypes.func.isRequired,
// }

var MultipleSelector = {
  mixins: [_BaseMixin2['default']],
  props: (0, _extends3['default'])({}, (0, _BaseSelector.selectorPropTypes)(), _SearchInput2['default'].props, {
    selectorValueList: _vueTypes2['default'].array,
    disabled: _vueTypes2['default'].bool,
    searchValue: _vueTypes2['default'].string,
    labelInValue: _vueTypes2['default'].bool,
    maxTagCount: _vueTypes2['default'].number,
    maxTagPlaceholder: _vueTypes2['default'].any

    // onChoiceAnimationLeave: PropTypes.func,
  }),
  inject: {
    vcTreeSelect: { 'default': function _default() {
        return {};
      } }
  },
  created: function created() {
    this.inputRef = (0, _util.createRef)();
  },

  methods: {
    onPlaceholderClick: function onPlaceholderClick() {
      this.inputRef.current.focus();
    },
    focus: function focus() {
      this.inputRef.current.focus();
    },
    blur: function blur() {
      this.inputRef.current.blur();
    },
    _renderPlaceholder: function _renderPlaceholder() {
      var h = this.$createElement;
      var _$props = this.$props,
          prefixCls = _$props.prefixCls,
          placeholder = _$props.placeholder,
          searchPlaceholder = _$props.searchPlaceholder,
          searchValue = _$props.searchValue,
          selectorValueList = _$props.selectorValueList;


      var currentPlaceholder = placeholder || searchPlaceholder;

      if (!currentPlaceholder) return null;

      var hidden = searchValue || selectorValueList.length;

      // [Legacy] Not remove the placeholder
      return h(
        'span',
        {
          style: {
            display: hidden ? 'none' : 'block'
          },
          on: {
            'click': this.onPlaceholderClick
          },

          'class': prefixCls + '-search__field__placeholder'
        },
        [currentPlaceholder]
      );
    },
    onChoiceAnimationLeave: function onChoiceAnimationLeave() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.__emit.apply(this, ['choiceAnimationLeave'].concat((0, _toConsumableArray3['default'])(args)));
    },
    renderSelection: function renderSelection() {
      var _this = this;

      var h = this.$createElement;
      var _$props2 = this.$props,
          selectorValueList = _$props2.selectorValueList,
          choiceTransitionName = _$props2.choiceTransitionName,
          prefixCls = _$props2.prefixCls,
          labelInValue = _$props2.labelInValue,
          maxTagCount = _$props2.maxTagCount;
      var onMultipleSelectorRemove = this.vcTreeSelect.onMultipleSelectorRemove,
          $slots = this.$slots;

      var listeners = (0, _propsUtil.getListeners)(this);
      // Check if `maxTagCount` is set
      var myValueList = selectorValueList;
      if (maxTagCount >= 0) {
        myValueList = selectorValueList.slice(0, maxTagCount);
      }
      // Selector node list
      var selectedValueNodes = myValueList.map(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        return h(
          _Selection2['default'],
          (0, _babelHelperVueJsxMergeProps2['default'])([{
            props: (0, _extends3['default'])({}, _this.$props, {
              label: label,
              value: value
            }),
            on: (0, _extends3['default'])({}, listeners, { remove: onMultipleSelectorRemove })
          }, {
            key: value || TREE_SELECT_EMPTY_VALUE_KEY
          }]),
          [$slots['default']]
        );
      });

      // Rest node count
      if (maxTagCount >= 0 && maxTagCount < selectorValueList.length) {
        var content = '+ ' + (selectorValueList.length - maxTagCount) + ' ...';
        var maxTagPlaceholder = (0, _propsUtil.getComponentFromProp)(this, 'maxTagPlaceholder', {}, false);
        if (typeof maxTagPlaceholder === 'string') {
          content = maxTagPlaceholder;
        } else if (typeof maxTagPlaceholder === 'function') {
          var restValueList = selectorValueList.slice(maxTagCount);
          content = maxTagPlaceholder(labelInValue ? restValueList : restValueList.map(function (_ref2) {
            var value = _ref2.value;
            return value;
          }));
        }

        var restNodeSelect = h(
          _Selection2['default'],
          (0, _babelHelperVueJsxMergeProps2['default'])([{
            props: (0, _extends3['default'])({}, this.$props, {
              label: content,
              value: null
            }),
            on: listeners
          }, {
            key: 'rc-tree-select-internal-max-tag-counter'
          }]),
          [$slots['default']]
        );

        selectedValueNodes.push(restNodeSelect);
      }

      selectedValueNodes.push(h(
        'li',
        { 'class': prefixCls + '-search ' + prefixCls + '-search--inline', key: '__input' },
        [h(
          _SearchInput2['default'],
          {
            props: (0, _extends3['default'])({}, this.$props, {
              needAlign: true
            }),
            on: listeners,
            directives: [{
              name: 'ant-ref',
              value: this.inputRef
            }]
          },
          [$slots['default']]
        )]
      ));
      var className = prefixCls + '-selection__rendered';
      if (choiceTransitionName) {
        var transitionProps = (0, _getTransitionProps2['default'])(choiceTransitionName, {
          tag: 'ul',
          afterLeave: this.onChoiceAnimationLeave
        });
        return h(
          'transition-group',
          (0, _babelHelperVueJsxMergeProps2['default'])([{ 'class': className }, transitionProps]),
          [selectedValueNodes]
        );
      }
      return h(
        'ul',
        { 'class': className, attrs: { role: 'menubar' }
        },
        [selectedValueNodes]
      );
    }
  },

  render: function render() {
    var h = arguments[0];
    var $slots = this.$slots,
        $props = this.$props;

    var listeners = (0, _propsUtil.getListeners)(this);
    var _$props$showArrow = $props.showArrow,
        showArrow = _$props$showArrow === undefined ? false : _$props$showArrow;

    return h(
      Selector,
      {
        props: (0, _extends3['default'])({}, this.$props, {
          showArrow: showArrow,
          tabIndex: -1,
          renderSelection: this.renderSelection,
          renderPlaceholder: this._renderPlaceholder
        }),
        on: listeners
      },
      [$slots['default']]
    );
  }
};

exports['default'] = MultipleSelector;

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

/***/ "faee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("41b2");

var _extends3 = _interopRequireDefault(_extends2);

var _BaseSelector = __webpack_require__("94a9");

var _BaseSelector2 = _interopRequireDefault(_BaseSelector);

var _util = __webpack_require__("2fd9");

var _propsUtil = __webpack_require__("73c8");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Selector = (0, _BaseSelector2['default'])('single');

var SingleSelector = {
  name: 'SingleSelector',
  props: (0, _BaseSelector.selectorPropTypes)(),
  created: function created() {
    this.selectorRef = (0, _util.createRef)();
  },

  methods: {
    focus: function focus() {
      this.selectorRef.current.focus();
    },
    blur: function blur() {
      this.selectorRef.current.blur();
    },
    renderSelection: function renderSelection() {
      var h = this.$createElement;
      var _$props = this.$props,
          selectorValueList = _$props.selectorValueList,
          placeholder = _$props.placeholder,
          prefixCls = _$props.prefixCls;


      var innerNode = void 0;

      if (selectorValueList.length) {
        var _selectorValueList$ = selectorValueList[0],
            label = _selectorValueList$.label,
            value = _selectorValueList$.value;

        innerNode = h(
          'span',
          { key: 'value', attrs: { title: (0, _util.toTitle)(label) },
            'class': prefixCls + '-selection-selected-value' },
          [label || value]
        );
      } else {
        innerNode = h(
          'span',
          { key: 'placeholder', 'class': prefixCls + '-selection__placeholder' },
          [placeholder]
        );
      }

      return h(
        'span',
        { 'class': prefixCls + '-selection__rendered' },
        [innerNode]
      );
    }
  },

  render: function render() {
    var h = arguments[0];
    var _$props$showArrow = this.$props.showArrow,
        showArrow = _$props$showArrow === undefined ? true : _$props$showArrow;

    var props = {
      props: (0, _extends3['default'])({}, (0, _propsUtil.getOptionProps)(this), {
        showArrow: showArrow,
        renderSelection: this.renderSelection
      }),
      on: (0, _propsUtil.getListeners)(this),
      directives: [{
        name: 'ant-ref',
        value: this.selectorRef
      }]
    };
    return h(Selector, props);
  }
};

exports['default'] = SingleSelector;

/***/ })

}]);