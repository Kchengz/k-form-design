<template>
  <a-config-provider :locale="locale">
    <div class="form-designer-container-9136076486841527" v-if="loadState">
      <k-header v-if="showHead" :title="title" />
      <!-- 操作区域 start -->
      <operatingArea
        v-if="toolbarsTop"
        :showToolbarsText="showToolbarsText"
        :toolbars="toolbars"
        @handleSave="handleSave"
        @handlePreview="handlePreview"
        @handleOpenImportJsonModal="handleOpenImportJsonModal"
        @handleOpenCodeModal="handleOpenCodeModal"
        @handleOpenJsonModal="handleOpenJsonModal"
        @handleReset="handleReset"
        @handleClose="handleClose"
        @handleUndo="handleUndo"
        @handleRedo="handleRedo"
      >
        <template slot="left-action">
          <slot name="left-action"></slot>
        </template>

        <template slot="right-action">
          <slot name="right-action"></slot>
        </template>
      </operatingArea>
      <!-- 操作区域 end -->
      <div
        class="content"
        :class="{
          'show-head': showHead,
          'toolbars-top': toolbarsTop,
          'show-head-and-toolbars-top': toolbarsTop && showHead
        }"
      >
        <!-- 左侧控件区域 start -->
        <aside class="left">
          <a-collapse
            @change="collapseChange"
            :defaultActiveKey="collapseDefaultActiveKey"
          >
            <!-- 基础控件 start -->
            <a-collapse-panel
              v-for="(item, index) in schemaGroup"
              :header="item.title"
              :key="index"
            >
              <collapseItem
                :list="item.list"
                @generateKey="generateKey"
                @handleListPush="handleListPush"
                @start="handleStart"
              />
            </a-collapse-panel>
            <!-- 基础控件 end -->
          </a-collapse>
        </aside>
        <!-- 左侧控件区域 end -->

        <!-- 中间面板区域 start -->
        <section>
          <!-- 操作区域 start -->
          <operatingArea
            v-if="!toolbarsTop"
            :showToolbarsText="showToolbarsText"
            :toolbars="toolbars"
            @handleSave="handleSave"
            @handlePreview="handlePreview"
            @handleOpenImportJsonModal="handleOpenImportJsonModal"
            @handleOpenCodeModal="handleOpenCodeModal"
            @handleOpenJsonModal="handleOpenJsonModal"
            @handleReset="handleReset"
            @handleClose="handleClose"
            @handleUndo="handleUndo"
            @handleRedo="handleRedo"
          >
            <template slot="left-action">
              <slot name="left-action"></slot>
            </template>

            <template slot="right-action">
              <slot name="right-action"></slot>
            </template>
          </operatingArea>
          <!-- 操作区域 end -->
          <k-form-component-panel
            :class="{ 'no-toolbars-top': !toolbarsTop }"
            :data="data"
            :selectItem="selectItem"
            :noModel="noModel"
            :hideModel="hideModel"
            :startType="startType"
            ref="KFCP"
            @handleSetSelectItem="handleSetSelectItem"
          />
          <!-- 操作区域 start -->
          <k-json-modal ref="jsonModal" />
          <k-code-modal ref="codeModal" />
          <importJsonModal ref="importJsonModal" />
          <previewModal ref="previewModal" />
        </section>
        <!-- 中间面板区域 end -->

        <!-- 右侧控件属性区域 start -->
        <aside class="right">
          <a-tabs
            :activeKey="activeKey"
            @change="changeTab"
            :tabBarStyle="{ margin: 0 }"
          >
            <a-tab-pane :key="1" tab="表单属性设置">
              <formProperties
                :config="data.config"
                :previewOptions="previewOptions"
              />
            </a-tab-pane>
            <a-tab-pane :key="2" tab="控件属性设置">
              <formItemProperties
                class="form-item-properties"
                :selectItem="selectItem"
                :hideModel="hideModel"
              />
            </a-tab-pane>
          </a-tabs>
        </aside>
        <!-- 右侧控件属性区域 end -->
      </div>
      <!-- <k-footer /> -->
    </div>
  </a-config-provider>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 表单设计器
 */
