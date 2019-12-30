<template>
  <a-form-item
    v-if="!['divider', 'button', 'alert', 'text'].includes(record.type)"
    :label="record.name"
    :label-col="config.layout === 'horizontal' ? config.labelCol : {}"
    :wrapper-col="config.layout === 'horizontal' ? config.wrapperCol : {}"
  >
    <!-- 单行文本 -->
    <a-input
      :style="`width:${record.options.width}`"
      v-if="record.type === 'input'"
      :disabled="record.options.disabled"
      :placeholder="record.options.placeholder"
      v-decorator="[
        record.model, // input 的 name
        {
          initialValue: record.options.defaultValue, // 默认值
          rules: record.rules // 验证规则
        }
      ]"
    />
    <!-- 多行文本 -->
    <a-textarea
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'textarea'"
      :autosize="{
        minRows: record.options.minRows,
        maxRows: record.options.maxRows
      }"
      :disabled="record.options.disabled"
      :placeholder="record.options.placeholder"
      :rows="4"
      v-decorator="[
        record.model, // input 的 name
        {
          initialValue: record.options.defaultValue, // 默认值
          rules: record.rules // 验证规则
        }
      ]"
    />
    <!-- 月份选择 -->
    <a-monthPicker
      :style="`width:${record.options.width}`"
      v-else-if="
        record.type === 'date' &&
          record.options.format === 'YYYY-MM' &&
          record.options.range === false
      "
      :disabled="record.options.disabled"
      :allowClear="record.options.clearable"
      :placeholder="record.options.placeholder"
      :format="record.options.format"
      v-decorator="[
        record.model, // input 的 name
        {
          initialValue: record.options.defaultValue
            ? moment(record.options.defaultValue, record.options.format)
            : null, // 默认值
          rules: record.rules // 验证规则
        }
      ]"
    />
    <!-- 日期选择 -->
    <a-date-picker
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'date' && record.options.range === false"
      :disabled="record.options.disabled"
      :show-time="record.options.showTime"
      :allowClear="record.options.clearable"
      :placeholder="record.options.placeholder"
      :format="record.options.format"
      v-decorator="[
        record.model, // input 的 name
        {
          initialValue: record.options.defaultValue
            ? moment(record.options.defaultValue, record.options.format)
            : null, // 默认值
          rules: record.rules // 验证规则
        }
      ]"
    />

    <!-- 范围日期选择 -->
    <a-range-picker
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'date' && record.options.range === true"
      :show-time="record.options.showTime"
      :disabled="record.options.disabled"
      :allowClear="record.options.clearable"
      :placeholder="record.options.rangePlaceholder"
      :format="record.options.format"
      v-decorator="[
        record.model, // input 的 name
        {
          rules: record.rules // 验证规则
        }
      ]"
    />
    <!-- 时间选择 -->
    <a-time-picker
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'time'"
      :disabled="record.options.disabled"
      :allowEmpty="record.options.clearable"
      :placeholder="record.options.placeholder"
      :format="record.options.format"
      v-decorator="[
        record.model, // input 的 name
        {
          initialValue: record.options.defaultValue
            ? moment(record.options.defaultValue, record.options.format)
            : null, // 默认值
          rules: record.rules // 验证规则
        }
      ]"
    />
    <!-- 计数器 -->
    <a-input-number
      v-else-if="record.type === 'number'"
      :style="`width:${record.options.width}`"
      :min="record.options.min"
      :max="record.options.max"
      :disabled="record.options.disabled"
      :step="record.options.step"
      :placeholder="record.options.placeholder"
      v-decorator="[
        record.model,
        {
          initialValue: record.options.defaultValue,
          rules: record.rules
        }
      ]"
    />
    <!-- 单选框 -->
    <a-radio-group
      v-else-if="record.type === 'radio'"
      :options="record.options.options"
      :disabled="record.options.disabled"
      :placeholder="record.options.placeholder"
      v-decorator="[
        record.model,
        {
          initialValue: record.options.defaultValue,
          rules: record.rules
        }
      ]"
    />
    <!-- 多选框 -->
    <a-checkbox-group
      v-else-if="record.type === 'checkbox'"
      :options="record.options.options"
      :disabled="record.options.disabled"
      :placeholder="record.options.placeholder"
      v-decorator="[
        record.model,
        {
          initialValue: record.options.defaultValue,
          rules: record.rules
        }
      ]"
    />
    <!-- 评分 -->
    <a-rate
      v-else-if="record.type === 'rate'"
      :count="record.options.max"
      :options="record.options.options"
      :disabled="record.options.disabled"
      :placeholder="record.options.placeholder"
      :allowHalf="record.options.allowHalf"
      v-decorator="[
        record.model,
        {
          initialValue: record.options.defaultValue,
          rules: record.rules
        }
      ]"
    />
    <!-- 下拉选框 -->
    <a-select
      :style="`width:${record.options.width}`"
      v-else-if="record.type === 'select'"
      :placeholder="record.options.placeholder"
      :showSearch="record.options.filterable"
      :options="record.options.options"
      :disabled="record.options.disabled"
      :allowClear="record.options.clearable"
      :mode="record.options.multiple ? 'multiple' : ''"
      v-decorator="[
        record.model,
        {
          initialValue: record.options.defaultValue,
          rules: record.rules
        }
      ]"
    />
    <!-- 开关 -->
    <a-switch
      v-else-if="record.type === 'switch'"
      :disabled="record.options.disabled"
      :defaultChecked="record.options.defaultValue"
      v-decorator="[
        record.model,
        {
          initialValue: record.options.defaultValue,
          rules: record.rules
        }
      ]"
    />
    <!-- 滑块 -->
    <div
      v-else-if="record.type === 'slider'"
      :style="`width:${record.options.width}`"
      class="slider-box"
    >
      <div class="slider">
        <a-slider
          :disabled="record.options.disabled"
          :min="record.options.min"
          :max="record.options.max"
          :step="record.options.step"
          v-decorator="[
            record.model,
            {
              initialValue: record.options.defaultValue,
              rules: record.rules
            }
          ]"
        />
      </div>
      <div class="number" v-if="record.options.showInput">
        <a-input-number
          style="width:100%"
          :disabled="record.options.disabled"
          :min="record.options.min"
          :max="record.options.max"
          :step="record.options.step"
          v-decorator="[
            record.model,
            {
              initialValue: record.options.defaultValue
            }
          ]"
        />
      </div>
    </div>
  </a-form-item>
  <!-- button按钮 -->
  <a-form-item
    v-else-if="record.type === 'button'"
    :wrapper-col="
      config.layout === 'horizontal'
        ? { ...config.wrapperCol, offset: config.labelCol.span }
        : {}
    "
  >
    <a-button
      v-if="record.options.handle === 'submit'"
      :disabled="record.options.disabled"
      :type="record.options.type"
      html-type="submit"
      v-text="record.name"
    ></a-button>
    <a-button
      v-else
      :disabled="record.options.disabled"
      :type="record.options.type"
      @click="$emit('handleReset')"
      v-text="record.name"
    ></a-button>
  </a-form-item>
  <!-- alert提示 -->
  <a-form-item v-else-if="record.type === 'alert'">
    <a-alert
      :message="record.name"
      :description="record.options.description"
      :type="record.options.type"
      :showIcon="record.options.showIcon"
      :closable="record.options.closable"
      :banner="record.options.banner"
    />
  </a-form-item>
  <!-- alert提示 -->
  <a-form-item v-else-if="record.type === 'text'">
    <div :style="{ textAlign: record.options.textAlign }">
      <label
        :class="{ 'ant-form-item-required': record.options.showRequiredMark }"
        v-text="record.name"
      ></label>
    </div>
  </a-form-item>
  <div v-else>
    <!-- 分割线 -->
    <a-divider
      v-if="
        record.type === 'divider' &&
          record.name !== '' &&
          record.options.orientation
      "
      :orientation="record.options.orientation"
      >{{ record.name }}</a-divider
    >
    <a-divider v-else-if="record.type === 'divider' && record.name !== ''">
      {{ record.name }}
    </a-divider>
    <a-divider v-else-if="record.type === 'divider' && record.name === ''" />
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import moment from "moment";
export default {
  name: "KFormItem",
  props: {
    // 表单数组
    record: {
      type: Object,
      default: () => {}
    },
    // form-item 宽度配置
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    moment
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
