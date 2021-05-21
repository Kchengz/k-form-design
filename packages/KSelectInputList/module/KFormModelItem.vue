<!--
 * @Description: 传入record数据，通过判断record.type，来渲染对应的组件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2021-05-15 16:32:09
 -->
<template>
  <a-form-model-item
    v-if="
      [
        'input',
        'textarea',
        'date',
        'time',
        'number',
        'radio',
        'checkbox',
        'select',
        'rate',
        'switch',
        'slider',
        'uploadImg',
        'uploadFile',
        'cascader',
        'treeSelect'
      ].includes(record.type)
    "
    :prop="`domains.${record.model}`"
    :rules="record.rules"
  >
    <!-- 多行文本 -->
    <a-textarea
      :style="`width:${record.options.width}`"
      v-if="record.type === 'textarea'"
      :autoSize="{
        minRows: record.options.minRows,
        maxRows: record.options.maxRows
      }"
      :disabled="record.options.disabled || parentDisabled"
      :placeholder="record.options.placeholder"
      :allowClear="record.options.clearable"
      :maxLength="record.options.maxLength"
      :rows="4"
      :value="value"
      @change="handleChange($event.target.value)"
    />

    <!-- 单选框 -->
    <a-radio-group
      v-else-if="record.type === 'radio'"
      :options="
        !record.options.dynamic
          ? record.options.options
          : dynamicData[record.options.dynamicKey]
          ? dynamicData[record.options.dynamicKey]
          : []
      "
      :disabled="record.options.disabled || parentDisabled"
      :placeholder="record.options.placeholder"
      :value="value"
      :checked="value"
      @change="handleChange($event.target.value)"
    />

    <!-- 多选框 -->
    <a-checkbox-group
      v-else-if="record.type === 'checkbox'"
      :options="
        !record.options.dynamic
          ? record.options.options
          : dynamicData[record.options.dynamicKey]
          ? dynamicData[record.options.dynamicKey]
          : []
      "
      :disabled="record.options.disabled || parentDisabled"
      :placeholder="record.options.placeholder"
      :value="value"
      @change="handleChange"
    />

    <!-- 滑块 -->
    <div
      v-else-if="record.type === 'slider'"
      :style="`width:${record.options.width}`"
      class="slider-box"
    >
      <div class="slider">
        <a-slider
          :disabled="record.options.disabled || parentDisabled"
          :min="record.options.min"
          :max="record.options.max"
          :step="record.options.step"
          :value="value"
          @change="handleChange"
        />
      </div>
      <div class="number" v-if="record.options.showInput">
        <a-input-number
          style="width:100%"
          :disabled="record.options.disabled || parentDisabled"
          :min="record.options.min"
          :max="record.options.max"
          :step="record.options.step"
          :value="value"
          @change="handleChange"
        />
      </div>
    </div>

    <component
      v-else
      :style="
        `width:${
          record.options.width !== '100%' ? record.options.width : '120px'
        }`
      "
      v-bind="componentOption"
      :min="
        record.options.min || record.options.min === 0
          ? record.options.min
          : -Infinity
      "
      :max="
        record.options.max || record.options.max === 0
          ? record.options.max
          : Infinity
      "
      :count="record.options.max"
      :precision="
        record.options.precision > 50 ||
        (!record.options.precision && record.options.precision !== 0)
          ? null
          : record.options.precision
      "
      :record="record"
      :config="config"
      :disabled="record.options.disabled || parentDisabled"
      :parentDisabled="record.options.disabled || parentDisabled"
      :allowClear="record.options.clearable"
      :dynamicData="dynamicData"
      :filterOption="
        record.options.showSearch
          ? (inputValue, option) => {
              return (
                option.componentOptions.children[0].text
                  .toLowerCase()
                  .indexOf(inputValue.toLowerCase()) >= 0
              );
            }
          : false
      "
      :treeData="
        !record.options.dynamic
          ? record.options.options
          : dynamicData[record.options.dynamicKey]
          ? dynamicData[record.options.dynamicKey]
          : []
      "
      :options="
        !record.options.dynamic
          ? record.options.options
          : dynamicData[record.options.dynamicKey]
          ? dynamicData[record.options.dynamicKey]
          : []
      "
      :mode="record.options.multiple ? 'multiple' : ''"
      :checked="value"
      :value="value"
      @change="handleChange($event)"
      :is="componentItem"
    ></component>
  </a-form-model-item>
  <!-- 文本 -->
  <a-form-model-item v-else-if="record.type === 'text'">
    <div :style="{ textAlign: record.options.textAlign }">
      <label
        :class="{ 'ant-form-item-required': record.options.showRequiredMark }"
        :style="{
          fontFamily: record.options.fontFamily,
          fontSize: record.options.fontSize,
          color: record.options.color
        }"
        v-text="record.label"
      ></label>
    </div>
  </a-form-model-item>
  <!-- html -->
  <div
    v-else-if="record.type === 'html'"
    v-html="record.options.defaultValue"
  ></div>

  <div v-else>
    <!-- 空 -->
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
// import moment from "moment";

import UploadFile from "../../UploadFile";
import UploadImg from "../../UploadImg";
import KDatePicker from "../../KDatePicker";
import KTimePicker from "../../KTimePicker";
import ComponentArray from "../../core/components_use";
const _ = require("lodash/object");

export default {
  name: "KFormItem",
  props: [
    "record",
    "domains",
    "index",
    "value",
    "parentDisabled",
    "dynamicData",
    "config"
  ],
  components: {
    UploadImg,
    UploadFile,
    KDatePicker,
    KTimePicker
  },
  computed: {
    componentItem() {
      return ComponentArray[this.record.type];
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
<style lang="less" scoped>
.slider-box {
  display: flex;
  > .slider {
    flex: 1;
    margin-right: 16px;
  }
  > .number {
    width: 70px;
  }
}
</style>
