<!--
 * @Description: 传入record数据，通过判断record.type，来渲染对应的组件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-19 20:10:31
 -->
<template>
  <component
    v-if="record.options.noFormItem"
    v-bind="getComponentProps"
    :is="componentItem"
  ></component>
  <!-- 可隐藏label -->
  <a-form-item
    v-else
    :label="!record.options.showLabel ? '' : record.label"
    :label-col="
      formConfig.layout === 'horizontal' && record.options.showLabel
        ? formConfig.labelLayout === 'flex'
          ? { style: `width:${formConfig.labelWidth}px` }
          : formConfig.labelCol
        : {}
    "
    :wrapper-col="
      formConfig.layout === 'horizontal' && record.options.showLabel
        ? formConfig.labelLayout === 'flex'
          ? { style: 'width:auto;flex:1' }
          : formConfig.wrapperCol
        : {}
    "
    :style="
      formConfig.layout === 'horizontal' &&
      formConfig.labelLayout === 'flex' &&
      record.options.showLabel
        ? { display: 'flex' }
        : {}
    "
  >
    <span slot="label">
      <a-tooltip>
        <span v-text="record.label"></span>
        <span v-if="record.help" slot="title" v-html="record.help"></span>
        <a-icon
          v-if="record.help"
          class="question-circle"
          type="question-circle-o"
        />
      </a-tooltip>
    </span>
    <component
      :is="componentItem"
      v-bind="getComponentProps"
      ref="inputItem"
      @change="handleChange"
      v-decorator="[
        record.model, // input 的 name
        {
          initialValue: record.options.defaultValue, // 默认值
          valuePropName: record.type === 'switch' ? 'checked' : 'value',
          rules: record.rules // 验证规则
        }
      ]"
    ></component>
  </a-form-item>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import { pluginManager } from "../utils/PluginManager";
const _ = require("lodash/object");
const ComponentArray = pluginManager.getComponents();

export default {
  name: "KFormItem",
  props: {
    // 表单数组
    record: {
      type: Object,
      required: true
    },
    // form-item 宽度配置
    formConfig: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      default: () => ({})
    },
    dynamicData: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /**
     * 计算组件props
     */
    getComponentProps() {
      const record = this.record;

      const componentProps = {
        record,
        ...this.componentOption,
        config: this.config,
        disabled: this.disabled || record.options.disabled,
        parentDisabled: this.disabled || record.options.disabled,
        allowClear: record.options.clearable,
        mode: record.options.multiple ? "multiple" : "",
        style: `width:${record.options.width}`,
        height:
          typeof record.options.height !== "undefined"
            ? record.options.height
            : "",
        dynamicData: this.dynamicData,
        options: !record.options.dynamic
          ? record.options.options
          : this.dynamicData[record.options.dynamicKey]
          ? this.dynamicData[record.options.dynamicKey]
          : []
      };

      if (this.record.type === "textarea") {
        componentProps.autoSize = {
          minRows: record.options.minRows,
          maxRows: record.options.maxRows
        };
      }

      if (this.record.type === "alert") {
        componentProps.message = record.label;
      }

      if (this.record.type === "treeSelect") {
        componentProps.treeData = !record.options.dynamic
          ? record.options.options
          : this.dynamicData[record.options.dynamicKey]
          ? this.dynamicData[record.options.dynamicKey]
          : [];
      }

      if (this.record.type === "number") {
        componentProps.min =
          record.options.min || record.options.min === 0
            ? record.options.min
            : -Infinity;

        componentProps.max =
          record.options.max || record.options.max === 0
            ? record.options.max
            : Infinity;

        componentProps.precision =
          record.options.precision > 50 ||
          (!record.options.precision && record.options.precision !== 0)
            ? null
            : record.options.precision;
      }

      if (this.record.type === "select") {
        componentProps.filterOption = record.options.showSearch
          ? (inputValue, option) => {
              return (
                option.componentOptions.children[0].text
                  .toLowerCase()
                  .indexOf(inputValue.toLowerCase()) >= 0
              );
            }
          : false;
      }

      if (this.record.type === "button") {
        componentProps.onHandleReset = () => this.$emit("handleReset");
      }

      return componentProps;
    },
    /**
     * @description: 输出对应组件
     * @param {*}
     * @return {*} component
     */

    componentItem() {
      return ComponentArray[this.record.type].component;
    },
    componentOption() {
      // 移除相应字段
      const options = _.omit(this.record.options, ["defaultValue", "disabled"]);
      return options;
    }
  },
  methods: {
    validationSubform() {
      // 验证动态表格
      if (this.record.type === "batch") {
        if (!this.$refs.inputItem) return true;
        return this.$refs.inputItem.validationSubform();
      }

      return true;
    },
    handleChange(e) {
      let value = e;
      if (e && e.target) {
        value = e.target.value;
      }
      // 传递change事件
      this.$emit("change", value, this.record.model);
    }
  }
};
</script>
