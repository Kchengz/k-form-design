<template>
  <a-locale-provider :locale="locale">
    <div class="form-designer-container-9136076486841527">
      <k-header :title="title" v-if="showHead" />
      <div class="content" :class="{ 'show-head': showHead }">
        <!-- 左侧控件区域 start -->
        <aside class="left">
          <a-collapse
            @change="collapseChange"
            :defaultActiveKey="collapseDefaultActiveKey"
          >
            <!-- 基础控件 start -->
            <a-collapse-panel header="基础控件" key="1">
              <collapseItem
                :list="basicsList"
                @generateKey="generateKey"
                @handleListPush="handleListPush"
              />
            </a-collapse-panel>
            <!-- 基础控件 end -->
            <!-- 高级控件 start -->
            <a-collapse-panel header="高级控件" key="2">
              <collapseItem
                :list="highList"
                @generateKey="generateKey"
                @handleListPush="handleListPush"
              />
            </a-collapse-panel>

            <!-- 高级控件 end -->
            <!-- 自定义控件 start -->
            <a-collapse-panel
              v-if="customComponents.list.length > 0"
              :header="customComponents.title"
              key="3"
            >
              <collapseItem
                :list="customComponents.list"
                @generateKey="generateKey"
                @handleListPush="handleListPush"
              />
            </a-collapse-panel>
            <!-- 自定义控件 end -->

            <!-- 布局控件 start -->
            <a-collapse-panel header="布局控件" key="4">
              <collapseItem
                :list="layoutList"
                @generateKey="generateKey"
                @handleListPush="handleListPush"
              />
            </a-collapse-panel>
            <!-- 布局控件 end -->
          </a-collapse>
        </aside>
        <!-- 左侧控件区域 end -->

        <!-- 中间面板区域 start -->
        <section>
          <div class="title content-title">
            <!-- 头部操作按钮区域 start -->
            <!-- 操作左侧区域 start -->
            <div class="left-btn-box">
              <a-tooltip title="保存">
                <a v-if="showBtnList.includes('save')" @click="handleSave">
                  <a-icon type="save" />
                </a>
              </a-tooltip>

              <a-tooltip title="预览">
                <a
                  v-if="showBtnList.includes('preview')"
                  @click="handleOpenPreviewModal"
                >
                  <a-icon type="chrome" />
                </a>
              </a-tooltip>

              <a-tooltip title="导入">
                <a
                  v-if="showBtnList.includes('importJson')"
                  @click="handleOpenImportJsonModal"
                >
                  <a-icon type="upload" />
                </a>
              </a-tooltip>

              <a-tooltip title="生成JSON">
                <a
                  v-if="showBtnList.includes('exportJson')"
                  @click="handleOpenJsonModal"
                >
                  <a-icon type="credit-card" />
                </a>
              </a-tooltip>

              <a-tooltip title="生成代码">
                <a
                  v-if="showBtnList.includes('exportCode')"
                  @click="handleOpenCodeModal"
                >
                  <a-icon type="code" />
                </a>
              </a-tooltip>

              <a-tooltip title="清空">
                <a v-if="showBtnList.includes('reset')" @click="handleReset">
                  <a-icon type="delete" />
                </a>
              </a-tooltip>
              <slot name="left-action"></slot>
            </div>
            <!-- 操作左侧区域 end -->

            <!-- 操作右侧区域 start -->
            <div class="right-btn-box">
              <slot name="right-action"></slot>

              <a-tooltip title="关闭">
                <a v-if="showBtnList.includes('close')" @click="handleClose">
                  <a-icon type="close" />
                </a>
              </a-tooltip>
              <!-- 按钮插槽 -->
            </div>
            <!-- 操作右侧区域 end -->

            <!-- 头部操作按钮区域 end -->
          </div>
          <!-- 操作区域 start -->
          <k-form-component-panel
            :data="data"
            :selectItem="selectItem"
            :noModel="noModel"
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
          <!-- <a-tabs style="height:100%">
          <a-tab-pane style="height:100%" tab=" 控件属性设置" key="1">
          </a-tab-pane>
          <a-tab-pane tab="表单属性设置" key="2" forceRender> </a-tab-pane>
        </a-tabs> -->
          <formProperties
            :config="data.config"
            :previewOptions="previewOptions"
          />
          <formItemProperties
            :class="{ 'show-properties': showPropertie }"
            class="form-item-properties"
            :selectItem="selectItem"
            @handleHide="showPropertie = false"
          />
        </aside>
        <!-- 右侧控件属性区域 end -->
      </div>
      <!-- <k-footer /> -->
    </div>
  </a-locale-provider>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 表单设计器
 */
import kHeader from "./module/header";
// import kFooter from "./module/footer";
import kFormComponentPanel from "./module/formComponentPanel";
import kJsonModal from "./module/jsonModal";
import kCodeModal from "./module/codeModal";
import collapseItem from "./module/collapseItem";
import importJsonModal from "./module/importJsonModal";
import previewModal from "../KFormPreview/index.vue";
// import draggable from "vuedraggable";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import {
  basicsList,
  highList,
  layoutList,
  customComponents
} from "./config/formItemsConfig";
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
    showBtnList: {
      type: Array,
      default: () => [
        "save",
        "preview",
        "importJson",
        "exportJson",
        "exportCode",
        "reset",
        "close"
      ]
    }
  },
  data() {
    return {
      locale: zhCN,
      basicsList,
      layoutList,
      highList,
      customComponents,
      updateTime: 0,
      updateRecordTime: 0,
      showPropertie: false,
      noModel: [
        "button",
        "divider",
        "card",
        "grid",
        "table",
        "alert",
        "text",
        "html"
      ],
      data: {
        list: [],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
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
    collapseItem,
    kJsonModal,
    kCodeModal,
    importJsonModal,
    previewModal,
    kFormComponentPanel,
    formItemProperties,
    formProperties
    // draggable
  },
  computed: {
    collapseDefaultActiveKey() {
      let defaultActiveKey = window.localStorage.getItem(
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
      this.$refs.importJsonModal.visible = true;
    },
    handleOpenPreviewModal() {
      // 打开预览模态框
      this.$refs.previewModal.jsonData = this.data;
      this.$refs.previewModal.previewWidth = this.previewOptions.width;
      this.$refs.previewModal.visible = true;
    },
    handleReset() {
      // 清空
      try {
        this.data.list = [];
        this.handleSetSelectItem({ key: "" });
        this.$message.success("已清空");
        return true;
      } catch {
        return false;
      }
    },
    handleSetSelectItem(record) {
      // 操作间隔不能低于100毫秒
      let newTime = new Date().getTime();
      if (newTime - this.updateTime < 100) {
        return false;
      }

      this.updateTime = newTime;

      // 设置selectItem的值
      this.selectItem = record;

      // 判断是否选中控件，如果选中则弹出属性面板，否则关闭属性面板
      if (record.key) {
        this.showPropertie = true;
      } else {
        this.showPropertie = false;
      }
    },
    handleSetData(data) {
      // 用于父组件赋值
      try {
        if (typeof data !== "object") {
          return false;
        } else {
          this.data = data;
        }
        return true;
      } catch {
        return false;
      }
    },
    collapseChange(val) {
      // 点击collapse时，保存当前collapse状态
      window.localStorage.setItem("collapseDefaultActiveKey", val);
    },
    handleSave() {
      // 保存函数
      this.$emit("save", JSON.stringify(this.data));
    },
    handleClose() {
      this.$emit("close");
    }
  }
};
</script>