import kHeader from "./module/header";
import operatingArea from "./module/operatingArea";

// import kFooter from "./module/footer";
import kFormComponentPanel from "./module/formComponentPanel";
import kJsonModal from "./module/jsonModal";
import kCodeModal from "./module/codeModal";
import collapseItem from "./module/collapseItem";
import importJsonModal from "./module/importJsonModal";
import previewModal from "../KFormPreview/index.vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { Modal, message } from "ant-design-vue";
import { revoke, nodeSchema } from "../../utils/index";
import formItemProperties from "./module/formItemProperties";
import formProperties from "./module/formProperties";

export default {
  name: "KFormDesign",
  props: {
    title: {
      type: String,
      default: "表单设计器 --by kcz"
    },
    showHead: {
      type: Boolean,
      default: true
    },
    hideResetHint: {
      type: Boolean,
      default: false
    },
    toolbarsTop: {
      type: Boolean,
      default: false
    },
    toolbars: {
      type: Array,
      default: () => [
        "save",
        "preview",
        "importJson",
        "exportJson",
        "exportCode",
        "reset",
        "close",
        "undo",
        "redo"
      ]
    },
    showToolbarsText: {
      type: Boolean,
      default: false
    },
    hideModel: {
      // 隐藏数据字段
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      locale: zhCN,
      loadState: false,
      activeKey: 1,
      updateTime: 0,
      updateRecordTime: 0,
      startType: "",
      noModel: [
        "button",
        "divider",
        "card",
        "grid",
        "tabs",
        "table",
        "alert",
        "text",
        "html"
      ],
      schemaGroup: [],
      data: {
        list: [],
        config: {
          layout: "horizontal",
          labelCol: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 },
          labelWidth: 100,
          labelLayout: "flex",
          wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      },
      previewOptions: {
        width: 850
      },
      selectItem: {
        key: ""
      }
    };
  },
  components: {
    kHeader,
    // kFooter,
    operatingArea,
    collapseItem,
    kJsonModal,
    kCodeModal,
    importJsonModal,
    previewModal,
    kFormComponentPanel,
    formItemProperties,
    formProperties
  },
  watch: {
    data: {
      handler(e) {
        this.$nextTick(() => {
          revoke.push(e);
        });
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    collapseDefaultActiveKey() {
      // 计算当前展开的控件列表
      const defaultActiveKey = window.localStorage.getItem(
        "collapseDefaultActiveKey"
      );
      if (defaultActiveKey) {
        return defaultActiveKey.split(",");
      } else {
        return ["1"];
      }
    }
  },
  methods: {
    generateKey(list, index) {
      // 生成key值
      const key = list[index].type + "_" + new Date().getTime();
      this.$set(list, index, {
        ...list[index],
        key,
        model: key
      });
      if (this.noModel.includes(list[index].type)) {
        // 删除不需要的model属性
        delete list[index].model;
      }
    },
    handleListPush(item) {
      // 双击控件按钮push到list
      // 生成key值
      if (!this.selectItem.key) {
        // 在没有选择表单时，将数据push到this.data.list
        const key = item.type + "_" + new Date().getTime();
        item = {
          ...item,
          key,
          model: key
        };
        if (this.noModel.includes(item.type)) {
          // 删除不需要的model属性
          delete item.model;
        }
        const itemString = JSON.stringify(item);
        const record = JSON.parse(itemString);
        // 删除icon及compoent属性
        delete record.icon;
        delete record.component;
        this.data.list.push(record);
        this.handleSetSelectItem(record);
        return false;
      }
      this.$refs.KFCP.handleCopy(false, item);
    },
    handleOpenJsonModal() {
      // 打开json预览模态框
      this.$refs.jsonModal.jsonData = this.data;
      this.$refs.jsonModal.visible = true;
    },
    handleOpenCodeModal() {
      // 打开代码预览模态框
      this.$refs.codeModal.jsonData = this.data;
      this.$refs.codeModal.visible = true;
    },
    handleOpenImportJsonModal() {
      // 打开json预览模态框
      this.$refs.importJsonModal.jsonData = this.data;
      this.$refs.importJsonModal.handleSetSelectItem = this.handleSetSelectItem;
      this.$refs.importJsonModal.visible = true;
    },
    handlePreview() {
      // 打开预览模态框
      this.$refs.previewModal.jsonData = this.data;
      this.$refs.previewModal.previewWidth = this.previewOptions.width;
      this.$refs.previewModal.visible = true;
    },
    handleReset() {
      // 清空
      if (this.hideResetHint) {
        // 不显示提示直接清空
        this.resetData();
        return;
      }

      Modal.confirm({
        title: "警告",
        content: "是否确认清空内容?",
        okText: "是",
        okType: "danger",
        cancelText: "否",
        onOk: () => {
          this.resetData();
        }
      });
    },
    resetData() {
      this.data = {
        list: [],
        config: {
          layout: "horizontal",
          labelCol: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 },
          labelWidth: 100,
          labelLayout: "flex",
          wrapperCol: { xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 },
          hideRequiredMark: false,
          customStyle: ""
        }
      };
      this.handleSetSelectItem({ key: "" });
      message.success("已清空");
    },
    handleSetSelectItem(record) {
      // 操作间隔不能低于100毫秒
      const newTime = new Date().getTime();
      if (newTime - this.updateTime < 100) {
        return false;
      }

      this.updateTime = newTime;

      // 设置selectItem的值
      this.selectItem = record;

      // 判断是否选中控件，如果选中则弹出属性面板，否则关闭属性面板
      if (record.key) {
        this.startType = record.type;
        this.changeTab(2);
      } else {
        this.changeTab(1);
      }
    },
    /**
     * @description: 切换属性设置面板
     * @param {*}
     * @return {*}
     */

    changeTab(e) {
      this.activeKey = e;
    },
    /**
     * @Author: kcz
     * @description: 遍历json结构，获取所有字段
     * @param {*}
     * @return {*} Array
     */
    getFieldSchema() {
      const fields = [];
      const traverse = array => {
        array.forEach(element => {
          if (element.type === "grid" || element.type === "tabs") {
            // 栅格布局
            element.columns.forEach(item => {
              traverse(item.list);
            });
          } else if (element.type === "card") {
            // 卡片布局
            traverse(element.list);
          } else if (element.type === "batch") {
            // 动态表格内复制
            traverse(element.list);
          } else if (element.type === "table") {
            // 表格布局
            element.trs.forEach(item => {
              item.tds.forEach(val => {
                traverse(val.list);
              });
            });
          } else {
            if (element.model) {
              fields.push(element);
            }
          }
        });
      };
      traverse(this.data.list);
      return fields;
    },
    handleSetData(data) {
      // 用于父组件赋值
      try {
        if (typeof data !== "object") {
          return false;
        } else {
          this.data = data;
          // 导入json数据后，需要清除已选择key
          this.handleSetSelectItem({ key: "" });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    collapseChange(val) {
      // 点击collapse时，保存当前collapse状态
      window.localStorage.setItem("collapseDefaultActiveKey", val);
    },
    handleStart(type) {
      this.startType = type;
    },

    /**
     * @description: 撤销
     * @param {*}
     * @return {*}
     */
    handleUndo() {
      const record = revoke.undo();
      if (!record) {
        return false;
      }
      this.data = record;

      this.handleSetSelectItem({ key: "" });
    },

    /**
     * @description: 重做
     * @param {*}
     * @return {*}
     */
    handleRedo() {
      const record = revoke.redo();
      if (!record) {
        return false;
      }
      this.data = record;
    },

    handleSave() {
      // 保存函数
      this.$emit("save", JSON.stringify(this.data));
    },
    getValue() {
      // 获取数据
      return this.data;
    },
    handleClose() {
      this.$emit("close");
    }
  },
  created() {
    this.loadState = true;
    nodeSchema.addComputed(this.schemaGroup);
  }
};
</script>
