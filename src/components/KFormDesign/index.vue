<template>
  <div class="form-designer-container" :kcz="record_data">
    <k-header />
    <div class="content">
      <!-- 左侧控件区域 start -->
      <aside class="left">
        <div class="title">基础控件</div>
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
            v-text="val.name"
          ></li>
        </draggable>
        <div class="title">布局控件</div>
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
            v-text="val.name"
          ></li>
        </draggable>
      </aside>
      <!-- 左侧控件区域 end -->

      <!-- 中间面板区域 start -->
      <section>
        <div class="title content-title">
          <a size="small" @click="handleSave"> <a-icon type="save" /> 保存 </a>
          <a size="small" @click="handleOpenPreviewModal">
            <a-icon type="eye" /> 预览
          </a>
          <a size="small" @click="handleOpenImportJsonModal">
            <a-icon type="to-top" /> 导入JSON
          </a>
          <a size="small" @click="handleOpenJsonModal">
            <a-icon type="file" /> 生成JSON
          </a>
          <a size="small" @click="handleOpenCodeModal">
            <a-icon type="file" /> 生成代码
          </a>
          <a size="small" @click="handleReset">
            <a-icon type="delete" /> 清空
          </a>
        </div>
        <k-form-component-panel
          :data="data"
          :selectItem="selectItem"
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
          <a-tab-pane style="height:100%" tab="控件属性" key="1">
            <formItemProperties :selectItem="selectItem" />
          </a-tab-pane>
          <a-tab-pane tab="表单属性" key="2" forceRender
            ><formProperties
              :config="data.config"
              :previewOptions="previewOptions"
          /></a-tab-pane>
        </a-tabs>
        <!-- <div class="title">控件属性</div>
        <formItemProperties :selectItem="selectItem" /> -->
      </aside>
      <!-- 右侧控件属性区域 end -->
    </div>
    <k-footer />
  </div>
</template>
<script>
import kHeader from "./module/header";
import kFooter from "./module/footer";
import kFormComponentPanel from "./module/formComponentPanel";
import kJsonModal from "./module/jsonModal";
import kCodeModal from "./module/codeModal";
import importJsonModal from "./module/importJsonModal";
import previewModal from "./module/previewModal";
import draggable from "vuedraggable";
import { basicsList, layoutList } from "./config/formItemsConfig";
import formItemProperties from "./module/formItemProperties";
import formProperties from "./module/formProperties";
export default {
  name: "formDesign",
  data() {
    return {
      basicsList,
      layoutList,
      updateTime: 0,
      updateRecordTime: 0,
      data: {
        list: [],
        config: {
          layout: "horizontal",
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          width: "100%",
          marginTop: "0px",
          marginRight: "0px",
          marginBottom: "0px",
          marginLeft: "0px"
        }
      },
      recordData: [],
      oldRecord: "",
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
  computed: {
    record_data() {
      this.handleRecord();
      return JSON.stringify(this.data);
    }
  },
  created() {
    this.oldRecord = JSON.stringify(this.data);
  },
  methods: {
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
      this.data.list = [];
      this.handleSetSelectItem({ key: "" });
    },
    handleRecord() {
      // 用户修改时记录json
      // 操作间隔不能低于200毫秒
      let newTime = new Date().getTime();
      if (newTime - this.updateRecordTime < 70) {
        return false;
      } else {
        this.updateRecordTime = newTime;
        if (this.recordData.length < 24) {
          this.recordData.push(this.oldRecord);
        } else {
          this.recordData = this.recordData.filter(
            (item, index) => index !== 0
          );
          this.recordData.push(this.oldRecord);
        }
      }
      setTimeout(() => {
        this.oldRecord = JSON.stringify(this.data);
      }, 50);
    },
    handleSetSelectItem(record) {
      // 操作间隔不能低于200毫秒
      let newTime = new Date().getTime();
      if (newTime - this.updateTime < 100) {
        return false;
      }
      this.updateTime = newTime;
      this.selectItem = record;
      // 设置selectItem的值
      // console.log(record);
    },
    handleSetData(data) {
      // 用于父组件赋值
      this.data = data;
    },
    handleSave() {
      // 保存函数
      this.$emit("handleSave", JSON.stringify(this.data));
    },
    handleBack(e) {
      // 撤销操作
      var keyCode = e.keyCode || e.which || e.charCode;
      var ctrlKey = e.ctrlKey || e.metaKey;
      // 按下ctrl加z时
      if (ctrlKey && keyCode == 90) {
        if (this.recordData.length === 0) {
          return false;
        }
        let newTime = new Date().getTime();
        if (newTime - this.updateRecordTime < 70) {
          return false;
        }
        this.updateRecordTime = newTime;
        this.data = JSON.parse(this.recordData.pop());
      }
      return false;
    }
  },
  mounted() {
    // 监听当按下按键时
    window.addEventListener("keydown", this.handleBack, true);
  },
  destroyed() {
    // 取消监听
    window.removeEventListener("keydown", this.handleBack, true);
  }
};
</script>
<style lang="less">
@import "../../styles/formDesign.less";
</style>
