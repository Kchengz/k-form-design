<!--
 * @Description: 传入record数据，通过判断record.type，来渲染对应的组件
 * @Author: kcz
 * @Date: 2020-01-02 22:41:48
 * @LastEditors: kcz
 * @LastEditTime: 2020-05-21 22:17:18
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
    :prop="`domains.${index}.${record.model}`"
    :rules="record.rules"
  >
    <!-- 单行文本 -->
    <a-input
      :style="`width:${record.options.width}`"
      v-if="record.type === 'input'"
      :disabled="record.options.disabled || parentDisabled"
      :placeholder="record.options.placeholder"
      :type="record.options.type"
      :allowClear="record.options.clearable"
      :maxLength="record.options.maxLength"
      :value="value"
      @change="handleChange($event.target.value)"
    />
    <!-- 多行文本 -->
    <a-textarea
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'textarea'"
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

    <!-- 日期选择 -->
    <KDatePicker
      v-else-if="record.type === 'date'"
      :parentDisabled="parentDisabled"
      :record="record"
      :value="value"
      @change="handleChange"
    />
    <!-- 时间选择 -->
    <KTimePicker
      v-else-if="record.type === 'time'"
      :parentDisabled="parentDisabled"
      :record="record"
      :value="value"
      @change="handleChange"
    />
    <!-- 数字输入框 -->
    <a-input-number
      v-else-if="record.type === 'number'"
      :style="`width:${record.options.width}`"
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
      :precision="
        record.options.precision > 50 ||
        (!record.options.precision && record.options.precision !== 0)
          ? null
          : record.options.precision
      "
      :disabled="record.options.disabled || parentDisabled"
      :step="record.options.step"
      :placeholder="record.options.placeholder"
      :value="value"
      @change="handleChange"
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
    <!-- 评分 -->
    <a-rate
      v-else-if="record.type === 'rate'"
      :count="record.options.max"
      :disabled="record.options.disabled || parentDisabled"
      :placeholder="record.options.placeholder"
      :allowHalf="record.options.allowHalf"
      :value="value"
      @change="handleChange"
    />
    <!-- 下拉选框 -->
    <a-select
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'select'"
      :placeholder="record.options.placeholder"
      :showSearch="record.options.filterable"
      :options="
        !record.options.dynamic
          ? record.options.options
          : dynamicData[record.options.dynamicKey]
          ? dynamicData[record.options.dynamicKey]
          : []
      "
      :disabled="record.options.disabled || parentDisabled"
      :allowClear="record.options.clearable"
      :mode="record.options.multiple ? 'multiple' : ''"
      :value="value"
      @change="handleChange"
    />
    <!-- 开关 -->
    <a-switch
      v-else-if="record.type === 'switch'"
      :disabled="record.options.disabled || parentDisabled"
      :checked="value"
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
    <!-- 上传图片 -->
    <UploadImg
      v-else-if="record.type === 'uploadImg'"
      :style="`width:${record.options.width}`"
      :parentDisabled="parentDisabled"
      :record="record"
      :value="value"
      @change="handleChange"
    />
    <!-- 上传文件 -->
    <UploadFile
      v-else-if="record.type === 'uploadFile'"
      :style="`width:${record.options.width}`"
      :parentDisabled="parentDisabled"
      :dynamicData="dynamicData"
      :record="record"
      :value="value"
      @change="handleChange"
    />
    <!-- 树选择器 -->
    <a-tree-select
      v-else-if="record.type === 'treeSelect'"
      :style="`width:${record.options.width}`"
      :placeholder="record.options.placeholder"
      :multiple="record.options.multiple"
      :showSearch="record.options.showSearch"
      :treeCheckable="record.options.treeCheckable"
      :treeData="
        !record.options.dynamic
          ? record.options.options
          : dynamicData[record.options.dynamicKey]
          ? dynamicData[record.options.dynamicKey]
          : []
      "
      :disabled="record.options.disabled || parentDisabled"
      :allowClear="record.options.clearable"
      :value="value"
      @change="handleChange"
    />
    <!-- 级联选择器 -->
    <a-cascader
      v-else-if="record.type === 'cascader'"
      :style="`width:${record.options.width}`"
      :placeholder="record.options.placeholder"
      :showSearch="record.options.showSearch"
      :options="
        !record.options.dynamic
          ? record.options.options
          : dynamicData[record.options.dynamicKey]
          ? dynamicData[record.options.dynamicKey]
          : []
      "
      :disabled="record.options.disabled || parentDisabled"
      :allowClear="record.options.clearable"
      :value="value"
      @change="handleChange"
    />
  </a-form-model-item>
  <!-- 文本 -->
  <a-form-model-item v-else-if="record.type === 'text'">
    <div :style="{ textAlign: record.options.textAlign }">
      <label
        :class="{ 'ant-form-item-required': record.options.showRequiredMark }"
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
export default {
  name: "KFormItem",
  props: [
    "record",
    "domains",
    "index",
    "value",
    "parentDisabled",
    "dynamicData"
  ],
  components: {
    UploadImg,
    UploadFile,
    KDatePicker,
    KTimePicker
  },
  computed: {
    customList() {
      if (window.$customComponentList) {
        return window.$customComponentList.map(item => item.type);
      } else {
        return [];
      }
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e);
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
