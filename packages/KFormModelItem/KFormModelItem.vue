<!--
 * @Description: 传入record数据，通过判断record.type，来渲染对应的组件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-19 13:40:21
 -->
<template>
  <component
    v-if="record.options.noFormItem"
    v-bind="getComponentProps"
    :is="componentItem"
  ></component>
  <a-form-model-item
    v-else
    :prop="`domains.${record.model}`"
    :rules="record.rules"
  >
    <component
      :is="componentItem"
      v-bind="getComponentProps"
      ref="inputItem"
      @change="handleChange"
    ></component>
  </a-form-model-item>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */

import { pluginManager } from "../utils/getPluginManager";
const _ = require("lodash/object");

const ComponentArray = pluginManager.getComponents();

export default {
  name: "KFormModelItem",
  props: [
    "record",
    "domains",
    "index",
    "value",
    "parentDisabled",
    "dynamicData",
    "config"
  ],
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
        style: record.options.width && `width:${record.options.width}`,
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

      return componentProps;
    },
    componentItem() {
      return ComponentArray[this.record.type].component;
    },
    componentOption() {
      return _.omit(this.record.options, ["defaultValue", "disabled"]);
    }
  },
  methods: {
    handleChange(e) {
      let value = e;
      if (e.target) {
        value = e.target.value;
      }
      this.$emit("input", value);
    }
  }
};
</script>
