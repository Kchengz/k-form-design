<template>
  <div class="properties-centent kk-checkbox">
    <div class="properties-body">
      <a-form>
        <a-form-item label="表单布局">
          <Radio buttonStyle="solid" v-model="config.layout">
            <RadioButton value="horizontal">水平</RadioButton>
            <RadioButton value="vertical">垂直</RadioButton>
            <RadioButton value="inline">行内</RadioButton>
          </Radio>
        </a-form-item>
        <a-form-item label="标签布局（水平布局生效）">
          <Radio buttonStyle="solid" v-model="config.labelLayout">
            <RadioButton value="flex">固定</RadioButton>
            <RadioButton value="Grid">栅格</RadioButton>
          </Radio>
        </a-form-item>
        <a-form-item
          v-show="config.labelLayout === 'flex'"
          label="标签宽度（px）"
        >
          <InputNumber v-model="config.labelWidth" />
        </a-form-item>
        <a-form-item label="labelCol" v-show="config.labelLayout !== 'flex'">
          <div class="change-col-box">
            <Slider
              id="test"
              :max="24"
              :min="0"
              v-model="config.labelCol.xs"
              @change="handleChangeCol"
            />
            <div>
              <label>xs:</label>
              <InputNumber v-model="config.labelCol.xs" />
            </div>
            <div>
              <label>sm:</label>
              <InputNumber v-model="config.labelCol.sm" />
            </div>
            <div>
              <label>md:</label>
              <InputNumber v-model="config.labelCol.md" />
            </div>
            <div>
              <label>lg:</label>
              <InputNumber v-model="config.labelCol.lg" />
            </div>
            <div>
              <label>xl:</label>
              <InputNumber v-model="config.labelCol.xl" />
            </div>
            <div>
              <label>xxl:</label>
              <InputNumber v-model="config.labelCol.xxl" />
            </div>
          </div>
        </a-form-item>
        <a-form-item label="wrapperCol" v-show="config.labelLayout !== 'flex'">
          <div class="change-col-box">
            <div>
              <label>xs:</label>
              <InputNumber v-model="config.wrapperCol.xs" />
            </div>
            <div>
              <label>sm:</label>
              <InputNumber v-model="config.wrapperCol.sm" />
            </div>
            <div>
              <label>md:</label>
              <InputNumber v-model="config.wrapperCol.md" />
            </div>
            <div>
              <label>lg:</label>
              <InputNumber v-model="config.wrapperCol.lg" />
            </div>
            <div>
              <label>xl:</label>
              <InputNumber v-model="config.wrapperCol.xl" />
            </div>
            <div>
              <label>xxl:</label>
              <InputNumber v-model="config.wrapperCol.xxl" />
            </div>
          </div>
        </a-form-item>
        <a-form-item label="预览模态框宽度">
          <InputNumber style="width:100%;" v-model="previewOptions.width" />
        </a-form-item>
        <a-form-item label="表单CSS">
          <Textarea v-model="config.customStyle" />
        </a-form-item>
        <a-form-item label="表单属性">
          <kCheckbox v-model="config.hideRequiredMark" label="隐藏必选标记" />
        </a-form-item>
        <a-form-item label="提示">
          实际预览效果请点击预览查看
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 表单属性设置面板组件
 */
import kCheckbox from "../../KCheckbox/index.vue";
import { pluginManager } from "../../utils/getPluginManager";
const InputNumber = pluginManager.getComponent("number").component;
const Radio = pluginManager.getComponent("radio").component;
const RadioButton = pluginManager.getComponent("radioButton").component;
const Textarea = pluginManager.getComponent("textarea").component;
const Slider = pluginManager.getComponent("aSlider").component;

export default {
  name: "formProperties",
  components: {
    kCheckbox,
    InputNumber,
    Radio,
    RadioButton,
    Textarea,
    Slider
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    previewOptions: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleChangeCol(e) {
      this.config.labelCol.xs = this.config.labelCol.sm = this.config.labelCol.md = this.config.labelCol.lg = this.config.labelCol.xl = this.config.labelCol.xxl = e;

      this.config.wrapperCol.xs = this.config.wrapperCol.sm = this.config.wrapperCol.md = this.config.wrapperCol.lg = this.config.wrapperCol.xl = this.config.wrapperCol.xxl =
        24 - e;
    }
  }
};
</script>
