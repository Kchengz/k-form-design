((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[10],{

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