<template>
  <div class="form-designer-container-9136076486841527">
    <k-header :title="title" v-if="showHead" />
    <div class="content" :class="{ 'show-head': showHead }">
      <!-- 左侧控件区域 start -->
      <aside class="left">
        <a-collapse :defaultActiveKey="['1', '2', '4']">
          <!-- 基础控件 start -->
          <a-collapse-panel header="基础控件" key="1">
            <draggable
              tag="ul"
              :value="basicsList"
              v-bind="{
                group: { name: 'form-draggable', pull: 'clone', put: false },
                sort: false,
                animation: 180,
                ghostClass: 'moving'
              }"
            >
              <li
                v-for="(val, index) in basicsList"
                :key="index"
                @dragstart="generateKey(basicsList, index)"
                @click="handleListPush(val)"
              >
                {{ val.name }}
              </li>
            </draggable>
          </a-collapse-panel>

          <!-- 基础控件 end -->
          <!-- 高级控件 start -->
          <!-- <div class="title left-title">高级控件</div> -->
          <a-collapse-panel header="高级控件" key="2">
            <draggable
              tag="ul"
              :value="highList"
              v-bind="{
                group: { name: 'form-draggable', pull: 'clone', put: false },
                sort: false,
                animation: 180,
                ghostClass: 'moving'
              }"
            >
              <li
                v-for="(val, index) in highList"
                :key="index"
                @dragstart="generateKey(highList, index)"
                @click="handleListPush(val)"
              >
                {{ val.name }}
              </li>
            </draggable>
          </a-collapse-panel>

          <!-- 高级控件 end -->
          <!-- 自定义控件 start -->
          <!-- <div
            class="title left-title"
            
            v-text="customComponents.title"
          ></div> -->
          <a-collapse-panel
            v-if="customComponents.list.length > 0"
            :header="customComponents.title"
            key="3"
          >
            <draggable
              tag="ul"
              :value="customComponents.list"
              v-bind="{
                group: { name: 'form-draggable', pull: 'clone', put: false },
                sort: false,
                animation: 180,
                ghostClass: 'moving'
              }"
            >
              <li
                v-for="(val, index) in customComponents.list"
                :key="index"
                @dragstart="generateKey(customComponents.list, index)"
                @click="handleListPush(val)"
              >
                {{ val.name }}
              </li>
            </draggable>
          </a-collapse-panel>

          <!-- 自定义控件 end -->

          <!-- 布局控件 start -->
          <!-- <div class="title left-title">布局控件</div> -->
          <a-collapse-panel header="布局控件" key="4">
            <draggable
              tag="ul"
              :value="layoutList"
              v-bind="{
                group: { name: 'form-draggable', pull: 'clone', put: false },
                sort: false,
                animation: 180,
                ghostClass: 'moving'
              }"
            >
              <li
                v-for="(val, index) in layoutList"
                :key="index"
                @dragstart="generateKey(layoutList, index)"
                @click="handleListPush(val)"
                v-text="val.name"
              ></li>
            </draggable>
          </a-collapse-panel>
          <!-- 布局控件 end -->
        </a-collapse>
      </aside>
      <!-- 左侧控件区域 end -->

      <!-- 中间面板区域 start -->
      <section>
        <div class="title content-title">
          <a
            v-if="showBtnList.includes('save')"
            size="small"
            @click="handleSave"
          >
            <a-icon type="save" />保存
          </a>
          <a
            v-if="showBtnList.includes('preview')"
            size="small"
            @click="handleOpenPreviewModal"
          >
            <a-icon type="eye" />预览
          </a>
          <a
            v-if="showBtnList.includes('importJson')"
            size="small"
            @click="handleOpenImportJsonModal"
          >
            <a-icon type="to-top" />导入JSON
          </a>
          <a
            v-if="showBtnList.includes('exportJson')"
            size="small"
            @click="handleOpenJsonModal"
          >
            <a-icon type="file" />生成JSON
          </a>
          <a
            v-if="showBtnList.includes('exportCode')"
            size="small"
            @click="handleOpenCodeModal"
          >
            <a-icon type="code" />生成代码
          </a>
          <a
            v-if="showBtnList.includes('reset')"
            size="small"
            @click="handleReset"
          >
            <a-icon type="delete" />清空
          </a>
          <a
            v-if="showBtnList.includes('close')"
            size="small"
            style="color:#f22;"
            @click="handleClose"
          >
            <a-icon type="close" />关闭
          </a>
        </div>
        <k-form-component-panel
          :data="data"
          :selectItem="selectItem"
          :noModel="noModel"
          ref="KFCP"
          @handleSetSelectItem="handleSetSelectItem"
        />
        <k-json-modal ref="jsonModal" />
        <k-code-modal ref="codeModal" />
        <importJsonModal ref="importJsonModal" />
        <previewModal ref="previewModal" />
      </section>
      <!-- 中间面板区域 end -->

      <!-- 右侧控件属性区域 start -->
      <aside class="right">
        <a-tabs style="height:100%">
          <a-tab-pane style="height:100%" tab=" 控件属性设置" key="1">
            <formItemProperties :selectItem="selectItem" />
          </a-tab-pane>
          <a-tab-pane tab="表单属性设置" key="2" forceRender>
            <formProperties
              :config="data.config"
              :previewOptions="previewOptions"
            />
          </a-tab-pane>
        </a-tabs>
      </aside>
      <!-- 右侧控件属性区域 end -->
    </div>
    <k-footer />
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 表单设计器
 */
import kHeader from "./module/header";
import kFooter from "./module/footer";
import kFormComponentPanel from "./module/formComponentPanel";
import kJsonModal from "./module/jsonModal";
import kCodeModal from "./module/codeModal";
import importJsonModal from "./module/importJsonModal";
import previewModal from "../KFormPreview/index.vue";
import draggable from "vuedraggable";
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
      basicsList,
      layoutList,
      highList,
      customComponents,
      updateTime: 0,
      updateRecordTime: 0,
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
    kFooter,
    kJsonModal,
    kCodeModal,
    importJsonModal,
    previewModal,
    kFormComponentPanel,
    formItemProperties,
    formProperties,
    draggable
  },
  // computed: {
  //   highList() {
  //     highList[0].options.action = this.uploadFile;
  //     highList[1].options.action = this.uploadImage;
  //     return highList;
  //   }
  // },
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
      this.selectItem = record;
      // 设置selectItem的值
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
